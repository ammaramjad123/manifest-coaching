import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  Zap,
  Globe,
  ChevronRight,
  Activity,
  Shield
} from "lucide-react";

const specialties = [
  {
    id: "act",
    label: "ACT",
    sublabel: "Acceptance & Commitment Therapy",
    icon: Target,
    href: "/specialties/act",
    description: "Accept what's outside your control while committing to actions aligned with your values — reducing psychological suffering and building a life of meaning.",
    subItems: ["Values Clarification", "Mindful Acceptance"]
  },
  {
    id: "dbt",
    label: "DBT",
    sublabel: "Dialectical Behavior Therapy",
    icon: Brain,
    href: "/specialties/dbt",
    description: "A skills-based approach to regulate emotions, build distress tolerance, and improve relationships — especially effective for trauma and mood disorders.",
    subItems: ["Emotion Regulation", "Distress Tolerance"]
  },
  {
    id: "art",
    label: "ART®",
    sublabel: "Accelerated Resolution Therapy",
    icon: Zap,
    href: "/specialties/art",
    description: "A proven eye-movement therapy that rapidly resolves traumatic memories and distressing experiences — often in just 1–5 sessions.",
    subItems: ["Trauma Resolution", "Rapid Results"]
  },
  {
    id: "inclusive",
    label: "Inclusive & Affirming Care",
    sublabel: "Culturally Responsive",
    icon: Globe,
    href: "/specialties/inclusive-affirming-care",
    description: "Multicultural, strength-based care that honors your full identity — integrating cultural background, spiritual beliefs, and lived experience into healing.",
    subItems: ["Multicultural Care", "Faith Integration"]
  },
  {
    id: "saft",
    label: "SĀF-T",
    sublabel: "Safety & Sensation Technique",
    icon: Activity,
    href: "/specialties/safety-sensation",
    description: "A body-centered somatic approach addressing safety, awareness, and sensation — used in both clinical therapy and coaching to regulate the nervous system.",
    subItems: ["Somatic Awareness", "Nervous System Regulation"]
  }
];

function SpecialtyCard({ item }) {
  const Icon = item.icon;
  return (
    <Link to={item.href} className="group block h-full">
      <div className="relative h-full rounded-2xl bg-white border border-gray-100 p-5 md:p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col">

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#c09050] to-[#d4a84b] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4a84b] to-[#c09050] shadow-lg shadow-[#d4a84b]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
          <Icon size={28} className="text-white" />
        </div>

        {/* Sublabel */}
        <p className="text-xs font-black uppercase tracking-[0.15em] mb-1 font-[system-ui]" style={{ color: "#b8862f" }}>
          {item.sublabel}
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-black mb-3 text-black font-[system-ui] group-hover:text-[#b8862f] transition-colors duration-300">
          {item.label}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow font-[system-ui]">
          {item.description}
        </p>

        {/* Sub-items */}
        {item.subItems.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.subItems.map((sub) => (
              <span
                key={sub}
                className="px-3 py-1 rounded-full bg-[#d4a84b]/15 text-[#b8862f] text-xs font-semibold font-[system-ui]"
              >
                {sub}
              </span>
            ))}
          </div>
        )}

        {/* Learn More */}
        <div className="flex items-center gap-2 text-sm font-bold mt-auto pt-3 text-[#b8862f]">
          <span>Learn More</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c09050] to-[#d4a84b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
      </div>
    </Link>
  );
}

export default function Specialties() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="specialties" className="relative w-full py-10 sm:py-14 md:py-16 bg-white overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-[system-ui]">
              Specialty Areas
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-[system-ui]"
          >
            Evidence-Based{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              Specialties
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg font-[system-ui]"
          >
            Five clinical modalities — each chosen for depth, efficacy, and lasting transformation
          </motion.p>
        </motion.div>

        {/* Balanced 3×2 grid — 5 specialties + CTA tile fills the 6th slot */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {specialties.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="h-full">
              <SpecialtyCard item={item} />
            </motion.div>
          ))}

          {/* CTA tile — occupies the 6th slot so the grid stays full */}
          <motion.div variants={itemVariants} className="h-full">
            <Link to="/services" className="group block h-full">
              <div className="relative h-full rounded-2xl bg-black border-2 border-[#c09050] p-5 md:p-6 flex flex-col justify-center items-center text-center transition-all duration-500 hover:bg-[#c09050] hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                <div className="w-14 h-14 rounded-xl bg-[#c09050]/20 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-500">
                  <Sparkles size={28} className="text-[#c09050] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-2 text-white font-[system-ui]">
                  Explore All Services
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 font-[system-ui]">
                  See the full range of therapy and coaching offerings
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#c09050] group-hover:text-white transition-colors duration-300">
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
