// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute("id");
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `px-3 py-2 transition hover:text-brandGold ${
      activeSection === id ? "text-brandGold" : "text-gray-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-brandBlack/90 backdrop-blur-sm border-b border-brandGold/10 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* LOGO */}
        <a href="#hero" className="font-serif text-xl text-brandGold">
          Aarambha Legal
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#practice" className={linkClass("practice")}>Practice</a>
          <a href="#whyus" className={linkClass("whyus")}>Why Us</a>
          <a href="#cases" className={linkClass("cases")}>Results</a>
          <a href="#testimonials" className={linkClass("testimonials")}>Testimonials</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/auth"
            className="text-sm px-4 py-2 border border-brandGold text-brandGold rounded-full hover:bg-brandGold hover:text-brandBlack transition-all"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-sm px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-300 text-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brandBlack border-t border-brandGold/10">
          <a href="#about" className="block py-2 px-4 text-gray-300 hover:text-brandGold" onClick={() => setIsOpen(false)}>About</a>
          <a href="#practice" className="block py-2 px-4 text-gray-300 hover:text-brandGold" onClick={() => setIsOpen(false)}>Practice</a>
          <a href="#whyus" className="block py-2 px-4 text-gray-300 hover:text-brandGold" onClick={() => setIsOpen(false)}>Why Us</a>
          <a href="#cases" className="block py-2 px-4 text-gray-300 hover:text-brandGold" onClick={() => setIsOpen(false)}>Results</a>
          <a href="#testimonials" className="block py-2 px-4 text-gray-300 hover:text-brandGold" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#contact" className="block py-2 px-4 text-gray-300 hover:text-brandGold" onClick={() => setIsOpen(false)}>Contact</a>

          {/* Auth Links inside mobile dropdown */}
          <Link
            to="/auth"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-4 text-gray-300 hover:text-brandGold"
          >
            Register
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-4 text-gray-300 hover:text-brandGold"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}








