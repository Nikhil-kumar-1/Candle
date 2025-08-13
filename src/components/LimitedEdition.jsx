import React from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Nectar Glow Tea Lights",
    price: 80,
    oldPrice: 90,
    image: "https://images.unsplash.com/photo-1514436598301-27a65f40469f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 2,
    name: "Creame Vanilla Tea Lights",
    price: 70,
    oldPrice: 80,
    image: "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 3,
    name: "Musk Star Tea Lights",
    price: 60,
    oldPrice: 70,
    image: "https://images.unsplash.com/photo-1537948756265-406a522f1a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 4,
    name: "Ivory Oud",
    price: 80,
    oldPrice: 90,
    image: "https://plus.unsplash.com/premium_photo-1669824023993-273720598b14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 5,
    name: "Mulberry Crème",
    price: 75,
    oldPrice: 85,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 6,
    name: "Petal Muse",
    price: 65,
    oldPrice: 75,
    image: "https://plus.unsplash.com/premium_photo-1666632532494-3780d6cae861?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 7,
    name: "Sanctum Flame",
    price: 70,
    oldPrice: 80,
    image: "https://images.unsplash.com/photo-1521002988617-015f06b816cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 8,
    name: "Mystic Bark",
    price: 85,
    oldPrice: 95,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 9,
    name: "French Magic",
    price: 90,
    oldPrice: 100,
    image: "https://images.unsplash.com/photo-1612179543058-ab74d388e0ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
  {
    id: 1,
    name: "velvet bloom",
    price: 80,
    oldPrice: 90,
    image: "https://images.unsplash.com/photo-1514436598301-27a65f40469f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbmRsZXxlbnwwfHwwfHx8MA%3D%3D",
    sale: true,
  },
];


export default function LimitedEditions() {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-3xl font-serif mb-2">LIMITED EDITIONS</h2>
      <div className="w-16 h-[2px] bg-yellow-500 mx-auto mb-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group"
          >
            {/* Sale Ribbon */}
            {product.sale && (
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rotate-45 origin-top-right">
                Sale
              </div>
            )}

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
                <button className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white transition-colors">
                  <FaHeart />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white transition-colors">
                  <FaShoppingCart />
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                  <FaEye />
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-yellow-600 font-semibold">
                ${product.price.toFixed(2)}{" "}
                <span className="text-gray-500 line-through text-sm">
                  ${product.oldPrice.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
