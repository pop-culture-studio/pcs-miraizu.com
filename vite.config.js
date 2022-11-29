import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: 'index.html',
        css: './resources/css/app.css',
      },
      output: {
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          let ext = assetInfo.name.split('.').pop()
          if (/png|jpg|svg|gif/i.test(ext)) {
            ext = 'images'
          }
          return `assets/${ext}/[name].[hash][extname]`
        },
      },
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    handlebars({
      partialDirectory: resolve(__dirname, 'resources/views/'),
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
})
