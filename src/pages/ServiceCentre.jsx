"use client";
import Vision from "../components/About/Vision";
import LayoutServiceCentre from "../components/LayoutServiceCentre";
import Hero from "../Home/Hero";
import FadeItem from "../ServiceCentre/FadeItem";
export default function ServiceCentre() {
  const images = [
    // "../img/asus.png",
    // "../img/acer.png",
    // "../img/axioo.png",
    // "../img/daikin.png",
    // "../img/epson.png",
    // "../img/hp.png",
    "../img/bg1.png",
    // "../img/savage.jpeg",
    "../img/bg1.png",
    "../img/bg1.png",
  ];
  return (
    <LayoutServiceCentre>
      <div className="py-16 mt-24 mb-42">
        <Hero
          title={
            <span className="text-black">
              Service <span className="text-red-500">Centre</span>
            </span>
          }
          subtitle={
            <span className="text-black text-[16px] text-justify space-y-0">
              Selain keunggulan kami dalam hal kualitas produk dan juga
              pelayanan service terbaik, kami juga menjunjung tinggi asas
              pelayanan purna jual (After Sales Service)dalam setiap penjualan
              kami kepada para pelanggan yang bertujuan untuk memberikan
              pelayanan yang sangat maksimal kepada customer.{" "}
            </span>
          }
          images={images}
        />
      </div>
      <Vision text="Untuk mewujudkan layanan Pelayanan Purna Jual(After Sales Service) kepada pelanggan, Baliyoni memiliki beberapa point yang dapat dijadikan pelayanan untuk para customer kami." />
      <FadeItem />
    </LayoutServiceCentre>
  );
}
