import { BlueBall } from './BlueBall'

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:pt-20">
        <div>
          <h1 className="font-display text-4xl leading-tight text-navy-900 sm:text-5xl lg:text-6xl">
            Modrá loptička pre vašu firmu
          </h1>
          <p className="mt-5 max-w-xl text-lg text-navy-800/80">
            Jednoduchý spôsob, ako vaša firma môže celoročne podporiť osvetu o autizme —
            darujte svojim zamestnancom a partnerom antistresovú <strong>modrú loptičku</strong> a staňte sa
            súčasťou misie Modrej hliadky.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#objednat"
              className="rounded-full bg-navy-700 px-7 py-3.5 text-center text-base font-semibold text-white shadow-md shadow-navy-700/20 transition hover:bg-navy-800"
            >
              Chcem Modré loptičky
            </a>
            <a
              href="#co-to-je"
              className="rounded-full border border-navy-700/20 px-7 py-3.5 text-center text-base font-semibold text-navy-800 transition hover:bg-sky-50"
            >
              Zistiť viac
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-6 rounded-[2.5rem] bg-sky-100" />
          <BlueBall className="relative h-full w-full drop-shadow-xl" />
        </div>
      </div>
    </section>
  )
}
