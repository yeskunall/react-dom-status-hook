module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'arrow-parens': 0,
    'react-hooks/rules-of-hooks': 'error',
  },
};
