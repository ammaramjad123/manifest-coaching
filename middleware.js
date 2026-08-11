import { next } from "@vercel/functions";

// Matches known link-preview/crawler bots that do NOT execute JavaScript.
// WhatsApp, iMessage, Slack, LinkedIn, Twitter/X, Telegram, Discord, and
// most SEO/rich-result tools only ever read the raw HTML response, never
// the React-rendered <head> tags — so for these user agents we return a
// small static HTML document with the correct per-post OG/Twitter tags
// instead of letting the request fall through to the SPA's index.html.
const BOT_UA_PATTERN =
  /facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|TelegramBot|Slackbot|Discordbot|SkypeUriPreview|Applebot|Pinterest|redditbot|vkShare|W3C_Validator|Google-InspectionTool|GoogleOther|Bingbot|iMessage|Googlebot|Bitrix|Line\/|Snapchat|SocialShare/i;

// Kept in sync manually with the `content` fields of each post object in
// src/components/blogPosts.jsx. If you add a new blog post, add its entry
// here too — otherwise share previews for that post will fall back to the
// site-wide logo image (still correct, just not post-specific).
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
};

export const config = {
  matcher: "/blog/:slug",
};

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );
}

export default function middleware(request) {
  const ua = request.headers.get("user-agent") || "";
  if (!BOT_UA_PATTERN.test(ua)) {
    return next();
  }

  const url = new URL(request.url);
  const slug = url.pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const post = POSTS[slug];
  if (!post) {
    return next();
  }

  const pageUrl = `https://www.thepeacepractice.me/blog/${slug}`;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>${escapeHtml(post.title)}</title>
<meta name="description" content="${escapeHtml(post.description)}" />
<link rel="canonical" href="${pageUrl}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="The Peace Practice" />
<meta property="og:title" content="${escapeHtml(post.title)}" />
<meta property="og:description" content="${escapeHtml(post.description)}" />
<meta property="og:url" content="${pageUrl}" />
<meta property="og:image" content="${post.image}" />
<meta property="og:image:secure_url" content="${post.image}" />
<meta property="og:image:alt" content="${escapeHtml(post.imageAlt)}" />
<meta property="og:locale" content="en_US" />
<meta property="article:published_time" content="${post.publishDate}" />
<meta property="article:modified_time" content="${post.updatedDate}" />
<meta property="article:author" content="${escapeHtml(post.author)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(post.title)}" />
<meta name="twitter:description" content="${escapeHtml(post.description)}" />
<meta name="twitter:image" content="${post.image}" />
<meta name="twitter:image:alt" content="${escapeHtml(post.imageAlt)}" />
</head>
<body>
<h1>${escapeHtml(post.title)}</h1>
<p>${escapeHtml(post.description)}</p>
<a href="${pageUrl}">Read the full article</a>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
