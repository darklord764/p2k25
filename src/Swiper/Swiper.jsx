import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResponsiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);
  
  const images = [
    { id: 1, alt: 'Slide 1' },
    { id: 2, alt: 'Slide 2' },
    { id: 3, alt: 'Slide 3' },
    { id: 4, alt: 'Slide 4' },
    { id: 5, alt: 'Slide 5' },
    { id: 6, alt: 'Slide 6' },
    { id: 7, alt: 'Slide 7' }
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 768) {
        setSlidesPerView(2);
      } else if (width < 1024) {
        setSlidesPerView(3);
      } else if (width < 1280) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + slidesPerView >= images.length ? 0 : prevIndex + 1
    );
  }, [images.length, slidesPerView]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, images.length - slidesPerView) : prevIndex - 1
    );
  }, [images.length, slidesPerView]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Calculate visible slides
  const visibleSlides = images.slice(currentIndex, currentIndex + slidesPerView);
  // If we need more slides to fill the view, wrap around to the beginning
  if (visibleSlides.length < slidesPerView) {
    visibleSlides.push(...images.slice(0, slidesPerView - visibleSlides.length));
  }

  return (
    <div className="relative w-full px-8">
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slides Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ 
            transform: `translateX(-${(currentIndex * (100 / slidesPerView))}%)`,
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <img
                  src={`/api/placeholder/640/360`}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;