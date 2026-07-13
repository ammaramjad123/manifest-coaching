import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MapPin,
  Globe,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { upcomingTraining as CONFIG } from "../config/upcomingTraining";

/* One training poster (matches the flyer composition, on-brand gold). */
function TrainingPoster({ tr }) {
  return (
    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-[#c09050]/15 overflow-hidden">
      {/* Gold accent bar */}
      <div className="h-2 bg-gradient-to-r from-[#c09050] via-[#d4a84b] to-[#c09050]" />

      <div className="p-7 sm:p-10 md:p-12">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          {tr.presenter && (
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] shadow-md shadow-[#c09050]/30 mb-5">
              <span className="text-white text-xs sm:text-sm font-bold tracking-wide font-[system-ui]">{tr.presenter}</span>
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight mb-2 font-[system-ui]">
            {tr.title}
          </h2>
          {tr.subtitle && (
            <p className="text-[#c09050] text-base md:text-lg italic font-semibold font-[system-ui]">
              {tr.subtitle}
            </p>
          )}
        </div>

        {/* What to expect + topic image */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-3">
            <div className="inline-block px-4 py-1.5 rounded-lg bg-black mb-5">
              <span className="text-white text-xs font-black uppercase tracking-[0.18em] font-[system-ui]">What to Expect</span>
            </div>
            <ul className="space-y-4">
              {tr.whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#d4a84b] to-[#c09050] flex-shrink-0 rounded-[2px]" />
                  <span className="text-gray-700 text-sm md:text-base leading-relaxed font-[system-ui]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {tr.topicImage && (
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-4 ring-[#c09050]/20 shadow-xl">
                <img src={tr.topicImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Details band */}
        <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="flex items-center gap-4 bg-[#fefcf7] border border-[#c09050]/15 rounded-2xl p-5">
            {tr.trainerImage && (
              <img
                src={tr.trainerImage}
                alt={tr.trainer}
                className="w-16 h-16 rounded-full object-cover object-top ring-4 ring-[#c09050]/20 flex-shrink-0"
              />
            )}
            <div>
              <p className="text-[10px] font-black uppercase tracking-wider text-[#c09050] mb-1 font-[system-ui]">Trainer</p>
              <p className="text-black font-bold text-sm leading-snug font-[system-ui]">{tr.trainer}</p>
              {tr.cost && <p className="text-gray-500 text-sm mt-1 font-[system-ui]">Cost — <span className="font-bold text-black">{tr.cost}</span></p>}
            </div>
          </div>

          <div className="bg-black rounded-2xl p-5 flex flex-col justify-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#d4a84b]" />
              </div>
              <div>
                <p className="text-white/50 text-[10px] font-black uppercase tracking-wider font-[system-ui]">When</p>
                <p className="text-white font-semibold text-sm font-[system-ui]">{tr.when}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#d4a84b]" />
              </div>
              <div>
                <p className="text-white/50 text-[10px] font-black uppercase tracking-wider font-[system-ui]">Where</p>
                <p className="text-white font-semibold text-sm font-[system-ui]">{tr.where}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={tr.ctaLink}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm hover:bg-[#c09050] transition-all duration-300 font-[system-ui]"
          >
            {tr.ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          {tr.website && (
            <a
              href={tr.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#c09050] hover:text-[#a87b3a] text-sm font-semibold font-[system-ui] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {tr.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Seconds each training stays on screen before auto-advancing.
const AUTOPLAY_SECONDS = 6;

export default function UpcomingTraining() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  // Master switch off → nothing renders.
  if (!CONFIG.active) return null;

  // Only the trainings that are switched on.
  const trainings = (CONFIG.trainings || []).filter((t) => t.active);
  if (trainings.length === 0) return null;

  const len = trainings.length;
  const active = Math.min(selected, len - 1);
  const goTo = (i) => setSelected((i + len) % len);   // wrap-around
  const goPrev = () => goTo(active - 1);
  const goNext = () => goTo(active + 1);

  // Auto-advance. Pauses on hover, and the timer resets whenever `active`
  // changes (i.e. after a manual click), so it never feels rushed.
  useEffect(() => {
    if (len <= 1 || paused) return;
    const reduce = typeof window !== "undefined" && window.matchMedia
      && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setTimeout(() => setSelected((s) => (Math.min(s, len - 1) + 1) % len), AUTOPLAY_SECONDS * 1000);
    return () => clearTimeout(id);
  }, [active, paused, len]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#fefcf7] to-white" id="upcoming-training">
      {/* Soft brand glows */}
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#c09050]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-[#d4a84b]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/25">
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#c09050] font-[system-ui]">
              Upcoming Training
            </span>
          </div>
        </div>

        {/* Carousel — arrows flank the poster, indicators sit below,
            so switching never requires scrolling back to the top.
            Auto-advances every few seconds; pauses while hovered. */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Side arrows (desktop) — sit just outside the poster */}
          {len > 1 && (
            <>
              <button
                onClick={goPrev}
                aria-label="Previous training"
                className="hidden lg:flex items-center justify-center absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-[#c09050]/30 text-[#c09050] shadow-lg hover:bg-[#c09050] hover:text-white hover:border-[#c09050] transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next training"
                className="hidden lg:flex items-center justify-center absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-[#c09050]/30 text-[#c09050] shadow-lg hover:bg-[#c09050] hover:text-white hover:border-[#c09050] transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TrainingPoster tr={trainings[active]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator bar below the poster — works on every screen size */}
        {len > 1 && (
          <div
            className="mt-8 flex items-center justify-center gap-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Prev (shown on mobile/tablet where side arrows are hidden) */}
            <button
              onClick={goPrev}
              aria-label="Previous training"
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-[#c09050]/30 text-[#c09050] shadow-md hover:bg-[#c09050] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots + current name */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2.5">
                {trainings.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${t.tabName || t.title}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 h-2.5 bg-gradient-to-r from-[#c09050] to-[#d4a84b]"
                        : "w-2.5 h-2.5 bg-[#c09050]/25 hover:bg-[#c09050]/50"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-500 font-[system-ui]">
                <span className="text-[#c09050]">{trainings[active].tabName || trainings[active].title}</span>
                <span className="mx-2 text-gray-300">·</span>
                {active + 1} / {len}
              </p>
            </div>

            {/* Next (shown on mobile/tablet where side arrows are hidden) */}
            <button
              onClick={goNext}
              aria-label="Next training"
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white border-2 border-[#c09050]/30 text-[#c09050] shadow-md hover:bg-[#c09050] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
