import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),         // one-line summary for cards
    order: z.number().optional(),    // display order on home page
    image: z.string().optional(),    // path under public/images/
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    vertical: z.enum(['Utilities', 'Life Sciences', 'Other']),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().optional(),          // sort order within vertical and among featured
    featured: z.boolean().default(false),  // show in "Recent Work" on home page
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('KSM Team'),
    tags: z.array(z.string()),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { services, 'case-studies': caseStudies, blog };
