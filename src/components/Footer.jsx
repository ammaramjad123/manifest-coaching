import React from "react";
import { images } from "../config/siteImages";
import {
  FaHeart,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaShieldAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaArrowRight,
  FaCalendarAlt,
  FaVideo,
  FaAward,
  FaCheckCircle,
  FaStar,
  FaGem
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Specialties", href: "/#specialties" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Clinical Therapy", href: "/services" },
    { name: "Transformational Coaching", href: "/services" },
    { name: "Professional Training", href: "/services" },
    { name: "Immigration Evaluations", href: "/services" }
  ];

  const resources = [
    { name: "The Path Forward Assessment", href: "/#assessment" },
    { name: "The MANIFEST Method", href: "/#manifest-method" },
    { name: "FAQ", href: "/faq" },
    { name: "Testimonials", href: "/#testimonials" }
  ];

  const specialties = [
    { name: "Accelerated Resolution Therapy (ART)", href: "/specialties/art" },
    { name: "DBT", href: "/specialties/dbt" },
    { name: "ACT", href: "/specialties/act" },
    { name: "Anxiety & Depression", href: "/specialties/process" },
    { name: "Trauma & PTSD", href: "/specialties/trauma-ptsd" },
    { name: "Women's Issues", href: "/specialties/women-issues" },
    { name: "Life Coaching", href: "/specialties/life-coaching" },
    { name: "Inclusive & Affirming Care", href: "/specialties/inclusive-affirming-care" },
    { name: "SĀF-T", href: "/specialties/safety-sensation" },
    { name: "bARTer Balance", href: "/specialties/barter-balance" },
    { name: "Immigration Evaluations & Training", href: "/specialties/partnership" },
    { name: "The MANIFEST Method", href: "/specialties/manifest-method" }
  ];

  return (
    <footer className="relative w-full bg-white overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c09050 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8">
          
          {/* Top Section - Brand & CTA */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 pb-8 border-b border-gray-200">
            
            {/* Left Side - Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={images.logo}
                  alt="The Peace Practice"
                  className="h-14 w-auto object-contain flex-shrink-0"
                />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-black font-[system-ui]">
                    The Peace Practice
                  </h2>
                  <p className="text-gray-500 text-sm font-[system-ui]">
                    Ayana Foluke McKanney, LCSW
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md font-[system-ui] mb-4">
                Your Journey. Our Partnership. Providing compassionate therapy, transformational coaching, and professional training to help you navigate life's challenges and discover your path to peace.
              </p>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="w-4 h-4 text-[#c09050]" />
                <span className="text-gray-400 text-xs font-[system-ui]">HIPAA Compliant • Secure Platform</span>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <FaStar className="w-5 h-5 text-[#c09050]" />
                <h3 className="text-black font-bold text-lg font-[system-ui]">Ready to Begin Your Journey?</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4 font-[system-ui]">
                Schedule your free 15-minute consultation today. No pressure, just conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/manifestcoachingllc/clarity-call"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-sm transition-all duration-500 hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-2xl hover:-translate-y-1 font-[system-ui]"
                >
                  <FaCalendarAlt className="w-4 h-4" />
                  Book Free Consultation
                  <FaArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#c09050] text-[#c09050] font-bold text-sm hover:bg-[#c09050] hover:text-white transition-all duration-300 font-[system-ui]"
                >
                  <MdEmail className="w-4 h-4" />
                  Send Message
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

            {/* Quick Links */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4 font-[system-ui]">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4 font-[system-ui]">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4 font-[system-ui]">Resources</h3>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4 font-[system-ui]">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+19299003056" className="flex items-center gap-3 text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 group">
                    <FaPhone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>(929) 900-3056</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:portal@thepeacepractice.me" className="flex items-center gap-3 text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 group">
                    <FaEnvelope className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>portal@thepeacepractice.me</span>
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/manifestcoachingllc/clarity-call" target="_blank" className="flex items-start gap-3 text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 group">
                    <FaVideo className="w-4 h-4 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>Virtual Sessions<br />Available Nationwide</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-black font-bold text-lg mb-4 font-[system-ui]">Specialties</h3>
              <ul className="space-y-2">
                {specialties.map((specialty) => (
                  <li key={specialty.name}>
                    <a
                      href={specialty.href}
                      className="text-gray-500 hover:text-[#c09050] text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                      {specialty.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
            <p className="text-gray-400 text-xs font-[system-ui]">
              © {currentYear} The Peace Practice. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/thepeacepractice.me"
                target="_blank"
                className="text-gray-400 hover:text-[#c09050] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayana-mckanney-lcsw-18879023/"
                target="_blank"
                className="text-gray-400 hover:text-[#c09050] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/15vR4tMEio/"
                target="_blank"
                className="text-gray-400 hover:text-[#c09050] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>

            <p className="text-gray-400 text-xs font-[system-ui]">
              Developed by{" "}
              <a
                href="https://www.cobraintech.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#c09050] hover:text-[#d4a84b] transition-colors duration-300 font-semibold"
              >
                CoBrain Technologies
              </a>
            </p>
          </div>

          {/* Legal Compliance Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center space-y-3">
            <p className="text-gray-800 text-sm font-black tracking-wide font-[system-ui]">
              The Peace Practice &nbsp;|&nbsp; Your Journey. Our Partnership.
            </p>
            <p className="text-gray-600 text-sm font-[system-ui]">
              MANIFEST Coaching LLC d/b/a The Peace Practice
            </p>
            <div className="max-w-3xl mx-auto space-y-1">
              <p className="text-gray-600 text-sm font-[system-ui]">
                <span className="font-semibold text-gray-700">Clinical Therapy:</span> Available for individuals (17+) in NY, NJ, and RI.
              </p>
              <p className="text-gray-600 text-sm font-[system-ui]">
                <span className="font-semibold text-gray-700">Consultative Coaching:</span> Available Nationwide via the MANIFEST Method.
              </p>
              <p className="text-gray-600 text-sm font-[system-ui]">
                <span className="font-semibold text-gray-700">Professional Training & Partnerships:</span> ART® & SĀF-T trainings, EAP services, immigration assessments, and the bARTer Balance Benefit — facilitated through MANIFEST Coaching LLC.
              </p>
            </div>
            <p className="text-gray-700 text-sm font-[system-ui]">
              <span className="font-bold text-gray-800">Licensed for Clinical Therapy</span> — Ayana Foluke McKanney, LCSW
            </p>
            <p className="text-gray-600 text-sm font-[system-ui]">
              NY #098940 &nbsp;|&nbsp; NJ #44SL06739500 &nbsp;|&nbsp; RI #ISW04317 &nbsp;|&nbsp; NPI# 1508672049
            </p>
            <p className="text-gray-500 text-xs font-[system-ui] max-w-2xl mx-auto leading-relaxed">
              Accelerated Resolution Therapy® and ART® are registered service marks of the Rosenzweig Center for Rapid Recovery (RCRR), used with permission.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}