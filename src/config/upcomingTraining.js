// ════════════════════════════════════════════════════════════════
//   UPCOMING TRAININGS  —  edit your training announcements here
// ════════════════════════════════════════════════════════════════
//
//   HOW TO USE  (no coding needed — just change the words):
//
//   1) SHOW or HIDE the whole section on the website:
//        active: true   →  shows the "Upcoming Training" section
//        active: false  →  hides it completely
//
//   2) You can list MORE THAN ONE training below. Each  { ... }  block
//      is one training. Visitors switch between them with the buttons
//      at the top of the section.
//        • To hide just ONE training:  set its own  active: false
//        • To add a training:  copy a whole  { ... }  block and edit it
//
//   3) Only change the words inside the "quotes".
//      Keep the quotes ""  and the commas ,  exactly where they are.
//
//   4) The bullet list ("whatToExpect"): each line is one bullet point.
//
//   5) Pictures: put the image file in the  "public/new"  folder, then
//      write its name here like:  "/new/my-photo.jpg"
//
// ════════════════════════════════════════════════════════════════

export const upcomingTraining = {

  active: true,        //  master switch:   true = show  |  false = hide

  trainings: [

    // ─────────────── Training 1 ───────────────
    {
      active: true,                        //  show this one?  true / false
      tabName: "ART Training",             //  short label on the switch button

      presenter: "The Peace Practice & RCRR Present",
      title: "",
      subtitle: "For mental health clinicians only",

      whatToExpect: [
        "A hands-on, revolutionary, effective, and quick modality to guide clients interested in healing.",
        "Effectively help clients process distressing past events, grief, phobias, obsessive thinking, and many other common struggles.",
        "Learn the power of eye movements in facilitating relaxation and processing trauma.",
        "A 3-day BASIC ART training will equip you to quickly help clients release emotional pain.",
      ],

      when: "9/29/26 - 10/01/26 8:30am- 5:00pm (3days)",       //  e.g. "March 14–16, 2026"
      where: "Acworth, GA (< 30 min from Atlanta, GA)",   //  e.g. "Atlanta, GA · In person"
      trainer: "Ayana F. McKanney, LCSW — Founder of The Peace Practice",
      cost: "$1,700",
      website: "",

      ctaText: "Reserve Your Spot",
      ctaLink: "https://calendly.com/manifestcoachingllc/clarity-call",

      topicImage: "/new/tsd-studio-9_jvKRbNdTM-unsplash.jpg",  // round topic photo
      trainerImage: "/new/ayana-headshot.jpg",                  // Ayana's round photo
    },

    // ─────────────── Training 2 ───────────────
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

      when: "Friday- 10/02/2026-9:00am-3:00pm",
      where: "Acworth, GA (< 30 min from Atlanta, GA)",
      trainer: "Ayana F. McKanney, LCSW — Founder of The Peace Practice",
      cost: "$199",
      website: "",                          //  leave "" to hide the website link

      ctaText: "Reserve Your Spot",
      ctaLink: "https://acceleratedresolutiontherapy.com/reg/enroll.php?class=SAF-T1+10%2F02%2F26+ACCGA&savesrch=%2Freg%2Ficat.php%3Fcourse%3DSAF-T1",

      topicImage: "/new/egor-litvinov-7UI8bszs1X0-unsplash.jpg",
      trainerImage: "/new/ayana-headshot.jpg",
    },


    
  ],
};
