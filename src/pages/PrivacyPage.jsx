const EFFECTIVE_DATE = "October 13, 2026";

const sections = [
  {
    heading: "Who we are",
    body: (
      <>
        <p>
          The Peace Practice is the trade name of MANIFEST Coaching LLC. Clinical therapy is provided by Ayana Foluke McKanney, LCSW, licensed in New York, New Jersey and Rhode Island. Coaching and professional training are provided through MANIFEST Coaching LLC.
        </p>
        <p>
          This policy explains what information this website collects, why, and who it is shared with. It covers thepeacepractice.me only. Your records as a therapy client are covered separately, as described below.
        </p>
      </>
    ),
  },
  {
    heading: "Information you give us",
    body: (
      <>
        <p>
          When you send a message through a contact form, we receive your name, email address, phone number, the service you are interested in and your message. We use it only to reply to you, answer your questions and arrange a consultation.
        </p>
        <p>
          <strong>Please keep health details out of the contact form.</strong> Form messages travel by ordinary email, which is not built for protected health information. Share only what we need to get back to you, and we will talk through the rest privately once we connect.
        </p>
      </>
    ),
  },
  {
    heading: "Information collected automatically",
    body: (
      <>
        <p>
          We use Ahrefs Web Analytics to see how many people visit and which pages they read. It does not use cookies and does not identify individual visitors. Our hosting provider, Vercel, keeps standard server logs, such as IP address and browser type, to deliver the site and keep it secure.
        </p>
        <p>
          This website does not set advertising or tracking cookies. Because we do not track you across other websites, we do not change anything in response to a browser's Do Not Track signal.
        </p>
      </>
    ),
  },
  {
    heading: "Services we rely on",
    body: (
      <>
        <p>Some features run on outside services, each with its own privacy policy:</p>
        <ul>
          <li><strong>EmailJS</strong> delivers contact form messages to our inbox.</li>
          <li><strong>Calendly</strong> handles consultation bookings.</li>
          <li><strong>Alma</strong> and <strong>Headway</strong> handle therapy booking and insurance billing when you choose to book through them.</li>
          <li><strong>Instagram, Facebook and LinkedIn</strong> links take you to those platforms, where their own policies apply.</li>
        </ul>
        <p>We do not sell, rent or trade your personal information, and we do not share it for marketing.</p>
      </>
    ),
  },
  {
    heading: "Therapy records and HIPAA",
    body: (
      <p>
        If you become a therapy client, your health information is protected under HIPAA and the privacy laws of the state where you receive care. How it is used and your rights over it are set out in our Notice of Privacy Practices, which you receive when care begins. You can request a copy at any time by emailing <a href="mailto:portal@thepeacepractice.me">portal@thepeacepractice.me</a>.
      </p>
    ),
  },
  {
    heading: "Coaching and training",
    body: (
      <p>
        Coaching and professional training are not clinical services, so HIPAA does not apply to them. We still keep what you share confidential and use it only to provide the service you signed up for, except where the law requires otherwise.
      </p>
    ),
  },
  {
    heading: "Not for emergencies",
    body: (
      <p>
        Our contact forms and email are not monitored around the clock. If you are in crisis, call or text <a href="tel:988">988</a> (Suicide and Crisis Lifeline) or call <a href="tel:911">911</a>.
      </p>
    ),
  },
  {
    heading: "How long we keep information",
    body: (
      <p>
        We keep contact form messages for as long as needed to respond and follow up. Clinical records are kept for the period required by state law and professional rules.
      </p>
    ),
  },
  {
    heading: "Security",
    body: (
      <p>
        We take reasonable steps to protect the information we receive. No method of sending information over the internet is completely secure, which is another reason to keep sensitive details out of web forms and email.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        You can ask us to tell you what contact information we hold about you, correct it or delete it by emailing <a href="mailto:portal@thepeacepractice.me">portal@thepeacepractice.me</a>. Requests about therapy records follow the process in the Notice of Privacy Practices.
      </p>
    ),
  },
  {
    heading: "Children",
    body: (
      <p>
        This website is not directed at children under 13, and we do not knowingly collect their information. Clinical therapy is offered to individuals aged 17 and older.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If we update this policy, we will post the new version here with a new effective date.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        Questions about this policy can go to <a href="mailto:portal@thepeacepractice.me">portal@thepeacepractice.me</a> or <a href="tel:+19299003056">(929) 900-3056</a>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <title>Privacy Policy | The Peace Practice</title>
      <meta name="description" content="How The Peace Practice website collects, uses and protects your information, and how therapy records are handled under HIPAA." />
      <link rel="canonical" href="https://www.thepeacepractice.me/privacy" />

      <div className="bg-white min-h-screen">
        <div className="bg-gradient-to-br from-black to-[#2a2016] pt-40 sm:pt-48 pb-14 sm:pb-16">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 font-[system-ui] leading-tight">
              Privacy Policy
            </h1>
            <p className="text-white/70 text-base font-[system-ui]">
              Effective {EFFECTIVE_DATE}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 font-[system-ui] text-gray-700 leading-relaxed">
          {sections.map((section) => (
            <section
              key={section.heading}
              className="mb-10 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-[#c09050] [&_a]:underline [&_strong]:text-gray-900"
            >
              <h2 className="text-2xl font-black text-black mb-4">{section.heading}</h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
