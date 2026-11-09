const QUOTES = [
  {
    text: 'Žijeme vo Veľkej Británii. Máte to perfektné, vaša webová stránka, ste skvelí, že takto pomáhate na Slovensku.',
    author: 'Zuzana, mama chlapca s autizmom',
  },
  {
    text: 'Konečne to napísal niekto takto priamo a otvorene. Inakosť našich detí nie je dôvodom, aby boli separované či odmietané.',
    author: 'Soňa, mama dieťaťa s PAS a ADHD',
  },
  {
    text: 'Robíte naozaj krásnu a dôležitú prácu na Instagrame.',
    author: 'Barbora, mama dieťaťa s Aspergerovým syndrómom',
  },
  {
    text: 'Ja som taká rada, že ste. Nech nás je všetkých počuť. Ďakujeme, Modrá hliadka.',
    author: 'Monika, mama dievčaťa s Aspergerovým syndrómom',
  },
]

export function Testimonials() {
  return (
    <section id="ohlasy" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">Povedali o nás</h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {QUOTES.map((quote) => (
          <figure key={quote.author} className="rounded-2xl bg-sky-50 p-6">
            <blockquote className="text-navy-800/85">„{quote.text}“</blockquote>
            <figcaption className="mt-4 text-sm font-medium text-navy-700">{quote.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
