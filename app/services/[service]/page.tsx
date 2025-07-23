"use client";

import { SERVICES, PRODUCTS } from "@/consts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

interface ServicePageProps {
  params: { service: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find((s) => s.href === params.service);
  if (!service) return notFound();

  // Buscar productos sugeridos por nombre (case-insensitive, incluye coincidencias parciales)
  const suggestedProducts = PRODUCTS.filter((prod) =>
    service.suggestedProducts.some((sug) => prod.name.toLowerCase().includes(sug.toLowerCase()))
  );

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="overflow-hidden rounded-lg mb-6">
        <img
          src={service.image}
          alt={service.label}
          className="w-full h-64 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 animate-fade-in">{service.label}</h1>
      <p className="text-lg text-gray-700 mb-6 animate-fade-in delay-100">{service.longDesc}</p>
      <h2 className="text-xl font-semibold mb-4 animate-fade-in delay-200">Productos sugeridos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {suggestedProducts.length > 0 ? (
          suggestedProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              image={prod.image}
              name={prod.name}
              price={prod.price}
              stock={prod.stock}
            />
          ))
        ) : (
          <p className="col-span-2 text-gray-500">No hay productos sugeridos para este servicio.</p>
        )}
      </div>
      <Link href="/contact">
        <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg animate-fade-in delay-300">Agenda tu cita</span>
      </Link>
      <style jsx global>{`
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.7s forwards;
        }
        .animate-fade-in.delay-100 { animation-delay: 0.1s; }
        .animate-fade-in.delay-200 { animation-delay: 0.2s; }
        .animate-fade-in.delay-300 { animation-delay: 0.3s; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
} 