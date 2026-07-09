// components/Navbar.js

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkBase = "uppercase tracking-widest text-gray-900";
  const active = "underline underline-offset-4";

  return (
    <nav className="w-full px-10 py-7 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between font-serif font-normal tracking-wide">
      
      {/* Home */}
      <Link
        href="/"
        className={`${linkBase} ${pathname === "/" ? active : ""}`}
      >
        Home
      </Link>

      {/* Right side */}
      <div className="flex justify-center gap-10">
        <Link
          href="/explore"
          className={`${linkBase} ${pathname === "/explore" ? active : ""}`}
        >
          Explore
        </Link>

        <Link
          href="/about"
          className={`${linkBase} ${pathname === "/about" ? active : ""}`}
        >
          About
        </Link>

        <Link
          href="/contact"
          className={`${linkBase} ${pathname === "/contact" ? active : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

