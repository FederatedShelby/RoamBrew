const { FlatCompat } = require('@eslint/eslintrc');
const prettierPlugin = require('eslint-plugin-prettier');
const babelParser = require('@babel/eslint-parser');

const compat = new FlatCompat();

module.exports = [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        babelOptions: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
        requireConfigFile: false,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
