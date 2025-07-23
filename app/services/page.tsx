import React from "react";
import { SERVICES } from "@/consts";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.href}
            image={service.image}
            title={service.label}
            description={service.shortDesc}
            href={service.href}
          />
        ))}
      </div>
    </div>
  );
}
