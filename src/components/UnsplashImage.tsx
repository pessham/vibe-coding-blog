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
    // API制限回避のため、カテゴリーに応じた固定画像を使用
    const getStaticImageUrl = (query: string) => {
      if (query.includes('manufacturing') || query.includes('factory')) {
        return 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('agriculture') || query.includes('farming')) {
        return 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('business') || query.includes('office')) {
        return 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      if (query.includes('tourism') || query.includes('travel')) {
        return 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
      }
      // デフォルト：テクノロジー/AI関連
      return 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
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
