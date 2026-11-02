# Pixel Terminal Pet (OpenPets Package)

This directory contains the official **Pixel Terminal** desktop pet package for [OpenPets](https://openpets.dev/).

## Package Structure
- `pet.json`: Manifest declaring pet metadata, category, and spritesheet configuration.
- `spritesheet.webp`: High-resolution 1536x1872 pixel animation atlas.

## Installation into OpenPets

### Option 1: Via npm/bun script (Local Folder)
```bash
bun run pet:install
# or
npm run pet:install
```

### Option 2: Via npx
```bash
npx -y install-pet pixel-terminal
```

## Telemetry & Process Interaction
Broadcast live progress from build, test, and dev pipelines:
```bash
bun run pet:notify -- "Workflow message" "working"
```
Reactions supported: `idle`, `thinking`, `working`, `editing`, `running`, `testing`, `waiting`, `waving`, `success`, `error`, `celebrating`.
