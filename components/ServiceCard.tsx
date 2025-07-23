import React from "react";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({ image, title, description, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <Link href={`/services/${href}`} className="mt-auto">
          <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Ver más</span>
        </Link>
      </div>
    </div>
  );
} 