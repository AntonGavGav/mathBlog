import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.enum(['EventfulLynx915', 'Shuniji']),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        date: z.date(),
        pinned: z.boolean().optional().default(false),
    }),
});

export const collections = {
    'blog': blogCollection,
};