module.exports = {
  root: true,
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
    // Eslint rules placeholder
  },
};
