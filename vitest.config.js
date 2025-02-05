import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 브라우저 환경에서 테스트 실행
    globals: true, // Jest 스타일의 글로벌 매처 사용 가능
    setupFiles: './src/setupTests.ts', // 테스트 환경 설정 파일
  },
});
