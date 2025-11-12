// src/components/WhyUs.jsx
import React from "react";
import FadeIn from "./FadeIn";

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="bg-brandBlack text-white py-20 border-t border-brandGold/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-brandGold text-center">
            Why Choose Aarambha Legal
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            We go beyond traditional legal counsel — offering strategic insight,
            responsive communication, and transparent representation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* 1 - Experience */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/50 transition-all">
              <img
                src="/images/experience.jpg"
                alt="Experience"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Experienced & Strategic
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A decade of combined experience across corporate, civil, and
                criminal law — delivering results through insight and precision.
              </p>
            </div>

            {/* 2 - Transparency */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/50 transition-all">
              <img
                src="/images/transparency.jpg"
                alt="Transparency"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Transparent Approach
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Clear communication and cost transparency at every step.
                We keep our clients informed, empowered, and confident.
              </p>
            </div>

            {/* 3 - Client Focus */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/50 transition-all">
              <img
                src="/images/client-focus.jpg"
                alt="Client Focus"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Client-Centered Counsel
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every case receives dedicated attention. We align legal strategy
                with our clients’ personal and business goals.
              </p>
            </div>

            {/* 4 - Timely Results */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/50 transition-all">
              <img
                src="/images/results.jpg"
                alt="Timely Results"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Timely & Reliable Results
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We value your time. Aarambha Legal ensures every matter is
                handled efficiently and with professionalism.
              </p>
            </div>

            {/* 5 - Confidentiality */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/50 transition-all">
              <img
                src="/images/confidentiality.jpg"
                alt="Confidentiality"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Strict Confidentiality
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                All client data and case details are treated with the highest
                level of confidentiality and discretion.
              </p>
            </div>

            {/* 6 - Modern Legal Solutions */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/50 transition-all">
              <img
                src="/images/modern.jpg"
                alt="Modern Solutions"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Modern Legal Solutions
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Combining technology with legal expertise for seamless
                document management and faster responses.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


