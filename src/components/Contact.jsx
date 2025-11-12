
// src/components/Contact.jsx
import React from "react";
import FadeIn from "./FadeIn";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-brandBlack text-white py-16 border-t border-brandGold/10 relative"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif text-brandGold mb-6">
            Let’s Discuss Your Legal Needs
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Aarambha Legal provides trusted and strategic advice for individuals
            and organizations. We ensure complete confidentiality and prompt response
            to every inquiry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/919876543210" // change to your WhatsApp
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-brandGold text-brandGold hover:bg-brandGold hover:text-brandBlack transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Consultation
            </a>

            <a
              href="mailto:aarambhalegaloffice@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Office
            </a>
          </div>

          <p className="mt-10 text-gray-400 text-sm">
            Offices in Lucknow & Delhi NCR
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
