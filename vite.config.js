import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
      },
      // output: {
      //   assetFileNames: 'assets/[name][extname]',
      // },
    },
  },
})
