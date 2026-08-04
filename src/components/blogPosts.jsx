import { images } from "../config/siteImages";
import { Link } from "react-router-dom";

export const blogPosts = [
  {
    slug: "trauma-therapy-without-talking-about-it",
    title: "Trauma Therapy That Doesn't Require You to Talk About What Happened",
    metaTitle: "Trauma Therapy Without Talking About It | Peace Practice",
    metaDescription: "ART lets you process trauma without retelling what happened. Learn how it works, how it differs from EMDR, and if it's right for you.",
    excerpt: "You don't have to describe what happened to heal from it. Here's how Accelerated Resolution Therapy works, how it's different from EMDR, and how to know if it's right for you.",
    category: "Trauma & PTSD",
    author: "Ayana F. McKanney, LCSW",
    publishDate: "2026-08-05",
    updatedDate: "2026-08-05",
    readTime: "7 min read",
    heroImage: images.blog.traumaWithoutTalking.hero,
    heroImageAlt: "Warm sunlight filtering through green leaves",
    hubLink: { href: "/specialties/art", label: "Explore ART (Accelerated Resolution Therapy)" },

    content: [
      {
        type: "paragraph",
        content:
          "If the idea of therapy makes you picture retelling everything—every detail, in order, out loud, to someone you just met—it makes sense that you've been putting it off. For a lot of people, that expectation alone is enough to keep them stuck. Here's what most people don't know: you don't have to describe what happened to heal from it. Accelerated Resolution Therapy (ART) was built around exactly that. You stay in control of what you say and don't say. Your nervous system does the processing; your voice doesn't have to.",
      },
      {
        type: "heading",
        text: "Why “Just Talk About It” Isn't the Only Path",
      },
      {
        type: "paragraph",
        content:
          "Talk therapy works well for a lot of people, and if it's working for you, that's genuinely good news. But for many trauma survivors, being asked to narrate the event in detail doesn't feel like healing—it feels like reliving it. There's a real reason for that. Trauma isn't stored the way a memory of your commute is stored. It lives in the nervous system, in the body, in reactions that fire before conscious thought catches up. Hypervigilance, a racing heart at an ordinary noise, the urge to shut down mid-sentence—those aren't failures of willpower. They're your body doing exactly what it learned to do to survive. Which means healing doesn't always start with words. Sometimes it starts with helping your body learn that the danger has passed—without asking it to narrate the danger first.",
      },
      {
        type: "image",
        src: images.blog.traumaWithoutTalking.whatArtIs,
        alt: "A warm, softly lit armchair in a cozy corner",
        caption: "Healing doesn't require a clinical room or a script—just a safe place to start.",
      },
      {
        type: "heading",
        text: "What Accelerated Resolution Therapy (ART) Actually Is",
      },
      {
        type: "paragraph",
        content: (
          <>
            <Link to="/specialties/art" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">Accelerated Resolution Therapy, or ART,</Link> is an evidence-based approach that helps you reprocess a distressing memory without requiring you to describe it out loud. During a session, you're guided through a series of horizontal eye movements—similar in spirit to EMDR—while you privately notice the images, sensations, and emotions connected to the memory. You don't narrate any of it out loud. I'm guiding the process; you're the only one who needs to know what you're seeing.
          </>
        ),
      },
      {
        type: "paragraph",
        content:
          "What makes ART distinct is a technique called voluntary image replacement. Once the emotional charge of a distressing memory has eased, you're guided to consciously replace the disturbing images your mind has been holding onto with new ones you choose. The memory that something happened doesn't disappear—but the images that used to trigger a flood of panic or shutdown stop having that grip on you.",
      },
      {
        type: "paragraph",
        content:
          "Most clients notice a real shift in how a memory feels within one to five sessions. Not because the past changes, but because the way your body responds to it does.",
      },
      {
        type: "heading",
        text: "ART vs. EMDR — What's Actually Different",
      },
      {
        type: "paragraph",
        content:
          "If you've looked into trauma therapy before, you've probably come across EMDR (Eye Movement Desensitization and Reprocessing) too—and it's easy to assume ART is just a variation on the same thing. They share real similarities: both use bilateral eye movements, both are evidence-based, and both exist because trauma doesn't always respond to talking alone.",
      },
      {
        type: "paragraph",
        content:
          "The differences show up in a few concrete places. EMDR typically works through a longer sequence of sessions and structured phases, often over weeks or months, and generally asks you to verbally identify the memory and the negative belief attached to it. ART was designed to work faster—many clients feel meaningful relief in a single session, and most complete the full process within one to five—and it doesn't require narrating the memory out loud at any point.",
      },
      {
        type: "paragraph",
        content:
          "Neither approach is “better” across the board—they're just built differently. If the idea of describing what happened, even briefly, feels like the biggest barrier to starting therapy, ART is worth a closer look.",
      },
      {
        type: "image",
        src: images.blog.traumaWithoutTalking.howSessionWorks,
        alt: "Soft morning light filtering through sheer white curtains",
        caption: "Sessions are paced by you—quiet, gradual, and entirely within your control.",
      },
      {
        type: "heading",
        text: "How a Session Actually Works",
      },
      {
        type: "paragraph",
        content:
          "Here's what an ART session actually looks like, step by step, so there are no surprises going in.",
      },
      {
        type: "paragraph",
        content:
          "You start by identifying what's bothering you—not in detail, just enough for us both to know what we're working on. From there, I'll guide you through sets of horizontal eye movements while you notice what comes up in your body and mind: images, sensations, emotions. You stay in the driver's seat the entire time. If something feels like too much, we slow down or stop. Nothing happens to you; you're actively directing the process.",
      },
      {
        type: "paragraph",
        content:
          "As the sensations shift, we move toward voluntary image replacement—consciously choosing new, less distressing images to associate with the memory. By the end of a session, most people describe the memory as feeling more distant, more like something that happened rather than something that's still happening.",
      },
      {
        type: "paragraph",
        content:
          "You leave knowing you did the work. You just didn't have to say it out loud to do it.",
      },
      {
        type: "faq",
        heading: "Common Concerns About ART",
        items: [
          {
            q: "Will I still have to talk at all?",
            a: "You'll talk—just not about the traumatic content itself. You'll tell me what general area you want to work on (“a car accident,” “something from childhood”) and describe what you're noticing during the process. You're never asked to narrate the traumatic event.",
          },
          {
            q: "What if I don't want to describe what happened, even briefly?",
            a: "That's exactly what ART is built for. You can work through a memory you've never said out loud to anyone, including me. I don't need the story to help you process it.",
          },
          {
            q: "Is ART only for major trauma, or does it help with smaller, everyday distressing memories too?",
            a: "Both. ART is used for PTSD and significant trauma, but it's just as effective for the smaller, persistent stuff—a humiliating memory, a recurring conflict, a moment of panic that still has a grip on you years later.",
          },
          {
            q: "How many sessions does ART typically take?",
            a: "Most clients notice meaningful change within one to five sessions. Some concerns resolve in a single session; more complex or layered experiences may take longer. We'll check in as we go, not just assume a fixed number up front.",
          },
          {
            q: "Is this covered by insurance?",
            a: (
              <>
                As clinical therapy, ART sessions are billed the same way as other therapy sessions at The Peace Practice, and most major insurance plans are accepted, including Aetna, Anthem, Blue Cross Blue Shield, Cigna, Optum, UnitedHealthcare, Oxford, and Oscar. Reach out to verify your specific coverage via the <Link to="/faq" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">FAQ page</Link> or a free consultation.
              </>
            ),
          },
        ],
      },
      {
        type: "heading",
        text: "Who ART Tends to Help",
      },
      {
        type: "paragraph",
        content: (
          <>
            ART was originally developed for combat veterans with <Link to="/specialties/trauma-ptsd" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">PTSD</Link>, and it's still widely used for trauma in that clinical sense—but the people who benefit from it in practice are a lot broader than that. It's often a strong fit for:
          </>
        ),
      },
      {
        type: "list",
        items: [
          "PTSD and complex trauma",
          "Anxiety and panic that has a specific memory or event attached to it",
          "Birth trauma and pregnancy loss",
          "Grief that feels stuck rather than moving",
          "Phobias tied to a specific incident",
          "Recurring intrusive memories that talk therapy hasn't fully resolved",
        ],
      },
      {
        type: "paragraph",
        content:
          "If you've tried traditional talk therapy and felt like you hit a wall—or never started because the thought of detailing what happened kept you from booking that first appointment—ART is worth exploring.",
      },
      {
        type: "image",
        src: images.blog.traumaWithoutTalking.closing,
        alt: "A sunlit wooden path winding through green trees",
        caption: "You don't have to have it all figured out to take the first step.",
      },
      {
        type: "heading",
        text: "Getting Started, Without Pressure",
      },
      {
        type: "paragraph",
        content: (
          <>
            You don't have to decide today that ART is the right fit, and you definitely don't have to describe anything before we've even met. A free 15-minute consultation is the lowest-pressure way to ask questions, hear more about how sessions work, and figure out together whether this is the right next step. <Link to="/contact" className="underline decoration-[#c09050]/40 hover:decoration-[#c09050] underline-offset-2">Reach out here</Link> whenever you're ready.
          </>
        ),
      },
      {
        type: "paragraph",
        content:
          "I'm a licensed clinical social worker in New York, New Jersey, and Rhode Island, and all sessions are conducted by secure telehealth—no commute, no waiting room, just a private space you choose. Whenever you're ready, I'm here.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
