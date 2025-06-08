import React from "react";

export default function HeroContact() {
  return (
    <section>
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('../img/mobile-service.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl font-bold">Hubungi Kami</h1>
        </div>
      </div>
    </section>
  );
}
