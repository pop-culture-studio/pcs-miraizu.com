# PCS公式サイト（リニューアル版）

他のメンバーが作ったページを引き継ぎ。

## 開発

```bash
git clone ...

npm install
npm run dev
```

開発中はローカルサーバーを起動。
```bash
php -S localhost:8000 -t ./public
```
Ctrl + Cで終了。

プッシュ前には`npm run prod`でビルド。デプロイ時に自動ビルドされるので厳密に実行しなくてもいい。

index.htmlと画像はpublic内のファイルを直接変更。  
CSSはresources内のファイルを変更。public/css/のファイルは触らない。
