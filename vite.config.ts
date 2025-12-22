import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/coffee-shop/",
  plugins: [tailwindcss()],
});
