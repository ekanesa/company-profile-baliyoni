import React from "react";
export default function Services() {
  return (
    <section className="p-4 md:p-10">
      <div className="relative overflow-hidden h-48 flex items-center bg-white">
        {/* Marquee track - satu div saja, berisi isi + duplikat */}
        <div className="flex animate-marquee whitespace-nowrap absolute left-0 top-1/2 transform -translate-y-1/2 w-max">
          {[
            "../img/asus.png",
            "../img/acer.png",
            "../img/axioo.png",
            "../img/daikin.png",
            "../img/epson.png",
            "../img/hp.png",
            "../img/panasonic.png",
            "../img/mitsubisi.png",
          ].map((src, index) => (
            <img
              key={index}
              className="mx-4 w-[96px] h-[96px]"
              src={src}
              alt={`brand-${index}`}
            />
          ))}

          {/* Duplikat langsung menyambung */}
          {[
            "../img/asus.png",
            "../img/acer.png",
            "../img/axioo.png",
            "../img/daikin.png",
            "../img/epson.png",
            "../img/hp.png",
            "../img/panasonic.png",
            "../img/mitsubisi.png",
          ].map((src, index) => (
            <img
              key={`dup-${index}`}
              className="mx-4 w-[96px] h-[96px]"
              src={src}
              alt={`brand-dup-${index}`}
            />
          ))}
        </div>

        {/* Static title */}
        <div className="relative z-10 bg-white pr-5 py-5 text-4xl font-bold">
          <div className="flex items-center justify-start">
            <p className="self-start">Partner Kami</p>
          </div>
        </div>
      </div>
    </section>
  );
}
