import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";

const steps = [
  {
    letter: "M",
    word: "Motivating",
    description: "Identifying the core drive — the \"Grit\" — behind the desire for change."
  },
  {
    letter: "A",
    word: "And",
    description: "Holding space for both your history and your future simultaneously."
  },
  {
    letter: "N",
    word: "Nurturing",
    description: "Stabilizing the nervous system through evidence-based tools."
  },
  {
    letter: "I",
    word: "Internal",
    description: "Deepening the understanding of your inner world and its impact."
  },
  {
    letter: "F",
    word: "Fulfillment",
    description: "Cultivating the sense of being healed, whole, and fully realized."
  },
  {
    letter: "E",
    word: "Enable",
    description: "Creating the pathways that allow you to step into your next chapter."
  },
  {
    letter: "S",
    word: "Sincere · Serene",
    description: "Showing up with full honesty and authentic intent — arriving at interior calm."
  },
  {
    letter: "T",
    word: "Transformations",
    description: "Life-scale shifts and therapeutic healing — restoring wholeness."
  }
];

export default function ManifestMethod() {
  return (
    <section id="manifest-method" className="relative w-full py-12 sm:py-16 bg-white overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #c09050 1px, transparent 1px)`,
        backgroundSize: "36px 36px",
        opacity: 0.05
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c09050]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-[system-ui]">
              Proprietary Framework
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 font-[system-ui] tracking-tight"
          >
            The{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              MANIFEST
            </span>{" "}
            Method
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg font-[system-ui] leading-relaxed"
          >
            A proprietary framework powering every branch of the practice — from survival to fully realized.
          </motion.p>
        </div>

        {/* 4×2 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#c09050]/30 transition-all duration-300 p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-lg font-black font-[system-ui] leading-none">{step.letter}</span>
              </div>
              <p className="text-sm font-black text-black font-[system-ui] mb-1.5 leading-tight">{step.word}</p>
              <p className="text-gray-500 text-xs leading-relaxed font-[system-ui]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm font-[system-ui] mb-1">
            Breath and death are our only guarantees.
          </p>
          <p className="text-gray-900 text-lg sm:text-xl font-black font-[system-ui] mb-8">
            Together, we master{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              everything in between.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/manifestcoachingllc/clarity-call"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-[system-ui]"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </a>
            <a
              href="/specialties/manifest-method"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#c09050]/40 text-gray-800 font-bold text-sm hover:border-[#c09050] hover:text-[#c09050] hover:bg-[#c09050]/5 transition-all duration-300 font-[system-ui]"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
