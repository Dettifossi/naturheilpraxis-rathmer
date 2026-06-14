# CLAUDE.md — Naturheilpraxis Detlef Rathmer Homepage

## Ziel des Projekts
Website der Naturheilpraxis Detlef Rathmer in Billerbeck (Domain:
**psychologische-homoeopathie.de**). Stellt das Angebot vor: klassische Homöopathie,
Enneagramm-Coaching und psychologische Beratung. Querverlinkt mit dem Verlagshaus (Site-Switcher).

## Technik
- Statische Website: **reines HTML/CSS/JS, kein Framework, kein Build-Prozess**.
- Design: **sage-grünes** Farbschema über CSS-Variablen in `assets/css/style.css` (`--sage`, `--sage-dark`, `--ink`, `--paper`, `--line`, `--radius`).
- Schriften **Cormorant Garamond** + **Inter** (Google Fonts, im `<head>` verlinkt).
- JS in `assets/js/main.js` (Mobile-Nav, Scroll-Reveal, Site-Switcher-Toggle).
- Cache-Busting über `?v=N` (CSS aktuell `v=2`). Bei CSS-Änderung erhöhen.
- Lokal starten: `python3 -m http.server 8081`.

## Bilder — WICHTIG
- Die Seite verwendet ihre Bilder aus **`assets/img/fotos/`** (Porträts, Praxis) und **`assets/img/illustrationen/`** (abstrakte Illustrationen).
- Der alte WordPress-Archivordner (`assets/img/archiv/`, ~1.461 Bilder, 2013–2018) wurde **entfernt**,
  weil er nirgends verwendet wurde und jeden Deploy aufblähte.
  Die Original-Archivbilder liegen gesichert unter **`~/Desktop/Naturheilpraxis/naturheilpraxis-archiv-bilder/`**.
- **Keine alten Archiv-/Massenbilder zurück ins Repo legen.**

## Rechtliches (vorhanden, Pflichtangaben abgedeckt)
- `impressum.html` = **Impressum & AGB** in einem:
  - § 5 TMG, § 18 Abs. 2 MStV, Verbraucherstreitbeilegung
  - **Heilpraktiker-Pflichtangaben**: Berufsbezeichnung „Heilpraktiker", Erlaubnis nach **§ 1 HeilprG**
    (ohne Bestallung), **Erlaubnisbehörde Gesundheitsamt Recklinghausen**, Kurt-Schumacher-Allee 1, 45657 Recklinghausen
  - Heilkunde-Hinweis (kein Heilversprechen) + Heilpraktiker-AGB (§§ 1–11)
- `datenschutz.html` (Art. 13 DSGVO: GitHub Pages, Google Fonts, YouTube via `youtube-nocookie.com`, OpenStreetMap)
- Inhaltsregel: **keine Heilversprechen**; Inhalte ersetzen keine ärztliche Behandlung.
- Hinweis: solide Standardtexte, **kein Ersatz für eine anwaltliche Prüfung**.

## Deploy (GitHub Pages)
- Gehostet auf **GitHub Pages** (Repo `Dettifossi/naturheilpraxis-rathmer`), Domain über die `CNAME`-Datei (`www.psychologische-homoeopathie.de`). Deployt automatisch bei `git push` auf `main`. **Kein Build-Befehl**.
- GitHub Pages ist kostenlos und hat **keine monatliche Build-Minuten-Grenze** (anders als Netlify). Frühere parallele Netlify-Anbindung wurde abgeklemmt; DNS zeigt auf GitHub Pages.
- Repo wurde **squash-bereinigt** und vom ungenutzten Archivordner befreit → Deploy-Klon nur ~3,6 MB. **So schlank halten, keine Massenbilder committen.**
- `robots.txt` + `sitemap.xml` vorhanden.
