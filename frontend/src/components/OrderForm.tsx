const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfIDMhazBygqqc0-iKhkuz9OaUSuF-KDXV4bMRk_NLsQsG79Q/viewform?embedded=true'

export function OrderForm() {
  return (
    <section id="objednat" className="bg-sky-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">Chcem Modré loptičky</h2>
          <p className="mt-4 text-lg text-navy-800/80">
            Vyplňte pár základných informácií a čoskoro sa vám ozveme s ponukou presne pre vašu firmu. Ďakujeme
            💙
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white p-2 shadow-xl shadow-navy-900/10 ring-1 ring-navy-700/10 sm:p-4">
          <iframe
            title="Objednávkový formulár — Chcem Modré loptičky"
            src={FORM_EMBED_URL}
            className="h-[1050px] w-full sm:h-[820px] lg:h-[760px]"
            loading="lazy"
          >
            Načítavam formulár…
          </iframe>
        </div>
      </div>
    </section>
  )
}
