"use client";

import Navbar from "../components/Navbar1";

export default function About() {
  return (
    <div className="bg-white">
      <Navbar />

      <main className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[#ff006a] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                BALIYONI SAGUNA GROUP
              </h1>
              <p className="mt-4 text-2xl font-semibold text-red-500 sm:text-3xl">
                One Stop Solution.
              </p>
              <p className="text-2xl font-semibold text-red-500 sm:text-2xl">
                Solusi Tuntas, Bahagia Pantas.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-x-6 gap-y-4">
                <a
                  href="#"
                  className="rounded-md bg-red-500 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold text-gray-900 mt-3">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex-1">
              <img
                src="/img/bg1.png"
                alt="Baliyoni Logo"
                className="w-full max-w-[650px] mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
