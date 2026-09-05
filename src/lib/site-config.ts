export const siteConfig = {
  name: "Joshua Rhei J. Liao",
  role: "Software Engineer & Computer Science Student",
  email: "liaojoshuarhei@gmail.com",
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
    { label: "GitHub", href: "https://github.com/Relleeee" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joshua-liao-2637bb250/" },
    { label: "Instagram", href: "https://www.instagram.com/j.rhei/" },
    { label: "Twitter", href: "https://twitter.com/Relle121103" },
    { label: "Facebook", href: "https://www.facebook.com/j.rheiii" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
export type SocialLink = (typeof siteConfig.social)[number];
