import net from 'node:net';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * OpenPets IPC connector for Mowglai workflows.
 * Communicates directly with desktop OpenPets companions.
 */
function getOpenPetsIpc() {
  const ipcPath = path.join(
    process.env.APPDATA || path.join(os.homedir(), 'AppData', 'Roaming'),
    'OpenPets',
    'runtime',
    'ipc.json'
  );
  if (!fs.existsSync(ipcPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(ipcPath, 'utf8'));
  } catch {
    return null;
  }
}

function sendRequest(ipc, method, params = {}) {
  return new Promise((resolve) => {
    const socket = net.createConnection(ipc.endpoint);
    const req = {
      id: crypto.randomUUID(),
      version: 1,
      token: ipc.token,
      method,
      params
    };

    const timer = setTimeout(() => {
      socket.destroy();
      resolve(null);
    }, 4000);

    socket.on('connect', () => {
      socket.write(JSON.stringify(req) + '\n');
    });

    let buffer = '';
    socket.on('data', (chunk) => {
      buffer += chunk.toString('utf8');
      const idx = buffer.indexOf('\n');
      if (idx !== -1) {
        clearTimeout(timer);
        try {
          const res = JSON.parse(buffer.slice(0, idx));
          socket.destroy();
          resolve(res);
        } catch {
          socket.destroy();
          resolve(null);
        }
      }
    });

    socket.on('error', () => {
      clearTimeout(timer);
      socket.destroy();
      resolve(null);
    });
  });
}

export async function notifyPixelTerminal(message, reaction = 'working', petId = 'pixel-terminal') {
  const ipc = getOpenPetsIpc();
  if (!ipc) {
    console.log('[OpenPets] OpenPets is not currently running on desktop.');
    return false;
  }

  try {
    // Acquire lease for requested pet
    let leaseRes = await sendRequest(ipc, 'lease.acquire', { requestedPetId: petId });

    // If requested pet is not yet installed and it's pixel-terminal, auto-install from local ./pet folder
    if (leaseRes?.result?.usingDefaultPet && petId === 'pixel-terminal') {
      const localPetDir = path.resolve(__dirname, '../pet');
      if (fs.existsSync(path.join(localPetDir, 'pet.json'))) {
        console.log('[OpenPets] Installing pixel-terminal from local repository folder...');
        await sendRequest(ipc, 'pets.install-local', { path: localPetDir, kind: 'folder' });
        leaseRes = await sendRequest(ipc, 'lease.acquire', { requestedPetId: petId });
      }
    }

    const leaseId = leaseRes?.result?.leaseId;
    const actualPet = leaseRes?.result?.actualTargetPetName || petId;

    const sayRes = await sendRequest(ipc, 'pet.say', {
      message,
      reaction,
      leaseId
    });

    if (sayRes?.result?.ok) {
      console.log(`[OpenPets (${actualPet})] "${message}" [${reaction}]`);
      return true;
    }
    return false;
  } catch (err) {
    console.warn('[OpenPets] Could not send message to pet:', err.message);
    return false;
  }
}

// CLI execution support: node scripts/pixel-pet-notify.mjs "Message" [reaction] [petId]
if (process.argv[1] && process.argv[1].endsWith('pixel-pet-notify.mjs')) {
  const msg = process.argv[2] || 'Mowglai workflow in progress...';
  const reaction = process.argv[3] || 'working';
  const targetPet = process.argv[4] || 'pixel-terminal';
  await notifyPixelTerminal(msg, reaction, targetPet);
}
