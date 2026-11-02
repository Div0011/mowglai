import net from 'node:net';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    }, 10000);

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

export async function installPetTarget(targetName) {
  const ipc = getOpenPetsIpc();
  if (!ipc) {
    console.error('[OpenPets] OpenPets app is not running. Please launch OpenPets first.');
    return false;
  }

  const projectRoot = path.resolve(__dirname, '..');
  const petsDir = path.join(projectRoot, 'pets');
  const petDir = path.join(projectRoot, 'pet');

  // If install all
  if (targetName === '--all' || targetName === 'all') {
    if (!fs.existsSync(petsDir)) {
      console.log('[OpenPets] No pets/ directory found.');
      return false;
    }
    const zips = fs.readdirSync(petsDir).filter(f => f.endsWith('.zip'));
    console.log(`[OpenPets] Installing ${zips.length} pets from pets/ folder...`);
    let successCount = 0;
    for (const zip of zips) {
      const fullPath = path.join(petsDir, zip);
      const res = await sendRequest(ipc, 'pets.install-local', { path: fullPath, kind: 'zip' });
      if (res?.result?.ok) {
        console.log(`  ✓ Installed ${res.result.displayName} (${res.result.petId})`);
        successCount++;
      } else {
        console.warn(`  ✗ Failed: ${zip} (${res?.error?.message || 'unknown error'})`);
      }
    }
    console.log(`[OpenPets] Installed ${successCount}/${zips.length} pets successfully!`);
    return true;
  }

  // If specific name or default
  const query = targetName ? targetName.toLowerCase().replace(/\.zip$/, '') : 'pixel-terminal';

  // 1. Check if folder in pet/
  if (query === 'pixel-terminal' && fs.existsSync(path.join(petDir, 'pet.json'))) {
    console.log(`[OpenPets] Installing '${query}' from local pet folder...`);
    const res = await sendRequest(ipc, 'pets.install-local', { path: petDir, kind: 'folder' });
    if (res?.result?.ok) {
      console.log(`[OpenPets] Installed ${res.result.displayName} (${res.result.petId})!`);
      return true;
    }
  }

  // 2. Check if matching zip in pets/
  if (fs.existsSync(petsDir)) {
    const directZip = path.join(petsDir, `${query}.zip`);
    if (fs.existsSync(directZip)) {
      console.log(`[OpenPets] Installing '${query}' from ${directZip}...`);
      const res = await sendRequest(ipc, 'pets.install-local', { path: directZip, kind: 'zip' });
      if (res?.result?.ok) {
        console.log(`[OpenPets] Installed ${res.result.displayName} (${res.result.petId})!`);
        return true;
      }
    }

    // Search partial match in pets/
    const allZips = fs.readdirSync(petsDir).filter(f => f.endsWith('.zip'));
    const matched = allZips.find(z => z.toLowerCase().includes(query));
    if (matched) {
      const fullZip = path.join(petsDir, matched);
      console.log(`[OpenPets] Installing matched pet '${matched}'...`);
      const res = await sendRequest(ipc, 'pets.install-local', { path: fullZip, kind: 'zip' });
      if (res?.result?.ok) {
        console.log(`[OpenPets] Installed ${res.result.displayName} (${res.result.petId})!`);
        return true;
      }
    }
  }

  console.error(`[OpenPets] Could not find pet matching '${query}' in pet/ or pets/ folder.`);
  return false;
}

if (process.argv[1] && process.argv[1].endsWith('pixel-pet-install.mjs')) {
  const arg = process.argv[2];
  installPetTarget(arg);
}
