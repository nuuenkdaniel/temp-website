// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto bg-stone-50">
      <div className="text-2xl font-serif text-sage-900 font-bold tracking-tight">
        <Link href="/">
          Seren<span className="text-sage-500">ity</span>.
        </Link>
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-stone-600 font-medium">
        <Link href="/services" className="hover:text-sage-700 transition-colors">
          Services
        </Link>
        <Link href="/therapists" className="hover:text-sage-700 transition-colors">
          Therapists
        </Link>
        <Link href="/about" className="hover:text-sage-700 transition-colors">
          About
        </Link>
      </div>

      <button className="bg-sage-100 text-sage-900 px-5 py-2 rounded-full font-medium hover:bg-sage-200 transition-colors">
        Client Login
      </button>
    </nav>
  );
}
