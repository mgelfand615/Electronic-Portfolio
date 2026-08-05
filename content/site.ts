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
  /** Links to the artifact (PDF in /public/artifacts, website, video, …).
      The first entry is what the title links to; any additional entries are
      listed beneath the description. */
  evidence?: { label: string; href: string }[];
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
    "Master of Education (M.Ed.) in Curriculum & Instruction · ELDT 5100: Technology Integration in Education",
  /** Hero headline — drawn from the philosophy statement in About Me. */
  headline: "Supporting students in any way possible.",
  /** Hero blurb — what this site is and why it exists. */
  intro:
    "Welcome to my professional electronic portfolio (ePortfolio), created to satisfy the requirements of ELDT 5100: Technology Integration in Education. This site documents my growth through the International Society for Technology in Education (ISTE) Standards for Education Leaders: Citizen, Leader, Designer, and Learner.",
  /** About Me paragraphs. The first renders larger; the rest as body text. */
  about: [
    "I'm an elementary school teacher with Charlotte-Mecklenburg Schools. I've taught 3rd grade and 2nd grade, and I'll soon be teaching 4th grade.",
    "My teaching philosophy revolves around a strong passion for supporting students in any way possible, starting with creating a safe and supportive environment where students feel comfortable taking risks. Beyond that, I strive to differentiate materials to meet students exactly where they are.",
    "Technology is one of the best tools I have for doing both of those things. I'm passionate about integrating technology in ways that make learning more engaging, equitable, and student-centered for every child in my classroom.",
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
    tagline: "Equity and Citizenship Advocate",
    description:
      "Equity and Citizenship Advocate: Leaders use technology to increase equity, inclusion and digital citizenship practices.",
    artifacts: [
      {
        id: "citizen-artifact-1",
        title: "Healthy Tech at Home: A Family Memo",
        summary:
          "A memo written to families after a rise in peer conflict at recess was traced back to group chats students were using outside of school. It explains how excessive screen time and late-night device use affect students' sleep, emotions, and behavior during the school day, drawing on research about screen time and cyberbullying. The memo then offers practical strategies families can use at home, including pausing to think before sending a message, staying familiar with the apps their child uses, setting clear technology agreements, and creating a central charging station at night. It closes by outlining the steps teachers are taking at school to reinforce those same habits.",
        tags: ["Family Communication", "Digital Citizenship"],
        justification: [
          "This memo models ISTE Standard 3.1.c (Model Inclusive, Healthy Use) by explaining how excessive device use affects students' socioemotional health and sleep. It also models Standard 3.1.d (Model Safe, Ethical, Legal Use) by teaching students a concrete strategy for respectful online communication: pausing to \"freeze before you tease\" before sending a message.",
        ],
        reflection: [
          "Completing this project taught me the importance of sharing technology information with staff and students. Technology is being used for so much these days that it is super important for all staff, students, and parents to use it safely and respectfully.",
        ],
        evidence: [
          {
            label: "Read the memo (PDF)",
            href: "/artifacts/citizen-healthy-tech-memo.pdf",
          },
        ],
      },
    ],
  },
  {
    slug: "leader",
    standard: "ISTE 3.3",
    title: "Leader",
    tagline: "Empowering Leader",
    description:
      "Empowering Leader: Leaders create a culture where teachers and learners are empowered to use technology in innovative ways to enrich teaching and learning.",
    artifacts: [
      {
        id: "leader-artifact-1",
        title: "Research Article Critique: Instructional Technology Leadership",
        summary:
          "A critique of Edelberg's (2020) study examining how K-12 public school district superintendents perceive their own roles and responsibilities as instructional technology leaders. My review summarizes the study's central finding that district leaders prioritize the logistics of technology implementation over the pedagogical strategies needed to improve classroom instruction, then evaluates its threats to validity and its limitations, including the reliance on self-reported survey data and the absence of any comparison across socioeconomic status.",
        tags: ["Research Critique", "Technology Leadership"],
        justification: [
          "I included this critique under the Empowering Leader standard because the superintendents did not ensure that teachers had the proper competency to execute the technology implementation. The study concluded that district leaders prioritize the logistical implementation of technology rather than the pedagogical strategies needed to improve classroom instruction.",
          "The article also aligns with the Visionary Planner standard. Superintendents agree that creating a technology plan and establishing district goals are important (3.2.b), but they fell short on evaluating the plan's progress as technology was implemented (3.2.c).",
        ],
        reflection: [
          "Analyzing data around technology is very important. As an education leader, we have a responsibility to ensure that programs and platforms we are implementing are effective and supporting student learning. The emphasis that leaders place on new platforms heavily influences how teachers implement it into their classrooms, so it is important that we model what we want from the teacher.",
        ],
        evidence: [
          {
            label: "Read the critique (PDF)",
            href: "/artifacts/leader-research-article-critique.pdf",
          },
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
    tagline: "Systems Designer",
    description:
      "Systems Designer: Leaders build teams and systems to implement, sustain and continually improve the use of technology to support learning.",
    artifacts: [
      {
        id: "designer-artifact-1",
        title: "Edpuzzle Lesson on the Prefix \"re-\"",
        summary:
          "Edpuzzle is an interactive learning platform where students work through video content while answering questions embedded directly in the video, giving teachers real-time data on student understanding. Teachers can assign videos from a large public library or upload and build their own, and the platform also supports standalone quizzes and professional development modules. I created an account and built a short lesson on the prefix \"re-\" in preparation for moving into 4th grade reading this fall, so that independent work would align closely with the specific skills we cover in class.",
        tags: ["Edpuzzle", "Differentiation"],
        justification: [
          "This project connects to ISTE Standard 3.4.b, Ensure Sufficient and Scalable Resources. It is important for education leaders to understand and provide resources for teachers to efficiently and effectively create class materials using technology. One downside of Edpuzzle is the 20-video limit on the free version, which requires deleting old videos to free up space for new ones. However, teachers can pair Edpuzzle with other free tools, such as Google Forms to collect quiz data or local storage to save raw video files to re-upload for future cohorts. These easy workarounds allow you to maximize its outcomes without upgrading to a paid plan.",
        ],
        reflection: [
          "From an educator and leader perspective, I believe Edpuzzle is a strong choice to help students stay engaged during independent lessons. Students answer questions directly within the videos, allowing teachers to view their progress in real time as they complete assignments. While I don't think this tool would have been as productive when I was teaching 2nd grade, I believe it will be a great way to actively engage my 4th graders. Because I am particular about independent work aligning closely with the specific topics we discuss in class, I plan to create a variety of my own videos, and practice my editing skills, to maximize the value of my students' independent work time.",
        ],
        evidence: [
          {
            label: "View the lesson I created",
            href: "https://edpuzzle.com/media/6a5fd9527dbb8c4aad23d85e",
          },
          { label: "Visit Edpuzzle", href: "https://edpuzzle.com" },
        ],
      },
    ],
  },
  {
    slug: "learner",
    standard: "ISTE 3.5",
    title: "Learner",
    tagline: "Connected Learner",
    description:
      "Connected Learner: Leaders model and promote continuous professional learning for themselves and others.",
    artifacts: [
      {
        id: "learner-artifact-1",
        title: "AI in Elementary School Classrooms",
        summary:
          "A Personal Learning Network (PLN) project I completed with my group where we focused on how artificial intelligence (AI) can be effectively implemented into elementary school classrooms. The website provides resources for how teachers can use AI to plan more efficiently, how AI can support student learning, and professional development opportunities.",
        tags: ["Personal Learning Network", "Artificial Intelligence"],
        justification: [
          "This project continued my technology education and there is always more to learn and room for improvement. Technology is constantly evolving and it's important for every education leader to be learning the new technology as it is developed so we can properly support teachers in the classroom.",
        ],
        reflection: [
          "I found so many interesting resources that I plan to implement into my own classroom this coming school year. It really opened my eyes to the amount of resources out there to meet the needs of teachers in different types of classrooms and how it can also meet the needs of individual students. I've signed up to attend a professional development session through SchoolAI and I'm excited to try it out in my classroom.",
        ],
        evidence: [
          {
            label: "Visit the website",
            href: "https://sites.google.com/charlotte.edu/elementartificialintelligence/home",
          },
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
  name: `${person.name} · ePortfolio`,
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
