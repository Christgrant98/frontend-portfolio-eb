# Portfolio Masonry Gallery

A high-performance, responsive portfolio gallery with CSS-based masonry layout, optimized images, and zero layout shift (CLS).

## ✨ Features

- **CSS Masonry Layout**: Pure CSS multi-column layout (no JS dependencies)
- **Responsive Images**: Automatic srcset generation with 4 sizes (480/768/1080/1600px)
- **Performance Optimized**:
  - Lazy loading with `loading="lazy"`
  - Low-Quality Image Placeholders (LQIP) with blur effect
  - WebP format for modern browsers
  - Zero Cumulative Layout Shift (CLS)
- **Accessibility**: Proper semantic HTML with `figure`/`figcaption`, focus states, ARIA labels
- **TypeScript**: Fully typed components
- **Tailwind CSS**: Utility-first styling

## 📦 Installation

1. **Install dependencies**:

```bash
npm install
```

This will install all required dependencies, including `sharp` for image processing.

2. **Create the raw images directory**:

```bash
mkdir -p raw/portfolio
```

3. **Add your original images** to `raw/portfolio/`:

```
raw/portfolio/
  ├── 01.jpg
  ├── 02.jpg
  ├── 03.jpg
  └── ...
```

Supported formats: JPG, JPEG, PNG, WebP, TIFF

## 🚀 Usage

### Generate Optimized Images

Run the image optimization script:

```bash
npm run build:images
```

This will:
- Read original images from `raw/portfolio/`
- Generate blur placeholders (20px, ~2KB each)
- Generate 4 WebP variants per image (480/768/1080/1600px)
- Output to `public/portfolio/`

Expected output structure:

```
public/portfolio/
  ├── 01.webp
  ├── 01@480.webp
  ├── 01@768.webp
  ├── 01@1080.webp
  ├── 01@1600.webp
  ├── 01.blur.jpg
  ├── 02.webp
  └── ...
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` and navigate to the portfolio page.

### Production Build

```bash
npm run build
```

The `prebuild` script will automatically run image optimization before building.

## 📁 Project Structure

```
src/
├── components/
│   ├── PortfolioMasonry.tsx      # Main component (Vite/React)
│   └── PortfolioMasonryNext.tsx  # Next.js version
├── data/
│   └── portfolio.ts               # Gallery items data
├── pages/
│   └── PortfolioPage.tsx          # Portfolio page
└── ...

scripts/
└── build-images.mjs               # Image optimization script

raw/
└── portfolio/                     # Your original images (not in repo)

public/
└── portfolio/                     # Optimized images (git ignored)
```

## 🎨 Customization

### Add/Update Images

1. Add new images to `raw/portfolio/` (e.g., `15.jpg`)
2. Run `npm run build:images`
3. Update `src/data/portfolio.ts`:

```typescript
{
  id: '15',
  src: '/portfolio/15.webp',
  blurSrc: '/portfolio/15.blur.jpg',
  alt: 'Description of your image',
  width: 1600,
  height: 1200,
  caption: 'Optional caption',
}
```

### Adjust Image Quality

Edit `scripts/build-images.mjs`:

```javascript
const CONFIG = {
  widths: [480, 768, 1080, 1600],  // Output widths
  webpQuality: 78,                  // WebP quality (0-100)
  blurQuality: 35,                  // Blur placeholder quality
};
```

### Change Layout Columns

Edit `PortfolioMasonry.tsx`:

```tsx
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
  {/* Change to 4 columns on xl screens */}
</div>
```

## 🔧 Component API

### PortfolioMasonry Props

```typescript
type GalleryItem = {
  id: string;           // Unique identifier
  src: string;          // Path to main image
  alt: string;          // Alt text (required for a11y)
  width: number;        // Original width in pixels
  height: number;       // Original height in pixels
  caption?: string;     // Optional caption
  href?: string;        // Optional link destination
  blurSrc?: string;     // Path to blur placeholder
};

type Props = {
  items: GalleryItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
};
```

### Usage Example

```tsx
import PortfolioMasonry from '@/components/PortfolioMasonry';
import { portfolioItems } from '@/data/portfolio';

function MyPortfolioPage() {
  const handleCta = () => {
    // Navigate or perform action
    console.log('CTA clicked');
  };

  return (
    <PortfolioMasonry
      items={portfolioItems}
      ctaLabel="Get In Touch"
      onCtaClick={handleCta}
    />
  );
}
```

## 🎯 Performance Targets

- **Image Size**: 120-180 KB per large image (1600px)
- **Total Page Weight**: < 3 MB
- **Lighthouse Scores**:
  - Performance: ≥ 90
  - Accessibility: ≥ 90
  - Best Practices: ≥ 90
  - SEO: ≥ 90
- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): < 2.5s
  - CLS (Cumulative Layout Shift): < 0.1
  - FID (First Input Delay): < 100ms

## 🔍 Testing Checklist

- [ ] Viewport resize: Check 1→2→3 column transitions
- [ ] No layout shift: Images load without jumping (CLS ≈ 0)
- [ ] Keyboard navigation: Tab to CTA, visible focus states
- [ ] Slow network: LQIP displays, then sharp image loads
- [ ] Screen reader: Alt text and captions are announced
- [ ] Lighthouse audit: All scores ≥ 90

## 📱 Next.js Version

For Next.js projects, use `PortfolioMasonryNext.tsx`:

```tsx
import PortfolioMasonryNext from '@/components/PortfolioMasonryNext';
```

Key differences:
- Uses `next/image` with automatic optimization
- Supports `blurDataURL` for placeholder
- No manual srcset needed (Next.js handles it)
- Place images in `/public/portfolio/`

## 🐛 Troubleshooting

### Images not loading

1. Verify files exist in `public/portfolio/`
2. Check browser console for 404 errors
3. Ensure filenames match exactly (case-sensitive)

### Build script fails

1. Check Node.js version (requires ≥ 18)
2. Verify `sharp` is installed: `npm list sharp`
3. Check input directory exists: `ls raw/portfolio/`

### Layout issues

1. Ensure Tailwind is properly configured
2. Check that all images have correct `width` and `height` values
3. Verify no conflicting CSS rules

## 📚 Resources

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Tailwind CSS Columns](https://tailwindcss.com/docs/columns)
- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [MDN `<picture>` Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

## 📝 License

MIT

