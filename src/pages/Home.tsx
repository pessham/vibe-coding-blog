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
    // CORSエラーを避けるため、開発環境ではサンプルデータを使用
    setTimeout(() => {
      // 日付順で記事をソート（新しい順）
      const sortedPosts = [...samplePosts].sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
      setRecentPosts(sortedPosts);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <SEO
        title="地方AIブースター - 生成AIで地方の現場を労く未来形へ"
        description="製造業・観光業・農業の現場を生成AIで変革する実践ガイド。地方企業が一番早くAIを導入・活用するためのノウハウとケーススタディを提供します。"
        keywords={['地方AI', '生成AI', '製造業DX', '観光業DX', '農業DX', 'AI導入', 'ローカルAI', '現場改善', 'AI活用', 'スマート農業']}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[var(--clr-bg-1)] to-[var(--clr-bg-2)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="mountainPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,5 15,15 5,15" fill="var(--clr-primary)" opacity="0.3"/>
                <line x1="0" y1="10" x2="20" y2="10" stroke="var(--clr-accent)" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mountainPattern)"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Main Copy */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[var(--clr-primary)]">地方の現場</span>を、<br/>
                <span className="text-[var(--clr-accent)]">生成AI</span>で<br/>
                <span className="text-[var(--clr-gray-dark)]">"働く未来形"へ</span>
              </h1>
              <p className="text-xl text-[var(--clr-gray)] mb-8 leading-relaxed">
                製造業・観光業・農業の現場に特化した生成AI活用ガイド。<br/>
                地方企業が確実にAI導入を成功させるための実践的なノウハウとケーススタディをお届けします。
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/blog?category=manufacturing" 
                  className="btn-primary text-center px-6 py-3 text-base font-bold"
                >
                  製造業DXを読む
                </Link>
                <Link 
                  to="/blog?category=tourism" 
                  className="btn-secondary text-center px-6 py-3 text-base font-bold border-2 border-[var(--clr-primary)] text-[var(--clr-primary)] hover:bg-[var(--clr-primary)] hover:text-white"
                >
                  観光ビジネスを読む
                </Link>
                <Link 
                  to="/blog?category=agriculture" 
                  className="btn-secondary text-center px-6 py-3 text-base font-bold border-2 border-[var(--clr-accent)] text-[var(--clr-accent)] hover:bg-[var(--clr-accent)] hover:text-white"
                >
                  農業DXを読む
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/hero_image.jpg" 
                alt="地方の現場をAIで変革するイメージ" 
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why / 課題共感 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--clr-primary)]">
            現場の"痛み"、わかります
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* ペルソナ① 製造業 */}
            <div className="bg-gradient-to-br from-[var(--clr-bg-1)] to-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--clr-primary)]">製造現場の課題</h3>
              <div className="space-y-3 text-[var(--clr-gray-dark)] leading-relaxed text-sm">
                <p>「品質管理のデータ分析、<br/>手作業で時間ばかりかかって...」</p>
                <p>「不良品の原因特定、<br/>ベテランの勘頼みから脱却したい」</p>
                <p>「生産効率化のヒント、<br/>データの山から見つけられずにいる」</p>
              </div>
            </div>

            {/* ペルソナ② 観光業 */}
            <div className="bg-gradient-to-br from-white to-[var(--clr-secondary)] p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--clr-primary)]">観光ビジネスの課題</h3>
              <div className="space-y-3 text-[var(--clr-gray-dark)] leading-relaxed text-sm">
                <p>「お客様のニーズ把握、<br/>アンケートだけでは限界が...」</p>
                <p>「魅力的な観光コンテンツ、<br/>どう作ればいいかわからない」</p>
                <p>「SNS発信やマーケティング、<br/>効果的な方法が見えてこない」</p>
              </div>
            </div>

            {/* ペルソナ③ 農業 */}
            <div className="bg-gradient-to-br from-[var(--clr-accent)] to-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--clr-primary)]">農業経営の課題</h3>
              <div className="space-y-3 text-[var(--clr-gray-dark)] leading-relaxed text-sm">
                <p>「天候や病害虫の予測、<br/>経験だけでは限界がある...」</p>
                <p>「収穫時期の最適化、<br/>データ活用の仕方がわからない」</p>
                <p>「販路開拓や価格設定、<br/>市場動向を効率的に分析したい」</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最新記事グリッド */}
      <section className="py-20 bg-[var(--clr-bg-1)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--clr-primary)]">
            最新の実践ガイド
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.slice(0, 6).map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="btn-primary px-8 py-4 text-lg font-bold"
            >
              すべての記事を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 導入ステップ & テンプレート */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--clr-primary)]">
            AI導入を確実に成功させる
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "現状分析", subtitle: "チェックリスト", icon: "📋" },
              { title: "社内ガイドライン", subtitle: "雛形テンプレート", icon: "📄" },
              { title: "ファーストPoC", subtitle: "実行プラン", icon: "🚀" },
              { title: "効果測定", subtitle: "KPIダッシュボード", icon: "📊" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[var(--clr-bg-1)] to-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[var(--clr-primary)]">{item.title}</h3>
                <p className="text-[var(--clr-gray)] mb-4">{item.subtitle}</p>
                <button className="text-[var(--clr-accent)] font-bold hover:text-[var(--clr-primary)] transition-colors">
                  無料ダウンロード ↓
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ニュースレター登録 CTA */}
      <section className="py-20 bg-[var(--clr-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--clr-primary)]">
            "社内で一番早くAIを動かす人"になるヒントを毎週お届け
          </h2>
          <p className="text-xl text-[var(--clr-gray-dark)] mb-8">
            最新のAI活用事例、導入ノウハウ、業界別の成功パターンを厳選してお送りします。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="メールアドレス"
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--clr-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--clr-accent)]"
            />
            <button className="btn-primary px-8 py-3 whitespace-nowrap">
              無料登録
            </button>
          </div>
          <p className="text-sm text-[var(--clr-gray)] mt-4">
            ※いつでも配信停止できます
          </p>
        </div>
      </section>

      {/* 実践ストーリー（ケーススタディ） */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--clr-primary)]">
            実践ストーリー
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 製造業事例 */}
            <div className="bg-gradient-to-br from-[var(--clr-bg-1)] to-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--clr-primary)]">中堅製造業A社の場合</h3>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[var(--clr-accent)]">35%</div>
                    <div className="text-xs text-[var(--clr-gray)]">不良品率減少</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--clr-accent)]">2.5h</div>
                    <div className="text-xs text-[var(--clr-gray)]">分析時間短縮/日</div>
                  </div>
                </div>
              </div>
              <p className="text-[var(--clr-gray-dark)] leading-relaxed text-sm">
                品質管理データの分析にChatGPTを活用。過去3年間の不良品データから傾向を発見し、
                予防策を立案。結果として不良品率35%減少、分析作業も大幅に効率化。
              </p>
            </div>

            {/* 観光業事例 */}
            <div className="bg-gradient-to-br from-white to-[var(--clr-secondary)] p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--clr-primary)]">地域観光協会B団体の場合</h3>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[var(--clr-accent)]">150%</div>
                    <div className="text-xs text-[var(--clr-gray)]">SNSエンゲージ増</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--clr-accent)]">40%</div>
                    <div className="text-xs text-[var(--clr-gray)]">観光客増加</div>
                  </div>
                </div>
              </div>
              <p className="text-[var(--clr-gray-dark)] leading-relaxed text-sm">
                AIを活用した観光コンテンツ作成とSNS戦略の最適化。地域の魅力を効果的に発信し、
                SNSエンゲージメント150%向上、実際の観光客数も40%増加を実現。
              </p>
            </div>

            {/* 農業事例 */}
            <div className="bg-gradient-to-br from-[var(--clr-accent)] to-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--clr-primary)]">スマート農園C農場の場合</h3>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[var(--clr-primary)]">25%</div>
                    <div className="text-xs text-[var(--clr-gray)]">収穫量向上</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--clr-primary)]">30%</div>
                    <div className="text-xs text-[var(--clr-gray)]">病害虫被害削減</div>
                  </div>
                </div>
              </div>
              <p className="text-[var(--clr-gray-dark)] leading-relaxed text-sm">
                気象データと栽培履歴をAIで分析し、最適な収穫時期を予測。病害虫発生リスクの早期警告により、
                収穫量25%向上、病害虫被害30%削減を達成。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}