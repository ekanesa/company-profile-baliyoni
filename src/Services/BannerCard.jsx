import React from "react";
import PropTypes from "prop-types";

export default function BannerCard({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  link,
  className = "",
}) {
return (
    <div
        className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}
    >
        <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm opacity-90">{subtitle}</p>
            <a
                href={link}
                className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
            >
                Cek Selengkapnya
            </a>
        </div>
    </div>
);
}

BannerCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string,
};

BannerCard.defaultProps = {
  className: "",
};