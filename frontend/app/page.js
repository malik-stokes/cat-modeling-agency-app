// app/page.js

"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main
      className="homepage-transition relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/cat-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-serif uppercase tracking-[0.18em] break-words px-4 mb-6 max-w-full">
          Cat Modeling Agency
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl font-serif font-normal tracking-wide mb-10">
          Where Elegance Meets Whiskers.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/explore")}
          className="cursor-pointer px-4 py-3 sm:px-6 sm:py-4 font-serif uppercase tracking-widest 
          text-base sm:text-lg bg-white text-black transition-all duration-500 hover:bg-neutral-200"
        >
          Explore
        </button>
      </div>
    </main>
  );
}
