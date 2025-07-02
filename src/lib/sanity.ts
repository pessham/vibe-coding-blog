import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { BlogPost } from '../types/blog';

// Sanity configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'eeap5n6b',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ queries
export const queries = {
  allPosts: `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{name, slug},
    mainImage,
    categories[]->{title, slug},
    publishedAt,
    body
  }`,
  
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{name, slug},
    mainImage,
    categories[]->{title, slug},
    publishedAt,
    body
  }`,
  
  recentPosts: `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    author->{name, slug},
    mainImage,
    publishedAt,
    body
  }`,
};

// API functions
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(queries.allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch(queries.postBySlug, { slug });
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getRecentPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(queries.recentPosts);
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}