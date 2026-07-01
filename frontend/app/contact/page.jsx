// app/contact/page.jsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show modal
    setShowModal(true);

    // Optional: clear fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="page-transition overflow-hidden min-h-screen 
    bg-gradient-to-b from-[#ebeced] to-[#cfd2d5] flex items-center justify-center py-16 px-4">

      <div className="max-w-3xl w-full bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-12 border border-neutral-300">
        
        <h1 className="text-center text-4xl sm:text-6xl md:text-7xl font-serif font-light 
        uppercase tracking-[0.18em] break-words px-4 mb-10 max-w-full">
          Contact
        </h1>

        <p className="font-serif text-neutral-700 text-lg text-center leading-relaxed mb-12">
          Have a question? Send us a message and we’ll get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Name */}
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

          {/* Message */}
          <div>
            <label className="block font-serif text-neutral-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-neutral-300 rounded-md px-4 py-3 h-40 bg-white/80 resize-none focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!name || !email || !message}
            className={`mt-4 bg-neutral-900 text-white font-serif tracking-widest uppercase py-3 rounded-md transition
              ${!name || !email || !message ? "opacity-75 cursor-not-allowed" : "hover:bg-neutral-800"}`}
          >
            Send Message
          </button>

        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl shadow-2xl max-w-lg w-full text-center border border-neutral-300">
            
            <h2 className="text-3xl font-serif font-light mb-4">
              Message Sent
            </h2>

            <p className="font-serif text-neutral-700 mb-8">
              Thank you for reaching out. We’ll get back to you shortly.
            </p>

            <button
              onClick={() => router.push("/explore")}
              className="bg-neutral-900 text-white font-serif tracking-widest uppercase py-3 px-6 rounded-md hover:bg-neutral-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
