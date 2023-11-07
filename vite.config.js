import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// added the import eslint below manually
// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  //added eslint as one of the plugins below
  plugins: [react()],
});
