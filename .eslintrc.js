module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    env: {
      browser: true,
    },
    'rules': {
      'arrow-parens': 0,
      'generator-star-spacing': 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-return-assign': 'off',
      'no-extend-native': 'warn',
      'indent': ['error', 4]
    }
  }