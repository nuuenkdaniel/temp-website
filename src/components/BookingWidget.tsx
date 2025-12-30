"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BookingWidget() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-neutral-100 max-w-sm w-full">
      <h3 className="text-xl font-serif text-neutral-900 mb-4">Book Your Relaxation</h3>

      <div className="space-y-4">
        {/* Service Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Service</label>
          <select className="w-full p-3 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Swedish Massage (60 min)</option>
            <option>Deep Tissue (90 min)</option>
            <option>Hot Stone Therapy</option>
          </select>
        </div>

        {/* Date/Time */}
        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-neutral-700">Date</label>
            <div className="relative">
              {/* <Calendar className="absolute left-3 top-3 h-4 w-4 text-primary-500" /> */}
              <input 
                type="date" 
                placeholder="Select date" 
                className="
                w-full rounded-lg border border-neutral-200
                px-4 py-1.5
                text-neutral-800
                placeholder:text-neutral-400
                focus:outline-none
                focus:ring-2 focus:ring-primary-300
                "
              />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-neutral-700">
              Time
            </label>

            <div className="relative">
              <Clock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />

              <select
                className="
                w-full rounded-lg
                border border-neutral-200
                bg-white
                pl-9 pr-8 py-2
                text-sm text-neutral-500
                caret-primary-500
                focus:border-primary-300
                focus:ring-2 focus:ring-primary-300
                focus:outline-none
                transition
                appearance-none
                "
                defaultValue=""
              >
                <option value="" disabled className="text-neutral-900">
                  Select time
                </option>
                <option>10:00 AM</option>
                <option>1:00 PM</option>
              </select>

              {/* custom dropdown arrow */}
              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

        </div>

        <button className="w-full bg-primary-700 hover:bg-primary-900 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary-200">
          Check Availability
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <p className="text-xs text-center text-neutral-400 mt-4">
        No payment required to check slots
      </p>
    </div>
  );
}
