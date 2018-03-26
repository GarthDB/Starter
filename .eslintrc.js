module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },

  "env": {
    "browser": true,
  },

  extends: ['eslint:recommended'],

  rules: {
    'semi': 2,
  },

  overrides: [{
    files: 'test/**/*.js',
  }, ],
}
