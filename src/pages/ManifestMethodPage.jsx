import { images } from "../config/siteImages";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
  Sparkles,
  Quote,
  Rocket,
  Crown,
  TrendingUp,
  Award,
  Zap,
  BookOpen,
  Clock,
  Plus,
  Minus,
} from "lucide-react";

const phases = [
  {
    letter: "M",
    word: "Motivating",
    subtitle: "Locating Your Core Drive",
    description:
      "Every lasting transformation begins with an honest answer to one question: why does this change matter to you? In this phase, we excavate the grit — the deep, personal motivation beneath the surface-level goal. Not the goal you think you should want, but the one that keeps you awake. That truth becomes the fuel for everything that follows.",
    stat: "Clarity of 'why' is the single strongest predictor of sustained change",
  },
  {
    letter: "A",
    word: "And",
    subtitle: "History AND Future, Together",
    description:
      "This is not a process that asks you to forget who you were in order to become who you want to be. The word 'and' is intentional: your past is valid, and your future is possible. Both truths are held simultaneously. Healing does not erase — it integrates. We honor the journey that brought you here while building the road ahead.",
    stat: "Integration, not erasure — the foundation of lasting change",
  },
  {
    letter: "N",
    word: "Nurturing",
    subtitle: "Evidence-Based Stabilization",
    description:
      "Before any meaningful work can happen, the body must feel safe enough to do it. This phase brings in the clinical tools that regulate the nervous system and build a stable foundation: Accelerated Resolution Therapy® (ART), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), and the SĀF-T framework. Calm is not a luxury — it is a prerequisite.",
    stat: "Nervous system regulation precedes every other form of healing",
  },
  {
    letter: "I",
    word: "Internal",
    subtitle: "Understanding Your Inner Architecture",
    description:
      "Self-awareness is not self-criticism. In this phase, we go inward — mapping the patterns, beliefs, and emotional responses that shape how you move through the world. Understanding why you react the way you do, what stories you inherited, and how your inner world is organized is not navel-gazing. It is the most strategic work you can do.",
    stat: "Insight precedes change — you cannot transform what you cannot see",
  },
  {
    letter: "F",
    word: "Fulfillment",
    subtitle: "Cultivating Wholeness",
    description:
      "Fulfillment is not the absence of struggle. It is the felt sense that you are living in alignment with who you truly are — healed enough to be present, whole enough to be honest, realized enough to stop settling. This phase is about closing the gap between the life you have been living and the life you were designed for.",
    stat: "Fulfillment is alignment, not perfection",
  },
  {
    letter: "E",
    word: "Enable",
    subtitle: "Building the Pathways Forward",
    description:
      "Insight without action is incomplete. This phase is about creating the concrete, practical pathways that allow you to actually step into the life you have been working toward. New habits, new boundaries, new decisions — all grounded in the self-knowledge and stability built in the phases before. You are not just ready for your next chapter; you are empowered to write it.",
    stat: "Action rooted in insight creates change that actually lasts",
  },
  {
    letter: "S",
    word: "Sincere · Serene",
    subtitle: "Showing Up Authentically",
    description:
      "This phase holds two truths at once — one for each branch of the practice. In coaching, Sincere means showing up with radical honesty: about where you are, what you want, and what is getting in the way. In therapy, Serene is the interior calm that becomes available through clinical healing: the quiet that follows when the body and mind no longer have to fight. Both are earned, not given.",
    stat: "Sincerity in coaching. Serenity through therapy. Both are available to you.",
  },
  {
    letter: "T",
    word: "Transformations",
    subtitle: "Life-Scale Shifts",
    description:
      "The final phase names what becomes possible. In coaching, Transformations are the life-scale shifts in how you move through the world — in relationships, career, identity, and purpose. In therapy, Therapeutic Healing is the restoration of wholeness through evidence-based clinical work. This is not the end of the journey. It is the beginning of living it fully.",
    stat: "The goal was never just to cope — it was to thrive",
  },
];

export default function ManifestMethodPage() {
  // First phase open by default so the section isn't a stack of closed bars
  const [openItems, setOpenItems] = useState({ M: true });

  const togglePhase = (letter) =>
    setOpenItems((prev) => ({ ...prev, [letter]: !prev[letter] }));

  // Clicking a quick-scan letter opens that phase and scrolls to it
  const openAndScroll = (letter) => {
    setOpenItems((prev) => ({ ...prev, [letter]: true }));
    document
      .getElementById(`phase-${letter}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <title>The MANIFEST Method | The Peace Practice</title>
      <meta name="description" content="The MANIFEST Method is Ayana F. McKanney's proprietary transformational coaching framework, guiding clients from core motivation through lasting fulfillment." />
      <link rel="canonical" href="https://www.thepeacepractice.me/specialties/manifest-method" />

      {/* ══ HERO ══ */}
      <section className="relative flex items-center justify-center overflow-hidden pt-36 pb-28 sm:pt-48 sm:pb-36">
        <div className="absolute inset-0 z-0">
          <img
            src={images.manifest.hero}
            alt="The MANIFEST Method"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{ y: Math.random() * 800, opacity: 0 }}
              animate={{ y: -100, opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, delay: Math.random() * 5 }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Zap className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-white font-[system-ui]">Proprietary Eight-Phase Framework</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-[system-ui] leading-tight"
            >
              The{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                MANIFEST
              </span>{" "}
              Method
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-[system-ui] leading-relaxed"
            >
              A proprietary, eight-phase framework designed to move you from survival to a state of being fully realized — in coaching, in therapy, and in life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://calendly.com/manifestcoachingllc/clarity-call"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl transition-all duration-500 font-[system-ui]"
              >
                <Calendar className="w-5 h-5" />
                Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-500 font-[system-ui]"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#c09050] rounded-full mt-1 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ══ QUICK-SCAN LETTER TILES ══ */}
      <section className="relative py-16 sm:py-20 bg-[#fefcf7]">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #c09050 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          opacity: 0.05
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4">
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-[system-ui]">The Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black font-[system-ui]">
              Eight Phases.{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                One Journey.
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {phases.map((phase, i) => (
              <motion.button
                key={phase.letter}
                type="button"
                onClick={() => openAndScroll(phase.letter)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg font-black font-[system-ui] leading-none">{phase.letter}</span>
                </div>
                <span className="text-[10px] font-black text-gray-500 group-hover:text-[#c09050] font-[system-ui] text-center leading-tight transition-colors duration-200">
                  {phase.word.split(" · ")[0]}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHASE REVEAL DROPDOWNS (tap to reveal — FAQ-style flow) ══ */}
      <section className="relative py-16 sm:py-24 bg-white">
        <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-black text-black font-[system-ui]">
              Explore Each Phase
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-[system-ui] mt-2">
              Tap any phase to reveal what it holds.
            </p>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {phases.map((phase, i) => {
              const isOpen = openItems[phase.letter];
              return (
                <motion.div
                  key={phase.letter}
                  id={`phase-${phase.letter}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  viewport={{ once: true, margin: "-40px" }}
                  className={`scroll-mt-28 rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                    isOpen ? "border-[#c09050]/40" : "border-gray-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => togglePhase(phase.letter)}
                    className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-white text-xl font-black font-[system-ui] leading-none">{phase.letter}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base sm:text-lg font-black text-black font-[system-ui] leading-tight">{phase.word}</p>
                      <p className="text-xs sm:text-sm text-[#c09050] font-[system-ui] mt-0.5">{phase.subtitle}</p>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-[#c09050]" : "bg-[#c09050]/10"}`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#c09050]" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-5 pb-5 pt-0 sm:pl-[5.25rem]">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[system-ui] mb-4">
                        {phase.description}
                      </p>
                      <div className="flex items-start gap-2 px-3 py-2.5 rounded-xl bg-[#c09050]/5 border border-[#c09050]/10">
                        <Quote className="w-3 h-3 text-[#c09050] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-500 italic font-[system-ui] leading-snug">{phase.stat}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ WORKBOOKS COMING SOON ══ */}
      <section className="relative py-16 sm:py-20 bg-[#fefcf7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #c09050 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
          opacity: 0.06
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-[#c09050]/25 bg-white shadow-xl overflow-hidden"
          >
            {/* Gold top bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#c09050] via-[#d4a84b] to-[#c09050]" />

            <div className="p-8 sm:p-10 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left column — text */}
                <div>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c09050]/10 border border-[#c09050]/25 mb-3">
                      <Clock className="w-3 h-3 text-[#c09050]" />
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#c09050] font-[system-ui]">Coming Soon</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-black font-[system-ui] leading-tight">
                      The Pivot &amp; The Process
                      <br />
                      <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                        Workbooks
                      </span>
                    </h3>
                  </div>

                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-[system-ui] mb-6">
                    Two companion workbooks rooted in the MANIFEST Method — designed to deepen the work between sessions, anchor your progress, and keep the journey moving forward. These tools are available exclusively for clients enrolled in Intensives.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#c09050]/8 border border-[#c09050]/20">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-black font-[system-ui]">The Pivot</p>
                        <p className="text-xs text-gray-500 font-[system-ui]">For Coaching Intensives</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#c09050]/8 border border-[#c09050]/20">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-black font-[system-ui]">The Process</p>
                        <p className="text-xs text-gray-500 font-[system-ui]">For Therapy Intensives</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column — picture (no frame, image fits without cropping) */}
                <div className="flex items-center justify-center">
                  <img
                    src={images.manifest.workbookCard}
                    alt="The Pivot & The Process Workbooks"
                    className="w-full h-80 object-contain"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-gray-400 font-[system-ui] max-w-sm">
                  Interested in an Intensive? Book a free consultation to learn more about how Intensives work and which workbook is right for your season.
                </p>
                <a
                  href="https://calendly.com/manifestcoachingllc/clarity-call"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black border-2 border-[#c09050] text-white text-sm font-black hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 font-[system-ui] whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  Ask About Intensives
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images.manifest.workbook}
            alt="Begin your MANIFEST journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/25 to-[#d4a84b]/20" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/25 rounded-full"
              initial={{ y: 900, opacity: 0 }}
              animate={{ y: -80 }}
              transition={{ duration: Math.random() * 12 + 8, repeat: Infinity, delay: Math.random() * 8 }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-5 py-20">

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-[system-ui] leading-tight"
          >
            Ready to Begin
            <br />
            Your MANIFEST Journey?
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-[system-ui] max-w-2xl mx-auto leading-relaxed"
          >
            Schedule a free 15-minute consultation. No pressure, just conversation — and the beginning of something real.
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
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-[system-ui]"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black text-lg hover:bg-white hover:text-[#c09050] transition-all duration-500 font-[system-ui]"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Crown, label: "Proprietary Eight-Phase Framework" },
              { icon: TrendingUp, label: "Coaching & Clinical Therapy" },
              { icon: Award, label: "Nationwide via Telehealth" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2">
                {i > 0 && <div className="w-px h-4 bg-white/30 mr-4" />}
                <Icon className="w-4 h-4 text-white/80" />
                <span className="text-white/70 text-xs font-[system-ui]">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
