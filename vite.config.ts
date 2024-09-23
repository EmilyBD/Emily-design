/*
 * @Author: sheldon5 sheldonhit@gmail.com
 * @Date: 2024-09-20 14:19:18
 * @LastEditors: sheldon5 sheldonhit@gmail.com
 * @LastEditTime: 2024-09-23 14:44:41
 * @FilePath: \emily-design\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './'
});
