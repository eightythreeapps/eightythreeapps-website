# EightyThree Apps Website

A modern Next.js website with frosted glass aesthetic, light/dark mode support, and theme-aware app icons.

## Features

- ✨ **Frosted Glass Design** - Beautiful backdrop blur effects with subtle borders
- 🌙 **Theme Support** - Automatic light/dark mode detection with manual override
- 🎨 **Theme-Aware Icons** - Dynamic switching between light and dark app icons
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Performance** - Built with Next.js 15, React 19, and Tailwind CSS 4
- 📝 **MDX Blog** - Content management with frontmatter support
- 🔧 **TypeScript** - Strict mode with path aliases for better DX

## Tech Stack

- **Next.js 15.5.4** with Turbopack
- **React 19.1.0** with TypeScript
- **Tailwind CSS 4** with PostCSS
- **MDX** for blog content
- **Lucide React** for icons
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eightythreeapps/eightythreeapps-website.git
cd eightythreeapps-website
```

2. Install dependencies:
```bash
npm install
```

3. Add your app icons to the `public` directory:
   - `AppIconLight-1024.png` (1024x1024px)
   - `AppIconDark-1024.png` (1024x1024px)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run export` - Build static site for deployment

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme system and global styles
│   ├── layout.tsx           # Root layout with theme toggle
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   └── blog/
│       ├── page.tsx         # Blog listing
│       └── [slug]/page.tsx  # Individual blog posts
├── components/
│   ├── ThemeToggle.tsx      # Theme switching component
│   └── ThemeAwareAppIcon.tsx # Dynamic icon component
├── content/
│   └── posts/              # MDX blog posts
└── lib/
    ├── assets.ts           # Asset management utilities
    └── blog.ts             # Blog utilities
```

## Theming System

The website uses CSS custom properties for theming, with automatic system theme detection and manual override options. The theme system includes:

- Light and dark color schemes
- Smooth transitions between themes
- Frosted glass effects with backdrop-filter
- Theme-aware components and icons

## Blog System

The blog uses MDX for content management with:

- Frontmatter support for metadata
- Automatic post discovery
- Type-safe blog utilities
- Static generation for performance

## Deployment

This project is configured for static site generation and can be deployed to any static hosting service:

- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.