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
    doorTherapy: "/new/hakon-grimstad-hteXWSF9jA4-unsplash-1.jpg",  // "Three Pathways" — Clinical Therapy card
    doorCoaching: "/new/meg-jenson-WtT3XFmpiMg-unsplash.jpg",       // "Three Pathways" — Coaching card
    doorPartnership: "/new/kreative-kwame-oUXhw8SEqlM-unsplash.jpg",// "Three Pathways" — Partnership card
    testimonialCommunity: "/new/supriya-chauhan-5Ti_6e-OBs0-unsplash.jpg",      // "Community Voices" testimonial photo
    testimonialCoaching: "/new/paul-zoetemeijer-VjNSLjSsdhg-unsplash.jpg",// "Coaching Voices" testimonial photo
  },

  // ───────────── FAQ SECTION ─────────────
  faq: {
    image: "/new/milad-fakurian-iKzm8QvVpB8-unsplash.jpg", // Photo beside the FAQ questions
  },

  // ───────────── SERVICES PAGE ─────────────
  services: {
    hero: "/new/alan-villegas-5wXV1ZoqsU4-unsplash (1).jpg", // Top banner of the Services page
    trainingLogo: "/new/manifest-coaching-logo.png",       // Logo in the Professional Training card
    showcase: "/new/robert-lukeman-_RBcxo9AU-U-unsplash.jpg",// Wide stone-circles background (Service Showcase)
    twoHatsCrown: "/new/lisa-marie-theck-9iL4kae_oSs-unsplash.jpg",                     // Crown background in "The Two Hats" section
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
    section1: "/new/womanizer-toys-8oB43mw658c-unsplash.jpg",   // 1st content section photo
    section2: "/new/marquise-kamanke-jfQGc8Emf1Q-unsplash.jpg",  // 2nd content section photo
    section3: "/new/kamil-kalkan-BTpIUnszs_Q-unsplash.jpg", // 3rd content section photo
    section4: "/new/sonayon-oluwatosin-LrDQfDXGDko-unsplash.jpg",     // 4th content section photo
    cta: "/new/gary-yost--iZGedR1uJo-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── ART PAGE (Accelerated Resolution Therapy) ─────────────
  art: {
    hero: "/new/mirella-callage-nI0d850_UhQ-unsplash.jpg",          // Top banner
    section1: "/new/nick-andreka-0GK3okK9DcY-unsplash.jpg",   // 1st content section photo
    section2: "/new/nadine-e-DRzYMtae-vA-unsplash-1.jpg", // 2nd content section photo
    section3: "/new/tsd-studio-9_jvKRbNdTM-unsplash.jpg",  // 3rd content section photo
    section4: "/new/ivan-aviles-opStzxYG00c-unsplash.jpg",       // 4th content section photo
    cta: "/new/zach-key-rKE6rXOl14U-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ───────────── DBT PAGE (Dialectical Behavior Therapy) ─────────────
  dbt: {
    hero: "/new/kuba_-lVqWBjepH1I-unsplash.jpg",  // Top banner
    section1: "/new/and_picture.png",                        // 1st content section photo
    section2: "/new/qwerqu-mcbrew-K1pPL5QSF4A-unsplash.jpg",// 2nd content section photo
    section3: "/new/gilbert-beltran-a_sviiqnSes-unsplash.jpg",// 3rd content section photo
    section4: "/new/antony-stanford-Pl6_9GIBJ0w-unsplash.jpg",// 4th content section photo
    cta: "/new/dian-yu-f18mZ_kI4Mk-unsplash.jpg",   // Bottom "Begin your journey" background
  },

  // ───────────── SĀF-T PAGE ─────────────
  saft: {
    hero: "/new/amanda-schmidt-wWaK2LISiAE-unsplash.jpg",      // Top banner
    section1: "/new/beatrice-labbe-qTtpavekE2M-unsplash.jpg",// 1st content section photo
    section2: "/new/dylann-hendricks-z2rC_O-TosY-unsplash.jpg",// 2nd content section photo
    section3: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg",// 3rd content section photo
    section4: "/new/milad-fakurian-58Z17lnVS4U-unsplash.jpg",// 4th content section photo
    cta: "/new/thomas-elliott-qsONHwF3e68-unsplash.jpg",       // Bottom "Begin your journey" background
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

  // ─────────────???? TRAUMA & PTSD PAGE ─────────────
  trauma: {
    hero: "/new/nadine-e-DRzYMtae-vA-unsplash.jpg",          // Top banner
    section1: "/new/kreative-kwame-oUXhw8SEqlM-unsplash.jpg",
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
    hero: "/new/hydra-4x-LDHtgcPrkY8-unsplash.jpg",    // Top banner
    section1: "/new/ijaz-rafi-U0Yq5XALADs-unsplash.jpg",
    section2: "/new/sarah-khan-ER2NNA2fUpw-unsplash.jpg",
    section3: "/new/8machine-_-GVAYgLlpeZ8-unsplash.jpg",
    section4: "/new/priscilla-du-preez-aPa843frIzI-unsplash.jpg",
    section5: "/new/hester-qiang-95t94hZTESw-unsplash.jpg",
    section6: "/new/ricardo-gomez-angel-D9kOnC_1AHw-unsplash.jpg",
    section7: "/new/lucas-gouvea-Kbmt6r2YpXM-unsplash.jpg",
    cta: "/new/erik-karits-lrVXaCdKTfM-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── The Pivot LIFE COACHING PAGE ─────────────
  lifeCoaching: {
    hero: "/new/katriona-mccarthy-sGYlyg_U92I-unsplash.jpg",    // Top banner
    section1: "/new/kosma-kurlowicz-iDHiyF7LvU0-unsplash.jpg",
    section2: "/public/new/julien-tromeur-QvxI2P7UCc4-unsplash.jpg",
    section3: "/new/charlotte-knight-aUw2sgqnG9s-unsplash.jpg",
    section4: "/new/arturo-anez-9yhBvC2ykoc-unsplash.jpg",
    section5: "/new/matheus-viana-sl5o9vDtDbI-unsplash.jpg",
    section6: "/new/annie-pm-OEewhKC5rIc-unsplash.jpg",
    section7: "/new/dylann-hendricks-z2rC_O-TosY-unsplash.jpg",
    cta: "/new/alfred-schrock-shoE2y51uX0-unsplash-1.jpg",           // Bottom "Begin your journey" background
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

  // ───────────── IMMIGRATION EVALUATIONS PAGE ─────────────
  immigration: {
    card1: "/new/dylann-hendricks-oxaBYAbpWgI-unsplash.jpg",    // 1st service card image
    card2: "/new/markus-winkler-aXkQK_mc5Dw-unsplash.jpg",   // 2nd service card image
    showcase: "/new/jack-blueberry-50JM0vCCEUo-unsplash.jpg",  // Large banner photo
    cta: "/new/elena-mozhvilo-j06gLuKK0GM-unsplash.jpg",     // Bottom call-to-action background
  },

  // ───────────── MANIFEST METHOD PAGE ─────────────
  manifest: {
    hero: "/new/sandra-grunewald-fLl5j9l_0UE-unsplash.jpg",    // Top banner
    workbook: "/new/content-pixie-DRmDrlqMZsU-unsplash.jpg",// Workbooks "coming soon" section
  },

  // ───────────── bARTer BALANCE PAGE ─────────────
  barter: {
    section1: "/new/alonso-reyes-JCaw4DRqekk-unsplash.jpg",                          // 1st content section photo
    section2: "/new/yunona-uritsky-Jut18mfth7I-unsplash.jpg",                         // 2nd content section photo
    section3: "/new/emmanuel-anderson-MGXSVqffa_Y-unsplash.jpg",// 3rd content section photo
    logo1: "/new/acceleratedresart.png",                     // ART logo
    logo2: "/new/is-art-logo-large.png",                     // IS-ART logo
    logo3: "/new/manifest-coaching-logo.png",                // MANIFEST Coaching logo
    showcase: "/new/pete-godfrey-3TSShf9Uidg-unsplash.jpg",// b2b banner photo
    cta: "/new/alexey-demidov-t47aoza7BWk-unsplash.jpg",         // 1st picture b2b
    ayanaHeadshot: "/new/ayana-headshot.jpg",                // Ayana's photo on this page
    closing: "/new/vinu-t-V0vT7qaWhIw-unsplash.jpg",// Closing section photo
  },

};
