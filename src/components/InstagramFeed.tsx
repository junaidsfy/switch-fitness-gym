/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { INSTA_POSTS } from "../data/gymData";

export default function InstagramFeed() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const handleOpenInstagram = () => {
    window.open("https://www.instagram.com/switch_fitness_gzb/", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="instagram-feed" className="py-24 bg-bg-card relative overflow-hidden">
      {/* Decorative Blur and Grid Marks */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-brand/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-brand/10 border border-brand/20 rounded-full mb-3">
            <Instagram className="h-4 w-4 text-brand" />
            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-white">
              INSTAGRAM SHOWCASE
            </span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-widest leading-none">
            FOLLOW OUR <span className="text-stroke-brand">JOURNEY</span>
          </h2>
          
          <p className="font-sans text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Stay connected with real workouts, heavy lifts, community spotlights, diet blueprints, and everyday iron motivation at Ghaziabad's premier fitness hub.
          </p>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/switch_fitness_gzb/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-display font-black text-xs uppercase tracking-widest text-black bg-brand hover:bg-brand-dark rounded transition-colors duration-200 glow-btn"
            >
              <Instagram className="h-4 w-4" />
              Follow @switch_fitness_gzb
            </a>
          </div>
        </div>

        {/* Premium Symmetrical Instagram Grid Layout (Exactly 4 Centered Items) */}
        <motion.div
          id="instagram-photo-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-center"
        >
          {INSTA_POSTS.slice(0, 4).map((post) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative aspect-square bg-[#121212] rounded-[20px] overflow-hidden border border-white/5 block shadow-lg transition-all duration-300"
            >
              {/* Image background block with smooth lazy zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url(${post.image})` }}
              />

              {/* Instagram Classic Glass hover overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

              {/* Top Icons Layer (heart + comment) visible only on hover */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 select-none pointer-events-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-1.5">
                      <Heart className="h-4 w-4 fill-brand text-brand" />
                      <span className="font-mono text-xs font-bold text-gray-200">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4 text-brand" />
                      <span className="font-mono text-xs font-bold text-gray-200">{post.comments}</span>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>

                {/* Caption preview footer */}
                <div>
                  <p className="font-sans text-xs text-gray-300 line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                  <p className="font-mono text-[9px] text-brand uppercase tracking-wider mt-2 font-bold">
                    @switch_fitness_gzb
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
