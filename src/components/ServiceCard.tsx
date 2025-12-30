// src/components/ServiceCard.tsx
"use client";

import { Clock, Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  benefits: string[];
}

export default function ServiceCard({
  title,
  description,
  price,
  duration,
  benefits,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 flex flex-col group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-serif text-neutral-800 font-bold group-hover:text-primary-700 transition-colors">
          {title}
        </h3>

        <span className="bg-primary-50 text-primary-800 font-bold px-3 py-1 rounded-full text-sm">
          {price}
        </span>
      </div>

      <p className="text-neutral-600 mb-6 flex-grow leading-relaxed text-sm">
        {description}
      </p>

      <ul className="space-y-2 mb-8">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center text-sm text-neutral-500">
            <Check className="w-4 h-4 text-primary-500 mr-2" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-neutral-100 flex items-center justify-between mt-auto">
        <div className="flex items-center text-neutral-400 text-sm font-medium">
          <Clock className="w-4 h-4 mr-2" />
          {duration}
        </div>

        <button
          type="button"
          className="text-primary-700 font-bold text-sm hover:text-primary-900 transition-colors flex items-center gap-1"
        >
          Book Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

