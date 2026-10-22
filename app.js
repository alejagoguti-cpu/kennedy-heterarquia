(function(){
const S=window.SLIDES;let i=0,k=0,tw=null;
const $=id=>document.getElementById(id);
const ROM=['I','II','III','IV','V','VI','VII','VIII','IX','X'];
const mins=t=>{const m=t.split('–').map(x=>x.split(':').map(Number));return[m[0][0]*60+m[0][1],m[1][0]*60+m[1][1]]};
const pills=$('pills'),scrub=$('scrub');
S.forEach((s,n)=>{
  const b=document.createElement('button');b.onclick=()=>go(n,0);pills.appendChild(b);
  const g=document.createElement('div');g.className='g';g.title=s.title;
  s.layers.forEach((l,m)=>{const sp=document.createElement('span');sp.onclick=e=>{e.stopPropagation();go(n,m)};g.appendChild(sp)});
  g.onclick=()=>go(n,0);scrub.appendChild(g);
});
function render(){
  const s=S[i];
  const parts=[];
  for(let m=0;m<=k;m++){const L=s.layers[m];parts.push(`<g class="${m===k?'L':''}">${L.svg?L.svg():''}</g>`)}
  const card=s.layers[k].card?`<div class="card"><b>${s.layers[k].label}</b>${s.layers[k].card}</div>`:'';
  $('stage').innerHTML=(s.base?s.base:`<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet"><defs>
<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8d887d"/></marker>
<marker id="arg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4fb38f"/></marker>
<marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e0603f"/></marker></defs>
<g transform="translate(100,0)">${parts.join('')}</g></svg>`)+card;
  $('dots').innerHTML=s.layers.map((_,m)=>`<i class="${m<=k?'d':''}"></i>`).join('');
  const last=k===s.layers.length-1;
  $('contT').textContent=last?(i===S.length-1?'Fin':'Clic para continuar'):'Clic para '+s.layers[k+1].label.toLowerCase();
  $('next').textContent=last?(i===S.length-1?'Fin':'Siguiente'):s.layers[k+1].label;
  $('next').disabled=last&&i===S.length-1;
  $('prev').disabled=i===0&&k===0;
  [...scrub.children].forEach((g,n)=>{g.className='g'+(n<i?' v':n===i?' c':'');[...g.children].forEach((sp,m)=>sp.className=n===i?(m<=k?'d'+(m===k?' cur':''):''):'')});
  history.replaceState(null,'','#'+(i+1)+(k?'.'+(k+1):''));
}
function head(){
  const s=S[i];
  [...pills.children].forEach((b,n)=>{b.className=n===i?'on':n<i?'v':'';b.innerHTML=n===i?`<b>${ROM[n]}</b>${s.pill}`:ROM[n]});
  pills.children[i].scrollIntoView({inline:'center',block:'nearest'});
  $('kicker').innerHTML=`<i></i>${String(i+1).padStart(2,'0')} — ${s.block}`;
  $('lead').textContent=s.lead;$('lead').style.animation='none';void $('lead').offsetWidth;$('lead').style.animation='';
  $('src').textContent='Fuentes · '+s.src;
  $('gbody').innerHTML=`<b class="t">Qué decir · ${s.time}</b>`+s.say.map(p=>`<p>${p}</p>`).join('');
  $('guion').scrollTop=0;
  const [a,b]=mins(s.time);const f=x=>String(Math.floor(x/60)).padStart(2,'0')+':'+String(x%60).padStart(2,'0');
  $('timer').dataset.r=f(a)+'–'+f(b);if(!tid)$('timer').textContent=$('timer').dataset.r;
  clearInterval(tw);const el=$('h1');el.innerHTML='<span class="caret"></span>';let n=0;
  tw=setInterval(()=>{n++;el.innerHTML=s.h1.slice(0,n)+(n<s.h1.length?'<span class="caret"></span>':'');if(n>=s.h1.length)clearInterval(tw)},16);
}
function go(n,m){const ch=n!==i||!$('h1').textContent;i=Math.max(0,Math.min(S.length-1,n));k=Math.max(0,Math.min(S[i].layers.length-1,m||0));if(ch)head();render()}
function next(){if(k<S[i].layers.length-1){k++;render()}else if(i<S.length-1)go(i+1,0)}
function prev(){if(k>0){k--;render()}else if(i>0)go(i-1,S[i-1].layers.length-1)}
$('next').onclick=next;$('prev').onclick=prev;
$('stagecard').addEventListener('click',e=>{if(e.target.closest('.chips,.guion,iframe,.hint'))return;next()});
$('cGuion').onclick=tg;$('gx').onclick=tg;$('cReset').onclick=()=>go(i,0);
$('cFull').onclick=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen()};
function tg(){const o=$('guion').classList.toggle('open');$('cGuion').classList.toggle('on',o)}
addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();next()}
  else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev()}
  else if(e.key==='g'||e.key==='G')tg();
  else if(e.key==='t'||e.key==='T')tm();
  else if(e.key==='f'||e.key==='F')$('cFull').click();
});
let t0=0,tid=null,acc=0,uid=null;
function fmt(ms){const s=Math.floor(ms/1000);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function tick(){const ms=acc+Date.now()-t0;$('timer').textContent=fmt(ms);const[a,b]=mins(S[i].time);$('bar').style.width=Math.max(0,Math.min(100,(ms/1000-a)/(b-a)*100))+'%'}
function tm(){const b=$('timer');
  if(tid){clearInterval(tid);tid=null;acc+=Date.now()-t0;b.classList.remove('run');return}
  t0=Date.now();b.classList.add('run');tick();tid=setInterval(tick,500)}
$('timer').onclick=tm;$('timer').ondblclick=()=>{if(tid)tm();acc=0;$('bar').style.width='0';$('timer').textContent=$('timer').dataset.r};
const h=(location.hash.slice(1)||'1').split('.');
go((parseInt(h[0])||1)-1,(parseInt(h[1])||1)-1);
})();
