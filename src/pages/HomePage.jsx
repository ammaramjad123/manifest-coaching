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
      <Hero />
      <ThreeDoors />
      <Specialties />
      <PathForwardAssessment />
      <TestimonialsSection />
      <Contact />
    </>
  );
}