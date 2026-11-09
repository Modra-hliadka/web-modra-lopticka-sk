type Tier = {
  name: string
  price: string
  minimum: string
  features: string[]
  highlighted?: boolean
}

const TIERS: Tier[] = [
  {
    name: 'Partner',
    price: 'od 10 €/ks',
    minimum: 'minimálny odber 25 ks',
    features: [
      'Loptička v papierovej krabičke s príbehom',
      'QR kód z krabičky vedie na túto stránku',
      'Logo vašej firmy na našej stránke',
      'Doprava zdarma',
    ],
  },
  {
    name: 'Strieborný partner',
    price: 'od 10 €/ks',
    minimum: 'minimálny odber 100 ks',
    highlighted: true,
    features: [
      'Všetko z úrovne Partner',
      'QR kód vedie na personalizovanú landing page s vaším logom',
      'Doprava zdarma',
    ],
  },
  {
    name: 'Zlatý partner',
    price: 'od 12 €/ks',
    minimum: 'minimálny odber 1 000 ks',
    features: [
      'Všetko z úrovne Strieborný partner',
      'Logo vašej firmy priamo na modrej loptičke',
      'Logo vašej firmy na krabičke',
      'Väčšia customizácia landing page',
    ],
  },
]

export function Tiers() {
  return (
    <section id="ponuka" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">Modré loptičky pre vašu firmu</h2>
        <p className="mt-4 text-lg text-navy-800/80">
          Modrá loptička sa zatiaľ bežne nedá kúpiť — v prvej etape ju venujeme partnerom, ktorí sa rozhodnú
          podporiť misiu Modrej hliadky. Vyberte si úroveň podpory, ktorá vám sedí.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-3xl p-7 ${
              tier.highlighted
                ? 'bg-navy-700 text-white shadow-xl shadow-navy-700/30 lg:-translate-y-3'
                : 'bg-sky-50 text-navy-900 ring-1 ring-navy-700/10'
            }`}
          >
            <h3 className="font-display text-2xl">{tier.name}</h3>
            <p className={`mt-2 text-2xl font-semibold ${tier.highlighted ? 'text-white' : 'text-navy-800'}`}>
              {tier.price}
            </p>
            <p className={`text-sm ${tier.highlighted ? 'text-white/70' : 'text-navy-800/60'}`}>{tier.minimum}</p>

            <ul className="mt-6 flex-1 space-y-3 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                      tier.highlighted ? 'bg-white text-navy-700' : 'bg-accent-600 text-white'
                    }`}
                  >
                    ✓
                  </span>
                  <span className={tier.highlighted ? 'text-white/90' : 'text-navy-800/85'}>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#objednat"
              className={`mt-7 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                tier.highlighted
                  ? 'bg-white text-navy-700 hover:bg-sky-50'
                  : 'bg-navy-700 text-white hover:bg-navy-800'
              }`}
            >
              Objednať
            </a>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-navy-800/60">
        Chcete iba pár kusov loptičiek pre seba? V tejto chvíli je projekt z logistických dôvodov určený pre
        firemných partnerov s odberom od 25&nbsp;ks — hľadáme vhodného retailového partnera aj pre jednotlivcov.
      </p>
    </section>
  )
}
