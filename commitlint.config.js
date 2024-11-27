module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'test',
        'perf',
        'ci',
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};
