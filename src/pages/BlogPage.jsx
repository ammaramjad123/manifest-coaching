import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "../components/blogPosts";

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <title>Blog | The Peace Practice</title>
      <meta
        name="description"
        content="Insights on trauma, anxiety, coaching, and evidence-based healing from Ayana F. McKanney, LCSW — licensed clinical therapist in NY, NJ & RI."
      />
      <link rel="canonical" href="https://www.thepeacepractice.me/blog" />

      <div className="bg-white min-h-screen">
        {/* HERO */}
        <div className="bg-gradient-to-br from-black to-[#2a2016] pt-40 sm:pt-48 pb-16 sm:pb-20">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c09050]/10 border border-[#c09050]/20 mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#c09050]">
                  From The Peace Practice
                </span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 font-[system-ui] leading-tight">
                The Blog
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto font-[system-ui]">
                Grounded, evidence-based writing on trauma, anxiety, and healing — from a licensed clinical therapist, not a search algorithm.
              </p>
            </motion.div>
          </div>
        </div>

        {/* POST GRID */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-black uppercase tracking-wider font-[system-ui]">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-[system-ui]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-black mb-2 leading-snug font-[system-ui] group-hover:text-[#c09050] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-[system-ui]">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c09050] mt-auto">
                      Read the article
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
