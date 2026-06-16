/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/gymData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background visual textures */}
      <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[350px] h-[350px] bg-brand/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand font-black block">
            GENUINE CHAMPIONS
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none">
            MEMBER <br className="sm:hidden" />
            <span className="text-stroke-brand">REVIEWS</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Read stories from individuals who took their conditioning to raw heights at Switch Fitness Ghaziabad.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 py-8">
          {/* Quote Icon Background absolute watermark */}
          <div className="absolute top-0 left-4 text-white/[0.02] transform -translate-y-6">
            <Quote className="h-48 w-48 font-black" />
          </div>

          <div className="relative overflow-hidden min-h-[340px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-panel rounded-2xl p-5 sm:p-12 relative z-10"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-5 sm:mb-8">
                  {/* Member Identity details */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={TESTIMONIALS[currentIndex].image}
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-brand/50 shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {TESTIMONIALS[currentIndex].name}
                      </h3>
                      <p className="font-mono text-[9px] sm:text-[10px] text-brand uppercase tracking-wider">
                        {TESTIMONIALS[currentIndex].role}
                      </p>
                    </div>
                  </div>

                  {/* Rating star blocks */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-1.5 shrink-0 pt-3 sm:pt-0 border-t border-white/5 sm:border-0">
                    <div className="flex items-center gap-1 bg-brand/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded border border-brand/20">
                      {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-brand text-brand" />
                      ))}
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">
                      {TESTIMONIALS[currentIndex].date}
                    </span>
                  </div>
                </div>

                {/* Review written comment */}
                <p className="font-sans text-gray-300 italic text-sm sm:text-lg leading-relaxed relative z-10">
                  &ldquo;{TESTIMONIALS[currentIndex].comment}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows and indicators bar */}
          <div className="flex items-center justify-between mt-8 relative z-25">
            {/* Round indicator dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-brand w-8" : "bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Left/Right buttons */}
            <div className="flex gap-3">
              <button
                id="testimonial-btn-prev"
                onClick={handlePrev}
                className="p-3 bg-white/5 hover:bg-brand text-white hover:text-black rounded-lg transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                id="testimonial-btn-next"
                onClick={handleNext}
                className="p-3 bg-white/5 hover:bg-brand text-white hover:text-black rounded-lg transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
