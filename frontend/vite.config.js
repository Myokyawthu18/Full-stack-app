import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // (သင့် backend run နေတဲ့ port အမှန်)
        changeOrigin: true,
      },
    },
  },
});

