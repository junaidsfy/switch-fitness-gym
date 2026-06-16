/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import InstagramFeed from "./components/InstagramFeed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg-dark text-white font-sans min-h-screen">
<Navbar />

<main className="relative z-10 w-full">
  <Hero />
  <WhyChooseUs />
  <Programs />
  <Trainers />
  <Testimonials />
  <InstagramFeed />
  <Contact />
</main>

<Footer />
    </div>
  );
}