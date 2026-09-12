import { images } from "../config/siteImages";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants}>
            <p className="font-[system-ui] text-[#c09050] uppercase tracking-[3px] text-sm font-bold mb-3">
              The Principal Curator
            </p>
            <h2 className="font-[system-ui] text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ayana Foluke McKanney,{" "}
              <span className="text-[#c09050]">MSW, LCSW</span>
            </h2>
            <p className="font-[system-ui] text-gray-700 text-xl leading-relaxed mb-6">
              With over 27 years of clinical mastery, Ayana Foluke McKanney is a licensed therapist by trade and an architect by instinct. As the Principal Curator of individual evolution, her work is rooted in Brooklyn Grit and refined by Strategic Serenity, bridging the gap between high-stakes clinical excellence and intentional living.
            </p>
            <p className="font-[system-ui] text-gray-600 text-lg leading-relaxed mb-6">
              Ayana utilizes her proprietary MANIFEST Method as the foundational engine for both her clinical therapy and transformational coaching. Through this framework, she empowers clients to deconstruct emotional barriers and rebuild resilient foundations. Whether she is resolving the echoes of trauma, conducting specialized clinical assessments for immigration proceedings, training the next generation of practitioners, or guiding high-achievers through a strategic pivot, her approach is singular: audit the noise to architect the next.
            </p>
            <p className="font-[system-ui] text-gray-600 text-lg leading-relaxed mb-8">
              A Licensed Clinical Social Worker (NY, NJ, RI) and Master Accelerated Resolution Therapy (ART) Trainer, Ayana's toolkit is as diverse as the lives she transforms. She is a certified trauma clinician specializing in ART, ACT, DBT, and SĀF-T, and a Master Life Coach. Ayana founded The Peace Practice as a clinical home for those ready to move from frantic fragmentation to fully-functioning fulfillment. She believes that your history is a narrative, not a limitation—and your future is a blueprint, not a burden.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#c09050]" />
                <span className="text-base text-gray-700">27+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#c09050]" />
                <span className="text-base text-gray-700">Master ART Trainer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#c09050]" />
                <span className="text-base text-gray-700">Licensed in NY, NJ, RI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[450px] md:h-[500px]">
              <img
                src={images.about.legacyPhoto}
                alt="Ayana Foluke McKanney - Principal Curator"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c09050]/0 to-transparent"></div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c09050] rounded-full opacity-10 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-black rounded-full opacity-5 -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}