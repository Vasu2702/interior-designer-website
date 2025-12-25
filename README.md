# Serene Spaces — Interior Designer Website (React + Vite)

This is a beginner-friendly React website built with **Vite** for an **Interior Designer** company.

## What you’re building

A single-page website with these sections:
- Home (hero banner)
- About
- Services
- Portfolio (image placeholders)
- Contact (form)

## Folder structure (what each folder is for)

```
Reactproj/
  index.html               # The one HTML file (React mounts into #root here)
  package.json             # Project info + dependencies + scripts (dev/build)
  vite.config.js           # Vite configuration
  public/
    placeholder.svg        # Placeholder image used in the portfolio
  src/
    main.jsx               # Entry point: renders <App /> into #root
    App.jsx                # Main page layout: puts all sections together
    index.css              # Global CSS (fonts, colors, containers)
    App.css                # Styles for sections/components
    components/            # Small reusable pieces (React components)
      Header.jsx
      Hero.jsx
      About.jsx
      Services.jsx
      Portfolio.jsx
      Contact.jsx
      Footer.jsx
```

## Step 1: Install Node.js (on Mac)

You need Node.js to run React projects.

### Option A (recommended for beginners): install with Homebrew
1) Install Homebrew (if you don’t have it):
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2) Install Node.js:
```bash
brew install node
```

3) Check it worked:
```bash
node -v
npm -v
```

### Option B: download installer
Download Node.js LTS from: `https://nodejs.org/`

## Step 2: Install project dependencies

From the project folder:
```bash
cd /Users/vasu.mittal/Reactproj
npm install
```

## Step 3: Run the project (local server)

```bash
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Step 4: Edit text/images

### Edit text
- Home hero text: `src/components/Hero.jsx`
- About text: `src/components/About.jsx`
- Services list: `src/components/Services.jsx`
- Portfolio titles: `src/components/Portfolio.jsx`
- Contact details: `src/components/Contact.jsx`

### Replace portfolio images
Right now the site uses a placeholder: `public/placeholder.svg`

To use real images:
1) Put your images in `public/` (example: `public/project1.jpg`)
2) Update the `<img src="/placeholder.svg" ... />` to `<img src="/project1.jpg" ... />`

## Step 5: Build for production

```bash
npm run build
```

This creates a `dist/` folder — that’s the production website.

## Step 6: Preview the production build locally

```bash
npm run preview
```

## Deploy (simple options)

### Option A: Netlify (very beginner-friendly)
- Build command: `npm run build`
- Publish directory: `dist`

### Option B: Vercel
- Framework preset: Vite
- Output directory: `dist`


