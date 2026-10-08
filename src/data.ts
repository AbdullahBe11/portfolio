export const profile = {
  name: "Abdullah Berro",
  title: "Junior Software Engineer | Full-Stack Developer",
  location: "Beirut, Lebanon",
  email: "aboudiberro33@gmail.com",
  github: "https://github.com/AbdullahBe11",
  linkedin: "https://www.linkedin.com/in/abdullah-berro-b2646a17a",
  cv: "/Abdullah_Berro_CV.pdf",
  summary:
    "I'm a Computer Science graduate (LIU, Spring 2026) who led a 6-person team building SkillProof, a live Next.js, TypeScript and PostgreSQL platform where recruiters find candidates through verified project work. I'm looking for an entry-level role in full-stack, frontend or backend development.",
};

export const featured = {
  name: "SkillProof",
  blurb:
    "A platform where candidates publish projects with evidence links, verifiers review them and approve or reject with rubric scores, and recruiters browse verified candidates, shortlist them and send interest.",
  status:
    "The beta is live on Vercel and demo-ready. It hasn't had a public launch yet and has no real users.",
  live: "https://techtalks-skillproof.vercel.app",
  repo: "https://github.com/AbdullahBe11/techtalks-skillproof",
  screenshots: [
    { src: "/skillproof/landing.jpg", alt: "SkillProof landing page", caption: "Landing page" },
    { src: "/skillproof/how-it-works.jpg", alt: "SkillProof how it works section", caption: "How it works" },
    { src: "/skillproof/browse.jpg", alt: "SkillProof browse verified projects page", caption: "Browse verified projects" },
    { src: "/skillproof/profile.jpg", alt: "SkillProof public candidate profile", caption: "Public candidate profile" },
  ],
  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Prisma",
    "PostgreSQL (Neon)",
    "NextAuth",
    "Vitest",
    "GitHub Actions",
    "Vercel",
  ],
  points: [
    "Led a 6-person team through weekly Jira sprints, with a feature-branch workflow, mandatory pull request review and production deployments on Vercel.",
    "Reviewed every teammate pull request against its acceptance criteria before merge. One review caught a setup script that would have deleted most of the project README.",
    "Owned authentication with NextAuth, Prisma and PostgreSQL: bcrypt hashing, role-based sessions (candidate, recruiter, verifier), password reset by email, and generic errors that never reveal which emails are registered.",
    "Enforced authorization on the server: verifiers can't approve their own projects or projects without evidence, candidates can only change their own data, and other users' records return the same 404 as missing ones.",
    "Built verifier rubric scoring (4 criteria, saved in a single database transaction with the decision), recruiter interest email notifications and tolerant skill search, so \"nextjs\" matches \"Next.js\".",
    "Set up GitHub Actions CI running ESLint and Vitest on every pull request, and handled Prisma migrations on a shared PostgreSQL database.",
  ],
};

export const projects = [
  {
    name: "Algorithmic Trading Engine",
    tag: "Personal project",
    stack: ["Python", "XGBoost", "MetaTrader 5 API", "MySQL"],
    text: "Separates the signal model (an XGBoost classifier with a 200 EMA trend filter) from order execution through the MetaTrader 5 API. Risk management includes ATR-based stops, an equity cap that halts trading, and scale-out exits. Every signal and trade is logged to MySQL. It runs autonomously on a demo account for XAUUSD, DJ30 and NAS100.",
  },
  {
    name: "Coffee Shop Ordering System",
    tag: "Complete prototype",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    text: "A React storefront with a persistent cart, a Node.js/Express REST API with 8 endpoints for menu, orders and payments, Stripe checkout and automated order-confirmation emails.",
  },
  {
    name: "Gym Membership Mobile App",
    tag: "Personal project",
    stack: ["Flutter", "Dart", "Firebase"],
    text: "A cross-platform app with Firebase Authentication, Realtime Database for membership management, push notifications for membership reminders and a gamified check-in feature.",
  },
  {
    name: "University Scheduling System",
    tag: "Desktop app",
    stack: ["C#", ".NET", "SQL Server"],
    text: "Detects room and time collisions and uses optimistic locking to handle concurrent bookings.",
  },
  {
    name: "Wearable Obstacle Detection",
    tag: "Prototype",
    stack: ["C++", "Arduino"],
    text: "Real-time distance detection with an ultrasonic sensor.",
  },
];

export const experience = {
  role: "Software Engineering Intern (Team Lead)",
  org: "TechTalks",
  dates: "Aug 2026 – Oct 2026",
  text: "Led a 6-person team building SkillProof, from sprint planning and code review to authentication, authorization and CI. Details are in the featured project above.",
};

export const recognition = {
  title: "TechTalks Intern Spotlight",
  date: "October 2026",
  text: "Named in TechTalks' Intern Spotlight, which recognizes interns for technical growth, consistency and ownership on real projects.",
  link: "https://www.linkedin.com/posts/techtalks-lb_interns-spotlight-activity-7513322128428158976-1Ndg",
};

export const education = {
  degree: "B.S. in Computer Science",
  school: "Lebanese International University (LIU), Nabatieh",
  date: "Spring 2026",
  courses:
    "Data Structures & Algorithms, Databases, Web Development, Computer Networks, Mobile Development, Cryptography",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "Dart", "SQL"],
  },
  {
    group: "Web",
    items: ["Next.js", "React", "Node.js", "Express", "REST APIs", "NextAuth", "Tailwind CSS", "HTML/CSS"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Prisma", "MySQL", "MongoDB", "SQL Server", "Firebase"],
  },
  {
    group: "Tools & practices",
    items: ["Git", "GitHub", "GitHub Actions (CI)", "Vitest", "ESLint", "Vercel", "Jira", "Scrum", "Code review"],
  },
  { group: "Other", items: ["Flutter", "XGBoost", "Arduino / embedded C++"] },
];
