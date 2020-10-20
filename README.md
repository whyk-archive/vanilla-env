# Vanilla Env
【[日本語](./README_JP.md) / English】

A front-end development environment that can be used for development that does not use frameworks such as Vue and React.  
Compilation and bundling of SCSS and JavaScript with webpack.

## How to use
Click on "Use this template" to create a new repository.

## Features
- Aggregate development code in `src/` (don't put HTML in `dist/` or directly under the root)
- Compile SCSS, add vendor prefix and output to CSS files
- JavaScript bundling
- IE11 support
- Image Compression

## Dependency
- webpack
  - webpack-dev-server
- Sass(dart-sass)
  - Autoprefixer
- Prettier
- Stylelint
- ESLint

## Command
### Development output, server and browser startup, change monitoring
``` bash
$ npm run dev
```

### Production Output
``` bash
$ npm run build
```
