import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/blog';
import { getAllPosts } from '../lib/sanity';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('記事の取得に失敗しました。');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">記事を読み込み中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">エラーが発生しました</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="ブログ記事一覧"
        description="最新のブログ記事をお読みください。技術、ライフスタイル、その他様々なトピックについて書いています。"
        keywords={['ブログ', '記事', 'テクノロジー', 'ライフスタイル']}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ブログ記事
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            最新の記事をお読みください。技術、ライフスタイル、その他様々なトピックについて書いています。
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">記事がありません</h2>
            <p className="text-gray-600">
              まだ公開された記事がありません。しばらくお待ちください。
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {posts.length} 件の記事が見つかりました
            </p>
          </div>
        )}
      </div>
    </>
  );
}