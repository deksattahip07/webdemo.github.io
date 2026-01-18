import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // สำหรับ deploy GitHub Pages
   base: command === "build" ? "/webdemo.github.io/" : "/",

  // alias @ -> src
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}))
