import React, { useState, useEffect } from "react";

export default function Carousel() {
  // State untuk melacak gambar yang aktif
  const [activeIndex, setActiveIndex] = useState(0);

  const images = ["../img/BYS_LOGO.png", "../img/savage.jpeg"];

  // Fungsi untuk berpindah ke gambar berikutnya secara otomatis
  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto loop - ganti gambar setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // 3000ms = 3 detik

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 mb-[300px] h-screen">
      <div
        id="controls-carousel"
        className="relative w-screen max-w-screen h-full"
        data-carousel="static"
      >
        <div className="relative h-[850px] overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out transition-transform ${
                activeIndex === index ? "block" : "hidden"
              }`}
              data-carousel-item={activeIndex === index ? "active" : ""}
            >
              <img
                src={image}
                className="absolute block w-full h-full object-cover"
                alt={`carousel-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
