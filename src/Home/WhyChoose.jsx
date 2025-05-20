import React from "react";

export default function WhyChoose(){
return (
  <section className="relative justify-center mt-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-black">
            Kenapa Memilih Baliyoni Saguna Group?
          </h1>
        </div>
        <div className="text-center mt-2">
          <h2 className="text-xl font-medium text-black">
            Nilai utama Baliyoni Saguna Group :
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="w-full bg-white flex justify-center items-center p-4 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
            {[
              {
                label: "B",
                title: "Berintegritas",
                desc: "Karyawan Baliyoni Group Menjunjung Kejujuran dan Konsistensi Antara Ucapan dan Tindakan.",
              },
              {
                label: "A",
                title: "Adaptif",
                desc: "Karyawan Baliyoni Group Fleksibel Terhadap Perubahan dan Kebutuhan Pelanggan.",
              },
              {
                label: "L",
                title: "Loyal",
                desc: "Karyawan Baliyoni Group Setia Pada Tim dan Tujuan Bersama.",
              },
              {
                label: "I",
                title: "Inovatif",
                desc: "Karyawan Baliyoni Group Selalu Mencari Cara Lebih Baik.",
              },
              {
                label: "Y",
                title: " Yasa",
                desc: "Karyawan Baliyoni Group Melayani Sepenuh Hati Sebagai Bentuk Pengabdian yang Membawa Kehormatan dan Kemuliaan Hidup.",
              },
              {
                label: "O",
                title: " Optimis",
                desc: "Karyawan Baliyoni Group Percaya Pada Peluang Di Setiap Tantangan dan Bersikap Positif Dalam Setiap Langkah.",
              },
              {
                label: "N",
                title: " Nyata",
                desc: "Karyawan Baliyoni Group Fokus Pada Hasil yang Konkret, Terukur & Berdampak.",
              },
              {
                label: "I",
                title: "Intuitif",
                desc: "Karyawan Baliyoni Group Peka Terhadap Peluang Bisnis & Kebutuhan Tanpa Menunggu Arahan.",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="absolute -top-4 w-20 h-20 md:w-20 md:h-20 bg-red-600 rounded-full z-10 flex justify-center items-center">
                  <p className="text-white text-2xl md:text-4xl font-semibold">
                    {item.label}
                  </p>
                </div>
                <div className="mt-8 w-full h-[280px] md:h-[250px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col">
                  <h2 className="text-xl font-bold mb-2 text-center mt-4 text-white">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-md text-center mb-4 text-white flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  </section>
);
}