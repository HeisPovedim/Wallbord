module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [0, 'ignorePackages'],
  },
  settings: {
    'import/internal-regex': '^@',
    'import/resolver': {
      typescript: {},
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
        extensions: ['.ts'],
      },
    },
  },
};
