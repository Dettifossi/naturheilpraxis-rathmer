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
- Die Seite verwendet nur **~14 Bilder direkt in `assets/img/`** (Porträts, Illustrationen, Praxis).
- Der alte WordPress-Archivordner (`assets/img/archiv/`, ~1.461 Bilder, 2013–2018) wurde **entfernt**,
  weil er nirgends verwendet wurde und jeden Deploy aufblähte.
  Die Original-Archivbilder liegen gesichert unter **`~/Desktop/naturheilpraxis-archiv-bilder/`**.
- **Keine alten Archiv-/Massenbilder zurück ins Repo legen.**

## Rechtliches (vorhanden, Pflichtangaben abgedeckt)
- `impressum.html` = **Impressum & AGB** in einem:
  - § 5 TMG, § 18 Abs. 2 MStV, Verbraucherstreitbeilegung
  - **Heilpraktiker-Pflichtangaben**: Berufsbezeichnung „Heilpraktiker", Erlaubnis nach **§ 1 HeilprG**
    (ohne Bestallung), **Erlaubnisbehörde Gesundheitsamt Recklinghausen**, Kurt-Schumacher-Allee 1, 45657 Recklinghausen
  - Heilkunde-Hinweis (kein Heilversprechen) + Heilpraktiker-AGB (§§ 1–11)
- `datenschutz.html` (Art. 13 DSGVO: Netlify, Google Fonts, YouTube via `youtube-nocookie.com`, OpenStreetMap)
- Inhaltsregel: **keine Heilversprechen**; Inhalte ersetzen keine ärztliche Behandlung.
- Hinweis: solide Standardtexte, **kein Ersatz für eine anwaltliche Prüfung**.

## Deploy (Netlify) — WICHTIG für Build-Minuten
- Gehostet auf **Netlify**, deployt automatisch bei `git push` auf `main`. **Kein Build-Befehl**.
- Netlify-Gratistarif: **300 Build-Minuten/Monat** (Reset monatlich).
- **Änderungen bündeln und nur EINMAL pro Arbeitsblock pushen.**
- Repo wurde **squash-bereinigt** und vom Archivordner befreit → Deploy-Klon nur noch ~3,6 MB, Deploys sind günstig. **So schlank halten.**
