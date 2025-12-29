// src/components/ServiceCard.tsx
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

// This defines what data we need for each card
interface ServiceProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  imageSrc?: string; // Optional for now
}

export default function ServiceCard({ title, description, price, duration }: ServiceProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-sage-100 hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-300 flex flex-col">
      {/* Image Placeholder Area */}
      <div className="h-48 bg-sage-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-sage-300 font-serif italic">
          {title} Image
        </div>
        {/* When you have real images, uncomment this:
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        /> 
        */}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif text-stone-800 font-medium">{title}</h3>
          <span className="text-sage-700 font-bold bg-sage-50 px-3 py-1 rounded-full text-sm">
            {price}
          </span>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex items-center justify-between border-t border-sage-100 pt-4 mt-auto">
          <div className="flex items-center text-sage-600 text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            {duration}
          </div>
          
          <button className="text-stone-800 text-sm font-medium flex items-center group/btn hover:text-sage-700 transition-colors">
            Book Now 
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
