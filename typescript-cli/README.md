# TypeScript CLI Template

Minimal TypeScript CLI application template with a ready-to-use development
workflow.

## Included

- TypeScript with strict compiler settings
- ESLint and Prettier
- Vitest
- Conventional Commit validation
- Husky pre-commit and commit-msg hooks
- pnpm workspace settings

## Usage

1. Copy this directory to a new project.
2. Update `name`, `description`, and `bin` in `package.json`.
3. Replace the example implementation in `src/index.ts` and its test.
4. Run `pnpm install`.
5. Run `pnpm build`, `pnpm lint`, `pnpm typecheck`, and `pnpm test`.

The generated CLI entry point is `dist/index.js`.
