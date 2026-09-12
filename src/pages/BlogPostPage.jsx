import { useParams, Navigate } from "react-router-dom";
import { getPostBySlug } from "../components/blogPosts";
import BlogPostTemplate from "../components/BlogPostTemplate";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const url = `https://www.thepeacepractice.me/blog/${post.slug}`;
  const heroImageUrl = `https://www.thepeacepractice.me${post.heroImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.thepeacepractice.me${post.heroImage}`,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.thepeacepractice.me/about",
    },
    publisher: {
      "@type": "Organization",
      name: "The Peace Practice",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thepeacepractice.me/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <title>{post.metaTitle}</title>
      <meta name="description" content={post.metaDescription} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="The Peace Practice" />
      <meta property="og:title" content={post.metaTitle} />
      <meta property="og:description" content={post.metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={heroImageUrl} />
      <meta property="og:image:secure_url" content={heroImageUrl} />
      <meta property="og:image:alt" content={post.heroImageAlt} />
      <meta property="og:locale" content="en_US" />
      <meta property="article:published_time" content={post.publishDate} />
      <meta property="article:modified_time" content={post.updatedDate} />
      <meta property="article:author" content={post.author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.metaTitle} />
      <meta name="twitter:description" content={post.metaDescription} />
      <meta name="twitter:image" content={heroImageUrl} />
      <meta name="twitter:image:alt" content={post.heroImageAlt} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <BlogPostTemplate post={post} />
    </>
  );
}
