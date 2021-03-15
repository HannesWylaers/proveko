module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'max-len': [1, 120, 4],
    'vue/comment-directive': 'off',
  }
}
