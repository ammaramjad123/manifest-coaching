import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Calendar, Shield, Video, Clock,
  Sparkles, Quote, ChevronDown, ChevronUp
} from "lucide-react";

export default function SpecialtyPageTemplate({ data }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="relative bg-white overflow-hidden">

      {/* ══════════════════════ CINEMATIC HERO ══════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-42 sm:pt-48">
        <div className="absolute inset-0 z-0">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
        </div>

        {/* Gold particles */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#c09050]/40 rounded-full"
              initial={{ y: Math.random() * 800, opacity: 0 }}
              animate={{ y: -120, opacity: [0, 0.6, 0] }}
              transition={{ duration: Math.random() * 9 + 6, repeat: Infinity, delay: Math.random() * 7 }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-7"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white font-[system-ui]">{data.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-[system-ui] leading-[1.05] tracking-tight"
            >
              {data.titleLine1}
              {data.titleLine2 && (
                <>
                  <br />
                  <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                    {data.titleLine2}
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-9 font-[system-ui] leading-relaxed"
            >
              {data.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                href="https://calendly.com/manifestcoachingllc/clarity-call"
                target="_blank" rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold hover:shadow-2xl transition-all duration-500 font-[system-ui]"
              >
                <Calendar className="w-5 h-5" />
                Book Free Alignment Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-500 font-[system-ui]"
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 pb-19 sm:pb-17"
            >
              {[
                { icon: Shield, label: "26+ Years Experience" },
                { icon: Video, label: "Virtual Sessions" },
                { icon: Clock, label: "Flexible Scheduling" }
              ].map(({ icon: Icon, label }, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px h-4 bg-white/20" />}
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[#c09050]" />
                    <span className="text-white/60 text-xs font-[system-ui]">{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 sm:bottom-5 left-1/2 -translate-x-1/2 cursor-pointer z-20 "
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#c09050] rounded-full mt-1 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════ ALTERNATING SECTIONS ══════════════════════ */}
      {data.sections.map((section, idx) => (
        <motion.section
          key={idx}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden py-12 sm:py-16"
          style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fefcf7" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Content */}
              <motion.div
                initial={{ x: section.imageLeft ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={section.imageLeft ? "lg:order-2" : "lg:order-1"}
              >
                <div className="max-w-xl mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">
                      {section.subtitle}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 font-[system-ui] leading-tight">
                    {section.title}
                  </h2>

                  {section.items ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#c09050] flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-[system-ui]">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : section.approaches ? (
                    <div className="space-y-4">
                      {section.approaches.map((approach, i) => {
                        const Icon = approach.icon;
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#c09050]/20"
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-[#c09050]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Icon className="w-4 h-4 text-[#c09050]" />
                              </div>
                              <h3 className="font-black text-black text-base font-[system-ui]">{approach.name}</h3>
                            </div>
                            <p className="text-gray-600 text-base font-[system-ui] pl-13 leading-relaxed">{approach.desc}</p>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6 font-[system-ui]">
                        {section.body}
                      </p>
                      {section.stat && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/5 border border-[#c09050]/10">
                          <Quote className="w-3 h-3 text-[#c09050]" />
                          <span className="text-xs text-gray-600 font-[system-ui]">{section.stat}</span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ x: section.imageLeft ? 50 : -50, opacity: 0, scale: 0.95 }}
                whileInView={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className={section.imageLeft ? "lg:order-1" : "lg:order-2"}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={section.image} alt={section.title} className="w-full h-auto object-cover aspect-[4/3]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/8 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* ══════════════════════ QUOTE STRIP ══════════════════════ */}
      {data.quote && (
        <section className="py-16 sm:py-20 bg-black">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Quote className="w-10 h-10 text-[#c09050]/40 mx-auto mb-6" />
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-[system-ui] leading-relaxed italic mb-5">
                "{data.quote.text}"
              </p>
              {data.quote.author && (
                <p className="text-[#c09050] font-bold text-sm uppercase tracking-widest font-[system-ui]">
                  — {data.quote.author}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════ FAQ ══════════════════════ */}
      {data.faqs?.length > 0 && (
        <section className="py-10 sm:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-5">
                <Sparkles className="w-4 h-4 text-[#c09050]" />
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">Common Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-[system-ui]">
                Have a{" "}
                <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                  Question?
                </span>
              </h2>
            </motion.div>

            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-[#c09050]/[0.025] transition-colors"
                  >
                    <span className="font-bold text-black text-base sm:text-lg pr-4 font-[system-ui]">{faq.q}</span>
                    {openFAQ === i
                      ? <ChevronUp className="w-5 h-5 text-[#c09050] flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFAQ === i && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 bg-white border-t border-gray-50"
                    >
                      <p className="text-gray-600 text-base font-[system-ui] leading-relaxed pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════ EPIC CTA ══════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.ctaBgImage} alt="Begin your journey" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/25 to-[#d4a84b]/20" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(28)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/25 rounded-full"
              initial={{ y: 900, opacity: 0 }}
              animate={{ y: -80 }}
              transition={{ duration: Math.random() * 12 + 9, repeat: Infinity, delay: Math.random() * 9 }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-20 text-center max-w-4xl mx-auto px-5 py-20">
          <motion.h2
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-[system-ui] leading-tight"
          >
            {data.ctaHeading}
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-[system-ui] max-w-2xl mx-auto leading-relaxed"
          >
            {data.ctaBody}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
              href="https://calendly.com/manifestcoachingllc/clarity-call"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-[system-ui]"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black text-lg hover:bg-white hover:text-[#c09050] transition-all duration-500 font-[system-ui]"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Shield, label: "26+ Years Experience" },
              { icon: Video, label: "100% Virtual" },
              { icon: Clock, label: "Flexible Scheduling" }
            ].map(({ icon: Icon, label }, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="w-px h-4 bg-white/30" />}
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-white/80" />
                  <span className="text-white/70 text-xs font-[system-ui]">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
