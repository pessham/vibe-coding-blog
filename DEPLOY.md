# Cloudflare Pages デプロイガイド

## 🚀 Cloudflare Pages での手動デプロイ手順

### 1. Cloudflare アカウント準備
1. [Cloudflare](https://cloudflare.com/) にログイン
2. Pagesセクションに移動

### 2. プロジェクト作成
1. "Create a project" をクリック
2. "Upload assets" を選択
3. プロジェクト名: `sanity-blog`

### 3. ビルドファイルアップロード
```bash
# ビルド実行（既に完了済み）
npm run build

# distフォルダをZIPファイルに圧縮
cd dist
zip -r ../sanity-blog-dist.zip .
cd ..
```

### 4. デプロイ
1. `sanity-blog-dist.zip` をCloudflare Pagesにアップロード
2. デプロイ完了を待つ
3. カスタムドメインを設定（オプション）

## 📁 デプロイ対象ファイル

```
dist/
├── index.html                              # メインHTMLファイル
├── vite.svg                               # Viteアイコン
├── _redirects                             # SPAリダイレクト設定
└── assets/
    ├── index-KWM56_oa.css                # CSSファイル
    ├── stegaEncodeSourceMap-BIyOSbaq.js  # Sanityライブラリ
    ├── browser-CE7yeqba.js               # ブラウザライブラリ
    └── index-B_r57cVX.js                 # メインJSファイル
```

## ⚙️ 環境変数設定

Cloudflare Pages で以下の環境変数を設定:

```env
VITE_SANITY_PROJECT_ID=your-sanity-project-id
VITE_SANITY_DATASET=production
```

## 🔗 Git連携デプロイ（推奨）

1. GitHubリポジトリを作成
2. コードをプッシュ
3. Cloudflare Pages で "Connect to Git" を選択
4. ビルド設定:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`

## 📊 デプロイ結果

- **合計サイズ**: ~370KB
- **CSS**: 21.44KB (gzip: 4.87KB)
- **JavaScript**: 361.92KB (gzip: 117.01KB)
- **HTML**: 0.46KB (gzip: 0.30KB)

## 🌐 カスタムドメイン設定

1. Cloudflare Pages プロジェクトページ
2. "Custom domains" タブ
3. ドメインを追加
4. DNS設定（CNAMEレコード）

## 🔧 トラブルシューティング

### SPA ルーティング
`_redirects` ファイルで SPA ルーティングを有効化:
```
/* /index.html 200
```

### 環境変数
本番環境で Sanity CMS に接続するには環境変数の設定が必須:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`

### ビルドエラー
TypeScript エラーが発生した場合:
```bash
npm run build
```

## 📈 パフォーマンス最適化

- **Image optimization**: Sanity Image URLs で自動最適化
- **Code splitting**: Vite による自動分割
- **Tree shaking**: 未使用コードの自動除去
- **Minification**: 本番ビルドで自動圧縮

## 🔒 セキュリティ

- **HTTPS**: Cloudflare Pages で自動HTTPS
- **Headers**: セキュリティヘッダーの設定推奨
- **Environment variables**: 機密情報の安全な管理