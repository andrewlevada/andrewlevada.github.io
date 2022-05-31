import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        // litScss()
          // litCss({
          //   include: ["/**/*.scss", "/**/*.css"],
          //   transform: (data, { filePath }) => compileString(data).css
          // })
      ]
    }
  },
  resolve: {
    alias: {
      "~services": "/src/services",
      "~components": "/src/components",
      "~utils": "/src/utils",
      "~styles": "/src/assets/styles",
      "~src": "/src"
    },
  }
})

