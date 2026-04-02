import Link from 'next/link'

const projects = [
  { href: '/project1', label: 'View Project 1' },
  { href: '/project2', label: 'View Project 2' },
  { href: '/project3', label: 'View Project 3' },
]

export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="landing-card">
        <h1>Merged Next.js Demo</h1>
        <p>Select a project route to open the original template implementation.</p>
        <div className="landing-links">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="landing-link">
              {project.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
