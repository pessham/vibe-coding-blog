import { useEffect } from 'react';
import type { SEOProps } from '../types/blog';

interface SEOComponentProps extends SEOProps {
  url?: string;
  type?: 'website' | 'article';
}

export default function SEO({
  title = '地方AIブースター',
  description = '製造業・観光業・農業の現場を生成AIで変革する実践ガイド。地方企業が一番早くAIを導入・活用するためのノウハウとケーススタディを提供します。',
  keywords = [],
  image = '/og-image.jpg',
  url = '',
  type = 'website',
}: SEOComponentProps) {
  const siteTitle = title === '地方AIブースター' ? title : `${title} | 地方AIブースター`;
  
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
    
    // Additional SEO tags for 地方AIブースター
    updateMeta('robots', 'index, follow');
    updateMeta('author', 'ペスハム');
    updateMeta('viewport', 'width=device-width, initial-scale=1');
    updateMeta('language', 'ja');
    updateMeta('geo.region', 'JP');
    updateMeta('geo.country', 'Japan');
    
    // 地方AIブースター固有のSEOタグ
    updateMeta('theme-color', '#18634B');
    updateMeta('application-name', '地方AIブースター');
    
    // 構造化データ用のメタタグ
    updateMeta('article:author', 'ペスハム');
    updateMeta('article:publisher', '地方AIブースター', true);
    
    // 検索エンジン最適化
    if (keywords.length === 0) {
      updateMeta('keywords', '地方AI,生成AI,製造業DX,観光業DX,農業DX,AI導入,ローカルAI,現場改善,AI活用,スマート農業,中小企業AI,地域企業');
    }
    
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