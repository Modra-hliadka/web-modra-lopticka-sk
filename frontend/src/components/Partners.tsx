import { useEffect, useRef } from 'react'
import akira from '../assets/partners/akira.png'
import biometricsHouse from '../assets/partners/biometrics-house.png'
import db from '../assets/partners/db.svg'
import nr1h from '../assets/partners/nr1h.png'
import tricsy from '../assets/partners/tricsy.svg'

const PARTNERS = [
  { name: 'NR1H', src: nr1h },
  { name: 'Disruptive Bros.', src: db },
  { name: 'Akira', src: akira },
  { name: 'Biometrics House', src: biometricsHouse },
  { name: 'Tricsy', src: tricsy },
]

// Tripled so the track can be recentered seamlessly in either scroll direction.
const SLIDES = [...PARTNERS, ...PARTNERS, ...PARTNERS]
const AUTOPLAY_MS = 3200
const RESUME_DELAY_MS = 4000

export function Partners() {
  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<number>(0)
  const resumeRef = useRef<number>(0)

  function itemStep() {
    const track = trackRef.current
    const first = track?.firstElementChild as HTMLElement | null
    if (!track || !first) return 220
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || '0')
  }

  function recenter() {
    const track = trackRef.current
    if (!track) return
    const oneSet = track.scrollWidth / 3
    if (track.scrollLeft < oneSet * 0.5) track.scrollLeft += oneSet
    else if (track.scrollLeft > oneSet * 1.5) track.scrollLeft -= oneSet
  }

  function move(direction: 1 | -1) {
    recenter()
    trackRef.current?.scrollBy({ left: direction * itemStep(), behavior: 'smooth' })
  }

  function stopAutoplay() {
    window.clearInterval(autoplayRef.current)
  }

  function startAutoplay() {
    stopAutoplay()
    autoplayRef.current = window.setInterval(() => move(1), AUTOPLAY_MS)
  }

  function handleManualMove(direction: 1 | -1) {
    move(direction)
    stopAutoplay()
    window.clearTimeout(resumeRef.current)
    resumeRef.current = window.setTimeout(startAutoplay, RESUME_DELAY_MS)
  }

  useEffect(() => {
    const track = trackRef.current
    if (track) track.scrollLeft = track.scrollWidth / 3
    startAutoplay()
    return () => {
      stopAutoplay()
      window.clearTimeout(resumeRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-center text-2xl text-navy-900 sm:text-3xl">
          Modrú loptičku už majú doma títo partneri
        </h2>
        <p className="mt-2 text-center text-navy-800/60">Ďakujeme 🙏</p>

        <div
          className="group relative mt-10"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SLIDES.map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl bg-sky-50 p-5"
              >
                <img src={partner.src} alt={partner.name} className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Predchádzajúci partner"
            onClick={() => handleManualMove(-1)}
            className="absolute top-1/2 left-0 z-20 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-800 opacity-0 shadow-md ring-1 ring-navy-700/10 transition hover:bg-sky-50 group-hover:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Ďalší partner"
            onClick={() => handleManualMove(1)}
            className="absolute top-1/2 right-0 z-20 translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy-800 opacity-0 shadow-md ring-1 ring-navy-700/10 transition hover:bg-sky-50 group-hover:opacity-100"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
