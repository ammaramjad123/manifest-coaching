import Hero from '../components/Hero';
import ThreeDoors from '../components/ThreeDoors';
import Specialties from '../components/Specialties';
import PathForwardAssessment from '../components/PathForwardAssessment';
import TestimonialsSection from '../components/TestimonialsSection';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <title>The Peace Practice — Therapy, Coaching & Training | Ayana F. McKanney, LCSW</title>
      <meta name="description" content="Compassionate clinical therapy, transformational coaching, and professional training with Ayana F. McKanney, LCSW. Licensed in NY, NJ & RI with 26+ years of experience. Your journey, our partnership." />
      <link rel="canonical" href="https://www.thepeacepractice.me/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Peace Practice" />
      <meta property="og:title" content="The Peace Practice — Therapy, Coaching & Training" />
      <meta property="og:description" content="Compassionate clinical therapy, transformational coaching, and professional training with Ayana F. McKanney, LCSW. Licensed in NY, NJ & RI. Your journey, our partnership." />
      <meta property="og:url" content="https://www.thepeacepractice.me/" />
      <meta property="og:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:secure_url" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Peace Practice — Therapy, Coaching & Training" />
      <meta name="twitter:description" content="Compassionate clinical therapy, transformational coaching, and professional training with Ayana F. McKanney, LCSW. Licensed in NY, NJ & RI." />
      <meta name="twitter:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta name="twitter:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <Hero />
      <ThreeDoors />
      <Specialties />
      <PathForwardAssessment />
      <TestimonialsSection />
      <Contact />
    </>
  );
}