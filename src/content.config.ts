import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(), // Optional excerpt for projects list
    image: z.string().optional(), // Optional cover image for projects list
  }),
});

export const collections = {
  projects: projectsCollection,
};

