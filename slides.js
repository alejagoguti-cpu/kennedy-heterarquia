(function(){
const C={a:'#e0603f',b:'#4fb38f',c:'#5b9be0',h:'#f2b632',l:'#2a2924',p:'#1a1a17',v:'#b48ae0'};
const svg=(b,vb='0 0 800 500')=>`<svg viewBox="${vb}" preserveAspectRatio="xMidYMid meet"><defs>
<marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8d887d"/></marker><marker id="arg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4fb38f"/></marker><marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e0603f"/></marker></defs>${b}</svg>`;
const wrap=(t,n)=>{const w=t.split(' ');const L=[];let c='';w.forEach(x=>{if((c+' '+x).trim().length>n){L.push(c);c=x}else c=(c+' '+x).trim()});if(c)L.push(c);return L};
const txt=(x,y,t,{n=18,s=13,f='',w=500,anchor='middle',lh=1.25}={})=>{const L=wrap(t,n);const y0=y-(L.length-1)*s*lh/2;
 return `<text x="${x}" y="${y0}" text-anchor="${anchor}" font-size="${s}" font-weight="${w}" ${f?`fill="${f}"`:''} dominant-baseline="middle">${L.map((l,k)=>`<tspan x="${x}" dy="${k?s*lh:0}">${l}</tspan>`).join('')}</text>`};
const box=(x,y,w,h,t,col,o={})=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${C.p}" stroke="${col}" stroke-width="1.5"/>${txt(x+w/2,y+h/2,t,{n:o.n||Math.floor(w/8),s:o.s||13,w:o.w||600})}`;
const arr=(x1,y1,x2,y2,col='#8d887d',d='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="1.6" ${d?`stroke-dasharray="${d}"`:''} marker-end="url(#ar)"/>`;
const dot=(x,y,r,t,col,o={})=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${C.p}" stroke="${col}" stroke-width="1.8"/>${txt(x,y,t,{n:o.n||11,s:o.s||11.5,w:600})}`;
const cap=(x,y,t,col='#8d887d')=>`<text class="mono" x="${x}" y="${y}" font-size="10.5" letter-spacing="1.2" fill="${col}" font-weight="600">${t.toUpperCase()}</text>`;
const SL=[];

SL.push({part:'Apertura',time:'0:00–1:20',title:'La pregunta del proyecto',
h1:'¿Cómo coordinar sin un único centro de poder?',
lead:'Kennedy como sistema de relaciones: personas, organizaciones, instituciones, empresas y herramientas materiales.',
src:'Pregunta guía · propuesta: organización política heterárquica y distribuida + coordinación policéntrica.',
say:[
'Hola. Hoy vamos a presentar una propuesta para comprender y organizar las relaciones sociales y políticas que intervienen en Kennedy. La pregunta que orienta nuestro trabajo es: ¿cómo podemos coordinar las decisiones, los recursos y el trabajo del territorio sin que toda la capacidad de influir dependa de un único centro de poder?',
'No entendemos a Kennedy solamente como un espacio físico ni como una lista de problemas. Lo vemos como un sistema de relaciones entre personas, organizaciones, instituciones, empresas y herramientas materiales que hacen posibles actividades cotidianas.',
'Nos interesa saber quién participa, qué recursos controla, quién tiene información, quién puede cambiar una decisión y quién asume sus consecuencias. Por eso proponemos analizar una organización política heterárquica y distribuida, acompañada por una coordinación policéntrica. La idea no es que todas las personas decidan sobre todo, ni desconocer las responsabilidades legales de las instituciones. La idea es distribuir la influencia y coordinar mejor las decisiones que dependen unas de otras.'],
stage:()=>{const ks=[['Personas',C.a],['Organizaciones',C.b],['Instituciones',C.c],['Empresas',C.h],['Herramientas materiales',C.v]];
 let o=`<circle cx="470" cy="260" r="180" fill="none" stroke="${C.l}" stroke-dasharray="3 6"/>`;
 const P=ks.map((k,n)=>{const a=-Math.PI/2+n*2*Math.PI/5;return[470+180*Math.cos(a),260+180*Math.sin(a),k]});
 P.forEach((p,n)=>{const q=P[(n+2)%5];o+=`<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${C.l}" stroke-width="1.5"/>`});
 P.forEach(p=>o+=`<line x1="470" y1="260" x2="${p[0]}" y2="${p[1]}" stroke="#3a3830"/>`);
 o+=dot(470,260,50,'Kennedy',C.h,{s:16});
 P.forEach(p=>o+=dot(p[0],p[1],44,p[2][0],p[2][1],{n:13,s:11.5}));
 o+=cap(20,30,'Cinco preguntas')+['¿Quién participa?','¿Qué recursos controla?','¿Quién tiene información?','¿Quién puede cambiar una decisión?','¿Quién asume las consecuencias?'].map((q,n)=>`<text x="20" y="${58+n*24}" font-size="12.5" fill="#c6c1b6">${n+1}. ${q}</text>`).join('');
 return svg(o)}});

SL.push({part:'Situación',time:'1:20–2:50',title:'Situación actual y problema',
h1:'Dos cadenas, cinco condiciones materiales',
lead:'No se trata de actores desconectados: se trata de ver dónde hay coordinación, dependencias y consecuencias sin voz.',
src:'Cadena de alimentos en torno a Corabastos · cadena de residuos aprovechables · guía: suelo, dinero, trabajo, información, tiempo.',
say:[
'En Kennedy se cruzan dinámicas sociales y económicas distintas. El abastecimiento de alimentos, por ejemplo, depende de una cadena de actores: comerciantes mayoristas, compradores, coteros, conductores, propietarios de vehículos, tiendas y restaurantes. El diagrama que presentamos se enfoca en esa red alrededor de Corabastos y muestra cómo se conectan transporte, comercio mayorista, distribución y puntos de venta o consumo.',
'Con los residuos aprovechables ocurre algo parecido: participan quienes los generan, separan, recolectan, transportan, clasifican y compran. En esa dinámica pueden relacionarse entidades públicas, operadores de aseo, asociaciones de recicladores, compradores de materiales y recicladores independientes o informales.',
'Nuestro problema no es afirmar que todos estos actores están desconectados. Lo que queremos entender es dónde existe coordinación, dónde aparecen dependencias, quién logra poner un asunto en la agenda y quién soporta consecuencias sin participar en las decisiones.',
'Tampoco todos controlan lo mismo. Una institución puede tener competencias legales; una empresa, recursos o capacidad operativa; y una persona que conoce los recorridos puede tener información práctica indispensable sin que ese conocimiento le dé automáticamente poder de decisión. La guía nos invita a mirar las condiciones materiales: suelo, dinero, trabajo, información y tiempo. Esa pregunta será transversal a nuestro modelo: ¿quién controla esas condiciones y cómo afecta eso la capacidad de actuar?'],
stage:()=>{const row=(y,col,t,items)=>{let o=cap(24,y-34,t,col);const w=118,g=34;items.forEach((it,n)=>{const x=24+n*(w+g);o+=box(x,y-20,w,52,it,col,{s:12});if(n)o+=arr(x-g+3,y+6,x-3,y+6,col)});return o};
 let o=row(90,C.a,'Alimentos · alrededor de Corabastos',['Mayoristas','Compradores','Coteros','Conductores y vehículos','Tiendas y restaurantes']);
 o+=row(220,C.b,'Residuos aprovechables',['Generadores','Separan','Recolectan y transportan','Clasifican','Compradores de material']);
 o+=cap(24,318,'Condiciones materiales · ¿quién las controla?',C.h);
 ['Suelo','Dinero','Trabajo','Información','Tiempo'].forEach((c,n)=>{o+=`<rect x="${24+n*152}" y="334" width="128" height="64" rx="10" fill="${C.p}" stroke="${C.h}" stroke-opacity=".5"/>`+txt(88+n*152,366,c,{s:15,w:700})});
 o+=txt(400,445,'Competencia legal ≠ recursos ≠ información práctica ≠ poder de decisión',{s:13,f:'#8d887d',n:80});
 return svg(o)}});

SL.push({part:'Macromodelo',time:'2:50–4:25',title:'Heterarquía y gobernanza policéntrica',
h1:'Distribuir la influencia, coordinar los centros',
lead:'La heterarquía distribuye la influencia; la gobernanza policéntrica coordina centros autónomos con reglas compartidas.',
src:'Conceptos: heterarquía · gobernanza policéntrica · mandato, información, desacuerdos y revisión.',
say:[
'El primer concepto es la heterarquía. En palabras sencillas, significa que las relaciones sociales no tienen que organizarse siempre mediante una sola jerarquía vertical. La influencia puede variar según el asunto, la función de cada actor, sus recursos y su conocimiento.',
'Esto no significa eliminar a las autoridades ni que todo el mundo decida sobre todo. Significa distinguir las responsabilidades institucionales de la influencia efectiva. Una entidad puede tener una competencia legal; una organización comunitaria puede conocer de primera mano un problema; y un operador puede controlar los medios necesarios para ejecutar una solución. Son formas distintas de capacidad que el modelo debe reconocer.',
'El segundo concepto es la gobernanza policéntrica: varios centros de decisión conservan autonomía y se coordinan cuando sus actividades se cruzan. Para que funcione, hacen falta reglas para compartir información, definir responsabilidades, tratar desacuerdos y revisar resultados.',
'En nuestra propuesta, la heterarquía ayuda a distribuir la influencia y la gobernanza policéntrica coordina los distintos centros. Cada asunto debería tratarse en el nivel que corresponda, con participación de quienes están involucrados y con formas claras de rendir cuentas. Las tareas delegadas también necesitan límites: quien representa a un colectivo informa lo acordado y vuelve a consultar cuando el asunto excede su mandato. Coordinar no significa concentrar poder sin control.'],
stage:()=>{let o=cap(40,28,'Jerarquía única')+cap(440,28,'Heterarquía + policentrismo',C.h);
 const T=[[200,80],[110,170],[290,170],[60,260],[160,260],[240,260],[340,260]];
 [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]].forEach(([a,b])=>o+=`<line x1="${T[a][0]}" y1="${T[a][1]}" x2="${T[b][0]}" y2="${T[b][1]}" stroke="#5d5a52"/>`);
 T.forEach((p,n)=>o+=`<circle cx="${p[0]}" cy="${p[1]}" r="${n?15:22}" fill="${C.p}" stroke="#8d887d" stroke-width="1.5"/>`);
 o+=txt(200,330,'Todo pasa por un centro',{s:12.5,f:'#8d887d',n:40});
 const cs=[[540,130,C.a,'Instituciones'],[690,130,C.c,'Comunidad'],[540,270,C.b,'Operadores'],[690,270,C.h,'Recicladores']];
 [[0,1],[0,2],[1,3],[2,3],[0,3],[1,2]].forEach(([a,b])=>o+=`<line x1="${cs[a][0]}" y1="${cs[a][1]}" x2="${cs[b][0]}" y2="${cs[b][1]}" stroke="#3a3830" stroke-dasharray="4 4"/>`);
 cs.forEach(c=>o+=`<circle cx="${c[0]}" cy="${c[1]}" r="46" fill="${C.p}" stroke="${c[2]}" stroke-width="1.8"/>`+txt(c[0],c[1],c[3],{s:12,w:600}));
 o+=txt(615,340,'Centros autónomos que se coordinan',{s:12.5,f:'#8d887d',n:40});
 o+=`<line x1="410" y1="50" x2="410" y2="350" stroke="${C.l}"/>`;
 const R=['Compartir información','Definir responsabilidades','Tratar desacuerdos','Revisar resultados'];
 o+=cap(40,385,'Reglas que hacen falta',C.h);R.forEach((r,n)=>o+=box(40+n*185,400,170,56,r,C.h,{s:12.5}));
 return svg(o)}});

SL.push({part:'Red de actores',time:'4:25–6:30',title:'La red de actores',
h1:'Qué muestra y qué debemos leer',
lead:'Cada nodo es un actor; cada línea, una relación que hay que explicar: quién influye sobre quién y qué circula.',
src:'Red interactiva: anasoficasca-code.github.io/redrelacionesociales (90 actores · 239 interacciones, en construcción).',
say:[
'[Recorrer lentamente el diagrama compartido: camiones y transporte, mayoristas, comerciantes, tiendas y restaurantes; luego señalar los nodos de gobierno y organización de Corabastos.]',
'En este diagrama, cada nodo representa un actor o elemento relevante para la actividad y cada línea representa una relación que necesitamos explicar. En la cadena de alimentos aparecen comerciantes mayoristas de frutas y hortalizas; comerciantes de tubérculos, granos y abarrotes; tenderos y propietarios de pequeños comercios; restaurantes y cafeterías; camiones de transporte; vehículos de reparto; y actores relacionados con intermediación, logística y carga o descarga.',
'También aparecen Corabastos S. A. y espacios de organización y gobierno, como la Asamblea General de Accionistas, la Junta Directiva y el Comité de Comerciantes. Su presencia permite preguntar cómo se conectan la operación, la administración y la organización de comerciantes. No debemos concluir solo por su ubicación visual qué actor decide más o tiene mayor influencia.',
'Las relaciones pueden representar compras, entregas, coordinación laboral, información, autorizaciones, cooperación o conflicto. En la versión final, cada conexión debe dejar claro quién influye sobre quién, qué recurso o mecanismo circula y qué efecto tiene sobre una actividad o decisión. También distinguimos lo que ya existe de lo que proponemos crear: por ejemplo, una nueva mesa de coordinación tendría que aparecer marcada como propuesta, con su función y los actores que conectaría.',
'El tamaño o peso de una línea solo debería interpretarse como intensidad real si contamos con datos. Si no los tenemos, lo presentamos como una estimación inicial por validar. Y el mapa de alimentos no representa automáticamente toda la red de Kennedy: es un recorte de una dinámica territorial más amplia, que incluye también la gestión de residuos y otras relaciones que el equipo haya documentado.'],
stage:()=>`<iframe src="https://anasoficasca-code.github.io/redrelacionesociales/" title="Red de actores de Kennedy" loading="lazy" allow="fullscreen"></iframe>`});

SL.push({part:'Decisión',time:'6:30–8:15',title:'Cómo se tomaría una decisión',
h1:'Agenda, deliberación, resolución, ejecución, rectificación',
lead:'Separar decidir de ejecutar: quien firma una decisión no siempre controla dinero, equipos, calendario o conocimiento.',
src:'Guía: trayecto de una decisión · ejemplo: dificultad en la recuperación de residuos aprovechables.',
say:[
'[Mostrar cinco pasos en pantalla: agenda, deliberación, resolución, ejecución y rectificación.]',
'La guía propone explicar el trayecto de una decisión. Primero, agenda: quién identifica un problema y quién logra que se discuta. Segundo, deliberación: quién aporta información, propone alternativas o expresa desacuerdo. Tercero, resolución: con qué regla se decide y qué mandato se establece. Cuarto, ejecución: quién realiza las tareas, con qué recursos, presupuesto y calendario. Quinto, rectificación: quién revisa el resultado, corrige un error o reabre la decisión.',
'Para ilustrarlo, imaginemos una dificultad en la recuperación de residuos aprovechables. El problema podría ser identificado por un reciclador independiente, una asociación, un comercio o un operador. Primero se registra la situación y se comparte información sobre recorridos, horarios, materiales, costos y dificultades. Después se convoca a los actores que pueden intervenir. Las organizaciones y personas aportan conocimiento práctico; las instituciones aclaran sus competencias legales; y se define qué decisiones son internas de cada organización y cuáles requieren coordinación o autorización pública.',
'Una vez acordada una medida, se asignan responsables, recursos y plazos. También se define quién verifica el cumplimiento y cómo se corrige lo que no funciona. La clave es separar decidir de ejecutar: quien firma una decisión no siempre controla el dinero, los equipos, el calendario o el conocimiento necesario para realizarla. El modelo debe hacer visibles esas dependencias.'],
stage:()=>{const st=[['1','Agenda','¿Quién identifica el problema y logra que se discuta?',C.a],['2','Deliberación','¿Quién aporta información, alternativas o desacuerdo?',C.c],['3','Resolución','¿Con qué regla se decide? ¿Qué mandato se da?',C.b],['4','Ejecución','¿Quién hace las tareas, con qué recursos y calendario?',C.h],['5','Rectificación','¿Quién revisa, corrige o reabre la decisión?',C.v]];
 let o='';st.forEach((s,n)=>{const x=14+n*155;o+=`<rect x="${x}" y="120" width="140" height="230" rx="12" fill="${C.p}" stroke="${s[3]}" stroke-width="1.5"/>`+
  `<text class="mono" x="${x+16}" y="152" font-size="22" font-weight="700" fill="${s[3]}">${s[0]}</text>`+txt(x+70,194,s[1],{s:15,w:700,n:12})+txt(x+70,270,s[2],{s:12,n:17,f:'#c6c1b6',w:400,lh:1.35});
  if(n)o+=arr(x-13,235,x-1,235,s[3])});
 o+=`<path d="M720 366 Q720 420 400 420 Q80 420 84 366" fill="none" stroke="${C.v}" stroke-dasharray="5 5" marker-end="url(#ar)"/>`+txt(400,444,'La rectificación puede reabrir la agenda',{s:12,f:'#8d887d',n:60});
 o+=cap(14,56,'Ejemplo · recuperación de residuos aprovechables',C.h)+txt(14,86,'Registro de recorridos, horarios, materiales y costos → convocatoria → competencias legales vs. decisiones internas',{s:12,anchor:'start',f:'#c6c1b6',n:110});
 return svg(o)}});

SL.push({part:'Dinámico-causal',time:'8:15–10:45',title:'Por qué se sostiene o cambia',
h1:'Flujos que sostienen o desgastan la coordinación',
lead:'Borrador: cómo circulan materiales, dinero e información en la recuperación de residuos, y qué retroalimentaciones sostienen o rompen la coordinación.',
src:'⚠ Borrador por validar: el guion de 8:15–10:45 no llegó; los flujos salen del resto del guion. Sin cantidades reales (kg, $) hasta tener datos.',
say:['[Falta el texto de esta sección: pega aquí el guion de 8:15–10:45.]','Lectura sugerida del diagrama: los residuos fluyen de quien los genera a quien los compra (flechas grises). El dinero, los acuerdos y las competencias legales vuelven como retroalimentación (verde discontinuo) y sostienen la mesa de coordinación propuesta. Sin financiación e infraestructura garantizadas los acuerdos quedan en el papel, y quien controla precio o ruta puede concentrar influencia sin autoridad formal (rojo).'],
stage:()=>{const G='#4fb38f',R='#e0603f';
 const bx=(x,y,t,col,dash)=>`<rect x="${x-78}" y="${y-28}" width="156" height="56" rx="10" fill="${C.p}" stroke="${col}" stroke-width="1.6" ${dash?'stroke-dasharray="5 4"':''}/>`+txt(x,y,t,{s:12,n:20,w:600});
 const ln=(x1,y1,x2,y2,col,m,d)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${d?2.2:1.8}" ${d?'stroke-dasharray="7 5"':''} marker-end="url(#${m})"/>`;
 const lb=(x,y,t,col)=>`<text class="mono" x="${x}" y="${y}" font-size="10" fill="${col}" text-anchor="middle" font-weight="600">${t}</text>`;
 let o=`<rect x="300" y="14" width="200" height="48" rx="10" fill="${C.p}" stroke="${C.h}" stroke-width="1.6"/>`+txt(400,38,'Residentes y comercios de Kennedy',{s:12.5,n:26,w:700});
 o+=bx(120,150,'Generan y separan',C.b)+bx(400,150,'Recolectan y transportan',C.b)+bx(680,150,'Clasifican',C.b);
 o+=bx(680,300,'Compradores de material',C.h)+bx(400,300,'Mesa de coordinación (propuesta)',C.v,true)+bx(120,300,'Entidades públicas · competencia legal',C.c);
 o+=bx(400,440,'Financiación, infraestructura y servicios',C.h);
 o+=`<rect x="602" y="400" width="156" height="80" rx="10" fill="${C.p}" stroke="${R}" stroke-width="1.6" stroke-dasharray="5 4"/>`+txt(680,440,'Tensión: influencia informal sobre precio y ruta',{s:11.5,n:22,w:600,f:R});
 o+=ln(335,62,150,120,'#8d887d','ar')+ln(198,150,320,150,'#8d887d','ar')+ln(478,150,600,150,'#8d887d','ar')+ln(680,178,680,270,'#8d887d','ar');
 o+=lb(120,92,'residuos aprovechables','#8d887d');
 o+=ln(630,272,460,180,G,'arg',1)+lb(590,214,'ingresos por material',G);
 o+=ln(400,272,400,180,G,'arg',1)+lb(400,226,'acuerdos · rutas · horarios',G);
 o+=ln(198,300,320,300,G,'arg',1)+lb(259,288,'competencias',G);
 o+=ln(400,412,400,330,G,'arg',1)+lb(400,376,'ejecución',G);
 o+=ln(680,400,680,330,R,'arr2',1)+lb(718,372,'−',R);
 o+=`<text class="mono" x="20" y="476" font-size="10" fill="#8d887d">──▶ materiales    ╌╌▶ retroalimentación (dinero, información, mandato)    ╌╌▶ tensión</text>`;
 o+=`<text class="mono" x="20" y="494" font-size="10" fill="#8d887d">BORRADOR · cantidades por validar</text>`;
 return svg(o)}});

SL.push({part:'Contradicciones',time:'10:45–12:15',title:'Contradicciones y límites',
h1:'Una organización distribuida también concentra',
lead:'Las tensiones no se resuelven con un nombre atractivo: se traducen en reglas, recursos, responsabilidades y revisión.',
src:'Preguntas de control: ¿quién facilita, retrasa o detiene un flujo? ¿quién recibe beneficios y quién asume costos?',
say:[
'Una organización distribuida puede concentrar influencia de manera informal. Un actor quizá no tenga autoridad formal y, aun así, controle información, dinero, equipos o una conexión indispensable. Por eso preguntamos quién puede facilitar, retrasar o detener un flujo.',
'También existe dependencia material. Una organización puede acordar una solución, pero necesitar financiación, infraestructura o servicios de otra entidad. Si esos recursos no están garantizados, la decisión puede quedarse en el papel.',
'Una tercera tensión es la distribución desigual del trabajo. Una estructura puede parecer horizontal y, sin embargo, concentrar tareas de cuidado, coordinación y mantenimiento en pocas personas. Si esos esfuerzos no se reconocen ni se distribuyen, la organización pierde continuidad.',
'Por último, debemos preguntar quién recibe los beneficios y quién asume los costos, y qué mecanismos existen para expresar desacuerdos, revisar mandatos y corregir decisiones. Estas tensiones no se resuelven poniendo un nombre atractivo al modelo: hay que traducirlas en reglas, recursos, responsabilidades y mecanismos de revisión. Una propuesta puede transformar una contradicción, pero también puede desplazar el costo a otro grupo. Por eso debemos observar los efectos más allá del resultado inmediato.'],
stage:()=>{const K=[['Influencia informal','Sin autoridad formal, controla información, dinero, equipos o una conexión.','¿Quién facilita, retrasa o detiene?',C.a],['Dependencia material','Se acuerda una solución, pero falta financiación, infraestructura o servicios.','Sin recursos, la decisión queda en el papel.',C.c],['Trabajo desigual','Parece horizontal, pero cuidado, coordinación y mantenimiento recaen en pocas personas.','Si no se reconoce ni distribuye, se pierde continuidad.',C.b],['Beneficios y costos','Una propuesta puede desplazar el costo a otro grupo.','¿Quién gana, quién asume, quién puede corregir?',C.h]];
 let o='';K.forEach((k,n)=>{const x=20+(n%2)*385,y=20+Math.floor(n/2)*230;o+=`<rect x="${x}" y="${y}" width="365" height="210" rx="12" fill="${C.p}" stroke="${k[3]}" stroke-width="1.5"/>`+
  `<text class="mono" x="${x+18}" y="${y+30}" font-size="11" fill="${k[3]}" font-weight="700">0${n+1}</text>`+txt(x+18,y+58,k[0],{s:18,w:700,anchor:'start',n:30})+txt(x+18,y+112,k[1],{s:13,anchor:'start',n:44,f:'#c6c1b6',w:400,lh:1.4})+txt(x+18,y+175,k[2],{s:12.5,anchor:'start',n:46,f:k[3],w:600,lh:1.35})});
 return svg(o)}});

SL.push({part:'Transición',time:'12:15–13:45',title:'Cómo iniciar una transición',
h1:'Empezar pequeño: una dinámica delimitada',
lead:'Primero reconstruir cómo funciona hoy la recuperación de residuos; luego ensayar coordinación y aprender con datos.',
src:'Indicadores iniciales: acuerdos cumplidos · tiempo de resolución · distribución de tareas · participación efectiva.',
say:[
'La transición no empezaría creando de inmediato una estructura para todo el territorio. Proponemos comenzar con una dinámica delimitada, como la coordinación entre actores involucrados en la recuperación de residuos aprovechables, reconstruyendo primero cómo funciona actualmente.',
'Con ese diagnóstico identificamos conexiones, dependencias, recursos, actores afectados y vacíos de participación. Después se puede ensayar una coordinación entre organizaciones interesadas, cuidando que sus funciones se ajusten a las competencias legales de las instituciones.',
'El mecanismo tendría que explicar cómo se incorporan asuntos a la agenda, cómo se comparan alternativas, quién ejecuta tareas y cómo se revisan los resultados. También habría que diferenciar qué decisiones son propias de cada organización y cuáles requieren acuerdos entre varias partes.',
'Como primera prueba, podríamos registrar acuerdos cumplidos, tiempo para resolver dificultades, distribución de tareas y participación efectiva de los distintos actores. Los resultados no demostrarían automáticamente que una estructura es mejor, pero ayudarían a identificar responsabilidades desiguales o exclusiones y a ajustar las reglas. Así, la organización se desarrolla mediante aprendizaje y revisión, no solo porque se declare deseable.'],
stage:()=>{const F=[['Diagnóstico','Reconstruir cómo funciona hoy: conexiones, dependencias, recursos, afectados, vacíos de participación.',C.a],['Ensayo','Coordinación entre organizaciones interesadas, ajustada a las competencias legales.',C.b],['Revisión','Medir, comparar y ajustar las reglas con lo aprendido.',C.h]];
 let o='';F.forEach((f,n)=>{const x=20+n*258;o+=`<rect x="${x}" y="40" width="240" height="210" rx="12" fill="${C.p}" stroke="${f[2]}" stroke-width="1.5"/>`+`<text class="mono" x="${x+18}" y="72" font-size="11" fill="${f[2]}" font-weight="700">FASE ${n+1}</text>`+txt(x+18,102,f[0],{s:20,w:700,anchor:'start'})+txt(x+18,170,f[1],{s:12.5,anchor:'start',n:32,f:'#c6c1b6',w:400,lh:1.4});if(n)o+=arr(x-16,145,x-2,145,f[2])});
 o+=`<path d="M660 262 Q660 300 400 300 Q140 300 140 262" fill="none" stroke="#8d887d" stroke-dasharray="5 5" marker-end="url(#ar)"/>`+txt(400,322,'aprendizaje y ajuste de reglas',{s:12,f:'#8d887d',n:50});
 o+=cap(20,368,'Primera prueba · qué registrar',C.h);
 ['Acuerdos cumplidos','Tiempo para resolver dificultades','Distribución de tareas','Participación efectiva'].forEach((k,n)=>o+=box(20+n*193,386,180,60,k,C.h,{s:12.5}));
 o+=txt(400,478,'Los resultados no prueban por sí solos que una estructura sea mejor: ayudan a detectar exclusiones.',{s:12,f:'#8d887d',n:100});
 return svg(o)}});

SL.push({part:'Síntesis',time:'13:45–15:00',title:'Síntesis: seis piezas coherentes',
h1:'De las relaciones actuales a una organización que aprende',
lead:'La pregunta final: quién interactúa con quién, qué recursos circulan, quién decide y quién puede corregir.',
src:'Piezas: ficha del macromodelo · red · decisiones · dinámico-causal · efectos territoriales · fuentes y supuestos.',
say:[
'En síntesis, nuestra propuesta reúne seis piezas: una ficha del macromodelo con principios y objetivos; una red de actores e influencias; el trayecto de las decisiones; un modelo dinámico-causal; una síntesis de los efectos territoriales; y las fuentes junto con los supuestos.',
'Las seis deben ser coherentes. Si proponemos distribuir la influencia, la red debe mostrar quién participa y quién queda afectado sin voz. Si hablamos de autonomía, tenemos que revisar quién controla los recursos para ejecutar. Si buscamos continuidad, debemos saber quién sostiene el trabajo. Y si una regla no funciona, debe existir una manera de corregirla.',
'La heterarquía propone que la influencia no se concentre automáticamente en una sola estructura; la gobernanza policéntrica permite coordinar varios centros de decisión; y las reglas de mandato, seguimiento y rectificación buscan que las responsabilidades sean claras y revisables.',
'El proyecto propone pasar del diagnóstico de las relaciones actuales a una organización que pueda coordinarse, aprender y transformarse, manteniendo visibles las dependencias, los conflictos y las condiciones materiales que la hacen posible. La pregunta final no es solo quién aparece en el diagrama, sino quién interactúa con quién, qué recursos circulan, quién decide y quién puede corregir lo que no funciona. Muchas gracias.'],
stage:()=>{const P=[['Ficha del macromodelo','Principios y objetivos',C.h],['Red de actores','Influencias y relaciones',C.c],['Trayecto de decisiones','Agenda → rectificación',C.b],['Modelo dinámico-causal','Bucles y dependencias',C.a],['Efectos territoriales','Síntesis',C.v],['Fuentes y supuestos','Qué sabemos y qué falta','#8d887d']];
 const pos=n=>{const a=-Math.PI/2+n*Math.PI/3;return[400+175*Math.cos(a)*1.6,250+175*Math.sin(a)*1.05]};
 let o='';P.forEach((p,n)=>{const q=pos(n);o+=`<line x1="400" y1="250" x2="${q[0]}" y2="${q[1]}" stroke="#3a3830"/>`});
 P.forEach((p,n)=>{const [x,y]=pos(n);o+=`<rect x="${x-90}" y="${y-34}" width="180" height="68" rx="10" fill="${C.p}" stroke="${p[2]}" stroke-width="1.5"/>`+txt(x,y-8,p[0],{s:13,w:700,n:22})+txt(x,y+18,p[1],{s:11,f:'#8d887d',w:400,n:26})});
 o+=dot(400,250,56,'Coherencia',C.h,{s:13});
 return svg(o)}});

window.SLIDES=SL;
})();
