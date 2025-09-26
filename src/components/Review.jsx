import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Aditya Kumar",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The Signature Scents candles are my go-to for gifting. The unique fragrances and stylish design always impress and delight my friends and family. They truly stand out from the rest!",
  },
  {
    name: "Tina Anand",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1660067262025-271603ac1283?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I love how the Signature Scents collection offers such a wide range of luxurious fragrances. Each candle creates a distinct and memorable ambiance that makes my home feel extra special.",
  },
  {
    name: "Jimmy Patel",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1659421614911-e77b65eb368a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "These candles are just magical! Long-lasting fragrance, eco-friendly, and beautifully designed jars that I can reuse. Highly recommend them!",
  },
];

export default function CustomerReviews() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1701180264193-2e756aa1bbbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJsYWNrJTIwY2FuZGxlfGVufDB8fDB8fHww')",
      }}
    >
      <div className="text-center text-white mb-10">
        <p className="uppercase tracking-widest text-sm">Testimonial</p>
        <h2 className="text-3xl font-serif">CUSTOMER REVIEWS</h2>
        <p className="text-sm">What Our Satisfied Clients Are Saying</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg p-6 shadow-lg relative min-h-[180px] flex flex-col justify-between">
                <FaQuoteLeft className="text-green-500 text-2xl mb-4" />
                <p className="text-gray-700">{review.text}</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <h4 className="text-white text-sm font-bold">{review.name}</h4>
                  <p className="text-gray-200 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
