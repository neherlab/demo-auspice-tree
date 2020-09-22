module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-redux/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['import', 'react', 'react-hooks', 'react-redux', 'only-warn', 'prettier'],
  reportUnusedDisableDirectives: true,
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'warn',
    'react/prop-types': 'off',
  },
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
