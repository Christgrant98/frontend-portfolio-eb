/**
 * Next.js Version of Portfolio Masonry
 * 
 * This component uses Next.js Image component with built-in optimization
 * Usage: Replace PortfolioMasonry with this component in Next.js projects
 */

import React from 'react';
import Image from 'next/image';

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  href?: string;
  blurDataURL?: string; // Base64 blur data or path to blur image
};

type Props = {
  items: GalleryItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
};

const PortfolioMasonryNext: React.FC<Props> = ({
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
            <GalleryImageNext key={item.id} item={item} />
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

type GalleryImageNextProps = {
  item: GalleryItem;
};

const GalleryImageNext: React.FC<GalleryImageNextProps> = ({ item }) => {
  const aspectRatio = (item.height / item.width) * 100;

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
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder={item.blurDataURL ? 'blur' : 'empty'}
          blurDataURL={item.blurDataURL}
          className="object-cover"
          quality={85}
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

export default PortfolioMasonryNext;

