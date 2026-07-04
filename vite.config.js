import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from https://daanviralabs.github.io/Daanvira-Labs/ (a project
  // page, not the org root), so asset URLs need this prefix in production.
  base: process.env.GITHUB_ACTIONS ? "/Daanvira-Labs/" : "/",
});
