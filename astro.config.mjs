// @ts-check
import { defineConfig } from "astro/config";
import warnLargeImages from "./warn-large-images.mjs";

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "dist",
  site: "https://pennhci.com",
  trailingSlash: "ignore",
  integrations: [warnLargeImages()],
  vite: {
    server: {
      allowedHosts: ["hci.tunnel.speculative.tech"],
    },
  },
});
