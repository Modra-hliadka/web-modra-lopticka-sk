import logoWhite from '../assets/logo/modra-hliadka-logo.svg'

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/modrahliadka' },
  { label: 'Instagram', href: 'https://www.instagram.com/modra_hliadka/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/modra-hliadka/' },
]

export function Footer() {
  return (
    <footer className="bg-navy-950 py-14 text-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <img src={logoWhite} alt="Modrá hliadka" className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm">
              Modrá hliadka
              <br />
              Jurská 19
              <br />
              831 02 Bratislava-Nové mesto
              <br />
              IČO: 54 798 841
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-display text-sm uppercase tracking-wider text-sky-100">Stránka</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#co-to-je" className="hover:text-white">Čo to je?</a></li>
                <li><a href="#ako-pomaha" className="hover:text-white">Ako pomáha?</a></li>
                <li><a href="#ponuka" className="hover:text-white">Ponuka</a></li>
                <li><a href="#objednat" className="hover:text-white">Objednať</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-sm uppercase tracking-wider text-sky-100">Sledujte nás</p>
              <ul className="mt-3 space-y-2 text-sm">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-white">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Modrá hliadka. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  )
}
