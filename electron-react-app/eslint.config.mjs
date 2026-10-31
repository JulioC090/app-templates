import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/**
 * A custom ESLint configuration
 *
 * @type {import("eslint").Linter.Config}
 * */
export default defineConfig([
  // Recommended JavaScript configuration
  eslintJs.configs.recommended,

  // Recommended TypeScript configuration
  ...tseslint.configs.recommended,

  // Disables rules that conflict with Prettier
  prettierConfig,

  // Recommended rules from the Prettier plugin
  prettierPlugin,

  // Directories ignored by ESLint
  {
    ignores: ['node_modules', 'dist', '.vite'],
  },

  // Language and global environment settings
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // React Hooks and Fast Refresh plugins
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
  },

  {
    rules: {
      // Ensures only components (or optionally constants) are exported from modules,
      // to support fast refresh in React development
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // Prettier custom rules
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          bracketSameLine: false,
          tabWidth: 2,
          endOfLine: 'auto',
        },
      ],
    },
  },
]);
