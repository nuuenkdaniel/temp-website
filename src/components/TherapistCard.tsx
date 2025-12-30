// src/components/ServiceCard.tsx
"use client";
import Image from "next/image";

interface TherapistCardProps {
  name: string;
  description: string;
  imageSrc?: string;
}

export default function TherapistCard({
  name,
  description,
  imageSrc,
}: TherapistCardProps) {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-6 p-6 items-top">
        {/* Image section (only renders if imageSrc exists) */}
        {imageSrc && (
          <div className="relative w-40 h-40 shrink-0 overflow-hidden bg-neutral-100">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 800px) 200vw, 768px"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-serif text-neutral-800 font-bold mb-3">
            {name}
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
