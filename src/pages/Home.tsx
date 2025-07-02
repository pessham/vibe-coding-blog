import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/blog';
import { samplePosts } from '../data/samplePosts';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // サンプル記事を読み込み
    setTimeout(() => {
      setRecentPosts(samplePosts);
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      <SEO
        title="バイブコーディングマインド - 感覚を重視した開発哲学"
        description="完璧よりも創造性、設計書よりもバイブを大切にする新しいプログラミング哲学。感覚と直感を重視した開発マインドを探求するブログです。"
        keywords={['バイブコーディング', 'プログラミング哲学', '直感的開発', '創造性', 'AI時代', '開発マインド', 'コーディング思考']}
      />
      
      <div className="relative overflow-hidden min-h-screen" style={{background: 'linear-gradient(135deg, var(--clr-bg-1) 0%, var(--clr-bg-2) 100%)'}}>
        {/* Background Video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-cover opacity-10"
            style={{aspectRatio: '9/16'}}
          >
            <source src="/images/ClaudeCode.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 min-h-screen flex items-center">
          <div className="text-center w-full">
            {/* Title with enhanced visibility */}
            <div className="vibe-card p-8 mb-8 max-w-4xl mx-auto">
              <h1 className="heading-accent text-4xl lg:text-5xl font-black mb-6 whitespace-nowrap" style={{color: 'var(--clr-black)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                バイブコーディング<span style={{color: 'var(--clr-primary)'}}>マインド</span>
              </h1>
              <p className="text-xl lg:text-2xl font-medium leading-relaxed" style={{color: 'var(--clr-gray-dark)'}}>
                感覚と直感を重視したプログラミング哲学。<br />
                完璧よりも創造性、設計書よりもバイブを大切にする新しい開発マインドを探求しています。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/blog"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                style={{
                  color: '#f8f9fa',
                  background: 'linear-gradient(135deg, #000000 0%, var(--clr-primary) 50%, #000000 100%)',
                  borderRadius: '50px',
                  boxShadow: '0 10px 40px rgba(231, 76, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(231, 76, 60, 0.5)'
                }}
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-light) 100%)',
                  }}
                ></div>
                <span className="relative flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  ブログを読む
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a
                href="https://pessham.com"
                className="btn-secondary shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                メインサイトへ
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10" style={{background: 'var(--clr-primary)'}}></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10" style={{background: 'var(--clr-primary-light)'}}></div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-responsive-lg font-bold mb-4" style={{color: 'var(--clr-black)'}}>
            最新の記事
          </h2>
          <p className="text-xl" style={{color: 'var(--clr-gray)'}}>
            最新のバイブコーディング思考をチェックしてみてください
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
        ) : recentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                style={{
                  color: '#f8f9fa',
                  background: 'linear-gradient(135deg, #000000 0%, var(--clr-primary) 50%, #000000 100%)',
                  borderRadius: '50px',
                  boxShadow: '0 10px 40px rgba(231, 76, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(231, 76, 60, 0.5)'
                }}
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-light) 100%)',
                  }}
                ></div>
                <span className="relative flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  すべての記事を見る
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </>
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

      {/* Features Section */}
      <div style={{background: 'var(--clr-gray-light)'}} className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: 'var(--clr-black)'}}>
              バイブコーディングとは
            </h2>
            <p className="text-xl" style={{color: 'var(--clr-gray)'}}>
              感覚と直感を重視した新しいプログラミングアプローチ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{background: 'rgba(231, 76, 60, 0.1)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--clr-primary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--clr-black)'}}>直感重視</h3>
              <p style={{color: 'var(--clr-gray)'}}>
                完璧な設計よりも「その場のノリ」と「感覚」でコードを書く
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{background: 'rgba(0, 102, 204, 0.1)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--clr-secondary)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--clr-black)'}}>創造性優先</h3>
              <p style={{color: 'var(--clr-gray)'}}>
                AI時代に人間にしかできない価値は創造性と直感的判断
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{background: 'rgba(51, 51, 51, 0.1)'}}>
                <svg className="w-8 h-8" style={{color: 'var(--clr-gray-dark)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--clr-black)'}}>実験精神</h3>
              <p style={{color: 'var(--clr-gray)'}}>
                失敗を恐れずに手を動かし、プロトタイプから学ぶ
              </p>
            </div>
          </div>
          
          {/* Vibe Coding Learning Button */}
          <div className="text-center mt-12">
            {/* Button above video */}
            <div className="mb-12">
              <a
                href="https://vibecoding.salon/"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500/50"
                style={{
                  color: '#f8f9fa',
                  background: 'linear-gradient(135deg, #000000 0%, var(--clr-primary) 50%, #000000 100%)',
                  borderRadius: '50px',
                  boxShadow: '0 10px 40px rgba(231, 76, 60, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(231, 76, 60, 0.5)'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, var(--clr-primary) 0%, var(--clr-primary-light) 100%)',
                  }}
                ></div>
                <span className="relative flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  バイブコーディングサロンで学ぶ
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
            {/* Video below button */}
            <div className="flex justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
              >
                <source src="/images/0701レコーディング実演.mov" type="video/mp4" />
                <source src="/images/0701レコーディング実演.mov" type="video/quicktime" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}