import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Flame, X, Shield, Sparkles } from 'lucide-react';
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";

const BACKGROUND_IMAGES = [
  hero1,
  hero2,
  hero3,
  hero4,
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Popup Form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('Body Transformation');

  // Background slideshow interval exactly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Handle Escape key to close the modal for outstanding premium UX
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !phone.trim() || !fitnessGoal) {
      alert('Please fill out all fields to schedule your free trial session.');
      return;
    }

    const message = `Hello Switch Fitness,

Name: ${fullName.trim()}
Phone: ${phone.trim()}
Goal: ${fitnessGoal}

I would like to schedule a free trial session.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917503124123?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Close modal & reset input states
    setIsModalOpen(false);
    setFullName('');
    setPhone('');
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-sans select-none" id="home">
      
      {/* Background Slideshow (Fades background images every 5 seconds using CSS only) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {BACKGROUND_IMAGES.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out transform ${
              idx === currentSlide 
                ? 'opacity-100 scale-102 pointer-events-auto' 
                : 'opacity-0 scale-100 pointer-events-none'
            }`}
          >
            <img
              src={imgUrl}
              alt={`Switch Fitness Background Slide ${idx + 1}`}
              className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
              loading={idx === 0 ? "eager" : "lazy"}
             fetchPriority={idx === 0 ? "high" : "auto"}
             decoding="async"
            />
          </div>
        ))}
        {/* Deep Dark Overlay for high typography contrast (Perfect for Safari, iOS, Chrome, Edge, Firefox) */}
        <div className="absolute inset-0 bg-black/40 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 pointer-events-none z-1" />
      </div>

      {/* Perfectly Centered Main Stage Content */}
      <div className="relative z-10 w-full h-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Subtitle / Upper Tagline */}
        <div className="animate-fade-in-up-1 mb-3 md:mb-5">
          <p className="text-sm md:text-xl font-bold uppercase tracking-[0.25em] text-gray-300">
            Train Hard. Transform Strong.
          </p>
        </div>

        {/* 
          Headline with custom premium design:
          - font-family: 'Bebas Neue' (inherited via configured font-display class)
          - Displayed on separate lines with elegant spacing to prevent overlay
          - SWITCH = White, FITNESS = Red with 60% reduced subtle red glow
          - Clean premium luxury gym spacing
        */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.12em] leading-none uppercase mb-8 md:mb-12 animate-fade-in-up-1 select-none flex flex-col items-center justify-center gap-1">
          <span className="text-white block">SWITCH</span>
          <span className="text-red-600 block animate-text-glow drop-shadow-[0_0_6px_rgba(239,68,68,0.25)]">FITNESS</span>
        </h1>

        {/* Action Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto mb-10 md:mb-14 animate-fade-in-up-2">
          
          {/* Schedule Free Trial Trigger Button (Activates Modal Popup) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold uppercase tracking-widest text-xs sm:text-sm rounded-lg shadow-[0_4px_25px_rgba(220,38,38,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden text-center"
            id="btn-schedule-trial"
          >
            {/* Gloss shine sweeping effect */}
            <span className="absolute inset-0 w-32 h-full bg-white/20 transform -skew-x-20 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
            <span className="flex items-center justify-center space-x-2">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              <span>Schedule Free Trial</span>
            </span>
          </button>

          {/* Call Now Active Action */}
          <a
            href="tel:7503124123"
            className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-transparent hover:bg-white/5 text-white hover:text-red-500 font-extrabold uppercase tracking-widest text-xs sm:text-sm rounded-lg border-2 border-white/20 hover:border-red-600/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2"
            id="btn-call-now"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            <span>Call Now</span>
          </a>

        </div>

        {/* Clean Contact Row (Optimized for small screens) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold tracking-widest text-gray-400 animate-fade-in-up-3">
          
          <a 
            href="tel:7503124123" 
            className="flex items-center space-x-2 hover:text-red-500 transition-colors uppercase bg-zinc-950/90 px-4 py-2 rounded-full border border-white/10"
            id="contact-call-link"
          >
            <Phone className="w-3.5 h-3.5 text-red-500" />
            <span>Call: <strong className="text-white font-mono">7503124123</strong></span>
          </a>

          <a 
            href="https://wa.me/917503124123" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-emerald-400 transition-colors uppercase bg-zinc-950/90 px-4 py-2 rounded-full border border-white/10"
            id="contact-whatsapp-link"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/15" />
            <span>WhatsApp: <strong className="text-white font-mono">7503124123</strong></span>
          </a>

        </div>

      </div>

      {/* MODAL POPUP FORM */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 transition-opacity duration-300"
          id="free-trial-modal"
          onClick={() => setIsModalOpen(false)} // Close when clicking overlay background
        >
          <div 
            className="w-full max-w-md bg-zinc-950 border-2 border-red-600 rounded-2xl p-6 sm:p-8 relative shadow-[0_0_50px_rgba(239,68,68,0.4)] animate-fade-in-up-1"
            onClick={(e) => e.stopPropagation()} // Stop propagation from closing content area
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white hover:bg-zinc-900 p-1.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title / Subtitle */}
            <div className="mb-6">
              <span className="text-red-500 font-display text-xs tracking-wider bg-red-600/10 px-3 py-1 rounded-full uppercase">
                Priority Trial Access
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide italic mt-3 flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-500 fill-red-500" />
                CLAIM FREE TRIAL PASS
              </h2>
              <div className="w-16 h-1 bg-red-600 mt-2 rounded-full" />
            </div>

            {/* popup Form for scheduling trial */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label htmlFor="modal-name" className="block text-xs sm:text-sm font-display tracking-wider text-gray-300 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  id="modal-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-white/5 border border-white/10 focus:border-red-500 focus:bg-white/10 focus:ring-1 focus:ring-red-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 transition-all outline-none"
                  autoFocus
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-display tracking-wider text-gray-300 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="e.g. 9876543210"
                  className="w-full bg-white/5 border border-white/10 focus:border-red-500 focus:bg-white/10 focus:ring-1 focus:ring-red-500 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 transition-all outline-none font-mono"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-goal" className="block text-xs sm:text-sm font-display tracking-wider text-gray-300 uppercase">
                  Core Fitness Priority Goal
                </label>
                <select
                  id="modal-goal"
                  value={fitnessGoal}
                  onChange={(e) => setFitnessGoal(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/15 focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-lg px-3.5 py-2.5 text-sm text-white transition-all outline-none cursor-pointer"
                >
                  <option value="Weight Loss">Weight Loss / Fat Burning</option>
                  <option value="Muscle Building">Muscle Building / Hypertrophy</option>
                  <option value="Strength Training">Heavy Strength Training</option>
                  <option value="Body Transformation">Total Body Transformation</option>
                  <option value="Professional Coaching">1-on-1 Athlete Coaching</option>
                </select>
              </div>

              {/* Modal Button actions */}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-display text-sm uppercase tracking-wider rounded-lg flex items-center justify-center space-x-2 transition-all cursor-pointer duration-300"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Send Request on WhatsApp ⚡</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3 px-4 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-display text-xs uppercase tracking-wider rounded-lg transition-all text-center border border-white/5"
                >
                  Cancel
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[9px] text-gray-500 pt-3 border-t border-white/5">
                <Shield className="w-3.5 h-3.5 text-red-500" />
                <span>Immediate direct conversion into a priority WhatsApp message template.</span>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
