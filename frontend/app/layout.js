// app/layout.js

import "./globals.css";
import NavWrapper from "./NavWrapper";

export const metadata = {
  title: "Cat Modeling Agency",
  description: "Where elegance meets whiskers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-neutral-100 text-gray-800">
        <NavWrapper>
          {children}
        </NavWrapper>
      </body>
    </html>
  );
}



