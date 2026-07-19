/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — single source of truth for the whole portfolio.
 *
 *  Everything personal lives here. To make the site "yours," you only ever
 *  need to edit this one file — the components read from it automatically.
 *
 *  Placeholders are marked with «…». Replace them, or leave them and the
 *  site still renders cleanly.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  /** Icon key rendered by components/icons.tsx */
  icon: "email" | "linkedin" | "x" | "website" | "github";
};

export type Artifact = {
  /** Stable id used for the modal + anchor links */
  id: string;
  title: string;
  /** Short one-line summary shown on the card */
  summary: string;
  /** Optional tag chips (e.g. "Google Classroom", "PBL", "Assessment") */
  tags?: string[];
  /** Longer reflection shown inside the modal (supports multiple paragraphs) */
  reflection: string[];
  /** Optional external evidence link (Drive doc, slides, video, etc.) */
  evidence?: { label: string; href: string };
  /** Optional image dropped into /public/artifacts (e.g. "/artifacts/x.jpg") */
  image?: string;
};

export type Domain = {
  /** URL slug, e.g. "learner" -> /learner */
  slug: string;
  /** Display index shown as a big editorial numeral, e.g. "01" */
  index: string;
  /** ISTE standard reference, e.g. "ISTE 2.1" */
  standard: string;
  title: string;
  /** One-line tagline under the title */
  tagline: string;
  /** Official-ish summary of what the standard asks of educators */
  description: string;
  /** Your personal narrative / how you demonstrate this domain */
  narrative: string[];
  artifacts: Artifact[];
};

/* ── Person / identity ──────────────────────────────────────────────────── */

export const person = {
  name: "Madison Gelfand",
  /** Shown in the hero as a short role line */
  role: "Elementary School Teacher",
  organization: "Charlotte-Mecklenburg Schools",
  /** Optional program / course this portfolio supports */
  program:
    "M.Ed. in Curriculum & Instruction · ELDT 5100 — Technology Integration in Education",
  /** Hero headline — the big editorial statement */
  headline: "Educator. Learner. Designer of student-centered experiences.",
  /** 1–3 sentence intro shown on the home page */
  intro: [
    "Welcome to my professional ePortfolio. I'm an elementary educator with Charlotte-Mecklenburg Schools, documenting my growth through the ISTE Standards for Educators — Learner, Leader, Citizen, and Designer.",
    "As a graduate student pursuing my M.Ed. in Curriculum & Instruction, I'm passionate about integrating technology in ways that make learning more engaging, equitable, and student-centered for every child in my classroom. Each section pairs reflection with real artifacts from my practice.",
  ],
  /** Path to a headshot placed in /public (e.g. "/headshot.jpg"). Empty = initials avatar. */
  photo: "",
  location: "Charlotte, North Carolina",
};

/* ── Contact / socials ──────────────────────────────────────────────────── */

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:mgelfand@charlotte.edu", icon: "email" },
  // { label: "LinkedIn", href: "https://linkedin.com/in/«you»", icon: "linkedin" },
  // { label: "X / Twitter", href: "https://x.com/«you»", icon: "x" },
];

/* ── Primary navigation ─────────────────────────────────────────────────── */

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Learner", href: "/learner" },
  { label: "Leader", href: "/leader" },
  { label: "Citizen", href: "/citizen" },
  { label: "Designer", href: "/designer" },
];

/* ── The four ISTE Educator domains ─────────────────────────────────────── */

export const domains: Domain[] = [
  {
    slug: "learner",
    index: "01",
    standard: "ISTE 2.1",
    title: "Learner",
    tagline: "Continually growing through and with others.",
    description:
      "Educators continually improve their practice by learning from and with others and by exploring proven and promising practices that leverage technology to improve student learning.",
    narrative: [
      "«Write about how you pursue ongoing professional learning — PLCs, conferences, coursework, online communities, and how you set and reflect on professional goals.»",
    ],
    artifacts: [
      {
        id: "learner-artifact-1",
        title: "«Professional Learning Artifact»",
        summary: "«One line describing the evidence and what it shows.»",
        tags: ["Professional Development", "Reflection"],
        reflection: [
          "«Describe the context: what was the learning experience or goal?»",
          "«Reflect: what did you learn, and how did it change your practice with students?»",
        ],
        // evidence: { label: "View certificate", href: "#" },
      },
    ],
  },
  {
    slug: "leader",
    index: "02",
    standard: "ISTE 2.2",
    title: "Leader",
    tagline: "Advocating for student success and empowerment.",
    description:
      "Educators seek out opportunities for leadership to support student empowerment and success and to improve teaching and learning.",
    narrative: [
      "«Write about how you lead — mentoring peers, leading initiatives, advocating for equitable access to technology, or shaping a shared vision at your school.»",
    ],
    artifacts: [
      {
        id: "leader-artifact-1",
        title: "«Leadership Artifact»",
        summary: "«One line describing the evidence and what it shows.»",
        tags: ["Leadership", "Advocacy"],
        reflection: [
          "«Describe the initiative or leadership role you took on.»",
          "«Reflect on the impact for students, colleagues, or your community.»",
        ],
      },
    ],
  },
  {
    slug: "citizen",
    index: "03",
    standard: "ISTE 2.3",
    title: "Citizen",
    tagline: "Modeling responsible participation in the digital world.",
    description:
      "Educators inspire students to positively contribute to and responsibly participate in the digital world.",
    narrative: [
      "«Write about how you cultivate digital citizenship — online safety, media literacy, ethical use of technology, and empowering students as responsible digital contributors.»",
    ],
    artifacts: [
      {
        id: "citizen-artifact-1",
        title: "«Digital Citizenship Artifact»",
        summary: "«One line describing the evidence and what it shows.»",
        tags: ["Digital Citizenship", "Media Literacy"],
        reflection: [
          "«Describe the lesson, policy, or practice you developed.»",
          "«Reflect on how it helped students participate responsibly online.»",
        ],
      },
    ],
  },
  {
    slug: "designer",
    index: "04",
    standard: "ISTE 2.5",
    title: "Designer",
    tagline: "Crafting authentic, learner-driven experiences.",
    description:
      "Educators design authentic, learner-driven activities and environments that recognize and accommodate learner variability.",
    narrative: [
      "«Write about how you design instruction — using UDL, differentiation, and technology to build authentic learning environments responsive to every learner.»",
    ],
    artifacts: [
      {
        id: "designer-artifact-1",
        title: "«Instructional Design Artifact»",
        summary: "«One line describing the evidence and what it shows.»",
        tags: ["Instructional Design", "UDL"],
        reflection: [
          "«Describe the learning experience you designed and the tools you used.»",
          "«Reflect on how the design accommodated learner variability.»",
        ],
      },
    ],
  },
];

/* ── Helpers ────────────────────────────────────────────────────────────── */

export function getDomain(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}

export const site = {
  /** Used for <title> templates and metadata */
  name: `${person.name} — ePortfolio`,
  shortName: "ePortfolio",
  description:
    "A professional educator ePortfolio organized around the ISTE Standards for Educators.",
  /** Set to your deployed origin for absolute metadata URLs, e.g. https://name.github.io */
  url: "https://example.com",
};
