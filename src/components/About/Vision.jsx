import React from "react";
export default function Vision() {
  return (
    <section className="flex flex-col pb-24">
      <div className="flex flex-col lg:flex-row gap-0">
        <div className="flex-1 justify-start">
          <img className="h-64 object-fit" src="../img/internet.jpg" alt="" />
        </div>
        <div className="flex-5 text-justify px-10 items-center">
          <h1 className="text-5xl font-bold pb-10 flex justify-center">
            Visi Kami.
          </h1>
          <p className="pb-4 text-3xl flex justify-center text-center">
            Menjadi Perusahaan Penyedia Barang & Jasa Yang Terlengkap Di
            Indonesia, Berbasis Edukasi, Inovasi & Layanan Purna Jual.
          </p>
        </div>
        <div className="flex-1 justify-end">
          <img className="h-64 object-fit" src="../img/internet.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
