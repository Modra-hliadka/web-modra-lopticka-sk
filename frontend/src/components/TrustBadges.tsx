const BADGES = [
  { title: '365 dní v roku', text: 'Osveta o autizme nie je len 2. apríla — je to celoročná misia.' },
  { title: 'Recyklovateľné balenie', text: 'Každá loptička v papierovej krabičke s QR kódom a príbehom.' },
  { title: 'Doprava zdarma', text: 'Pri každej firemnej objednávke, bez ohľadu na veľkosť odberu.' },
]

export function TrustBadges() {
  return (
    <div className="mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
      <div className="grid gap-4 rounded-2xl bg-navy-900 p-6 text-white shadow-xl shadow-navy-900/20 sm:grid-cols-3 sm:p-8">
        {BADGES.map((badge) => (
          <div key={badge.title}>
            <p className="font-display text-lg text-sky-100">{badge.title}</p>
            <p className="mt-1 text-sm text-white/70">{badge.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
