// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
      },
    ],
  },
};
