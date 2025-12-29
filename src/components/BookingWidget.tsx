"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BookingWidget() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-sage-100 max-w-sm w-full">
      <h3 className="text-xl font-serif text-stone-800 mb-4">Book Your Relaxation</h3>
      
      <div className="space-y-4">
        {/* Service Selection Mock */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-sage-700">Service</label>
          <select className="w-full p-3 rounded-lg border border-sage-200 bg-sage-50 text-stone-800 focus:outline-none focus:ring-2 focus:ring-sage-500">
            <option>Swedish Massage (60 min)</option>
            <option>Deep Tissue (90 min)</option>
            <option>Hot Stone Therapy</option>
          </select>
        </div>

        {/* Date/Time Mock */}
        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-sage-700">Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <input 
                type="text" 
                placeholder="Select date" 
                className="w-full pl-9 p-3 rounded-lg border border-sage-200 bg-sage-50 text-sm"
              />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-sage-700">Time</label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-sage-500" />
              <select className="w-full pl-9 p-3 rounded-lg border border-sage-200 bg-sage-50 text-sm appearance-none">
                <option>10:00 AM</option>
                <option>1:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <button className="w-full bg-sage-700 hover:bg-sage-900 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group">
          Check Availability
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <p className="text-xs text-center text-sage-500 mt-4">
        No payment required to check slots
      </p>
    </div>
  );
}
