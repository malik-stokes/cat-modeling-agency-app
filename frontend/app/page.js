// app/page.js or pages/index.js
"use client";
import { useState } from "react";
import { catModels } from "../data";
import CatCard from "../components/CatCard";

export default function Home() {
  const [selectedCat, setSelectedCat] = useState(null);

  const handleBooking = (cat) => {
    setSelectedCat(cat);
    alert(`You booked ${cat.name} for a photoshoot!`);
  };

  return (
  <main className="min-h-screen bg-neutral-100 flex justify-center">
    <div className="w-full max-w-6xl px-4 py-16">
    <h1 className="text-9xl text-center mb-10">Feline Models Portfolio</h1>
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {catModels.map((cat) => (
        <CatCard key={cat.id} cat={cat} onBook={handleBooking} />
      ))}
    </div>
  </div>
</main>
  );
}
