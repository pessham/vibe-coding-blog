import React, { useState, useEffect } from 'react';
import { unsplashService } from '../lib/unsplash';

interface UnsplashImageProps {
  query: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  fallbackText?: string;
}

const UnsplashImage: React.FC<UnsplashImageProps> = ({
  query,
  width = 800,
  height = 600,
  alt,
  className = '',
  fallbackText = 'Image'
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // まずUnsplash Source APIを使用（Access Key不要）
        const sourceUrl = unsplashService.getUnsplashImageUrl(query, width, height);
        setImageUrl(sourceUrl);
      } catch (err) {
        console.error('Failed to load Unsplash image:', err);
        // フォールバック：プレースホルダー画像
        const fallbackUrl = unsplashService.getPlaceholderImageUrl(width, height, fallbackText);
        setImageUrl(fallbackUrl);
        setError('Failed to load image from Unsplash');
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      loadImage();
    }
  }, [query, width, height, fallbackText]);

  const handleImageError = () => {
    // 画像の読み込みに失敗した場合のフォールバック
    const fallbackUrl = unsplashService.getPlaceholderImageUrl(width, height, fallbackText);
    setImageUrl(fallbackUrl);
    setError('Image failed to load');
  };

  if (isLoading) {
    return (
      <div 
        className={`animate-pulse bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={imageUrl}
        alt={alt || `${query} - Unsplash image`}
        width={width}
        height={height}
        className="w-full h-full object-cover rounded-lg"
        onError={handleImageError}
        loading="lazy"
      />
      {error && (
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          Fallback image
        </div>
      )}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        <a 
          href="https://unsplash.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default UnsplashImage;