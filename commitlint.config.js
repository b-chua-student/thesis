module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['write', 'revise', 'cite', 'data', 'fix', 'structure', 'review', 'meta', 'remove', 'chore'],
    ],
    'scope-case': [1, "always", "lower-case"],
    'scope-empty': [0, "never"],
    'scope-max-length': [2, "always", 100],
  },
};
