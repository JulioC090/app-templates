# Electron React App Template

Starter template for a cross-platform desktop application built with Electron,
React, Vite, TypeScript, and Tailwind CSS.

## Included

- Electron Forge packaging and platform makers
- Vite builds for the main, preload, and renderer processes
- React 19 with TypeScript
- Tailwind CSS through the Vite plugin
- ESLint and Prettier
- Conventional Commit validation with Husky hooks
- pnpm configuration with lockfile integrity checks

## Usage

1. Copy this directory to a new project.
2. Update `name`, `productName`, and `description` in `package.json`.
3. Update the window title in `index.html` and the starter UI in `src/app.tsx`.
4. Run `pnpm install`.
5. Run `pnpm start` during development.
6. Run `pnpm make` to package the application for the current platform.

The renderer entry point is `src/renderer.ts`. Electron's main and preload
processes are defined in `src/main.ts` and `src/preload.ts`.
