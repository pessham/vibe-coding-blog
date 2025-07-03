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
    if (!UNSPLASH_ACCESS_KEY) {
      console.error('Unsplash Access Key is not defined.');
      setLoading(false);
      return;
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
        const data = await response.json();
        if (data.urls && data.urls.regular) {
          setImageUrl(data.urls.regular);
        } else {
          console.error('No image found for query:', query);
        }
      } catch (error) {
        console.error('Error fetching image from Unsplash:', error);
      }
      setLoading(false);
    };

    fetchImage();
  }, [query]);

  if (loading) {
    return <div className={`${className} bg-gray-300 animate-pulse`} ></div>;
  }

  if (imageUrl) {
    return <img src={imageUrl} alt={alt} className={`${className} object-cover`} />;
  }

  return (
    <div className={`${className} bg-gray-800 flex items-center justify-center`}>
      <span className="text-white text-2xl font-bold">{fallbackText || 'Image'}</span>
    </div>
  );
}
