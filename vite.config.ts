import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [svelte()],
  base: mode === "production" ? 'spotify-utils' : '',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        nested: '404.html'
      }
    }
  }
}));
