import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const packages = [
  {
    index: 0,
    label: "B",
    title: "Berintegritas",
    desc: "Karyawan Baliyoni Group Menjunjung Kejujuran dan Konsistensi Antara Ucapan dan Tindakan.",
  },
  {
    index: 1,
    label: "A",
    title: "Adaptif",
    desc: "Karyawan Baliyoni Group Fleksibel Terhadap Perubahan dan Kebutuhan Pelanggan.",
  },
  {
    index: 2,
    label: "L",
    title: "Loyal",
    desc: "Karyawan Baliyoni Group Setia Pada Tim dan Tujuan Bersama.",
  },
  {
    index: 3,
    label: "I",
    title: "Inovatif",
    desc: "Karyawan Baliyoni Group Selalu Mencari Cara Lebih Baik.",
  },
  {
    index: 4,
    label: "Y",
    title: " Yasa",
    desc: "Karyawan Baliyoni Group Melayani Sepenuh Hati Sebagai Bentuk Pengabdian yang Membawa Kehormatan dan Kemuliaan Hidup.",
  },
  {
    index: 5,
    label: "O",
    title: " Optimis",
    desc: "Karyawan Baliyoni Group Percaya Pada Peluang Di Setiap Tantangan dan Bersikap Positif Dalam Setiap Langkah.",
  },
  {
    index: 6,
    label: "N",
    title: " Nyata",
    desc: "Karyawan Baliyoni Group Fokus Pada Hasil yang Konkret, Terukur & Berdampak.",
  },
  {
    index: 7,
    label: "I",
    title: "Intuitif",
    desc: "Karyawan Baliyoni Group Peka Terhadap Peluang Bisnis & Kebutuhan Tanpa Menunggu Arahan.",
  },
];

export default function BaliyoniCarousel() {
  return (
    <section className="bg-gray-50 p-6 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left section */}
        <div className="flex-1 flex flex-col items-start">
          <img
            src="../img/BYS_LOGO.png"
            alt="Telkomsel"
            className="w-70 mb-4 flex justify-center items-center   "
          />
          <h2 className="text-2xl font-bold text-black leading-snug">
            Kenapa Baliyoni Group?
            <br />
            <span className="font-semibold text-lg">
              Nilai utama Baliyoni Group :
            </span>
          </h2>
        </div>

        {/* Right section - Carousel */}
        <div className="flex-1 max-w-4xl">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={false}
            centerMode="natural"
            centerSlidePercentage={30}
            emulateTouch
            showArrows={false}
            autoPlay
            axis="horizontal"
            swipeable
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
                  <h3 className="text-xl font-bold text-red-600 mb-2">
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
          </Carousel>
        </div>
      </div>
    </section>
  );
}
