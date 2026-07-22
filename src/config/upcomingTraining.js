// ════════════════════════════════════════════════════════════════
//   UPCOMING TRAININGS  —  edit your training announcements here
// ════════════════════════════════════════════════════════════════
//
//   HOW IT WORKS (no coding — just change the words in "quotes"):
//
//   • Each  { ... }  block below is ONE PROGRAM (e.g. ART, SĀF-T).
//     A program shows as ONE card on the website.
//
//   • A program can have MANY DATES. Every date goes in the
//     "dates: [ ... ]" list inside that program. All the dates show
//     together on the same card, so visitors never scroll or click
//     through duplicate posters.
//
//   ────────────────────────────────────────────────────────────
//   TO ADD A NEW DATE to a program (most common):
//     Inside that program's  dates: [ ... ]  list, copy one
//     { when: ..., where: ..., cost: ..., ctaLink: ... } row,
//     paste it right after another one, and edit the words.
//     Keep the commas exactly where they are.
//
//   TO ADD A WHOLE NEW PROGRAM:
//     Copy one entire program  { ... }  block (from the "{" after
//     "trainings: [" down to its matching "}," ) and paste it before
//     the closing  ]  . Then edit its words.
//   ────────────────────────────────────────────────────────────
//
//   • SHOW / HIDE:
//       active: true / false   works on the whole section (top),
//       on a single program, and on a single date.
//
//   • Pictures: put the file in the  "public/new"  folder, then write
//     its name here like:  "/new/my-photo.jpg"
//
// ════════════════════════════════════════════════════════════════

export const upcomingTraining = {

  active: true,        //  master switch:   true = show  |  false = hide

  trainings: [

    // ═══════════════ PROGRAM 1 — ART Training ═══════════════
    {
      active: true,                        //  show this program?  true / false
      tabName: "ART Training",

      presenter: "The Peace Practice & RCRR Present",
      title: "ART — Accelerated Resolution Therapy",
      subtitle: "For mental health clinicians only",

      whatToExpect: [
        "A hands-on, revolutionary, effective, and quick modality to guide clients interested in healing.",
        "Effectively help clients process distressing past events, grief, phobias, obsessive thinking, and many other common struggles.",
        "Learn the power of eye movements in facilitating relaxation and processing trauma.",
        "A 3-day BASIC ART training will equip you to quickly help clients release emotional pain.",
      ],

      trainer: "Ayana F. McKanney, LCSW — Founder of The Peace Practice",
      topicImage: "/new/tsd-studio-9_jvKRbNdTM-unsplash.jpg",  // round topic photo
      trainerImage: "/new/ayana-headshot.jpg",                  // Ayana's round photo

      //  All the dates/locations this program is offered on:
      dates: [
        {
          active: true,
          when: "9/29/26 – 10/01/26 · 8:30am–5:00pm (3 days)",
          where: "Acworth, GA (< 30 min from Atlanta, GA)",
          cost: "$1,700",
          ctaText: "Reserve Your Spot",
          ctaLink: "https://acceleratedresolutiontherapy.com/reg/icat.php?course=Basic&inst=ayanamckanney",
        },
        {
          active: true,
          when: "01/05/27 – 01/07/27 · 8:30am–5:00pm (3 days)",
          where: "New York City, NY",
          cost: "$1,700",
          ctaText: "Reserve Your Spot",
          ctaLink: "https://acceleratedresolutiontherapy.com/reg/icat.php?course=Basic&inst=ayanamckanney",
        },
      ],
    },

    // ═══════════════ PROGRAM 2 — SĀF-T Training ═══════════════
    {
      active: true,
      tabName: "SĀF-T Training",

      presenter: "The Peace Practice Presents",
      title: "SĀF-T — Sensations Awareness Focused Technique",
      subtitle: "For mental health clinicians, first responders, coaches & more!",

      whatToExpect: [
        "Learn SĀF-T, a body-centered technique drawn from ART that targets distressing physical sensations.",
        "Help clients release tension and promote rapid calming and a felt sense of safety.",
        "Master practical tools to regulate the nervous system and restore steadiness.",
        "Apply SĀF-T confidently in both clinical therapy and coaching settings.",
      ],

      trainer: "Ayana F. McKanney, LCSW — Founder of The Peace Practice",
      topicImage: "/new/egor-litvinov-7UI8bszs1X0-unsplash.jpg",
      trainerImage: "/new/ayana-headshot.jpg",

      dates: [
        {
          active: true,
          when: "Friday 10/02/2026 · 9:00am–3:00pm",
          where: "Acworth, GA (< 30 min from Atlanta, GA)",
          cost: "$199",
          ctaText: "Reserve Your Spot",
          ctaLink: "https://acceleratedresolutiontherapy.com/reg/icat.php?course=SAF-T1&inst=ayanamckanney",
        },
      ],
    },

  ],
};
