import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-serif text-primary-900 font-bold tracking-tight cursor-pointer"
        >
          Company <span className="text-primary-500">name</span>
        </Link>

        <div className="hidden md:flex gap-8 text-primary-900 font-medium">
          <Link href="/services" className="hover:text-primary-700 transition-colors">
            Services
          </Link>
          <Link href="/therapists" className="hover:text-primary-700 transition-colors">
            Therapists
          </Link>
          <Link href="/about" className="hover:text-primary-700 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary-700 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

