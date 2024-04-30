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

開発中はローカルサーバーを起動。
```bash
npm run dev
```
http://localhost:5173/  
Ctrl + Cで終了。

### index.html
htmlは`resources/views`に分割。

プロジェクト直下のindex.htmlを直接表示しても正しく表示されない。必ずサーバーを起動する。

ビルドすると中身が多少変更されてdist/index.htmlにコピーされる。  
index.htmlを変更→ビルドしてdist/index.htmlを生成、の基本的な流れを覚える必要がある。

### 画像(image内)
画像を追加・変更するにはimage内の画像を変更。  
htmlでは`<img src="/image/logo.png">`のように使用。  

ビルドするとdist/index.htmlでは`<img src="/assets/images/logo.123.png">`と書き換えられる。

### CSS/JS(resources内)
CSS/JSを変更するにはresources内のファイルを変更。distのファイルは触らない。  
TailwindなのでCSSを変更することは少ない。

### public
public内のファイルはビルド時に何も変更されずにdistにコピーされる。ファイル名を変更したくない画像などに使用。

### dist
最終的に https://pcs-miraizu.com/ で公開されるのはdist内のファイルだけ。  
ビルド後のファイルがdist内に生成される。dist内のファイルを直接触ることはない。

### ブログのRSS
https://github.com/pop-culture-studio/feed2json でrssからjsonに変換しているのでこっちではjsonを読み込んで表示しているだけ。
