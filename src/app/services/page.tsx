// src/app/services/page.tsx
import Navbar from "@/components/Navbar";
import { Clock, Check, ArrowRight } from "lucide-react";

// Define the data array with proper structure
const treatments = [
  {
    title: "Deep Tissue Therapy",
    price: "$110",
    duration: "60 min",
    description: "Targets the inner layers of your muscles. It uses slow strokes and deep finger pressure to release chronic muscle tension.",
    benefits: ["Pain relief", "Muscle recovery", "Improved posture"]
  },
  {
    title: "Hot Stone Relaxation",
    price: "$130",
    duration: "75 min",
    description: "Smooth, flat, heated stones are placed on specific parts of your body to melt away tension and stress.",
    benefits: ["test", "test"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Header Section */}
      <div className="bg-sage-900 text-white py-20 px-8 text-center relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage-800 rounded-full blur-3xl -z-1 opacity-50"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Treatments</h1>
          <p className="text-sage-100 max-w-2xl mx-auto text-lg">
            Curated therapies designed to restore your natural balance. 
            Each session includes a consultation to tailor the pressure to your needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-sage-100 hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-300 flex flex-col group">
              
              {/* Title & Price Row */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif text-stone-800 font-bold group-hover:text-sage-700 transition-colors">{item.title}</h3>
                <span className="bg-sage-50 text-sage-900 font-bold px-3 py-1 rounded-full text-sm">
                  {item.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-stone-600 mb-6 flex-grow leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-2 mb-8">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-stone-500">
                    <Check className="w-4 h-4 text-sage-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Footer Row: Duration & Button */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between mt-auto">
                <div className="flex items-center text-stone-400 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.duration}
                </div>
                <button className="text-sage-700 font-bold text-sm hover:text-sage-900 transition-colors flex items-center gap-1">
                  Book Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
