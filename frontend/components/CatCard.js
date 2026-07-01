// components/CatCard.js

"use client";
import Link from "next/link";

export default function CatCard({ cat }) {
  return (
    <div className="bg-white rounded-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">

      {/* Image */}
      <img
        src={cat.image}
        alt={cat.name}
        className="w-full aspect-square object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">

        {/* Name */}
        <h2 className="text-2xl font-serif font-normal text-center tracking-wide text-gray-900">
          {cat.name}
        </h2>

        {/* Thin divider */}
        <div className="h-px bg-gray-300 my-3"></div>

        {/* Breed + Age */}
        <p className="text-gray-600 font-serif text-center tracking-wide text-lg">
          {cat.breed} | {cat.age} years old
        </p>

        {/* Button */}
        {cat.available ? (
          <Link
            href={`/booking?cat=${cat.name}`}
            className="block mx-auto"   /* ← THIS fixes centering */
          >
            <button
              className="cursor-pointer mt-6 px-8 py-3 font-serif uppercase tracking-widest text-sm transition-all duration-500 bg-black text-white hover:bg-neutral-800"
            >
              Request Booking
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="cursor-not-allowed mt-6 px-8 py-3 mx-auto font-serif uppercase tracking-widest text-sm bg-neutral-300 text-neutral-600"
          >
            Unavailable
          </button>
        )}

      </div>
    </div>
  );
}

