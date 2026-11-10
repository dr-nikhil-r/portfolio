// All site content lives here. Edit this file to update the website.
// Items in [square brackets] are placeholders to replace with real details.

export const site = {
  name: "Dr. Nikhil Reddy",
  firstLine: "Dr. Nikhil", // big hero name, line 1
  secondLine: "Reddy", //      big hero name, line 2
  // Logo: the header and footer show the "initials" monogram below.
  initials: "NR",
  role: "MBBS · Physician", // small spaced-out label above the intro
  qualifications: "MBBS",
  specialty: "Physician",
  location: "Bengaluru, India",
  // Three short facts in the bottom-right of the hero.
  heroFacts: [
    { label: "Currently", value: "Academic Associate" },
    { label: "Qualification", value: "MBBS" },
    { label: "Based in", value: "Bengaluru, India" },
  ],
  heroLine:
    "Helping patients understand their health and feel confident about their care, through clear advice and evidence-based treatment.",
  aboutHeading: "Caring with clarity and compassion",
  about:
    "Hi, I'm Dr. Nikhil Reddy. I was drawn to medicine by a simple belief: being unwell is frightening, and a good doctor can make it a little less so. I try to listen before I speak, explain things honestly and in plain words, and remember that every patient has a life, a family and worries that go far beyond the hospital bed. As I begin my postgraduate training, I'm still learning every day, and deeply grateful to the patients and teachers who are shaping the doctor I hope to become.",
  email: "2001nikhilraghunath@gmail.com",
  phone: "", // left blank so it isn't shown on the public site
  // Hero photo: replace src/assets/hero.png (transparent background, waist-up).
  // Approach photo: put an image in the "public" folder and set its name here, e.g. "/at-work.jpg".
  approachPhoto: "",
  // Free form service: create a form at https://formspree.io and paste its ID here.
  formspreeId: "",
  contactUrl: "#contact",
  // Appointment status shown in the hero and contact section.
  // Set acceptingAppointments to true (and update the text) when you start seeing patients again.
  acceptingAppointments: false,
  statusShort: "Not taking appointments · Beginning MD/MS training",
  statusLong:
    "I'm not seeing patients or taking appointments at the moment, as I'm beginning my postgraduate (MD/MS) training. For professional, academic or collaboration enquiries, I'd be glad to hear from you.",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nikhil-reddy-93507b263" },
  ],
};

export const approach = [
  { title: "Patient-centred care", text: "Treatment shaped around your history, goals and daily life, never a one-size-fits-all plan." },
  { title: "Clear explanations", text: "Diagnoses and options explained in plain language, so you always know what's happening and why." },
  { title: "Evidence-based practice", text: "Recommendations grounded in current research and clinical guidelines." },
  { title: "Continuous follow-up", text: "Regular check-ins to track progress and adjust care as your needs change." },
];

// Clinical skills (shown in the "Skills" section).
export const expertise = [
  { title: "Emergency care and resuscitation", text: "Trained in Basic Life Support and CPR, with endotracheal intubation performed under supervision." },
  { title: "Bedside procedures", text: "IV cannulation, urinary catheterisation, nasogastric tube insertion and ascitic tapping." },
  { title: "Wound care and suturing", text: "Wound assessment, dressing and care, suturing and wound closure." },
  { title: "Clinical assessment", text: "History taking, examination, diagnosis and treatment planning, including ABG sampling and analysis." },
  { title: "Community health", text: "Rural medical camps, cataract screening camps and vector-borne disease prevention work across Karnataka." },
  { title: "Medical teaching", text: "Lectures, small-group discussions and practical sessions in physiology for MBBS students." },
];

export const experience = [
  {
    role: "Academic Associate, Physiology",
    place: "M.S. Ramaiah Medical College, Bengaluru",
    years: "Sep – Dec 2026",
    note: "Teaching MBBS students through lectures, small-group discussions, practicals and mentoring.",
  },
  {
    role: "Rotating medical internship",
    place: "M.S. Ramaiah Hospital, Bengaluru",
    years: "Apr 2024 – May 2025",
    note: "One year across specialties, plus community outreach, cataract screening camps and rural medical camps in Karnataka.",
  },
  {
    role: "Medical internship, Oncology",
    place: "HCG, Bengaluru",
    years: "Jun – Dec 2022",
    note: "Inpatient and outpatient oncology: patient evaluation, tumour boards, treatment monitoring and counselling on supportive and palliative care.",
  },
];

export const education = [
  { degree: "MBBS", place: "Ramaiah Medical College, Bengaluru", years: "2019 – 2024" },
  { degree: "Grade 12", place: "Deeksha, Yelahanka", years: "2017 – 2019" },
];

export const credentials = [
  "Basic Life Support (BLS)",
  "Languages: English, Kannada, Telugu and Hindi",
];

// Research, talks, awards. Leave the list empty ([]) to hide the section.
export const research: { title: string; venue: string; year: string; url: string }[] = [
  // Example: { title: "Paper title", venue: "Journal name", year: "2026", url: "https://..." },
];

// Clinic details, shown in Contact only when acceptingAppointments is true.
export const practices: { name: string; address: string; hours: string }[] = [
  // Example: { name: "Clinic name", address: "Street, Area, City – PIN", hours: "Mon – Sat, 10 am – 2 pm" },
];
