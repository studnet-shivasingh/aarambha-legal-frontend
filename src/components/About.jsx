// src/components/About.jsx
import React from "react";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-brandBlack text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT SIDE — TEXT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brandGold">
                About Aarambha Legal
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Aarambha Legal provides trusted representation and advisory support for
                individuals and corporations. We combine experience, deep technical
                knowledge and a strategic approach to secure outcomes for clients.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="px-5 py-2 border rounded-md text-sm border-brandGold hover:bg-brandGold hover:text-black transition"
                >
                  Book Consultation
                </a>
                <a
                  href="#practice"
                  className="px-5 py-2 text-sm underline text-gray-300 hover:text-white transition"
                >
                  View Practice Areas
                </a>
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg border border-brandGold/20 shadow-gold">
              <img
                src="/images/photo.jpg"
                alt="Aarambha Legal Office"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


