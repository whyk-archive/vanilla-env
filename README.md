# Vanilla Env
ParcelだけでTypeScriptとSCSSをコンパイルして画像を圧縮する環境  
Vueとか使えない状況向け

## 利用方法
『Use this template』をクリックしてリポジトリを新規作成
![image](https://user-images.githubusercontent.com/16016681/77091623-2b049200-6a4c-11ea-99f7-d22fd408989c.png)

## できること
- TypeScriptのコンパイル
- SCSSのコンパイル、ベンダープレフィックス付与
- 画像の圧縮
- HTML, SCSS, JavaScript(TypeScript), 画像の変更監視

## 依存関係
- Parcel - ノーコンフィグのバンドルツール
- Lynt - ノーコンフィグのリントツール
- TypeScript - JavaScriptの拡張言語
- Sass - CSSの拡張言語
  - Autoprefixer - 自動的にCSSへベンダープレフィックスを付与するツール

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
ローカルサーバーを起動するときは、パスの末尾に`/index.html`を書く必要があります。