# Naturheilpraxis Detlef Rathmer — Website

Moderne, statische Website (reines HTML/CSS/JS, kein Build-Schritt) für die
Naturheilpraxis Detlef Rathmer in Billerbeck.

## Seiten
| Datei | Inhalt |
|-------|--------|
| `index.html` | Startseite |
| `homoeopathie.html` | Klassische Homöopathie |
| `enneagramm.html` | Enneagramm & Coaching |
| `beratung.html` | Psychologische Beratung |
| `kosten.html` | Kosten & Ablauf |
| `ueber-mich.html` | Über mich |
| `kontakt.html` | Kontakt (inkl. Karte & Impressum-Platzhalter) |

Assets liegen unter `assets/`:

- `assets/css/` — Stylesheets (`style.css`)
- `assets/js/` — Skripte (`main.js`)
- `assets/img/fotos/` — Fotos (Portraits, Praxis, Stimmungsbilder)
- `assets/img/illustrationen/` — abstrakte Illustrationen

## Lokal ansehen
Einfach `index.html` im Browser öffnen — oder einen kleinen lokalen Server starten:

```bash
cd "Homepage Code"
python3 -m http.server 8000
```

Dann im Browser öffnen: **http://localhost:8000**

## Später bei GitHub Pages veröffentlichen
1. Neues GitHub-Repository anlegen und diesen Ordner pushen.
2. In den Repo-Einstellungen → **Pages** → Branch `main`, Ordner `/ (root)` wählen.
3. Die Seite ist nach kurzer Zeit unter `https://<benutzername>.github.io/<repo>/` erreichbar.

> Hinweis: Impressum und Datenschutzerklärung auf `kontakt.html` sind Platzhalter
> und sollten vor der Veröffentlichung rechtssicher ergänzt werden.

## Bildnachweis
Fotos übernommen von der bestehenden Seite www.psychologische-homoeopathie.de.
