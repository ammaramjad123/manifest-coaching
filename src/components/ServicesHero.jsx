import { images } from "../config/siteImages";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function ServicesHero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { label: "Years Experience", value: "26+" },
    { label: "Clients Served", value: "5K+" },
    { label: "Insurance Plans", value: "15+" },
    { label: "States Licensed", value: "3" }
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden pt-44 pb-20">

      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.services.hero}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Radial white overlay — bright in center for text, lets image breathe at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.65)_50%,rgba(255,255,255,0.15)_100%)]" />
        {/* Bottom fade to white so it blends into the page below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 flex flex-col items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center space-y-6 sm:space-y-8 max-w-6xl"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 backdrop-blur-2xl"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c09050]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c09050]">
              Three Pathways to Peace
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="relative z-50 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black tracking-tighter leading-[1.1] uppercase break-words"
          >
            Y<span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">OUR</span> Journey
            <br />
            <span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">OUR</span> Partnership
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="relative z-40 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed"
          >
            Three distinct pathways designed to meet you exactly where you are — 
            whether you're seeking healing, growth, or transformation.
          </motion.p>

          {/* Buttons - Updated with Black + Gold Border */}
          <motion.div
            variants={itemVariants}
            className="relative z-40 flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4"
          >
            <a
              href="https://calendly.com/manifestcoachingllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-black border-2 border-[#c09050] text-white font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-[#c09050] hover:border-[#c09050] hover:scale-105 transition-all shadow-2xl active:scale-95"
            >
              Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://calendly.com/manifestcoachingllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-transparent border-2 border-[#c09050] text-[#c09050] font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-[#c09050] hover:text-white hover:border-[#c09050] transition-all"
            >
              Book Consultation
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-40 mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-1 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#c09050]/10 shadow-sm"
            >
              <span className="text-[10px] font-black uppercase tracking-wider text-[#c09050]/60">{stat.label}</span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tighter">{stat.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Scroll</span>
          <div className="w-4 h-6 sm:w-5 sm:h-8 border border-gray-300 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-1.5 bg-[#c09050] rounded-full mt-1"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20 mix-blend-overlay" />
    </section>
  );
}