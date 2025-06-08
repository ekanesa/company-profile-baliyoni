import React from "react";

// list your partner‐logo URLs here
const partners = [
  "../img/asus.png",
  "../img/acer.png",
  "../img/axioo.png",
  "../img/daikin.png",
  "../img/epson.png",
  "../img/hp.png",
  "../img/panasonic.png",
  "../img/mitsubisi.png",
];

export default function PartnershipMarquee() {
  // duplicate the array so we can scroll seamlessly
  const logos = [...partners, ...partners];

return (
    <section>
        <div className="partner-marquee relative overflow-hidden py-20">
            <h2 className="text-center text-4xl mb-10 font-semibold">Mitra Kami</h2>
            <div className="flex animate-marquee">
                {logos.map((src, idx) => (
                    <div className="flex-shrink-0 px-6" key={idx}>
                        <img
                            src={src}
                            alt=""
                            className="h-28 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            <div className="flex animate-marquee-reverse">
                {logos.map((src, idx) => (
                    <div className="flex-shrink-0 px-6" key={idx}>
                        <img
                            src={src}
                            alt=""
                            className="h-28 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {/* marquee keyframes + pause-on-hover */}
            <style>{`
            @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
                0%   { transform: translateX(-50%); }
                100% { transform: translateX(0); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
            .animate-marquee-reverse {
                animation: marquee-reverse 30s linear infinite;
            }
            .partner-marquee:hover .animate-marquee,
            .partner-marquee:hover .animate-marquee-reverse {
                animation-play-state: paused;
            }
        `}</style>
        </div>
    </section>
);
}
