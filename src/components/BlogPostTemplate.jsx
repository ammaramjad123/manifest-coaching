import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft, Quote } from "lucide-react";

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function ContentBlock({ block, idx }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={idx}
          className="text-2xl sm:text-3xl font-black text-black mt-12 mb-5 font-[system-ui] leading-tight"
        >
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p key={idx} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-5 font-[system-ui]">
          {block.content}
        </p>
      );

    case "image":
      return (
        <figure key={idx} className="my-10">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="w-full rounded-2xl shadow-md object-cover max-h-[480px]"
          />
          {block.caption && (
            <figcaption className="text-sm text-gray-500 italic mt-3 text-center font-[system-ui]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "list":
      return (
        <ul key={idx} className="space-y-3 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#c09050] flex-shrink-0 mt-2.5" />
              <span className="text-gray-700 text-base sm:text-lg leading-relaxed font-[system-ui]">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "faq":
      return (
        <div key={idx} className="my-10">
          <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 font-[system-ui] leading-tight">
            {block.heading}
          </h2>
          <div className="space-y-4">
            {block.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-gray-50 border border-gray-100 p-5 sm:p-6"
              >
                <p className="font-bold text-black text-base sm:text-lg mb-2 font-[system-ui]">
                  {item.q}
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[system-ui]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostTemplate({ post }) {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative w-full min-h-[420px] sm:min-h-[480px] overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 pt-40 sm:pt-48 pb-10 sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-black uppercase tracking-wider text-[#e8c383] mb-4 font-[system-ui]">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-[system-ui] mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm font-[system-ui]">
              <span className="font-semibold text-white">{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BREADCRUMB / BACK LINK */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#c09050] transition-colors font-[system-ui]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to the blog
        </Link>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        {post.content.map((block, idx) => (
          <ContentBlock key={idx} block={block} idx={idx} />
        ))}
      </article>

      {/* AUTHOR BIO */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-2xl bg-[#fdf9f2] border border-[#c09050]/20 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-14 h-14 rounded-full bg-[#c09050]/15 flex items-center justify-center flex-shrink-0">
            <Quote className="w-6 h-6 text-[#c09050]" />
          </div>
          <div>
            <p className="font-black text-black text-lg font-[system-ui]">{post.author}</p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed font-[system-ui]">
              Licensed clinical therapist and transformational coach specializing in trauma-informed care and ART, licensed in New York (#098940), New Jersey (#44SL06739500), and Rhode Island (#ISW04317).{" "}
              <Link to="/about" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2 font-semibold text-[#c09050]">
                More about Ayana
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 pb-16 pt-4">
        <div className="rounded-2xl bg-gradient-to-br from-black to-[#2a2016] p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 font-[system-ui]">
            Ready to talk it through—your way?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto font-[system-ui]">
            A free 15-minute consultation is a no-pressure way to ask questions and see if ART is the right fit for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://calendly.com/manifestcoachingllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold bg-[#c09050] text-white hover:bg-[#d4a84b] transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            {post.hubLink && (
              <Link
                to={post.hubLink.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold border-2 border-white/30 text-white hover:border-white transition-all duration-300"
              >
                {post.hubLink.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
