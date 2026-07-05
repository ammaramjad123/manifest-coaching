import { images, trainingLinks } from "../config/siteImages";
import SpecialtyPageTemplate from '../components/SpecialtyPageTemplate';
import { Activity, Zap, Shield } from 'lucide-react';

const data = {
  badge: "Keep the Knowledge, Lose the Pain™",
  titleLine1: "SĀF-T",
  titleLine2: "Sensations Awareness Focused Technique",
  intro: "SĀF-T — Sensations Awareness Focused Technique — is a somatic component drawn from the Basic ART® protocol. It targets distressing body sensations directly, working with the physical dimension of trauma to promote rapid calming and nervous system regulation — addressing the experience where it often lives first: in the body. No drugs. No hypnosis. Safe for adults and children.",
  heroImage: images.saft.hero,

  sections: [
    {
      subtitle: "What Is SĀF-T",
      title: "Move the Sensation. Reclaim the Calm.",
      body: "Trauma does not live only in the mind. It lives in the body — the chest that tightens at a memory, the gut that drops before a difficult conversation, the throat that constricts when safety feels uncertain. SĀF-T works at this level directly. Rather than simply talking about a feeling, we work with the physical sensation itself — using focused somatic awareness and bilateral stimulation to move and dissolve what words alone often cannot reach.",
      stat: "Rapid, within-session relief for body-held distress — without requiring verbal processing of the event",
      imageLeft: false,
      image: images.saft.section1
    },
    {
      subtitle: "Who Benefits",
      title: "For Those Whose Bodies Carry What the Mind Cannot Process",
      imageLeft: true,
      image: images.saft.section2,
      items: [
        "Trauma & PTSD body responses",
        "Panic attacks & acute anxiety",
        "Somatic & physical symptoms of distress",
        "Phobias with a strong body-sensation component",
        "Chronic stress & nervous system dysregulation",
        "Those who feel 'frozen' or 'stuck' in their body",
        "Clients for whom talk therapy alone feels insufficient",
        "First responders & high-intensity trauma exposure",
        "Adults and children of all ages",
        "Anyone seeking general relaxation & stress relief"
      ]
    },
    {
      subtitle: "How SĀF-T Works",
      title: "Three Phases of Somatic Resolution",
      imageLeft: false,
      image: images.saft.section3,
      approaches: [
        {
          icon: Activity,
          name: "Sensation Awareness — Find It First",
          desc: "SĀF-T begins by locating exactly where distress lives in the body — the tightness in the chest, the weight in the gut, the constriction in the throat. Precise somatic mapping gives us a direct access point to the experience, bypassing the limitations of verbal description."
        },
        {
          icon: Zap,
          name: "Focus Technique — Move What Is Stuck",
          desc: "Using guided eye movements and targeted somatic awareness, SĀF-T helps move stuck sensations through the nervous system. Most people find the movements very calming and are able to release the negative sensations they are feeling."
        },
        {
          icon: Shield,
          name: "Rapid Calming & Stabilization",
          desc: "SĀF-T is particularly powerful as a stabilization tool. Whether used as a standalone technique or woven into broader ART® treatment, it creates rapid nervous system regulation — especially valuable for clients experiencing acute distress, panic, somatic flashbacks, or body-held overwhelm that blocks forward movement."
        }
      ]
    },
    {
      subtitle: "What to Expect",
      title: "A Session Built Around Your Body's Intelligence",
      body: "Sessions begin with guided body-scan exercises to locate and name physical sensations precisely. Targeted bilateral stimulation then focuses on the physical experience of distress — not the narrative around it. You remain in full control throughout: voluntary movement and shifting of sensations guides the process, never the therapist's agenda. Rapid reduction in physical distress intensity within the session itself is characteristic of SĀF-T. It can be used as a standalone technique or integrated into a broader ART® treatment plan.",
      stat: "Can be used standalone or integrated into a full ART® treatment plan",
      imageLeft: true,
      image: images.saft.section4
    }
  ],

  quote: {
    text: "The body keeps the score. SĀF-T gives the body a way to finally settle it.",
    author: "The Peace Practice"
  },

  faqs: [
    {
      q: "Do I have to describe my trauma verbally to benefit from SĀF-T?",
      a: "No. SĀF-T works with the physical sensation of distress — not the verbal narrative of the traumatic event. You are guided to locate and work with what you feel in your body, not to recount or explain what happened. This makes SĀF-T particularly valuable for those who have felt retraumatized by talk-based approaches."
    },
    {
      q: "Is SĀF-T its own therapy or part of ART?",
      a: "SĀF-T is a somatic component drawn from the Basic ART® protocol. It can be used as a targeted standalone technique for acute body-based distress, or woven into a broader ART® treatment plan. Your clinician will assess which structure is most appropriate for your presenting concerns."
    },
    {
      q: "What does a SĀF-T session feel like?",
      a: "Most clients describe SĀF-T as a surprisingly direct experience — they locate a physical sensation, work with it through guided bilateral stimulation, and notice the sensation shift or dissolve within the session itself. The experience is typically described as calming rather than distressing, even when targeting deeply held tension."
    },
    {
      q: "How is SĀF-T different from general somatic therapy?",
      a: "SĀF-T is a structured, protocol-based technique with a specific clinical sequence: sensation awareness, bilateral stimulation, and voluntary movement of the sensory experience. It is not open-ended somatic exploration — it is a targeted, rapid intervention with a clear clinical framework drawn from the ART® evidence base."
    },
    {
      q: "How can I become certified in SĀF-T?",
      a: <>Ayana Foluke McKanney is a certified SĀF-T provider and trainer. SĀF-T training is open to professionals, paraprofessionals, and parents — coaches, first responders, clergy, educators, and healthcare professionals — no clinical license required. To register for a training facilitated by Ayana, visit the <a href={trainingLinks.saft} target="_blank" rel="noopener noreferrer" className="text-[#c09050] underline hover:text-[#d4a84b] transition-colors font-semibold">RCRR registration page</a>, select the training Ayana is offering, and complete your registration there. Training is $199.</>
    },
    {
      q: "Is SĀF-T a substitute for medical treatment?",
      a: "No. SĀF-T is not a substitute for medical intervention. If medical intervention is indicated, always seek a physician or ART therapist. SĀF-T is a relaxation and sensation-relief technique — it is not therapy, though it utilizes eye movements similar to those used in an ART® session."
    }
  ],

  ctaIcon: Activity,
  ctaHeading: "Ready to Let Your Body Finally Rest?",
  ctaBody: "Start with a free 15-minute alignment call to see whether SĀF-T is the right intervention for what your body is still holding.",
  ctaBgImage: images.saft.cta
};

export default function SAFTPage() {
  return <SpecialtyPageTemplate data={data} />;
}
