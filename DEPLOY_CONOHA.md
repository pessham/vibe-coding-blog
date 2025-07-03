# ConoHa WING 自動デプロイ設定

GitHub Actionsを使ってConoHa WINGに自動デプロイする設定手順です。

## 1. ConoHa WING でのSSH設定

### SSHキー作成
1. ConoHa WINGコントロールパネルにログイン
2. 左メニューの **「サーバー管理」** をクリック
3. **「SSH Key」** を選択
4. 既存のキーがあれば削除
5. **「+SSH Key」** で新しいキー作成
6. キー名を入力（例：`github-actions`）
7. **「保存」** をクリック
8. **秘密鍵をダウンロード**（重要：再ダウンロード不可）

### SSH接続情報確認
サーバー管理画面で以下の情報を確認：
- **ホスト名**: `pessham.conohawing.com`
- **ユーザー名**: `02pd2_c2707589`（実際のアカウント名）
- **ポート**: `2222`

### デプロイ先パス確認
**ConoHa WINGではパス構造が複数パターンあります。以下で確認：**

1. **ファイルマネージャーで確認**
   - サイト管理 → ファイルマネージャー
   - 実際のフォルダ構造を確認

2. **あなたの実際のパス**
   - 確認済み: `/home/02pd2_c2707589/public_html/pessham.com/viblog/`
   - サイトURL: `https://pessham.com/viblog/`

## 2. GitHub Secrets 設定

GitHubリポジトリ設定で以下のSecretsを追加：

### Settings → Secrets and variables → Actions → New repository secret

| Secret名 | 値 | 例 |
|----------|----|----|
| `CONOHA_HOST` | ホスト名 | `pessham.conohawing.com` |
| `CONOHA_USER` | ユーザー名 | `02pd2_c2707589` |
| `CONOHA_PORT` | ポート番号 | `2222` |
| `CONOHA_REMOTE_PATH` | デプロイ先パス | `/home/02pd2_c2707589/public_html/pessham.com/viblog/` |
| `CONOHA_SSH_KEY` | 秘密鍵の内容 | `-----BEGIN RSA PRIVATE KEY-----...` |
| `CONOHA_FTP_USER` | FTPユーザー名 | `02pd2_c2707589` |
| `CONOHA_FTP_PASS` | FTPパスワード | `[FTPパスワード]` |

### 秘密鍵の設定方法
1. ダウンロードした秘密鍵ファイル（`.key`）をテキストエディタで開く
2. **全内容**をコピー（`-----BEGIN ***PRIVATE KEY-----` から `-----END ***PRIVATE KEY-----` まで）
3. **改行も含めて完全にコピー**
4. GitHub Settings → Secrets → `CONOHA_SSH_KEY` に貼り付け

### 注意点
- 改行を保持して完全にコピー
- ヘッダー・フッターも含める
- 余分なスペースや文字を追加しない
- OpenSSH形式の場合は `-----BEGIN OPENSSH PRIVATE KEY-----` から開始

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

## 4. SSH有効化確認

### ConoHa WINGでSSH有効化
1. **サーバー管理** → **SSH**
2. SSH接続を「**利用する**」に設定
3. 接続許可ポートが「**2222**」になっているか確認
4. アクセス許可IPは「**すべて許可**」または適切に設定

### SSH接続テスト（ローカル）
```bash
ssh -p 2222 02pd2_c2707589@pessham.conohawing.com
```

## 5. FTP設定（代替手段）

SSH接続ができない場合のFTP設定：

### FTPアカウント確認
1. **サイト管理** → **FTP**
2. FTPアカウント情報を確認
3. パスワードをリセット（必要に応じて）

### GitHub Secrets追加
- `CONOHA_FTP_USER`: FTPユーザー名
- `CONOHA_FTP_PASS`: FTPパスワード

## 6. トラブルシューティング

### SSH接続エラー
- SSH Keyが正しく設定されているか確認
- ConoHa WINGでSSHが有効化されているか確認
- ホスト名・ポート番号が正しいか確認
- SSH接続許可設定を確認

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

プッシュ後、約2-3分でデプロイが完了します。# テスト更新

GitHub Actions自動デプロイのテストです。

Thu Jul  3 08:20:48 JST 2025

## デプロイテスト
正しいConoHa WING設定でのデプロイテスト

- ユーザー名: 02pd2_c2707589
- パス: /home/02pd2_c2707589/public_html/pessham.com/viblog/
- デプロイ先: https://pessham.com/viblog/

実行日時: Thu Jul  3 08:58:07 JST 2025
