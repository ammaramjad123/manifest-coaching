import { next } from "@vercel/functions";

// Matches known link-preview/crawler bots that do NOT execute JavaScript.
// WhatsApp, iMessage, Slack, LinkedIn, Twitter/X, Telegram, Discord, most
// SEO/rich-result tools, and AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
// etc.) only ever read the raw HTML response, never the React-rendered
// <head> tags — so for these user agents we return a small static HTML
// document with the correct per-page title/meta/OG tags instead of letting
// the request fall through to the SPA's index.html (which has none of that
// until JavaScript runs). Googlebot/Bingbot are included too: they do
// eventually render JS, but giving them the real tags on first fetch avoids
// relying on that slower second-pass render for a young, low-authority site.
const BOT_UA_PATTERN =
  /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Slackbot|Discordbot|SkypeUriPreview|Applebot|Pinterest|redditbot|vkShare|W3C_Validator|Google-InspectionTool|GoogleOther|Bingbot|iMessage|Googlebot|Bitrix|Line\/|Snapchat|SocialShare|GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai|PerplexityBot|Perplexity-User|Google-Extended|CCBot|Bytespider|Amazonbot|YandexBot|DuckDuckBot/i;

const SITE_IMAGE = "https://www.thepeacepractice.me/og-image.jpg";
const SITE_IMAGE_ALT = "The Peace Practice — Ayana Foluke McKanney, LCSW";

// Kept in sync manually with the `content` fields of each post object in
// src/components/blogPosts.jsx. If you add a new blog post, add its entry
// here too — otherwise share previews/bot fetches for that post will fall
// back to the generic site-wide page below instead of post-specific tags.
const POSTS = {
  "imposter-syndrome-lives-in-your-body": {
    title: "How to Actually Move Imposter Syndrome | Peace Practice",
    description:
      "Imposter syndrome isn't just a mindset issue. It lives in your nervous system. Learn how SĀF-T helps you move it, not just manage it.",
    image: "https://www.thepeacepractice.me/blog/stress-hero-PsV8ypwsd-0-unsplash.jpg",
    imageAlt: "A man pressing his temples in genuine tension at his desk, alone",
    publishDate: "2026-08-05",
    updatedDate: "2026-08-05",
    author: "Ayana F. McKanney, LCSW",
  },
  "trauma-therapy-without-talking-about-it": {
    title: "Trauma Therapy Without Talking About It | Peace Practice",
    description:
      "ART lets you process trauma without retelling what happened. Learn how it works, how it differs from EMDR, and if it's right for you.",
    image: "https://www.thepeacepractice.me/blog/andy-feliciotti-B4aWPSPXcoY-unsplash.jpg",
    imageAlt: "Warm sunlight filtering through green leaves",
    publishDate: "2026-08-04",
    updatedDate: "2026-08-04",
    author: "Ayana F. McKanney, LCSW",
  },
  "panic-attacks-arent-a-breathing-problem": {
    title: "Panic Attacks Aren't a Breathing Problem | Peace Practice",
    description:
      "Breathing exercises don't stop panic attacks for everyone, especially when they keep recurring. Learn why, and how ART can help resolve the trigger behind them.",
    image: "https://www.thepeacepractice.me/blog/amir-maleky-bqCIPPvORmM-unsplash.jpg",
    imageAlt: "A man gripping his hair with both hands, head bowed in visible distress",
    publishDate: "2026-08-14",
    updatedDate: "2026-08-14",
    author: "Ayana F. McKanney, LCSW",
  },
};

// Static (non-blog) pages. Title/description text copied verbatim from each
// page component's own <title>/<meta name="description"> tags in
// src/pages/*.jsx — this does not introduce any new copy, it just exposes
// the same text that's already live to bots that can't run JavaScript.
const PAGES = {
  "/": {
    title: "The Peace Practice | Therapy, Coaching & Training",
    description:
      "Compassionate clinical therapy, transformational coaching, and professional training with Ayana F. McKanney, LCSW. Licensed in NY, NJ & RI with 26+ years of experience. Your journey, our partnership.",
  },
  "/services": {
    title: "Clinical Therapy, Coaching & Training | The Peace Practice",
    description:
      "Explore The Peace Practice's three core offerings: licensed clinical therapy, transformational coaching, and professional training & education with Ayana F. McKanney, LCSW.",
  },
  "/contact": {
    title: "Contact & Schedule a Consultation | The Peace Practice",
    description:
      "Reach out to The Peace Practice to schedule a free consultation with Ayana F. McKanney, LCSW. Licensed clinical therapy and coaching in NY, NJ & RI.",
  },
  "/about": {
    title: "About Ayana McKanney, LCSW | The Peace Practice",
    description:
      "Meet Ayana Foluke McKanney, LCSW — a licensed clinical social worker with 26+ years of experience grounded in compassion, integrity, and excellence. Licensed in NY, NJ & RI.",
  },
  "/specialties/process": {
    title: "Anxiety & Depression Therapy | The Peace Practice",
    description:
      "Understanding and treating anxiety and depression with licensed clinical therapy from Ayana F. McKanney, LCSW. Compassionate, evidence-based care in NY, NJ & RI.",
  },
  "/specialties/trauma-ptsd": {
    title: "Trauma & PTSD Therapy | The Peace Practice",
    description:
      "Specialized trauma and PTSD treatment with Ayana F. McKanney, LCSW, using evidence-based clinical approaches. Licensed therapy in NY, NJ & RI.",
  },
  "/specialties/women-issues": {
    title: "Therapy for Women's Issues | The Peace Practice",
    description:
      "Clinical therapy addressing women's mental health, motherhood, and life transitions with Ayana F. McKanney, LCSW. Licensed in NY, NJ & RI.",
  },
  "/specialties/life-coaching": {
    title: "Transformational Life Coaching | The Peace Practice",
    description:
      "Transformational coaching using the MANIFEST Method to help you move from functioning to flourishing, with Ayana F. McKanney, LCSW.",
  },
  "/specialties/partnership": {
    title: "Immigration Psychological Evaluations NY, NJ & RI | The Peace Practice",
    description:
      "Comprehensive, defensible psychological evaluations for asylum, VAWA, and extreme hardship immigration cases from a licensed LCSW in New York, New Jersey, and Rhode Island.",
  },
  "/faq": {
    title: "Frequently Asked Questions | The Peace Practice",
    description:
      "Answers to common questions about therapy, coaching, licensing, insurance, and what to expect when working with The Peace Practice.",
  },
  "/specialties/act": {
    title: "Acceptance & Commitment Therapy (ACT) | The Peace Practice",
    description:
      "ACT teaches psychological flexibility — staying present with difficult thoughts and feelings while committing to a values-aligned life. Evidence-based therapy with Ayana F. McKanney, LCSW.",
  },
  "/specialties/dbt": {
    title: "Dialectical Behavior Therapy (DBT) | The Peace Practice",
    description:
      "Evidence-based DBT combining cognitive-behavioral techniques with radical acceptance and mindfulness, offered by Ayana F. McKanney, LCSW.",
  },
  "/specialties/art": {
    title: "Accelerated Resolution Therapy (ART) | The Peace Practice",
    description:
      "ART is a peer-reviewed therapy that rapidly resolves distressing memories, often in as few as 1-5 sessions, with Ayana F. McKanney, LCSW.",
  },
  "/specialties/inclusive-affirming-care": {
    title: "Inclusive & Affirming Care | The Peace Practice",
    description:
      "Culturally responsive clinical care that honors your race, faith, identity, and lived experience as part of your healing, with Ayana F. McKanney, LCSW.",
  },
  "/specialties/safety-sensation": {
    title: "SĀF-T: Sensations Awareness Focused Technique | The Peace Practice",
    description:
      "SĀF-T is a somatic component of the ART® protocol that targets distressing body sensations directly to promote nervous system regulation, with Ayana F. McKanney, LCSW.",
  },
  "/specialties/barter-balance": {
    title: "bARTer Balance & ART Training for Therapists | The Peace Practice",
    description:
      "A peer exchange program and ART® certification training for ART-certified therapists, offered by Ayana F. McKanney, LCSW.",
  },
  "/specialties/manifest-method": {
    title: "The MANIFEST Method | The Peace Practice",
    description:
      "The MANIFEST Method is Ayana F. McKanney's proprietary transformational coaching framework, guiding clients from core motivation through lasting fulfillment.",
  },
  "/blog": {
    title: "Blog | The Peace Practice",
    description:
      "Insights on trauma, anxiety, coaching, and evidence-based healing from Ayana F. McKanney, LCSW — licensed clinical therapist in NY, NJ & RI.",
  },
};

export const config = {
  matcher: [
    "/",
    "/services",
    "/contact",
    "/about",
    "/faq",
    "/blog",
    "/blog/:slug",
    "/specialties/process",
    "/specialties/trauma-ptsd",
    "/specialties/women-issues",
    "/specialties/life-coaching",
    "/specialties/partnership",
    "/specialties/act",
    "/specialties/dbt",
    "/specialties/art",
    "/specialties/inclusive-affirming-care",
    "/specialties/safety-sensation",
    "/specialties/barter-balance",
    "/specialties/manifest-method",
  ],
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

function renderPage({ title, description, canonical, image, imageAlt, type, extra = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${canonical}" />
<meta property="og:type" content="${type}" />
<meta property="og:site_name" content="The Peace Practice" />
<meta property="og:title" content="${escapeHtml(title)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${image}" />
<meta property="og:image:secure_url" content="${image}" />
<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />
<meta property="og:locale" content="en_US" />
${extra}<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${image}" />
<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />
</head>
<body>
<h1>${escapeHtml(title.split(" | ")[0])}</h1>
<p>${escapeHtml(description)}</p>
<a href="${canonical}">Visit the full page</a>
</body>
</html>`;
}

export default function middleware(request) {
  const ua = request.headers.get("user-agent") || "";
  if (!BOT_UA_PATTERN.test(ua)) {
    return next();
  }

  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, "") || "/";

  if (pathname.startsWith("/blog/") && pathname !== "/blog") {
    const slug = pathname.replace(/^\/blog\//, "");
    const post = POSTS[slug];
    if (!post) return next();

    const pageUrl = `https://www.thepeacepractice.me/blog/${slug}`;
    const extra = `<meta property="article:published_time" content="${post.publishDate}" />
<meta property="article:modified_time" content="${post.updatedDate}" />
<meta property="article:author" content="${escapeHtml(post.author)}" />
`;
    const html = renderPage({
      title: post.title,
      description: post.description,
      canonical: pageUrl,
      image: post.image,
      imageAlt: post.imageAlt,
      type: "article",
      extra,
    });
    return new Response(html, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  const page = PAGES[pathname];
  if (!page) return next();

  const pageUrl = `https://www.thepeacepractice.me${pathname === "/" ? "/" : pathname}`;
  const html = renderPage({
    title: page.title,
    description: page.description,
    canonical: pageUrl,
    image: SITE_IMAGE,
    imageAlt: SITE_IMAGE_ALT,
    type: "website",
  });
  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
