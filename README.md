# Rafi Tours React Landing

Modern React landing page for a private guide in Baku and across Azerbaijan. Rebuilt from the original static study project and prepared to run on **GitHub Pages** with no backend.

## Features
- React + Vite
- Russian-first copy with browser-based auto language toggle (RU / EN)
- Uses selected optimized images from the original project
- Static deployment, perfect for GitHub Pages
- Contact buttons for WhatsApp / phone / email

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
### Option 1 — manual
1. Push this project to a GitHub repository.
2. Run `npm install` then `npm run build`.
3. Upload the `dist` folder contents to the `gh-pages` branch or configure GitHub Pages to publish from `dist` via an action.

### Option 2 — with gh-pages package
```bash
npm install
npm run deploy:gh
```

If your repository name changes, `base: './'` in `vite.config.js` keeps the output portable for project pages.

## Customization
Update these values in `src/App.jsx`:
- phone / WhatsApp number
- email address
- section text
- gallery images

## Source material
The design was rebuilt using photos and structure from the original `Rafi-Tours-main` archive.
