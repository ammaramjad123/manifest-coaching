import Hero from '../components/Hero';
import ThreeDoors from '../components/ThreeDoors';
import Specialties from '../components/Specialties';
import PathForwardAssessment from '../components/PathForwardAssessment';
import TestimonialsSection from '../components/TestimonialsSection';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeDoors />
      <Specialties />
      <PathForwardAssessment />
      <TestimonialsSection />
      <Contact />
    </>
  );
}