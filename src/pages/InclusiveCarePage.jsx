import { images } from "../config/siteImages";
import SpecialtyPageTemplate from '../components/SpecialtyPageTemplate';
import { Globe, Heart, Sparkles, Star } from 'lucide-react';

const data = {
  badge: "Culturally Responsive Clinical Practice",
  titleLine1: "Inclusive &",
  titleLine2: "Affirming Care",
  intro: "Healing does not happen in a vacuum. Your cultural heritage, race, lived experiences, faith, and personal story are the architecture of who you are. The Peace Practice is committed to a space where every dimension of your identity is not just acknowledged — it is honored as a vital part of your transformation.",
  heroImage: images.inclusive.hero,

  sections: [
    {
      subtitle: "The Foundation",
      title: "Your Identity Is Not Incidental to Your Healing.",
      body: "Too many clinicians approach identity as background noise — something to acknowledge and set aside. This practice takes the opposite view: your cultural background, faith tradition, community context, and lived experience are central to understanding your inner world and to any meaningful therapeutic work. A diagnosis does not live in isolation. Neither do you. Your history is a narrative, not a limitation.",
      stat: "Culturally responsive care — woven into every session, not added as an afterthought",
      imageLeft: false,
      image: images.inclusive.section1
    },
    {
      subtitle: "Who This Serves",
      title: "Affirming Care for a Wide Range of Lived Experiences",
      imageLeft: true,
      image: images.inclusive.section2,
      items: [
        "Multicultural & bicultural individuals",
        "First & second-generation immigrants",
        "Black, Indigenous & communities of color",
        "People of faith & spiritual traditions",
        "High-achieving professionals from underrepresented backgrounds",
        "Individuals navigating acculturation stress",
        "Those who have felt unseen or misunderstood in past therapy",
        "Anyone whose full identity deserves to be seen in the room"
      ]
    },
    {
      subtitle: "Clinical Pillars",
      title: "Three Pillars of Truly Affirming Practice",
      imageLeft: false,
      image: images.inclusive.section3,
      approaches: [
        {
          icon: Globe,
          name: "Multicultural & Identity-Affirming Care",
          desc: "Our approach is rooted in cultural humility — ensuring the therapeutic partnership is a safe container for exploring the complexities of identity, systemic challenges, and the unique resilience required to navigate diverse environments. Your background is not managed around; it is honored as an irreplaceable part of your healing."
        },
        {
          icon: Heart,
          name: "Spirituality & Religious Integration",
          desc: "For many, healing is deeply tied to spiritual or religious beliefs. Whether you seek to reconcile faith with current life challenges or want to draw on your spiritual practice as a source of grounding and meaning, this is a space where your values and your vision for healing can coexist — without judgment."
        },
        {
          icon: Sparkles,
          name: "Strength-Based Therapy",
          desc: "While we address pain and difficulty, our primary lens is strength-based. You are already the architect of your own survival. Our role is to help you identify the internal resources, resilience, and wisdom you already carry — and amplify them. We move away from a deficit model and toward a mastery model."
        },
        {
          icon: Star,
          name: "Resilience & Post-Traumatic Growth",
          desc: "Communities that have navigated systemic adversity, historical trauma, and ongoing inequity carry extraordinary resilience — resilience that is often unrecognized and underutilized in traditional clinical models. This practice centers that resilience as a clinical asset. We work not only to address what has caused harm, but to actively cultivate the post-traumatic growth that is already present within you."
        }
      ]
    },
    {
      subtitle: "What to Expect",
      title: "A Therapeutic Space That Sees You Whole",
      body: "Sessions are characterized by cultural humility — a posture of ongoing learning rather than assumed expertise about your experience. You will be encouraged to share and express your values, your culture, your heritage. The work begins from genuine curiosity, respect, and clinical competence. What has felt like a burden in other rooms can become the starting point for profound growth here.",
      stat: "Cultural humility is not a skill we demonstrate once — it is a practice we commit to in every session",
      imageLeft: true,
      image: images.inclusive.section4
    }
  ],

  quote: {
    text: "You should not have to choose between your healing and your identity. The most effective therapy holds both.",
    author: "The Peace Practice"
  },

  faqs: [
    {
      q: "What does 'culturally affirming' actually mean in practice?",
      a: "It means your cultural background, family dynamics, community context, and identity are treated as central to your clinical picture — not peripheral. It means the therapist does not assume a dominant-culture framework as the default. It means your lived experience is taken seriously as evidence, not explained away or minimized."
    },
    {
      q: "Can my faith or spiritual practice be part of therapy?",
      a: "Yes. For clients whose faith is central to their lives, spiritual and religious frameworks are welcomed and integrated into the therapeutic work — not pathologized or treated as obstacles to work around. This includes traditional religious frameworks, faith-based worldviews, and personal spiritual philosophies."
    },
    {
      q: "I've tried therapy before and felt unseen. How is this different?",
      a: "That experience is more common than it should be — and it is one of the core motivations behind this practice. Here, cultural context is not a footnote; it is a starting point. The therapeutic relationship is built on genuine curiosity and humility about your specific lived experience, not assumptions about what your background means or implies."
    },
    {
      q: "Do I need to have an 'identity issue' to seek affirming care?",
      a: "Not at all. Anyone who has ever felt that therapy was designed for someone else — that the frameworks, examples, or assumptions felt foreign to their experience — will benefit from culturally responsive care. You do not need to present an identity-based concern to deserve a therapist who sees you as a whole person."
    }
  ],

  ctaIcon: Globe,
  ctaHeading: "You Deserve Therapy That Sees You Whole.",
  ctaBody: "Start with a free 15-minute alignment call. Explore whether this is the space where your full self — every dimension of it — is genuinely welcome.",
  ctaBgImage: images.inclusive.cta
};

export default function InclusiveCarePage() {
  return <SpecialtyPageTemplate data={data} />;
}
