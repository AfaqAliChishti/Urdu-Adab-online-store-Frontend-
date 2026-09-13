import React from "react";

function Hero({ title, subtitle, image, reverse = false }) {
  return (
    <section
      className={`flex min-h-[450px] items-center justify-around overflow-hidden bg-gradient-to-b from-[#faf9f6] to-[#fdf6e3] px-8 pt-0 max-[480px]:h-auto max-[480px]:min-h-[540px] max-[480px]:flex-col-reverse ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-impact text-[3rem] font-medium text-[#333333] max-[768px]:text-[2.5rem] max-[480px]:text-[2.2rem]">
          {title}
        </p>

        <p className="text-[3rem] font-semibold text-[#333333] max-[768px]:text-[2.5rem] max-[480px]:text-[2rem]">
          {subtitle}
        </p>

        <button className="my-4 rounded-[40px] border-2 border-transparent bg-[#004225] px-6 py-2 text-[2rem] text-white transition duration-500 hover:border-black hover:bg-[#006d3b] max-[480px]:text-[1.8rem]">
          Grab Now
        </button>
      </div>

      {/* Book Cover */}
      <img
        src={image}
        alt={title}
        className="h-[80%] max-h-[360px] cursor-pointer object-contain max-[480px]:w-[60%]"
      />
    </section>
  );
}

export default Hero;