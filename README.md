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
└── public/
    └── og-image.png       # share obrázok (rovnaký ako na živom webe)
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

## Analytics

Google Tag Manager kontajner `GTM-PNQWSCVB` — rovnaký, aký beží na aktuálnom
(starom) modralopticka.sk, kvôli kontinuite dát.

## Brand

Farby, fonty a logá vychádzajú z brand manuálu Modrej hliadky (Google Drive)
a z computed štýlov živého webu. Partnerské logá v karuseli pochádzajú zo
sekcie "Modrú loptičku už majú doma" na modralopticka.sk, plus z brand
manuálov Biometrics House a Tricsy.

## Nasadenie

Statický build (`frontend/dist`) — dá sa hostovať kdekoľvek (Netlify,
Vercel, GitHub Pages, vlastný server). Žiadne env premenné ani backend nie
sú potrebné.
