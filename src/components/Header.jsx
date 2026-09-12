import { images } from "../config/siteImages";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Calendar,
  Menu,
  X,
  Shield,
  Heart,
  Sparkles,
  Leaf,
  ChevronDown,
  CheckCircle,
  Clock,
  Video,
  Brain,
  Users,
  BookOpen,
  Zap,
  Globe,
  Activity,
  Target
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimer.current);
    setShowDropdown(true);
  };
  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setShowDropdown(false), 160);
  };
  
  const location = useLocation();

  // Brand colors
  const brandGold = "#c09050";
  const brandWhite = "#FFFFFF";

  // Hash navigation function
  const handleHashNavigation = (link) => {
    const currentPath = location.pathname;
    const targetPath = link.targetPage || "/";
    const hash = link.path;
    
    if (currentPath === targetPath) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `${targetPath}${hash}`;
    }
    setMobileDropdownOpen(false);
  };

  // Scroll handling with hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileDropdownOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const specialtiesList = [
    { label: "The Process", icon: Heart, desc: "Clinical Therapy — Anxiety, Depression & Trauma", href: "/specialties/process" },
    { label: "The Pivot", icon: Brain, desc: "Life Coaching — Mindset transformation & peak personal evolution", href: "/specialties/life-coaching" },
    { label: "The Partnership", icon: BookOpen, desc: "Training, Education & Immigration", href: "/specialties/partnership" },
    { label: "bARTer Balance", icon: Sparkles, desc: "Organizational wellness program", href: "/specialties/barter-balance" },
    { label: "The MANIFEST Method", icon: Zap, desc: "The proprietary healing framework", href: "/specialties/manifest-method" },
  ];

  const modalitiesList = [
    { label: "ACT", desc: "Acceptance & Commitment Therapy", icon: Target, href: "/specialties/act" },
    { label: "DBT", desc: "Dialectical Behavior Therapy", icon: Brain, href: "/specialties/dbt" },
    { label: "ART®", desc: "Accelerated Resolution Therapy", icon: Zap, href: "/specialties/art" },
    { label: "Inclusive & Affirming", desc: "Culturally responsive practice", icon: Globe, href: "/specialties/inclusive-affirming-care" },
    { label: "SĀF-T", desc: "Safety & Sensation technique", icon: Activity, href: "/specialties/safety-sensation" }
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="py-3 sm:py-4 transition-all duration-500">
            <div
              className={`relative mx-auto flex items-center justify-between transition-all duration-500 ${
                scrolled
                  ? "bg-white/95 backdrop-blur-xl rounded-full shadow-2xl px-4 sm:px-6 lg:px-8 xl:pr-9 py-2 sm:py-3"
                  : "bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 xl:pr-9 py-3 sm:py-4"
              }`}
              style={{ backdropFilter: "blur(12px)" }}
            >
              {/* LOGO */}
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex-shrink-0 flex items-center space-x-2 group"
              >
                <img
                  src={images.logo}
                  alt="The Peace Practice"
                  className="object-contain transition-all duration-300 h-22 w-auto sm:h-18 md:h-26 lg:h-20 xl:h-26"
                />

              </Link>

              {/* DESKTOP NAVIGATION */}
              <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 mx-3 xl:mx-6">
                <Link
                  to="/"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 ${
                    isActive("/") ? "text-[#c09050]" : "text-gray-700 hover:text-[#c09050]"
                  }`}
                >
                  Home
                  <span
                    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive("/") ? "w-full bg-[#c09050]" : "w-0 bg-[#c09050]"
                    }`}
                  />
                </Link>

                <Link
                  to="/services"
                  className={`group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 ${
                    location.pathname === "/services" ? "text-[#c09050]" : "text-gray-700 hover:text-[#c09050]"
                  }`}
                >
                  Services
                  <span
                    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                      location.pathname === "/services" ? "w-full bg-[#c09050]" : "w-0 bg-[#c09050]"
                    }`}
                  />
                </Link>

               <Link
  to="/about"
  className={`group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 ${
    location.pathname === "/about" ? "text-[#c09050]" : "text-gray-700 hover:text-[#c09050]"
  }`}
>
  About the Curator
  <span
    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      location.pathname === "/about" ? "w-full bg-[#c09050]" : "w-0 bg-[#c09050]"
    }`}
  />
</Link>
                {/* Desktop Dropdown for Specialties */}
                <div
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 flex items-center gap-1 text-gray-700 hover:text-[#c09050]"
                  >
                    Specialties
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                    <span className="absolute left-0 top-full mt-1 h-0.5 w-0 rounded-full bg-[#c09050] transition-all duration-300 group-hover:w-full" />
                  </button>

                  {showDropdown && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-3 w-[740px] z-50"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#c09050]/5 to-[#d4a84b]/5 pointer-events-none rounded-2xl" />
                        <div className="relative grid grid-cols-2 gap-0 divide-x divide-gray-100 p-4">

                          {/* Column 1 — Specialty Areas */}
                          <div className="pr-4">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c09050] px-3 pb-3 font-[system-ui]">
                              Specialty Areas
                            </p>
                            {specialtiesList.map((item) => {
                              const Icon = item.icon;
                              const cls = "flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-[#c09050]/10 transition-all duration-200 group";
                              const inner = (
                                <>
                                  <div className="w-10 h-10 bg-[#c09050]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-[#c09050]" />
                                  </div>
                                  <div className="text-left min-w-0">
                                    <p className="font-bold text-gray-800 text-base leading-tight">{item.label}</p>
                                    <p className="text-sm text-gray-500 truncate mt-0.5">{item.desc}</p>
                                  </div>
                                </>
                              );
                              return item.isAnchor ? (
                                <a key={item.href} href={item.href} onClick={() => setShowDropdown(false)} className={cls}>{inner}</a>
                              ) : (
                                <Link key={item.href} to={item.href} onClick={() => setShowDropdown(false)} className={cls}>{inner}</Link>
                              );
                            })}
                          </div>

                          {/* Column 2 — Clinical Modalities */}
                          <div className="pl-4">
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c09050] px-3 pb-3 font-[system-ui]">
                              Clinical Modalities
                            </p>
                            {modalitiesList.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  onClick={() => setShowDropdown(false)}
                                  className="flex items-center gap-3 w-full px-3 py-3 rounded-xl hover:bg-[#c09050]/10 transition-all duration-200 group"
                                >
                                  <div className="w-10 h-10 bg-[#c09050]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Icon className="w-5 h-5 text-[#c09050]" />
                                  </div>
                                  <div className="text-left min-w-0">
                                    <p className="font-bold text-gray-800 text-base leading-tight">{item.label}</p>
                                    <p className="text-sm text-gray-500 truncate mt-0.5">{item.desc}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
                </div>

               <Link
  to="/faq"
  className={`group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 ${
    location.pathname === "/faq" ? "text-[#c09050]" : "text-gray-700 hover:text-[#c09050]"
  }`}
>
  FAQ
  <span
    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      location.pathname === "/faq" ? "w-full bg-[#c09050]" : "w-0 bg-[#c09050]"
    }`}
  />
</Link>

               <Link
  to="/blog"
  className={`group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 ${
    isActive("/blog") ? "text-[#c09050]" : "text-gray-700 hover:text-[#c09050]"
  }`}
>
  Blog
  <span
    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      isActive("/blog") ? "w-full bg-[#c09050]" : "w-0 bg-[#c09050]"
    }`}
  />
</Link>

               <Link
  to="/contact"
  className={`group relative whitespace-nowrap text-sm xl:text-lg font-semibold transition-colors duration-300 ${
    location.pathname === "/contact" ? "text-[#c09050]" : "text-gray-700 hover:text-[#c09050]"
  }`}
>
  Contact
  <span
    className={`absolute left-0 top-full mt-1 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      location.pathname === "/contact" ? "w-full bg-[#c09050]" : "w-0 bg-[#c09050]"
    }`}
  />
</Link>
              </nav>

              {/* DESKTOP CTA BUTTONS */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-6 pr-0.5 xl:pr-1">
                <a
                  href="https://calendly.com/manifestcoachingllc/"
                  target="_blank"
                  className="flex items-center whitespace-nowrap gap-1.5 xl:gap-2 px-4 xl:px-5 py-2.5 xl:py-2.5 rounded-full font-bold text-sm xl:text-base bg-[#c09050]/10 border border-[#c09050]/20 text-[#c09050] shadow-lg hover:bg-[#c09050] hover:text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Calendar size={16} className="xl:w-[18px] xl:h-[18px] flex-shrink-0" />
                  <span>Book Consultation</span>
                </a>
                <a href="tel:+19299003056">
                  <button
                    className="flex items-center whitespace-nowrap gap-1.5 xl:gap-2 px-5 xl:px-6 py-2.5 xl:py-2.5 rounded-full font-bold text-sm xl:text-base bg-black border-2 border-[#c09050] text-white shadow-lg hover:bg-[#c09050] hover:border-[#c09050] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Phone size={17} className="xl:w-[18px] xl:h-[18px] flex-shrink-0" />
                    <span>Call Now</span>
                  </button>
                </a>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition hover:bg-gray-100"
              >
                <Menu size={24} className="sm:w-6 sm:h-6 text-[#c09050]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - FULL SCREEN */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`relative h-full w-full overflow-y-auto transition-all duration-500 transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="min-h-screen bg-white shadow-2xl">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-200">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src={images.logo}
                  alt="The Peace Practice"
                  className="h-22 w-auto object-contain"
                />
                
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition hover:bg-gray-100"
              >
                <X size={24} className="sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col p-5 sm:p-6 space-y-2">
              <Link
                to="/"
                className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                  isActive("/") 
                    ? "bg-[#c09050]/10 text-[#c09050] border-l-4 border-[#c09050]" 
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/services"
                className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
                  location.pathname === "/services" 
                    ? "bg-[#c09050]/10 text-[#c09050] border-l-4 border-[#c09050]" 
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>

             <Link
  to="/about"
  className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
    location.pathname === "/about"
      ? "bg-[#c09050]/10 text-[#c09050] border-l-4 border-[#c09050]"
      : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => setMobileOpen(false)}
>
  About the Curator
</Link>

              {/* Mobile Dropdown for Specialties */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold text-gray-800 hover:bg-gray-100 transition-all duration-300"
                >
                  <span>Specialties</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileDropdownOpen && (
                  <div className="ml-2 animate-fadeIn">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] px-4 pt-3 pb-2 font-[system-ui]">
                      Specialty Areas
                    </p>
                    {specialtiesList.map((item) => {
                      const Icon = item.icon;
                      const cls = "flex items-center gap-3 w-full py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300";
                      const inner = (
                        <>
                          <div className="w-10 h-10 bg-[#c09050]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-[#c09050]" />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-gray-800 text-base sm:text-lg">{item.label}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        </>
                      );
                      return item.isAnchor ? (
                        <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={cls}>{inner}</a>
                      ) : (
                        <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className={cls}>{inner}</Link>
                      );
                    })}
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#c09050] px-4 pt-4 pb-2 font-[system-ui]">
                      Clinical Modalities
                    </p>
                    {modalitiesList.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 w-full py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
                        >
                          <div className="w-10 h-10 bg-[#c09050]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-[#c09050]" />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-gray-800 text-base sm:text-lg">{item.label}</p>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
  to="/faq"
  className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
    location.pathname === "/faq"
      ? "bg-[#c09050]/10 text-[#c09050] border-l-4 border-[#c09050]"
      : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => setMobileOpen(false)}
>
  FAQ
</Link>

              <Link
  to="/blog"
  className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
    isActive("/blog")
      ? "bg-[#c09050]/10 text-[#c09050] border-l-4 border-[#c09050]"
      : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => setMobileOpen(false)}
>
  Blog
</Link>

              <Link
  to="/contact"
  className={`py-3 px-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 ${
    location.pathname === "/contact"
      ? "bg-[#c09050]/10 text-[#c09050] border-l-4 border-[#c09050]"
      : "text-gray-800 hover:bg-gray-100"
  }`}
  onClick={() => setMobileOpen(false)}
>
  Contact
</Link>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="p-5 sm:p-6 border-t border-gray-200 mt-4 space-y-3">
              <a
                href="https://calendly.com/manifestcoachingllc/"
                target="_blank"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-3.5 sm:py-4 rounded-full border-2 border-[#c09050] text-[#c09050] font-bold text-base sm:text-lg hover:bg-[#c09050] hover:text-white transition-all duration-300"
              >
                <Calendar size={18} className="sm:w-5 sm:h-5" />
                <span>Book Consultation</span>
              </a>
              <a href="tel:+19299003056">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-3.5 sm:py-4 rounded-full bg-black border-2 border-[#c09050] text-white font-bold text-base sm:text-lg hover:bg-[#c09050] hover:border-[#c09050] transition-all duration-300 shadow-lg"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  <span>Call (929) 900-3056</span>
                </button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="p-5 sm:p-6 pt-0 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Shield size={14} className="sm:w-4 sm:h-4 text-[#c09050]" />
                <span>26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-[#c09050]" />
                <span>Master ART Trainer</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Clock size={14} className="sm:w-4 sm:h-4 text-[#c09050]" />
                <span>Accepting New Clients</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Video size={14} className="sm:w-4 sm:h-4 text-[#c09050]" />
                <span>Online Therapy</span>
              </div>
            </div>

            {/* Phone Number */}
            <div className="p-5 sm:p-6 pt-0 flex flex-col gap-2 text-center">
              <a href="tel:+19299003056" className="text-sm text-gray-600 hover:text-[#c09050]">
                (929) 900-3056
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}