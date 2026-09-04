// eslint.config.js — ESLint 9 flat config. Lints the TS/TSX sources (React
// islands, lib, data helpers) and the Node scripts. Astro files are left to
// `astro check`; build output and generated folders are ignored.
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', '.astro', 'node_modules', 'public', 'src/env.d.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
  },
  {
    // React rules only where React runs; `useTranslations` in src/lib is a
    // build-time helper, not a hook, and must not trip rules-of-hooks.
    files: ['src/components/**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    files: ['scripts/**/*.{js,mjs}', '*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: { globals: { process: 'readonly', console: 'readonly', URL: 'readonly' } },
  },
);
