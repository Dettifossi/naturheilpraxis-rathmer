/* Verweise zwischen Büchern, Apps, Verlag und Praxis: Liste kommt aus verknuepfungen.json */
(function(){
  var h=location.hostname, loc=(h==='localhost'||h==='127.0.0.1');
  var isPraxis=/psychologische-homoeopathie/.test(h)||(loc&&/^(8081|8091)$/.test(location.port));
  var VERLAG=loc?('http://localhost:'+(isPraxis?(parseInt(location.port,10)+1):location.port)+'/'):'https://www.verlagshausrathmer.com/';
  var EN=document.documentElement.lang==='en';
  var path=location.pathname.replace(/^.*\//,'')||'index.html';
  var inBuch=/\/buch\/[^\/]+\.html$/.test(location.pathname);
  var slug=null;
  if(inBuch)slug=path.replace(/\.html$/,'');
  else if(path==='buch.html')slug=new URLSearchParams(location.search).get('slug');
  var css='.vk-weiter{max-width:1040px;margin:4rem auto 3rem;padding:2rem 1.5rem 0;border-top:1px solid rgba(27,26,22,.25)}'
   +'.vk-weiter h2{font-family:"EB Garamond",Georgia,serif;font-weight:400;font-size:clamp(1.6rem,3vw,2.2rem);letter-spacing:-.01em;margin:0 0 1.2rem;color:inherit}'
   +'.vk-weiter ul{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.6rem 2.2rem}'
   +'.vk-weiter li{margin:0}.vk-rolle{display:block;font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:#7f6119;font-weight:700;margin-bottom:.3rem}'
   +'.vk-name{display:inline-block;font-family:"EB Garamond",Georgia,serif;font-size:1.35rem;color:inherit;text-decoration:underline;text-decoration-color:#c9a84c;text-underline-offset:.25em;text-decoration-thickness:2px}'
   +'.vk-name:hover{color:#7f6119}.vk-weiter p{margin:.35rem 0 0;font-size:.95rem;line-height:1.55;color:#4a463d}'
   +'.vk-weiter.vk-praxis{border-top-color:rgba(63,79,53,.35)}.vk-weiter.vk-praxis .vk-rolle{color:#3f4f35;font-family:Inter,system-ui,sans-serif}.vk-weiter.vk-praxis h2{font-family:Fraunces,Georgia,serif;font-weight:300}.vk-weiter.vk-praxis .vk-name{text-decoration-color:#9a5a2c;font-family:Fraunces,Georgia,serif}.vk-weiter.vk-praxis p{font-family:Inter,system-ui,sans-serif}'
   +'html[data-farbe="nacht"] .vk-weiter{border-top-color:rgba(241,234,217,.3)}html[data-farbe="nacht"] .vk-weiter p{color:#d3ccba}html[data-farbe="nacht"] .vk-rolle{color:#e6b07a}html[data-farbe="nacht"] .vk-name:hover{color:#e6b07a}';
  function ids(d){
    if(isPraxis)return d.praxis_seiten[path]||[];
    if(slug){return d.buch_ueberschreibungen[slug]||d.kategorien[d.buecher[slug]]||[]}
    return d.seiten[path]||[];
  }
  function render(d){
    var list=ids(d).filter(function(id){var p=d.produkte[id];if(!p)return false;if(EN&&!p.name_en)return false;return true}).slice(0,3);
    if(!list.length||document.querySelector('.vk-weiter'))return;
    var sec=document.createElement('aside');sec.className='vk-weiter'+(isPraxis?' vk-praxis':'');sec.setAttribute('aria-label',EN?'Continue exploring':'Weiterführend');
    var self=path.replace(/\.html$/,'');
    var html='<h2>'+(EN?'Continue exploring':'Weiterführend')+'</h2><ul>';
    list.forEach(function(id){var p=d.produkte[id];
      var href=EN?p.href_en:p.href; if(!/^https?:/.test(href))href=VERLAG+href;
      if(href.replace(/\?.*$/,'').replace(VERLAG,'')===path&&!isPraxis)return;
      var ext=p.extern||isPraxis?' rel="noopener"':'';
      html+='<li><span class="vk-rolle">'+(EN?p.rolle_en:p.rolle)+'</span><a class="vk-name" href="'+href+'"'+ext+'>'+(EN?p.name_en:p.name)+' →</a><p>'+(EN?p.text_en:p.text)+'</p></li>'});
    html+='</ul>';sec.innerHTML=html;
    if(sec.querySelectorAll('li').length===0)return;
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    var main=document.querySelector('main');var foot=document.querySelector('footer,.site-footer');
    if(main)main.appendChild(sec);else if(foot)foot.parentNode.insertBefore(sec,foot);else document.body.appendChild(sec);
  }
  function go(){fetch(VERLAG+'verknuepfungen.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(d){
    if(path==='buch.html'){var c=document.getElementById('buch-container');if(c&&!c.children.length){var mo=new MutationObserver(function(){if(c.children.length){mo.disconnect();render(d)}});mo.observe(c,{childList:true});return}}
    render(d)}).catch(function(){})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
