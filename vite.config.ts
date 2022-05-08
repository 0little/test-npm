const path = require('path')
const { defineConfig } = require('vite')
import typescript from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'Button',
      fileName: (format) => `button.${format}.js`
    }
  },
  plugins: [
    typescript()
  ]
})
