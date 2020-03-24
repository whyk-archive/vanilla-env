# Vanilla Env
Compile TypeScript and SCSS with only Parcel to compress images  
For situations where you can't use Vue or something like that.

## Usage
Click on "Use this template" to create a new repository.
![image](https://user-images.githubusercontent.com/16016681/77091623-2b049200-6a4c-11ea-99f7-d22fd408989c.png)

## Feature
- Compile TypeScript
- Compiling SCSS and giving vendor prefixes
- Image Compression
- HTML, SCSS, JavaScript(TypeScript) and image change monitoring

## Dependences
- Parcel - the bundle tool for no-config
- Lynt - A lint tool for no-conference
- TypeScript - a JavaScript extension language
- Sass - CSS extension language
  - Autoprefixer - A tool that automatically adds vendor prefixes to CSS

## Command
### Development output, server and browser startup, change monitoring
```
yarn dev
```

### Production output
```
yarn build
```

## Precautions for use
Support for multiple pages in `yarn dev` is weak.  
When you start the local server, you need to add `/index.html` to the end of the path.