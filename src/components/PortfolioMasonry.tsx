import React, { useState } from 'react';

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  href?: string;
  blurSrc?: string;
};

type Props = {
  items: GalleryItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
};

const PortfolioMasonry: React.FC<Props> = ({
  items,
  ctaLabel = 'View All Work',
  onCtaClick,
}) => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Grid - CSS Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item) => (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Button */}
        {onCtaClick && (
          <div className="flex justify-center mt-16">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-black text-white rounded-full font-medium text-base
                       hover:bg-gray-800 transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                       shadow-lg hover:shadow-xl"
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

type GalleryImageProps = {
  item: GalleryItem;
};

const GalleryImage: React.FC<GalleryImageProps> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const aspectRatio = (item.height / item.width) * 100;

  // Generate srcSet for responsive images
  const srcSet = [480, 768, 1080, 1600]
    .map((width) => {
      const filename = item.src.replace(/\.(webp|jpg|jpeg|png)$/, `@${width}.webp`);
      return `${filename} ${width}w`;
    })
    .join(', ');

  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  const content = (
    <figure
      className="break-inside-avoid mb-0 rounded-lg overflow-hidden shadow-md 
                 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]
                 bg-gray-100"
    >
      {/* Image Container with aspect ratio to prevent CLS */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: `${aspectRatio}%` }}
      >
        {/* LQIP Blur Placeholder */}
        {item.blurSrc && !isLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.blurSrc})`,
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
            }}
          />
        )}

        {/* Main Image */}
        <img
          src={item.src}
          srcSet={srcSet}
          sizes={sizes}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
                     ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Caption */}
      {item.caption && (
        <figcaption className="p-4 text-sm text-gray-700 bg-white">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );

  // Wrap in link if href provided
  if (item.href) {
    return (
      <a
        href={item.href}
        className="block focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-lg"
        aria-label={`View ${item.alt}`}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default PortfolioMasonry;

