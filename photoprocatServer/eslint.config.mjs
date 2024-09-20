import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-undef': 'off',
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^value|^_|_activeThumb' },
      ],
      indent: ['error', 2],
      'no-mixed-spaces-and-tabs': 'error',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'var', next: 'function' },
        { blankLine: 'always', prev: 'function', next: 'function' },
        { blankLine: 'always', prev: 'function', next: 'var' },
        { blankLine: 'always', prev: 'block-like', next: 'block-like' },
        { blankLine: 'never', prev: 'import', next: 'import' },
        {
          blankLine: 'always',
          prev: 'block-like',
          next: 'multiline-block-like',
        },
      ],
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }], // Ограничение на количество пустых строк
      'no-trailing-spaces': 'error', // Запрещает пробелы в конце строк
      'no-whitespace-before-property': 'error', // Запрещает пробелы перед свойствами
      'keyword-spacing': ['error', { before: true, after: true }], // Пробелы перед и после ключевых слов
      'space-before-function-paren': ['error', 'always'], // Пробел перед скобкой функции
      'object-curly-spacing': ['error', 'always'], // Пробелы внутри фигурных скобок
      'array-bracket-spacing': ['error', 'never'], // Пробелы внутри квадратных скобок
    },
  },
];
