// src/components/CaseResults.jsx
import React from "react";
import FadeIn from "./FadeIn";

export default function CaseResults() {
  return (
    <section
      id="cases"
      className="bg-brandBlack text-white py-20 border-t border-brandGold/10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-brandGold text-center">
            Recent Case Highlights
          </h2>

          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Aarambha Legal has successfully represented individuals, startups, and
            corporations across multiple jurisdictions — ensuring justice, precision,
            and timely resolution in every case we handle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Case 1 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition-all">
              <img
                src="/images/case1.jpg"
                alt="Criminal Defence Case"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Criminal Defence — Bail Granted
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Achieved immediate bail in a high-stakes corporate fraud case within
                48 hours of representation — ensuring client protection and compliance.
              </p>
            </div>

            {/* Case 2 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition-all">
              <img
                src="/images/case2.jpg"
                alt="Corporate Merger"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Corporate M&A Deal — ₹50 Cr Merger
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advised and closed a merger transaction for a leading tech startup,
                handling due diligence, contracts, and compliance seamlessly.
              </p>
            </div>

            {/* Case 3 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition-all">
              <img
                src="/images/case3.jpg"
                alt="Civil Dispute"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Property Dispute — Verdict in Favor
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Secured a favorable court order in a ₹2 Cr property dispute within
                3 months — leveraging solid documentation and argument strategy.
              </p>
            </div>

            {/* Case 4 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition-all">
              <img
                src="/images/case4.jpg"
                alt="Arbitration Success"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Arbitration — Award in Client’s Favor
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Represented a manufacturing client in a commercial arbitration;
                secured an award saving ₹8 Cr in potential losses.
              </p>
            </div>

            {/* Case 5 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition-all">
              <img
                src="/images/case5.jpg"
                alt="Family Law"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Matrimonial Settlement — Confidential
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Achieved a peaceful, confidential settlement between parties
                ensuring long-term satisfaction and legal clarity.
              </p>
            </div>

            {/* Case 6 */}
            <div className="bg-white/5 p-6 rounded-xl border border-brandGold/10 hover:border-brandGold/40 transition-all">
              <img
                src="/images/case6.jpg"
                alt="Startup Legal Advisory"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-serif text-xl mb-2 text-brandGold">
                Startup Advisory — Investor Agreement
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Drafted and finalized investor documentation for a fintech
                startup, ensuring compliance with SEBI and RBI guidelines.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

