# Portfolio Website

A clean, minimalist portfolio website built with Astro and Tailwind CSS, inspired by modern design aesthetics.

## Features

- 🎨 Clean, minimalist design
- 🌓 Dark mode support
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Lightning-fast performance with Astro
- 🎯 SEO-friendly
- 🖼️ Portfolio item components with flexible layouts

## Tech Stack

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Google Fonts** - Crimson Pro (serif) and Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Personal Information

Edit `src/pages/index.astro` to update:
- Your name in the hero section
- Bio/description text
- Social media links
- Portfolio items

### Add Portfolio Items

Use the `PortfolioItem` component to add new work:

```astro
<PortfolioItem
  date="Month Year"
  title="Project Title"
  description="Brief description of the project"
  link="https://example.com" // optional
  images={[
    { src: '/path/to/image.jpg', alt: 'Description' }
  ]}
  layout="single" // or "double" for two-column layout
/>
```

### Add Images

Place your images in the `public/assets/` directory and reference them like:

```astro
images={[{ src: '/assets/my-image.jpg', alt: 'My Image' }]}
```

### Change Colors

Edit `tailwind.config.mjs` to customize the color scheme.

### Change Fonts

Update the Google Fonts import in `src/styles/global.css` and font families in `tailwind.config.mjs`.

## Project Structure

```
/
├── public/
│   └── assets/        # Static assets (images, etc.)
├── src/
│   ├── components/
│   │   └── PortfolioItem.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## License

MIT
