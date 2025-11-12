// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 border-t border-brandGold/10 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Aarambha Legal Consultancy. All Rights Reserved.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a href="#about" className="hover:text-brandGold transition">About</a>
          <a href="#practice" className="hover:text-brandGold transition">Practice Areas</a>
          <a href="#contact" className="hover:text-brandGold transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}


