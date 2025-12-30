import Navbar from "@/components/Navbar";
import TherapistCard from "@/components/TherapistCard";

const therapists = [
  {
    name: "Penguin1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
        <div className="grid grid-cols-1 gap-10">
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
