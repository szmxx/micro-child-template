module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-debugger": 0,
    "no-empty": 0,
    "no-async-promise-executor": 0,
    "no-prototype-builtins": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }]
  }
};
