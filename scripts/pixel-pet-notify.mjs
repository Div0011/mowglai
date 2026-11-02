import net from 'node:net';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

/**
 * OpenPets IPC connector for Mowglai workflows.
 * Communicates directly with the installed 'pixel-terminal' pet on desktop.
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
    }, 3000);

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

export async function notifyPixelTerminal(message, reaction = 'working') {
  const ipc = getOpenPetsIpc();
  if (!ipc) {
    console.log('[PixelTerminal] OpenPets is not currently running on desktop.');
    return false;
  }

  try {
    // Acquire lease for pixel-terminal
    const leaseRes = await sendRequest(ipc, 'lease.acquire', { requestedPetId: 'pixel-terminal' });
    const leaseId = leaseRes?.result?.leaseId;

    const sayRes = await sendRequest(ipc, 'pet.say', {
      message,
      reaction,
      leaseId
    });

    return sayRes?.result?.ok === true;
  } catch (err) {
    console.warn('[PixelTerminal] Could not send message to pet:', err.message);
    return false;
  }
}

// CLI execution support: node scripts/pixel-pet-notify.mjs "Message" "reaction"
if (process.argv[1] && process.argv[1].endsWith('pixel-pet-notify.mjs')) {
  const msg = process.argv[2] || 'Mowglai workflow in progress...';
  const reaction = process.argv[3] || 'working';
  notifyPixelTerminal(msg, reaction).then((ok) => {
    if (ok) {
      console.log(`[PixelTerminal] Displayed "${msg}" [${reaction}]`);
    }
  });
}
