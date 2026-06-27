/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
const Testimonials = lazy(() => import("./components/Testimonials"));
const InstagramFeed = lazy(() => import("./components/InstagramFeed"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="bg-bg-dark text-white font-sans min-h-screen">
<Navbar />

<main className="relative z-10 w-full">
  <Hero />
  <WhyChooseUs />
  <Programs />
  <Trainers />
  <Suspense fallback={null}>
  <Testimonials />
  <InstagramFeed />
  <Contact />
</Suspense>
</main>

<Suspense fallback={null}>
  <Footer />
</Suspense>
    </div>
  );
}