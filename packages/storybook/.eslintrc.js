module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:storybook/recommended'],
  rules: {},
}
