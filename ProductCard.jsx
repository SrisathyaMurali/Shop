import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {!product.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Sold Out</span>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        <div className="space-x-2">
          <span className="text-red-500 text-xl font-semibold">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
