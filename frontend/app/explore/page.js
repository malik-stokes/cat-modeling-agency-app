// explore/page.js

"use client";
import { useState } from "react";
import { catModels } from "../../data";
import CatCard from "../../components/CatCard";

export default function Explore() {
  const [selectedCat, setSelectedCat] = useState(null);

  const handleBooking = (cat) => {
    setSelectedCat(cat);
    alert(`You booked ${cat.name} for a photoshoot!`);
  };

  return (
  <main className="page-transition overflow-hidden min-h-screen bg-gradient-to-b from-[#ebeced] to-[#adb1b4] py-16 px-4">
    <div className="max-w-[82%] mx-auto">
        <h1 className="text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif 
        uppercase tracking-[0.18em] text-neutral-800 leading-snug break-words px-4 mb-15 mt-8 max-w-full">
        Gallery
        </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {catModels.map((cat) => (
            <CatCard key={cat.id} cat={cat} onBook={handleBooking} />
        ))}
        </div>
    </div>
    </main>

  );
}
