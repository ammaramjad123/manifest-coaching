import FAQSection from '../components/FAQSection';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between therapy and coaching?",
      "acceptedAnswer": { "@type": "Answer", "text": "Therapy focuses on healing past wounds, processing trauma, treating mental health conditions, and emotional regulation. It's a season of Restoration. Coaching (MANIFEST Method) is future-focused, helping you bridge the gap between where you are and where you want to be. It's a season of Expansion." }
    },
    {
      "@type": "Question",
      "name": "What states are you licensed in for therapy?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Peace Practice is licensed to provide clinical therapy in New York (#098940), New Jersey (#44SL06739500), and Rhode Island (#ISW04317). All therapy sessions are conducted virtually via a secure, HIPAA-compliant platform." }
    },
    {
      "@type": "Question",
      "name": "What therapeutic approaches do you use?",
      "acceptedAnswer": { "@type": "Answer", "text": "Evidence-based approaches used include Accelerated Resolution Therapy (ART®), SĀF-T, Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), and Mindfulness-Based Therapy." }
    },
    {
      "@type": "Question",
      "name": "Do you treat anxiety, depression, and trauma?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, anxiety, depression, and trauma are among the top specialties at The Peace Practice. Using evidence-based approaches, clients are helped to identify triggers, challenge negative thought patterns, and develop coping strategies that work." }
    },
    {
      "@type": "Question",
      "name": "What is the age range for therapy clients?",
      "acceptedAnswer": { "@type": "Answer", "text": "Clinical therapy services are available to individuals aged 17 and older." }
    },
    {
      "@type": "Question",
      "name": "What is the MANIFEST Method?",
      "acceptedAnswer": { "@type": "Answer", "text": "The MANIFEST Method is a proprietary coaching framework designed to help you bridge the gap between where you are and where you want to be. It's a high-accountability partnership focused on actionable steps, mindset shifts, and personal evolution." }
    },
    {
      "@type": "Question",
      "name": "Is coaching available nationwide?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! Transformational coaching is available nationwide via telehealth since it's consultative, not clinical, and not bound by state licensure." }
    },
    {
      "@type": "Question",
      "name": "Who is coaching for?",
      "acceptedAnswer": { "@type": "Answer", "text": "Coaching is ideal for those experiencing imposter syndrome, career transitions, feeling 'stuck', wanting peak performance, seeking self-actualization, or ready for personal evolution." }
    },
    {
      "@type": "Question",
      "name": "Do you accept insurance for coaching?",
      "acceptedAnswer": { "@type": "Answer", "text": "Coaching is private pay only. It's consultative, not clinical, so insurance does not apply. Packages are available for single sessions or multi-session bundles." }
    },
    {
      "@type": "Question",
      "name": "Do you accept insurance for therapy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, most major insurance plans are accepted including Aetna, Anthem, Blue Cross Blue Shield, Cigna, Optum, UnitedHealthcare, Oxford, Oscar, and more. Reach out to verify coverage." }
    },
    {
      "@type": "Question",
      "name": "Do you offer a free consultation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes! A free 15-minute consultation is offered to discuss your needs, answer questions, and determine if it's a good fit. Schedule directly through the Calendly link." }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation policy?",
      "acceptedAnswer": { "@type": "Answer", "text": "24 hours notice is required for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee." }
    },
    {
      "@type": "Question",
      "name": "Are sessions in-person or virtual?",
      "acceptedAnswer": { "@type": "Answer", "text": "All sessions are conducted virtually via a secure, HIPAA-compliant telehealth platform. This allows serving clients across NY, NJ, RI for therapy and nationwide for coaching." }
    },
    {
      "@type": "Question",
      "name": "How do I schedule an appointment?",
      "acceptedAnswer": { "@type": "Answer", "text": "Schedule a free consultation or coaching session directly through the Calendly link. For therapy clients, the intake process via Alma or Headway will be guided after the initial consultation." }
    },
    {
      "@type": "Question",
      "name": "How long are sessions?",
      "acceptedAnswer": { "@type": "Answer", "text": "Therapy sessions are typically 60 minutes. Coaching sessions range from 45-60 minutes depending on the package." }
    },
    {
      "@type": "Question",
      "name": "How do I know if I need therapy or coaching?",
      "acceptedAnswer": { "@type": "Answer", "text": "Take the 'Path Forward' assessment on this site. Mostly A's = Therapy (Restoration). Mostly B's = Coaching (Expansion). Many start with therapy, then transition to coaching." }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <title>Frequently Asked Questions | The Peace Practice</title>
      <meta name="description" content="Answers to common questions about therapy, coaching, licensing, insurance, and what to expect when working with The Peace Practice." />
      <link rel="canonical" href="https://www.thepeacepractice.me/faq" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Peace Practice" />
      <meta property="og:title" content="Frequently Asked Questions | The Peace Practice" />
      <meta property="og:description" content="Answers to common questions about therapy, coaching, licensing, insurance, and what to expect when working with The Peace Practice." />
      <meta property="og:url" content="https://www.thepeacepractice.me/faq" />
      <meta property="og:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:secure_url" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Frequently Asked Questions | The Peace Practice" />
      <meta name="twitter:description" content="Answers to common questions about therapy, coaching, licensing, insurance, and what to expect when working with The Peace Practice." />
      <meta name="twitter:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta name="twitter:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <FAQSection />
    </>
  );
}
