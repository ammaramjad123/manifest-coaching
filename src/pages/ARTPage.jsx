import SpecialtyPageTemplate from '../components/SpecialtyPageTemplate';
import { Zap, Shield, Brain } from 'lucide-react';

const data = {
  badge: "Accelerated Resolution Therapy — Facilitated Through RCRR",
  titleLine1: "Accelerated",
  titleLine2: "Resolution Therapy®",
  intro: "ART® is a breakthrough, peer-reviewed therapy that rapidly reprograms the way distressing images and memories are stored in the brain — often resolving complex trauma in as few as 1 to 5 sessions. No extensive verbal processing of trauma is required. The results are direct, measurable, and lasting.",
  heroImage: "/new/zach-key-rKE6rXOl14U-unsplash.jpg",

  sections: [
    {
      subtitle: "What Is ART",
      title: "Replace the Images. Keep the Memory. Release the Pain.",
      body: "ART® targets the specific images stored in the brain that carry the emotional charge of a traumatic experience. By reprogramming these images through guided bilateral eye movements and voluntary image replacement, the emotional pain attached to the memory dissolves — while the factual memory itself remains fully intact. You are not asked to recount your trauma in detail. You are guided to resolve it.",
      stat: "Most clients report significant, measurable relief within the first 1–3 sessions",
      imageLeft: false,
      image: "/new/jakob-braun-HfOOKAPsE28-unsplash.jpg"
    },
    {
      subtitle: "Who Benefits",
      title: "ART Has a Broad, Peer-Reviewed Evidence Base",
      imageLeft: true,
      image: "/new/priscilla-du-preez-aPa843frIzI-unsplash.jpg",
      items: [
        "PTSD & complex trauma",
        "Anxiety & panic disorders",
        "Depression",
        "Phobias & irrational fears",
        "Grief & complicated loss",
        "Sleep disturbances & nightmares",
        "Addictions & substance use",
        "First responders, military & veterans"
      ]
    },
    {
      subtitle: "How ART Works",
      title: "Three Principles That Drive Rapid Results",
      imageLeft: false,
      image: "/new/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg",
      approaches: [
        {
          icon: Zap,
          name: "Rapid & Targeted Resolution",
          desc: "ART® targets the specific images stored in the brain that carry the emotional charge of a traumatic experience. By reprogramming these images, the emotional pain dissolves while the factual memory remains fully intact. Resolution that once took years of traditional therapy can happen in a matter of sessions."
        },
        {
          icon: Shield,
          name: "Client-Controlled Throughout",
          desc: "In ART®, you remain in complete control throughout the process. You are never required to verbally describe your trauma in detail. Voluntary image replacement — chosen by you, guided by the therapist — replaces distressing mental images with ones you select. The therapist sets the structure; you drive the content."
        },
        {
          icon: Brain,
          name: "Broadly Evidence-Based",
          desc: "Peer-reviewed research published in multiple clinical journals supports ART®'s effectiveness for PTSD, depression, anxiety disorders, phobias, grief, sleep disturbance, and addiction. It is one of the most rigorously studied rapid-resolution therapies available — not an alternative approach, but a clinically validated one."
        }
      ]
    },
    {
      subtitle: "What to Expect",
      title: "ART in Practice: What a Session Looks Like",
      body: "Initial ART sessions are 90 minutes to allow full protocol completion. You will be guided through bilateral eye movements while holding the distressing image or memory in mind. At key moments, you will be invited to replace those images with ones of your own choosing — creating new neural pathways without having to relive the trauma verbally. Most clients leave their first session noticeably lighter. ART is facilitated through RCRR by a Master ART Trainer — the highest level of certification available.",
      stat: "Facilitated through RCRR by a Master ART Trainer — the highest certification level",
      imageLeft: true,
      image: "/new/javardh-FL6rma2jePU-unsplash.jpg"
    }
  ],

  quote: {
    text: "The memory stays. The pain does not have to.",
    author: "The Core Promise of ART®"
  },

  faqs: [
    {
      q: "Do I have to talk about my trauma in detail?",
      a: "No. This is one of the most important distinctions of ART®. You are not required to verbally describe or recount your trauma in detail. The process works with the images stored in the brain — not the words. Many clients find this deeply relieving, especially those who have felt re-traumatized by traditional talk therapy."
    },
    {
      q: "How many sessions will I need?",
      a: "ART® is designed to resolve targeted issues in 1–5 sessions. Complex or layered trauma may require more. The efficiency of ART is one of its defining strengths — significant relief is often experienced within the first session, and most clients complete treatment in a fraction of the time traditional therapy would require."
    },
    {
      q: "Is ART the same as EMDR?",
      a: "ART® and EMDR both use bilateral eye movements and target trauma stored in the brain, but they differ significantly in protocol. ART® includes specific voluntary image replacement techniques, is typically faster, and does not require detailed verbal processing. ART® is independently peer-reviewed and has its own distinct evidence base."
    },
    {
      q: "What does 'facilitated through RCRR' mean?",
      a: "RCRR (Rosenzweig Center for Rapid Recovery) is the leading ART certification and training body. Ayana Foluke McKanney is a Master ART Trainer — the highest level of certification available — and facilitates all ART sessions and professional trainings under RCRR's clinical standards."
    }
  ],

  ctaIcon: Zap,
  ctaHeading: "Ready to Resolve What Words Couldn't Touch?",
  ctaBody: "Book a free 15-minute alignment call to see if ART® is the right fit for what you are carrying. Initial ART sessions are 90 minutes.",
  ctaBgImage: "/new/zach-key-rKE6rXOl14U-unsplash.jpg"
};

export default function ARTPage() {
  return <SpecialtyPageTemplate data={data} />;
}
