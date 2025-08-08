import React from "react";

const OurStory = () => {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center text-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1608085021802-e886468f5fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D')", // yahan apni image link dalna
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-white text-4xl font-serif font-bold tracking-wide">
          OUR STORY
        </h2>

        {/* Underline */}
        <div className="w-16 h-[2px] bg-white mx-auto my-4"></div>

        <p className="text-white text-lg leading-relaxed mb-6">
          Our story starts with a commitment to quality. We use only the finest
          natural ingredients, ensuring that every candle is hand-poured with
          care and attention to detail. Our dedication to sustainability means
          we choose eco-friendly materials, including soy wax and reusable
          containers, to create products that are kind to both you and the
          planet.
        </p>

        {/* Read More Button */}
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-[#F6C89F] hover:text-[#2C1E16] transition-all duration-300">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default OurStory;
