import { images } from "../config/siteImages";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
  Phone,
  Brain,
  Heart,
  Shield,
  Wind,
  CloudRain,
  Sun,
  Moon,
  Sparkles,
  Flower2,
  Compass,
  Target,
  Feather,
  Waves,
  Star,
  Video,
  Clock,
  Quote,
  Eye,
  Droplet,
  Leaf
} from "lucide-react";

export default function AnxietyDepressionPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSection, setActiveSection] = useState(0);
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setActiveSection(Math.min(section, 6));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: 0,
      title: "The Weight You Carry",
      subtitle: "Understanding Anxiety & Depression",
      description: "Anxiety and depression aren't just feelings—they're experiences that can weigh you down, making even the simplest tasks feel impossible. The racing thoughts, the heavy fog, the loss of interest—these are real, valid, and treatable. But here's the truth: you're not broken. You're human, and healing is possible.",
      image: images.anxiety.section1,
      imagePosition: "right",
      stat: "1 in 5 adults experience anxiety or depression"
    },
    {
      id: 1,
      title: "What You Might Be Feeling",
      subtitle: "Common signs and symptoms",
      description: "You're not imagining it. These feelings are real and they have names. Recognizing them is the first step toward healing.",
      symptoms: [
        "Excessive worry that won't stop",
        "Feeling sad, empty, or hopeless",
        "Loss of interest in things you once loved",
        "Difficulty sleeping or sleeping too much",
        "Racing heart, tension, fatigue",
        "Trouble concentrating or making decisions",
        "Perinatal anxiety or postpartum depression",
        "Caregiver burnout & emotional depletion",
        "Hormonal shifts affecting mood & energy"
      ],
      image: images.anxiety.section2,
      imagePosition: "left",
      isSymptoms: true
    },
    {
      id: 2,
      title: "The Science of Healing",
      subtitle: "Evidence-based approaches that work",
      description: "Through ART®, DBT, ACT, and mindfulness, we can rewire thought patterns, reduce symptoms, and restore balance. Your brain has neuroplasticity—it can change, adapt, and heal. Science shows that therapy is as effective as medication for many people, with lasting results.",
      image: images.anxiety.section3,
      imagePosition: "right",
      stat: "80% of people improve with evidence-based therapy"
    },
    {
      id: 3,
      title: "The Therapy Process",
      subtitle: "Your roadmap to healing",
      description: "Therapy is a structured, compassionate partnership — meeting you exactly where you are and building a clear path forward, one session at a time.",
      approaches: [
        { name: "Free Consultation", desc: "A 15-minute alignment call to explore fit, answer questions, and determine the right path forward." },
        { name: "Clinical Assessment", desc: "We explore your history, goals, and needs to build a personalized, evidence-based treatment plan." },
        { name: "Evidence-Based Treatment", desc: "Sessions using ART®, DBT, or ACT — tailored to what your healing actually requires." },
        { name: "Integration & Growth", desc: "Track progress, celebrate breakthroughs, and carry your tools well beyond the therapy room." }
      ],
      image: images.anxiety.section4,
      imagePosition: "left",
      isApproaches: true
    },
    {
      id: 4,
      title: "Your Journey, Your Pace",
      subtitle: "Personalized care for your unique needs",
      description: "No two journeys are the same. I'll meet you where you are, honoring your story while gently guiding you toward the peace and clarity you deserve. Whether you need weekly sessions or bi-weekly check-ins, we move at your pace.",
      image: images.anxiety.section5,
      imagePosition: "right",
      stat: "100% virtual • Licensed in NY, NJ, RI"
    },
    {
      id: 5,
      title: "A Safe Space Awaits",
      subtitle: "Virtual therapy from anywhere",
      description: "Secure, HIPAA-compliant sessions from the comfort of your home. No commute, no waiting rooms—just you, me, and a path forward. Evening and weekend appointments available.",
      image: images.anxiety.section6,
      imagePosition: "left",
      stat: "Flexible scheduling • 24hr cancellation policy"
    },
    {
      id: 6,
      title: "You Are Not Alone",
      subtitle: "Millions have walked this path and found healing",
      description: "The racing thoughts, the heavy fog, the loss of interest—these are real, valid, and treatable. Seeking help isn't weakness; it's the bravest thing you can do. And you don't have to do it alone.",
      image: images.anxiety.section7,
      imagePosition: "right",
      stat: "You've already taken the hardest step"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-white overflow-hidden">
      <title>Anxiety & Depression Therapy | The Peace Practice</title>
      <meta name="description" content="Understanding and treating anxiety and depression with licensed clinical therapy from Ayana F. McKanney, LCSW. Compassionate, evidence-based care in NY, NJ & RI." />
      <link rel="canonical" href="https://www.thepeacepractice.me/specialties/process" />

      {/* EPIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-44 pb-10">
        
        {/* Cinematic Background Video/Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={images.anxiety.hero}
            alt="Calm peaceful healing"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: Math.random() * window.innerHeight, x: Math.random() * window.innerWidth, opacity: 0 }}
              animate={{ y: -100, opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-white">The Process — Clinical Therapy</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-[system-ui] leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Process
              </span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-[system-ui] leading-relaxed">
              Evidence-based therapy for anxiety, depression, intrusive thoughts, grief and sadness,
              parenting, communication, and relationship challenges — and more. Care tailored to your unique journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://calendly.com/manifestcoachingllc/clarity-call"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold hover:shadow-2xl transition-all duration-500 font-[system-ui]"
              >
                <Calendar className="w-5 h-5" />
                Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-500 font-[system-ui]"
              >
                <Phone className="w-5 h-5" />
                Contact Me
              </motion.a>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">26+ Years Experience</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Virtual Sessions</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Flexible Scheduling</span>
              </div>
            </motion.div>

            {/* Scroll Indicator — below the stats */}
            <motion.div
              className="mt-8 mx-auto w-fit cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            >
              <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-[#c09050] rounded-full mt-1 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Immersive Sections - Alternating Left/Right with Full Images */}
      {sections.map((section, idx) => (
        <motion.section
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundColor: idx % 2 === 0 ? "white" : "#fefcf7"
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              section.imagePosition === "left" ? "" : ""
            }`}>
              
              {/* Content Side */}
              <motion.div
                initial={{ x: section.imagePosition === "left" ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`${section.imagePosition === "left" ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="max-w-xl mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
                    <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">
                      {section.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 font-[system-ui] leading-tight">
                    {section.title}
                  </h2>
                  
                  {section.isSymptoms ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {section.symptoms.map((symptom, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#c09050]" />
                          <span className="text-gray-700 text-sm font-[system-ui]">{symptom}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : section.isApproaches ? (
                    <div className="space-y-4 mb-8">
                      {section.approaches.map((approach, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#c09050]/20"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-[#c09050]/10 flex items-center justify-center">
                              <Target className="w-4 h-4 text-[#c09050]" />
                            </div>
                            <h3 className="font-black text-black text-lg">{approach.name}</h3>
                          </div>
                          <p className="text-gray-600 text-sm pl-13">{approach.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6 font-[system-ui]">
                        {section.description}
                      </p>
                      {section.stat && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/5 border border-[#c09050]/10 mb-6">
                          <Quote className="w-3 h-3 text-[#c09050]" />
                          <span className="text-xs text-gray-600 font-[system-ui]">{section.stat}</span>
                        </div>
                      )}
                    </>
                  )}
                  
                  {/* Continue Reading removed - as requested */}
                </div>
              </motion.div>
              
              {/* Image Side - Full width, no tags */}
              <motion.div
                initial={{ x: section.imagePosition === "left" ? 50 : -50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className={`${section.imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Replace this image URL with your own images */}
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/5 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* EPIC CTA SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background with parallax */}
        <div className="absolute inset-0 z-0">
          {/* Keep this CTA image as is */}
          <img
            src={images.anxiety.cta}
            alt="Healing journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/25 to-[#d4a84b]/20" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 100 }}
              animate={{ y: -100 }}
              transition={{ duration: Math.random() * 12 + 8, repeat: Infinity, delay: Math.random() * 8 }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-[system-ui] leading-tight"
          >
            You Don't Have to
            <br />
            Do This Alone
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-[system-ui] max-w-2xl mx-auto"
          >
            Schedule your free 15-minute consultation today. No pressure, just conversation.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="https://calendly.com/manifestcoachingllc/clarity-call"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-[system-ui]"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black text-lg hover:bg-white hover:text-[#c09050] transition-all duration-500 font-[system-ui]"
            >
              <Phone className="w-5 h-5" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">26+ Years Experience</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">100% Virtual</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">Flexible Scheduling</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}