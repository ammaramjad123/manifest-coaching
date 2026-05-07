import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";

const steps = [
  {
    letter: "M",
    word: "Motivating",
    description: "Identifying the \"Grit\" — the core drive behind the desire for change."
  },
  {
    letter: "A",
    word: "And",
    description: "Holding space for both your history and your future simultaneously."
  },
  {
    letter: "N",
    word: "Nurturing",
    description: "Stabilizing the nervous system with ART, DBT, & ACT."
  },
  {
    letter: "I",
    word: "Internal",
    description: "Deepening the understanding of your inner workings and their impact."
  },
  {
    letter: "F",
    word: "Fulfillment",
    description: "Cultivating the sense of being healed, whole, and realized."
  },
  {
    letter: "E",
    word: "Enable",
    description: "Creating the pathways that allow you to step into your next chapter."
  },
  {
    letter: "S",
    word: "Sincere · Serene",
    description: "Coaching: Sincere — showing up with full honesty and authentic intent. Therapy: Serene — the interior calm that becomes possible through clinical healing."
  },
  {
    letter: "T",
    word: "Transformations · Therapeutic Healing",
    description: "Coaching: Transformations — life-scale shifts in how you move through the world. Therapy: Therapeutic Healing — restoring wholeness through evidence-based clinical work."
  }
];

export default function ManifestMethod() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="manifest-method" className="relative w-full py-16 sm:py-24 md:py-32 bg-white overflow-hidden">

      {/* Warm radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c09050]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4a84b]/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c09050]/4 rounded-full blur-3xl" />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #c09050 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
        opacity: 0.06
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-['Montserrat']">
              Proprietary Framework
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 font-['Montserrat'] tracking-tight"
          >
            The{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              MANIFEST
            </span>{" "}
            Method
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg font-['Plus_Jakarta_Sans'] leading-relaxed"
          >
            A proprietary framework powering every branch of the practice — designed to move you from survival to a state of being fully realized.
          </motion.p>
        </motion.div>

        {/* Philosophy quote bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto mb-12 md:mb-16 px-4 sm:px-8 py-5 rounded-2xl border border-[#c09050]/20 bg-[#c09050]/5 text-center"
        >
          <p className="text-gray-700 text-base sm:text-lg md:text-xl font-['Plus_Jakarta_Sans'] leading-relaxed italic">
            "Your history is a narrative, not a limitation.{" "}
            <span className="text-[#c09050] font-semibold not-italic">Your future is a blueprint, not a burden.</span>"
          </p>
        </motion.div>

        {/* MANIFEST Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-14 md:mb-20"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.letter}
              variants={itemVariants}
              className="group relative rounded-2xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 hover:border-[#c09050]/40 hover:bg-[#c09050]/[0.03] transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Large decorative letter */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl sm:text-5xl font-black text-[#c09050] leading-none font-['Montserrat'] group-hover:scale-110 transition-transform duration-500 inline-block">
                  {step.letter}
                </span>
                <div className="pt-1">
                  <p className="text-black font-black text-base sm:text-lg font-['Montserrat'] leading-tight">
                    {step.word}
                  </p>
                  {/* Underline */}
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#c09050] to-[#d4a84b] rounded-full mt-1.5 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
              <p className="text-gray-500 text-sm sm:text-base font-['Plus_Jakarta_Sans'] leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>

              {/* Step number */}
              <div className="absolute top-4 right-4 text-xs font-bold text-gray-200 font-['Montserrat']">
                {String(idx + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline + CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base font-['Plus_Jakarta_Sans'] mb-2"
          >
            Breath and death are our only guarantees.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-900 text-lg sm:text-xl md:text-2xl font-black font-['Montserrat'] mb-8"
          >
            Together, we master{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              everything in between.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://calendly.com/manifestcoachingllc/clarity-call"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold text-base sm:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-['Montserrat']"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book Free Consultation
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#c09050]/40 text-gray-800 font-bold text-base sm:text-lg hover:border-[#c09050] hover:text-[#c09050] hover:bg-[#c09050]/5 transition-all duration-300 font-['Montserrat']"
            >
              Explore the Three Pathways
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
