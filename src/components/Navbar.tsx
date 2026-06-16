/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Dumbbell } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Facilities", href: "#facilities" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-navbar py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="logo-brand"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="p-2 bg-brand rounded flex items-center justify-center transition-transform group-hover:scale-110">
              <Dumbbell className="h-5 w-5 text-black" />
            </div>
            <span className="font-display font-black text-xl tracking-wider text-white">
              SWITCH<span className="text-brand">FITNESS</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans font-medium text-sm text-gray-300 hover:text-brand tracking-wider uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Desktop */}
          <div className="hidden lg:block">
            <a
              id="cta-nav-join"
              href="home"
              className="px-5 py-2 font-display font-bold text-xs uppercase tracking-widest text-black bg-brand hover:bg-brand-dark rounded transition-colors duration-200 glow-btn"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-brand focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen z-[100] bg-bg-dark/98 backdrop-blur-2xl flex flex-col pt-[env(safe-area-inset-top,0px)]"
          >
            {/* Premium Flexbox Header Section */}
            <div className="h-[85px] shrink-0 flex items-center justify-between px-6 sm:px-8 border-b border-white/[0.03]">
              {/* Left Side: Brand Logo */}
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand rounded flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-black" />
                </div>
                <span className="font-display font-black text-xl tracking-wider text-white">
                  SWITCH<span className="text-brand">FITNESS</span>
                </span>
              </div>

              {/* Right Side: Centered Close Button */}
              <button
                id="btn-mobile-close"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-brand focus:outline-none transition-colors rounded-full hover:bg-white/5 active:scale-95 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            {/* Scrollable links list with padding and clean alignment */}
            <div className="flex-1 overflow-y-auto flex flex-col justify-center items-center py-10 px-6 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  className="font-display font-bold text-2xl sm:text-3xl text-gray-200 hover:text-brand tracking-widest uppercase transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * navLinks.length, duration: 0.3 }}
                className="pt-6 w-full max-w-xs"
              >
                <a
                  id="cta-mobile-join"
                  href="home"
                  
                  className="inline-block px-8 py-4 text-center font-display font-bold uppercase tracking-widest text-black bg-brand hover:bg-brand-dark rounded-full w-full transition-colors glow-btn text-sm"
                >
                  Join Today
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
