import SpecialtyPageTemplate from '../components/SpecialtyPageTemplate';
import { Brain, Shield, Heart, Users } from 'lucide-react';

const data = {
  badge: "Evidence-Based Clinical Approach",
  titleLine1: "Dialectical",
  titleLine2: "Behavior Therapy",
  intro: "DBT is a comprehensive, evidence-based therapy built on one powerful dialectic: you are doing the best you can, AND you can do better. It combines cognitive-behavioral techniques with radical acceptance and mindfulness to give you a full toolkit for building a life worth living — even in the most emotionally intense seasons.",
  heroImage: "/new/pawel-czerwinski-WVEKM88v9VM-unsplash.jpg",

  sections: [
    {
      subtitle: "The Foundation",
      title: "Change AND Acceptance. Both Are True.",
      body: "DBT was developed by Dr. Marsha Linehan for individuals with high emotional sensitivity — and has since been validated across a broad spectrum of presentations. Its core insight is the dialectic: two seemingly opposite truths can coexist. You are doing the best you can right now, and there are skills that can help you do better. Neither truth cancels the other. Both are held with equal care.",
      stat: "One of the most rigorously researched therapy models in clinical practice",
      imageLeft: false,
      image: "/new/lesly-juarez-DFtjXYd5Pto-unsplash.jpg"
    },
    {
      subtitle: "Who Benefits",
      title: "DBT Was Designed for Emotional Intensity",
      imageLeft: true,
      image: "/new/deniz-altindas-t1XLQvDqt_4-unsplash.jpg",
      items: [
        "Intense or rapidly shifting emotions",
        "Impulsive behaviors or self-harm",
        "Relationship difficulties & conflict",
        "Borderline personality patterns",
        "Trauma survivors",
        "Eating concerns",
        "Suicidal ideation (with clinical safety planning)",
        "High-achievers under chronic emotional pressure"
      ]
    },
    {
      subtitle: "The Four Modules",
      title: "A Complete Toolkit for Every Season of Life",
      imageLeft: false,
      image: "/new/linus-nylund-Q5QspluNZmM-unsplash.jpg",
      approaches: [
        {
          icon: Brain,
          name: "Mindfulness — The Core Skill",
          desc: "Mindfulness is the foundation upon which all DBT skills are built — the ability to observe your experience without judgment and participate fully in your life. Learning to pause, notice, and choose your response rather than react from the emotional brain is transformative."
        },
        {
          icon: Shield,
          name: "Distress Tolerance — Survive Without Making It Worse",
          desc: "When emotional intensity is too high to think clearly, distress tolerance skills help you get through the moment without taking actions that create additional pain. These are not everyday coping tools — they are emergency protocols for the moments when the temperature is highest."
        },
        {
          icon: Heart,
          name: "Emotion Regulation — Change What Can Be Changed",
          desc: "Emotion regulation skills reduce vulnerability to intense emotional responses and help you change emotions when it serves you — rather than being swept along by them without choice or direction."
        },
        {
          icon: Users,
          name: "Interpersonal Effectiveness — Ask, Set Limits, Maintain Respect",
          desc: "These skills teach how to ask for what you need, set boundaries, maintain self-respect, and preserve important relationships — all at once, without sacrificing one for another."
        }
      ]
    },
    {
      subtitle: "What to Expect",
      title: "Structured, Compassionate, and Direct",
      body: "DBT sessions are structured and skill-focused. Diary card tracking between sessions helps identify patterns and triggers before they escalate. Behavioral chain analysis maps the full arc of crisis moments — so we can intervene earlier and more skillfully next time. Mindfulness practices are woven into every session. The therapeutic relationship is direct, deeply compassionate, and built on validation always paired with strategies for meaningful change.",
      stat: "Validation and change — held together, never one without the other",
      imageLeft: true,
      image: "/new/aakifah-shaikh-Dh1pFElYVpI-unsplash.jpg"
    }
  ],

  quote: {
    text: "You are doing the best you can. AND you can do better. These two truths do not cancel each other out — they complete each other.",
    author: "The Dialectic at the Heart of DBT"
  },

  faqs: [
    {
      q: "Is DBT only for people with Borderline Personality Disorder?",
      a: "No. While DBT was originally developed for BPD, its evidence base has expanded enormously. DBT is now a front-line treatment for eating disorders, PTSD, depression, substance use, and anyone struggling with emotional intensity, impulsivity, or difficult interpersonal patterns. A BPD diagnosis is not required to benefit from DBT."
    },
    {
      q: "What makes DBT different from standard CBT?",
      a: "Standard CBT focuses primarily on identifying and changing unhelpful thought patterns. DBT adds radical acceptance, distress tolerance, and interpersonal effectiveness skills — and centers the dialectic between change and acceptance as the therapeutic philosophy. Many clients find this balance more sustainable than a purely change-focused approach."
    },
    {
      q: "Will I need to be in a DBT skills group?",
      a: "Standard comprehensive DBT includes both individual therapy and a skills training group. Depending on your needs and presentation, individual DBT-informed therapy may be the right fit without a formal group component. This will be assessed collaboratively in your initial sessions."
    },
    {
      q: "How long does DBT treatment typically last?",
      a: "Full DBT is typically structured as a 6-to-12-month commitment, cycling through the four skill modules. DBT-informed individual therapy — which integrates the skills and philosophy without the full comprehensive structure — can be shorter and calibrated to your specific goals and timeline."
    }
  ],

  ctaIcon: Brain,
  ctaHeading: "Ready to Build a Life Worth Living?",
  ctaBody: "Start with a free 15-minute alignment call. We will explore whether DBT skills are the right foundation for where you are today.",
  ctaBgImage: "/new/pawel-czerwinski-WVEKM88v9VM-unsplash.jpg"
};

export default function DBTPage() {
  return <SpecialtyPageTemplate data={data} />;
}
