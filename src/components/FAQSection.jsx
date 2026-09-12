import { images } from "../config/siteImages";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Plus,
  Minus,
  Search,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  Shield,
  Heart,
  Brain,
  BookOpen,
  CheckCircle
} from "lucide-react";

export default function FAQSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Reset open items when category or search changes
  useEffect(() => {
    setOpenItems({});
  }, [activeCategory, searchQuery]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categories = [
    { id: "all", name: "All Questions", icon: <HelpCircle size={16} /> },
    { id: "therapy", name: "Therapy", icon: <Heart size={16} /> },
    { id: "coaching", name: "Coaching", icon: <Brain size={16} /> },
    { id: "insurance", name: "Insurance", icon: <Shield size={16} /> },
    { id: "logistics", name: "Logistics", icon: <BookOpen size={16} /> }
  ];

  const allFaqs = [
    {
      id: 1,
      category: "therapy",
      question: "What is the difference between therapy and coaching?",
      answer: "Therapy focuses on healing past wounds, processing trauma, treating mental health conditions, and emotional regulation. It's a season of Restoration. Coaching (MANIFEST Method) is future-focused, helping you bridge the gap between where you are and where you want to be. It's a season of Expansion."
    },
    {
      id: 2,
      category: "therapy",
      question: "What states are you licensed in for therapy?",
      answer: "The Peace Practice is licensed to provide clinical therapy in New York (#098940), New Jersey (#44SL06739500), and Rhode Island (#ISW04317). All therapy sessions are conducted virtually via a secure, HIPAA-compliant platform."
    },
    {
      id: 3,
      category: "therapy",
      question: "What therapeutic approaches do you use?",
      answer: (
        <>
          Evidence-based approaches used include Accelerated Resolution Therapy (<Link to="/specialties/art" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">ART®</Link>), <Link to="/specialties/safety-sensation" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">SĀF-T</Link>, Dialectical Behavior Therapy (<Link to="/specialties/dbt" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">DBT</Link>), Acceptance and Commitment Therapy (<Link to="/specialties/act" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">ACT</Link>), and Mindfulness-Based Therapy.
        </>
      )
    },
    {
      id: 4,
      category: "therapy",
      question: "Do you treat anxiety, depression, and trauma?",
      answer: "Yes, anxiety, depression, and trauma are among the top specialties at The Peace Practice. Using evidence-based approaches, clients are helped to identify triggers, challenge negative thought patterns, and develop coping strategies that work."
    },
    {
      id: 5,
      category: "therapy",
      question: "What is the age range for therapy clients?",
      answer: "Clinical therapy services are available to individuals aged 17 and older."
    },
    {
      id: 6,
      category: "coaching",
      question: "What is the MANIFEST Method?",
      answer: (
        <>
          The <Link to="/specialties/manifest-method" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">MANIFEST Method</Link> is a proprietary coaching framework designed to help you bridge the gap between where you are and where you want to be. It's a high-accountability partnership focused on actionable steps, mindset shifts, and personal evolution.
        </>
      )
    },
    {
      id: 7,
      category: "coaching",
      question: "Is coaching available nationwide?",
      answer: "Yes! Transformational coaching is available nationwide via telehealth since it's consultative, not clinical, and not bound by state licensure."
    },
    {
      id: 8,
      category: "coaching",
      question: "Who is coaching for?",
      answer: "Coaching is ideal for those experiencing imposter syndrome, career transitions, feeling 'stuck', wanting peak performance, seeking self-actualization, or ready for personal evolution."
    },
    {
      id: 9,
      category: "coaching",
      question: "Do you accept insurance for coaching?",
      answer: "Coaching is private pay only. It's consultative, not clinical, so insurance does not apply. Packages are available for single sessions or multi-session bundles."
    },
    {
      id: 10,
      category: "insurance",
      question: "Do you accept insurance for therapy?",
      answer: "Yes, most major insurance plans are accepted including Aetna, Anthem, Blue Cross Blue Shield, Cigna, Optum, UnitedHealthcare, Oxford, Oscar, and more. Reach out to verify coverage."
    },
    {
      id: 11,
      category: "insurance",
      question: "Do you offer a free consultation?",
      answer: "Yes! A free 15-minute consultation is offered to discuss your needs, answer questions, and determine if it's a good fit. Schedule directly through the Calendly link."
    },
    {
      id: 12,
      category: "insurance",
      question: "What is your cancellation policy?",
      answer: "24 hours notice is required for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee."
    },
    {
      id: 13,
      category: "logistics",
      question: "Are sessions in-person or virtual?",
      answer: "All sessions are conducted virtually via a secure, HIPAA-compliant telehealth platform. This allows serving clients across NY, NJ, RI for therapy and nationwide for coaching."
    },
    {
      id: 14,
      category: "logistics",
      question: "How do I schedule an appointment?",
      answer: "Schedule a free consultation or coaching session directly through the Calendly link. For therapy clients, the intake process via Alma or Headway will be guided after the initial consultation."
    },
    {
      id: 15,
      category: "logistics",
      question: "How long are sessions?",
      answer: "Therapy sessions are typically 60 minutes. Coaching sessions range from 45-60 minutes depending on the package."
    },
    {
      id: 16,
      category: "logistics",
      question: "How do I know if I need therapy or coaching?",
      answer: "Take the 'Path Forward' assessment on this site. Mostly A's = Therapy (Restoration). Mostly B's = Coaching (Expansion). Many start with therapy, then transition to coaching."
    }
  ];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {/* Full-Screen Hero — identical structure to home hero */}
      <section className="relative w-full min-h-screen overflow-hidden bg-black pt-22 sm:pt-28">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src={images.faq.image}
              alt="Peaceful reflection"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/80" />
          </motion.div>
        </div>

        {/* Particles — Small */}
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

        {/* Particles — Medium */}
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

        {/* Particles — Large */}
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
          <div className="text-center max-w-6xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/20 backdrop-blur-2xl border border-[#c09050]/40 mb-6 md:mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white font-[system-ui]">
                Frequently Asked Questions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] font-black text-white tracking-tighter leading-[1.2] mb-6 font-[system-ui] overflow-visible"
            >
              Got Questions?
              <br />
              <span className="inline-block pr-3 pb-3 bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                We Have Answers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/80 max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 px-4 font-[system-ui]"
            >
              Everything you need to know about therapy, coaching, insurance, and logistics
            </motion.p>

          </div>
        </div>

        {/* Bottom fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* FAQ Content */}
      <section id="faq" className="relative w-full bg-white overflow-hidden">

      <div className="relative pt-16 sm:pt-20 pb-8 sm:pb-10">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mb-8 md:mb-10"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#c09050] focus:ring-2 focus:ring-[#c09050]/20 transition-all duration-300 font-[system-ui]"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mb-8 md:mb-10 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-2 sm:gap-3 min-w-max mx-auto px-1 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenItems({});
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap font-[system-ui] ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-[system-ui]">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                  setOpenItems({});
                }}
                className="mt-4 text-[#c09050] font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-all duration-300 hover:bg-gray-50"
                >
                  <span className="font-semibold text-black text-sm sm:text-base md:text-lg pr-4 font-[system-ui]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#c09050]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openItems[faq.id] ? 'bg-[#c09050]' : ''}`}>
                    {openItems[faq.id] ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#c09050]" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems[faq.id] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 sm:p-5 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[system-ui]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 md:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#c09050]/10 to-[#d4a84b]/10 border border-[#c09050]/20 p-6 sm:p-8 text-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c09050]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#d4a84b]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <MessageCircle className="w-12 h-12 text-[#c09050] mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-black text-black mb-2 font-[system-ui]">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto font-[system-ui]">
                Reach out directly and expect a response within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/manifestcoachingllc/clarity-call"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black border-2 border-[#c09050] text-white font-bold transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-[system-ui]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Free Consultation
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#c09050] text-[#c09050] font-bold hover:bg-[#c09050] hover:text-white transition-all duration-300 font-[system-ui]"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone className="w-4 h-4 text-[#c09050]" />
            <span className="font-[system-ui]">(929) 900-3056</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4 text-[#c09050]" />
            <span className="font-[system-ui]">partnership@thepeacepractice.me</span>
          </div>
          <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Shield className="w-4 h-4 text-[#c09050]" />
            <span className="font-[system-ui]">HIPAA Compliant</span>
          </div>
        </motion.div>
      </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
    </>
  );
}