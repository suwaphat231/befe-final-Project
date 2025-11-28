import React from "react";

const Banner = ({
  title = "Jump into the vast world of music.",
  subtitle = "Trending Item",
  buttonText = "Click me 🎵~",
  imageSrc = "/images/instruments/guitarban.png", 
}) => {
  return (
    <section className="bg-pink-50">
      <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-left">
          <p className="text-yellow-400 font-semibold tracking-wide">
            {subtitle}
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {title.split("FASHION")[0]}
          </h1>

          <p className="mt-5 text-gray-700 text-lg">
          </p>

          <button
            className="mt-6 inline-flex items-center px-8 py-3 rounded-full 
                       bg-sky-500 text-white font-semibold text-sm tracking-wide
                       shadow-md hover:bg-pink-400 focus:outline-none 
                       focus:ring-2 focus:ring-pink-300 transition"
          >
            {buttonText}
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-orange-200" />
            <img
              src={imageSrc}
              alt="Fashion sale"
              className="relative w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
