(function(){
const S=window.SLIDES;let i=0;
const $=id=>document.getElementById(id);
const toc=$('toc'),scrub=$('scrub');
S.forEach((s,k)=>{
  const b=document.createElement('button');
  b.innerHTML=`<span class="n">${String(k+1).padStart(2,'0')}</span><span class="t">${s.title}</span><span class="m">${s.time}</span>`;
  b.onclick=()=>go(k);toc.appendChild(b);
  const d=document.createElement('span');d.onclick=()=>go(k);scrub.appendChild(d);
});
function go(n){
  i=Math.max(0,Math.min(S.length-1,n));const s=S[i];
  $('chip').textContent=s.part;$('bt').textContent=s.title;$('tc').textContent=s.time;
  $('stage').innerHTML='';const st=$('stage').cloneNode(false);
  const old=$('stage');old.innerHTML=typeof s.stage==='function'?s.stage():s.stage;
  old.style.animation='none';void old.offsetWidth;old.style.animation='';
  const say=s.say.map(p=>`<p>${p}</p>`).join('');
  $('info').innerHTML=`<div class="num">${String(i+1).padStart(2,'0')} / ${String(S.length).padStart(2,'0')}</div>
   <h1>${s.h1}</h1><p>${s.lead}</p>
   <div class="say" id="say"><button id="tg">▾ Guion · ${s.time}</button><div class="body-s"><b>Qué decir</b>${say}</div></div>
   <div class="src">${s.src}</div>`;
  $('tg').onclick=()=>$('say').classList.toggle('hide');
  [...toc.children].forEach((e,k)=>e.classList.toggle('on',k===i));
  [...scrub.children].forEach((e,k)=>e.className=k===i?'c':k<i?'v':'');
  $('prev').disabled=i===0;$('next').disabled=i===S.length-1;
  $('count').textContent=`${i+1}/${S.length}`;
  $('side').classList.remove('open');
  history.replaceState(null,'','#'+(i+1));
}
$('prev').onclick=()=>go(i-1);$('next').onclick=()=>go(i+1);
$('menu').onclick=()=>$('side').classList.toggle('open');
addEventListener('keydown',e=>{
  if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' ')go(i+1);
  else if(e.key==='ArrowLeft'||e.key==='PageUp')go(i-1);
  else if(e.key==='g'||e.key==='G'){const s=$('say');s&&s.classList.toggle('hide')}
  else if(e.key==='t'||e.key==='T')tm();
});
// cronómetro
let t0=0,tid=null,acc=0;
function fmt(ms){const s=Math.floor(ms/1000);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function tm(){const b=$('timer');
  if(tid){clearInterval(tid);tid=null;acc+=Date.now()-t0;b.classList.remove('run');return}
  t0=Date.now();b.classList.add('run');tid=setInterval(()=>b.textContent=fmt(acc+Date.now()-t0),250)}
$('timer').onclick=tm;$('timer').ondblclick=()=>{if(tid)tm();acc=0;$('timer').textContent='00:00'};
go((parseInt(location.hash.slice(1))||1)-1);
})();
