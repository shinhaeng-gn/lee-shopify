import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    // 1. 빌드 결과물을 Shopify assets 폴더로 보냅니다.
    outDir: 'assets',
    emptyOutDir: false, // assets 폴더의 기존 파일들을 지우지 않도록 설정
    lib: {
      // 2. 여러 컴포넌트를 하나의 파일로 묶거나, 특정 파일명을 유지하도록 설정합니다.
      entry: resolve(__dirname, 'src-react/main.jsx'),
      name: 'ReactComponents',
      fileName: (format) => `react-components.js`,
      formats: ['iife'], // 브라우저에서 바로 실행 가능한 형태
    },
    rollupOptions: {
      // 3. 외부 라이브러리가 필요한 경우 여기에 설정할 수 있습니다.
      output: {
        extend: true,
      },
    },
  },
  define: {
    'process.env': {}, // React 등에서 필요한 환경변수 에러 방지
  },
});
