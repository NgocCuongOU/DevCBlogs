/* eslint-disable prettier/prettier */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': 'error',
    'prettier/prettier': 0,
    camelcase: 'off',
    'no-undef': 'off', // ts(2304)
    'no-redeclare': 'off', // ts(2451)
    'no-console': 'off', // available console.log()
    'vue/no-v-html': 'off',
    'no-unused-vars': 'off',
    'array-callback-return': 'error',
    'dot-notation': 'error',
    'no-implicit-coercion': 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    eqeqeq: ['error', 'smart'],
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ],
    'padding-line-between-statements': [
      'error',
      // Require blank lines after all directive prologues (e. g. 'use strict')
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*'
      },
      // Disallow blank lines between all directive prologues (e. g. 'use strict')
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive'
      },
      // Require blank lines after every sequence of variable declarations
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      // Blank lines could be between variable declarations
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      // Require blank lines before all return statements
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      // Require blank lines before and after all following statements
      {
        blankLine: 'always',
        prev: '*',
        next: ['for', 'function', 'if', 'switch', 'try']
      },
      {
        blankLine: 'always',
        prev: ['for', 'function', 'if', 'switch', 'try'],
        next: '*'
      }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-object-spread': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'Home',
          'Header',
          'Footer',
          'Blogs',
          'ForgotPassword',
          'Login',
          'Register',
          'Modal',
          'Loading'
        ]
      }
    ],
    '@typescript-eslint/no-empty-function': 'off',
    'vue/valid-template-root': 'off'
  }
}
