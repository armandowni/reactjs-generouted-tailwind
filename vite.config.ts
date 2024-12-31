import generouted from "@generouted/react-router/plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    macrosPlugin(),
    generouted({
      output: "./src/services/router.ts"
    })
  ],
  resolve: { alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }] },
  server: { port: parseInt(process.env.VITE_PORT ?? "3000") },
  preview: { port: parseInt(process.env.VITE_PORT ?? "3000") },
  build: {
    outDir: "build",
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[hash].js",
        chunkFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash].[ext]"
      },
      onwarn(warning, defaultHandler) {
        if (warning.code === "SOURCEMAP_ERROR") {
          return;
        }
        defaultHandler(warning);
      }
    }
  }
});
