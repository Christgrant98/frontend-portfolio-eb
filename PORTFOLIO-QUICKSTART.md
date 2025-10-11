# Portfolio Masonry - Quick Start Guide

## 🚀 Setup (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Place your original high-resolution images in `raw/portfolio/`:

```bash
# Your images should be named sequentially
raw/portfolio/
  ├── 01.jpg  (or .png, .webp)
  ├── 02.jpg
  ├── 03.jpg
  └── ... (up to 14 images recommended)
```

### 3. Generate Optimized Images

```bash
npm run build:images
```

This will create:
- ✅ Blur placeholders (~2KB each)
- ✅ 4 responsive sizes per image (480/768/1080/1600px)
- ✅ WebP format for optimal compression
- ✅ Output to `public/portfolio/`

### 4. Update Image Data

Edit `src/data/portfolio.ts` to match your images:

```typescript
export const portfolioItems: GalleryItem[] = [
  {
    id: '01',
    src: '/portfolio/01.webp',
    blurSrc: '/portfolio/01.blur.jpg',
    alt: 'Your descriptive alt text',  // ⚠️ Important for SEO!
    width: 1600,   // Use actual dimensions
    height: 2400,  // from your original image
    caption: 'Optional caption text',
  },
  // ... add more items
];
```

### 5. Run Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173/portfolio`

## ✅ Verification Checklist

- [ ] Images display in masonry layout
- [ ] Blur placeholders show before images load
- [ ] No layout shift when scrolling
- [ ] Responsive: 1 column (mobile) → 2 (tablet) → 3 (desktop)
- [ ] CTA button appears at the bottom
- [ ] All images have descriptive `alt` text

## 🔧 Common Adjustments

### Change Number of Columns

Edit `src/components/PortfolioMasonry.tsx` line 24:

```tsx
// Default: 1, 2, 3 columns
<div className="columns-1 sm:columns-2 lg:columns-3">

// Alternative: 1, 2, 3, 4 columns
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
```

### Adjust Image Quality

Edit `scripts/build-images.mjs`:

```javascript
webpQuality: 78,  // Higher = better quality, larger files
```

### Change Gap Between Images

Edit `src/components/PortfolioMasonry.tsx` line 24:

```tsx
// Default: gap-6 (1.5rem / 24px)
<div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
//                                                  ^^^^ change to gap-4, gap-8, etc.
```

## 📊 Performance Targets

✅ **What You Should See:**
- Each image: 120-180 KB
- Total page: < 3 MB
- Lighthouse Performance: > 90
- CLS (Cumulative Layout Shift): < 0.1

## 🐛 Troubleshooting

### "Images not showing"
1. Check `public/portfolio/` directory exists
2. Run `npm run build:images` again
3. Refresh browser with hard reload (Cmd+Shift+R / Ctrl+Shift+R)

### "Script fails with sharp error"
```bash
# Reinstall sharp
npm uninstall sharp
npm install sharp
```

### "Wrong image dimensions"
Get actual dimensions with:
```bash
# macOS
sips -g pixelWidth -g pixelHeight raw/portfolio/01.jpg

# Linux (requires imagemagick)
identify -format "%wx%h" raw/portfolio/01.jpg
```

## 📸 Image Tips

**Best Practices:**
- ✅ High resolution originals (2000px+ on long edge)
- ✅ Consistent aspect ratios look better in masonry
- ✅ Mix of portrait (2:3) and landscape (3:2) creates visual interest
- ✅ JPG quality 90+ or PNG for originals
- ⚠️ Avoid very wide panoramas (breaks layout)

## 🎨 Integration with Existing App

The portfolio page is already integrated at `/portfolio`.

To add a navigation link, edit your menu component:

```tsx
<Link to="/portfolio">Portfolio</Link>
```

## 📚 Need More Help?

See full documentation: `README-PORTFOLIO.md`

## 🎉 You're Done!

Your portfolio is now optimized and ready for production. The images will automatically be regenerated before each build via the `prebuild` script.

