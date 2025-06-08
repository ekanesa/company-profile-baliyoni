"use client";

import LayoutPartnership from "../components/LayoutPartnership";
import PartnershipMarquee from "../Partnership/PartnershipMarquee";
import Hero from "../Home/Hero";
import Navbar from "../components/Navbar1";
import { SpaceIcon } from "lucide-react";


export default function Partnership() {
  const images = [
    "../img/asus.png",
    "../img/acer.png",
    "../img/axioo.png",
    "../img/daikin.png",
    "../img/epson.png",
    "../img/hp.png",
    "../img/panasonic.png",
    "../img/mitsubisi.png",
  ];
  return (
    <LayoutPartnership>
      <Navbar />
      <div className="mt-16">
        <Hero
          title="Mitra Kami"
          subtitle={
            <span className="text-black text-md text-justify space-y-0">
              Kami bekerja sama dengan beberapa perusahaan untuk meningkatkan
              pelayanan kami.
            </span>
          }
          images={images}
        />
      </div>
      <PartnershipMarquee />
    </LayoutPartnership>
  );
}
