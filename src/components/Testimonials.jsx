// src/components/Testimonials.jsx
import React from "react";
import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-brandBlack text-white py-20 border-t border-brandGold/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-brandGold text-center">
            What Our Clients Say
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Our commitment to integrity and results has helped individuals,
            businesses, and institutions place their trust in Aarambha Legal.
            Here’s what a few of them had to say.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial 1 */}
            <div className="bg-white/5 border border-brandGold/10 p-8 rounded-xl hover:border-brandGold/40 transition">
              <p className="text-gray-200 italic leading-relaxed">
                “The team at Aarambha Legal handled my corporate litigation with
                remarkable precision and professionalism. They understood my
                business context and navigated every challenge efficiently.”
              </p>
              <p className="mt-4 text-sm text-brandGold">— CEO, Tech Startup (Delhi)</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 border border-brandGold/10 p-8 rounded-xl hover:border-brandGold/40 transition">
              <p className="text-gray-200 italic leading-relaxed">
                “Their criminal defence expertise and commitment helped secure
                a quick resolution to my case. I was constantly kept informed and
                guided at every step.”
              </p>
              <p className="mt-4 text-sm text-brandGold">— Individual Client (Lucknow)</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 border border-brandGold/10 p-8 rounded-xl hover:border-brandGold/40 transition">
              <p className="text-gray-200 italic leading-relaxed">
                “Professional, strategic, and responsive — Aarambha Legal is a
                rare combination of traditional ethics and modern legal approach.”
              </p>
              <p className="mt-4 text-sm text-brandGold">— Senior Manager, NBFC</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white/5 border border-brandGold/10 p-8 rounded-xl hover:border-brandGold/40 transition">
              <p className="text-gray-200 italic leading-relaxed">
                “They assisted me with a complex property matter and provided
                timely legal advice. I appreciated their clear communication and
                honest opinion throughout.”
              </p>
              <p className="mt-4 text-sm text-brandGold">— Entrepreneur (Noida)</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


