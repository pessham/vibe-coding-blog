# ConoHa WING 自動デプロイ設定

GitHub Actionsを使ってConoHa WINGに自動デプロイする設定手順です。

## 1. ConoHa WING でのSSH設定

### SSH有効化
1. ConoHa WINGコントロールパネルにログイン
2. 「サイト管理」→「サイト設定」→「応用設定」
3. 「SSH」を有効化

### SSHキー作成
1. 「SSH Key」→「+SSH Key」
2. キー名を入力（例：github-actions）
3. 「保存」をクリック
4. **秘密鍵をダウンロード**（重要：再ダウンロード不可）

### SSH接続情報確認
コントロールパネルで以下の情報を確認：
- **ホスト名**: `[アカウント名].conohawing.com`
- **ユーザー名**: `[アカウント名]`
- **ポート**: `2222`
- **パス**: `/home/[アカウント名]/public_html/[ドメイン名]`

## 2. GitHub Secrets 設定

GitHubリポジトリ設定で以下のSecretsを追加：

### Settings → Secrets and variables → Actions → New repository secret

| Secret名 | 値 | 例 |
|----------|----|----|
| `CONOHA_HOST` | ホスト名 | `yourname.conohawing.com` |
| `CONOHA_USER` | ユーザー名 | `yourname` |
| `CONOHA_PORT` | ポート番号 | `2222` |
| `CONOHA_REMOTE_PATH` | デプロイ先パス | `/home/yourname/public_html/yourdomain.com/` |
| `CONOHA_SSH_KEY` | 秘密鍵の内容 | `-----BEGIN RSA PRIVATE KEY-----...` |

### 秘密鍵の設定方法
1. ダウンロードした秘密鍵ファイルをテキストエディタで開く
2. **全内容**をコピー（`-----BEGIN RSA PRIVATE KEY-----` から `-----END RSA PRIVATE KEY-----` まで）
3. `CONOHA_SSH_KEY` Secretに貼り付け

## 3. デプロイの動作

### 自動実行条件
- `main` ブランチに `push` された時
- GitHub ActionsのUIから手動実行

### デプロイ内容
1. Node.js環境セットアップ
2. 依存関係インストール
3. Reactアプリビルド
4. `.htaccess` ファイル生成（SPA対応）
5. ConoHa WINGにrsync転送

### 確認方法
1. GitHubの「Actions」タブでログ確認
2. ドメインにアクセスしてサイト動作確認

## 4. トラブルシューティング

### SSH接続エラー
- SSH Keyが正しく設定されているか確認
- ConoHa WINGでSSHが有効化されているか確認
- ホスト名・ポート番号が正しいか確認

### パス関連エラー
- `CONOHA_REMOTE_PATH` が正しいか確認
- パスの最後に `/` が付いているか確認

### ビルドエラー
- ローカルで `npm run build` が成功するか確認
- Node.jsバージョンが適切か確認

## 5. 使用方法

設定完了後は、以下のコマンドで自動デプロイされます：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

プッシュ後、約2-3分でデプロイが完了します。