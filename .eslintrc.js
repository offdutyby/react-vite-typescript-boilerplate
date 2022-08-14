module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugin: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended', // eslint-plugin-prettier + eslint-config-prettier 동시 적용
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    camelcase: 'error',
    'spaced-comment': 'warn',
    'no-duplicate-imports': 'error',
    '@typescript-eslint/interface-name-prefix': 'on',
    '@typescript-eslint/explicit-function-return-type': 'on',
    '@typescript-eslint/explicit-module-boundary-types': 'on',
    '@typescript-eslint/no-explicit-any': 'on',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // 확장자로 js와 jsx ts tsx 허용하도록 수정
    'no-unused-vars': ['warn'], // 사용하지 않는 변수가 있을때 빌드에러가 나던 규칙 해제
    'no-console': ['warn'], // 콘솔을 쓰면 에러가 나던 규칙 해제
    'react-hooks/exhaustive-deps': ['off'], // hooks의 의존성배열이 충분하지 않을때 강제로 의존성을 추가하는 규칙을 완화
    'react/jsx-props-no-spreading': ['warn', { custom: 'ignore' }], // props spreading을 허용하지 않는 규칙 해제
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'error',
    'no-undef': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
