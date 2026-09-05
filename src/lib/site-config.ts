export const siteConfig = {
  name: "Joshua Rhei J. Liao",
  shortName: "Joshua Liao",
  role: "Software Engineer & Computer Science Student",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "UI/UX Designer",
  ],
  email: "liaojoshuarhei@gmail.com",
  // Set once a public resume link is available; the CV button hides until then.
  resumeUrl: "",
  profileImage: "/images/profile.png",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/Relleeee", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joshua-liao-2637bb250/",
      icon: "linkedin",
    },
    { label: "Instagram", href: "https://www.instagram.com/j.rhei/", icon: "instagram" },
    { label: "Twitter", href: "https://twitter.com/Relle121103", icon: "twitter" },
    { label: "Facebook", href: "https://www.facebook.com/j.rheiii", icon: "facebook" },
  ],
  about: {
    paragraphs: [
      "I'm a Computer Science undergraduate at the University of Roehampton, London, and a graduate of Lithan Academy's Higher Diploma in Software Engineering. I build full-stack web applications end to end — from database schema to the pixels on screen.",
      "Most recently I've been building ChordScribe, my final year project: a tool that listens to a song and turns it into a guitar-friendly chord sheet, complete with fingering diagrams, tab, and lyrics — combining a Python audio-ML pipeline with a Next.js frontend.",
      "Alongside my studies I'm currently a Software Engineer Intern at HorecaBid, and have previously interned at Canary Intelligence and Analytics, Chimes Consulting, and Smmile Digital across Singapore, Malaysia, and the Philippines.",
    ],
  },
  skills: [
    {
      category: "Software Development",
      description:
        "Full-stack web development, from React/Next.js frontends to Python and Java backends.",
      tags: [
        "TypeScript",
        "React",
        "Next.js",
        "JavaScript",
        "Python",
        "FastAPI",
        "Java",
        "Spring Boot",
        "PHP",
        "Vue 3 / Vuetify 3",
        "Node.js",
        "PostgreSQL",
        "HTML & CSS",
      ],
    },
    {
      category: "UI/UX Design",
      description:
        "Designing and prototyping interfaces before writing a line of code.",
      tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Axure", "Draw.io", "WordPress"],
    },
    {
      category: "Video Editing",
      description: "Editing project demos and video introductions.",
      tags: ["CapCut", "DaVinci Resolve", "Filmora"],
    },
  ],
  experience: [
    {
      role: "Software Engineer Intern",
      company: "HorecaBid",
      location: "Malaysia",
      logo: "/images/work/horecabid.png",
      duration: "September 2024 — Present",
      hours: "1000+ Hours",
      skills: [
        "Python",
        "JavaScript",
        "HTML",
        "PHP",
        "Chatbot Testing",
        "Technical Support",
      ],
      responsibilities: [
        "Completed technical support training covering the full product stack",
        "Tested chatbot functionality and reported issues found",
      ],
      companyUrl: "https://www.horecabid.com/",
    },
    {
      role: "Software Developer Intern",
      company: "Canary Intelligence and Analytics",
      location: "Singapore",
      logo: "/images/work/canary.jpeg",
      duration: "June 2024 — August 2024",
      hours: "378 Hours",
      skills: [
        "Vue 3",
        "Vuetify 3",
        "Node.js",
        "PostgreSQL",
        "Jira",
        "Confluence",
      ],
      responsibilities: [
        "Made UI modifications to the production app using Vue 3",
        "Tested and validated internal APIs",
      ],
      companyUrl: "",
    },
    {
      role: "Work Trial Agreement",
      company: "Chimes Consulting",
      location: "Philippines",
      logo: "/images/work/chimes-consulting.jpg",
      duration: "March 2024 — April 2024",
      hours: "189 Hours",
      skills: ["Figma", "Figma Prototyping", "Photoshop", "UI Testing"],
      responsibilities: [
        "Designed user interfaces in Figma",
        "Prepared UI proposal decks in Google Slides",
      ],
      companyUrl: "",
    },
    {
      role: "Software Engineering Intern",
      company: "Smmile Digital",
      location: "Singapore",
      logo: "/images/work/smmile.jpg",
      duration: "November 2023 — December 2023",
      hours: "225 Hours",
      skills: ["WordPress", "WordPress Plugin Development", "PHP", "UI Design"],
      responsibilities: [
        "Made UI changes and built plugins in WordPress",
        "Tested WordPress plugins across environments",
      ],
      companyUrl: "https://smmile.com/",
    },
  ],
  projects: [
    {
      name: "ChordScribe",
      description:
        "Turns a song (MP3, MP4, or a YouTube link) into a timestamped, guitar-friendly chord sheet — with fingering diagrams, tab transcription, lyric alignment, and a built-in mic tuner.",
      tags: ["Next.js", "TypeScript", "Python", "FastAPI", "PyTorch", "Prisma"],
      featured: true,
      status: "BSc Final Year Project — in development",
    },
    {
      name: "ABC Learning Center",
      description: "A learning center site built as a full front-to-back web module.",
      image: "/images/projects/abc-learning-center.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "ABC Job Portal",
      description: "A job portal with listing search, applications, and account registration.",
      image: "/images/projects/abc-job-portal.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Meals On Wheels",
      description: "A food ordering and delivery site with account and checkout flows.",
      image: "/images/projects/meals-on-wheels.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Jumpstart E-Commerce",
      description: "An e-commerce storefront with cart, wishlist, and checkout.",
      image: "/images/projects/jumpstart-ecommerce.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ],
  education: [
    {
      school: "University of Roehampton, London",
      credential: "BSc (Hons) Computer Science",
      period: "2025 — Present",
    },
    {
      school: "Lithan Academy PTE. LTD., Singapore",
      credential: "Higher Diploma in Software Engineering",
      period: "2022 — 2024",
    },
  ],
  testimonial: {
    quote:
      "The team at SMMILE is impressed and complimentary on the quality of your work and attitude. I believe that you will be able to progress well in your career and I will have no hesitation to work with you again in the future.",
    name: "Bryan Ho",
    title: "Director, Smmile Digital",
    image: "/images/testimonial/bryan-ho.jpg",
  },
} as const;

export type SkillGroup = (typeof siteConfig.skills)[number];
export type ExperienceEntry = (typeof siteConfig.experience)[number];
export type ProjectEntry = (typeof siteConfig.projects)[number];
export type EducationEntry = (typeof siteConfig.education)[number];
