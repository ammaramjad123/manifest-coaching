import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { upcomingTraining as CONFIG } from "../config/upcomingTraining";
import TrainingFlyerCarousel from "./TrainingFlyerCarousel";

/* One session. Collapsed, it's a compact scannable row (program, date,
   location, cost, Reserve). Expanded, it reveals the full detail — "what to
   expect" + trainer — like the original card.

   Desktop (pointer): hover opens it. Mobile (touch, no hover): tap opens it,
   tap again closes. The chevron signals it can open. Cost + Reserve stay
   visible while collapsed, so nobody has to open a row to sign up. */
function SessionRow({ s, i }) {
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only pointer devices get hover-to-open; touch devices use tap-to-open.
    setCanHover(window.matchMedia && window.matchMedia("(hover: hover)").matches);
  }, []);

  const hasDetail = s.whatToExpect?.length > 0 || s.trainer;

  // Split "date · time" (on the middot) so the date sits on one line and the
  // time on the next. Falls back to the whole string if there's no middot.
  const [datePart, ...timeParts] = (s.date.when || "").split("·");
  const dateLine = datePart.trim();
  const timeLine = timeParts.join("·").trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3), ease: "easeOut" }}
      onMouseEnter={() => canHover && hasDetail && setOpen(true)}
      onMouseLeave={() => canHover && setOpen(false)}
      className="group relative bg-white rounded-2xl border border-[#c09050]/20 shadow-md hover:shadow-xl hover:border-[#c09050]/40 transition-all duration-300 overflow-hidden"
    >
      {/* Gold accent edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#c09050] to-[#d4a84b]" />

      {/* ── Compact row (always visible) ── */}
      <div
        onClick={() => !canHover && hasDetail && setOpen((o) => !o)}
        className={`pl-6 pr-5 sm:pr-6 py-5 flex flex-col sm:flex-row sm:items-center gap-5 ${
          hasDetail && !canHover ? "cursor-pointer" : ""
        }`}
      >
        {/* Topic image */}
        {s.topicImage && (
          <div className="hidden sm:block relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#c09050]/20 shadow flex-shrink-0">
            <img src={s.topicImage} alt={`${s.title || s.tabName || "Training"} logo`} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}

        {/* Program + details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
            <h3 className="text-lg sm:text-xl font-black text-black font-[system-ui]">
              {s.title || s.tabName}
            </h3>
            {s.cost && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#c09050]/10 border border-[#c09050]/25 text-[#a87b3a] text-xs font-bold font-[system-ui]">
                {s.cost}
              </span>
            )}
          </div>

          {s.subtitle && (
            <p className="text-[#c09050] text-sm italic font-semibold mb-2.5 font-[system-ui]">{s.subtitle}</p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-6">
            {/* Date column — fixed width so the location lines up across cards */}
            <div className="flex items-start gap-2 sm:w-56 flex-shrink-0">
              <Calendar className="w-4 h-4 text-[#c09050] flex-shrink-0 mt-0.5" />
              <span className="font-[system-ui] leading-snug">
                <span className="block text-gray-700 text-sm font-semibold">{dateLine}</span>
                {timeLine && (
                  <span className="block text-gray-500 text-sm">{timeLine}</span>
                )}
              </span>
            </div>
            {/* Location column — aligned across all cards */}
            <p className={`flex items-start gap-2 text-gray-600 text-sm font-[system-ui] leading-snug ${s.date.where === "Acworth, GA" ? "whitespace-nowrap" : ""}`}>
              <MapPin className="w-4 h-4 text-[#c09050] flex-shrink-0 mt-0.5" />
              {s.date.where}
            </p>
          </div>
        </div>

        {/* Reserve + expand chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {s.date.ctaLink && (
            <a
              href={s.date.ctaLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm hover:bg-[#c09050] transition-all duration-300 font-[system-ui]"
            >
              {s.date.ctaText || "Reserve Your Spot"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          {hasDetail && (
            <ChevronDown
              className={`w-5 h-5 text-[#c09050] transition-transform duration-300 flex-shrink-0 ${
                open ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>

      {/* ── Expanded detail (hover on desktop / tap on mobile) ── */}
      <AnimatePresence initial={false}>
        {open && hasDetail && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pl-6 pr-5 sm:pr-6 pb-6 pt-1">
              <div className="border-t border-[#c09050]/15 pt-5 grid md:grid-cols-2 gap-6">
                {s.whatToExpect?.length > 0 && (
                  <div>
                    <div className="inline-block px-3 py-1 rounded-lg bg-black mb-3">
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.18em] font-[system-ui]">What to Expect</span>
                    </div>
                    <ul className="space-y-2.5">
                      {s.whatToExpect.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="mt-1.5 w-2 h-2 rotate-45 bg-gradient-to-br from-[#d4a84b] to-[#c09050] flex-shrink-0 rounded-[2px]" />
                          <span className="text-gray-700 text-[13px] leading-relaxed font-[system-ui]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {s.trainer && (
                  <div className="flex md:flex-col md:justify-center items-center md:items-start gap-3 md:gap-2 bg-[#fefcf7] border border-[#c09050]/15 rounded-2xl p-5 self-start">
                    {s.trainerImage && (
                      <img
                        src={s.trainerImage}
                        alt={s.trainer}
                        className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-[#c09050]/20 flex-shrink-0"
                      />
                    )}
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-[#c09050] mb-0.5 font-[system-ui]">Trainer</p>
                      <p className="text-black font-bold text-sm leading-snug font-[system-ui]">{s.trainer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function UpcomingTraining() {
  // Master switch off → nothing renders.
  if (!CONFIG.active) return null;

  // Every live program (unflattened) — the flyer carousel shows one of these at a time.
  const activeTrainings = (CONFIG.trainings || []).filter((t) => t.active);

  // Flatten every live program × its live dates into a single list of sessions.
  const sessions = activeTrainings.flatMap((t) =>
    (t.dates || [])
      .filter((d) => d.active !== false)
      .map((d) => ({ ...t, date: d }))
  );
  if (sessions.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-[#fefcf7] to-white" id="upcoming-training">
      {/* Soft brand glows */}
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#c09050]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 rounded-full bg-[#d4a84b]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/25">
            <Sparkles className="w-4 h-4 text-[#c09050]" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#c09050] font-[system-ui]">
              Upcoming Training
            </span>
          </div>
        </div>

        {/* Full flyers — one at a time, arrows loop through every program */}
        <TrainingFlyerCarousel trainings={activeTrainings} />

        <h2 className="text-center text-3xl sm:text-4xl font-black text-black mb-3 font-[system-ui]">
          Every Upcoming Session
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-10 font-[system-ui]">
          All dates and locations at a glance — hover or tap a session for the full details.
        </p>

        {/* The full list — every session visible; open one for the details. */}
        <div className="space-y-4">
          {sessions.map((s, i) => (
            <SessionRow key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
