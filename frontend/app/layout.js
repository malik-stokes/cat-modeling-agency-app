// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Cat Modeling Agency',
  description: 'Book the most fabulous cats on the internet!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head /> {/* This line is important */}
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}