"use client";
import React, { useState } from "react";

const packages = [
  {
    index: 0,
    label: "B",
    title: "Berpikir Strategis",
    desc: "Berpikir Strategis, Baliyoni Group Mampu Melihat Gambaran Besar & Merencanakan Dengan Visi Jangka Panjang.",
  },
  {
    index: 1,
    label: "A",
    title: "Akurasi Dalam Proses",
    desc: "Baliyoni Group Teliti dan Rapi Dalam Menjalankan Prosedur Bisnis, Terutama Dalam Hal Dokumentasi dan Pengadaaan.",
  },
  {
    index: 2,
    label: "L",
    title: "Layanan yang Responsif",
    desc: "Baliyoni Group Cepat Merespons Kebutuhan Pelanggan dan Mitra Dengan Solusi Yang Tepat dan Bersikap Ramah.",
  },
  {
    index: 3,
    label: "I",
    title: "Inovatif Dalam Solusi",
    desc: "Baliyoni Group Mampu Menciptakan Atau Mengusulkan Ide-Ide Baru Untuk Efisiensi, Efektifitas dan Nilai Tambah",
  },
  {
    index: 4,
    label: "Y",
    title: "Yakin Pada Kualitas",
    desc: "Baliyoni Group Menjaga Standar Tinggi Dalam Setiap Pekerjaan.",
  },
  {
    index: 5,
    label: "O",
    title: "Orientasi Pada Hasil",
    desc: "Baliyoni Group Fokus Pada Pencapaian Target dan Hasil Nyata Yang Berdampak Langsung Pada Kemajuan Bisnis.",
  },
  {
    index: 6,
    label: "N",
    title: "Negosiasi Yang Cerdas",
    desc: " Baliyoni Group Mampu Menyusun Argumen, Membangun Hubungan dan Menciptakan Kesepakatan Yang Saling Menguntungkan.",
  },
  {
    index: 7,
    label: "I",
    title: "Integritas Dalam Tindakan",
    desc: "Baliyoni Group Menjalankan Pekerjaan Dengan Jujur, Konsisten, dan Berani Menolak Praktik Yang Tidak Sesuai Etika.",
  },
];

export default function Karir() {
  // State untuk melacak slide yang aktif
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi untuk berpindah ke slide sebelumnya
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? packages.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk berpindah ke slide berikutnya
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === packages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gray-50 p-6 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left section */}
        <div className="flex-1 flex flex-col items-start">
          <img
            src="../img/BYS_LOGO.png"
            alt="Telkomsel"
            className="w-70 mb-4 flex justify-center items-center"
          />
          <h2 className="text-2xl font-bold text-black leading-snug">
            Kenapa Baliyoni Group?
            <br />
            <span className="font-semibold text-lg">
              Nilai utama Baliyoni Group :
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-4 w- h-auto mt-6 rounded-full">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="flex justify-center items-center mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6" // Size of the SVG icon
              >
                <path
                  fill="currentColor"
                  d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="flex justify-center items-center mt-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-6 h-6" // Size of the SVG icon
              >
                <path
                  fill="currentColor"
                  d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right section - Carousel */}
        <div className="flex-1 max-w-4xl">
          {/* Carousel Content */}
          <div className="relative">
            <div className="flex justify-start items-center overflow-hidden">
              {/* Slide container - set flex to row for horizontal layout */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 12.5}%)`, // Menggeser sesuai dengan index aktif
                }}
              >
                {packages.map((pkg) => (
                  <div
                    key={pkg.index}
                    className="bg-white rounded-2xl mx-2 my-2 shadow-md flex flex-col w-60 h-80"
                  >
                    <div>
                      <div className="text-2xl text-white font-semibold bg-red-600 rounded-t-xl px-4 py-2 mb-4 h-16 flex items-center justify-center">
                        {pkg.label}
                      </div>
                      <h3 className="flex items-center justify-center px-4 text-xl font-bold text-red-600 mb-2 ">
                        {pkg.title}
                      </h3>
                      <div className="flex justify-center pt-2 p-2">
                        <span className="font-medium text-md text-black">
                          {pkg.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
