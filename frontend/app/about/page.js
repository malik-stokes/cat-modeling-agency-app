// app/about/page.js

export default function About() {
  return (
    <main
      className="page-transition relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bengal_cat.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 py-32">

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-serif font-light 
        uppercase tracking-[0.18em] break-words px-4 mb-10 max-w-full">
          About
        </h1>

        {/* Description */}
        <p className="max-w-3xl font-serif text-lg md:text-xl leading-relaxed tracking-wide">
        At the Cat Modeling Agency, we celebrate elegance, personality, and the unique charm
        of every feline. Founded in 2025, our mission is to showcase captivating cat models
        through editorial photography and unforgettable visual storytelling.
        </p>

        <p className="max-w-3xl font-serif text-lg md:text-xl leading-relaxed tracking-wide mt-8">
          Whether you're exploring our curated gallery or booking a session with one of our
          featured models, we aim to deliver a premium experience inspired by high‑fashion
          aesthetics and modern design.
        </p>

      </div>
    </main>
  );
}
