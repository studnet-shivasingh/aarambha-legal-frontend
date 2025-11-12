// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", // ✅ note the absolute path from public/
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-6"
      >
        <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
          Strategic Legal Counsel for a Modern World
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          Aarambha Legal — combining experience, insight, and precision to
          deliver results that matter.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 border border-brandGold text-brandGold rounded-full hover:bg-brandGold hover:text-brandBlack transition-all duration-300"
          >
            Book Consultation
          </a>
          <a
            href="#about"
            className="px-6 py-3 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}










