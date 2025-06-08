import React from "react";
import Navbar from "../components/Navbar1";
import LayoutService from "../components/LayoutService";
import BannerServices from "../Services/BannerServices";

export default function Services() {
  return(
    <LayoutService>
      <BannerServices />
    </LayoutService>
  );
}

