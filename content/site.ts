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
  /** Stable id used for anchor links */
  id: string;
  title: string;
  /** Description of the artifact, shown in the left column */
  summary: string;
  /** Optional tag chips (e.g. "Google Classroom", "PBL", "Assessment") */
  tags?: string[];
  /** Why this artifact is here + how it connects to the ISTE standard */
  justification: string[];
  /** Your reflection on completing the project */
  reflection: string[];
  /** Link to the artifact itself (PDF in /public/artifacts, Drive, video, …) */
  evidence?: { label: string; href: string };
  /** Optional image dropped into /public/artifacts (e.g. "/artifacts/x.jpg") */
  image?: string;
};

export type Domain = {
  /** URL slug, e.g. "learner" -> /learner */
  slug: string;
  /** ISTE standard reference, e.g. "ISTE 3.1" */
  standard: string;
  title: string;
  /** One-line tagline — used on the home page grid only */
  tagline: string;
  /** The official standard text, shown under "The Standard" on the page */
  description: string;
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
   The image beside the welcome message on the home page. Currently an original
   cartoon illustration drawn for this portfolio (public/project-illustration.svg).
   To swap in a photo, drop a copyright-free file in /public and point `src` at
   it — clearing `src` falls back to a labeled placeholder. Always keep `alt`
   filled in for screen readers.                                             */

export const featureImage = {
  src: "/project-illustration.svg",
  alt: "Cartoon illustration of a classroom desk with a laptop, stacked books, alphabet and number blocks, a cup of pencils, a potted plant, a lightbulb, and a paper airplane.",
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
   Ordered by standard number (3.1 → 3.3 → 3.4 → 3.5). The nav, the home page
   grid, and the "next standard" link all read from this array, so reordering
   here reorders the whole site.                                            */

export const domains: Domain[] = [
  {
    slug: "citizen",
    standard: "ISTE 3.1",
    title: "Citizen",
    tagline: "Advancing equity, inclusion, and digital citizenship.",
    description:
      "Equity and Citizenship Advocate: Leaders use technology to increase equity, inclusion and digital citizenship practices.",
    artifacts: [
      {
        id: "citizen-artifact-1",
        title: "Healthy Tech at Home: A Family Memo",
        summary:
          "A memo to families with research-based strategies for healthy technology use and reducing online-rooted peer conflict.",
        tags: ["Family Communication", "Digital Citizenship"],
        justification: [
          "This memo models ISTE Standard 3.1.c (Model Inclusive, Healthy Use) by explaining how excessive device use affects students' socioemotional health and sleep, and Standard 3.1.d (Model Safe, Ethical, Legal Use) by teaching a concrete strategy — \"Freeze before you 'tease'\" — for respectful online communication.",
        ],
        reflection: [
          "Completing this project taught me how important it is to share technology information openly with staff, students, and families. Technology is used for so much these days — how students learn, how they communicate, and how they spend their time outside of school — which makes it essential that everyone in our school community knows how to use it safely and respectfully.",
          "Writing for families in particular pushed me to translate research into practical steps they could actually use at home. It reinforced that digital citizenship works best when school and home are holding the same expectations, and that my role extends beyond teaching students directly to equipping the adults around them.",
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
    standard: "ISTE 3.3",
    title: "Leader",
    tagline: "Empowering teachers and learners to innovate with technology.",
    description:
      "Empowering Leader: Leaders create a culture where teachers and learners are empowered to use technology in innovative ways to enrich teaching and learning.",
    artifacts: [
      {
        id: "leader-artifact-1",
        title: "«Leadership Artifact»",
        summary: "«Describe the artifact — what it is and what it shows.»",
        tags: ["Leadership", "Advocacy"],
        justification: [
          "«Explain why you included this artifact and how it connects to ISTE Standard 3.3, Empowering Leader.»",
        ],
        reflection: [
          "«Reflect on completing this project: what you learned and how it shaped your practice.»",
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
    standard: "ISTE 3.4",
    title: "Designer",
    tagline: "Building teams and systems that sustain learning with technology.",
    description:
      "Systems Designer: Leaders build teams and systems to implement, sustain and continually improve the use of technology to support learning.",
    artifacts: [
      {
        id: "designer-artifact-1",
        title: "«Instructional Design Artifact»",
        summary: "«Describe the artifact — what it is and what it shows.»",
        tags: ["Instructional Design", "Universal Design for Learning"],
        justification: [
          "«Explain why you included this artifact and how it connects to ISTE Standard 3.4, Systems Designer.»",
        ],
        reflection: [
          "«Reflect on completing this project: what you learned and how it shaped your practice.»",
        ],
      },
    ],
  },
  {
    slug: "learner",
    standard: "ISTE 3.5",
    title: "Learner",
    tagline: "Modeling continuous professional learning.",
    description:
      "Connected Learner: Leaders model and promote continuous professional learning for themselves and others.",
    artifacts: [
      {
        id: "learner-artifact-1",
        title: "«Professional Learning Artifact»",
        summary: "«Describe the artifact — what it is and what it shows.»",
        tags: ["Professional Development", "Reflection"],
        justification: [
          "«Explain why you included this artifact and how it connects to ISTE Standard 3.5, Connected Learner.»",
        ],
        reflection: [
          "«Reflect on completing this project: what you learned and how it shaped your practice.»",
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
