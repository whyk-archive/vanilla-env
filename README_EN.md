# Vanilla Env
Environment that compiles TypeScript and SCSS only with Parcel and compresses the image.  
Solution when Vue cannot be used.

## Usage
Click "Use this template" in the capture below to create a new repository
![image](https://user-images.githubusercontent.com/16016681/77091623-2b049200-6a4c-11ea-99f7-d22fd408989c.png)

## Feature
- Compile TypeScript
- Compile SCSS, add vendor prefix
- Image compression
- HTML, SCSS, JavaScript(TypeScript), image modification and monitoring

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
`yarn dev`'s support for multiple pages is weak.
When starting the local server, it will not be displayed unless you write `/ index.html` in the path.