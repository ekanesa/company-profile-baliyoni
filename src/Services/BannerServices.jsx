import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerCard from "../Services/BannerCard"; // Adjust the import path as necessary

export default function BannerServices() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.children[0].clientWidth;
    carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.children[0].clientWidth;
    carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 mt-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-red-600">Layanan</span>
              <br />
              <span className="text-black">Kami</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {/* We offer a wide range of services to meet your needs, from product
              sales to network installation and hardware servicing. Explore our
              offerings below. */}
              Kami menawarkan berbagai layanan untuk memenuhi kebutuhan Anda,
              mulai dari penjualan produk hingga pemasangan jaringan dan servis
              perangkat keras. Jelajahi layanan kami :
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
              >
                <ChevronLeft className="w-5 h-5 " />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
              >
                <ChevronRight className="w-5 h-5 " />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex space-x-4 overflow-x-hidden scroll-smooth"
            >
              <BannerCard
                className="flex-none w-2/3 h-[500px]"
                title="Produk"
                subtitle="999 + Produk"
                imageSrc="../img/product.jpg"
                imageAlt="Product Services"
                link="https://balimall.id/"
              />
              <BannerCard
                className="flex-none w-2/3 h-[500px]"
                title="Jaringan"
                subtitle="Internet & Jaringan"
                imageSrc="../img/jaringan.jpg"
                imageAlt="Network Services"
                link="http://103.143.22.206/"
              />
              <BannerCard
                className="flex-none w-2/3 h-[500px]"
                title="Layanan Pusat Servis"
                subtitle="Servis Perangkat Keras"
                imageSrc="../img/service 1.jpg"
                imageAlt="Service Center"
                link="./pages/ServiceCentre"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Bahasa Inggris.
// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import BannerCard from "../Services/BannerCard"; // Adjust the import path as necessary

// export default function BannerServices() {
//   const carouselRef = useRef(null);

//   const handlePrev = () => {
//     if (!carouselRef.current) return;
//     const cardWidth = carouselRef.current.children[0].clientWidth;
//     carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
//   };

//   const handleNext = () => {
//     if (!carouselRef.current) return;
//     const cardWidth = carouselRef.current.children[0].clientWidth;
//     carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//   };

//   return (
//     <section id="services" className="py-16 mt-32">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-6 items-start">
//           {/* Left Section */}
//           <div>
//             <h2 className="text-5xl font-bold mb-6">
//               <span className="text-red-600">Layanan</span>
//               <br />
//               <span className="text-black">Kami</span>
//             </h2>
//             <p className="text-gray-600 text-lg mb-8">
//               {/* We offer a wide range of services to meet your needs, from product
//               sales to network installation and hardware servicing. Explore our
//               offerings below. */}
//               Kami menawarkan berbagai layanan untuk memenuhi kebutuhan Anda,
//               mulai dari penjualan produk hingga pemasangan jaringan dan servis
//               perangkat keras. Jelajahi layanan kami :
//             </p>
//             <div className="flex space-x-4">
//               <button
//                 onClick={handlePrev}
//                 className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
//               >
//                 <ChevronLeft className="w-5 h-5 " />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white"
//               >
//                 <ChevronRight className="w-5 h-5 " />
//               </button>
//             </div>
//           </div>

//           <div className="relative overflow-hidden">
//             <div
//               ref={carouselRef}
//               className="flex space-x-4 overflow-x-hidden scroll-smooth"
//             >
//               <BannerCard
//                 className="flex-none w-2/3 h-[500px]"
//                 title="Product"
//                 subtitle="999 + Product"
//                 imageSrc="../img/product.jpg"
//                 imageAlt="Product Services"
//                 link="https://balimall.id/"
//               />
//               <BannerCard
//                 className="flex-none w-2/3 h-[500px]"
//                 title="Jaringan"
//                 subtitle="Internet & Network"
//                 imageSrc="../img/jaringan.jpg"
//                 imageAlt="Network Services"
//                 link="http://103.143.22.206/"
//               />
//               <BannerCard
//                 className="flex-none w-2/3 h-[500px]"
//                 title="Service Center"
//                 subtitle="Hardware Service"
//                 imageSrc="../img/service 1.jpg"
//                 imageAlt="Service Center"
//                 link="./pages/ServiceCentre"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
