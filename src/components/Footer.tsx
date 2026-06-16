/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Dumbbell, Instagram, MapPin, Phone, MessageSquare, ArrowUp } from "lucide-react";

export default function Footer() {
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="app-footer" className="bg-[#050505] border-t border-white/5 py-16 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[250px] h-[250px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Description Column */}
          <div className="space-y-4 md:col-span-1">
            <a
              id="footer-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="p-1.5 bg-brand rounded">
                <Dumbbell className="h-4 w-4 text-black" />
              </div>
              <span className="font-display font-black text-lg tracking-wider text-white">
                SWITCH<span className="text-brand">FITNESS</span>
              </span>
            </a>
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              Ghaziabad's ultra-modern high-performance gym, designed for raw strength, precision coaching, and elite physique transformations.
            </p>
            {/* Social media icons links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/switch_fitness_gzb/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/5 hover:bg-brand text-gray-400 hover:text-black transition-colors duration-200"
                aria-label="Instagram Link"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/919999118562"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-white/5 hover:bg-brand text-gray-400 hover:text-black transition-colors duration-200"
                aria-label="WhatsApp Link"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="space-y-4">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-white border-l-2 border-brand pl-2 block">
              QUICK NAVIGATION
            </span>
            <ul id="footer-links-quick" className="space-y-2 text-xs font-sans text-gray-400">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-brand transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleLinkClick(e, "#facilities")} className="hover:text-brand transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, "#programs")} className="hover:text-brand transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => handleLinkClick(e, "#trainers")} className="hover:text-brand transition-colors">
                  Trainers
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-white border-l-2 border-brand pl-2 block">
              REVIEWS & TOUR
            </span>
            <ul id="footer-links-reviews" className="space-y-2 text-xs font-sans text-gray-400">
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-brand transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleLinkClick(e, "#reviews")} className="hover:text-brand transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#instagram-feed" onClick={(e) => handleLinkClick(e, "#instagram-feed")} className="hover:text-brand transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-brand transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Gym Details Location Contact info */}
          <div className="space-y-4 text-xs">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-white border-l-2 border-brand pl-2 block">
              GYM SECRETS
            </span>
            
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Plot No 386, Shakti Khand 2,<br />
                  Indirapuram, Ghaziabad, UP 201014
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand shrink-0" />
                <a href="tel:+9175031 24123" className="hover:text-brand transition-colors font-mono">
                  +91-75031 24123
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-pink-500 shrink-0" />
                <a
                  href="https://www.instagram.com/switch_fitness_gzb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  @switch_fitness_gzb
                </a>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-white/5 my-8" />

        {/* Bottom copyright block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <span>
            &copy; 1999 - {new Date().getFullYear()} Switch Fitness Gym Ghaziabad. All Rights Reserved.
          </span>
          
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-gray-600">
              CRAFTED FOR PEAK ATHLETES
            </span>
            
            <button
              id="btn-footer-scrolltop"
              onClick={handleScrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-brand text-white hover:text-black hover:scale-110 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
