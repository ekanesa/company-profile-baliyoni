import React from "react";
export default function Moto() {
  return (
    <section className="flex flex-col gap-4 px-10 pb-24">
      <h1 className="text-5xl font-bold flex justify-center">
        <span className="text-red-500">Moto</span> <span></span> Kami.
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-5 text-justify">
          <p className="pb-4  text-7xl font-bold flex justify-center">
            One Stop Solution
          </p>
          <p className="text-5xl font-semibold flex justify-center">
            Solusi Tuntas, Bahagia Pantas.
          </p>
        </div>
      </div>
    </section>
  );
}
