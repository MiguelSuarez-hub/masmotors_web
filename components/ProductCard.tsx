import React from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  stock: number;
}

export default function ProductCard({ image, name, price, stock }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-blue-700 font-bold text-xl mb-1">${price.toLocaleString()}</p>
        <p className={`text-sm ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>{stock > 0 ? `Stock: ${stock}` : 'Sin stock'}</p>
      </div>
    </div>
  );
} 