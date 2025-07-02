export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
  };
  links: {
    html: string;
  };
}

export class UnsplashService {
  private readonly baseUrl = 'https://api.unsplash.com';
  private readonly accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // 環境変数から取得すべき

  async searchImages(query: string, perPage: number = 12): Promise<UnsplashImage[]> {
    try {
      const url = `${this.baseUrl}/search/photos?query=${encodeURIComponent(query)}&per_page=${perPage}&client_id=${this.accessKey}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Unsplash search error:', error);
      return [];
    }
  }

  async getRandomImage(query?: string): Promise<UnsplashImage | null> {
    try {
      const url = query 
        ? `${this.baseUrl}/photos/random?query=${encodeURIComponent(query)}&client_id=${this.accessKey}`
        : `${this.baseUrl}/photos/random?client_id=${this.accessKey}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Unsplash API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Unsplash random image error:', error);
      return null;
    }
  }

  // 無料版のUnsplash APIを使用する場合（Access Keyなし）
  getUnsplashImageUrl(query: string, width: number = 800, height: number = 600): string {
    // Unsplash Source API (無料、Access Key不要)
    return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(query)}`;
  }

  // プレースホルダー画像を生成
  getPlaceholderImageUrl(width: number = 800, height: number = 600, text: string = 'Image'): string {
    return `https://via.placeholder.com/${width}x${height}/6366f1/ffffff?text=${encodeURIComponent(text)}`;
  }
}

export const unsplashService = new UnsplashService();