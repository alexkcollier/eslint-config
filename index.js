module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['standard', 'prettier'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'no-debugger': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 100
      }
    ]
  }
}
