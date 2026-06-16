/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, MessageSquare, Compass, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    program: "General Strength",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Switch Fitness Info
  const gymPhone = "+917503124123"; // Placeholder/Real high-fidelity format
  const waLink = `https://wa.me/917503124123?text=Hi%20Switch%20Fitness%20Gym!%20I'm%20interested%20in%20a%20membership%20or%20free%20trial%20session.`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=Switch+Fitness+Gym+Shakti+Khand+2+Indirapuram+Ghaziabad`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Simulate premium submit transition
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", program: "General Strength", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative vertical running background text */}
      <div className="absolute bottom-10 left-0 font-display font-black text-9xl select-none pointer-events-none opacity-[0.02] text-stroke tracking-widest hidden lg:block uppercase -rotate-90 origin-left translate-y-32">
        STRENGTH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand font-black block mb-3">
              JOIN THE TRIBE
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none">
              LOCATION & <br />
              <span className="text-stroke-brand">CONTACT SECRETS</span>
            </h2>
          </div>
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-sm leading-relaxed">
            Take the first step. Visit the gym floor, talk with our admissions desk, or coordinate with a master coach directly.
          </p>
        </div>

        {/* Contact Layout Grid (Columns: Info Cards/Form, Map Frame) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Info Cards & Booking (7 / 12 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              
              {/* Call Now Card */}
              <a
                href={`tel:${gymPhone}`}
                className="group flex flex-col justify-between p-4 sm:p-6 bg-bg-card hover:bg-bg-card-hover border border-white/5 hover:border-brand/30 rounded-lg transition-all duration-300"
              >
                <div className="p-2.5 sm:p-3 bg-white/5 group-hover:bg-brand/10 text-white group-hover:text-brand rounded-md w-fit transition-colors">
                  <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
                </div>
                <div className="mt-4 sm:mt-8">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block">
                    Direct Line
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand transition-colors block mt-1">
                    Call Now
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 sm:p-6 bg-bg-card hover:bg-bg-card-hover border border-white/5 hover:border-brand/30 rounded-lg transition-all duration-300"
              >
                <div className="p-2.5 sm:p-3 bg-white/5 group-hover:bg-brand/10 text-white group-hover:text-brand rounded-md w-fit transition-colors">
                  <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5" />
                </div>
                <div className="mt-4 sm:mt-8">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block">
                    Instant Chat
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand transition-colors block mt-1">
                    WhatsApp Chat
                  </span>
                </div>
              </a>

              {/* Get Directions Card */}
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-4 sm:p-6 bg-bg-card hover:bg-bg-card-hover border border-white/5 hover:border-brand/30 rounded-lg transition-all duration-300"
              >
                <div className="p-2.5 sm:p-3 bg-white/5 group-hover:bg-brand/10 text-white group-hover:text-brand rounded-md w-fit transition-colors">
                  <Compass className="h-4 sm:h-5 w-4 sm:w-5" />
                </div>
                <div className="mt-4 sm:mt-8">
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block">
                    Navigation Map
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand transition-colors block mt-1">
                    Get Directions
                  </span>
                </div>
              </a>

            </div>

            {/* Address and Hours Info Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-5 sm:p-8 bg-bg-card border border-white/5 rounded-lg">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-brand">
                  <MapPin className="h-4 sm:h-5 w-4 sm:w-5 shrink-0" />
                  <span className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm">GYM ADDRESS</span>
                </div>
                <p className="font-sans text-[13px] sm:text-sm text-gray-300 leading-relaxed">
                  Plot No. 386, Ground Floor,<br />
                  Shakti Khand 2, Indirapuram,<br />
                  Ghaziabad, Uttar Pradesh 201014
                </p>
                <p className="font-mono text-[10px] sm:text-xs text-gray-500">
                  Landmark: Close to Orange County
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-brand">
                  <Clock className="h-4 sm:h-5 w-4 sm:w-5 shrink-0" />
                  <span className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm">OPERATIONAL HOURS</span>
                </div>
                <div className="space-y-1.5 font-sans text-[13px] sm:text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Mon - Sat:</span>
                    <span className="font-mono text-white text-[11px] sm:text-xs">5:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-mono text-white text-[11px] sm:text-xs">7:00 AM - 12:00 PM</span>
                  </div>
                  <div className="pt-2 text-[10px] sm:text-xs text-gray-500 flex items-center gap-1.5 border-t border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>Sunday Evening Closed for Deep Clean</span>
                  </div>
                </div>
              </div>
            </div>

<div className="bg-[#121212] p-8 border border-white/5 rounded-lg">
  <h3 className="font-display font-black text-2xl text-white mb-4 uppercase tracking-wider">
    Ready To Start?
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed mb-6">
    Visit Switch Fitness today and start your transformation journey.
    Contact our team directly for memberships, personal training,
    body transformation programs, and fitness guidance.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <a
      href="tel:+917503124123"
      className="flex items-center justify-center px-6 py-4 bg-brand hover:bg-brand-dark text-black font-bold rounded-lg transition-all"
    >
      Call 7503124123
    </a>

    <a
      href="https://wa.me/917503124123"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-6 py-4 border border-brand text-white font-bold rounded-lg hover:bg-brand/10 transition-all"
    >
      WhatsApp Chat
    </a>
  </div>

  <div className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest">
    Open Daily • Professional Coaching • Premium Equipment
  </div>
</div>

          </div>

          {/* Right Column: Google Maps (5 / 12 cols) */}
          <div className="lg:col-span-5 h-[280px] sm:h-[350px] md:h-[400px] lg:h-auto min-h-[250px] lg:min-h-[450px] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="Switch Fitness Gym Ghaziabad Google Map"
              src="https://maps.google.com/maps?q=Switch%20Fitness%20Gym%20Indirapuram%20Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-none filter invert-90 hue-rotate-180 brightness-95 contrast-95"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Visual Frame Border Glow */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 group-hover:border-brand/40 transition-colors" />
          </div>

        </div>

      </div>
    </section>
  );
}
