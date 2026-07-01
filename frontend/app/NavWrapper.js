"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";

export default function NavWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && <Navbar />}
      {children}
    </>
  );
}
