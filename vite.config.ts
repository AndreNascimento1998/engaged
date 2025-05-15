import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { quasar } from "@quasar/vite-plugin";

export default defineConfig({
  plugins: [
    vue(),
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
  server: {
    host: true,
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
