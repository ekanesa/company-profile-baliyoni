"use client";

import Navbar from "../components/Navbar1";

export default function Homepage() {
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
                <a href="#" className="text-sm font-semibold text-gray-900">
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

          <div className="relative mb-96 mt-80 bg-white flex items-center justify-center p-4">
            {/* Image Section (Background Layer) */}
            <div className="absolute z-0 flex space-x-2 mr-[750px]">
              <div className="w-96 h-[450px] bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src="../img/internet.jpg"
                  alt="Teamwork"
                  className="w-full h-1/2 object-cover"
                />
                <img
                  src="../img/service 1.jpg"
                  alt="Workspace"
                  className="w-full h-1/2 object-cover"
                />
              </div>
            </div>
            {/* About Us Section (Front Layer) */}
            <div className="absolute z-20 w-[400px] h-[500px] bg-neutral-900 text-white rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="text-[12px] text-justify mb-4">
                Baliyoni Group adalah group Perusahaan yang telah eksis dalam
                industri Teknologi Informasi (TI) khususnya di Bali yang
                didirikan pada tanggal 3 Mei 2000. Agar dapat melayani pelanggan
                dan mitra Kerja serta mengembangkan Perusahaan menjadi lebih
                baik, kami telah melakukan refocusing bisnis untuk menghasilkan
                Perusahaan yang mampu beradaptasi dengan tuntutan pelanggan dan
                mitra kerja. Teknologi dan produk berbasis TI yang kami
                kembangkan secara sukses dan konsisten telah digunakan dalam
                sistem pelayanan oleh pelanggan kami. Prestasi dan capaian ini
                semakin menambah keyakinan kami untuk terus berkarya, bukan
                hanya Solusi tetapi kami juga ingin memberikan nilai tambah dan
                kebanggaan akan produk dalam negeri dari setiap karya anak
                bangsa yang dihasilkan. Kami siap melangkah dengan semangat
                kreativitas, inovasi, legalitas, optimisme serta komitmen untuk
                memberikan yang terbaik.
              </p>
              <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600">
                Learn more
              </button>
            </div>
            {/* Visi & Misi Section */}
            <div className="absolute z-0 flex space-x-2 ml-[750px]">
              <div className=" bg-white rounded-2xl p-6 shadow-xl w-96 h-[450px]">
                <h3 className="text-xl font-bold mb-2">Visi & Misi</h3>
                <p className="text-sm text-justify mb-4">
                  Mengoptimalkan pemanfaatan teknologi informasi sebagai solusi
                  efisien (one stop solution) yang dilandasi kreativitas dan
                  inovasi.
                </p>
                <ul className="text-[12px] text-justify text-red-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <circle
                            cx="10"
                            cy="6"
                            r="4"
                            stroke="currentColor"
                            stroke-width="1.5"
                          />
                          <path
                            fill="currentColor"
                            d="m18.043 12.366l.444-.605zM19 8.69l-.519.542a.75.75 0 0 0 1.038 0zm.957 3.675l-.444-.605zm-.957.462v.75zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321zM16.75 9.697c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.933.327-1.496 1.226-1.496 2.323zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093zm2.35-3.273c0-1.097-.562-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907zM17.6 12.97c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287zm1.913-1.21a4 4 0 0 1-.42.289c-.053.029-.069.029-.093.029v1.5c.618 0 1.032-.337 1.4-.608z"
                          />
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="M13 20.615c-.91.247-1.926.385-3 .385c-3.866 0-7-1.79-7-4s3.134-4 7-4s7 1.79 7 4c0 .345-.077.68-.22 1"
                          />
                        </g>
                      </svg>
                    </span>{" "}
                    Membangun Tim Yang Sehat Fisik, Mental, dan Memiliki
                    Karakter Yang Tangguh, Berpikir Inovatif & Melayani Dengan
                    Tulus (People).
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          color="currentColor"
                        >
                          <path d="M2 7h2.865c.727 0 1.424-.36 1.938-1c.733-.914 1.819-1.234 2.804-.825L11 5.754M2 15.967h1.62c1.16 0 1.74 0 2.288.154l.08.024c.545.165 1.027.476 1.992 1.098c1.888 1.217 2.832 1.825 3.86 1.751l.146-.014c1.024-.122 1.826-.898 3.43-2.45L17 15" />
                          <path d="M22 7.234h-2.517c-1.066 0-1.818-.58-2.583-1.351a2.76 2.76 0 0 0-1.791-.836c-.743-.045-1.604-.11-2.325.089c-.803.22-1.333.825-1.894 1.456l-1.447 1.63c-.59.664-.59 1.743 0 2.408c.51.574 1.309.663 1.909.212c.432-.324.922-.847 1.431-1.012c.573-.185.928.232 1.252.67l2.32 3.134c.862 1.164 1.292 1.745 1.88 2.056c.59.31 1.262.31 2.607.31H22" />
                        </g>
                      </svg>
                    </span>{" "}
                    Menjalankan Proses Pengadaan Barang dan Jasa Secara
                    Akuntabel, Efektif, Efisien, dan Transparan (Process).
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M11 22c-.818 0-1.6-.33-3.163-.99C3.946 19.366 2 18.543 2 17.16V7m9 15V11.355M11 22c.34 0 .646-.057 1-.172M20 7v4.5M18 18l.906-.905M22 18a4 4 0 1 0-8 0a4 4 0 0 0 8 0M7.326 9.691L4.405 8.278C2.802 7.502 2 7.114 2 6.5s.802-1.002 2.405-1.778l2.92-1.413C9.13 2.436 10.03 2 11 2s1.871.436 3.674 1.309l2.921 1.413C19.198 5.498 20 5.886 20 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C12.87 10.564 11.97 11 11 11s-1.871-.436-3.674-1.309M5 12l2 1m9-9L6 9"
                          color="currentColor"
                        />
                      </svg>
                    </span>{" "}
                    Memastikan Barang dan Jasa Sesuai Dengan Spesifikasi, Tepat
                    Waktu dan Jaminan Purna Jual (Product/Service).
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                          <path d="M17.414 10.414C18 9.828 18 8.886 18 7s0-2.828-.586-3.414m0 6.828C16.828 11 15.886 11 14 11h-4c-1.886 0-2.828 0-3.414-.586m10.828 0Zm0-6.828C16.828 3 15.886 3 14 3h-4c-1.886 0-2.828 0-3.414.586m10.828 0Zm-10.828 0C6 4.172 6 5.114 6 7s0 2.828.586 3.414m0-6.828Zm0 6.828ZM13 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                          <path
                            stroke-linecap="round"
                            d="M18 6a3 3 0 0 1-3-3m3 5a3 3 0 0 0-3 3M6 6a3 3 0 0 0 3-3M6 8a3 3 0 0 1 3 3m-4 9.388h2.26c1.01 0 2.033.106 3.016.308a14.9 14.9 0 0 0 5.33.118c.868-.14 1.72-.355 2.492-.727c.696-.337 1.549-.81 2.122-1.341c.572-.53 1.168-1.397 1.59-2.075c.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0l-.11.012m.11-.012a1 1 0 0 0 .427-.24a1.49 1.49 0 0 0 .126-2.134a1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"
                          />
                          <rect width="3" height="8" x="2" y="14" rx="1.5" />
                        </g>
                      </svg>
                    </span>{" "}
                    Memelihara Profitabilitas Melalui Praktik Bisnis Yang
                    Bersih, Etis, dan Mengutamakan Kebermanfaatan Jangka Panjang
                    (Profit).
                  </li>
                  <li className="flex items-start gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m10.95 14l4.95-4.95l-1.425-1.4l-3.525 3.525L9.525 9.75L8.1 11.175zM5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"
                        />
                      </svg>
                    </span>{" "}
                    Mencapai Keuntungan Selaras Dengan Nilai - Nilai Keluarga,
                    Sosial, dan Masyarakat (Purpose).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative justify-center">
            <p className="text-center">
              <h1 className="text-3xl font-semibold text-black">
                Our Services
              </h1>
            </p>
            <p className="text-center">
              <h2 className="text-xl font-md text-black">
                Baliyoni Saguna Group menawarkan beberapa layanan :{" "}
              </h2>
            </p>
          </div>

          <div className="w-full bg-white flex justify-center items-center p-10">
            <div className="flex space-x-8">
              {/* Card 1 */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-black rounded-full z-10 flex justify-center items-center">
                  <img className="w-10 h-10" src="../img/product.svg" alt="" />
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[300px] bg-white rounded-2xl p-6 shadow-xl flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-center mt-10">
                    Produk
                  </h3>
                  <p className="text-sm text-justify flex-grow">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facere totam eum rem. Omnis hic veritatis distinctio quasi
                    aliquam impedit qui doloribus odit dolorum nobis corporis
                    exercitationem a, ullam quaerat ab.
                  </p>
                  <div className="mt-auto">
                    <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 (About Us) */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-red-600 rounded-full z-10 flex justify-center items-center">
                  <img className="w-10 h-10" src="../img/service.svg" alt="" />
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[300px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 text-center mt-10 text-white">
                    Servis Perangkat Keras
                  </h2>
                  <p className="text-sm text-justify mb-4 text-white flex-grow">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    aliquid ipsa dignissimos repudiandae tenetur voluptas
                    assumenda vitae doloribus sit! Neque voluptatibus quos
                    molestias vitae sit cupiditate? Laboriosam nulla eos
                    quisquam?
                  </p>
                  <div className="mt-auto">
                    <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-md">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 (Visi & Misi) */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-white rounded-full z-10 flex justify-center items-center">
                  <img className="w-10 h-10" src="../img/jaringan.svg" alt="" />
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[300px] bg-red-600 rounded-2xl p-6 shadow-xl flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-center mt-10 text-white">
                    Instalasi Jaringan
                  </h3>
                  <p className="text-sm text-justify text-white flex-grow">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus magnam quam modi quia eligendi asperiores autem
                    corrupti. Soluta iusto a necessitatibus, culpa ratione
                    quidem commodi libero, sapiente at, voluptatem recusandae?
                  </p>
                  <div className="mt-auto">
                    <button className="bg-white text-red-600 text-sm px-4 py-2 rounded-md">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative justify-center mt-24">
            <p className="text-center">
              <h1 className="text-3xl font-semibold text-black">
                Kenapa Memilih Baliyoni Saguna Group?
              </h1>
            </p>
            <p className="text-center">
              <h2 className="text-xl font-md text-black">
                Nilai utama Baliyoni Saguna Group :
              </h2>
            </p>
          </div>

          <div className="w-full bg-white flex justify-center items-center p-10">
            <div className="flex space-x-8">
              {/* Card 2 (About Us) */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-red-600 rounded-full z-10 flex justify-center items-center">
                  <p className="text-white text-5xl font-semibold">B</p>
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[250px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 text-center mt-10 text-white">
                    Berintegritas
                  </h2>
                  <p className="text-lg text-center mb-4 text-white flex-grow">
                    Karyawan Baliyoni Group Menjunjung Kejujuran dan Konsistensi
                    Antara Ucapan dan Tindakan.
                  </p>
                </div>
              </div>

              {/* Card 2 (About Us) */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-red-600 rounded-full z-10 flex justify-center items-center">
                  <p className="text-white text-5xl font-semibold">A</p>
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[250px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 text-center mt-10 text-white">
                    Adaptif
                  </h2>
                  <p className="text-lg text-center mb-4 text-white flex-grow">
                    Karyawan Baliyoni Group Fleksibel Terhadap Perubahan dan
                    Kebutuhan Pelanggan.
                  </p>
                </div>
              </div>

              {/* Card 2 (About Us) */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-red-600 rounded-full z-10 flex justify-center items-center">
                  <p className="text-white text-5xl font-semibold">L</p>
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[250px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 text-center mt-10 text-white">
                    Loyal
                  </h2>
                  <p className="text-lg text-center mb-4 text-white flex-grow">
                    Karyawan Baliyoni Group Setia Pada Tim dan Tujuan Bersama.
                  </p>
                </div>
              </div>

              {/* Card 2 (About Us) */}
              <div className="relative flex flex-col items-center">
                {/* Circle */}
                <div className="absolute -top-2 w-24 h-24 bg-red-600 rounded-full z-10 flex justify-center items-center">
                  <p className="text-white text-5xl font-semibold">I</p>
                </div>

                {/* Card */}
                <div className="mt-12 w-[400px] h-[250px] bg-black opacity-[81%] rounded-2xl p-6 shadow-xl flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 text-center mt-10 text-white">
                    Inovatif
                  </h2>
                  <p className="text-lg text-center mb-4 text-white flex-grow">
                    Karyawan Baliyoni Group Selalu Mencari Cara Lebih Baik.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* BATAS */}
        </div>
      </main>
    </div>
  );
}
