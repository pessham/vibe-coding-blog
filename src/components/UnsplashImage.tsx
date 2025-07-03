import { useState, useEffect } from 'react';

interface UnsplashImageProps {
  query: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export default function UnsplashImage({ query, width: _width, height: _height, alt, className, fallbackText }: UnsplashImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TOPページとの一貫性を保つため、統一された画像セットを使用
    const getStaticImageUrl = (query: string) => {
      if (query.includes('manufacturing') || query.includes('factory')) {
        return 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('agriculture') || query.includes('farming')) {
        return 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('business') || query.includes('office') || query.includes('small business')) {
        return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('tourism') || query.includes('travel')) {
        return 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('ai') || query.includes('artificial intelligence')) {
        return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      // デフォルト：地方AIブースターのメインテーマに合わせたビジネス・テクノロジー
      return 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
    };

    const staticImageUrl = getStaticImageUrl(query);
    setImageUrl(staticImageUrl);
    setLoading(false);
  }, [query]);

  if (loading) {
    return <div className={`${className} bg-gray-300 animate-pulse`} ></div>;
  }

  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt={alt} 
        className={className}
      />
    );
  }

  return (
    <div className={`${className} bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center`}>
      <span className="text-white text-2xl font-bold">{fallbackText || 'Image'}</span>
    </div>
  );
}
