import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/login.html"),
        quiz: resolve(__dirname, "src/index.html"),
        logout: resolve(__dirname, "src/logout.html"),
        signup: resolve(__dirname, "src/signup.html"),
        results: resolve(__dirname, "src/results.html"),
      },
    },
  },
});
