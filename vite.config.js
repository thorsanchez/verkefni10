const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'whereuat.html',
        shaderOne: 'main.js',
        tralla: 'file.js',
        Animation: 'counter.js',
        // ...
        // List all files you want in your build
      }
    }
  }
})

