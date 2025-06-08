import React from "react";
import Navbar from "./Navbar1";
import Footer from "./Footer"; // ⬅️ Import Footer

export default function LayoutService({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow relative">
        <div className="max-w-screen">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
