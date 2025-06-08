import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  alt: string;
  price: string;
  originalPrice?: string;
}

interface ProductSwiperProps {
  products: Product[];
  className?: string;
}

export const ProductSwiper = ({ products, className = '' }: ProductSwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastMoveTime = useRef<number>(0);
  const lastMoveX = useRef<number>(0);

  const itemsPerView = useMemo(() => ({
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }), []);

  const getItemsPerView = useCallback(() => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    if (window.innerWidth < 640) return itemsPerView.mobile; // sm breakpoint
    if (window.innerWidth < 1024) return itemsPerView.tablet; // lg breakpoint
    return itemsPerView.desktop;
  }, [itemsPerView]);

  const maxIndex = useMemo(() => Math.max(0, products.length - itemsVisible), [products.length, itemsVisible]);

  const snapToIndex = useCallback((index: number, immediate = false) => {
    const clampedIndex = Math.max(0, Math.min(maxIndex, index));
    setCurrentIndex(clampedIndex);
    setTranslateX(0);
    setVelocity(0);
    
    if (immediate) {
      setIsTransitioning(false);
    } else {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [maxIndex]);

  const handleStart = useCallback((clientX: number) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setIsDragging(true);
    setStartX(clientX);
    setStartTime(Date.now());
    setVelocity(0);
    setIsTransitioning(false);
    lastMoveTime.current = Date.now();
    lastMoveX.current = clientX;
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const timeDiff = now - lastMoveTime.current;
    const moveDiff = clientX - lastMoveX.current;
    
    // Calculate velocity for momentum
    if (timeDiff > 0) {
      setVelocity(moveDiff / timeDiff);
    }
    
    lastMoveTime.current = now;
    lastMoveX.current = clientX;
    
    const diff = clientX - startX;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const slideWidth = containerWidth / itemsVisible;
    
    // Apply resistance at boundaries
    let resistance = 1;
    if ((currentIndex === 0 && diff > 0) || (currentIndex === maxIndex && diff < 0)) {
      resistance = 0.3;
    }
    
    // Smooth resistance curve
    const maxDrag = slideWidth * 0.8;
    const clampedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff * resistance));
    
    // Use requestAnimationFrame for smooth updates
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(() => {
      setTranslateX(clampedDiff);
    });
  }, [isDragging, startX, itemsVisible, currentIndex, maxIndex]);

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const slideWidth = containerWidth / itemsVisible;
    const threshold = slideWidth * 0.25; // Lower threshold for mobile
    
    // Calculate momentum-based movement
    const momentumDistance = velocity * 200; // Reduced for better mobile control
    const totalDistance = translateX + momentumDistance;
    
    let newIndex = currentIndex;
    
    // Determine new index based on distance and velocity
    if (Math.abs(totalDistance) > threshold) {
      if (totalDistance > 0 && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (totalDistance < 0 && currentIndex < maxIndex) {
        newIndex = currentIndex + 1;
      }
    }
    
    // Add momentum for fast swipes (reduced sensitivity for mobile)
    if (Math.abs(velocity) > 0.3) {
      if (velocity > 0 && currentIndex > 0) {
        newIndex = Math.max(0, currentIndex - 1);
      } else if (velocity < 0 && currentIndex < maxIndex) {
        newIndex = Math.min(maxIndex, currentIndex + 1);
      }
    }
    
    snapToIndex(newIndex);
  }, [isDragging, translateX, velocity, currentIndex, maxIndex, itemsVisible, snapToIndex]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  }, [handleStart]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    handleEnd();
  }, [handleEnd]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleEnd();
    }
  }, [isDragging, handleEnd]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    // Don't prevent default to allow scroll if needed
    handleStart(e.touches[0].clientX);
  }, [handleStart]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault(); // Only prevent when actively dragging
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove, isDragging]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    handleEnd();
  }, [handleEnd]);

  const goToSlide = useCallback((index: number) => {
    snapToIndex(index);
  }, [snapToIndex]);

  const nextSlide = useCallback(() => {
    if (currentIndex < maxIndex) {
      snapToIndex(currentIndex + 1);
    }
  }, [currentIndex, maxIndex, snapToIndex]);

  const prevSlide = useCallback(() => {
    if (currentIndex > 0) {
      snapToIndex(currentIndex - 1);
    }
  }, [currentIndex, snapToIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  const transform = useMemo(() => {
    const slideWidth = 100 / itemsVisible;
    const baseTranslate = -currentIndex * slideWidth;
    
    if (isDragging || !isTransitioning) {
      const dragOffset = (translateX / (containerRef.current?.offsetWidth || 1)) * 100;
      return `translateX(${baseTranslate + dragOffset}%)`;
    }
    
    return `translateX(${baseTranslate}%)`;
  }, [currentIndex, itemsVisible, translateX, isDragging, isTransitioning]);

  const containerStyle = useMemo(() => ({
    transform,
    width: '100%',
    transition: (isDragging || !isTransitioning) ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }), [transform, isDragging, isTransitioning]);

  useEffect(() => {
    const handleResize = () => {
      const newItemsVisible = getItemsPerView();
      if (newItemsVisible !== itemsVisible) {
        setItemsVisible(newItemsVisible);
        // Reset to first slide when changing breakpoints
        snapToIndex(0, true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [getItemsPerView, snapToIndex, itemsVisible]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const renderStars = useCallback(() => (
    <div className="flex justify-center items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xs sm:text-sm">
          ★
        </span>
      ))}
    </div>
  ), []);

  const productCards = useMemo(() => products.map((product) => (
    <div 
      key={product.id}
      className="flex-shrink-0 px-2 sm:px-3 lg:px-4"
      style={{ 
        width: `${100 / itemsVisible}%`,
        minWidth: `${100 / itemsVisible}%`
      }}
    >
      <div className="text-center">
        <div className="aspect-[4/3] mb-3 sm:mb-4 lg:mb-6">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover rounded-md sm:rounded-lg"
            draggable={false}
          />
        </div>
        <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-1 sm:mb-2 text-[#333333] leading-tight">
          {product.name}
        </h3>
        {renderStars()}
        <div className="flex justify-center items-center gap-1 sm:gap-2">
          <p className="text-[13px] sm:text-[14px] lg:text-[16px] text-[#666666] font-medium">
            {product.price}
          </p>
          {product.originalPrice && (
            <p className="text-[11px] sm:text-[12px] lg:text-[14px] text-[#999999] line-through">
              {product.originalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  )), [products, renderStars, itemsVisible]);

  const paginationDots = useMemo(() => {
    if (products.length <= itemsVisible) return null;
    
    return (
      <div className="flex justify-center mt-4 sm:mt-5 lg:mt-6 gap-1.5 sm:gap-2" role="group" aria-label="Product slides pagination">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToSlide(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            tabIndex={0}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 ${
              index === currentIndex ? 'bg-[#333333]' : 'bg-[#cccccc]'
            }`}
          />
        ))}
      </div>
    );
  }, [products.length, itemsVisible, maxIndex, currentIndex, goToSlide]);

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={containerRef}
        className="overflow-hidden select-none"
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        role="button"
        aria-label="Product carousel - drag to navigate"
        tabIndex={0}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={handleKeyDown}
      >
        <div 
          className="flex will-change-transform"
          style={containerStyle}
        >
          {productCards}
        </div>
      </div>

      {/* Navigation Arrows - Responsive */}
      {products.length > itemsVisible && (
        <>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous products"
            className="absolute cursor-pointer left-1 sm:left-2 lg:left-4 top-1/3 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 sm:bg-white/95 hover:bg-white rounded-full shadow-md sm:shadow-lg flex items-center justify-center disabled:opacity-30 sm:disabled:opacity-50 disabled:cursor-not-allowed z-10 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label="Next products"
            className="absolute cursor-pointer right-1 sm:right-2 lg:right-4 top-1/3 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/90 sm:bg-white/95 hover:bg-white rounded-full shadow-md sm:shadow-lg flex items-center justify-center disabled:opacity-30 sm:disabled:opacity-50 disabled:cursor-not-allowed z-10 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {paginationDots}
    </div>
  );
}; 