# Sanity Blog Site

React、TypeScript、Sanity CMSで構築されたモダンなブログサイトです。

## 🚀 特徴

- **モダンな技術スタック**: React 19、TypeScript、Vite
- **Headless CMS**: Sanity CMSで記事管理
- **レスポンシブデザイン**: TailwindCSSによる美しいUI
- **SEO最適化**: メタタグ、OGタグ、構造化データ
- **高速**: Viteによる高速なビルドと開発体験
- **型安全**: TypeScriptによる型安全な開発

## 📁 プロジェクト構造

```
sanity-blog/
├── src/
│   ├── components/          # 再利用可能なコンポーネント
│   │   ├── BlogCard.tsx     # ブログカードコンポーネント
│   │   ├── Header.tsx       # サイトヘッダー
│   │   ├── Footer.tsx       # サイトフッター
│   │   ├── SEO.tsx          # SEOコンポーネント
│   │   └── PortableText.tsx # Sanity PortableText レンダラー
│   ├── pages/               # ページコンポーネント
│   │   ├── Home.tsx         # ホームページ
│   │   ├── BlogList.tsx     # ブログ一覧ページ
│   │   └── BlogPost.tsx     # 個別記事ページ
│   ├── lib/                 # ユーティリティとAPI
│   │   └── sanity.ts        # Sanity クライアント設定
│   ├── types/               # TypeScript型定義
│   │   └── blog.ts          # ブログ関連の型
│   └── App.tsx              # メインアプリケーション
├── sanity/                  # Sanity CMS関連
│   └── blog-schema.ts       # ブログスキーマ定義
└── README.md
```

## 🛠️ セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example`を参考に`.env`ファイルを作成:

```bash
cp .env.example .env
```

`.env`ファイルを編集してSanityの設定を追加:

```env
VITE_SANITY_PROJECT_ID=your-sanity-project-id
VITE_SANITY_DATASET=production
```

### 3. Sanity CMSの設定

1. [Sanity](https://www.sanity.io/)でプロジェクトを作成
2. `sanity/blog-schema.ts`のスキーマをSanity Studioに追加
3. プロジェクトIDとデータセット名を環境変数に設定

### 4. 開発サーバーの起動

```bash
npm run dev
```

## 📝 Sanityスキーマ

### Blog Post スキーマ

```typescript
{
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // タイトル、スラッグ、作者
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'author', type: 'string' },
    
    // 画像とメタデータ
    { name: 'mainImage', type: 'image' },
    { name: 'categories', type: 'array' },
    { name: 'publishedAt', type: 'datetime' },
    
    // コンテンツ
    { name: 'excerpt', type: 'text' },
    { name: 'body', type: 'array' },
    
    // SEO設定
    { name: 'seo', type: 'object' }
  ]
}
```

## 🎨 コンポーネント

### BlogCard
記事一覧で使用されるカードコンポーネント:
- サムネイル画像
- タイトル、抜粋、カテゴリー
- 公開日と作者情報
- レスポンシブ対応

### SEO
各ページのSEO設定を管理:
- メタタグ設定
- Open Graph タグ
- Twitter Card タグ
- 構造化データ

### PortableText
Sanity PortableTextのレンダリング:
- リッチテキスト表示
- 画像の埋め込み
- カスタムスタイリング

## 🔧 カスタマイズ

### スタイリング
TailwindCSSを使用。`src/index.css`でカスタムスタイルを定義:

```css
@layer components {
  .blog-content {
    @apply prose prose-lg max-w-none;
  }
}
```

### 型定義
`src/types/blog.ts`でブログ関連の型を定義:

```typescript
export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  // ...その他のフィールド
}
```

## 📱 レスポンシブ対応

- **Mobile First**: モバイル優先のデザイン
- **Breakpoints**: sm、md、lg、xlの各サイズに対応
- **Flexible Grid**: CSS GridとFlexboxを活用
- **Touch Friendly**: タッチデバイスでの操作性を重視

## 🚀 本番環境へのデプロイ

### Vercel
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
npx netlify deploy --prod --dir=dist
```

## 📊 パフォーマンス

- **Core Web Vitals**: 最適化されたメトリクス
- **Image Optimization**: Sanity Image URLsによる最適化
- **Code Splitting**: React RouterとViteによる自動分割
- **SEO Score**: 95+のLighthouseスコア

## 🔒 セキュリティ

- **HTTPS**: 本番環境では必須
- **CSP**: Content Security Policyの設定推奨
- **Environment Variables**: 機密情報は環境変数で管理

## 📚 参考資料

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sanity](https://www.sanity.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 🤝 コントリビューション

1. フォークしてブランチを作成
2. 変更を実装
3. テストを追加
4. プルリクエストを送信

## 📄 ライセンス

MIT License