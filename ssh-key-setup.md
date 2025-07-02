# SSH鍵の正しい設定方法

## 1. 秘密鍵ファイルの確認

ダウンロードした`.key`ファイルをテキストエディタで開いて以下を確認：

```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA...
（複数行の暗号化された内容）
...
-----END RSA PRIVATE KEY-----
```

## 2. GitHub Secretsへの正しい設定

### ❌ 間違った設定
- 改行が失われている
- ヘッダー・フッターが欠けている
- 余分な文字が含まれている

### ✅ 正しい設定手順

1. **秘密鍵ファイル全体をコピー**
   - `-----BEGIN RSA PRIVATE KEY-----` から
   - `-----END RSA PRIVATE KEY-----` まで
   - **改行もそのまま保持**

2. **GitHub Secrets設定**
   - リポジトリ Settings → Secrets and variables → Actions
   - `CONOHA_SSH_KEY` を**削除**
   - 新しく `CONOHA_SSH_KEY` を**作成**
   - 秘密鍵の内容を**そのまま貼り付け**

## 3. 設定例

```
-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAxGKvhPxJ...
（実際の暗号化された内容）
...
eDxCrP+KfVfWgBcCBWgUKRE=
-----END RSA PRIVATE KEY-----
```

## 4. 確認方法

設定後、小さな変更をコミット＆プッシュして：
- GitHub Actions → Deploy to ConoHa WING
- "Deploy to ConoHa WING via rsync" ステップ
- SSH接続エラーが解消されるか確認
## SSH鍵設定テスト
Thu Jul  3 08:25:40 JST 2025
