import Navbar from "@/components/Navbar";
import { Clock, Check, ArrowRight } from "lucide-react";

const treatments = [
  {
    title: "Massage",
    price: "$90",
    duration: "60 min",
    description: "A gentle, flowing massage that promotes total relaxation, increases circulation, and reduces stress hormones.",
    benefits: [ "Bigger Muscles", "Better Sleep", "YEAHH!!!" ],
  },
  {
    title: "Hot Stone Stuff",
    price: "$130",
    duration: "75 min",
    description: "Smooth, heated stones are placed on specific body points. The heat penetrates deep into muscle tissue for profound relaxation.",
    benefits: [ "Hi", "Hello", "Hehe" ],
  },
  {
    title: "Test",
    price: "$2000000",
    duration: "2 years",
    description: "Death Defying",
    benefits: [ "Invincibility", "Strength Boost", "Speed Boost" ],
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Header - Now using Primary Blue */}
      <div className="bg-primary-700 text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-800 rounded-full blur-3xl -z-1 opacity-50"></div>
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Treatments</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Curated therapies designed to restore your natural balance. 
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-xl hover:shadow-primary-100/50 transition-all duration-300 flex flex-col group">
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif text-neutral-800 font-bold group-hover:text-primary-700 transition-colors">{item.title}</h3>
                <span className="bg-primary-50 text-primary-800 font-bold px-3 py-1 rounded-full text-sm">
                  {item.price}
                </span>
              </div>

              <p className="text-neutral-600 mb-6 flex-grow leading-relaxed text-sm">
                {item.description}
              </p>

              <ul className="space-y-2 mb-8">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-neutral-500">
                    <Check className="w-4 h-4 text-primary-500 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between mt-auto">
                <div className="flex items-center text-neutral-400 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  {item.duration}
                </div>
                <button className="text-primary-700 font-bold text-sm hover:text-primary-900 transition-colors flex items-center gap-1">
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
