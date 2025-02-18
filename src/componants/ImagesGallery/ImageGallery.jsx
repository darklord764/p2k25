import React, { useEffect, useState } from "react";
import { cn } from "./utils";
import './ImageGallery.css';

export const ImageGallery = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  imageWidth = 500, // Increased width
  imageHeight = 400 // Increased height
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative flex-shrink-0 overflow-hidden rounded-2xl"
            style={{
              width: typeof imageWidth === 'number' ? `${imageWidth}px` : imageWidth,
              height: typeof imageHeight === 'number' ? `${imageHeight}px` : imageHeight
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.alt || ''}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white">
                <p className="text-sm text-center">{item.caption}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};