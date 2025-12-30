import Navbar from "@/components/Navbar";
import TherapistCard from "@/components/TherapistCard";

const therapists = [
  {
    name: "Penguin1",
    description: "Traumatized",
    imageSrc: "/therapists/nootnoot.png",
  },
  {
    name: "Penguin2",
    description: "Long Beak",
    imageSrc: "/therapists/nootnoot2.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {therapists.map((item) => (
            <TherapistCard
              key={item.name}
              name={item.name}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
