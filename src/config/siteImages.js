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
    hero: "/hero.jpg",                                              // Big banner at the very top of the home page
    doorTherapy: "/new/hakon-grimstad-hteXWSF9jA4-unsplash-1.jpg",  // "Three Pathways" — Clinical Therapy card
    doorCoaching: "/new/meg-jenson-WtT3XFmpiMg-unsplash.jpg",       // "Three Pathways" — Coaching card
    doorPartnership: "/new/kreative-kwame-oUXhw8SEqlM-unsplash.jpg",// "Three Pathways" — Partnership card
    testimonialCommunity: "/new/zac-durant-axXWe7dd1ts-unsplash.jpg",      // "Community Voices" testimonial photo
    testimonialCoaching: "/new/brett-jordan-Pd3ml1YRPlg-unsplash%20(1).jpg",// "Coaching Voices" testimonial photo
  },

  // ───────────── FAQ SECTION ─────────────
  faq: {
    image: "/new/yumu-81PkOTYkN2Y-unsplash.jpg", // Photo beside the FAQ questions
  },

  // ───────────── SERVICES PAGE ─────────────
  services: {
    hero: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg", // Top banner of the Services page
    trainingLogo: "/new/manifest-coaching-logo.png",       // Logo in the Professional Training card
    showcase: "/new/robert-lukeman-_RBcxo9AU-U-unsplash.jpg",// Wide stone-circles background (Service Showcase)
    twoHatsCrown: "/new/crown_bg.png",                     // Crown background in "The Two Hats" section
  },

  // ───────────── ABOUT PAGE ─────────────
  about: {
    headshot: "/new/Foluke%20McKanney_AYANA_Default_Circle%20Crop%20-%20Office_Headshot%20(1).jpeg", // Ayana's main photo on the About page
    legacyPhoto: "/ayana.jpg",           // Ayana's photo (older About component)
    storyPhoto: "/new/yoann-boyer-i14h2xyPr18-unsplash.jpg", // Photo in "The Story Behind the Practice" section
  },

  // ───────────── CONTACT PAGE ─────────────
  contact: {
    hero: "/new/road-ahead-dew7US2GI6I-unsplash.jpg", // Top banner of the Contact page
  },

  // ───────────── ACT PAGE (Acceptance & Commitment Therapy) ─────────────
  act: {
    hero: "/new/kylo-YrVe-fEqtYM-unsplash.jpg",              // Top banner
    section1: "/new/billy-pasco-se3tHNszbkM-unsplash.jpg",   // 1st content section photo
    section2: "/new/alonso-reyes-JCaw4DRqekk-unsplash.jpg",  // 2nd content section photo
    section3: "/new/katarzyna-zygnerska-G4rGkoRnoNw-unsplash.jpg", // 3rd content section photo
    section4: "/new/gary-yost--iZGedR1uJo-unsplash.jpg",     // 4th content section photo
    cta: "/new/hester-qiang-95t94hZTESw-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── ART PAGE (Accelerated Resolution Therapy) ─────────────
  art: {
    hero: "/new/zach-key-rKE6rXOl14U-unsplash.jpg",          // Top banner
    section1: "/new/jakob-braun-HfOOKAPsE28-unsplash.jpg",   // 1st content section photo
    section2: "/new/priscilla-du-preez-aPa843frIzI-unsplash.jpg", // 2nd content section photo
    section3: "/new/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg",  // 3rd content section photo
    section4: "/new/javardh-FL6rma2jePU-unsplash.jpg",       // 4th content section photo
    cta: "/new/zach-key-rKE6rXOl14U-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ───────────── DBT PAGE (Dialectical Behavior Therapy) ─────────────
  dbt: {
    hero: "/new/pawel-czerwinski-WVEKM88v9VM-unsplash.jpg",  // Top banner
    section1: "/new/and_picture.png",                        // 1st content section photo
    section2: "/new/deniz-altindas-t1XLQvDqt_4-unsplash.jpg",// 2nd content section photo
    section3: "/new/markus-winkler-aXkQK_mc5Dw-unsplash.jpg",// 3rd content section photo
    section4: "/new/aakifah-shaikh-Dh1pFElYVpI-unsplash.jpg",// 4th content section photo
    cta: "/new/pawel-czerwinski-WVEKM88v9VM-unsplash.jpg",   // Bottom "Begin your journey" background
  },

  // ───────────── SĀF-T PAGE ─────────────
  saft: {
    hero: "/new/julia-elliot-DzGzcVzUGZI-unsplash.jpg",      // Top banner
    section1: "/new/hardingferrent-IpZ89zebL18-unsplash.jpg",// 1st content section photo
    section2: "/new/dylann-hendricks-z2rC_O-TosY-unsplash.jpg",// 2nd content section photo
    section3: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg",// 3rd content section photo
    section4: "/new/deniz-altindas-t1XLQvDqt_4-unsplash.jpg",// 4th content section photo
    cta: "/new/linus-nylund-Q5QspluNZmM-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── INCLUSIVE & AFFIRMING CARE PAGE ─────────────
  inclusive: {
    hero: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg",   // Top banner
    section1: "/new/nick-fewings-BAZejJdZ57w-unsplash.jpg",  // 1st content section photo
    section2: "/new/vijesh-datt-OuAyzIWfvGQ-unsplash.jpg",   // 2nd content section photo
    section3: "/new/priscilla-du-preez-aPa843frIzI-unsplash.jpg", // 3rd content section photo (Clinical Pillars)
    section4: "/new/deniz-altindas-t1XLQvDqt_4-unsplash.jpg",// 4th content section photo (What to Expect)
    cta: "/new/annie-pm-OEewhKC5rIc-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ───────────── TRAUMA & PTSD PAGE ─────────────
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

  // ───────────── ANXIETY & DEPRESSION PAGE ─────────────
  anxiety: {
    hero: "/new/hakon-grimstad-hteXWSF9jA4-unsplash.jpg",    // Top banner
    section1: "/new/arturo-anez-9yhBvC2ykoc-unsplash.jpg",
    section2: "/new/kyle-glenn-nXt5HtLmlgE-unsplash.jpg",
    section3: "/new/robina-weermeijer-3KGF9R_0oHs-unsplash.jpg",
    section4: "/new/priscilla-du-preez-aPa843frIzI-unsplash.jpg",
    section5: "/new/hester-qiang-95t94hZTESw-unsplash.jpg",
    section6: "/new/venwardo-F-ga6WwcqOQ-unsplash.jpg",
    section7: "/new/abel-marquez-0chVl3b15MQ-unsplash.jpg",
    cta: "/new/ralph-katieb-RO8_uFA-lhY-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── LIFE COACHING PAGE ─────────────
  lifeCoaching: {
    hero: "/new/alfred-schrock-shoE2y51uX0-unsplash.jpg",    // Top banner
    section1: "/new/gary-yost--iZGedR1uJo-unsplash.jpg",
    section2: "/new/sumit-jaswal-gzUj4xFysEc-unsplash.jpg",
    section3: "/new/matthew-tenbruggencate-mEctnMdXQ0M-unsplash.jpg",
    section4: "/new/alonso-reyes-JCaw4DRqekk-unsplash.jpg",
    section5: "/new/claiton-conto-8PiSDuUGP0Y-unsplash.jpg",
    section6: "/new/imre-zsolt-h7zZWJQ4DMs-unsplash.jpg",
    section7: "/new/valerii-ladomyriak-7oGXQII7AWc-unsplash (1).jpg",
    cta: "/new/annie-pm-OEewhKC5rIc-unsplash.jpg",           // Bottom "Begin your journey" background
  },

  // ───────────── WOMEN'S ISSUES PAGE ─────────────
  women: {
    hero: "/new/sincerely-media-Y9uctIXlUzQ-unsplash.jpg",   // Top banner
    section1: "/new/yoann-boyer-i14h2xyPr18-unsplash.jpg",
    section2: "/new/satit-wongsampan-9SM7OgDXmQY-unsplash (1).jpg",
    section3: "/new/hardingferrent-IpZ89zebL18-unsplash.jpg",
    section4: "/new/valerii-ladomyriak-7oGXQII7AWc-unsplash (1).jpg",
    section5: "/new/katarzyna-zygnerska-G4rGkoRnoNw-unsplash.jpg",
    section6: "/new/venwardo-F-ga6WwcqOQ-unsplash.jpg",
    section7: "/new/alonso-reyes-JCaw4DRqekk-unsplash.jpg",
    cta: "/new/kamil-kalkan-BTpIUnszs_Q-unsplash.jpg",       // Bottom "Begin your journey" background
  },

  // ───────────── IMMIGRATION EVALUATIONS PAGE ─────────────
  immigration: {
    card1: "/new/edward-howell-VlTJdP8ZY1c-unsplash.jpg",    // 1st service card image
    card2: "/new/markus-winkler-aXkQK_mc5Dw-unsplash.jpg",   // 2nd service card image
    showcase: "/new/michael-wave-_wMJkbRDgNU-unsplash.jpg",  // Large showcase photo
    cta: "/new/elena-mozhvilo-j06gLuKK0GM-unsplash.jpg",     // Bottom call-to-action background
  },

  // ───────────── MANIFEST METHOD PAGE ─────────────
  manifest: {
    hero: "/new/jordan-mcqueen-956I1peiMi4-unsplash.jpg",    // Top banner
    workbook: "/new/lakeisha-bennett-znBJkXzo8ik-unsplash.jpg",// Workbooks "coming soon" section
  },

  // ───────────── bARTer BALANCE PAGE ─────────────
  barter: {
    section1: "/new/openhands.jpg",                          // 1st content section photo
    section2: "/new/nature_img.png",                         // 2nd content section photo
    section3: "/new/hardingferrent-IpZ89zebL18-unsplash.jpg",// 3rd content section photo
    logo1: "/new/acceleratedresart.png",                     // ART logo
    logo2: "/new/is-art-logo-large.png",                     // IS-ART logo
    logo3: "/new/manifest-coaching-logo.png",                // MANIFEST Coaching logo
    showcase: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg",// Showcase photo
    cta: "/new/kyle-glenn-nXt5HtLmlgE-unsplash.jpg",         // Call-to-action background
    ayanaHeadshot: "/new/ayana-headshot.jpg",                // Ayana's photo on this page
    closing: "/new/sincerely-media-kSeo6slWMQE-unsplash.jpg",// Closing section photo
  },

};
