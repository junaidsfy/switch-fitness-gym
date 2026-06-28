/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { FACILITIES } from "../data/gymData";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const renderIcon = (name: string) => {
    let IconComponent = Icons.Dumbbell;

    if (name === "Award") IconComponent = Icons.Award;
    if (name === "Zap") IconComponent = Icons.Zap;
    if (name === "Activity") IconComponent = Icons.Activity;
    if (name === "Users") IconComponent = Icons.Users;
    if (name === "TrendingUp") IconComponent = Icons.TrendingUp;
    if (name === "ShieldAlert") IconComponent = Icons.Cpu;

    return <IconComponent className="h-6 w-6 text-brand" />;
  };

  return (
    <section
      id="facilities"
      className="py-24 bg-bg-dark relative overflow-hidden"
    >
      {/* Decorative backdrop mesh */}
      <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand font-black block mb-3">
              THE ULTIMATE ARENA
            </span>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none">
              WHY CHOOSE <br />
              <span className="text-stroke-brand">SWITCH FITNESS</span>
            </h2>
          </div>

          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-sm leading-relaxed">
            We operate at the pinnacle of physical conditioning, combining
            ultra-modern biomechanic setups with elite trainer guidance to
            craft results.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          id="facilities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {FACILITIES.map((facility) => (
            <motion.div
              key={facility.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-[#121212]/90 hover:bg-[#161616]/95 border border-white/5 hover:border-brand/30 rounded-lg overflow-hidden p-5 sm:p-8 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 inline-flex items-center justify-center p-3 rounded bg-white/5 group-hover:bg-brand/10 transition-colors duration-300">
                {renderIcon(facility.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 tracking-wide">
                {facility.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed">
                {facility.description}
              </p>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none border-b-2 border-r-2 border-transparent group-hover:border-brand/40 transition-all duration-300 rounded-br-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}