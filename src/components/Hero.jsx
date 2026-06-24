import { images } from "../config/siteImages";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Calendar, 
  ArrowRight, 
  Star, 
  Clock, 
  Shield, 
  Sparkles,
  Users,
  Award,
  Heart,
  Brain,
  Video,
  CheckCircle,
  Flower2,
  HandHeart,
  Sun,
  Leaf,
  Zap,
  ChevronDown
} from "lucide-react";

export default function HeroSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
    { 
      label: "Years Experience", 
      value: "26+", 
      icon: <Award size={24} />,
      description: "Clinical expertise"
    },
    { 
      label: "Happy Clients", 
      value: "1k+",
      icon: <Users size={24} />,
      description: "Trusted care"
    },
    { 
      label: "Insurance Plans", 
      value: "15+", 
      icon: <Shield size={24} />,
      description: "Accepted providers"
    },
    { 
      label: "Online Sessions", 
      value: "100%", 
      icon: <Video size={24} />,
      description: "Virtual therapy"
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black pt-35 sm:pt-40">
      
      {/* Background Image from Public Folder */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={images.home.hero}
            alt="Calm peaceful therapy environment"
            className="w-full h-full object-cover object-center"
          />
          {/* Bright at top, fades to dark toward bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/80" />
        </motion.div>
      </div>

      {/* Animated Grain Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Floating Particles - Small */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#c09050]/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -150, -300],
              opacity: [0, 0.5, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Particles - Medium */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`medium-${i}`}
            className="absolute w-1.5 h-1.5 bg-[#d4a84b]/25 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -200, -400],
              opacity: [0, 0.35, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Particles - Large */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute w-2 h-2 bg-[#c09050]/15 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -250, -500],
              opacity: [0, 0.25, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-[#c09050]/15 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a84b]/15 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c09050]/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/20 backdrop-blur-2xl border border-[#c09050]/40 mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white font-[system-ui]">
              Pathways to Peace
            </span>
          </motion.div>

          {/* Main Heading - Your Journey. Our Partnership. */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-black text-white tracking-tight leading-[1.1] md:leading-[1.05] mb-6 font-[system-ui]"
          >
            Y<span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">OUR</span> Journey
            <br />
            <span className="relative inline-block pr-4">
              <span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent font-black">OUR</span>
              <span className="font-black"> Partnership</span>
            </span>
          </motion.h1>

          {/* Description - Neutral language */}
          <motion.p
            variants={itemVariants}
            className="text-white/80 max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 px-4 font-[system-ui]"
          >
            With nearly 30 years of experience, compassionate therapy, life coaching, and professional partnerships are offered to help navigate life's challenges and discover your path to peace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://calendly.com/manifestcoachingllc/clarity-call"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 overflow-hidden font-[system-ui]"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Schedule Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c09050]/0 via-[#c09050]/20 to-[#c09050]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <div className="inline-block transition-transform duration-300 hover:-translate-y-1">
              <Link to="/services">
                <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 overflow-hidden font-[system-ui] cursor-pointer">
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#b07d40] to-[#c09050] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Heart className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Premium Trust Strip - Updated (removed NYU Graduate) */}
          <motion.div
            variants={itemVariants}
            className="relative z-30 mt-20 pt-1 pb-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14">
              {/* 26+ Years */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <Brain className="w-6 h-6 text-white/50 group-hover:text-[#c09050] transition duration-300" />
                <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-[system-ui]">
                  26+ YEARS
                </span>
              </div>

              {/* Evidence Based */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <CheckCircle className="w-6 h-6 text-white/50 group-hover:text-[#c09050] transition duration-300" />
                <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-[system-ui]">
                  EVIDENCE-BASED
                </span>
              </div>

              {/* Trauma Informed */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <Heart className="w-6 h-6 text-white/50 group-hover:text-[#c09050] transition duration-300" />
                <span className="text-xl md:text-2xl font-black italic tracking-wide text-white/60 group-hover:text-white transition duration-300 font-[system-ui]">
                  TRAUMA-INFORMED
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}

// Stat Item Component with Counter Animation
function StatItem({ label, value, icon, description }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const targetValue = parseInt(value);
      if (!isNaN(targetValue)) {
        let start = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            setCount(targetValue);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      } else {
        setCount(value);
      }
    }
  }, [inView, controls, value]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="flex flex-col items-center text-center gap-2 group cursor-pointer"
    >
      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-[#c09050] group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-2xl md:text-3xl font-black text-white tracking-tighter font-[system-ui]">
          {count}{typeof value === 'string' && value.includes('+') ? '+' : ''}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/60 font-[system-ui]">
          {label}
        </span>
        <span className="text-[10px] text-white/40 font-[system-ui]">
          {description}
        </span>
      </div>
    </motion.div>
  );
}