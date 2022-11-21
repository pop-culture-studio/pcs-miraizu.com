# PCS公式サイト（リニューアル版）

https://pcs-miraizu.com/

他のメンバーが作ったページを引き継ぎ。

## 開発
[前回](https://github.com/pop-culture-studio/sds.fukuoka.jp)に続き引き継いで書き直し。最低限の修正だけにするつもりだったけどやはり辛いので扱いやすいように全部書き直し。

ここの説明を理解できる人じゃないと扱えない。

- CSS : Tailwind
- JS : Vue.js
- サーバー : Vercel
- ドメイン：ムームードメイン

```bash
git clone ...

npm install
npm run build
```

開発中はローカルサーバーを起動。プロジェクト直下のindex.htmlを直接表示しても正しく表示されない。必ずサーバーを起動する。
```bash
npm run dev
```
http://localhost:5173/  
Ctrl + Cで終了。

index.htmlと画像(image/内)はファイルを直接変更。  
CSS/JSはresources内のファイルを変更。dist/のファイルは触らない。  
public内のファイルは何も変更されずにdistにコピーされる。
