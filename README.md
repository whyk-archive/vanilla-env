# Vanilla Env
ParcelだけでTypeScriptとSCSSをコンパイルして画像を圧縮する環境  
Vueとか使えない状況向け

## 利用方法
以下キャプチャの『Use this template』をクリックしてリポジトリを新規作成

## できること
- TypeScriptのコンパイル
- SCSSのコンパイル、ベンダープレフィックス付与
- 画像の圧縮
- HTML, SCSS, JavaScript(TypeScript), 画像の変更監視

## コマンド
### 開発出力、サーバー・ブラウザ起動、変更監視
```
yarn dev
```

### 本番出力
```
yarn build
```

## 利用上の注意
`yarn dev`での複数ページ対応は弱いです。  
ローカルサーバーを起動するときは、パスに`/index.html`まで書かないと表示されません。