import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '');
  const outDir = env.VITE_OUT_DIR || 'build';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {},
          additionalData: `@import "@/assets/css/var.less";`
        }
      },
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    },
    server: {
      port: 3002,
      open: false // 是否自动打开浏览器
    },
    build: {
      outDir,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            antd: ['antd'],
            redux: ['@reduxjs/toolkit', 'react-redux', 'redux-saga']
          }
        }
      }
    },
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
  };
});
