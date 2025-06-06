import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel"; // Import Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the required CSS

export default function Banner({ images }) {
  const carouselRef = useRef(null);

  // UseEffect to trigger autoplay when page reloads
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.moveTo(0); // Ensure carousel starts at first slide
    }
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 mb-[400px] h-screen">
      <div className="text-center lg:text-left flex-1 flex justify-center items-center w-screen">
        {/* Carousel Section */}
        <Carousel
          ref={carouselRef}
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          interval={3000} // Set interval for auto change (3 seconds)
          transitionTime={500} // Set transition time (500ms)
        >
          {images.map((image, index) => (
            <div className="h-full w-full" key={index}>
              <img
                src={image}
                alt={`carousel-image-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
