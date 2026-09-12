import { images } from "../config/siteImages";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const coachingReviews = [
  { text: "Ayana is hands-down the best working parent coach. She provided high-impact, actionable tools for real-life parenting situations that actually work for busy professionals. I feel more equipped, more patient, and more confident in my parenting journey.", name: "P.C.", label: "Coaching Client" },
  { text: "Life Changing", name: "R.B.", label: "Coaching Client" },
  { text: "You've helped me untie knots that have been there for years!", name: "L.T.", label: "Coaching Client" },
  { text: "Ayana is incredibly talented, empathetic, very efficient and to the point. She partners with me to clarify goals and make progress toward them; helps me stay focused and structured in the coaching process. I just feel very blessed to have found her.", name: "S.M.", label: "Coaching Client" },
  { text: "Thank you so much Ayana for giving so many appropriate tools and going deep. You are indeed so awesome in what you do. Feeling super thankful to have found you.", name: "K.A.", label: "Coaching Client" },
  { text: "Obrigada!!! (Thank you in Portuguese 😊)", name: "F.S.", label: "Coaching Client" },
  { text: "Ayana is great! She made me think and understand some things that I have not been able to understand within myself in a while. She has me excited and ready to work towards a better me.", name: "T.B.", label: "Coaching Client" },
  { text: "GREAT session! Ayana is wonderful. I am feeling fantastic and ready to take on the world!", name: "D.W.", label: "Coaching Client" },
  { text: "Ayana, thanks again for 6 months of revolutionary help. Truly, I am so so so grateful.", name: "M.K.", label: "Coaching Client" },
  { text: "Working with Ayana has been amazing. With the tools she provided I feel empowered to take charge in my personal and work life.", name: "C.R.", label: "Coaching Client" },
  { text: "I don't know where my mental health would be right now without Ayana!", name: "J.H.", label: "Coaching Client" },
  { text: "Whilst we are at the very start of our coaching I felt immediately safe, comfortable and able to be vulnerable.", name: "N.O.", label: "Coaching Client" },
];

const testimonials = [
  {
    id: 1, name: "D.C.", title: "Coaching Client", rating: 5,
    text: "The MANIFEST Method is truly transformative. Working with this practice helped break through imposter syndrome and step into real power. Launched a business and doubled income since starting.",
    service: "Transformational Coaching"
  },
  {
    id: 2, name: "E.W.", title: "Clinical Psychologist", rating: 5,
    text: "As a fellow clinician, the bar for referrals is high. Ayana's trauma-informed approach and clinical expertise make The Peace Practice my top recommendation for therapy and coaching.",
    service: "Peer Referral"
  },
  {
    id: 3, name: "R.M.", title: "Coaching Client", rating: 5,
    text: "Coaching here helped navigate a major career transition with clarity and confidence. The accountability and strategic framework made all the difference.",
    service: "Transformational Coaching"
  },
  {
    id: 4, name: "J.W.", title: "Training Attendee", rating: 5,
    text: "The SĀF-T training was exceptional. Ayana is a skilled facilitator who brings deep knowledge and practical application. Left feeling fully prepared to use the technique.",
    service: "Professional Training"
  },
  {
    id: 5, name: "P.C.", title: "Coaching Client", rating: 5,
    text: "Ayana is hands-down the best working parent coach. High-impact, actionable tools for real-life parenting situations that actually work for busy professionals. More equipped, more patient, and more confident.",
    service: "Transformational Coaching"
  },
  {
    id: 6, name: "S.M.", title: "Coaching Client", rating: 5,
    text: "Ayana is incredibly talented, empathetic, and to the point. She partners with me to clarify goals and make progress toward them — helping me stay focused and structured in the coaching process. Feeling very blessed to have found her.",
    service: "Transformational Coaching"
  },
  {
    id: 7, name: "J.W.", title: "Training Attendee", rating: 5,
    text: "Left the ART® training feeling fully equipped and inspired. Ayana brings warmth, deep expertise, and practical clinical wisdom to every moment of the room.",
    service: "Professional Training"
  },
  {
    id: 8, name: "C.L.", title: "Coaching Client", rating: 5,
    text: "This coaching process gave me the clarity and language for what I had been trying to do for years. Moving with real purpose and direction now — and I haven't looked back.",
    service: "Transformational Coaching"
  }
];

function CoachingSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef(null);
  const autoRef = useRef(null);

  const animateTo = useCallback((nextIndex) => {
    if (isAnimating || nextIndex === current) return;
    setIsAnimating(true);

    const direction = nextIndex > current ? 1 : -1;

    gsap.to(slideRef.current, {
      x: -60 * direction,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setCurrent(nextIndex);
        gsap.fromTo(
          slideRef.current,
          { x: 60 * direction, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.45,
            ease: "power3.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  }, [current, isAnimating]);

  const next = useCallback(() => animateTo((current + 1) % coachingReviews.length), [animateTo, current]);
  const prev = useCallback(() => animateTo((current - 1 + coachingReviews.length) % coachingReviews.length), [animateTo, current]);

  useEffect(() => {
    autoRef.current = setInterval(next, 5000);
    return () => clearInterval(autoRef.current);
  }, [next]);

  const review = coachingReviews[current];

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">

      {/* Testimonial card */}
      <div
        ref={slideRef}
        className="relative bg-white rounded-3xl border border-[#c09050]/15 shadow-[0_24px_60px_-24px_rgba(192,144,80,0.45)] p-7 sm:p-9 md:p-10"
      >
        {/* Quote badge */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4a84b] to-[#c09050] shadow-lg shadow-[#c09050]/30 flex items-center justify-center mb-6">
          <Quote size={22} className="text-white fill-white" />
        </div>

        {/* Quote text */}
        <p className="text-gray-800 text-lg sm:text-xl md:text-2xl leading-relaxed font-[system-ui] font-light mb-7">
          {review.text}
        </p>

        {/* Footer: author + stars */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d4a84b] to-[#c09050] flex items-center justify-center shadow-md shadow-[#c09050]/20 flex-shrink-0">
              <span className="text-white text-xs font-black font-[system-ui]">
                {review.name}
              </span>
            </div>
            <div className="min-w-0">
              <span className="text-black font-bold text-sm font-[system-ui] block truncate">{review.name}</span>
              <span className="text-gray-400 text-xs font-[system-ui]">{review.label}</span>
            </div>
          </div>
          <div className="flex gap-0.5 flex-shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} className="fill-[#d4a84b] text-[#d4a84b]" />
            ))}
          </div>
        </div>
      </div>

      {/* Controls — arrows flanking dots */}
      <div className="flex items-center justify-center gap-5 mt-7">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-[#c09050]/30 bg-white hover:bg-[#c09050] hover:border-[#c09050] text-[#c09050] hover:text-white flex items-center justify-center shadow-sm transition-all duration-300"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {coachingReviews.map((_, i) => (
            <button
              key={i}
              onClick={() => animateTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#c09050]"
                  : "w-2 h-2 bg-[#c09050]/25 hover:bg-[#c09050]/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next review"
          className="flex-shrink-0 w-10 h-10 rounded-full border border-[#c09050]/30 bg-white hover:bg-[#c09050] hover:border-[#c09050] text-[#c09050] hover:text-white flex items-center justify-center shadow-sm transition-all duration-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden" id="testimonials">

      {/* ── Community Voices Grid ── */}
      <div className="relative py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#c09050] font-[system-ui]">Coaching & Partnership Voices</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-black mb-4 font-[system-ui]">
            Voices from the{" "}
            <span className="inline-block pr-[2px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">Community</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg font-[system-ui]">
            Experiences shared by coaching clients, training participants, and professional peers
          </motion.p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="rounded-2xl overflow-hidden h-64 md:h-72 bg-gray-50">
            <img
              src={images.home.testimonialCommunity}
              alt="Coaching and partnership clients from The Peace Practice community"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={40} className="text-[#c09050]" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} size={18} className="fill-[#c09050] text-[#c09050]" />)}
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 flex-grow font-[system-ui]">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c09050] to-[#d4a84b] flex items-center justify-center shadow-md flex-shrink-0">
                    <span className="text-white text-sm font-black font-[system-ui]">{t.name}</span>
                  </div>
                  <div>
                    <h4 className="text-black font-bold font-[system-ui] text-base">{t.title}</h4>
                    <p className="text-[#c09050]/70 text-xs font-[system-ui] mt-0.5">{t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coaching Voices Slider ── */}
      <div className="relative bg-[#fefcf7] border-t border-[#c09050]/10 py-10 md:py-14">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.4px, transparent 0.4px)`,
          backgroundSize: "24px 24px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-5">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c09050] font-[system-ui]">Coaching Voices</span>
            </motion.div>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-black font-[system-ui]">
              What Coaching{" "}
              <span className="inline-block pr-[2px] bg-gradient-to-r from-[#c09050] to-[#d4a84b] bg-clip-text text-transparent">Clients Share</span>
            </motion.h3>
          </div>

          {/* Section image */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-56 md:h-64 mb-6">
            <img
              src={images.home.testimonialCoaching}
              alt="Transformational coaching clients sharing their experience"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* GSAP Slider */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
            <CoachingSlider />
          </motion.div>
        </div>
      </div>

      {/* ── Stats & Ethics Note ── */}
      <div className="relative z-10 py-10 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { value: "26+", label: "Years of Practice" },
              { value: "3",   label: "Licensed States" },
              { value: "Master", label: "ART® Trainer" },
              { value: "Nation", label: "Wide Coaching" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#c09050] font-[system-ui]">{s.value}</div>
                <div className="text-gray-500 text-sm font-[system-ui] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center px-4 py-5 rounded-2xl bg-gray-50 border border-gray-100">
            <p className="text-gray-600 text-sm md:text-base font-[system-ui] leading-relaxed">
              <span className="font-semibold text-gray-800">A note on therapy reviews:</span> As a licensed clinical social worker, ethical and professional guidelines prohibit the solicitation of testimonials from therapy clients. The voices shared above reflect coaching, professional training, and peer referral experiences only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
