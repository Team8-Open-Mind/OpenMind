module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-refresh', 'react-hooks', 'jsx-a11y', 'prettier', 'import'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'off', // todo: provider 훅을 분리하든지 옮기든지. 컴포넌트만 export 해야지 개발 과정에서 fast refresh 효과 받을 수 있음. 아니면 그냥 꺼두던지
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/destructuring-assignment': 'off',
    'no-use-before-define': 'off', // styled component를 위해 규칙 off
    'no-unsafe-optional-chaining': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['function', 'block'], next: '*' },
      {
        blankLine: 'always',
        prev: ['return', 'try', 'if', 'while', 'iife', 'for'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'try', 'if', 'while', 'iife', 'for', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: ['multiline-const', 'multiline-let', 'multiline-var'],
      },
    ],
    'no-unused-vars': 'error',
    'no-alert': 'off',
    'no-console': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-fragments': 'off',
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type', 'unknown'],
        pathGroups: [
          {
            pattern: '{react*,react*/**,react-dom/**,@tanstack/react-query/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@{layout,pages,components,assets}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@{lib,utils,hooks,event,api}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@{store,slice}/**/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@pages/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '@components/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '{.,..}/**/*.style',
            group: 'unknown',
          },
          {
            pattern: '*.style',
            group: 'unknown',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
    'import/no-absolute-path': 'off',
  },
};
