// All site content lives here. Edit this file to update the website.
// Items in [square brackets] are placeholders to replace with real details.

export const site = {
  name: "Dr. Nikhil Reddy",
  firstLine: "Dr. Nikhil", // big hero name, line 1
  secondLine: "Reddy", //      big hero name, line 2
  // Logo: the header and footer show the "initials" monogram below.
  initials: "NR",
  role: "[Specialty] Physician", // small spaced-out label above the name
  qualifications: "[MBBS, MD]",
  specialty: "[Specialty]",
  yearsExperience: "[10]+",
  location: "[City], India",
  heroLine:
    "Helping patients understand their health and feel confident about their care, through clear advice and evidence-based treatment.",
  aboutHeading: "Caring with clarity and compassion",
  about:
    "Hi, I'm Dr. Nikhil Reddy. I was drawn to medicine by a simple belief: being unwell is frightening, and a good doctor can make it a little less so. I try to listen before I speak, explain things honestly and in plain words, and remember that every patient has a life, a family and worries that go far beyond the hospital bed. As I begin my postgraduate training, I'm still learning every day, and deeply grateful to the patients and teachers who are shaping the doctor I hope to become.",
  email: "[your-email@example.com]",
  phone: "[+91 00000 00000]",
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
    { label: "LinkedIn", url: "#" },
    { label: "Google Scholar", url: "#" },
  ],
};

export const approach = [
  { title: "Patient-centred care", text: "Treatment shaped around your history, goals and daily life, never a one-size-fits-all plan." },
  { title: "Clear explanations", text: "Diagnoses and options explained in plain language, so you always know what's happening and why." },
  { title: "Evidence-based practice", text: "Recommendations grounded in current research and clinical guidelines." },
  { title: "Continuous follow-up", text: "Regular check-ins to track progress and adjust care as your needs change." },
];

export const expertise = [
  { title: "[Condition or service 1]", text: "[One sentence on what you treat or offer and who it helps.]" },
  { title: "[Condition or service 2]", text: "[One sentence on what you treat or offer and who it helps.]" },
  { title: "[Condition or service 3]", text: "[One sentence on what you treat or offer and who it helps.]" },
  { title: "[Condition or service 4]", text: "[One sentence on what you treat or offer and who it helps.]" },
  { title: "[Condition or service 5]", text: "[One sentence on what you treat or offer and who it helps.]" },
  { title: "[Condition or service 6]", text: "[One sentence on what you treat or offer and who it helps.]" },
];

export const experience = [
  { role: "[Consultant, Department]", place: "[Hospital name, City]", years: "[2023 – Now]" },
  { role: "[Senior Resident]", place: "[Hospital name, City]", years: "[2020 – 2023]" },
];

export const education = [
  { degree: "[MD, Specialty]", place: "[Medical college / university]", years: "[2017 – 2020]" },
  { degree: "[MBBS]", place: "[Medical college / university]", years: "[2010 – 2016]" },
];

export const credentials = [
  "[Medical Council registration no. XXXXX]",
  "[Board certification / fellowship]",
  "[Membership, professional association]",
];

// Research, talks, awards. Leave the list empty ([]) to hide the section.
export const research = [
  { title: "[Title of research paper]", venue: "[Journal name]", year: "[2025]", url: "#" },
  { title: "[Conference talk or CME]", venue: "[Event name, City]", year: "[2024]", url: "#" },
  { title: "[Award or recognition]", venue: "[Awarding body]", year: "[2023]", url: "#" },
];

export const practices = [
  {
    name: "[Hospital or clinic name]",
    address: "[Street, Area, City – PIN]",
    hours: "[Mon – Sat, 10 am – 2 pm]",
  },
];
