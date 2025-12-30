import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-stone-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="text-2xl font-serif text-primary-900 font-bold tracking-tight cursor-pointer">
        Company <span className="text-primary-500">name</span>
      </Link>
      
      <div className="hidden md:flex gap-8 text-stone-600 font-medium">
        <Link href="/services" className="hover:text-primary-700 transition-colors">Services</Link>
        <Link href="#" className="hover:text-primary-700 transition-colors">Therapists</Link>
        <Link href="#" className="hover:text-primary-700 transition-colors">About</Link>
        <Link href="#" className="hover:text-primary-700 transition-colors">Contact Us</Link>
      </div>
      
      {/* <button className="bg-primary-50 text-primary-900 px-5 py-2 rounded-full font-medium hover:bg-primary-100 transition-colors border border-primary-200"> */}
      {/*   Client Login */}
      {/* </button> */}
    </nav>
  );
}
