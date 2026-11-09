type Project = {
  title: string
  text: string
  cta: string
  href: string
}

const PROJECTS: Project[] = [
  {
    title: 'Kompasio — autizmus v apke',
    text: 'Online agregátor bodov záujmu a digitálnych zdrojov pre ľudí s PAS a ich najbližších.',
    cta: 'Vyskúšať Kompasio',
    href: 'https://kompasio.sk/',
  },
  {
    title: 'Eventy',
    text: 'Podujatia a konferencie pre verejnosť aj odborníkov.',
    cta: 'Pozrieť podujatia',
    href: 'https://modrahliadka.sk/projekty/#section-452-516',
  },
  {
    title: 'On-line redakcia',
    text: 'Tematický obsah o poruchách autistického spektra (PAS) pre rodičov aj odborníkov.',
    cta: 'Pozrieť články',
    href: 'https://modrahliadka.sk/precitajte-si/',
  },
]

export function Impact() {
  return (
    <section id="ako-pomaha" className="bg-navy-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-accent-500">Druhý apríl nestačí</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">Ako vaša podpora pomáha?</h2>
          <p className="mt-4 text-lg text-white/75">
            Modrá hliadka zvyšuje povedomie o autizme 365 dní v roku. Modrá loptička je mementom toho, že medzi
            nami sú aj ľudia, ktorí na svet pozerajú inak — nie horšie ani lepšie, iba inak. Partnerov, ktorí nás
            v tom podporia, odmeňujeme práve modrou loptičkou.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20"
            >
              <h3 className="font-display text-xl text-sky-100">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-white/70">{project.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-500 group-hover:text-sky-100">
                {project.cta}
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          ))}

          <a
            href="https://modrahliadka.sk/projekty/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-start justify-center rounded-2xl border border-dashed border-white/25 p-6 transition hover:border-white/50 hover:bg-white/5"
          >
            <h3 className="font-display text-xl">Pozri všetky projekty</h3>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-500 group-hover:text-sky-100">
              Na modrahliadka.sk
              <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
