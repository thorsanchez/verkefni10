import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import { VitePWA } from 'vite-plugin-pwa';

const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'whereuat.html',
        shaderOne: 'file.js',
        shaderOne: 'counter.js',
        shaderOne: 'main.js',
        // ...
        // List all files you want in your build
      }
    }
  }
})