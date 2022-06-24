# PCS公式サイト（リニューアル版）

他のメンバーが作ったページを引き継ぎ。

## 開発
[前回](https://github.com/pop-culture-studio/sds.fukuoka.jp)に続き引き継いで書き直し。最低限の修正だけにするつもりだったけどやはり辛いので扱いやすいように全部書き直し。

ここの説明を理解できる人じゃないと扱えない。

- CSS : Tailwind
- サーバー : Vercel

```bash
git clone ...

npm install
npm run prod
```

開発中はローカルサーバーを起動。
```bash
npm run dev
```
http://localhost:3000/  
Ctrl + Cで終了。

プッシュ前には`npm run prod`でビルド。デプロイ時に自動ビルドされるので厳密に実行しなくてもいい。

index.htmlと画像(image/内)はファイルを直接変更。  
CSSはresources内のファイルを変更。dist/のファイルは触らない。
