import { defineConfig } from 'vite'
import litCss from "rollup-plugin-lit-css";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
          litCss()
      ]
    }
  },
  resolve: {
    alias: {
      "~services": "./src/services",
      "~components": "./src/components",
      "~utils": "./src/utils",
      "~assets": "./assets",
      "~src": "./src"
    },
  }
})
