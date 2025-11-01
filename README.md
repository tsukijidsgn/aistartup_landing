# AI SaaS Landing Page

A modern, responsive AI SaaS landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with gradients and smooth animations
- 📱 Fully responsive design
- 🤖 Interactive AI chatbot
- ✨ Scroll-triggered animations
- 🎯 WebGL animated background (FaultyTerminal)
- 💚 Beautiful green theme matching AI aesthetics

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **OGL** - WebGL rendering

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Build for production
npm run build

# The static files will be in the 'out' directory
```

## Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

The site is automatically deployed when you push to the `main` branch.

### Manual Setup

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select "GitHub Actions" as the source
5. The workflow will automatically deploy on push to main

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── Chatbot.tsx
│   └── ...
├── public/           # Static assets
└── styles/          # Global styles
```

## License

MIT
