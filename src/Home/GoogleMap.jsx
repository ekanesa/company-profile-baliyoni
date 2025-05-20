import React from "react";

export default function GoogleMap() {
  return (
    <section className="w-full h-[450px] p-4 flex items-center justify-center">
      <div className="">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.613099849318!2d115.2274657748544!3d-8.678364591369656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240fce6bbb933%3A0xf1c14ed205fad523!2sBaliyoni%20Group!5e1!3m2!1sid!2sid!4v1747730097339!5m2!1sid!2sid"
          className="w-[1200px] h-[850px] rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
