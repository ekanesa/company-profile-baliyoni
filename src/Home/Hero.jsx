import React from "react";
import BackgroundEffect from "./BackgroundEffect"; // Adjust the import path as necessary
import { Carousel } from "react-responsive-carousel"; // Import Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the required CSS


// Hero.jsx
export default function Hero({ title, subtitle, sub, images }) {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 mb-[400px] px-10">
      <BackgroundEffect />
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-red-500 sm:text-3xl">
            {subtitle}
          </p>
          <p className="text-2xl font-semibold text-red-500 sm:text-2xl">
            {sub}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-x-6 gap-y-4">
            <a
              href="#"
              className="rounded-md bg-red-500 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {/* Carousel Section */}
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000} // Set interval for auto change (3 seconds)
            transitionTime={500} // Set transition time (500ms)
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`carousel-image-${index}`}
                  className="flex items-center w-full max-w-[650px] mx-auto"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
