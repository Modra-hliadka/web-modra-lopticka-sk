const PROJECTS = [
  { title: 'On-line redakcia', text: 'Tematický obsah o poruchách autistického spektra (PAS) pre rodičov aj odborníkov.' },
  { title: 'Osveta na sociálnych sieťach', text: 'Pravidelné príspevky, ktoré búrajú predsudky a otvárajú dôležité témy.' },
  { title: 'Kompasio', text: 'Agregátor bodov záujmu a zdrojov informácií pre ľudí s PAS a ich najbližších.' },
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

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-display text-xl text-sky-100">{project.title}</h3>
              <p className="mt-2 text-sm text-white/70">{project.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
