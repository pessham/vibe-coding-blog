import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/blog';
import { urlFor } from '../lib/sanity';
import UnsplashImage from './UnsplashImage';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // カテゴリーからUnsplash検索キーワードを生成
  const getImageQuery = () => {
    if (post.categories && post.categories.length > 0) {
      const firstCategory = post.categories[0];
      const categoryTitle = typeof firstCategory === 'string' ? firstCategory : firstCategory?.title;
      
      // 日本語のカテゴリーを英語の検索キーワードに変換
      const keywordMap: { [key: string]: string } = {
        'バイブコーディング': 'coding programming AI technology',
        'AI開発': 'artificial intelligence coding',
        'プログラミング哲学': 'programming philosophy code',
        'プログラミング': 'programming coding computer',
        'テクノロジー': 'technology innovation',
        'AI': 'artificial intelligence robot',
      };
      
      return keywordMap[categoryTitle || ''] || 'programming technology';
    }
    return 'programming technology';
  };

  return (
    <article className="card overflow-hidden">
      <Link to={`/blog/${post.slug.current}`}>
        <div className="aspect-video overflow-hidden">
          {post.mainImage && post.mainImage.asset && post.mainImage.asset._ref && post.mainImage.asset._ref.startsWith('image-') ? (
            <img
              src={urlFor(post.mainImage).width(600).height(300).url()}
              alt={post.mainImage.alt || post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Sanity画像エラー時はUnsplash画像にフォールバック
                e.currentTarget.style.display = 'none';
                const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallbackDiv) fallbackDiv.style.display = 'block';
              }}
            />
          ) : null}
          <div style={{ display: post.mainImage && post.mainImage.asset && post.mainImage.asset._ref && post.mainImage.asset._ref.startsWith('image-') ? 'none' : 'block' }}>
            <UnsplashImage
              query={getImageQuery()}
              width={600}
              height={300}
              alt={post.title}
              className="w-full h-full hover:scale-105 transition-transform duration-300"
              fallbackText={post.title.substring(0, 10)}
            />
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <time
            dateTime={post.publishedAt}
            className="text-sm text-gray-500"
          >
            {formatDate(post.publishedAt)}
          </time>
          <span className="text-sm text-gray-600 font-medium">
            {post.author?.name || '作者不明'}
          </span>
        </div>
        
        <Link to={`/blog/${post.slug.current}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {post.body && post.body.length > 0 
            ? post.body[0]?.children?.[0]?.text?.substring(0, 150) + '...' 
            : '記事の内容をお楽しみに。'}
        </p>
        
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {typeof category === 'string' ? category : category?.title || 'カテゴリー'}
              </span>
            ))}
          </div>
        )}
        
        <Link
          to={`/blog/${post.slug.current}`}
          className="btn-primary text-sm"
        >
          続きを読む
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}