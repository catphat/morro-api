module.exports = {
  plugins: ['promise', 'mocha'],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
  },
};
