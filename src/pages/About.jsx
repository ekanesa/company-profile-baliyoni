"use client";

import LayoutAbout from "../components/LayoutAbout";
import Navbar from "../components/Navbar1";
import Banner from "../components/About/Banner";
import AboutUs from "../Home/AboutUs";
import Carousel from "../components/About/Carousel";
import AboutDesc from "../components/About/AboutDesc";
import Vision from "../components/About/Vision";
import Moto from "../components/About/Moto";

export default function About() {
  // const images = [
  //   "../img/savage.jpeg",
  //   "../img/panasonic.png",
  //   "../img/hp.png",
  //   "../img/BYS_LOGO.png",

  // ];
  return (
    <LayoutAbout>
      {/* <Banner images={images} /> */}
      <Carousel />
      <AboutDesc />
      <Moto />
      <Carousel />
      <Vision
        header="Visi Kami."
        text="Menjadi Perusahaan Penyedia Barang & Jasa Yang Terlengkap Di
            Indonesia, Berbasis Edukasi, Inovasi & Layanan Purna Jual.
"
      />
      {/* <Vision /> */}
      {/* <Footer /> */}
    </LayoutAbout>
  );
}
