
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://guancheking.github.io",
	base: "/guanche-warriors-devlog",
	trailingSlash: "always",

	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
