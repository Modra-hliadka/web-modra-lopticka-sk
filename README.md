# modralopticka.sk

Marketing web pre **Modrú loptičku** (projekt občianskeho združenia
[Modrá hliadka](https://modrahliadka.sk)). Cieľom stránky je motivovať firmy,
aby si objednali modré antistresové loptičky pre svoju firmu/zamestnancov a
tým podporili celoročnú osvetu o autizme.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (farby a fonty definované v
  `frontend/src/index.css` cez `@theme`)
- Čisto statický frontend — žiadny backend. Jediná dynamická časť je
  objednávkový formulár, ktorý posiela dáta priamo do Google Forms.

## Štruktúra

```text
frontend/
├── index.html            # meta tagy (OG/Twitter), Google Tag Manager
├── src/
│   ├── App.tsx            # poradie sekcií na homepage
│   ├── components/        # jedna sekcia = jeden komponent
│   ├── assets/logo/       # logá Modrej hliadky (z brand manuálu)
│   └── assets/partners/   # logá partnerov, ktorí už majú Modrú loptičku
├── public/
│   └── og-image.png       # share obrázok (OG/Twitter) — vygenerovaný z hero dizajnu
└── scripts/
    └── og-card.html        # zdroj pre og-image.png, pozri "Share obrázok" nižšie
```

## Vývoj

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build     # produkčný build do frontend/dist
```

## Objednávkový formulár

`src/components/OrderForm.tsx` **nie je Google Forms iframe** — polia sú
vlastné, naštýlované podľa dizajnu stránky, a pri odoslaní sa dáta POSTujú
priamo na `formResponse` endpoint toho istého Google Formu
(`entry.<id>` mapovanie v súbore). Ak sa niekedy zmenia otázky vo formulári,
treba znova vytiahnuť `entry` ID z `FB_PUBLIC_LOAD_DATA_` na verejnej
`viewform` stránke formulára a upraviť mapovanie v komponente.

## Share obrázok

`public/og-image.png` (1200×630) je vygenerovaný z `scripts/og-card.html` —
statická stránka v dizajne nového webu (logo, nadpis, loptička), odfotená na
presný rozmer. Na prerobenie:

```bash
cd frontend/scripts
python3 -m http.server 8787 &
npx playwright screenshot --viewport-size=1200,630 --wait-for-timeout=800 \
  http://localhost:8787/og-card.html og-image-1200.png
cp og-image-1200.png ../public/og-image.png
```

## Analytics

Google Tag Manager kontajner `GTM-PNQWSCVB` — rovnaký, aký beží na aktuálnom
(starom) modralopticka.sk, kvôli kontinuite dát.

## Brand

Farby, fonty a logá vychádzajú z brand manuálu Modrej hliadky (Google Drive)
a z computed štýlov živého webu. Partnerské logá v karuseli pochádzajú zo
sekcie "Modrú loptičku už majú doma" na modralopticka.sk, plus z brand
manuálov Biometrics House a Tricsy.

## Nasadenie

Beží na **Cloudflare Workers** (static assets), napojené na tento GitHub
repozitár — každý push na `main` automaticky zbuilduje (`npm run build`) a
nasadí (`npx wrangler deploy`). Konfigurácia je vo `frontend/wrangler.jsonc`.
Vlastná doména `modralopticka.sk` je nastavená v Cloudflare dashboarde
(Workers & Pages → projekt → Domains).
