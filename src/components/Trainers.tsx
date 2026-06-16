/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Instagram, Award, Shield, CheckCircle, Flame, Star } from "lucide-react";
// @ts-expect-error - Vite dynamic asset loader
import coachImage from "../assets/images/regenerated_image_1781462493067.png";

export default function Trainers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
      },
    },
  };

  return (
    <section id="trainers" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-brand/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-3 md:space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand font-black block">
            ELITE LEADERSHIP
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none">
            MEET THE <br className="sm:hidden" />
            <span className="text-stroke-brand">COACH</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Engineered biomechanical conditioning and expert guidance, led by our decorated head coach.
          </p>
        </div>

        {/* Premium Single Coach Showcase Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Massive Focal Image (lg:col-span-5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative group"
          >
            {/* Ambient Background Glow matching the active states */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand to-brand-dark rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition-all duration-500" />
            
            {/* The Image Container */}
            <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
              <img
                src={coachImage}
                alt="Head Coach Shahrukh Rajput in professional pose"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Master Specialist Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="flex items-center gap-3">
                  <Flame className="h-5 w-5 text-brand animate-pulse shrink-0" />
                  <div>
                    <p className="font-sans font-black text-white text-sm tracking-wide">
                      Mr. Delhi & Mr. Ghaziabad
                    </p>
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                      CHAMPION BODYBUILDER
                    </p>
                  </div>
                </div>
                <div className="bg-brand/10 px-2.5 py-1 rounded border border-brand/20">
                  <span className="font-mono text-[9px] text-brand font-black uppercase tracking-wider">
                    TITLE LISTER
                  </span>
                </div>
              </div>

              {/* Top Shield Rank Icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-2.5 rounded-full flex items-center justify-center text-brand">
                  <Shield className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Detailed Profile Specifications (lg:col-span-7) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 md:space-y-8"
          >
            {/* Title & Position Identity */}
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 rounded-full border border-brand/20">
                <Star className="h-3.5 w-3.5 text-brand fill-brand" />
                <span className="font-mono text-[10px] text-brand font-black uppercase tracking-widest">
                  MR. DELHI • MR. GHAZIABAD CHAMPION
                </span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-wide uppercase leading-tight">
                SHAHRUKH <span className="text-brand">RAJPUT</span>
              </h3>
              <p className="font-sans text-brand font-bold text-base tracking-wide flex items-center gap-2">
                <span>Head Strength & Performance Coach</span>
                <span className="text-white/20">|</span>
                <span className="text-gray-400 text-sm font-normal">BHFA Delhi Secretary</span>
              </p>
            </div>

            <hr className="border-white/5" />

            {/* Coach Detailed Bio Descriptions */}
            <div className="space-y-4 text-left">
              <h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest font-bold">
                PROFESSIONAL SUMMARY
              </h4>
              <p className="font-sans text-gray-300 text-[15px] sm:text-base leading-relaxed">
                Shahrukh Rajput is an accomplished fitness professional and competitive bodybuilder with an impressive track record in the fitness industry. He is a proud Mr. Delhi and Mr. Ghaziabad title holder, showcasing his dedication to strength, discipline, and physical excellence. In addition to his competitive achievements, he serves as the BHFA Delhi Secretary, contributing to the growth and development of bodybuilding and fitness communities.
              </p>
              <p className="font-sans text-gray-400 text-[14px] leading-relaxed">
                Shahrukh is also a PRE Coach Certified Gold and Reebok Certified Trainer, bringing professional expertise and advanced coaching techniques to help clients achieve their fitness goals effectively and safely.
              </p>
            </div>

            {/* Certifications & Specialties List */}
            <div className="space-y-4 text-left">
              <h4 className="font-mono text-xs uppercase text-gray-500 tracking-widest font-bold">
                CERTIFICATIONS & ACHIEVEMENTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Mr. Delhi Champion 🏆",
                  "Mr. Ghaziabad Champion 🏆",
                  "BHFA Delhi Secretary 🏆",
                  "PRE Coach Certified Gold",
                  "Reebok Certified Trainer",
                  "Strength & Performance Specialist",
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-[#121212] border border-white/5 hover:border-brand/20 transition-all duration-300 group"
                  >
                    <CheckCircle className="h-4 w-4 text-brand mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-sans text-xs sm:text-sm text-gray-300">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Call to action & socials bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="flex-1 sm:flex-initial px-6 py-3 font-display font-bold text-xs uppercase tracking-widest text-black bg-brand hover:bg-brand-dark rounded transition-colors duration-200 text-center glow-btn shrink-0"
>
  Book 1-on-1 Prep
</a>
                
                {/* Social Instagram handles */}
                <motion.a
                  href="https://www.instagram.com/be_sharukh_7575/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileActive={{ scale: 0.95 }}
                  className="px-5 py-3 rounded bg-white/5 hover:bg-brand/10 border border-white/10 hover:border-brand/20 text-white hover:text-brand flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase transition-all duration-300 shrink-0"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Follow Coach</span>
                </motion.a>
              </div>

              {/* Verified Coach credentials banner */}
              <div className="flex items-center gap-2 shrink-0 py-1 px-3 bg-white/5 rounded border border-white/5">
                <Award className="h-4 w-4 text-brand" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400">
                  @be_sharukh_7575
                </span>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
