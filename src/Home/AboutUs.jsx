import React from "react";

export default function AboutUs({
  img1,
  img2,
  headerAbout,
  isiAbout,
  headerVisi,
  subHeaderVisi,
  list1,
  list2,
  list3,
  list4,
  list5,
}) {
  return (
    <section className="relative mb-96 mt-42 sm:24 flex flex-col md:flex-row items-center justify-center p-4 space-y-6 md:space-y-0">
      {/* Image Section (Background Layer) */}
      <div className="relative md:absolute z-0 flex justify-center md:justify-end md:mr-[750px]">
        <div className="w-72 h-[350px] md:w-96 md:h-[450px] bg-white rounded-xl overflow-hidden shadow-lg">
          {img1}
          {img2}
        </div>
      </div>

      {/* About Us Section (Front Layer) */}
      <div className="relative md:absolute z-20 w-full md:w-[400px] h-auto md:h-[500px] bg-neutral-900 text-white rounded-2xl p-6 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">{headerAbout}</h2>
        <p className="text-[12px] text-justify mb-4">{isiAbout}</p>
        <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600">
          <a href="/About">Lebih Lanjut</a>
        </button>
      </div>

      {/* Visi & Misi Section */}
      <div className="relative md:absolute z-0 flex justify-center md:justify-start md:ml-[750px]">
        <div className="w-72 h-auto md:w-96 md:h-[450px] bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-2">{headerVisi}</h3>
          <p className="text-sm text-justify mb-4">{subHeaderVisi}</p>
          <ul className="text-[12px] text-justify text-red-600 space-y-2">
            {list1}
            {list2}
            {list3}
            {list4}
            {list5}
          </ul>
        </div>
      </div>
    </section>
  );
}
