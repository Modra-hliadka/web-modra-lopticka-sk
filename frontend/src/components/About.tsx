const ACTIONS = ['Stláčať', 'Hádzať', 'Vrhať', 'Kopať', 'Vyhadzovať', 'Kotúľať', 'Darovať', 'Alebo čokoľvek vás napadne']

export function About() {
  return (
    <section id="co-to-je" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">Čo je Modrá loptička?</h2>
          <p className="mt-4 text-lg text-navy-800/80">
            Modrá loptička je modrá antistresová loptička na každodenné použitie 🔵. Jej posolstvom je, že o
            autizme nestačí šíriť povedomie iba druhého apríla — je potrebné to robiť po celý rok.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xl text-navy-900">Prečo modrá?</h3>
              <p className="mt-2 text-navy-800/80">
                Modrá je farbou porozumenia a prijatia. Táto farba je symbolická a často spájaná s autizmom.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-navy-900">Prečo loptička?</h3>
              <p className="mt-2 text-navy-800/80">
                Antistresová loptička je výborný predmet so všestranným využitím — v zasadačke, na stole aj v
                taške.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-sky-50 p-8">
          <p className="font-display text-xl text-navy-900">S loptičkou môžeš</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {ACTIONS.map((action) => (
              <li key={action} className="flex items-center gap-2 text-navy-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-xs text-white">
                  ✓
                </span>
                {action}
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
            <p className="font-display text-lg text-navy-900">#modralopticka</p>
            <p className="mt-1 text-sm text-navy-800/70">
              Chceme modrú loptičku dostať všade. Odfoť sa s modrou loptičkou na zaujímavom mieste a pridaj
              hashtag <strong>#modralopticka</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
