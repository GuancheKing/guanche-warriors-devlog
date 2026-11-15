
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const devlog = defineCollection({
	loader: glob({
		base: "./src/content/devlog",
		pattern: "**/*.md"
	}),

	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		category: z.enum([
			"Programming",
			"Art & Design",
			"Game Design",
			"Production",
            "Unity & Learning"
		]),
        series: z.enum([
            "guanche-warriors",
            "developer-notes"
        ]).default("guanche-warriors"),
		cover: z.string().optional(),
		draft: z.boolean().default(false)
	})
});

export const collections = {
	devlog
};
