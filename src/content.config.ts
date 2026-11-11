import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    vertical: z.enum(['Utilities', 'Life Sciences', 'Other']),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('KSM Team'),
    tags: z.array(z.string()),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['Technology', 'Industry']),
    description: z.string(),
    logo: z.string(),
    url: z.string().url(),
    order: z.number().optional(),
  }),
});

export const collections = { 'case-studies': caseStudies, blog, partners };
