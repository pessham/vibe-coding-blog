import { useState, useEffect } from 'react';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

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
    console.log('UnsplashImage: API Key exists:', !!UNSPLASH_ACCESS_KEY);
    console.log('UnsplashImage: Query:', query);
    
    if (!UNSPLASH_ACCESS_KEY) {
      console.error('Unsplash Access Key is not defined.');
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}`;
        console.log('UnsplashImage: Fetching from:', url);
        
        const response = await fetch(url);
        console.log('UnsplashImage: Response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('UnsplashImage: API Error:', response.status, errorText);
          setLoading(false);
          return;
        }
        
        const data = await response.json();
        console.log('UnsplashImage: Response data:', data);
        
        if (data.urls && data.urls.regular) {
          console.log('UnsplashImage: Setting image URL:', data.urls.regular);
          setImageUrl(data.urls.regular);
        } else {
          console.error('UnsplashImage: No image found for query:', query, data);
        }
      } catch (error) {
        console.error('UnsplashImage: Fetch error:', error);
      }
      setLoading(false);
    };

    fetchImage();
  }, [query]);

  if (loading) {
    return <div className={`${className} bg-gray-300 animate-pulse`} ></div>;
  }

  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt={alt} 
        className={`${className} object-cover`}
        onLoad={() => console.log('UnsplashImage: Image loaded successfully')}
        onError={(e) => console.error('UnsplashImage: Image load error:', e)}
      />
    );
  }

  return (
    <div className={`${className} bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center`}>
      <span className="text-white text-2xl font-bold">{fallbackText || 'Image'}</span>
    </div>
  );
}
