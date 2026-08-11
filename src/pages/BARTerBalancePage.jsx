import { images, trainingLinks } from "../config/siteImages";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart, Users, Clock, Shield, ArrowRight, Video,
  Quote, Sparkles, ChevronDown, ChevronUp, Mail, ExternalLink,
  Award, CheckCircle, BookOpen, Calendar
} from 'lucide-react';

/* ─── Steps ───────────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    subtitle: "The Exchange",
    title: "Who Joins & What's Offered",
    bullets: [
      "Open to ART-certified therapists and their immediate family members.",
      "Up to 2 sessions per month — each up to 90 minutes in length.",
      "A reciprocal ART session is returned by the participating therapist.",
      "Sessions must be used within 30 days of scheduling."
    ],
    image: images.barter.section1,
    imageLeft: false
  },
  {
    number: "02",
    subtitle: "The Agreement",
    title: "The Boundaries That Protect Both Practitioners",
    bullets: [
      "A maximum of 2 exchange sessions per month preserves integrity.",
      "A strict 48-hour cancellation and reschedule policy applies.",
      "Sessions may be rescheduled once with proper advance notice.",
      "Without notice, the session is forfeited to honor the provider's time."
    ],
    image: images.barter.section2,
    imageLeft: true
  },
  {
    number: "03",
    subtitle: "The Connection",
    title: "Ready to Reach Out?",
    body: "To inquire about the bARTer Balance exchange, reach out directly by email. Please include your ART certification level and a brief note about your interest in the exchange. Use the subject line below so your inquiry is routed correctly and responded to promptly.",
    email: "partnership@thepeacepractice.me",
    subject: "The bARTer Balance Inquiry",
    image: images.barter.section3,
    imageLeft: false
  }
];

/* ─── Trainings ────────────────────────────────────────────────── */
const trainings = [
  {
    icon: Award,
    title: "ART® Basic Training",
    badge: "$1,700 · 20 CE Credits",
    description:
      "Become certified in Accelerated Resolution Therapy — one of the fastest-growing, evidence-based trauma modalities in the field. Complete the foundational training and earn 20 continuing education credits upon completion.",
    cta: "Register Now",
    href: trainingLinks.artBasic,
    external: true
  },
  {
    icon: Shield,
    title: "SĀF-T Training",
    badge: "$199",
    description:
      "\"Keep the Knowledge, Lose the Pain.\" Sensations Awareness Focused Technique training — no drugs, no hypnosis. Safe for adults and children. Open to professionals, paraprofessionals, and parents. No clinical license required.",
    cta: "Register Now",
    href: trainingLinks.saft,
    external: true
  },
  {
    icon: Users,
    title: "Corporate & Community",
    badge: "Custom Format",
    description:
      "Bring evidence-based wellness training to your organization, agency, or community. Custom formats available for workplace teams, first responder units, faith communities, schools, and more.",
    cta: "Inquire Now",
    href: "mailto:partnership@thepeacepractice.me",
    external: false
  }
];

/* ─── FAQs ─────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Who is eligible for the bARTer Balance exchange?",
    a: "The exchange is open to ART-certified therapists and their immediate family members. Participants must be active ART practitioners in good standing. Family members may receive sessions in place of — not in addition to — the therapist's own sessions."
  },
  {
    q: "How many sessions can be received per month?",
    a: "A maximum of 2 exchange sessions are provided per month. Each session is up to 90 minutes and must be used within 30 days of the agreed exchange date."
  },
  {
    q: "What happens if a cancellation or reschedule is needed?",
    a: "A strict 48-hour cancellation and reschedule policy is in place. Sessions may be rescheduled once with proper advance notice. If the session is cancelled without the required notice, it is forfeited — this policy exists to honor and protect the provider's time."
  },
  {
    q: "How do I inquire about joining the bARTer Balance?",
    a: "Send an email to partnership@thepeacepractice.me with the subject line \"The bARTer Balance Inquiry\". Please include your ART certification level and a brief note about your interest in the exchange."
  },
  {
    q: "Are the training offerings separate from the bARTer Balance exchange?",
    a: "Yes. The bARTer Balance is a peer-to-peer exchange among ART practitioners — no fees, no invoices. The training offerings (ART® Basic and SĀF-T) are formal professional development courses with their own registration and pricing through the RCRR system."
  }
];

/* ─── Credential logos ─────────────────────────────────────────── */
const credentialLogos = [
  {
    img: images.barter.logo1,
    alt: "Accelerated Resolution Therapy® — Rosenzweig Center for Rapid Recovery",
    label: "ART® Master Trainer",
    imgClass: "h-10 w-auto object-contain flex-shrink-0"
  },
  {
    img: images.barter.logo2,
    alt: "IS-ART — International Society of Accelerated Resolution Therapy",
    label: "IS-ART Master Practitioner",
    imgClass: "h-10 w-auto object-contain flex-shrink-0"
  },
  {
    img: images.barter.logo3,
    alt: "MANIFEST Coaching LLC — The Peace Practice",
    label: "MANIFEST Coaching LLC",
    imgClass: "h-10 w-auto max-w-48 object-contain object-left flex-shrink-0"
  }
];

/* ══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function BARTerBalancePage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="relative bg-white overflow-hidden">
      <title>bARTer Balance & ART Training for Therapists | The Peace Practice</title>
      <meta name="description" content="A peer exchange program and ART® certification training for ART-certified therapists, offered by Ayana F. McKanney, LCSW." />
      <link rel="canonical" href="https://www.thepeacepractice.me/specialties/barter-balance" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Peace Practice" />
      <meta property="og:title" content="bARTer Balance & ART Training for Therapists | The Peace Practice" />
      <meta property="og:description" content="A peer exchange program and ART® certification training for ART-certified therapists, offered by Ayana F. McKanney, LCSW." />
      <meta property="og:url" content="https://www.thepeacepractice.me/specialties/barter-balance" />
      <meta property="og:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:secure_url" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="bARTer Balance & ART Training for Therapists | The Peace Practice" />
      <meta name="twitter:description" content="A peer exchange program and ART® certification training for ART-certified therapists, offered by Ayana F. McKanney, LCSW." />
      <meta name="twitter:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta name="twitter:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />

      {/* ══ CINEMATIC HERO ══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-42 sm:pt-48">
        <div className="absolute inset-0 z-0">
          <img src={images.barter.showcase} alt="bARTer Balance" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
        </div>

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
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white font-[system-ui]">A Professional Exchange Among ART Practitioners</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-[system-ui] leading-[1.05] tracking-tight"
            >
              bARTer
              <br />
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">Balance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-9 font-[system-ui] leading-relaxed"
            >
              As practitioners of Accelerated Resolution Therapy, we witness the profound re-programming of trauma every day. But even the most skilled guide needs a safe place to land. The bARTer Balance is a professional exchange designed to prioritize our own wellness — and that of our families — through mutual clinical support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                href="https://calendly.com/manifestcoachingllc/barter"
                target="_blank" rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl transition-all duration-500 font-[system-ui]"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                href="mailto:partnership@thepeacepractice.me?subject=The%20bARTer%20Balance%20Inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-500 font-[system-ui]"
              >
                <Mail className="w-4 h-4" />
                Inquire by Email
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 pb-19 sm:pb-17"
            >
              {[
                { icon: Shield, label: "No Fees. No Invoices." },
                { icon: Video, label: "ART Practitioners Only" },
                { icon: Clock, label: "Up to 2 Sessions/Month" }
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
          className="absolute bottom-8 sm:bottom-5 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#c09050] rounded-full mt-1 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ══ THE VISION ══ */}
      <motion.section
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative overflow-hidden py-20 sm:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}
              className="lg:order-1"
            >
              <div className="max-w-xl mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">The Vision</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6 font-[system-ui] leading-tight">
                  Healing the Healer.<br />Healing the Home.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 font-[system-ui]">
                  We hold space for others in some of the most tender and complex seasons of their lives. ART allows us to facilitate rapid, meaningful healing — and yet, the healer's own nervous system still needs tending. The bARTer Balance exists because therapist wellness is not a luxury. It is a clinical imperative.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/5 border border-[#c09050]/10">
                  <Quote className="w-3 h-3 text-[#c09050]" />
                  <span className="text-xs text-gray-600 font-[system-ui]">No fees. No invoices. Just the collective power of ART.</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0, scale: 0.95 }} whileInView={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
              className="lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={images.barter.cta} alt="Healing the Healer" className="w-full h-auto object-cover aspect-[4/3]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/8 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ══ HOW IT WORKS — 3 STEPS ══ */}
      <section className="relative py-20 sm:py-28 bg-[#fefcf7]">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px"
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-5"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">How It Works</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-[system-ui]"
            >
              A Clear,{" "}
              <span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Mutual Exchange.
              </span>
            </motion.h2>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, margin: "-60px" }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Content */}
                <div className={step.imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <div className="max-w-xl mx-auto lg:mx-0">
                    {/* Step number */}
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-6xl sm:text-7xl font-black text-[#c09050]/15 font-[system-ui] leading-none select-none">
                        {step.number}
                      </span>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20">
                        <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">{step.subtitle}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-6 font-[system-ui] leading-tight">
                      {step.title}
                    </h3>

                    {step.bullets ? (
                      <ul className="space-y-3">
                        {step.bullets.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#c09050] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-base font-[system-ui] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-[system-ui]">{step.body}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href="https://calendly.com/manifestcoachingllc/barter"
                            target="_blank" rel="noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black border-2 border-[#c09050] text-white font-bold hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-xl transition-all duration-300 font-[system-ui]"
                          >
                            <Calendar className="w-5 h-5" />
                            Schedule via Calendly
                          </a>
                          <a
                            href={`mailto:${step.email}?subject=${encodeURIComponent(step.subject)}`}
                            className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl border-2 border-[#c09050]/40 text-gray-700 font-bold hover:border-[#c09050] hover:text-[#c09050] transition-all duration-300 font-[system-ui]"
                          >
                            <Mail className="w-5 h-5" />
                            <div className="text-left">
                              <div className="text-sm font-black">{step.email}</div>
                              <div className="text-xs text-gray-400">Subject: {step.subject}</div>
                            </div>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className={step.imageLeft ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={step.image} alt={step.title} className="w-full h-auto object-cover aspect-[4/3]" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/8 to-transparent" />
                    {/* Step number watermark on image */}
                    <div className="absolute bottom-4 right-4 text-white/30 text-8xl font-black font-[system-ui] leading-none select-none">
                      {step.number}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE STRIP ══ */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
          >
            <Quote className="w-10 h-10 text-[#c09050]/40 mx-auto mb-6" />
            <p className="text-white text-xl sm:text-2xl md:text-3xl font-[system-ui] leading-relaxed italic mb-5">
              "Even the most skilled guide needs a safe place to land."
            </p>
            <p className="text-[#c09050] font-bold text-sm uppercase tracking-widest font-[system-ui]">
              — The Vision Behind the bARTer Balance
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ TRAININGS OFFERED ══ */}
      <section className="relative py-20 sm:py-28 bg-white" id="trainings">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-5"
            >
              <BookOpen className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">Professional Training Offerings</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-[system-ui] mb-4"
            >
              Trainings{" "}
              <span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Offered
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-[system-ui]"
            >
              ART® and SĀF-T trainings for clinicians and professionals — plus custom formats for organizations and communities.
            </motion.p>
          </div>

          {/* Training cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {trainings.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  {/* Gold top bar */}
                  <div className="h-1 bg-gradient-to-r from-[#c09050] to-[#d4a84b]" />

                  <div className="flex flex-col flex-1 p-7">
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#c09050]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#c09050]" />
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c09050]/10 text-[#c09050] text-xs font-black font-[system-ui] tracking-wide">
                        {t.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-black mb-3 font-[system-ui]">{t.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-[system-ui] flex-1 mb-6">{t.description}</p>

                    <a
                      href={t.href}
                      target={t.external ? "_blank" : undefined}
                      rel={t.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white text-sm font-black font-[system-ui] hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                    >
                      {t.cta}
                      {t.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* About the Trainer */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className="rounded-2xl bg-[#fefcf7] border border-[#c09050]/15 p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex gap-6 items-start">
                {/* Headshot */}
                <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#c09050]/20 shadow-lg">
                  <img
                    src={images.barter.ayanaHeadshot}
                    alt="Ayana Foluke McKanney"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-4">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">About the Trainer</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 font-[system-ui] leading-tight">
                    Ayana Foluke McKanney, LCSW
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed font-[system-ui] mb-4">
                    Ayana is a certified ART® Master Trainer and a certified SĀF-T provider and trainer — equipped to facilitate both the foundational ART® Basic training and the SĀF-T course for professionals across disciplines.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed font-[system-ui]">
                    With 26+ years of clinical practice and advanced specialization in trauma modalities, Ayana brings both the depth of clinical expertise and the immediacy of somatic precision to every training she facilitates.
                  </p>
                </div>
              </div>

              {/* Credential logos */}
              <div className="flex flex-col gap-4">
                {credentialLogos.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#c09050]/20 shadow-sm"
                  >
                    <img
                      src={c.img}
                      alt={c.alt}
                      className={c.imgClass}
                    />
                    <span className="text-gray-600 text-sm font-[system-ui]">{c.label}</span>
                  </motion.div>
                ))}
                {/* SAF-T logo placeholder — to be added when logo is received */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }} viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#c09050]/20 shadow-sm"
                >
                  <div className="h-10 px-3 rounded-lg bg-[#c09050]/10 border border-[#c09050]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c09050] font-black text-sm font-[system-ui] tracking-wide">SĀF-T</span>
                  </div>
                  <span className="text-gray-600 text-sm font-[system-ui]">SĀF-T Certified Trainer</span>
                </motion.div>

                <p className="text-xs text-gray-400 font-[system-ui] mt-1">
                  To register for a training facilitated by Ayana, visit the{" "}
                  <a
                    href={trainingLinks.saft}
                    target="_blank" rel="noopener noreferrer"
                    className="text-[#c09050] underline hover:text-[#d4a84b] transition-colors"
                  >
                    RCRR registration page
                  </a>
                  , select the training Ayana is offering, and complete registration there. For CE credits, visit the{" "}
                  <a
                    href="https://acceleratedresolutiontherapy.com/ce-credits/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-[#c09050] underline hover:text-[#d4a84b] transition-colors"
                  >
                    ART CE Credits page
                  </a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-16 sm:py-24 bg-[#fefcf7]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-5">
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-[system-ui]">
              Have a{" "}
              <span className="inline-block pr-[3px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Question?
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }} viewport={{ once: true }}
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
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
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

      {/* ══ CTA ══ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={images.barter.closing} alt="Interested in the exchange" className="w-full h-full object-cover" />
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
            Interested in the Exchange?
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-[system-ui] max-w-2xl mx-auto leading-relaxed"
          >
            Reach out to partnership@thepeacepractice.me with the subject line "The bARTer Balance Inquiry" to begin the conversation.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
              href="https://calendly.com/manifestcoachingllc/barter"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-[system-ui]"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Session
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
              href="mailto:partnership@thepeacepractice.me?subject=The%20bARTer%20Balance%20Inquiry"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black text-lg hover:bg-white hover:text-[#c09050] transition-all duration-500 font-[system-ui]"
            >
              <Mail className="w-5 h-5" />
              Send an Inquiry
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Shield, label: "No Fees · No Invoices" },
              { icon: Video, label: "ART Practitioners Only" },
              { icon: Clock, label: "Up to 2 Sessions/Month" }
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
