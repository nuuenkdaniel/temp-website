import BookingWidget from "@/components/BookingWidget";
import Navbar from "@/components/Navbar";
import { ArrowRight, Clock, MoveRight, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-sm font-medium">
              <Star className="w-3 h-3 fill-sage-500 text-sage-500" />
              <span>Accepting new clients for October</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-serif text-stone-800 leading-[1.1]">
              Restore balance to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-500 to-sage-700">body & mind.</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-stone-600 max-w-md leading-relaxed">
              Experience clinical massage therapy tailored to your physiology. 
              We blend traditional Swedish techniques with modern deep tissue 
              therapies to alleviate chronic pain.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-sage-700 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-sage-800 transition-all shadow-lg shadow-sage-200 flex items-center gap-2">
                Book Appointment 
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sage-700 hover:bg-sage-50 transition-colors">
                View Services 
                <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>

          {/* Right: Booking Widget & Visuals */}
          <div className="relative">
            {/* Abstract Background Blobs (Decoration) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sage-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative z-10 flex flex-col items-center">
               {/* 
                  NOTE: Once you have a real image, uncomment the lines below and 
                  add your image to the 'public' folder named 'massage-hero.jpg'
               */}
               {/* 
               <div className="mb-[-40px] z-0 rounded-2xl overflow-hidden shadow-2xl rotate-3 border-4 border-white">
                  <Image 
                    src="/massage-hero.jpg" 
                    width={500} 
                    height={400} 
                    alt="Relaxing massage therapy" 
                    className="object-cover" 
                  /> 
               </div> 
               */}
               
               {/* The Floating Booking Card */}
               <BookingWidget />

               {/* Optional: Floating 'Next Opening' Badge */}
               <div className="absolute -right-4 bottom-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce duration-[3000ms]">
                  <div className="bg-sage-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Next Opening</p>
                    <p className="text-sm font-bold text-stone-800">Today at 2:00 PM</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
