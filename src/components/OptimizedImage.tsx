import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // In a real application, you would generate webp/avif variants on build or via CDN.
  // Here, we demonstrate the <picture> tag structure and progressive loading for the portfolio.

  // Create a pseudo-avif/webp source purely for demonstration
  const srcBase = src.split('?')[0];
  const queryParams = src.includes('?') ? '?' + src.split('?')[1] : '';

  return (
    <div className={`relative overflow-hidden bg-brand-text/5 ${className}`}>
      {/*
        Demonstrating the picture tag for modern formats.
        Since we use unsplash, we can actually append fmt=avif & fmt=webp to the url.
      */}
      <picture>
        <source type="image/avif" srcSet={`${srcBase}${queryParams ? queryParams + '&' : '?'}fm=avif`} />
        <source type="image/webp" srcSet={`${srcBase}${queryParams ? queryParams + '&' : '?'}fm=webp`} />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0 scale-105'
          }`}
        />
      </picture>

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-brand-text/20 border-t-montessori-blue rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
