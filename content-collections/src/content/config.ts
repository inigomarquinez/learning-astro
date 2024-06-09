import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string().max(50, "Title cannot be longer than 50 characters"),
    description: z.string(),
    date: z.date(),
    active: z.boolean(),
    author: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.string(),
  })
});

export const collections = { blog };
