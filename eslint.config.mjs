import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  extends: ['next/core-web-vitals'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
});
