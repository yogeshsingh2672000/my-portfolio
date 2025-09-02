import Link from "next/link";
import { personal, skills, projects, experiences } from "../data/portfolio";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      <section className="grid gap-6 sm:grid-cols-2 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">{personal.headline}</h1>
          <p className="text-neutral-600">{personal.summary}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={personal.resumeUrl} className="rounded-md bg-black px-4 py-2 text-white">Download Resume</Link>
            {personal.socials.map((s) => (
              <a key={s.label} href={s.href} className="rounded-md border px-4 py-2">{s.label}</a>
            ))}
          </div>
        </div>
        <div className="rounded-xl border p-6 bg-neutral-50">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {skills.primary.slice(0, 8).map((s) => (
              <li key={s} className="rounded bg-white px-3 py-2 text-center border">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border p-5 bg-white hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-600">{p.summary}</p>
              <p className="mt-2 text-sm text-emerald-700">{p.impact}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs rounded bg-neutral-100 px-2 py-1 border">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.links.live && <a href={p.links.live} className="underline">Live</a>}
                {p.links.code && <a href={p.links.code} className="underline">Code</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <ol className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp.company} className="rounded-xl border p-5 bg-white">
              <div className="flex justify-between gap-4 flex-wrap">
                <p className="font-medium">{exp.role} · {exp.company}</p>
                <p className="text-sm text-neutral-500">{exp.period}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700">
                {exp.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-neutral-600">Open to roles where performance and DX matter.</p>
        <div className="flex gap-3">
          <a href={`mailto:${personal.email}`} className="rounded-md bg-black px-4 py-2 text-white">Email me</a>
          <a href="https://cal.com/your-handle/intro" className="rounded-md border px-4 py-2">Book a call</a>
        </div>
      </section>
    </main>
  );
}
