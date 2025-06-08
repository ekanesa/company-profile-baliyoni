import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // 1. load the AOS styles

export default function FadeItem() {
  // initialize AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 800, // how long the animation runs
      easing: "ease-in-out",
      once: false, // whether animation should happen only once - while scrolling down
    });
    AOS.refresh(); // re-scan for new elements
  }, []);

  const features = [
    {
      key: "teknisi",
      heading: (
        <>
          Teknisi <span className="text-red-500">Profesional</span>.
        </>
      ),
      img: "../img/service 1.jpg",
      description:
        "Teknisi Professional kami selalu siap membantu anda dalam mewujudkan sebuah produktifitas dan kinerja terbaik dari produk-produk kami yang akan anda gunakan sehari-hari. Seperti Pemasangan (Installation), Perawatan (Treatment), Perbaikan (Maintenance) Hardware and Tools, dan juga penggantian produk kami. Semua itu kami lakukan demi kenyamanan costumer dalam menggunakan produk kami dalam jangka panjang dan berkesinambungan.",
      aos: "fade-right",
      reverse: true,
    },
    {
      key: "part",
      heading: (
        <>
          Ketersediaan <span className="text-red-500">Spare Part</span>.
        </>
      ),
      img: "../img/product.jpg",
      description:
        "Dalam mendukung sebuah hubungan jangka panjang dan berkesinambungan dengan dan juga untuk memberikan kemudahan dalam perbaikan ataupun perawatan berkala untuk produk-produk kami kepada para customer, kami menyediakan banyak Spare Part yang anda butuhkan dalam hal perbaikan ataupun perawatan secara berkala. Spare Part kami mudah di dapatkan dan banyak terdapat dipasaran, dengan 1 (satu) tujuan yaitu memberikan kemudahan anda para pelanggan kami sebuah kemudahan (easiness) dalam melakukan perawatan dan perbaikan produk-produk kami.",
      aos: "fade-left",
      reverse: false,
    },
    {
      key: "service",
      heading: (
        <>
          Mobile <span className="text-red-500">Service</span>.
        </>
      ),
      img: "../img/mobile-service.jpg",
      description:
        "Selain kami memiliki teknisi-teknisi yang professional di bidangnya dan juga ketersediaan Spare Part yang kami sediakan untuk para customer, kami juga menawarkan layanan Mobile Service dalam menunjang dan memberikan pelayanan maksimal dan terbaik bagi para pelanggan kami dalam hal Pemasangan, Perbaikan, dan juga Perawatan produk kami. Anda hanya tinggal menghubungi kami via telephone di Telp. (0361)     maka teknisi-teknisi kami siap membantu anda kapanpun dan dimanapun anda berada.",
      aos: "fade-right",
      reverse: true,
    },
    {
      key: "fiber",
      heading: (
        <>
          Gara<span className="text-red-500">nsi.</span>
        </>
      ),
      img: "../img/great.jpg",
      description:
        "     Kami juga menyediakan garansi untuk produk-produk berkualitas kami agar memberikan pelanggan kami sebuah kenyamanan dan rasa aman dalam menggunakan produk-produk kami di dalam bisnis dan produktifitas industri. Semua itu kami berikan untuk kepuasan dan kenyamanan anda para pelanggan kami yang secara tidak langsung memberikan kontribusi lebih dalam memajukan dan mengembangkan bisnis rumahan atapun industri anda",
      aos: "fade-left",
      reverse: false,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {features.map(
        ({ key, title, heading, img, description, aos, reverse }) => (
          <div
            key={key}
            data-aos={aos} // your fade-left / fade-right
            className="relative max-w-screen-xl w-full mx-auto xl:px-5 mt-40"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`overflow-hidden flex justify-center ${
                  reverse ? "lg:order-first" : "lg:order-last"
                }`}
              >
                <div className="translate-x-32 sm:translate-x-0 lg:translate-x-20 xl:translate-x-0">
                  <img src={img} alt={title} className="w-80 h-100 object-cover" />
                </div>
              </div>
              <div className="px-5 xl:px-0 flex justify-center">
                <div className="sm:max-w-[600px] mx-20">
                  <h5 className="text-gray-500">{title}</h5>
                  <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
                  <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
