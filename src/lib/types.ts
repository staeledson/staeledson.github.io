export type Lang = "pt" | "en";

export interface NavLink { id: string; label: string }
export interface StatItem { value: number; suffix: string; label: string }
export interface SkillItem { name: string; level: number }
export interface SkillCategory { id: string; pt: string; en: string; items: SkillItem[] }
export interface ExperienceItem {
  role: string; company: string; location: string; period: string;
  summary: string; bullets: string[];
}
export interface DiffItem { t: string; d: string }
export interface Testimonial { quote: string; name: string; role: string }

export interface ProjectCopy {
  title: string; category: string; tagline: string;
  problem: string; solution: string; challenge: string; result: string;
}
export interface Project {
  id: string; image: string; featured: boolean; tags: string[];
  link: string | null; github: string | null;
  pt: ProjectCopy; en: ProjectCopy;
}

export interface Dictionary {
  meta: { lang: Lang; switchTo: string };
  nav: { links: NavLink[]; cv: string; contact: string };
  hero: {
    badge: string; role: string; h1a: string; h1b: string; sub: string;
    ctaProjects: string; ctaLinkedin: string; ctaGithub: string; ctaCv: string; stackLabel: string;
  };
  about: {
    kicker: string; title: string; p1: string; p2: string; p3: string; p4: string; photoAlt: string;
  };
  stats: { kicker: string; items: StatItem[] };
  skills: { kicker: string; title: string; sub: string; legendAdv: string; legendInt: string };
  experience: { kicker: string; title: string; present: string; items: ExperienceItem[] };
  projects: {
    kicker: string; title: string; sub: string; featuredLabel: string;
    viewCase: string; live: string; code: string;
    labels: { problem: string; solution: string; challenge: string; result: string; stack: string };
  };
  diff: { kicker: string; title: string; items: DiffItem[] };
  testimonials: { kicker: string; title: string; note: string; items: Testimonial[] };
  contact: {
    kicker: string; title: string; sub: string; email: string; whatsapp: string;
    linkedin: string; github: string; cta: string; availability: string;
  };
  footer: { tagline: string; built: string; top: string };
}
