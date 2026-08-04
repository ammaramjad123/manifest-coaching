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
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <BlogPostTemplate post={post} />
    </>
  );
}
