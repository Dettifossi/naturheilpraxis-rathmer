/* Nach-oben-Knopf und Seitenmenü "Auf dieser Seite" (nur Bedienung, keine Inhalte) */
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Nach-oben-Knopf
  var up=document.createElement('button');up.type='button';up.className='nach-oben';up.setAttribute('aria-label','Nach oben');up.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  up.addEventListener('click',function(){scrollTo({top:0,behavior:reduce?'auto':'smooth'})});
  document.body.appendChild(up);
  function vis(){up.classList.toggle('sichtbar',scrollY>600)}addEventListener('scroll',vis,{passive:true});vis();
  // Seitenmenü
  var main=document.querySelector('main');if(!main||document.querySelector('.hero'))return;
  var hs=[].slice.call(main.querySelectorAll('h2')).filter(function(h){return h.textContent.trim().length>3&&!h.closest('.cta-band')&&!h.closest('.cta-split')});
var LAB={"Vom Jurastudium zur Heilkunde":"Mein Weg","Das Enneagramm als diagnostische Lupe":"Enneagramm als Lupe","Keine Standardlösungen. Keine Schubladen.":"Was meine Arbeit besonders macht","Werdegang auf einen Blick":"Werdegang","Über 90 Bücher und E-Books zu Homöopathie und Enneagramm":"Bücher und Veröffentlichungen","Möchten Sie mich kennenlernen?":"Kennenlernen",
"Dr. Samuel Hahnemann — Begründer einer neuen Heilkunst":"Hahnemann","Mehrere Heilsysteme zu einem Ganzen verbunden":"Heilsysteme","Eine Behandlung, so einzigartig wie Sie":"Ihre Behandlung","Die heilende Trias: drei Wege — ein Ziel":"Die heilende Trias","Was Patienten berichten":"Patientenberichte","Was ist Enneagramm-Homöopathie?":"Enneagramm-Homöopathie","Ausbildung in Enneagramm-Homöopathie":"Ausbildung","Geniale Fakten zur Homöopathie":"Fakten","Gesundheitstipps aus der Naturheilpraxis":"Gesundheitstipps","Haben Sie Fragen oder möchten Sie einen ersten Termin vereinbaren?":"Termin",
"Die Typbestimmung":"Typbestimmung","Weit über klassische Typbeschreibungen hinaus":"Über Typbeschreibungen hinaus","Enneagramm-Firmencoaching":"Firmencoaching","Fragen zum Enneagramm-Coaching":"Fragen","Welcher Enneagrammtyp sind Sie wirklich?":"Ihr Typ",
"Hinter das Verhalten schauen":"Hinter das Verhalten","Ein Gespür für den Menschen":"Ein Gespür","Beziehungstherapie und Paarberatung":"Paarberatung","Fragen zur Beratung":"Fragen",
"In drei Schritten zur Behandlung":"Ablauf","Wie läuft eine Erstanamnese ab?":"Erstanamnese","Übersicht der Honorare":"Honorare",
"Der Blick verrät mehr, als die meisten Tests erfassen":"Der Blick","So funktioniert es":"So funktioniert es","Jetzt Termin sichern":"Termin sichern","Fragen zur Foto-Typisierung":"Fragen"};
  var seen={},items=[];
  hs.forEach(function(h){var t=h.textContent.trim().replace(/\s+/g,' ');var s=LAB[t]||t.split(/\s[—–]\s|:\s/)[0];if(s.length>34)s=s.slice(0,32).replace(/\s+\S*$/,'')+'…';if(seen[s])return;seen[s]=1;var sec=h.closest('section')||h;if(!sec.id)sec.id='abschnitt-'+(items.length+1);items.push({id:sec.id,label:s,el:sec});});
  if(items.length<3)return;
  var nav=document.createElement('nav');nav.className='seitenmenue';nav.setAttribute('aria-label','Auf dieser Seite');
  var inner=document.createElement('div');inner.className='seitenmenue__in';inner.innerHTML='<span class="seitenmenue__label">Auf dieser Seite</span>';
  items.forEach(function(i){var a=document.createElement('a');a.href='#'+i.id;a.textContent=i.label;a.addEventListener('click',function(e){e.preventDefault();var h=(document.querySelector('.site-header')||{offsetHeight:70}).offsetHeight+nav.offsetHeight;scrollTo({top:i.el.getBoundingClientRect().top+scrollY-h+2,behavior:reduce?'auto':'smooth'});history.replaceState(null,'','#'+i.id)});i.a=a;inner.appendChild(a)});
  nav.appendChild(inner);
  var first=main.querySelector('section');first.parentNode.insertBefore(nav,first.nextSibling);
  var hdr=document.querySelector('.site-header');function pos(){nav.style.top=(hdr?hdr.offsetHeight:70)+'px'}pos();addEventListener('resize',pos);
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){items.forEach(function(i){i.a.classList.toggle('aktiv',i.el===e.target)});var a=inner.querySelector('.aktiv');if(a&&inner.scrollWidth>inner.clientWidth)inner.scrollTo({left:a.offsetLeft-60,behavior:'smooth'})}})},{rootMargin:'-30% 0px -60% 0px'});items.forEach(function(i){io.observe(i.el)})}
})();
/* Farbwahl: Papier, Sand, Salbei, Nacht; merkt sich die Wahl im Browser */
(function(){
  var R=document.documentElement,F=[['papier','#faf7f0','Papier'],['sand','#f0e4d0','Sand'],['salbei','#e8eee4','Salbei'],['nacht','#1c211a','Nacht']];
  var w=document.createElement('div');w.className='farbwahl';
  var t=document.createElement('button');t.type='button';t.className='farbwahl__auf';t.textContent='Farbe';t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Farbe der Seite wählen');
  var p=document.createElement('div');p.className='farbwahl__punkte';
  function set(n){F.forEach(function(x,i){p.children[i].setAttribute('aria-pressed',x[0]===n)});if(n==='papier')R.removeAttribute('data-farbe');else R.setAttribute('data-farbe',n);try{localStorage.setItem('praxis-farbe',n)}catch(e){}}
  F.forEach(function(x){var b=document.createElement('button');b.type='button';b.style.background=x[1];b.title=x[2];b.setAttribute('aria-label','Farbe '+x[2]);b.addEventListener('click',function(){set(x[0])});p.appendChild(b)});
  t.addEventListener('click',function(){var o=w.classList.toggle('offen');t.setAttribute('aria-expanded',o)});
  w.classList.add('offen');t.setAttribute('aria-expanded','true');w.appendChild(t);w.appendChild(p);
  var strip=document.getElementById('bw-strip__inner');
  if(strip){w.classList.add('im-band');strip.appendChild(w)}
  else{var m=document.querySelector('main');var z=document.createElement('div');z.className='farbzeile';z.appendChild(w);w.classList.add('in-zeile');if(m)m.parentNode.insertBefore(z,m);else document.body.insertBefore(z,document.body.firstChild)}
  var s='papier';try{s=localStorage.getItem('praxis-farbe')||'papier'}catch(e){}set(s);
})();
/* Zahl der Apps aus der Liste des Verlags (Rückfall: Text im HTML bleibt) */
(function(){var e=document.querySelectorAll('[data-app-zahl]');if(!e.length||!window.fetch)return;
  var Z=['null','eine','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf'];
  fetch('https://www.verlagshausrathmer.com/apps.json').then(function(r){return r.json()}).then(function(d){var n=d.apps&&d.apps.length;if(!n)return;[].forEach.call(e,function(x){x.textContent=Z[n]||n})}).catch(function(){})})();

/* Wettervorschau (nächste 3 Tage) und Luftdruck aus biowetter.json */
(function(){
  function cloud(f){return '<path d="M10 25h15a5 5 0 0 0 .6-10 7 7 0 0 0-13.5-1.4A5.5 5.5 0 0 0 10 25z" fill="'+f+'"/>'}
  function ico(w){var t=(w||'').toLowerCase(),b='#7d8a8f',o='#c9812b';
    var body;
    if(t.indexOf('gewitter')>=0)body=cloud('#5f6b73')+'<path d="M19 22l-4 6h4l-2 5 6-8h-4l2-3z" fill="#e0a82e"/>';
    else if(t.indexOf('schnee')>=0)body=cloud(b)+'<g fill="#5a8fb0"><circle cx="13" cy="29" r="1.6"/><circle cx="19" cy="31" r="1.6"/><circle cx="25" cy="29" r="1.6"/></g>';
    else if(t.indexOf('nebel')>=0)body='<g stroke="'+b+'" stroke-width="2.4" stroke-linecap="round"><path d="M8 14h20M6 20h24M9 26h18"/></g>';
    else if(t.indexOf('regen')>=0||t.indexOf('schauer')>=0||t.indexOf('hagel')>=0)body=cloud(b)+'<g stroke="#4a86b8" stroke-width="2" stroke-linecap="round"><path d="M12 28l-1.5 4M19 28l-1.5 4M26 28l-1.5 4"/></g>';
    else if(t.indexOf('bedeckt')>=0)body=cloud(b);
    else if(t.indexOf('teils')>=0||t.indexOf('wechsel')>=0||t.indexOf('wind')>=0)body='<circle cx="13" cy="13" r="5.5" fill="'+o+'"/><g stroke="'+o+'" stroke-width="2" stroke-linecap="round"><path d="M13 3v3M3 13h3M5.8 5.8l2 2M20.2 5.8l-2 2"/></g>'+cloud(b);
    else body='<circle cx="18" cy="18" r="7" fill="'+o+'"/><g stroke="'+o+'" stroke-width="2.2" stroke-linecap="round"><path d="M18 4v4M18 28v4M4 18h4M28 18h4M8.1 8.1l2.8 2.8M25.1 25.1l2.8 2.8M8.1 27.9l2.8-2.8M25.1 10.9l2.8-2.8"/></g>';
    return '<svg class="bw-ico" width="30" height="30" viewBox="0 0 36 36" aria-hidden="true">'+body+'</svg>'}
var c=document.getElementById('bw-strip__content');if(!c||!window.fetch)return;
  fetch('biowetter.json?v='+Math.floor(Date.now()/3600000)).then(function(r){return r.json()}).then(function(d){
    var v=d.vorschau;if(!v||!v.length)return;
    var wrap=document.createElement('div');wrap.className='bw-vorschau';
    var kopf='<span class="bw-vorschau__kopf">Nächste Tage'+(d.druck_hpa?' · Luftdruck heute '+d.druck_hpa+' hPa':'')+'</span>';
    var chips=v.map(function(x){var t=(x.tmin!=null&&x.tmax!=null)?(x.tmin===x.tmax?x.tmax+'°':x.tmin+'–'+x.tmax+'°'):'';
      return '<span class="bw-vorschau__tag">'+ico(x.wetter)+'<span><b>'+x.tag+' '+x.datum+'</b> '+x.wetter+(t?', '+t:'')+(x.druck?' · '+x.druck+' hPa':'')+'</span></span>'}).join('');
    wrap.innerHTML=kopf+'<span class="bw-vorschau__liste">'+chips+'</span>';
    var a=document.getElementById('bw-strip__author');if(a)a.parentNode.insertBefore(wrap,a.nextSibling);else c.appendChild(wrap);
  }).catch(function(){});
})();
