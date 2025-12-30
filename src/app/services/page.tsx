import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";

const treatments = [
  {
    title: "Massage",
    price: "$90",
    duration: "60 min",
    description:
    "A gentle, flowing massage that promotes total relaxation, increases circulation, and reduces stress hormones.",
    benefits: ["Bigger Muscles", "Better Sleep", "YEAHH!!!"],
  },
  {
    title: "Hot Stone Stuff",
    price: "$130",
    duration: "75 min",
    description:
    "Smooth, heated stones are placed on specific body points. The heat penetrates deep into muscle tissue for profound relaxation.",
    benefits: ["Hi", "Hello", "Hehe"],
  },
  {
    title: "Test",
    price: "$2000000",
    duration: "2 years",
    description: "Death Defying",
    benefits: ["Invincibility", "Strength Boost", "Speed Boost"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Header */}
      <div className="bg-primary-700 text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-800 rounded-full blur-3xl -z-1 opacity-50" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Our Treatments
          </h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Curated therapies designed to restore your natural balance.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              price={item.price}
              duration={item.duration}
              description={item.description}
              benefits={item.benefits}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
