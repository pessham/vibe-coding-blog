import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { BlogPost } from '../types/blog';
import { samplePosts } from '../data/samplePosts';
import SEO from '../components/SEO';
import UnsplashImage from '../components/UnsplashImage';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const foundPost = samplePosts.find(p => p.slug.current === slug);
      setPost(foundPost || null);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-8"></div>
          <div className="h-64 bg-gray-300 rounded mb-8"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold mb-4" style={{color: 'var(--clr-black)'}}>
          記事が見つかりません
        </h1>
        <p className="text-xl mb-8" style={{color: 'var(--clr-gray)'}}>
          お探しの記事は存在しないか、削除された可能性があります。
        </p>
        <Link 
          to="/blog"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
          style={{
            color: '#f8f9fa',
            background: 'linear-gradient(135deg, #000000 0%, var(--clr-primary) 50%, #000000 100%)',
            borderRadius: '50px',
            boxShadow: '0 10px 40px rgba(231, 76, 60, 0.3)',
            border: '1px solid rgba(231, 76, 60, 0.5)'
          }}
        >
          ブログ一覧に戻る
        </Link>
      </div>
    );
  }

  // カテゴリーからUnsplash検索キーワードを生成
  const getImageQuery = () => {
    if (post?.categories && post.categories.length > 0) {
      const firstCategory = post.categories[0];
      const categoryTitle = typeof firstCategory === 'string' ? firstCategory : firstCategory?.title;
      
      // 日本語のカテゴリーを英語の検索キーワードに変換
      const keywordMap: { [key: string]: string } = {
        'バイブコーディング': 'coding programming AI technology futuristic',
        'AI開発': 'artificial intelligence coding development',
        'プログラミング哲学': 'programming philosophy code thinking',
        'プログラミング': 'programming coding computer development',
        'テクノロジー': 'technology innovation digital',
        'AI': 'artificial intelligence robot machine learning',
        '製造業DX': 'manufacturing industry automation factory',
        '農業DX': 'smart farming agriculture technology',
        '中小企業': 'small business enterprise office',
        'AI活用': 'artificial intelligence business technology',
        'スマート農業': 'smart farming agriculture technology',
        'AI導入事例': 'AI implementation business success',
      };
      
      return keywordMap[categoryTitle || ''] || 'business technology';
    }
    return 'business technology';
  };

  // Markdown風のテキストをHTMLに変換（改良版）
  const formatContent = (text: string) => {
    // テキストを行ごとに分割して処理
    const lines = text.split('\n');
    const paragraphs = [];
    let currentParagraph = '';
    let listItems = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('- **') || line.startsWith('- ')) {
        // リスト項目の処理
        if (currentParagraph) {
          paragraphs.push(currentParagraph);
          currentParagraph = '';
        }
        listItems.push(line.replace(/^- /, ''));
      } else if (line === '' && listItems.length > 0) {
        // リストの終了
        paragraphs.push('LIST:' + JSON.stringify(listItems));
        listItems = [];
      } else if (line === '' && currentParagraph) {
        // 段落の終了
        paragraphs.push(currentParagraph);
        currentParagraph = '';
      } else if (line !== '') {
        // 通常の行
        if (currentParagraph) currentParagraph += ' ';
        currentParagraph += line;
      }
    }
    
    // 残りの処理
    if (listItems.length > 0) {
      paragraphs.push('LIST:' + JSON.stringify(listItems));
    }
    if (currentParagraph) {
      paragraphs.push(currentParagraph);
    }
    
    return paragraphs.map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold mt-8 mb-6" style={{color: 'var(--clr-primary)'}}>
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-bold mt-6 mb-4" style={{color: 'var(--clr-primary)'}}>
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('LIST:')) {
        const items = JSON.parse(paragraph.replace('LIST:', ''));
        return (
          <ul key={index} className="space-y-4 mb-8 pl-6">
            {items.map((item: string, i: number) => (
              <li key={i} className="flex items-start text-lg leading-relaxed" style={{color: 'var(--clr-gray-dark)'}}>
                <span className="text-[var(--clr-accent)] mr-3 mt-1 text-xl">•</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--clr-primary)">$1</strong>') }}></span>
              </li>
            ))}
          </ul>
        );
      }
      // 長い段落を自動的に改行で分割
      const sentences = paragraph.split(/(?<=[。！？])\s*/).filter(s => s.trim());
      if (sentences.length > 3) {
        // 3文以上の場合は分割して表示
        const midPoint = Math.ceil(sentences.length / 2);
        const firstHalf = sentences.slice(0, midPoint).join('');
        const secondHalf = sentences.slice(midPoint).join('');
        
        return (
          <div key={index} className="mb-6">
            <p className="text-lg leading-relaxed mb-3" style={{color: 'var(--clr-gray-dark)'}} 
               dangerouslySetInnerHTML={{ __html: firstHalf.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--clr-primary)">$1</strong>') }}>
            </p>
            <p className="text-lg leading-relaxed" style={{color: 'var(--clr-gray-dark)'}} 
               dangerouslySetInnerHTML={{ __html: secondHalf.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--clr-primary)">$1</strong>') }}>
            </p>
          </div>
        );
      }
      
      return (
        <p key={index} className="text-lg leading-relaxed mb-6" style={{color: 'var(--clr-gray-dark)'}} 
           dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--clr-primary)">$1</strong>') }}>
        </p>
      );
    });
  };

  return (
    <>
      <SEO
        title={post.seo?.title || post.title}
        description={post.seo?.description || post.body?.[0]?.children?.[0]?.text?.substring(0, 160) || post.title}
        keywords={post.seo?.keywords || post.categories?.map(cat => cat.title) || []}
      />
      
      <article>
        {/* ヒーロー画像セクション */}
        <div className="relative h-80 lg:h-96 mb-16 overflow-hidden">
          <UnsplashImage
            query={getImageQuery()}
            width={1200}
            height={600}
            alt={post.title}
            className="w-full h-full"
            fallbackText="Vibe Coding"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog"
                className="inline-flex items-center text-white text-lg font-bold transition-colors hover:underline mb-4"
              >
                ← ブログ一覧に戻る
              </Link>
              <div className="bg-black bg-opacity-60 p-6 rounded-lg backdrop-blur-sm">
                <h1 
                  className="text-3xl lg:text-5xl font-black leading-tight"
                  style={{
                    color: '#ffffff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: '1rem',
                    borderRadius: '0.5rem'
                  }}
                >
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* メタ情報 */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm" style={{color: 'var(--clr-gray)'}}>
              <div className="flex items-center gap-2">
                <span>👤</span>
                <span>{post.author?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📅</span>
                <time>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</time>
              </div>
              {post.categories && (
                <div className="flex items-center gap-2">
                  <span>🏷️</span>
                  <div className="flex gap-2">
                    {post.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={{
                          backgroundColor: 'var(--clr-primary)',
                          color: 'white'
                        }}
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* コンテンツ */}
          <div className="prose prose-lg max-w-none">
            {post.body.map((block, index) => (
              <div key={index}>
                {block.children.map((child: any, childIndex: number) => (
                  <div key={childIndex}>
                    {formatContent(child.text)}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* フッター */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-xl font-bold mb-4" style={{color: 'var(--clr-black)'}}>
                他の記事も読んでみませんか？
              </p>
              <Link 
                to="/blog"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
                style={{
                  color: '#f8f9fa',
                  background: 'linear-gradient(135deg, #000000 0%, var(--clr-primary) 50%, #000000 100%)',
                  borderRadius: '50px',
                  boxShadow: '0 10px 40px rgba(231, 76, 60, 0.3)',
                  border: '1px solid rgba(231, 76, 60, 0.5)'
                }}
              >
                ブログ一覧を見る
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}