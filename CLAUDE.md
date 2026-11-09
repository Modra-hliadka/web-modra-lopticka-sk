# CLAUDE.md

Kontext pre Claude Code pri práci v tomto repozitári.

## Čo to je

Marketingový web pre `modralopticka.sk` (projekt Modrej hliadky). Primárny
cieľ stránky: presvedčiť firmy, aby si objednali "modré loptičky" pre
zamestnancov/partnerov a tým podporili Modrú hliadku. To je centrálne CTA
na celej stránke, nie okrajová vec.

**Dôležité:** tento repozitár je samostatný projekt, nesúvisí so
súrodeneckým priečinkom `lunch-menu` (ten obsahuje nesúvisiacu appku na
obedové menu) — ak narazíš na odkazy naň v histórii konverzácie, ignoruj ich.

## Stack a konvencie

- Vite + React + TypeScript, Tailwind CSS v4 (žiadny `tailwind.config.js` —
  theme tokeny sú v `frontend/src/index.css` pod `@theme`).
- Jedna sekcia homepage = jeden komponent v `frontend/src/components/`,
  skladané v `App.tsx` v poradí, v akom sa majú zobraziť.
- Žiadny backend, žiadny stavový manažment navyše (iba lokálny `useState`
  tam, kde treba — napr. formulár, karusel).
- Fonty: `DM Serif Display` (nadpisy) + `DM Sans` (telo), načítané z Google
  Fonts v `index.html`. Farby: `navy-*`, `accent-*`, `sky-*` definované v
  `index.css`.

## Objednávkový formulár (`OrderForm.tsx`)

Toto **nie je** `<iframe>` na Google Forms (bola to pôvodná implementácia,
nahradená po spätnej väzbe — Google iframe sa nedá štýlovať). Namiesto toho
je formulár postavený z vlastných polí a pri submit sa dáta POSTujú cez
`fetch(..., {mode: 'no-cors'})` priamo na `.../formResponse` endpoint toho
istého Google Formu, s poľami `entry.<id>` napevno namapovanými v komponente.

Ak sa zmenia otázky vo formulári (pridá/zmení pole), treba:
1. Otvoriť verejný `viewform` link formulára v prehliadači.
2. V konzole prečítať `window.FB_PUBLIC_LOAD_DATA_` — obsahuje entry ID a
   možnosti pre každé pole.
3. Upraviť `ENTRY` mapovanie a UI v `OrderForm.tsx`.

Keďže ide o `mode: 'no-cors'`, odpoveď je vždy "opaque" — nedá sa z JS
overiť, že submit naozaj prešiel. Pri väčších zmenách over reálnym testovacím
odoslaním (vyžaduje explicitný súhlas používateľa, keďže to zapíše riadok do
živých odpovedí Google Formu).

## Partneri (`Partners.tsx`)

Logá partnerov v karuseli **nie sú vymyslené** — pochádzajú buď priamo zo
sekcie "Modrú loptičku už majú doma" na `modralopticka.sk`, alebo z
oficiálnych brand manuálov, ktoré poslal používateľ (Biometrics House,
Tricsy). Ak treba pridať ďalšie logo, nehádaj názov/vzhľad firmy — over si
ho (web, brand manuál, alebo sa opýtaj používateľa).

## Analytics

GTM kontajner `GTM-PNQWSCVB` v `index.html` je ten istý, čo beží na
aktuálnom živom webe — zachováva kontinuitu dát. Nepridávaj druhý/iný GTM
alebo priamy GA4 tag bez toho, aby si sa opýtal.

## Git

- `origin` smeruje na `https://github.com/Modra-hliadka/web-modra-lopticka-sk.git`.
- **Nepushuj na `origin` bez explicitného potvrdenia používateľa** — commituj
  lokálne priebežne, push nechaj na výslovné "áno, pushni".
