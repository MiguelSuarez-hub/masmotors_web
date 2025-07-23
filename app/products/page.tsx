import React from "react";
import { PRODUCTS } from "@/consts";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
} 