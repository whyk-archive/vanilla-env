# Vanilla Env
【日本語 / [英語](./README_EN.md)】

VueやReactなどのフレームワークを用いない開発で使えるフロントエンド開発環境。  
webpackで、SCSSやTypeScriptのコンパイルやバンドルを行う。

## 利用方法
『Use this template』をクリックしてリポジトリを新規作成。

## やろうとしていること
- `src/`に開発コードを集約（HTMLを`dist/`やルート直下に置かない）
- SCSSやTypeScriptを`src/assets/`に集約
- SCSSのコンパイル、ベンダープレフィックスの付与
- TypeScriptのコンパイルとバンドル
- 画像の圧縮
- ブラウザのホットリロード

## 想定される依存関係
- webpack
- Sass(dart-sass)
  - Autoprefixer
- TypeScript
- Prettier
- Stylelint
- ESLint

## コマンド
### 開発出力、サーバー・ブラウザ起動、変更監視
```
yarn dev
```

### 本番出力
```
yarn build
```