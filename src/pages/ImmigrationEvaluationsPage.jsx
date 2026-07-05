import { images, trainingLinks } from "../config/siteImages";
import React, { useState } from "react";
import { motion } from "framer-motion";
import UpcomingTraining from "../components/UpcomingTraining";
import {
  ArrowRight, Calendar, Phone, Brain, Heart, Shield,
  Sparkles, Clock, Quote, Globe, FileText, Users as UsersIcon,
  HeartHandshake, Gavel, CheckCircle, Award, BookOpen, ExternalLink,
  Scale, Video
} from "lucide-react";

const tabData = [
  {
    id: "overview",
    label: "Evaluations Overview",
    image: images.immigration.card1,
    imageAlt: "Clinical Immigration Evaluation",
    heading: "Clinical Immigration Assessments: A Forensic Approach",
    badge: "Comprehensive · Defensible · Tailored",
    intro: "As a licensed LCSW, expert clinical documentation is provided that strengthens immigration petitions — translating complex trauma and psychological distress into clear, DSM-5-supported narratives for the cases that matter most.",
    points: [
      { icon: FileText, title: "Case-Specific Customization", desc: "Every report is built from the ground up based on the client's unique history — no templates, no shortcuts." },
      { icon: Brain, title: "Clinical Rigor", desc: "High-level analysis of credibility, symptom mapping, and long-term prognosis grounded in DSM-5 standards." },
      { icon: Scale, title: "Streamlined Process", desc: "Working directly with your firm to ensure the assessment aligns with your legal timeline and submission requirements." }
    ],
    note: {
      heading: "Attorney Referrals Only",
      body: "Self-referrals are not accepted. To ensure the evaluation is properly integrated into your legal strategy, please have your attorney contact the office directly to initiate the contracting process."
    },
    stat: "DSM-5 supported · Forensic quality · Attorney partnership"
  },
  {
    id: "cases",
    label: "Case Specializations",
    image: images.immigration.card2,
    imageAlt: "Case types and specializations",
    heading: "What's Provided for Clinical Immigration Evaluations",
    badge: "Every Report Built from the Ground Up",
    intro: "All assessments are tailored to the particular needs of each case, including:",
    cases: [
      {
        icon: Shield,
        name: "Asylum Cases",
        desc: "Explaining the psychological reasons why a client missed the one-year filing deadline; detailing how various symptoms may provide evidence of the persecution they suffered or may experience."
      },
      {
        icon: Heart,
        name: "Extreme Hardship / Cancellation of Removal",
        desc: "Identifying unique factors contributing to a client's psychological distress — such as illness; disability; professional, financial, or academic hardship; or adverse home-country conditions that would affect the petitioner or their family members."
      },
      {
        icon: HeartHandshake,
        name: "VAWA Cases",
        desc: "Detailing the client's psychological symptoms which are common for victims of domestic violence."
      },
      {
        icon: Globe,
        name: "U- & T-Visa Cases",
        desc: "Describing the traumatic impact of the crime on the client and the impact on their life."
      }
    ],
    stat: "Licensed in NY, NJ & RI · Virtual evaluations · Deposit secures appointment"
  }
];

const trainings = [
  {
    icon: Award,
    title: "ART® Basic Training",
    badge: "$1,700 · 20 CE Credits",
    description: "Become certified in Accelerated Resolution Therapy — one of the fastest-growing, evidence-based trauma modalities in the field. Facilitated by a Certified Master ART® Trainer.",
    cta: "Register via RCRR",
    href: trainingLinks.artBasic,
    external: true
  },
  {
    icon: Shield,
    title: "SĀF-T Training",
    badge: "$199 · No License Required",
    description: "\"Keep the Knowledge, Lose the Pain.\" Sensations Awareness Focused Technique training — open to professionals, paraprofessionals, and parents. No clinical license required.",
    cta: "Register via RCRR",
    href: trainingLinks.saft,
    external: true
  },
  {
    icon: UsersIcon,
    title: "Corporate & Community",
    badge: "Custom Format",
    description: "Bring evidence-based wellness training to your organization, agency, or community. Custom formats for workplace teams, first responders, faith communities, schools, and more.",
    cta: "Inquire Now",
    href: "mailto:partnership@thepeacepractice.me",
    external: false
  }
];

export default function ImmigrationEvaluationsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const tab = tabData.find(t => t.id === activeTab);

  return (
    <div className="relative bg-white overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-22 sm:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={images.immigration.showcase}
            alt="Justice and compassion"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: Math.random() * 800, x: Math.random() * 1200, opacity: 0 }}
              animate={{ y: -100, opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-5">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-wider text-white">The Partnership — Training & Immigration</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 font-[system-ui] leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Partnership
              </span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-[system-ui] leading-relaxed">
              Three distinct offerings serve professionals and institutions: professional trainings, education, and trauma-informed immigration assessments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="https://calendly.com/manifestcoachingllc/immigration"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#c09050] to-[#d4a84b] text-white font-bold hover:shadow-2xl transition-all duration-500 font-[system-ui]"
              >
                <Calendar className="w-5 h-5" />
                Schedule Evaluation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 transition-all duration-500 font-[system-ui]"
              >
                <Phone className="w-5 h-5" />
                Contact
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">26+ Years Experience</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Forensic Documentation</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#c09050]" />
                <span className="text-white/60 text-xs">Virtual Evaluations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-[#c09050] rounded-full mt-1 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* ── UPCOMING TRAINING (editable + toggle in src/config/upcomingTraining.js) ── */}
      <UpcomingTraining />

      {/* ── TABBED EVALUATION SECTIONS ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Tab buttons */}
          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {tabData.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-7 py-3 rounded-full font-bold text-sm font-[system-ui] transition-all duration-300 ${
                  activeTab === t.id
                    ? "bg-[#c09050] text-white border-2 border-[#c09050] shadow-lg"
                    : "bg-[#c09050]/15 text-[#c09050] border-2 border-[#c09050]/30 hover:bg-[#c09050]/25"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          >
            {/* Content side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">{tab.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-5 font-[system-ui] leading-tight">
                {tab.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-[system-ui]">
                {tab.intro}
              </p>

              {tab.points && (
                <div className="space-y-4 mb-8">
                  {tab.points.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#c09050]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#c09050]" />
                        </div>
                        <div>
                          <p className="font-black text-black text-sm font-[system-ui] mb-1">{p.title}</p>
                          <p className="text-gray-600 text-sm font-[system-ui] leading-relaxed">{p.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {tab.cases && (
                <div className="space-y-4 mb-8">
                  {tab.cases.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#c09050]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#c09050]" />
                        </div>
                        <div>
                          <p className="font-black text-black text-sm font-[system-ui] mb-1">{c.name}</p>
                          <p className="text-gray-600 text-sm font-[system-ui] leading-relaxed">{c.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {tab.note && (
                <div className="p-5 rounded-2xl bg-[#c09050]/5 border border-[#c09050]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Gavel className="w-4 h-4 text-[#c09050]" />
                    <p className="font-black text-[#c09050] text-sm font-[system-ui] uppercase tracking-wider">{tab.note.heading}</p>
                  </div>
                  <p className="text-gray-700 text-sm font-[system-ui] leading-relaxed">{tab.note.body}</p>
                </div>
              )}

              <div className="mt-6">
                <a
                  href="https://calendly.com/manifestcoachingllc/immigration"
                  target="_blank"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 font-[system-ui]"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Evaluation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={tab.image}
                alt={tab.imageAlt}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                  <Quote className="w-3 h-3 text-[#c09050]" />
                  <span className="text-white/80 text-xs font-[system-ui]">{tab.stat}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRAINING OFFERINGS ── */}
      <section className="py-16 sm:py-24 bg-[#fefcf7]" id="trainings">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-5"
            >
              <BookOpen className="w-4 h-4 text-[#c09050]" />
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] font-[system-ui]">Professional Training</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-[system-ui] mb-4"
            >
              Trainings{" "}
              <span className="bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">
                Offered
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-[system-ui]"
            >
              ART® and SĀF-T trainings facilitated by a Certified Master Trainer — open to clinicians, paraprofessionals, and community professionals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {trainings.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  <div className="h-1 bg-gradient-to-r from-[#c09050] to-[#d4a84b]" />
                  <div className="flex flex-col flex-1 p-7">
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images.immigration.cta}
            alt="Justice and hope"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/25 to-[#d4a84b]/20" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * 1200, y: 900 }}
              animate={{ y: -100 }}
              transition={{ duration: Math.random() * 12 + 8, repeat: Infinity, delay: Math.random() * 8 }}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">

          <motion.h2
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 font-[system-ui] leading-tight"
          >
            Your Story Deserves
            <br />
            To Be Heard
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-10 font-[system-ui] max-w-2xl mx-auto"
          >
            Schedule your immigration evaluation today. Deposit secures your appointment.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
              href="https://calendly.com/manifestcoachingllc/immigration"
              target="_blank"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#c09050] font-black text-lg hover:shadow-2xl transition-all duration-500 font-[system-ui]"
            >
              <Calendar className="w-5 h-5" />
              Book Evaluation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black text-lg hover:bg-white hover:text-[#c09050] transition-all duration-500 font-[system-ui]"
            >
              <Phone className="w-5 h-5" />
              Contact
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">Forensic Quality</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">NY, NJ, RI Licensed</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-white/70 text-xs">120-Min Evaluation</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
