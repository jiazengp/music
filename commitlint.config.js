module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['release', 'i18n', 'docs', 'netease_api']],
  },
}
