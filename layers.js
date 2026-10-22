// Diagramas por pasos: cada capa se suma a la anterior al hacer clic / → .
(function(){
const C={a:'#e0603f',b:'#4fb38f',c:'#5b9be0',h:'#f2b632',l:'#2a2924',p:'#1a1a17',v:'#b48ae0',m:'#8d887d'};
const wrap=(t,n)=>{const w=t.split(' ');const L=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>n){L.push(c);c=x}else c=(c+' '+x).trim()});if(c)L.push(c);return L};
const txt=(x,y,t,{n=18,s=13,f='',w=500,anchor='middle',lh=1.25}={})=>{const L=wrap(t,n);const y0=y-(L.length-1)*s*lh/2;
 return `<text x="${x}" y="${y0}" text-anchor="${anchor}" font-size="${s}" font-weight="${w}" ${f?`fill="${f}"`:''} dominant-baseline="middle">${L.map((l,k)=>`<tspan x="${x}" dy="${k?s*lh:0}">${l}</tspan>`).join('')}</text>`};
const box=(x,y,w,h,t,col,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${C.p}" stroke="${col}" stroke-width="1.6" ${o.d?'stroke-dasharray="5 4"':''}/>${txt(x+w/2,y+h/2,t,{n:o.n||Math.floor(w/8),s:o.s||13,w:o.w||600,f:o.f})}`;
const ln=(x1,y1,x2,y2,col=C.m,m='ar',d)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${d?2.1:1.7}" ${d?'stroke-dasharray="7 5"':''} ${m?`marker-end="url(#${m})"`:''}/>`;
const dot=(x,y,r,t,col,o={})=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${C.p}" stroke="${col}" stroke-width="1.8"/>${txt(x,y,t,{n:o.n||11,s:o.s||11.5,w:600})}`;
const cap=(x,y,t,col=C.m)=>`<text class="mono" x="${x}" y="${y}" font-size="10.5" letter-spacing="1.2" fill="${col}" font-weight="600">${t.toUpperCase()}</text>`;
const lb=(x,y,t,col)=>`<text class="mono" x="${x}" y="${y}" font-size="10" fill="${col}" text-anchor="middle" font-weight="600">${t}</text>`;
const card=(x,y,w,h,col,num,title,body,extra)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${C.p}" stroke="${col}" stroke-width="1.5"/>`+
 `<text class="mono" x="${x+18}" y="${y+28}" font-size="11" fill="${col}" font-weight="700">${num}</text>`+txt(x+18,y+56,title,{s:18,w:700,anchor:'start',n:Math.floor(w/10)})+txt(x+18,y+110,body,{s:13,anchor:'start',n:Math.floor(w/8.4),f:'#c6c1b6',w:400,lh:1.4})+(extra?txt(x+18,y+h-34,extra,{s:12.5,anchor:'start',n:Math.floor(w/8),f:col,w:600,lh:1.35}):'');

const L=[];

/* I */
{const ks=[['Personas',C.a],['Organizaciones',C.b],['Instituciones',C.c],['Empresas',C.h],['Herramientas materiales',C.v]];
 const P=ks.map((k,n)=>{const a=-Math.PI/2+n*2*Math.PI/5;return[400+185*Math.cos(a)*1.25,250+185*Math.sin(a),k]});
 L.push([
 {label:'Los actores',svg:()=>`<ellipse cx="400" cy="250" rx="231" ry="185" fill="none" stroke="${C.l}" stroke-dasharray="3 6"/>`+dot(400,250,52,'Kennedy',C.h,{s:16})+P.map(p=>dot(p[0],p[1],46,p[2][0],p[2][1],{n:13,s:11.5})).join('')},
 {label:'Las relaciones',svg:()=>P.map((p,n)=>{const q=P[(n+2)%5];return `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="#4a4840" stroke-width="1.6"/>`}).join('')+P.map(p=>`<line x1="400" y1="250" x2="${p[0]}" y2="${p[1]}" stroke="#3a3830"/>`).join('')+dot(400,250,52,'Kennedy',C.h,{s:16})+P.map(p=>dot(p[0],p[1],46,p[2][0],p[2][1],{n:13,s:11.5})).join('')},
 {label:'Las cinco preguntas',svg:()=>cap(-80,34,'Lo que queremos saber',C.h)+['¿Quién participa?','¿Qué recursos controla?','¿Quién tiene información?','¿Quién puede cambiar una decisión?','¿Quién asume las consecuencias?'].map((q,n)=>`<text x="-80" y="${64+n*24}" font-size="13" fill="#d9d4ca">${n+1}. ${q}</text>`).join('')}
 ]);}

/* II */
{const row=(y,col,t,items)=>{let o=cap(-60,y-36,t,col);const w=128,g=36;items.forEach((it,n)=>{const x=-60+n*(w+g);o+=box(x,y-22,w,56,it,col,{s:12.5});if(n)o+=ln(x-g+4,y+6,x-4,y+6,col,'ar')});return o};
 L.push([
 {label:'Cadena de alimentos',svg:()=>row(90,C.a,'Alimentos · alrededor de Corabastos',['Mayoristas','Compradores','Coteros','Conductores y vehículos','Tiendas y restaurantes'])},
 {label:'Residuos aprovechables',svg:()=>row(215,C.b,'Residuos aprovechables',['Generadores','Separan','Recolectan y transportan','Clasifican','Compradores de material'])},
 {label:'Condiciones materiales',svg:()=>cap(-60,320,'Condiciones materiales · ¿quién las controla?',C.h)+['Suelo','Dinero','Trabajo','Información','Tiempo'].map((c,n)=>`<rect x="${-60+n*164}" y="336" width="148" height="64" rx="10" fill="${C.p}" stroke="${C.h}" stroke-opacity=".6"/>`+txt(14+n*164,368,c,{s:16,w:700})).join('')},
 {label:'Capacidad ≠ poder',svg:()=>txt(400,448,'Competencia legal ≠ recursos ≠ información práctica ≠ poder de decisión',{s:14,f:C.h,n:90,w:600})}
 ]);}

/* III */
{L.push([
 {label:'Jerarquía vs. heterarquía',svg:()=>{let o=cap(-30,40,'Jerarquía única')+cap(430,40,'Heterarquía',C.h);
  const T=[[170,100],[90,190],[250,190],[40,290],[140,290],[200,290],[300,290]];
  [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]].forEach(([a,b])=>o+=`<line x1="${T[a][0]}" y1="${T[a][1]}" x2="${T[b][0]}" y2="${T[b][1]}" stroke="#5d5a52"/>`);
  T.forEach((p,n)=>o+=`<circle cx="${p[0]}" cy="${p[1]}" r="${n?16:24}" fill="${C.p}" stroke="${C.m}" stroke-width="1.5"/>`);
  o+=txt(170,350,'Todo pasa por un centro',{s:13,f:C.m,n:40});
  const cs=[[520,150,C.a,'Instituciones'],[690,150,C.c,'Comunidad'],[520,290,C.b,'Operadores'],[690,290,C.h,'Recicladores']];
  [[0,1],[0,2],[1,3],[2,3],[0,3],[1,2]].forEach(([a,b])=>o+=`<line x1="${cs[a][0]}" y1="${cs[a][1]}" x2="${cs[b][0]}" y2="${cs[b][1]}" stroke="#4a4840" stroke-dasharray="4 4"/>`);
  cs.forEach(c=>o+=dot(c[0],c[1],46,c[3],c[2],{s:12}));
  o+=txt(605,360,'La influencia varía según asunto, función, recursos y conocimiento',{s:13,f:C.m,n:44});
  o+=`<line x1="360" y1="60" x2="360" y2="380" stroke="${C.l}"/>`;return o}},
 {label:'Gobernanza policéntrica',svg:()=>{let o='';const cs=[[520,150],[690,150],[520,290],[690,290]];
  o+=`<ellipse cx="605" cy="220" rx="190" ry="130" fill="none" stroke="${C.h}" stroke-width="1.6" stroke-dasharray="2 7"/>`;
  o+=txt(605,64,'Cada centro conserva autonomía y se coordina donde sus actividades se cruzan',{s:12.5,f:C.h,n:46,w:600});return o}},
 {label:'Reglas y mandato',svg:()=>cap(-30,420,'Hacen falta reglas para',C.h)+['Compartir información','Definir responsabilidades','Tratar desacuerdos','Revisar resultados'].map((r,n)=>box(-30+n*210,436,196,48,r,C.h,{s:13})).join('')+txt(400,402,'Quien representa informa lo acordado y vuelve a consultar si excede su mandato',{s:12.5,f:C.m,n:90})}
 ]);}

/* IV · red (iframe) */
L.push([
 {label:'Nodos y líneas',card:'Cada nodo es un actor o elemento relevante; cada línea, una relación que hay que explicar. Recorre transporte, mayoristas, comerciantes, tiendas y restaurantes.'},
 {label:'Gobierno de Corabastos',card:'Corabastos S. A., Asamblea General de Accionistas, Junta Directiva y Comité de Comerciantes: ¿cómo se conectan operación, administración y organización? La ubicación visual no dice quién decide más.'},
 {label:'Qué debe decir cada línea',card:'Quién influye sobre quién, qué recurso o mecanismo circula (compra, entrega, información, autorización, cooperación, conflicto) y con qué efecto. Lo propuesto, como una mesa nueva, va marcado como propuesta.'},
 {label:'Límites de lectura',card:'El grosor solo es intensidad real si hay datos; si no, es estimación por validar. El mapa de alimentos es un recorte de Kennedy, no toda la red.'}
]);

/* V */
{const st=[['1','Agenda','¿Quién identifica el problema y logra que se discuta?',C.a],['2','Deliberación','¿Quién aporta información, alternativas o desacuerdo?',C.c],['3','Resolución','¿Con qué regla se decide? ¿Qué mandato se da?',C.b],['4','Ejecución','¿Quién hace las tareas, con qué recursos, presupuesto y calendario?',C.h],['5','Rectificación','¿Quién revisa, corrige o reabre la decisión?',C.v]];
 const one=n=>{const s=st[n],x=-70+n*182;return `<rect x="${x}" y="120" width="166" height="250" rx="12" fill="${C.p}" stroke="${s[3]}" stroke-width="1.6"/>`+
  `<text class="mono" x="${x+18}" y="154" font-size="24" font-weight="700" fill="${s[3]}">${s[0]}</text>`+txt(x+83,200,s[1],{s:16,w:700,n:12})+txt(x+83,284,s[2],{s:12.5,n:19,f:'#c6c1b6',w:400,lh:1.4})+(n?ln(x-14,245,x-2,245,s[3],'ar'):'')};
 const head=cap(-70,60,'Ejemplo · recuperación de residuos aprovechables',C.h)+txt(-70,88,'Un reciclador, una asociación, un comercio o un operador identifica la dificultad',{s:12.5,anchor:'start',f:'#c6c1b6',n:120});
 L.push([
 {label:'Agenda',svg:()=>head+one(0)},{label:'Deliberación',svg:()=>one(1)},{label:'Resolución',svg:()=>one(2)},{label:'Ejecución',svg:()=>one(3)},
 {label:'Rectificación',svg:()=>one(4)+`<path d="M765 386 Q765 440 400 440 Q30 440 13 386" fill="none" stroke="${C.v}" stroke-dasharray="5 5" marker-end="url(#ar)"/>`+txt(400,466,'Separar decidir de ejecutar: quien firma no siempre controla dinero, equipos, calendario o conocimiento',{s:12.5,f:C.m,n:100})}
 ]);}

/* VI */
{const bx=(x,y,t,col,d)=>box(x-78,y-28,156,56,t,col,{d,s:12,n:20});
 L.push([
 {label:'Flujo de materiales',svg:()=>cap(-70,28,'Borrador · por validar',C.m)+`<rect x="300" y="44" width="200" height="48" rx="10" fill="${C.p}" stroke="${C.h}" stroke-width="1.6"/>`+txt(400,68,'Residentes y comercios de Kennedy',{s:12.5,n:26,w:700})+
   bx(110,180,'Generan y separan',C.b)+bx(400,180,'Recolectan y transportan',C.b)+bx(690,180,'Clasifican',C.b)+bx(690,330,'Compradores de material',C.h)+
   ln(335,92,150,152)+ln(188,180,320,180)+ln(478,180,610,180)+ln(690,208,690,300)+lb(110,122,'residuos aprovechables',C.m)},
 {label:'Retroalimentación',svg:()=>bx(400,330,'Mesa de coordinación (propuesta)',C.v,true)+bx(110,330,'Entidades públicas · competencia legal',C.c)+
   ln(640,302,460,208,C.b,'arg',1)+lb(590,246,'ingresos por material',C.b)+ln(400,302,400,208,C.b,'arg',1)+lb(400,258,'acuerdos · rutas · horarios',C.b)+ln(188,330,320,330,C.b,'arg',1)+lb(254,318,'competencias',C.b)},
 {label:'Ejecución y recursos',svg:()=>bx(400,450,'Financiación, infraestructura y servicios',C.h)+ln(400,422,400,360,C.b,'arg',1)+lb(400,396,'ejecución',C.b)+txt(-10,452,'Sin recursos garantizados, el acuerdo queda en el papel',{s:12,anchor:'start',f:C.m,n:30})},
 {label:'Tensión',svg:()=>`<rect x="612" y="410" width="156" height="76" rx="10" fill="${C.p}" stroke="${C.a}" stroke-width="1.6" stroke-dasharray="5 4"/>`+txt(690,448,'Tensión: influencia informal sobre precio y ruta',{s:11.5,n:22,w:600,f:C.a})+ln(690,410,690,360,C.a,'arr2',1)+lb(724,386,'−',C.a)}
 ]);}

/* VII */
{const K=[['Influencia informal','Sin autoridad formal, un actor controla información, dinero, equipos o una conexión indispensable.','¿Quién facilita, retrasa o detiene un flujo?',C.a],['Dependencia material','Se acuerda una solución, pero falta financiación, infraestructura o servicios de otra entidad.','Sin recursos garantizados, la decisión queda en el papel.',C.c],['Trabajo desigual','Parece horizontal, pero cuidado, coordinación y mantenimiento recaen en pocas personas.','Si no se reconoce ni se distribuye, se pierde continuidad.',C.b],['Beneficios y costos','Una propuesta puede transformar una contradicción o desplazar el costo a otro grupo.','¿Quién gana, quién asume, quién puede corregir?',C.h]];
 const c=n=>{const k=K[n];return card(-60+(n%2)*420,24+Math.floor(n/2)*236,400,216,k[3],'0'+(n+1),k[0],k[1],k[2])};
 L.push([{label:'Influencia informal',svg:()=>c(0)},{label:'Dependencia material',svg:()=>c(1)},{label:'Trabajo desigual',svg:()=>c(2)},{label:'Beneficios y costos',svg:()=>c(3)}]);}

/* VIII */
{const F=[['Diagnóstico','Reconstruir cómo funciona hoy: conexiones, dependencias, recursos, actores afectados y vacíos de participación.',C.a],['Ensayo','Coordinación entre organizaciones interesadas, ajustada a las competencias legales de las instituciones.',C.b],['Revisión','Medir, comparar y ajustar las reglas con lo aprendido.',C.h]];
 const f=n=>{const x=-60+n*282,s=F[n];return `<rect x="${x}" y="50" width="262" height="210" rx="12" fill="${C.p}" stroke="${s[2]}" stroke-width="1.6"/>`+`<text class="mono" x="${x+18}" y="82" font-size="11" fill="${s[2]}" font-weight="700">FASE ${n+1}</text>`+txt(x+18,112,s[0],{s:21,w:700,anchor:'start'})+txt(x+18,180,s[1],{s:13,anchor:'start',n:32,f:'#c6c1b6',w:400,lh:1.4})+(n?ln(x-18,155,x-2,155,s[2],'ar'):'')};
 L.push([{label:'Diagnóstico',svg:()=>f(0)+txt(400,296,'Dinámica delimitada: la recuperación de residuos aprovechables',{s:12.5,f:C.m,n:80})},{label:'Ensayo',svg:()=>f(1)},{label:'Revisión',svg:()=>f(2)+`<path d="M780 272 Q780 320 400 320 Q20 320 70 272" fill="none" stroke="${C.m}" stroke-dasharray="5 5" marker-end="url(#ar)"/>`+txt(400,342,'aprendizaje y ajuste de reglas',{s:12,f:C.m,n:50})},
 {label:'Primera prueba',svg:()=>cap(-60,384,'Primera prueba · qué registrar',C.h)+['Acuerdos cumplidos','Tiempo para resolver dificultades','Distribución de tareas','Participación efectiva'].map((k,n)=>box(-60+n*211,400,196,56,k,C.h,{s:13})).join('')+txt(400,486,'No prueban por sí solos que una estructura sea mejor: ayudan a detectar exclusiones y responsabilidades desiguales.',{s:12,f:C.m,n:120})}]);}

/* IX */
{const P=[['Ficha del macromodelo','Principios y objetivos',C.h],['Red de actores','Influencias y relaciones',C.c],['Trayecto de decisiones','Agenda → rectificación',C.b],['Modelo dinámico-causal','Flujos y retroalimentación',C.a],['Efectos territoriales','Síntesis',C.v],['Fuentes y supuestos','Qué sabemos y qué falta',C.m]];
 const pos=n=>{const a=-Math.PI/2+n*Math.PI/3;return[400+190*Math.cos(a)*1.55,250+190*Math.sin(a)*1.05]};
 L.push([
 {label:'Seis piezas',svg:()=>P.map((p,n)=>{const[x,y]=pos(n);return `<rect x="${x-92}" y="${y-36}" width="184" height="72" rx="10" fill="${C.p}" stroke="${p[2]}" stroke-width="1.6"/>`+txt(x,y-10,p[0],{s:13.5,w:700,n:22})}).join('')+P.map((p,n)=>{const[x,y]=pos(n);return txt(x,y+14,p[1],{s:11,f:C.m,w:400,n:28})}).join('')},
 {label:'Deben ser coherentes',svg:()=>P.map((p,n)=>{const[x,y]=pos(n);return `<line x1="400" y1="250" x2="${x}" y2="${y}" stroke="#4a4840" stroke-dasharray="4 4"/>`}).join('')+dot(400,250,60,'Coherencia',C.h,{s:14})},
 {label:'La pregunta final',svg:()=>txt(400,476,'¿Quién interactúa con quién, qué recursos circulan, quién decide y quién puede corregir?',{s:14,f:C.h,w:600,n:90})}
 ]);}

window.SLIDES.forEach((s,n)=>{s.layers=L[n].map(l=>({label:l.label,svg:l.svg,card:l.card}));if(n===3)s.base='<iframe src="https://anasoficasca-code.github.io/redrelacionesociales/" title="Red de actores de Kennedy" loading="lazy" allow="fullscreen"></iframe>'});
})();
