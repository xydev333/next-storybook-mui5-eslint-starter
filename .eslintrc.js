module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['storybook', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'prettier',
  ],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': 0,
    'react/display-name': 'off',
    //#region  //*=========== Unused Import ===========
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //#endregion  //*======== Unused Import ===========
    //#region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'], // {s}css files
          ['^.+\\.s?csxs$'], // Lib and hooks
          ['^@/lib', '^@/hooks', '^@/utils'], // static data
          ['^@/data'], // components
          ['^@/components', '^@/container', '^@/stories'], // zustand store
          ['^@/store'], // Other imports
          ['^@/'], // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'], // other that didnt fit in
          ['^'],
        ],
      },
    ], //#endregion  //*======== Import Sort ===========
    eqeqeq: [2, 'smart'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'eol-last': ['error', 'always'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    React: true,
    JSX: true,
  },
};
