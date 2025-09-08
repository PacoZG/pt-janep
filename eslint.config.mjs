import js from '@eslint/js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'next',
    'prettier'
  ),
  {
    ignores: [
      '**/dist',
      '**/coverage',
      '**/vitest.config.mts',
      '**/.eslint.config.js',
      '**/public',
      '**/node_modules/**',
    ],
  },
  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'next': {},
      'prettier': {},
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      'no-console': 'error',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'no-use-before-define': 'error',
      'no-shadow': 'off',
      'no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['return', 'throw'],
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
    },
  },
]

export default eslintConfig
