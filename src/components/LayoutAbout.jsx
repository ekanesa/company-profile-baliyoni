import React, { useState, useEffect } from "react";
import Navbar from "./Navbar1";
import Footer from "./Footer"; // ⬅️ Import Footer

export default function LayoutAbout({ children }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowNav(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div
        className={`
          fixed inset-x-0 top-0 z-50
          transition-opacity duration-300
          ${
            showNav
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <Navbar />
      </div>
      <main className="flex-grow relative">
        <div className="max-w-screen">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
