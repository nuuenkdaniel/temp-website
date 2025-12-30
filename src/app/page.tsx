import BookingWidget from "@/components/BookingWidget";
import Navbar from "@/components/Navbar";
import { ArrowRight, Clock, MoveRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 relative z-10">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-900 text-sm font-medium border border-primary-100"> */}
            {/*   <Star className="w-3 h-3 fill-primary-500 text-primary-500" /> */}
            {/*   <span>Voted Best Spa 2024</span> */}
            {/* </div> */}
            
            <h1 className="text-5xl lg:text-7xl font-serif text-neutral-900 leading-[1.1]">
              Find your flow, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-800">restore your calm.</span>
            </h1>
            
            <p className="text-lg text-neutral-600 max-w-md leading-relaxed">
              Clinical massage therapy tailored to your physiology. 
              We blend traditional techniques with modern recovery 
              science to alleviate chronic pain.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 flex items-center gap-2">
                Book Appointment 
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="group flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium text-primary-700 hover:bg-primary-50 transition-colors">
                View Services 
                <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Gradient Blobs - Now Blue/Cyan */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="relative z-10 flex flex-col items-center">
               <BookingWidget />

               {/* Badge */}
               {/* <div className="absolute -right-4 bottom-20 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 flex items-center gap-4 animate-bounce duration-[3000ms]"> */}
               {/*    <div className="bg-primary-50 p-3 rounded-full"> */}
               {/*      <Clock className="w-6 h-6 text-primary-600" /> */}
               {/*    </div> */}
               {/*    <div> */}
               {/*      <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">Next Opening</p> */}
               {/*      <p className="text-sm font-bold text-neutral-800">Today at 2:00 PM</p> */}
               {/*    </div> */}
               {/* </div> */}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
