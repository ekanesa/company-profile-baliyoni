// src/pages/ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = "info@baliyoni.co.id";
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(
      message
    )}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <div className="flex flex-col">
      {/* Form Card */}
      <div className="container mx-auto -mt-16 px-4 z-20">
        <div className="rounded-xl bg-white p-8 shadow-xl md:flex md:space-x-8">
          {/* Left Title */}
          <div className="mb-8 md:mb-0 md:w-1/3 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-800">
              Send Us Message
            </h2>
            <p className="mt-4 text-sm text-justify">
              Isi formulir ini selengkap mungkin jika ada pertanyaan,
              saran ataupun keluhan yang ingin anda sampaikan. Kami akan
              menghubungi anda kembali untuk menjawab segala pertanyaan, saran
              ataupun keluhan yang anda sampaikan.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:w-2/3">
            <div>
              <label className="block text-gray-700 font-medium">To :</label>
              <input
                type="text"
                value="info@baliyoni.co.id"
                disabled
                className="mt-1 w-full rounded border-gray-200 bg-gray-100 px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email :</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded border border-gray-200 px-3 py-2"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Name :</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded border border-gray-200 px-3 py-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Message :
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 h-32 w-full rounded border border-gray-200 px-3 py-2"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Social */}
      <div className="container mx-auto mt-16 px-4 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          Our Social Media
        </h3>
        <p className="mt-2 text-gray-600">
          Hubungi kami melalui media sosial untuk pertanyaan, saran, atau
          kolaborasi. Kami senang mendengar dari Anda dan berbagi informasi
          tentang layanan kami. Ikuti kami untuk mendapatkan pembaruan terbaru
          dan penawaran menarik!
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-3xl text-gray-700">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
              alt="Facebook"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
              alt="Instagram"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
              alt="TikTok"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>

      {/* Map & Info */}
      <div className="relative mt-16">
        <iframe
          title="Baliyoni Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.613099849318!2d115.2274657748544!3d-8.678364591369656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240fce6bbb933%3A0xf1c14ed205fad523!2sBaliyoni%20Group!5e1!3m2!1sid!2sid!4v1747730097339!5m2!1sid!2sid"
          className="h-[450px] w-full"
          allowFullScreen=""
          loading="lazy"
        />
        {/* <div className="absolute top-4 left-4 w-72 rounded-lg bg-white p-4 shadow-lg">
          <h4 className="mb-3 text-lg font-semibold">Where to find us</h4>
          <p className="text-sm text-gray-700">
            <strong>Address</strong>
            <br />
            Jl. Tukad Batanghari 1C, Renon – Denpasar
          </p>
          <p className="mt-2 text-sm text-gray-700">
            <strong>Handphone</strong>
            <br />
            0822 7226 9888
          </p>
          <p className="mt-2 text-sm text-gray-700">
            <strong>Email</strong>
            <br />
            info@baliyoni.co.id
          </p>
          <p className="mt-2 text-sm text-gray-700">
            <strong>Telephone</strong>
            <br />
            (0361) 257055
          </p>
          <a
            href="https://goo.gl/maps/…"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded bg-gray-100 px-3 py-2 text-center text-gray-800 hover:bg-gray-200 transition"
          >
            Direction
          </a>
        </div> */}
      </div>
    </div>
  );
}
