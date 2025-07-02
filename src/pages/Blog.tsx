import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/blog';
import { samplePosts } from '../data/samplePosts';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // サンプルデータを読み込み
    setTimeout(() => {
      setPosts(samplePosts);
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      <SEO
        title="ブログ - バイブコーディングマインド"
        description="バイブコーディングに関する記事一覧。感覚重視のプログラミング哲学や実践的な開発マインドについて発信しています。"
        keywords={['バイブコーディング', 'ブログ', 'プログラミング', '開発マインド', 'AI時代']}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-responsive-xl font-black mb-6" style={{color: 'var(--clr-black)'}}>
            バイブコーディング<span style={{color: 'var(--clr-primary)'}}>ブログ</span>
          </h1>
          <p className="text-xl" style={{color: 'var(--clr-gray)'}}>
            感覚と直感を重視した新しいプログラミング哲学を探求
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              まだ記事がありません
            </h3>
            <p className="text-gray-600">
              近日中に新しい記事を公開予定です。お楽しみに！
            </p>
          </div>
        )}
      </div>
    </>
  );
}