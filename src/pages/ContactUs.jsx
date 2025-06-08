import React from "react";
import Navbar from "../components/Navbar1";
import Footer from "../components/Footer"; // Import Footer
import LayoutContact from "../components/LayoutContact";
import ContactPage from "../Contact/ContactPage"; // Import the ContactPage component
import HeroContact from "../Contact/HeroContact"; // Import the ContactPage component

export default function ContactUs() {
    return (
      <LayoutContact>
        <HeroContact />
        <ContactPage />

      </LayoutContact>
    );
    }