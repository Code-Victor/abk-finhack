// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bcn.theradiating.church",
  integrations: [react(), tailwind(), icon(), sitemap()],
});
