import { useEffect } from 'react';
import type { SEOProps } from '../types/blog';

interface SEOComponentProps extends SEOProps {
  url?: string;
  type?: 'website' | 'article';
}

export default function SEO({
  title = 'My Blog',
  description = 'A modern blog built with React, TypeScript, and Sanity CMS',
  keywords = [],
  image = '/og-image.jpg',
  url = '',
  type = 'website',
}: SEOComponentProps) {
  const siteTitle = title === 'My Blog' ? title : `${title} | My Blog`;
  
  useEffect(() => {
    // Update document title
    document.title = siteTitle;
    
    // Update meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMeta('description', description);
    if (keywords.length > 0) {
      updateMeta('keywords', keywords.join(', '));
    }
    
    // Open Graph
    updateMeta('og:type', type, true);
    updateMeta('og:title', siteTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    if (url) {
      updateMeta('og:url', url, true);
    }
    
    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', siteTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    
    // Additional SEO tags
    updateMeta('robots', 'index, follow');
    updateMeta('author', 'Your Name');
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical && url) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonical && url) {
      canonical.setAttribute('href', url);
    }
  }, [siteTitle, description, keywords, image, url, type]);
  
  return null;
}