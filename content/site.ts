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
    "Master of Education (M.Ed.) in Curriculum & Instruction · ELDT 5100 — Technology Integration in Education",
  /** Hero headline — the big editorial statement */
  headline: "Educator. Learner. Designer of student-centered experiences.",
  /** Hero blurb — what this site is and why it exists. */
  intro:
    "Welcome to my professional electronic portfolio (ePortfolio), created to satisfy the requirements of ELDT 5100 — Technology Integration in Education. This site documents my growth through the International Society for Technology in Education (ISTE) Standards for Education Leaders: Citizen, Leader, Designer, and Learner, with each section pairing reflection with real artifacts from my practice.",
  /** About Me paragraphs. The first renders larger; the rest as body text. */
  about: [
    "I'm an elementary school teacher with Charlotte-Mecklenburg Schools. I've taught 3rd grade and 2nd grade, and I'll soon be teaching 4th grade.",
    "My teaching philosophy revolves around a strong passion for supporting students in any way possible, starting with creating a safe and supportive environment where every child feels secure enough to take risks as a learner. Beyond that, I strive to differentiate materials to meet students exactly where they are, so that every student has a genuine entry point into the work.",
    "Technology is one of the most powerful tools I have for doing both of those things. I'm passionate about integrating technology in ways that make learning more engaging, equitable, and student-centered for every child in my classroom.",
  ],
  /** Path to a headshot placed in /public (e.g. "/headshot.jpg"). Empty = initials avatar. */
  photo: "/headshot.jpg",
  location: "Charlotte, North Carolina",
};

/* ── Feature image ──────────────────────────────────────────────────────────
   A wide photo on the home page that captures what this project is about —
   your classroom, students working with technology, a project in progress.
   Drop a copyright-free image in /public (e.g. "/project-photo.jpg") and set
   `src` below. While `src` is empty the home page shows a labeled placeholder.
   Always fill in `alt` for screen readers.                                  */

export const featureImage = {
  src: "",
  alt: "",
  /** Optional caption shown beneath the image. */
  caption: "",
};

/* ── Contact / socials ──────────────────────────────────────────────────── */

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:mgelfand@charlotte.edu", icon: "email" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/madison-gelfand-4bb447209/",
    icon: "linkedin",
  },
];

/* ── Primary navigation ─────────────────────────────────────────────────── */

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Citizen", href: "/citizen" },
  { label: "Leader", href: "/leader" },
  { label: "Designer", href: "/designer" },
  { label: "Learner", href: "/learner" },
];

/* ── The four ISTE Education Leaders domains ─────────────────────────────────
   Ordered by standard number (3.1 → 3.3 → 3.4 → 3.5). The `index` numerals
   follow this display order, and both the nav and the home page grid read
   from this array, so reordering here reorders the whole site.             */

export const domains: Domain[] = [
  {
    slug: "citizen",
    index: "01",
    standard: "ISTE 3.1",
    title: "Citizen",
    tagline: "Advancing equity, inclusion, and digital citizenship.",
    description:
      "Equity and Citizenship Advocate: Leaders use technology to increase equity, inclusion and digital citizenship practices.",
    narrative: [
      "«Write about how you cultivate digital citizenship — online safety, media literacy, ethical use of technology, and empowering students as responsible digital contributors.»",
    ],
    artifacts: [
      {
        id: "citizen-artifact-1",
        title: "Healthy Tech at Home: A Family Memo",
        summary:
          "A memo to families with research-based strategies for healthy technology use and reducing online-rooted peer conflict.",
        tags: ["Family Communication", "Digital Citizenship"],
        reflection: [
          "«Describe the context: what prompted this memo, and how did you develop it?»",
          "«Reflect on how it helped students participate responsibly online.»",
          "This memo models ISTE Standard 3.1.c (Model Inclusive, Healthy Use) by explaining how excessive device use affects students' socioemotional health and sleep, and Standard 3.1.d (Model Safe, Ethical, Legal Use) by teaching a concrete strategy — \"Freeze before you 'tease'\" — for respectful online communication.",
        ],
        evidence: {
          label: "Read the memo (PDF)",
          href: "/artifacts/citizen-healthy-tech-memo.pdf",
        },
      },
    ],
  },
  {
    slug: "leader",
    index: "02",
    standard: "ISTE 3.3",
    title: "Leader",
    tagline: "Empowering teachers and learners to innovate with technology.",
    description:
      "Empowering Leader: Leaders create a culture where teachers and learners are empowered to use technology in innovative ways to enrich teaching and learning.",
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
          "«Justify why this project belongs under the Leader standard.»",
        ],
      },
    ],
  },
  {
    // Page 4 — "your choice" of a remaining ISTE standard. Chosen: Designer
    // (3.4 Systems Designer). The one remaining Education Leaders standard is
    // 3.2 Visionary Planner. To switch, update the fields below and rename
    // `slug` + the app/designer/ folder + the nav href to match.
    slug: "designer",
    index: "03",
    standard: "ISTE 3.4",
    title: "Designer",
    tagline: "Building teams and systems that sustain learning with technology.",
    description:
      "Systems Designer: Leaders build teams and systems to implement, sustain and continually improve the use of technology to support learning.",
    narrative: [
      "«Write about how you design instruction and systems — using Universal Design for Learning (UDL), differentiation, and technology to build authentic learning environments responsive to every learner.»",
    ],
    artifacts: [
      {
        id: "designer-artifact-1",
        title: "«Instructional Design Artifact»",
        summary: "«One line describing the evidence and what it shows.»",
        tags: ["Instructional Design", "Universal Design for Learning"],
        reflection: [
          "«Describe the learning experience you designed and the tools you used.»",
          "«Reflect on how the design accommodated learner variability.»",
          "«Justify why this project belongs under the Designer standard.»",
        ],
      },
    ],
  },
  {
    slug: "learner",
    index: "04",
    standard: "ISTE 3.5",
    title: "Learner",
    tagline: "Modeling continuous professional learning.",
    description:
      "Connected Learner: Leaders model and promote continuous professional learning for themselves and others.",
    narrative: [
      "«Write about how you pursue ongoing professional learning — professional learning communities (PLCs), conferences, coursework, online communities, and how you set and reflect on professional goals.»",
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
          "«Justify why this project belongs under the Learner standard.»",
        ],
        // evidence: { label: "View certificate", href: "#" },
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
    "A professional educator ePortfolio organized around the ISTE Standards for Education Leaders.",
  /** Deployed origin for absolute metadata URLs. */
  url: "https://mgelfand615.github.io/Electronic-Portfolio",
  /** The official ISTE standards this portfolio is organized around. */
  standards: {
    label: "ISTE Standards for Education Leaders",
    href: "https://iste.org/standards/education-leaders",
  },
};
