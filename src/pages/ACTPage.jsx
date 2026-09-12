import { images } from "../config/siteImages";
import SpecialtyPageTemplate from '../components/SpecialtyPageTemplate';
import { Brain, Compass, Target } from 'lucide-react';

const data = {
  badge: "Evidence-Based Clinical Approach",
  titleLine1: "Acceptance &",
  titleLine2: "Commitment Therapy",
  intro: "ACT teaches psychological flexibility — the ability to be fully present with difficult thoughts and feelings without being controlled by them, while committing to actions aligned with your deepest values. It is not about eliminating pain; it is about building a life worth living alongside it.",
  heroImage: images.act.hero,

  sections: [
    {
      subtitle: "What Is ACT",
      title: "Stop Fighting Your Mind. Start Living Your Values.",
      body: "ACT is a third-wave cognitive-behavioral therapy grounded in decades of peer-reviewed research. Unlike earlier CBT approaches, ACT does not try to eliminate unwanted thoughts and feelings. Instead, it teaches you to change your relationship to those experiences — stepping back from unhelpful mental patterns while moving forward on what truly matters to you. The result is not a quieter mind. It is a freer one.",
      stat: "Ranked among the most empirically supported psychotherapies by APA Division 12",
      imageLeft: false,
      image: images.act.section1
    },
    {
      subtitle: "Who Benefits",
      title: "ACT Works Across a Wide Range of Human Struggles",
      imageLeft: true,
      image: images.act.section2,
      items: [
        "Anxiety, worry & chronic overthinking",
        "Depression & persistent low mood",
        "Grief & complicated loss",
        "Trauma responses",
        "OCD & intrusive thoughts",
        "Life transitions & identity shifts",
        "Burnout & workplace stress"
      ]
    },
    {
      subtitle: "The Three Pillars",
      title: "Accept. Defuse. Commit.",
      imageLeft: false,
      image: images.act.section3,
      approaches: [
        {
          icon: Brain,
          name: "Accept — Make Room for What Is",
          desc: "Acceptance is the willingness to make room for uncomfortable thoughts, feelings, and sensations without struggling against them. The struggle is often the source of additional suffering. We stop wasting energy fighting experiences we cannot control, and redirect that energy toward a meaningful life."
        },
        {
          icon: Compass,
          name: "Defuse — Step Back From Your Thoughts",
          desc: "Cognitive defusion creates distance between you and your thoughts. Rather than being trapped inside a story your mind is telling, you learn to observe thoughts as passing mental events — not facts. This shift alone can dissolve the grip of anxiety, self-criticism, and ruminative thinking."
        },
        {
          icon: Target,
          name: "Commit — Act on What Matters",
          desc: "Values clarification and committed action form the backbone of ACT. We identify what matters most — not what you think should matter, but what genuinely moves you — and build consistent, value-driven behaviors that close the gap between who you are today and who you want to become."
        }
      ]
    },
    {
      subtitle: "What to Expect",
      title: "A Therapy That Moves With You",
      body: "Sessions integrate mindfulness practices, experiential metaphors, and values-based action planning. You will learn to defuse from unhelpful mental patterns, clarify what truly matters, and build behavioral experiments that bridge the gap between pain and purpose. The therapeutic relationship is collaborative, non-judgmental, and anchored in your lived experience — not a textbook version of it.",
      stat: "Structured, practical, and adaptable to your pace and goals",
      imageLeft: true,
      image: images.act.section4
    }
  ],

  quote: {
    text: "The goal is not to get the content of your thoughts right. It is to change your relationship to your thoughts entirely.",
    author: "The Foundation of ACT"
  },

  faqs: [
    {
      q: "Is ACT right for me if I've tried CBT before?",
      a: "ACT complements and extends traditional CBT by adding acceptance, mindfulness, and values-based action rather than focusing primarily on thought-challenging. Many clients who felt CBT was not quite the right fit find that ACT's approach resonates more deeply — especially if the struggle against difficult thoughts was itself exhausting."
    },
    {
      q: "How is ACT different from mindfulness-based therapy?",
      a: "Mindfulness is one component of ACT, but ACT goes further. It combines mindfulness skills with a clear framework for clarifying personal values and building committed action. The goal is not just present-moment awareness — it is using that awareness to live a more meaningful, values-aligned life."
    },
    {
      q: "How many sessions does ACT typically take?",
      a: "ACT can be effective in as few as 8–12 sessions for targeted concerns, though this varies by presenting issue and personal goals. Some clients work within an ACT framework over a longer course of therapy as the skills deepen over time. This will be discussed collaboratively during your first sessions."
    }
  ],

  ctaIcon: Target,
  ctaHeading: "Ready to Stop Fighting and Start Living?",
  ctaBody: "The first step is a free 15-minute alignment call. Together, we will explore whether ACT is the right fit for where you are right now.",
  ctaBgImage: images.act.cta
};

export default function ACTPage() {
  return (
    <>
      <title>Acceptance & Commitment Therapy (ACT) | The Peace Practice</title>
      <meta name="description" content="ACT teaches psychological flexibility — staying present with difficult thoughts and feelings while committing to a values-aligned life. Evidence-based therapy with Ayana F. McKanney, LCSW." />
      <link rel="canonical" href="https://www.thepeacepractice.me/specialties/act" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Peace Practice" />
      <meta property="og:title" content="Acceptance & Commitment Therapy (ACT) | The Peace Practice" />
      <meta property="og:description" content="ACT teaches psychological flexibility — staying present with difficult thoughts and feelings while committing to a values-aligned life. Evidence-based therapy with Ayana F. McKanney, LCSW." />
      <meta property="og:url" content="https://www.thepeacepractice.me/specialties/act" />
      <meta property="og:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:secure_url" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Acceptance & Commitment Therapy (ACT) | The Peace Practice" />
      <meta name="twitter:description" content="ACT teaches psychological flexibility — staying present with difficult thoughts and feelings while committing to a values-aligned life. Evidence-based therapy with Ayana F. McKanney, LCSW." />
      <meta name="twitter:image" content="https://www.thepeacepractice.me/og-image.jpg" />
      <meta name="twitter:image:alt" content="The Peace Practice — Ayana Foluke McKanney, LCSW" />
      <SpecialtyPageTemplate data={data} />
    </>
  );
}
