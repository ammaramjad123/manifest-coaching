import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Heart,
  Shield,
  Users,
  HandHeart,
  ChevronRight
} from "lucide-react";

export default function Specialties() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const approaches = [
    {
      id: "act",
      href: "/specialties/act",
      icon: <Brain size={32} />,
      title: "ACT",
      description: "Acceptance and Commitment Therapy - Accept thoughts while committing to value-driven action.",
      longDescription: "ACT helps you stop avoiding, denying, and struggling with your inner emotions. Instead, you learn to accept that these feelings are appropriate responses to certain situations and should not prevent you from moving forward.",
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5",
      iconBg: "bg-[#c09050]/10"
    },
    {
      id: "dbt",
      href: "/specialties/dbt",
      icon: <Brain size={32} />,
      title: "DBT",
      description: "Dialectical Behavior Therapy - Learn distress tolerance, emotion regulation, and interpersonal effectiveness.",
      longDescription: "DBT combines standard cognitive-behavioral techniques with concepts of distress tolerance, acceptance, and mindful awareness. It's highly effective for emotion dysregulation.",
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5",
      iconBg: "bg-[#c09050]/10"
    },
    {
      id: "art",
      href: "/specialties/art",
      icon: <Shield size={32} />,
      title: "ART ®",
      description: "Accelerated Resolution Therapy - Reprocess traumatic images and sensations in 1-5 sessions.",
      longDescription: "ART is a unique evidence-based therapy that helps clients reprogram distressing images and memories stored in the brain. Peer-reviewed publications show remarkable results for trauma, anxiety, depression, and phobias.",
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5",
      iconBg: "bg-[#c09050]/10"
    },
    {
      id: "inclusivity",
      href: "/specialties/inclusive-affirming-care",
      icon: <Users size={32} />,
      title: "Inclusive & Affirming Care",
      description: "Multicultural, strength-based care honoring diverse backgrounds, faith traditions, and personal identities.",
      longDescription: "Honoring the architecture of your identity. Healing does not happen in a vacuum — your cultural heritage, race, lived experiences, and faith traditions are the foundation of who you are. Our approach is rooted in cultural humility and multicultural awareness, honoring spiritual and religious values, and applying strength-based therapy that focuses on your assets, not just your ailments. You are already the architect of your own survival. Together, we build on that foundation so you can step into a life that is not only healed, but fully realized.",
      tags: ["Multicultural", "Strength-Based"],
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5",
      iconBg: "bg-[#c09050]/10"
    },
    {
      id: "safety-sensation",
      href: "/specialties/safety-sensation",
      icon: <HandHeart size={32} />,
      title: "Safety & Sensation",
      description: "SĀF-T technique for moving or eliminating distressing body sensations and promoting rapid calming.",
      longDescription: "Sensation Awareness Focus Technique (SĀF-T) is a component drawn from the Basic ART protocol that focuses on moving or eliminating distressing body sensations and promoting rapid calming.",
      tags: ["Somatic", "Rapid Calming"],
      color: "#c09050",
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgLight: "bg-[#c09050]/5",
      iconBg: "bg-[#c09050]/10"
    }
  ];

  return (
    <section id="specialties" className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
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
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-['Montserrat']">
              Clinical Approaches
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-['Montserrat']"
          >
            Evidence-Based{" "}
            <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
              Modalities
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-base sm:text-lg font-['Plus_Jakarta_Sans']"
          >
            Five powerful approaches tailored to your unique journey
          </motion.p>
        </motion.div>

        {/* Approaches Grid - 3 on top row, 2 on bottom row on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {/* First 3 cards (ACT, DBT, ART) */}
          {approaches.slice(0, 3).map((approach, index) => (
            <motion.div
              key={approach.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(approach.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              <Link to={approach.href} className="block h-full">
              <div className="relative h-full rounded-2xl bg-white border border-gray-100 p-5 md:p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col">
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${approach.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <div style={{ color: approach.color }} className="group-hover:text-[#c09050] transition-colors duration-300">
                    {approach.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black mb-2 text-black font-['Montserrat'] group-hover:text-[#c09050] transition-colors duration-300">
                  {approach.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow font-['Plus_Jakarta_Sans']">
                  {approach.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-['Plus_Jakarta_Sans']">
                    Evidence-Based
                  </span>
                  <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-['Plus_Jakarta_Sans']">
                    Trauma-Informed
                  </span>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold mt-auto pt-3 text-[#c09050]">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - 2 cards centered (Inclusive Care, Safety & Sensation) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6 max-w-3xl mx-auto"
        >
          {approaches.slice(3, 5).map((approach, index) => (
            <motion.div
              key={approach.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(approach.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative h-full"
            >
              <Link to={approach.href} className="block h-full">
              <div className="relative h-full rounded-2xl bg-white border border-gray-100 p-5 md:p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden cursor-pointer flex flex-col">
                
                {/* Hover Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${approach.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${approach.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <div style={{ color: approach.color }} className="group-hover:text-[#c09050] transition-colors duration-300">
                    {approach.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black mb-2 text-black font-['Montserrat'] group-hover:text-[#c09050] transition-colors duration-300">
                  {approach.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow font-['Plus_Jakarta_Sans']">
                  {approach.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {approach.tags.map((tag, ti) => (
                    <span key={ti} className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-['Plus_Jakarta_Sans']">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold mt-auto pt-3 text-[#c09050]">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-10 md:mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm md:text-base transition-all duration-500 hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 font-['Montserrat']"
          >
            <span>Explore All Specialties</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}