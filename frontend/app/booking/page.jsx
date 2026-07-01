// app/booking/page.jsx

"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingPage({ searchParams }) {
  const router = useRouter();

  // Cat passed from Explore page
  const catName = use(searchParams)?.cat || "Selected Cat";

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);

    // Clear fields
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setMessage("");
  };

  return (
    <main className="page-transition overflow-hidden min-h-screen 
    bg-gradient-to-b from-[#ebeced] to-[#cfd2d5] flex items-center justify-center py-16 px-4">

      <div className="max-w-3xl w-full bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-12 border border-neutral-300">

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-6xl md:text-7xl font-serif font-light uppercase tracking-[0.18em] break-words px-4 mb-10 max-w-full">
          Booking
        </h1>

        {/* Selected Cat */}
        <p className="text-center font-serif text-neutral-700 text-lg mb-12">
          Booking request for <span className="font-semibold">{catName}.</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Full Name */}
          <div>
            <label className="block font-serif text-neutral-700 mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-serif text-neutral-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-serif text-neutral-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="(555) 555‑5555"
            />
          </div>

          {/* Date Picker */}
          <div>
            <label className="block font-serif text-neutral-700 mb-2">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-4 py-3 bg-white/80 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-serif text-neutral-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-4 py-3 h-40 bg-white/80 resize-none focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Describe your booking request..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!name || !email || !phone || !date || !message}
            className={`mt-4 bg-neutral-900 text-white font-serif tracking-widest uppercase py-3 rounded-md transition
              ${!name || !email || !phone || !date || !message ? "opacity-75 cursor-not-allowed" : "hover:bg-neutral-800"}`}
          >
            Submit Booking
          </button>

        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-lg w-full text-center border border-neutral-300">
            
            <h2 className="text-3xl font-serif font-light mb-4">
              Booking Submitted
            </h2>

            <p className="font-serif text-neutral-700 mb-8">
              Thank you for your request. We’ll contact you shortly.
            </p>

            <button
              onClick={() => router.push("/explore")}
              className="bg-neutral-900 text-white font-serif tracking-widest uppercase py-3 px-6 rounded-md hover:bg-neutral-800 transition"
            >
              Return to Explore
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
