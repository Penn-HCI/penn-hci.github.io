// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "dist",
  site: "https://pennhci.com",
  trailingSlash: "ignore",
  vite: {
    server: {
      allowedHosts: ["hci.tunnel.speculative.tech"],
    },
  },
});
