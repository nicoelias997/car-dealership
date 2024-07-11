module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "react/prp-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/naming-convention": "off"
  },
};
// Lo tengo deshabilitado, instalarlo luego
