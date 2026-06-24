import { images } from "../config/siteImages";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutProcessSection from "../components/AboutProcessSection";
import { 
    AlertCircle,
    Brain,
  Sparkles, 
  Heart, 
  Shield, 
  Award, 
  Clock, 
  MapPin,
  CheckCircle,
  Quote,
  Flower2,
  Compass,
  Target,
  BookOpen,
  Video,
  Users,
  Star,
  ArrowRight,
  Calendar,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
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

  const stats = [
    { value: "26+", label: "Years Experience", icon: <Clock size={24} /> },
    { value: "5K+", label: "Clients Served", icon: <Users size={24} /> },
    { value: "3", label: "States Licensed", icon: <MapPin size={24} /> },
    { value: "NYU", label: "Master's Degree", icon: <Award size={24} /> }
  ];

  const values = [
    {
      icon: <Heart size={28} />,
      title: "Compassion",
      description: "Creating a safe, non-judgmental space where you feel seen, heard, and valued."
    },
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      description: "Honest about costs, timelines, and the therapeutic process. No surprises."
    },
    {
      icon: <Target size={28} />,
      title: "Excellence",
      description: "Evidence-based practices delivered with clinical precision and care."
    },
    {
      icon: <Compass size={28} />,
      title: "Partnership",
      description: "Your journey, our partnership. We walk this path together."
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      
      {/* ========== ABOUT — COMBINED BIO (Intro · Journey · Story) ========== */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden lg:pt-44 pt-36 pb-16 md:pb-20">
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c09050]/5 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#c09050]/3 to-transparent -skew-x-12 -translate-x-32 z-0 hidden lg:block" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Side - Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              
              {/* Badge with faces */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-8"
              >
                <div className="flex -space-x-2">
  {[1, 2, 3].map((i) => (
    <img 
      key={i} 
      src={`https://randomuser.me/api/portraits/men/${i === 1 ? '32' : i === 2 ? '45' : '68'}.jpg`} 
      className="w-5 h-5 rounded-full border-2 border-white" 
      alt="Client"
    />
  ))}
</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#c09050]">
                  Trusted by 5K+ Clients
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.18] text-balance font-[system-ui] text-black"
              >
                From{" "}
                <span className="inline-block bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent italic leading-[1.18] pb-1 pr-1">
                  Brooklyn Grit
                </span>
                <br />
                to{" "}
                <span className="inline-block bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent italic leading-[1.18] pb-1 pr-1">
                  Georgia Grace
                </span>
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-xl mx-auto lg:mx-0 mb-8 space-y-4"
              >
                <p className="text-black/70 text-base md:text-lg leading-relaxed font-[system-ui]">
                  As a child, Ayana was captivated by the stories of Harlem's Mother Clara Hale and the work of Covenant House — narratives that ignited a lifelong calling to serve as a bridge for those navigating life's most challenging terrains. She earned her BSW from SUNY Brockport (2000) and her MSW from New York University (2004), with a specialization in Clinical Social Work.
                </p>
                <p className="text-black/70 text-base md:text-lg leading-relaxed font-[system-ui]">
                  With over 26 years of experience across the public and private sectors — and licensure in New York, New Jersey, and Rhode Island — she is trained in ART®, SĀF-T, DBT, and ACT, having guided more than 5,000 individuals toward healing through the MANIFEST Method. Today she navigates life from the serene landscape of Georgia alongside her husband, three children, and two dogs.
                </p>
              </motion.div>

              {/* CTA Buttons - UPDATED: Black + Gold Border & Transparent + Gold Border */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-black border-2 border-[#c09050] text-white font-black rounded-2xl hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-xs uppercase tracking-widest"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://calendly.com/manifestcoachingllc/"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 h-14 px-8 bg-transparent border-2 border-[#c09050] text-[#c09050] font-black rounded-2xl hover:bg-[#c09050] hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 text-xs uppercase tracking-widest"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-black tracking-tight">26+</span>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#c09050] text-[#c09050]" />
                    ))}
                  </div>
                  <span className="text-xs text-black/50 mt-1">Years Experience</span>
                </div>
                <div className="w-px h-12 bg-black/10" />
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-black tracking-tight">5K+</span>
                  <span className="text-xs text-black/50 mt-2">Clients Served</span>
                </div>
                <div className="w-px h-12 bg-black/10 hidden sm:block" />
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-black text-black tracking-tight">NYU</span>
                  <span className="text-xs text-black/50 mt-2">Master's Degree</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Image Section */}
            <div className="lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px]"
              >
                <img
                  src={images.about.headshot}
                  alt="Ayana Foluke McKanney"
                  className="w-full h-auto aspect-[3/4] object-cover object-top"
                />
                
                {/* Overlay Glass Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 p-2 sm:p-3 bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-[#c09050]/20 shadow-2xl max-w-[150px] sm:max-w-[180px]"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-[#c09050] flex items-center justify-center mb-1 sm:mb-2">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-black text-[8px] sm:text-[10px] font-medium leading-relaxed font-[system-ui]">
                    "Your history is a narrative, not a limitation. Your future is a blueprint, not a burden."
                  </p>
                  <p className="text-[#c09050] text-[7px] sm:text-[9px] font-bold mt-1">— Ayana McKanney, LCSW</p>
                </motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#c09050]/10 rounded-full blur-[80px] -z-10"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#c09050]/5 rounded-full blur-[100px] -z-10"
              />
            </div>
          </div>
        </div>

        {/* ── Mission quote (right under the bio/picture) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 mt-12 md:mt-16 text-center"
        >
          <Quote className="w-8 h-8 text-[#c09050]/40 fill-[#c09050]/20 mx-auto mb-4" />
          <p className="text-gray-800 text-xl sm:text-2xl font-light italic leading-relaxed font-[system-ui]">
            "Emotional wellness and regulation provides generational wealth — a life that honors both breath and death."
          </p>
          <p className="text-[#c09050] font-bold text-sm mt-4 font-[system-ui]">— Ayana Foluke McKanney, LCSW</p>
        </motion.div>
      </section>

   <AboutProcessSection/>

      

     {/* ========== CREDENTIALS & EXPERTISE SECTION ========== */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">

        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#c09050]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#c09050]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4">
              <Award className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">Credentials & Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-[system-ui]">
              Education, Certifications{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                & Clinical Excellence
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-[#c09050] mx-auto rounded-full mb-5" />
            <p className="text-black/60 text-base md:text-lg font-[system-ui]">
              Over 26 years of clinical expertise grounded in evidence-based practice
            </p>
          </div>

          {/* Top row — Education · Licensed · Experience */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-5 md:mb-6">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-lg border border-[#c09050]/10 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4a84b] to-[#c09050] shadow-md shadow-[#c09050]/30 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black text-black font-[system-ui]">Education</h3>
              </div>
              <div className="border-l-4 border-[#c09050] pl-4">
                <p className="font-black text-black text-base leading-snug">Master of Social Work (MSW)</p>
                <p className="text-black/70 font-semibold text-sm mt-1">New York University · 2004</p>
                <p className="text-black/50 text-sm mt-1">Specialization in Clinical Social Work</p>
              </div>
            </motion.div>

            {/* Licensed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-lg border border-[#c09050]/10 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4a84b] to-[#c09050] shadow-md shadow-[#c09050]/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black text-black font-[system-ui]">Licensed LCSW</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-3"><span className="text-black/60 font-[system-ui]">New York</span><span className="text-black font-semibold font-[system-ui]">#098940</span></div>
                <div className="flex justify-between gap-3"><span className="text-black/60 font-[system-ui]">New Jersey</span><span className="text-black font-semibold font-[system-ui]">#44SL06739500</span></div>
                <div className="flex justify-between gap-3"><span className="text-black/60 font-[system-ui]">Rhode Island</span><span className="text-black font-semibold font-[system-ui]">#ISW04317</span></div>
              </div>
            </motion.div>

            {/* Experience & Recognition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#c09050] to-[#d4a84b] rounded-2xl p-6 md:p-7 shadow-lg shadow-[#c09050]/20 text-white"
            >
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-black font-[system-ui]">26+</span>
                <span className="text-white/85 font-semibold font-[system-ui]">Years of Practice</span>
              </div>
              <div className="w-full h-px bg-white/25 my-4" />
              <div className="flex items-start gap-2.5">
                <Star className="w-5 h-5 text-white fill-white mt-0.5 flex-shrink-0" />
                <p className="text-white text-[15px] md:text-base font-semibold font-[system-ui] leading-snug">
                  Master ART® Trainer — peer-reviewed, evidence-based treatment recognized by IS-ART.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Certifications — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#c09050]/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4a84b] to-[#c09050] shadow-md shadow-[#c09050]/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-black text-black font-[system-ui]">Certifications & Specialized Training</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {[
                { t: "Accelerated Resolution Therapy (ART®)", d: "Evidence-based treatment for trauma, anxiety, depression, phobias, OCD, grief, and performance anxiety" },
                { t: "SĀF-T (Sensations Awareness Focused Technique)", d: "An ART-derived component focused on eliminating distressing body sensations and promoting rapid calming" },
                { t: "Certified Trauma-Informed Clinician", d: "Advanced training in trauma-informed care principles and clinical application across all therapeutic contexts" },
                { t: "Evidence-Based Modalities Trained", d: "ART®, SĀF-T, DBT, ACT, and Mindfulness-Based Therapy" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c09050]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-[#c09050]" />
                  </div>
                  <div>
                    <p className="font-bold text-black font-[system-ui]">{c.t}</p>
                    <p className="text-black/60 text-sm font-[system-ui] leading-relaxed mt-0.5">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#c09050]/10"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c09050]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c09050]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c09050]/10 flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-[#c09050]" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-black mb-4 font-[system-ui]">Ready to Begin Your Journey?</h2>
              
              <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto font-[system-ui]">
                Schedule your free 15-minute consultation today. No pressure, just conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/manifestcoachingllc/clarity-call"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-[system-ui]"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border-2 border-[#c09050] text-[#c09050] font-bold hover:bg-[#c09050] hover:text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-[system-ui]"
                >
                  <Phone className="w-5 h-5" />
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}