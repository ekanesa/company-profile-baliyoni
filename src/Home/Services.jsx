import React from "react";


export default function Services({header, Sub, img1, titleService1, descService1, btnService1, img2, titleService2, descService2, btnService2, img3, titleService3, descService3, btnService3}) {
  return (
    <section className="flex items-center justify-center">
      <div className="relative justify-center">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-black">{header}</h1>
        </div>
        <div className="text-center mt-2">
          <h2 className="text-xl font-medium text-black">{Sub}</h2>
        </div>

        <div className="w-full bg-white flex justify-center items-center p-4 md:p-10">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            {/* Card 1 */}
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-2 w-20 h-20 md:w-24 md:h-24 bg-black rounded-full z-10 flex justify-center items-center">
                {img1}
              </div>
              <div className="mt-12 w-[90vw] md:w-[400px] h-[350px] md:h-[300px] bg-white rounded-2xl p-6 shadow-xl flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-center mt-10">
                  {titleService1}
                </h3>
                <p className="text-sm text-justify flex-grow">{descService1}</p>
                <div className="mt-auto">
                  <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
                    {btnService1}
                  </button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-2 w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full z-10 flex justify-center items-center">
                {img2}
              </div>
              <div className="mt-12 w-[90vw] md:w-[400px] h-[350px] md:h-[300px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col hover:outline hover:outline-white">
                <h3 className="text-xl font-bold mb-2 text-center mt-10 text-white">
                  {titleService2}
                </h3>
                <p className="text-sm text-justify text-white flex-grow">
                  {descService2}
                </p>
                <div className="mt-auto">
                  <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-md">
                    {btnService2}
                  </button>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-2 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full z-10 flex justify-center items-center">
                {img3}
              </div>
              <div className="mt-12 w-[90vw] md:w-[400px] h-[350px] md:h-[300px] bg-red-600 rounded-2xl p-6 shadow-xl flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-center mt-10 text-white">
                  {titleService3}
                </h3>
                <p className="text-sm text-justify flex-grow text-white">
                  {descService3}
                </p>
                <div className="mt-auto">
                  <button className="bg-white text-red-600 text-sm px-4 py-2 rounded-md">
                    {btnService3}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
