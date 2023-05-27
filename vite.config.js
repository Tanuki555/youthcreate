import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";import viteCompression from 'vite-plugin-compression'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),viteCompression({
    threshold: 1024000 // 对大于 1mb 的文件进行压缩
  })],
  mode:'hash',
  base:'./',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  build: {
    minify: 'terser', // 必须启用：terserOptions配置才会有效
    terserOptions: {
      compress: {
        // 生产环境时移除console.log调试代码
        drop_console:true,
        drop_debugger: true,
      }
    }
  },
})

 