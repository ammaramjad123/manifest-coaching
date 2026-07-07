// ============================================================================
//  THE PEACE PRACTICE — ALL WEBSITE PICTURES IN ONE PLACE
// ============================================================================
//
//  HOW TO CHANGE A PICTURE (no coding needed):
//
//  1. Put your new photo file inside the folder:  public/new/
//  2. Find the picture you want to change in the list below.
//  3. Replace ONLY the file name inside the quotes "  ".
//
//     Example — to change the ACT page top banner:
//        BEFORE:  hero: "/new/kylo-YrVe-fEqtYM-unsplash.jpg",
//        AFTER:   hero: "/new/my-new-photo.jpg",
//
//  RULES:
//   • Always keep the quotes "  " and the comma , at the end.
//   • Always keep the "/new/" part before the file name.
//   • The file name must match EXACTLY (capital letters and spaces count).
//
//  Each line has a comment (the green text after //) telling you where that
//  picture shows up on the website.
// ============================================================================

export const images = {

  // ───────────── SHARED (used in several places) ─────────────
  logo: "/logo.png",                       // Logo in the top menu bar & footer
  ayanaHeadshot: "/new/ayana-headshot.jpg",// Ayana's photo on the About page

  // ───────────── HOME PAGE ─────────────
  home: {
    hero: "/new/modar-kajo-iPHsDwlYGmI-unsplash.jpg",                                              // Big banner at the very top of the home page
    doorTherapy: "/new/suzanne-d-williams-VMKBFR6r_jg-unsplash.jpg",  // "Three Pathways" — Clinical Therapy card
    doorCoaching: "/new/dare-artworks-_tbCvz_nHdU-unsplash.jpg",       // "Three Pathways" — Coaching card
    doorPartnership: "/new/gregory-upper-4jQk5sFM27U-unsplash.jpg",// "Three Pathways" — Partnership card
    testimonialCommunity: "/new/supriya-chauhan-5Ti_6e-OBs0-unsplash.jpg",      // "Community Voices" testimonial photo
    testimonialCoaching: "/new/paul-zoetemeijer-VjNSLjSsdhg-unsplash.jpg",// "Coaching Voices" testimonial photo
  },

  // ───────────── FAQ SECTION ─────────────
  faq: {
    image: "/new/julien-tromeur-QvxI2P7UCc4-unsplash.jpg", // Photo beside the FAQ questions
  },

  // ───────────── SERVICES PAGE ─────────────
  services: {
    hero: "/new/artur-aldyrkhanov-yjfXE6xdJmE-unsplash.jpg", // Top banner of the Services page
    trainingLogo: "/new/manifest-coaching-logo.png",       // Logo in the Professional Training card
    showcase: "/new/kati-web-_30ygW82AnE-unsplash.jpg",// Wide stone-circles background (Service Showcase)
    twoHatsCrown: "/new/revisedlisa-marie-theck-9iL4kae_oSs-unsplash.jpg",                     // Crown background in "The Two Hats" section
  },

  // ───────────── ABOUT PAGE ─────────────
  about: {
    headshot: "/new/ayana-headshot.jpg", // Ayana's main photo on the About page
    legacyPhoto: "/new/ayana.jpg",           // Ayana's photo (older About component)
    storyPhoto: "/new/yoann-boyer-i14h2xyPr18-unsplash.jpg", // Photo in "The Story Behind the Practice" section
  },

  // ───────────── CONTACT PAGE ─────────────
  contact: {
    hero: "/new/seyi-ariyo-cGfKCMJa6Vw-unsplash.jpg", // Top banner of the Contact page
  },

  // ───────────── ACT PAGE (Acceptance & Commitment Therapy) ─────────────
  act: {
    hero: "/new/iwaria-inc-1Wr4U5yRw2M-unsplash.jpg",              // Top banner
    section1: "/new/danie-franco-tnxRFtXI9dI-unsplash.jpg",   // 1st content section photo
    section2: "/new/marquise-kamanke-jfQGc8Emf1Q-unsplash.jpg",  // 2nd content section photo
    section3: "/new/womanizer-toys-8oB43mw658c-unsplash.jpg", // 3rd content section photo
    section4: "/new/sonayon-oluwatosin-LrDQfDXGDko-unsplash.jpg",     // 4th content section photo
    cta: "/new/dietra-alyssa-semple-d-RqbXT3GkA-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── ART PAGE (Accelerated Resolution Therapy) ─────────────
  art: {
    hero: "/new/rebecca-niver-IUUuyoM_1IE-unsplash.jpg",          // Top banner
    section1: "/new/nick-andreka-0GK3okK9DcY-unsplash.jpg",   // 1st content section photo
    section2: "/new/nadine-e-DRzYMtae-vA-unsplash-1.jpg", // 2nd content section photo
    section3: "/new/igor-omilaev-16LHsyGpyTw-unsplash.jpg",  // 3rd content section photo
    section4: "/new/ivan-aviles-opStzxYG00c-unsplash.jpg",       // 4th content section photo
    cta: "/new/sydney-moore-tOY4_Xk6QDg-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ───────────── DBT PAGE (Dialectical Behavior Therapy) ─────────────
  dbt: {
    hero: "/new/kuba_-lVqWBjepH1I-unsplash.jpg",  // Top banner
    section1: "/new/and_picture.png",                        // 1st content section photo
    section2: "/new/qwerqu-mcbrew-K1pPL5QSF4A-unsplash.jpg",// 2nd content section photo
    section3: "/new/kamil-kalkan-BTpIUnszs_Q-unsplash.jpg",// 3rd content section photo
    section4: "/new/cord-allman-Y4XyZmgY4Ik-unsplash.jpg",// 4th content section photo
    cta: "/new/dian-yu-f18mZ_kI4Mk-unsplash.jpg",   // Bottom "Begin your journey" background
  },

  // ───────────── SĀF-T PAGE ─────────────
  saft: {
    hero: "/new/amanda-schmidt-wWaK2LISiAE-unsplash.jpg",      // Top banner
    section1: "/new/beatrice-labbe-qTtpavekE2M-unsplash.jpg",// 1st content section photo
    section2: "/new/abel-marquez-0chVl3b15MQ-unsplash.jpg",// 2nd content section photo
    section3: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg",// 3rd content section photo
    section4: "/new/mirella-callage-nI0d850_UhQ-unsplash.jpg",// 4th content section photo
    cta: "/new/rosario-janza-LHI32I1iodw-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── INCLUSIVE & AFFIRMING CARE PAGE ─────────────
  inclusive: {
    hero: "/new/mark-james-doWjxDH4VWA-unsplash.jpg",   // Top banner
    section1: "/new/gidon-agaza-H7Uvql59jD0-unsplash.jpg",  // 1st content section photo
    section2: "/new/vijesh-datt-OuAyzIWfvGQ-unsplash.jpg",   // 2nd content section photo
    section3: "/new/molly-blackbird-WvXPoIKsmOM-unsplash.jpg", // 3rd content section photo (Clinical Pillars)
    section4: "/new/christian-buehner-K8xJPpHEO7M-unsplash.jpg",// 4th content section photo (What to Expect)
    cta: "/new/aaron-burden-clokmlaUwaU-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ─────────────LANDING PAGE paths ─────────────
  trauma: {
    hero: "/new/nadine-e-DRzYMtae-vA-unsplash.jpg",          // Top banner
    section1: "/new/kreative-kwame-oUXhw8SEqlM-unsplash.jpg",     //partnership
    section2: "/new/claiton-conto-8PiSDuUGP0Y-unsplash.jpg",
    section3: "/new/koen-emmers-Da1Wv-XC43k-unsplash.jpg",
    section4: "/new/ricardo-gomez-angel-D9kOnC_1AHw-unsplash.jpg",
    section5: "/new/linus-nylund-Q5QspluNZmM-unsplash.jpg",
    section6: "/new/billy-pasco-se3tHNszbkM-unsplash.jpg",
    section7: "/new/aakifah-shaikh-Dh1pFElYVpI-unsplash.jpg",
    cta: "/new/nik-NP2uSurUzf8-unsplash.jpg",                // Bottom "Begin your journey" background
  },

  // ───────────── The Process ANXIETY & DEPRESSION PAGE ─────────────
  anxiety: {
    hero: "/new/dmytro-koplyk-93gmndGt4OU-unsplash.jpg",    // Top banner
    section1: "/new/lucas-gouvea-Kbmt6r2YpXM-unsplash.jpg",
    section2: "/new/sarah-khan-ER2NNA2fUpw-unsplash.jpg",
    section3: "/new/8machine-_-GVAYgLlpeZ8-unsplash.jpg",
    section4: "/new/priscilla-du-preez-aPa843frIzI-unsplash.jpg",
    section5: "/new/hester-qiang-95t94hZTESw-unsplash.jpg",
    section6: "/new/ricardo-gomez-angel-D9kOnC_1AHw-unsplash.jpg",
    section7: "/new/milad-fakurian-iKzm8QvVpB8-unsplash.jpg",
    cta: "/new/erik-karits-lrVXaCdKTfM-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── The Pivot LIFE COACHING PAGE ─────────────
  lifeCoaching: {
    hero: "/new/katriona-mccarthy-sGYlyg_U92I-unsplash.jpg",    // Top banner
    section1: "/new/godfred-kwakye-FD_xtDvqy8I-unsplash.jpg",
    section2: "/new/pete-godfrey-3TSShf9Uidg-unsplash.jpg",
    section3: "/new/charlotte-knight-aUw2sgqnG9s-unsplash.jpg",
    section4: "/new/arturo-anez-9yhBvC2ykoc-unsplash.jpg",
    section5: "/new/matheus-viana-sl5o9vDtDbI-unsplash.jpg",
    section6: "/new/annie-pm-OEewhKC5rIc-unsplash.jpg",
    section7: "/new/dylann-hendricks-z2rC_O-TosY-unsplash.jpg",
    cta: "/new/joshua-gaunt-pT8wCKAYm7k-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ─────────────The Partnership WOMEN'S ISSUES PAGE ─────────────
  women: {
    hero: "/new/manifest-coaching-logo.png",   // Top banner
    section1: "/new/gregory-upper-4jQk5sFM27U-unsplash.jpg",
    section2: "/new/satit-wongsampan-9SM7OgDXmQY-unsplash (1).jpg",
    section3: "/new/hardingferrent-IpZ89zebL18-unsplash.jpg",
    section4: "/new/valerii-ladomyriak-7oGXQII7AWc-unsplash (1).jpg",
    section5: "/new/katarzyna-zygnerska-G4rGkoRnoNw-unsplash.jpg",
    section6: "/new/venwardo-F-ga6WwcqOQ-unsplash.jpg",
    section7: "/new/alonso-reyes-JCaw4DRqekk-unsplash.jpg",
    cta: "/new/sian-cooper-4kEobPqPgKw-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── The PIVOT-IMMIGRATION EVALUATIONS PAGE ─────────────
  immigration: {
    card1: "/new/windows-H9oXWdbFw_Y-unsplash.jpg",    // 1st service card overview image
    card2: "/new/surface-CqQWt4a-XfY-unsplash.jpg",   // 2nd service card specialization image
    showcase: "/new/marina-yalanska-kt8Qn_2U9r8-unsplash.jpg",  // Large banner photo
    cta: "/new/david-clode-13PjNBaDMcg-unsplash.jpg",     // Bottom call-to-action background
    trainingsTab: "/new/christina-wocintechchat-com-m-rg1y72eKw6o-unsplash.jpg",  // Picture in the "Professional Trainings" tab (Partnership page)
  },

  // ───────────── MANIFEST METHOD PAGE ─────────────
  manifest: {
    hero: "/new/sandra-grunewald-fLl5j9l_0UE-unsplash.jpg",    // Top banner
    workbook: "/new/content-pixie-DRmDrlqMZsU-unsplash.jpg",// bottom of page Workbooks "coming soon" section
    workbookCard: "/new/sixteen-miles-out-0I75875sRVU-unsplash.jpg",// Picture inside the "Coming Soon" workbooks card (any size, won't crop)
  },

  // ───────────── bARTer BALANCE PAGE ─────────────
  barter: {
    section1: "/new/alonso-reyes-JCaw4DRqekk-unsplash.jpg",                          // 1st content section photo
    section2: "/new/yunona-uritsky-Jut18mfth7I-unsplash.jpg",                         // 2nd content section photo
    section3: "/new/emmanuel-anderson-MGXSVqffa_Y-unsplash.jpg",// 3rd content section photo
    logo1: "/new/acceleratedresart.png",                     // ART logo
    logo2: "/new/is-art-logo-large.png",                     // IS-ART logo
    logo3: "/new/manifest-coaching-logo.png",                // MANIFEST Coaching logo
    showcase: "/new/hoyoun-lee-1x7BfgXcIn4-unsplash (1).jpg",// b2b banner photo
    cta: "/new/alexey-demidov-t47aoza7BWk-unsplash.jpg",         // 1st picture b2b
    ayanaHeadshot: "/new/ayana-headshot.jpg",                // Ayana's photo on this page
    closing: "/new/erick-beltran-I9qD2fEAxQ4-unsplash.jpg",// Closing section photo
  },

};


// ============================================================================
//  TRAINING REGISTRATION LINKS  (the "Register" buttons for your trainings)
// ============================================================================
//
//  These are the web addresses (links) that open when someone clicks the
//  "Register" buttons for your ART® Basic Training and SĀF-T Training.
//
//  They are used on the Partnership page (the 3 training cards), the ART page,
//  the SĀF-T page, and the bARTer Balance page — so changing a link HERE
//  changes it EVERYWHERE on the website automatically. You only edit it once.
//
//  ── HOW TO CHANGE A LINK (no coding needed): ──
//
//   1. Copy your direct registration link from your browser's address bar.
//   2. Find the training below (artBasic or saft).
//   3. Replace ONLY the web address inside the quotes "  ".
//
//      Example — to point ART® Basic Training at your own direct link:
//         BEFORE:  artBasic: "https://acceleratedresolutiontherapy.com/reg/icat.php?course=Basic",
//         AFTER:   artBasic: "https://your-direct-registration-link-here.com",
//
//  RULES:
//   • Always keep the quotes "  " and the comma , at the end.
//   • Paste the WHOLE link, including the "https://" at the start.
//   • Do not add spaces before or after the link inside the quotes.
// ============================================================================

export const trainingLinks = {

  // ART® Basic Training  →  "Register" button link
  artBasic: "https://acceleratedresolutiontherapy.com/reg/icat.php?course=Basic&loc=acworthga&inst=ayanamckanney",

  // SĀF-T Training  →  "Register" button link
  saft: "https://acceleratedresolutiontherapy.com/reg/icat.php?course=SAF-T1&loc=acworthga",

};
