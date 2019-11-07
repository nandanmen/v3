module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-unescaped-entities': 0,
    'react/no-danger': 0,
  },
  env: {
    browser: true,
    node: true,
  },
}
