// src/components/PracticeAreas.jsx
import React from "react";
import FadeIn from "./FadeIn";

export default function PracticeAreas() {
  return (
    <section id="practice" className="bg-brandBlack text-white py-20 border-t border-brandGold/10">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-brandGold text-center">
            Our Practice Areas
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Aarambha Legal offers a full spectrum of legal services designed to meet
            the diverse needs of individuals, startups, and corporate entities.
            Our approach blends deep legal expertise with practical strategy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition">
              <h3 className="font-serif text-xl mb-2 text-brandGold">Corporate Law</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Legal advisory for company incorporation, mergers, and business
                compliance. We guide firms from setup to scaling with precision.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition">
              <h3 className="font-serif text-xl mb-2 text-brandGold">Civil & Property Disputes</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Handling complex civil litigation, property rights, and partition
                matters with integrity and proven strategy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition">
              <h3 className="font-serif text-xl mb-2 text-brandGold">Criminal Defence</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Expert criminal litigation covering bail, trial, and appeal matters.
                We protect client rights through every legal stage.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition">
              <h3 className="font-serif text-xl mb-2 text-brandGold">Matrimonial & Family Law</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discreet legal assistance for divorce, alimony, child custody,
                and domestic dispute resolutions.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition">
              <h3 className="font-serif text-xl mb-2 text-brandGold">Intellectual Property</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Trademark, copyright, and patent registration. Protecting
                creativity and brand identity in a competitive landscape.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition">
              <h3 className="font-serif text-xl mb-2 text-brandGold">Startup & Tech Advisory</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dedicated startup counsel for founders — agreements, funding,
                compliance, and data protection policies.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}







