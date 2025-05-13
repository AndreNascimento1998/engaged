import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { quasar } from "@quasar/vite-plugin";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    quasar({
      sassVariables: fileURLToPath(
        new URL("./src/quasar-variables.sass", import.meta.url)
      ),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
