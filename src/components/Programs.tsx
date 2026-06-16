/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "../data/gymData";

export default function Programs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="programs" className="py-24 bg-bg-card relative overflow-hidden">
      {/* Decorative vertical running background text */}
      <div className="absolute top-10 right-0 font-display font-black text-9xl select-none pointer-events-none opacity-[0.02] text-stroke tracking-widest hidden lg:block uppercase rotate-90 origin-right translate-x-32">
        DISCIPLINE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 flex flex-col items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand font-black block mb-3">
            ELITE BLUEPRINTS
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none uppercase">
            TRAINING <span className="text-stroke-brand">PROGRAMS</span>
          </h2>
          <div className="w-16 h-1 bg-brand mt-6" />
        </div>

        {/* Programs Grid */}
        <motion.div
          id="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {PROGRAMS.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative group h-[260px] sm:h-[320px] md:h-[400px] rounded-lg overflow-hidden flex flex-col justify-end p-5 md:p-8 bg-black/60 border border-white/5 cursor-pointer"
              onClick={handleScrollToContact}
            >
              {/* Background cover image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url(${program.image})` }}
              />

              {/* Dynamic Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:via-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-brand text-black font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider rounded">
                  {program.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-1.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg sm:text-2xl text-white group-hover:text-brand transition-colors duration-300">
                    {program.title}
                  </h3>
                  <div className="p-1.5 sm:p-2 rounded-full bg-white/10 group-hover:bg-brand text-white group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
                
                <p className="font-sans text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {program.description}
                </p>
                
                <div className="pt-1 sm:pt-2 flex items-center gap-1.5 text-brand font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Secure Your Slot <span>&rarr;</span>
                </div>
              </div>

              {/* Top border line on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
