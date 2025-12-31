import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  // Update these with your real info
  const CONTACT = {
    email: "hello@yourdomain.com",
    phone: "(555) 123-4567",
    locationLine1: "123 Serenity St.",
    locationLine2: "Your City, ST 12345",
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Header */}
      <div className="bg-primary-700 text-white py-20 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary-800 rounded-full blur-3xl -z-1 opacity-50" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg">
            Send a message and we’ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
            <h2 className="text-2xl font-serif text-neutral-800 font-bold mb-2">
              Write a Message
            </h2>
            <p className="text-neutral-600 text-sm mb-6">
              Tell us what you’re looking for (pain relief, relaxation, prenatal,
              etc.) and your preferred availability.
            </p>
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <h2 className="text-2xl font-serif text-neutral-800 font-bold mb-6">
                Contact Details
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-700">
                      Email
                    </div>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-700">
                      Phone
                    </div>
                    <a
                      href={`tel:${CONTACT.phone}`}
                      className="text-sm text-primary-700 hover:text-primary-900 transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-700">
                      Location
                    </div>
                    <div className="text-sm text-neutral-600">
                      <div>{CONTACT.locationLine1}</div>
                      <div>{CONTACT.locationLine2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional note box */}
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="text-lg font-serif text-primary-900 font-bold mb-2">
                Tip
              </h3>
              <p className="text-sm text-primary-900/80 leading-relaxed">
                Include any problem areas, preferred pressure, and the best time
                to reach you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
