import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Award,
  ArrowRight,
  ZoomIn,
  X,
} from "lucide-react";

/* One flyer at a time — full poster on the left (click to zoom), condensed
   info on the right. Arrows + dots loop infinitely through every training
   that has a flyerImage. Keeps the detailed session list below untouched. */
export default function TrainingFlyerCarousel({ trainings }) {
  const flyers = trainings.filter((t) => t.flyerImage);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [zoomed, setZoomed] = useState(false);

  if (flyers.length === 0) return null;
  const t = flyers[index];
  const primaryDate = t.dates?.find((d) => d.active !== false) || t.dates?.[0];

  const go = (dir) => {
    setDirection(dir);
    setIndex((i) => (i + dir + flyers.length) % flyers.length);
  };

  return (
    <div className="mb-16">
      <div className="relative bg-white rounded-3xl border border-[#c09050]/25 shadow-xl overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: 40 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 * direction }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid md:grid-cols-2"
          >
            {/* Flyer image */}
            <button
              type="button"
              onClick={() => setZoomed(true)}
              className="group relative bg-[#fefcf7] flex items-center justify-center p-4 sm:p-6 cursor-zoom-in"
              aria-label="View full flyer"
            >
              <img
                src={t.flyerImage}
                alt={`${t.title} training flyer`}
                className="w-full h-auto max-h-[560px] object-contain rounded-xl shadow-lg"
              />
              <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-bold font-[system-ui] opacity-90 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
                View Full Flyer
              </span>
            </button>

            {/* Condensed info */}
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              {t.presenter && (
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#c09050] mb-2 font-[system-ui]">
                  {t.presenter}
                </p>
              )}
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-2 font-[system-ui] leading-tight">
                {t.title}
              </h3>
              {t.subtitle && (
                <p className="text-gray-600 text-sm sm:text-base mb-5 font-[system-ui]">{t.subtitle}</p>
              )}

              <div className="flex flex-wrap items-center gap-2 mb-6">
                {t.format && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-black text-white text-xs font-bold font-[system-ui]">
                    {t.format}
                  </span>
                )}
                {t.ceu && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c09050]/10 border border-[#c09050]/30 text-[#a87b3a] text-xs font-bold font-[system-ui]">
                    <Award className="w-3.5 h-3.5" />
                    {t.ceu}
                  </span>
                )}
                {primaryDate?.cost && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#c09050]/10 border border-[#c09050]/30 text-[#a87b3a] text-xs font-bold font-[system-ui]">
                    {primaryDate.cost}
                  </span>
                )}
              </div>

              {/* Dates & locations, compact */}
              <div className="space-y-2.5 mb-6">
                {(t.dates || []).filter((d) => d.active !== false).map((d, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm font-[system-ui]">
                    <Calendar className="w-4 h-4 text-[#c09050] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{d.when}</span>
                    <span className="text-gray-300">·</span>
                    <span className={`flex items-center gap-1 text-gray-500 ${d.where === "Acworth, GA" ? "whitespace-nowrap" : ""}`}>
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      {d.where}
                    </span>
                  </div>
                ))}
              </div>

              {t.whoFor && (
                <div className="rounded-xl bg-[#fefcf7] border border-[#c09050]/15 p-4 mb-6">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#c09050] mb-1 font-[system-ui]">
                    Who This Is For
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-[system-ui]">{t.whoFor}</p>
                </div>
              )}

              {primaryDate?.ctaLink && (
                <a
                  href={primaryDate.ctaLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group/cta inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm hover:bg-[#c09050] transition-all duration-300 font-[system-ui] self-start"
                >
                  {primaryDate.ctaText || "Reserve Your Spot"}
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {flyers.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous flyer"
              className="absolute left-3 top-1/2 -translate-y-1/2 md:top-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-[#c09050]/25 flex items-center justify-center text-[#c09050] hover:bg-[#c09050] hover:text-white transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next flyer"
              className="absolute right-3 top-1/2 -translate-y-1/2 md:top-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-[#c09050]/25 flex items-center justify-center text-[#c09050] hover:bg-[#c09050] hover:text-white transition-all duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {flyers.length > 1 && (
        <div className="flex justify-center gap-2 mt-5">
          {flyers.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Show ${f.title} flyer`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-[#c09050]" : "w-2 bg-[#c09050]/25 hover:bg-[#c09050]/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Zoom lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={t.flyerImage}
              alt={`${t.title} training flyer, full size`}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
