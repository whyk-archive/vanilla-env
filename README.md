# Vanilla Env
【日本語 / [English](./README_EN.md)】

VueやReactなどのフレームワークを用いない開発で使えるフロントエンド開発環境。  
webpackで、SCSSやJavaScriptのコンパイルやバンドルを行う。

## 利用方法
『Use this template』をクリックしてリポジトリを新規作成。

## 特徴
- `src/`に開発コードを集約（HTMLを`dist/`やルート直下に置かない）
- SCSSのコンパイル、ベンダープレフィックスの付与、CSSファイルに出力
- JavaScriptのバンドル
- IE11対応
- 画像の圧縮

## 依存関係
- webpack
  - webpack-dev-server
- Sass(dart-sass)
  - Autoprefixer
- Prettier
- Stylelint
- ESLint

## コマンド
### 開発出力、サーバー・ブラウザ起動、変更監視
``` bash
$ npm run dev
```

### 本番出力
``` bash
$ npm run build
```