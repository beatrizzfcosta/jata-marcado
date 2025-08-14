module.exports = {
  '*.{ts,tsx}': [
    'eslint --fix --ignore-pattern "node_modules/**"',
    'prettier --write',
  ],
  '*.{md,json}': [
    'prettier --write --ignore-path .gitignore',
  ],
}; 