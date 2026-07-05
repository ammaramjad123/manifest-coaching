import { images, trainingLinks } from "../config/siteImages";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesHero from "../components/ServicesHero";

import { 
 Sparkles,
  ArrowRight, 
  Heart, 
  Brain, 
  BookOpen,
  Flower2,
  Shield,
Clock,
AlertCircle,
  CheckCircle,
  Calendar,

  Compass,
  Target,
  Star,
  Zap,
 
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────
//  PATH FINDER QUIZ
// ─────────────────────────────────────────────────────────
function PathFinderQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      q: "What best describes where you are right now?",
      options: [
        { label: "I'm navigating emotional pain, trauma, or mental health symptoms that are affecting my daily life.", value: "process" },
        { label: "I'm functioning — but I feel stuck. I know I'm meant for more and need strategy to get there.", value: "pivot" },
        { label: "I'm a clinician, attorney, HR leader, or organization seeking professional training or partnerships.", value: "partnership" },
      ]
    },
    {
      q: "Where are you currently located?",
      options: [
        { label: "New York, New Jersey, or Rhode Island", value: "process" },
        { label: "Elsewhere in the United States", value: "pivot" },
        { label: "Location isn't the priority — I'm engaging professionally.", value: "partnership" },
      ]
    },
    {
      q: "What outcome feels most important to you right now?",
      options: [
        { label: "Healing, stability, and processing what I've been carrying.", value: "process" },
        { label: "Clarity, momentum, and a concrete plan for my next chapter.", value: "pivot" },
        { label: "Professional development, certification, or expanding organizational capacity.", value: "partnership" },
      ]
    },
    {
      q: "How would you describe the weight of what you're navigating?",
      options: [
        { label: "It's affecting my daily functioning — I need consistent clinical support.", value: "process" },
        { label: "I'm okay — but I'm ready to shift from surviving to intentionally thriving.", value: "pivot" },
        { label: "This is a professional investment, not a personal crisis.", value: "partnership" },
      ]
    },
    {
      q: "Which phrase feels most true right now?",
      options: [
        { label: '"I need to heal first."', value: "process" },
        { label: '"I need to grow next."', value: "pivot" },
        { label: '"I want to help others do both."', value: "partnership" },
      ]
    },
  ];

  const results = {
    process: {
      path: "The Process",
      subtitle: "Clinical Therapy",
      description: "Based on your responses, you are in a season of healing. The Process provides evidence-based clinical therapy — including ART®, DBT, and ACT — for individuals 17+ in New York, New Jersey, and Rhode Island. This is the right clinical container for the work ahead.",
      includes: [
        "Individual therapy via HIPAA-compliant telehealth",
        "Evidence-based modalities: ART®, DBT, and ACT",
        "Insurance accepted through ALMA and Headway, plus Private Pay",
      ],
      note: "Clinical therapy is available to clients residing in NY, NJ, and RI only.",
    },
    pivot: {
      path: "The Pivot",
      subtitle: "Transformational Coaching",
      description: "Based on your responses, you are in a season of expansion. The Pivot is strategic, nationwide coaching through the MANIFEST Method — designed to help you clarify your vision, break through stagnation, and build your next chapter with intention.",
      includes: [
        "Available nationwide via virtual sessions",
        "The proprietary MANIFEST Method framework",
        "Single sessions or multi-session packages",
      ],
      note: "Coaching is not therapy and is not a substitute for clinical mental health treatment.",
    },
    partnership: {
      path: "The Partnership",
      subtitle: "Professional Training & Education",
      description: "Based on your responses, you are investing in professional and organizational excellence. All partnerships are conducted through MANIFEST Coaching LLC — ART® & SĀF-T trainings, EAP collaborations, immigration assessments, and the bARTer Balance Benefit.",
      includes: [
        "ART® & SĀF-T trainings facilitated by a Certified Master ART® Trainer",
        "EAP & corporate wellness workshops — inquire for custom engagements",
        "Immigration assessments in partnership with attorneys",
      ],
      note: "Reach out directly to discuss scheduling, group rates, and custom programming.",
    },
  };

  const handleAnswer = (value) => {
    const next = [...answers, value];
    setAnswers(next);
    setStep(s => s + 1);
  };

  const computeResult = () => {
    const counts = { process: 0, pivot: 0, partnership: 0 };
    answers.forEach(v => { if (counts[v] !== undefined) counts[v]++; });
    return Object.keys(counts).reduce((a, b) => counts[a] >= counts[b] ? a : b);
  };

  const reset = () => { setStep(0); setAnswers([]); };

  const isResult = step >= questions.length;
  const resultKey = isResult ? computeResult() : null;
  const result = resultKey ? results[resultKey] : null;
  const progress = isResult ? 100 : (step / questions.length) * 100;

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden grid lg:grid-cols-5"
      >

        {/* Left — gold gradient panel */}
        <div className="lg:col-span-2 relative bg-gradient-to-br from-[#c09050] to-[#d4a84b] p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-black/10 blur-2xl" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
          }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white font-[system-ui]">Path Finder</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 font-[system-ui]">
              Which Path Is Right for You?
            </h2>
            <p className="text-white/85 text-sm md:text-base leading-relaxed font-[system-ui]">
              Answer 5 quick questions and we'll point you toward the right door.
            </p>
          </div>

          {/* Progress */}
          <div className="relative z-10 mt-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/90 text-xs font-bold uppercase tracking-wider font-[system-ui]">
                {isResult ? "Complete" : `Step ${step + 1} of ${questions.length}`}
              </span>
              <span className="text-white/90 text-xs font-bold font-[system-ui]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/25 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Right — question / result panel */}
        <div className="lg:col-span-3 p-7 sm:p-9 md:p-10">

            {!isResult ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-xl sm:text-2xl font-black text-black mb-7 font-[system-ui] leading-snug">
                  {questions[step].q}
                </h3>
                <div className="space-y-3">
                  {questions[step].options.map((opt, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(opt.value)}
                      className="w-full text-left px-5 py-4 rounded-2xl border-2 border-gray-100 hover:border-[#c09050] hover:bg-[#c09050]/[0.03] transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-200 group-hover:border-[#c09050] group-hover:bg-[#c09050]/10 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                          <span className="text-xs font-black text-gray-400 group-hover:text-[#c09050] transition-colors font-[system-ui]">
                            {String.fromCharCode(65 + i)}
                          </span>
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base font-[system-ui] leading-relaxed group-hover:text-gray-900 transition-colors">
                          {opt.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {/* Result header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#c09050]/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#c09050]" />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">
                    Your Recommended Path
                  </p>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-black font-[system-ui] mb-1">
                  {result.path}
                </h3>
                <p className="text-[#c09050] font-bold text-sm uppercase tracking-wider mb-5 font-[system-ui]">
                  {result.subtitle}
                </p>

                <p className="text-gray-600 text-base leading-relaxed mb-6 font-[system-ui]">
                  {result.description}
                </p>

                {/* Includes */}
                <div className="bg-[#fefcf7] border border-[#c09050]/10 rounded-2xl p-5 mb-5 space-y-3">
                  {result.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#c09050] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-[system-ui] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-xs mb-7 font-[system-ui] italic">{result.note}</p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://calendly.com/manifestcoachingllc/clarity-call"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 font-[system-ui]"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-gray-200 text-gray-500 font-semibold text-sm hover:border-gray-300 hover:text-gray-700 transition-all duration-200 font-[system-ui]"
                  >
                    Retake Quiz
                  </motion.button>
                </div>
              </motion.div>
            )}

        </div>
      </motion.div>

      {!isResult && (
        <p className="text-center text-gray-400 text-xs mt-6 font-[system-ui]">
          Not sure yet? Every path begins with a free 15-minute alignment call.
        </p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
export default function ServicesPage() {
  const controls = useAnimation();
  const [ inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeService, setActiveService] = useState(0);
  const [ setHoveredCard] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  
  const services = [
    {
      id: "process",
      title: "The Process",
      subtitle: "Clinical Therapy",
      icon: <Heart size={28}  />,
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgGradient: "bg-gradient-to-br from-[#c09050]/10 to-[#d4a84b]/10",
      borderColor: "border-[#c09050]/30",
      textColor: "text-[#c09050]",
      iconBg: "bg-[#c09050]/15",
      iconColor: "text-[#c09050]",
      description: "Deep healing for trauma, distress, and emotional regulation.",
      longDescription: "A safe, compassionate space to heal from past wounds, process complex emotions, and build emotional regulation skills — using ART®, DBT, ACT, and the individualized MANIFEST Method.",
      modalities: ["ART", "DBT", "ACT"],
      features: ["Individual therapy ages 17+", "Virtual HIPAA-compliant sessions", "Flexible scheduling", "Insurance accepted"],
      locations: ["NY (#098940)", "NJ (#44SL06739500)", "RI (#ISW04317)"],
      ctaText: "Begin Your Healing Journey",
      ctaLink: "https://calendly.com/manifestcoachingllc/healingsingle",
      ctaIcon: <Heart size={18} />
    },
    {
      id: "pivot",
      title: "The Pivot",
      subtitle: "Transformational Coaching",
      icon: <Brain size={28} />,
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgGradient: "bg-gradient-to-br from-[#c09050]/10 to-[#d4a84b]/10",
      borderColor: "border-[#c09050]/30",
      textColor: "text-[#c09050]",
      iconBg: "bg-[#c09050]/15",
      iconColor: "text-[#c09050]",
      description: "Strategic guidance for life shifts and personal growth.",
      longDescription: "The MANIFEST Method helps you bridge the gap between where you are and where you want to be.",
      modalities: ["MANIFEST Framework", "SĀF-T", "Goal-Accelerator"],
      features: ["Nationwide via telehealth", "Single or package bundles", "Pay-to-schedule via Calendly", "Workbooks included"],
      locations: ["Available Nationwide"],
      ctaText: "Start Your Expansion Journey",
      ctaLink: "https://calendly.com/manifestcoachingllc/coach",
      ctaIcon: <Brain size={18} />
    },
    {
      id: "barter",
      title: "bARTer Balance",
      subtitle: "ART® Therapist Benefit",
      icon: <Flower2 size={28} />,
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgGradient: "bg-gradient-to-br from-[#c09050]/10 to-[#d4a84b]/10",
      borderColor: "border-[#c09050]/30",
      textColor: "text-[#c09050]",
      iconBg: "bg-[#c09050]/15",
      iconColor: "text-[#c09050]",
      description: "A professional exchange protocol for ART® therapists and their immediate family members.",
      longDescription: "The bARTer Balance Benefit is a peer-to-peer professional exchange protocol for ART® therapists and their immediate family members — a way for fellow practitioners to receive evidence-based trauma resolution through the MANIFEST Coaching LLC platform.",
      modalities: ["ART® Therapy", "SĀF-T", "Coaching"],
      features: ["For ART® therapists & their immediate family", "Peer-to-peer professional exchange protocol", "Conducted through MANIFEST Coaching LLC", "Inquire for enrollment details"],
      locations: ["Available Nationwide"],
      ctaText: "Book a bARTer Balance Session",
      ctaLink: "https://calendly.com/manifestcoachingllc/barter",
      ctaIcon: <Flower2 size={18} />
    },
    {
      id: "partnership",
      title: "The Partnership",
      subtitle: "Training & Education",
      icon: <BookOpen size={28} />,
      gradient: "from-[#c09050] to-[#d4a84b]",
      bgGradient: "bg-gradient-to-br from-[#c09050]/10 to-[#d4a84b]/10",
      borderColor: "border-[#c09050]/30",
      textColor: "text-[#c09050]",
      iconBg: "bg-[#c09050]/15",
      iconColor: "text-[#c09050]",
      description: "Evidence-based training for organizations and professionals.",
      longDescription: "ART® & SĀF-T trainings, EAP services, immigration assessments, and the bARTer Balance Benefit — all conducted through MANIFEST Coaching LLC.",
      modalities: ["ART® Training", "SĀF-T Certification", "EAP & Corporate"],
      features: ["ART® Training (CE credits — ART only)", "In-person & virtual options", "Group rates available", "Through MANIFEST Coaching LLC"],
      locations: ["In-person (NY, GA) + Virtual Nationwide"],
      ctaText: "Inquire About Training",
      ctaLink: "/contact",
      ctaIcon: <BookOpen size={18} />
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 10000);
  
    return () => clearInterval(interval);
  }, [services.length]);
  const activeData = services[activeService];
  
  return (
    <div className="bg-white overflow-hidden">
      
      {/* ========== HERO SECTION - SERVICES ========== */}
        <ServicesHero />


          {/* ========== SERVICES & PRICING - COSMIC EXPERIENCE ========== */}
      <section className="py-20 md:py-28 bg-white overflow-hidden relative">
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#c09050]/20 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0,
              }}
              animate={{
                y: [null, -50, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">Choose Your Path</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-[system-ui]"
            >
              Invest in Your{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Transformation
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "4rem" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-gradient-to-r from-[#c09050] to-[#d4a84b] mx-auto rounded-full mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg font-[system-ui]"
            >
              Select the service that resonates with your journey — payment secures your appointment
            </motion.p>
          </div>

          {/* Pricing Cards - 3D Flip Card Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 - ART Therapy */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  $250 / session
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-[system-ui]">ART Therapy</h3>
                  <p className="text-[#c09050] font-semibold text-sm mb-3">Accelerated Resolution Therapy</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-[system-ui]">
                    60-minute session. Evidence-based treatment for trauma, anxiety, depression, and phobias.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#c09050]" />
                    <span className="text-xs font-bold text-gray-500">60 min session</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/healingsingle"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 group-hover:-translate-y-0.5 font-[system-ui] text-base"
                  >
                    Book Your Healing Time →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Immigration Evaluation */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  Deposit Required
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-[system-ui]">Immigration Evaluation</h3>
                  <p className="text-[#c09050] font-semibold text-sm mb-3">High-Stakes Clinical Assessment</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-[system-ui]">
                    120-minute evaluation. Curating complex narratives for Asylum, Hardship, and VAWA cases.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#c09050]" />
                    <span className="text-xs font-bold text-gray-500">120 min session</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/immigration"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 group-hover:-translate-y-0.5 font-[system-ui] text-base"
                  >
                    Book Your Evaluation →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Transformational Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  $250 / session
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-[system-ui]">Transformational Coaching</h3>
                  <p className="text-[#c09050] font-semibold text-sm mb-3">MANIFEST Method</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-[system-ui]">
                    60-minute session. Strategic guidance for life shifts, career evolution, and personal growth.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-[#c09050]" />
                    <span className="text-xs font-bold text-gray-500">60 min session</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/coach"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 group-hover:-translate-y-0.5 font-[system-ui] text-base"
                  >
                    Book Your Coaching →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - ALMA Therapy (Insurance) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 flex flex-col items-end gap-1 z-10">
                  <div className="bg-gradient-to-l from-[#10B981] to-[#34D399] text-white px-4 py-1 rounded-l-full text-sm font-bold">
                    Insurance Accepted
                  </div>
                  <div className="bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-xs font-bold">
                    Private Pay Available
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#34D399] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-[system-ui]">ALMA Therapy</h3>
                  <p className="text-[#10B981] font-semibold text-sm mb-3">Insurance Follow-up Sessions</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-[system-ui]">
                    60-minute follow-up therapy sessions. Please complete your intake forms on ALMA before booking.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs font-bold text-gray-500">60 min session</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold text-gray-500">$100 late cancellation fee</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 mb-3">
                    <span className="text-amber-500 text-sm flex-shrink-0 mt-0.5">⚠️</span>
                    <p className="text-amber-800 text-sm font-[system-ui] leading-relaxed">
                      <span className="font-bold">New clients:</span> Please set up your insurance and first appointment directly on ALMA first. The Calendly link below is for existing clients only.
                    </p>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/alma"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-black border-2 border-[#10B981] text-white font-bold hover:bg-[#10B981] hover:border-[#10B981] transition-all duration-300 group-hover:-translate-y-0.5 font-[system-ui] text-base"
                  >
                    Book ALMA Follow-up →
                  </a>
                  <a
                    href="https://secure.helloalma.com/providers/ayana-mckanney/"
                    target="_blank"
                    className="block w-full text-center py-2 mt-2 rounded-xl border border-[#10B981] text-[#10B981] font-semibold hover:bg-[#10B981] hover:text-white transition-all duration-300 text-base font-[system-ui]"
                  >
                    Complete Intake on ALMA →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Headway Therapy (Insurance) */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 flex flex-col items-end gap-1 z-10">
                  <div className="bg-gradient-to-l from-[#3B82F6] to-[#60A5FA] text-white px-4 py-1 rounded-l-full text-sm font-bold">
                    Insurance Accepted
                  </div>
                  <div className="bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-xs font-bold">
                    Private Pay Available
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-[system-ui]">Headway Therapy</h3>
                  <p className="text-[#3B82F6] font-semibold text-sm mb-3">Insurance Follow-up Sessions</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-[system-ui]">
                    60-minute follow-up therapy sessions. Please complete your intake forms on Headway before booking.
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#3B82F6]" />
                    <span className="text-xs font-bold text-gray-500">60 min session</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-bold text-gray-500">$100 late cancellation fee</span>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 mb-3">
                    <span className="text-amber-500 text-sm flex-shrink-0 mt-0.5">⚠️</span>
                    <p className="text-amber-800 text-sm font-[system-ui] leading-relaxed">
                      <span className="font-bold">New clients:</span> Please set up your insurance and first appointment directly on Headway first. The Calendly link below is for existing clients only.
                    </p>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/headway"
                    target="_blank"
                    className="block w-full text-center py-3 rounded-xl bg-black border-2 border-[#3B82F6] text-white font-bold hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 group-hover:-translate-y-0.5 font-[system-ui] text-base"
                  >
                    Book Headway Follow-up →
                  </a>
                  <a
                    href="https://care.headway.co/providers/ayana-foluke-mckanney?utm_source=pem&utm_medium=direct_link&utm_campaign=112539"
                    target="_blank"
                    className="block w-full text-center py-2 mt-2 rounded-xl border border-[#3B82F6] text-[#3B82F6] font-semibold hover:bg-[#3B82F6] hover:text-white transition-all duration-300 text-base font-[system-ui]"
                  >
                    Complete Intake on Headway →
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Card 6 - bARTer Balance */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  ART® Therapist Benefit
                </div>
                <div className="p-6 pt-8 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Flower2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 font-[system-ui]">bARTer Balance</h3>
                  <p className="text-[#c09050] font-semibold text-sm mb-3">A Professional Exchange for ART® Therapists</p>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 font-[system-ui]">
                    A peer-to-peer professional exchange protocol for ART® therapists and their immediate family members — through MANIFEST Coaching LLC.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-[#c09050]" />
                    <span className="text-xs font-bold text-gray-500">For ART® therapists & their immediate family</span>
                  </div>
                  <a
                    href="https://calendly.com/manifestcoachingllc/barterbalance?month=2026-06"
                    target="_blank"
                    className="mt-auto block w-full text-center py-3 rounded-xl bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 group-hover:-translate-y-0.5 font-[system-ui] text-base"
                  >
                    Book a Session →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 7 - Professional Training */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative md:col-span-2 lg:col-span-3"
            >
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#c09050]/30 h-full">
                <div className="absolute top-4 right-0 bg-gradient-to-l from-[#c09050] to-[#d4a84b] text-white px-4 py-1 rounded-l-full text-sm font-bold z-10">
                  Professional Training
                </div>
                <div className="p-6 pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 font-[system-ui]">Training & Certification</h3>
                  <p className="text-[#d4a84b] font-semibold text-sm mb-3">ART® · SĀF-T · Corporate & Community</p>
                  <p className="text-white/70 text-base leading-relaxed mb-6 font-[system-ui]">
                    Facilitated by a Certified Master ART® Trainer. Open to licensed clinicians, paraprofessionals, and community professionals. No clinical license required for SĀF-T.
                  </p>

                  {/* MANIFEST Coaching LLC brand */}
                  <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="bg-white rounded-lg p-2 flex-shrink-0">
                      <img
                        src={images.services.trainingLogo}
                        alt="MANIFEST Coaching LLC"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <p className="text-white/50 text-xs font-[system-ui] leading-relaxed">
                      All professional training and partnership services are facilitated through MANIFEST Coaching LLC.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                      href={trainingLinks.artBasic}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 border border-[#c09050]/30 hover:bg-[#c09050]/20 hover:border-[#c09050] transition-all duration-300 group/card"
                    >
                      <Star className="w-5 h-5 text-[#d4a84b] mb-2" />
                      <span className="text-white font-black text-sm font-[system-ui] mb-1">ART® Basic Training</span>
                      <span className="text-[#d4a84b] text-xs font-semibold mb-2">$1,700 · 20 CE Credits</span>
                      <span className="text-white/60 text-xs font-[system-ui]">Register via RCRR →</span>
                    </a>
                    <a
                      href={trainingLinks.saft}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 border border-[#c09050]/30 hover:bg-[#c09050]/20 hover:border-[#c09050] transition-all duration-300 group/card"
                    >
                      <Shield className="w-5 h-5 text-[#d4a84b] mb-2" />
                      <span className="text-white font-black text-sm font-[system-ui] mb-1">SĀF-T Training</span>
                      <span className="text-[#d4a84b] text-xs font-semibold mb-2">$199 · No License Required</span>
                      <span className="text-white/60 text-xs font-[system-ui]">Register via RCRR →</span>
                    </a>
                    <a
                      href="mailto:partnership@thepeacepractice.me?subject=Corporate%20%2F%20Community%20Training%20Inquiry"
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 border border-[#c09050]/30 hover:bg-[#c09050]/20 hover:border-[#c09050] transition-all duration-300 group/card"
                    >
                      <Users className="w-5 h-5 text-[#d4a84b] mb-2" />
                      <span className="text-white font-black text-sm font-[system-ui] mb-1">Corporate & Community</span>
                      <span className="text-[#d4a84b] text-xs font-semibold mb-2">Custom Format</span>
                      <span className="text-white/60 text-xs font-[system-ui]">Email to Inquire →</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Insurance Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
              <Shield className="w-5 h-5 text-[#c09050]" />
              <p className="text-gray-600 text-sm font-[system-ui]">
                Insurance accepted for therapy through <span className="font-semibold text-[#10B981]">ALMA</span> and <span className="font-semibold text-[#3B82F6]">Headway</span>, plus <span className="font-semibold text-[#c09050]">Private Pay</span>
              </p>
              <div className="flex gap-2">
                <a href="https://secure.helloalma.com/providers/ayana-mckanney/" target="_blank" className="text-xs text-[#10B981] font-semibold hover:underline">ALMA</a>
                <span className="text-gray-300">|</span>
                <a href="https://care.headway.co/providers/ayana-foluke-mckanney" target="_blank" className="text-xs text-[#3B82F6] font-semibold hover:underline">Headway</a>
                <span className="text-gray-300">|</span>
                <span className="text-xs text-[#c09050] font-semibold">Private Pay</span>
              </div>
            </div>
          </motion.div>

          {/* Free Consultation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 text-center"
          >
            <a
              href="https://calendly.com/manifestcoachingllc/clarity-call"
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-[system-ui]"
            >
              <Calendar className="w-5 h-5" />
              Not sure? Book a Free 15-min Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== INTERACTIVE SERVICE SHOWCASE ========== */}
      <section className="bg-black overflow-hidden">

        {/* Landscape image — in normal flow, content sits below */}
        <div className="relative h-[480px] md:h-[560px] lg:h-[640px]">
          <img
            src={images.services.showcase}
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black" />
        </div>

        {/* Content — fully below the image on black */}
        <div className="pb-20 px-5 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/15 border border-[#c09050]/30 mb-4">
                <Sparkles className="w-4 h-4 text-[#c09050]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">Choose Your Path</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 font-[system-ui]">
                Three Pathways to{" "}
                <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                  Peace
                </span>
              </h2>
              <p className="text-white/60 text-base sm:text-lg font-[system-ui]">
                Select the path that resonates with your journey
              </p>
            </div>

            {/* Service selector tabs */}
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`px-5 sm:px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 font-[system-ui] ${
                    activeService === idx
                      ? "bg-[#c09050] text-white border-2 border-[#c09050] shadow-lg"
                      : "bg-[#c09050]/20 text-[#d4a84b] border-2 border-[#c09050]/40 hover:border-[#c09050]/80 hover:bg-[#c09050]/30 hover:text-white"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Service Detail - Dynamic Content */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`relative rounded-2xl md:rounded-3xl ${activeData.bgGradient} border ${activeData.borderColor} overflow-hidden shadow-xl`}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-black/5 rounded-full blur-3xl" />

              <div className="relative p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8 lg:gap-12">

                  {/* Left Column */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${activeData.gradient} flex items-center justify-center shadow-md`}>
                        <div className="text-white">{activeData.icon}</div>
                      </div>
                      <div>
                        <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${activeData.textColor}`}>
                          {activeData.subtitle}
                        </p>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white font-[system-ui]">
                          {activeData.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-[system-ui]">
                      {activeData.longDescription}
                    </p>

                    <div className="mb-4 md:mb-6">
                      <h4 className="font-bold text-white mb-2 md:mb-3 text-sm md:text-base font-[system-ui]">✨ Key Modalities:</h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {activeData.modalities.map((mod, i) => (
                          <span key={i} className={`px-2 md:px-3 py-1 rounded-full bg-gradient-to-r ${activeData.gradient} text-white text-[10px] md:text-xs font-semibold`}>
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={activeData.ctaLink}
                      target={activeData.id !== "partnership" ? "_blank" : "_self"}
                      className="group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm md:text-base transition-all duration-500 hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 font-[system-ui] w-full sm:w-auto justify-center"
                    >
                      {activeData.ctaIcon}
                      <span className="truncate">{activeData.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Right Column - Features Card */}
                  <div className="lg:w-[340px] xl:w-[380px] flex-shrink-0">
                    <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-200 shadow-lg">
                      <h3 className="text-lg md:text-xl font-black text-black mb-4 md:mb-5 font-[system-ui] flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#c09050]" />
                        What to Expect
                      </h3>
                      <ul className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                        {activeData.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-[#c09050] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm md:text-base font-[system-ui] leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-100 pt-4 md:pt-5 mt-2">
                        <div className="flex flex-wrap gap-2">
                          {activeData.locations.map((loc, i) => (
                            <span key={i} className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                              📍 {loc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PATH FINDER QUESTIONNAIRE ========== */}
      <section className="py-14 md:py-20 bg-[#fafaf8]">
        <PathFinderQuiz />
      </section>

      {/* ========== PATH COMPARISON TABLE ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-black font-[system-ui] mb-3"
            >
              At a{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Glance
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-base font-[system-ui]"
            >
              A quick reference for the three paths.
            </motion.p>
          </div>

          {/* Mobile: stacked cards | Desktop: side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                name: "The Process",
                sub: "Clinical Therapy",
                icon: Heart,
                rows: [
                  { label: "Who It's For", value: "Individuals seeking clinical healing" },
                  { label: "Location", value: "NY, NJ & RI only" },
                  { label: "Session Length", value: "60–90 min" },
                  { label: "Intensives", value: "5-hr Intensives available" },
                  { label: "Payment", value: "Insurance or private pay" },
                  { label: "Modalities", value: "ART®, DBT, ACT" },
                ]
              },
              {
                name: "The Pivot",
                sub: "Transformational Coaching",
                icon: Brain,
                rows: [
                  { label: "Who It's For", value: "High-achievers ready to grow" },
                  { label: "Location", value: "Nationwide via telehealth" },
                  { label: "Session Length", value: "60–90 min" },
                  { label: "Intensives", value: "5-hr Intensives available" },
                  { label: "Payment", value: "Private pay" },
                  { label: "Framework", value: "The MANIFEST Method" },
                ]
              },
              {
                name: "The Partnership",
                sub: "Training & Education",
                icon: BookOpen,
                rows: [
                  { label: "Who It's For", value: "Professionals & organizations" },
                  { label: "Location", value: "In-person + virtual nationwide" },
                  { label: "Session Length", value: "Varies by program" },
                  { label: "Payment", value: "Private pay — inquire for rates" },
                  { label: "Certifications", value: "ART® & SĀF-T via RCRR" },
                  { label: "Credential", value: "Master Immigration Evaluator" },
                ]
              }
            ].map((path, idx) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden"
                >
                  {/* Card header */}
                  <div className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] px-6 py-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-black text-xl font-[system-ui] leading-tight">{path.name}</p>
                      <p className="text-white/80 text-sm font-[system-ui]">{path.sub}</p>
                    </div>
                  </div>
                  {/* Rows */}
                  <div className="divide-y divide-gray-50">
                    {path.rows.map((row, i) => (
                      <div key={i} className="px-6 py-3.5 flex items-start justify-between gap-4">
                        <span className="text-gray-400 text-xs font-black uppercase tracking-wider font-[system-ui] whitespace-nowrap pt-0.5">
                          {row.label}
                        </span>
                        <span className="text-gray-800 text-sm font-[system-ui] text-right leading-snug">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-xs mt-8 font-[system-ui]"
          >
            Unsure which path fits? The free 15-minute alignment call is the right first step.
          </motion.p>
        </div>
      </section>

      {/* ========== THE TWO HATS ========== */}
      <section className="bg-black overflow-hidden">

        {/* Crown image — in normal flow so content sits below it */}
        <div className="relative h-[580px] md:h-[660px] lg:h-[740px]">
          <img src={images.services.twoHatsCrown} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
        </div>

        {/* Header + cards — fully below the crown */}
        <div className="pb-20 px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-xs font-black uppercase tracking-wider text-white">The Curator's Boundary</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 font-[system-ui] text-center">
              The <span className="text-[#c09050]">Two Hats</span>
            </h2>
            <p className="text-white/80 font-[system-ui] text-center max-w-xl text-sm md:text-base">
              Never worn at the same time. During the Alignment Call, we decide which hat honors your current journey best.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-[#c09050]/50 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c09050]/30 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-[#c09050]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 font-[system-ui]">Hat 1: Clinical Therapist</h3>
                <p className="text-[#c09050] font-semibold mb-4">Licensed Healthcare Professional</p>
                <p className="text-white/60 text-sm mb-4">Restricted to NY, NJ, and RI</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs">NY (#098940)</span>
                  <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs">NJ (#44SL06739500)</span>
                  <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs">RI (#ISW04317)</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-white/20 backdrop-blur-sm border border-[#c09050]/50 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c09050]/30 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-[#c09050]" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2 font-[system-ui]">Hat 2: Consultative Coaching</h3>
                <p className="text-[#c09050] font-semibold mb-4">w/ MANIFEST Coaching LLC</p>
                <p className="text-white/60 text-sm mb-4">Available Nationwide</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs">All 50 States</span>
                  <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs">Virtual Sessions</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    {/* ========== WHO WE HELP ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4">
              <Users className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">Who We Help</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 font-[system-ui]">
              Designed for{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Individual Evolution
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#c09050] to-[#d4a84b] mx-auto rounded-full mb-5" />
            <p className="text-gray-500 text-base md:text-lg font-[system-ui]">
              Ages 17+ | Virtual Sessions Available Nationwide
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {[
              { 
                icon: <Target size={24} />, 
                title: "High-Achievers & Students", 
                desc: "Navigating career pivots or launching into adulthood",
                color: "#c09050",
                bgColor: "bg-[#c09050]/10"
              },
              { 
                icon: <Compass size={24} />, 
                title: "Individuals in Transition", 
                desc: "Recalibrating identity during shifts in relationship, marriage, or parenthood",
                color: "#d4a84b",
                bgColor: "bg-[#d4a84b]/10"
              },
              { 
                icon: <Shield size={24} />, 
                title: "First Responders & Public Servants", 
                desc: "Managing secondary trauma through somatic tools",
                color: "#c09050",
                bgColor: "bg-[#c09050]/10"
              },
              { 
                icon: <BookOpen size={24} />, 
                title: "Legal Partners", 
                desc: "Attorneys seeking forensic clinical documentation for immigration cases",
                color: "#d4a84b",
                bgColor: "bg-[#d4a84b]/10"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 md:p-7 text-center shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Icon Circle */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-black text-lg mb-2 font-[system-ui] group-hover:text-[#c09050] transition-colors">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed font-[system-ui]">
                  {item.desc}
                </p>

                {/* Decorative line on hover */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-[#c09050] to-[#d4a84b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mt-10 md:mt-12"
          >
            <p className="text-gray-400 text-sm font-[system-ui]">
              All services are virtual and available to clients across licensed states
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#c09050]/5 via-white to-[#d4a84b]/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#c09050]/10"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c09050]/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#d4a84b]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#c09050]/10 flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-[#c09050]" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-4 font-[system-ui]">
                Not Sure Which Path Is Right for You?
              </h2>

              <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto font-[system-ui]">
                Take our assessment to discover whether you're in a season of Restoration or Expansion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#assessment"
                  className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold transition-all duration-500 hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 font-[system-ui]"
                >
                  Take The Path Forward Assessment
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a
                  href="https://calendly.com/manifestcoachingllc/clarity-call"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#c09050] text-[#c09050] font-bold hover:bg-[#c09050] hover:text-white hover:border-[#c09050] transition-all duration-300 font-[system-ui]"
                >
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  Book Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}