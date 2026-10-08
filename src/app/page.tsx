import {
  profile,
  featured,
  projects,
  experience,
  education,
  skills,
} from "@/data";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-14 sm:py-20">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

const nav = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-semibold">
            Abdullah Berro
          </a>
          <ul className="flex gap-4 text-sm text-muted sm:gap-6">
            {nav.map(([label, href]) => (
              <li key={href} className={label === "Skills" ? "hidden sm:block" : ""}>
                <a href={href} className="hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-4xl px-5">
        <section className="py-16 sm:py-28">
          <p className="mb-4 font-mono text-sm text-accent">
            {profile.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m Abdullah.
            <br />
            <span className="text-muted">I build full-stack web apps.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#06201c] hover:opacity-90"
            >
              See my work
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent"
            >
              Download CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <Section id="projects" title="Featured project">
          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-2xl font-bold">{featured.name}</h3>
              <div className="flex gap-3 text-sm">
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-accent px-4 py-2 font-semibold text-[#06201c] hover:opacity-90"
                >
                  Live site
                </a>
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border px-4 py-2 font-semibold hover:border-accent"
                >
                  Repository
                </a>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-muted">{featured.blurb}</p>
            <p className="mt-3 text-sm text-muted">{featured.status}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <h4 className="mb-3 mt-8 text-sm font-semibold">
              What I did as team lead
            </h4>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              {featured.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>

          <h2 className="mb-6 mt-14 font-mono text-sm uppercase tracking-widest text-accent">
            Other projects
          </h2>
          <p className="-mt-2 mb-6 text-sm text-muted">
            These projects run locally and aren&apos;t deployed publicly.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-5"
              >
                <p className="font-mono text-xs text-muted">{p.tag}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience & education">
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-semibold">
                  {experience.role}, {experience.org}
                </h3>
                <span className="font-mono text-sm text-muted">
                  {experience.dates}
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-muted">
                {experience.text}
              </p>
            </div>
            <div>
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="font-semibold">
                  {education.degree}, {education.school}
                </h3>
                <span className="font-mono text-sm text-muted">
                  {education.date}
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-muted">
                Relevant coursework: {education.courses}.
              </p>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-5">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-2 sm:grid-cols-[10rem_1fr]">
                <h3 className="text-sm font-semibold">{g.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Spoken languages: Arabic (native), English (fluent).
          </p>
        </Section>

        <Section id="contact" title="Contact">
          <p className="max-w-xl leading-relaxed text-muted">
            I&apos;m open to junior software engineering roles. The easiest way
            to reach me is by email.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-[#06201c] hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent"
            >
              github.com/AbdullahBe11
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold hover:border-accent"
            >
              LinkedIn
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        Abdullah Berro · {profile.location}
      </footer>
    </>
  );
}
