/**
 * 🎮 COMPANION SYSTEM v2.0
 * Con ASCII Art uniche per tutti i 18 companion
 */

const fs = require('fs');
const path = require('path');

// ==========================================
// ASCII ART PER TUTTI I 18 COMPANION
// ==========================================
const ASCII_ART = {
  // BABY FORMS
  mochi: {
    idle: ["    ♡  ♡  ♡", "   (@·‿·@)", "    ~~~ ~~"],
    happy: ["   ♡  ♡  ♡", "  (^·‿·^)", "   ~跳跃~"],
    sad: ["    ♡  ♡", "   (@·︿·@)", "    ~~~"],
    special: ["   ♡  ♡  ♡", "  (@·‿·@) ✨", "   ~~~ ~~"]
  },
  zippo: {
    idle: ["   /\\ /\\", "  (='·'=')", "  (,,)>(,,)", "   ‾‾‾‾"],
    happy: ["  /\\ /\\", " (^·‿·^)", " ,,>>·<<,, ⚡", "  ‾‾‾‾"],
    sad: ["  /\\ /\\", " (='︿'=", " (,,)>(,,)", "  ‾‾‾‾"],
    special: ["  /\\ /\\", " (='·'=') 💨", " ,,>>·<<,,", "  ‾‾‾‾"]
  },
  noxi: {
    idle: ["    ·  ✦", "   (·  ·)", "    ·  ·", "   ~~~~"],
    happy: ["  ✦ · ✦", " (· ‿ ·)", "  ✦ · ✦", " ~~~~~~"],
    sad: ["    ·", "   (· ·)", "    ·", "   ~~~"],
    special: [" ✦ · ✦ · ✦", "(·  ·‿·  ·)", " ✦ · ✦ · ✦", "~~~~~~~~~~~"]
  },
  
  // TENERA FINAL FORMS
  mieli: {
    idle: ["  ╭━━━━━━━━╮", " ♡│ ♡‿‿♡ ♡│", "  ╰━━━━━━━╯", " (((o‿o)))"],
    happy: ["  ╭━━━━━━━━╮", " ♡│ ♡‿‿♡ ♡│ ✨", "  ╰━━━━━━━╯", "(((^‿^))) 🤗"],
    sad: ["  ╭━━━━━━━━╮", "  │ ·︿· │", "  ╰━━━━━━━╯", " (((o‿o)))"],
    special: ["  ╭━━━━━━━━╮", " ♡│ ♡‿‿♡ ♡│", "  ╰━━━━━━━╯ 🤗", " (((o‿o))) ✨"]
  },
  ninnolo: {
    idle: ["   zZzZzZ", "  ╭──────╮", " ╱ ◕ ‿ ◕ ╲", " ╰──────╯"],
    happy: ["   ZzZz", "  ╭──────╮", " ╱ ◕ ‿ ◕ ╲", " ╰───zz──╯"],
    sad: ["   zZz", "  ╭──────╮", " ╱ ◕  ·  ◕ ╲", " ╰──────╯"],
    special: ["   ✨zzZ", "  ╭──────╮", "╱ ◠‿‿◠ ╲ 💤", " ╰──────╯"]
  },
  veluna: {
    idle: ["   ✦·✦", "  ╭──────╮", "╱ ✦‿‿‿✦ ╲", "╲______╱", "   ▽"],
    happy: [" ✦·✨·✦", "╭────────╮", "╱ ✦‿‿‿‿✦ ╲ 🌟", "╲________╱", "   ▽"],
    sad: ["   ··", "  ╭──────╮", "╱ ✦··‿··✦ ╲", "╲______╱", "   ▽"],
    special: ["✦·✨·✨·✦", "╭──────────╮", "╱ ✦‿‿‿‿‿‿✦ ╲ ✨", "╲__________╱", "   ▽"]
  },
  trilly: {
    idle: ["  ⭐·⭐", "  ╭─────╮", "╱ ◠‿‿◠ ╲", "╲______╱ ⭐"],
    happy: ["⭐ · ⭐ · ⭐", "╭───────╮", "╱ ◠‿‿‿‿◠ ╲ 🎉", "╲_______╱", "  ⭐  ⭐"],
    sad: ["  ⭐", "  ╭─────╮", "╱ ◕ ‿ ◕ ╲", "╲______╱"],
    special: ["⭐·⭐·⭐·⭐", "╭─────────╮", "╱ ◠‿‿‿‿‿‿◠ ╲ 🎊", "╲_________╱", " ⭐  ⭐  ⭐"]
  },
  briciola: {
    idle: ["   ·  ·", "  (·  ·)", "   ~~~~"],
    happy: ["  ✨·✨", " (@·‿·@)", " ~~~~~ ✨"],
    sad: ["   ·", "  (· ·)", "   ~"],
    special: ["  · ✨ ·", " (@·‿·@) 💫", " ~~~~~~"]
  },

  // VIVACE FINAL FORMS
  sprinto: {
    idle: ["   ⚡", "  ╱╲", " ╱⚡╲", " ╱  ╲"],
    happy: [" ⚡⚡⚡", "⚡╱⚡╲⚡", " ╱  ╲ 💨", ">>>>"],
    sad: ["   ⚡", "  ╱╲", " ╱ · ╲", " ╱  ╲"],
    special: ["⚡⚡⚡⚡⚡", "⚡╱⚡⚡⚡╲⚡", " ╱  💨  ╲", ">>>>⚡>>>>"]
  },
  turbolo: {
    idle: ["  @*@", " @*@*@", "@*@*@*@", "  @*@"],
    happy: ["@*@ @*@", "@*@*@*@*@ 💫", " @*@ @*@", "  @*@"],
    sad: ["  @·@", " @·@·@", "@·@·@·@", "  @·@"],
    special: ["@*@*@*@*@", "@*@*@💥@*@*@", "@*@*@*@*@", " 💥@*@💥"]
  },
  voltix: {
    idle: ["  ╔═══╗", " ║⚡⚡⚡║", " ║ ⚡⚡ ║", "  ╚═══╝", "   ╱╲"],
    happy: ["╔═══════╗", "║⚡⚡⚡⚡⚡⚡║ ⚡", "║ ⚡⚡⚡⚡⚡⚡ ║", "╚═══════╝", " ╱╲ ╱╲"],
    sad: ["  ╔═══╗", " ║ · · ║", " ║  ·  ║", "  ╚═══╝", "   ╱╲"],
    special: ["╔═══════════╗", "║⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡║ ⚡", "║ ⚡⚡⚡⚡⚡⚡⚡⚡⚡ ║", "╚═══════════╝", "╱╲   💥  ╱╲"]
  },
  bombo: {
    idle: ["  (●)", " (● ●)", "(●  ●)", "  (●)"],
    happy: ["🎉 (●) 🎉", "(●  ●) 😂", " (● ●)", "  (●)"],
    sad: ["  (●)", " (· ·)", "(●  ●)", "  (●)"],
    special: ["🎊 (●) 🎊", "(●  ●) 🎭 (●)", " (● ●)", "  (●) 🎉"]
  },
  ribik: {
    idle: [" ╭───╮", "╱ ·‿· ╲", "│╲  ╱│", "╰━▼━╯"],
    happy: ["╭─────╮", "╱ ✨‿‿✨ ╲ 😎", "│╲  ╱│", "╰━▼━╯"],
    sad: [" ╭───╮", "╱ ·‿· ╲", "│  ▼  │", "╰━·━╯"],
    special: ["╭───────╮", "╱ 🔥‿‿🔥 ╲ 😤", "│╲  ╱│", "╰━▼━╯"]
  },

  // MISTERIOSA FINAL FORMS
  lunor: {
    idle: ["  ☾", " ╱  ╲", "( · · )", " ╲  ╱", "  ☽"],
    happy: ["✦ ☾ ✦", "╱      ╲", "( ·‿‿‿· ) ✨", "╲      ╱", " ☽"],
    sad: ["  ☾", " ╱  ╲", "(  ·  )", " ╲  ╱", "  ☽"],
    special: ["✦  ☾  ✦  ✦", "╱           ╲", "( ·‿‿‿‿‿‿· ) 🌙", "╲___________╱", "  ☽  ✦"]
  },
  nebryl: {
    idle: ["~~~~~~~~", "(·  ·‿‿·  ·)", "~~~~~~~~", " ·  ·"],
    happy: ["~~~~~~~~~~~", "(·  ·‿‿‿‿·  ·) 💫", "~~~~~~~~~~~", " · ✨ ·"],
    sad: ["~~~~~~~", "(· ·‿‿· ·)", "~~~~~~~", " · ·"],
    special: ["~~~~~~~~~~~~~~~", "(·  ·‿‿‿‿‿‿·  ·) 🌫️", "~~~~~~~~~~~~~~~", " · ✨ · ✨ ·"]
  },
  astryn: {
    idle: ["  ✦·✦", " ✦  ✦", "  ★", " ✦  ✦", "  ✦·✦"],
    happy: ["✦·✨·✦·✨·✦", "✦  ✨ ★ ★ ✨  ✦ 🌟", "✦·✨·✦·✨·✦", "   ★"],
    sad: ["  ··", " ·  ·", "  ★", " ·  ·", "  ··"],
    special: ["✦·✨·★·✨·✦", "✦  ✨ ★ ★ ✨  ✦ ✨", "✦·✨·★·✨·✦", "   ★"]
  },
  velmoru: {
    idle: ["╭━━━━━╮", "╱ ◉ ‿ ◉ ╲", "╰━━━━━╯", " /   \\", "👤   👤"],
    happy: ["╭━━━━━━━╮", "╱ ◉ ‿‿‿‿ ◉ ╲ 🛡️", "╰━━━━━━━╯", " /     \\", "👤     👤"],
    sad: ["╭━━━━━╮", "╱ ◉  ·  ◉ ╲", "╰━━━━━╯", " /   \\", "👤   👤"],
    special: ["╭━━━━━━━━━━━╮", "╱ ◉ ‿‿‿‿‿‿‿‿ ◉ ╲ 🛡️", "╰━━━━━━━━━━━╯", "  /       \\", " 👤       👤"]
  },
  noctara: {
    idle: ["  ★", " ╱‾‾╲", "│ ◉◉ │", " ╲‾‾╱", "  ▼"],
    happy: ["✦  ★  ✦", "╱‾‾‾‾‾╲ 💜", "│ ◉◉◉◉ │ ✨", "╲‾‾‾‾‾╱", "  ▼"],
    sad: ["  ★", " ╱‾‾╲", "│ ·· │", " ╲‾‾╱", "  ▼"],
    special: ["✦  ★  ✦  ★  ✦", "╱‾‾‾‾‾‾‾‾‾‾‾╲ 💜", "│ ◉◉◉◉◉◉◉◉◉◉ │ 🎭", "╲‾‾‾‾‾‾‾‾‾‾‾╱", "  ▼"]
  }
};

// ==========================================
// 18 COMPANION DATA
// ==========================================
const COMPANIONS = {
  // BABY
  mochi: {
    id: 'mochi', name: 'TOMODACHI', line: 'tender', stadio: 'baby',
    personalita: 'tender, insecure', rarita: 1,
    bisogno: 'frequent reassurance',
    decorazioni: ['♡', '♡', '♡'],
    animazione: 'ondeggia piano', tono: 'tenaro, tenero, insicuro'
  },
  zippo: {
    id: 'zippo', name: 'Zippo', line: 'lively', stadio: 'baby',
    personalita: 'energetic, playful', rarita: 1,
    bisogno: 'play more often',
    decorazioni: ['/', '\\', '/', '\\'],
    animazione: 'corre avanti e indietro', tono: 'rapido, entusiasta'
  },
  noxi: {
    id: 'noxi', name: 'Noxi', line: 'mysterious', stadio: 'baby',
    personalita: 'quiet, observant', rarita: 1,
    bisogno: 'periods of quiet',
    decorazioni: ['·', '✦', '·'],
    animazione: 'guarda in alto', tono: 'calmo, poetico'
  },
  
  // TENERA FINAL
  mieli: {
    id: 'mieli', name: 'Mieli', line: 'tender', stadio: 'final',
    personalita: 'cuddly, loyal', rarita: 1,
    bisogno: 'ritorno dell\'utente dopo assenza',
    decorazioni: ['♡', '♡', '♡'],
    animazione: 'si accoccola', tono: 'affettuoso diretto'
  },
  ninnolo: {
    id: 'ninnolo', name: 'Ninnolo', line: 'tender', stadio: 'final',
    personalita: 'lazy, calm', rarita: 1,
    bisogno: 'regular sleep',
    decorazioni: ['z', 'Z', 'z'],
    animazione: 'sonnecchia', tono: 'tranquillo'
  },
  veluna: {
    id: 'veluna', name: 'Veluna', line: 'tender', stadio: 'final',
    personalita: 'elegant, protective', rarita: 3,
    bisogno: 'stable routine',
    decorazioni: ['✦', '·', '✦'],
    animazione: 'posa elegante', tono: 'elegante'
  },
  trilly: {
    id: 'trilly', name: 'Trilly', line: 'tender', stadio: 'final',
    personalita: 'joyful, clingy', rarita: 1,
    bisogno: 'immediate attention',
    decorazioni: ['⭐', '·', '⭐'],
    animazione: 'festoso', tono: 'festoso'
  },
  briciola: {
    id: 'briciola', name: 'Briciola', line: 'tender', stadio: 'final',
    personalita: 'sensitive, delicate', rarita: 2,
    bisogno: 'not being ignored too long',
    decorazioni: ['·', '·', '·'],
    animazione: 'si stringe', tono: 'delicato'
  },

  // VIVACE FINAL
  sprinto: {
    id: 'sprinto', name: 'Sprinto', line: 'lively', stadio: 'final',
    personalita: 'enthusiastic, active', rarita: 1,
    bisogno: 'frequent mini-activities',
    decorazioni: ['⚡', '⚡', '⚡'],
    animazione: 'saltella', tono: 'entusiasta'
  },
  turbolo: {
    id: 'turbolo', name: 'Turbolo', line: 'lively', stadio: 'final',
    personalita: 'chaotic, funny', rarita: 2,
    bisogno: 'tolerates mess but wants fun',
    decorazioni: ['@', '*', '@'],
    animazione: 'gira su sé stesso', tono: 'confuso-comico'
  },
  voltix: {
    id: 'voltix', name: 'Voltix', line: 'lively', stadio: 'final',
    personalita: 'brilliant, fast', rarita: 3,
    bisogno: 'intense active sessions',
    decorazioni: ['⚡', '⚡', '⚡'],
    animazione: 'posa eroe', tono: 'deciso'
  },
  bombo: {
    id: 'bombo', name: 'Bombo', line: 'lively', stadio: 'final',
    personalita: 'clownish, goofy', rarita: 1,
    bisogno: 'funny interactions',
    decorazioni: ['(', '●', ')'],
    animazione: 'ondeggia', tono: 'buffo'
  },
  ribik: {
    id: 'ribik', name: 'Ribik', line: 'lively', stadio: 'final',
    personalita: 'rebellious but attached', rarita: 2,
    bisogno: 'less authoritarian replies',
    decorazioni: ['╱', '▼', '╲'],
    animazione: 'posa ribelle', tono: 'ribelle'
  },

  // MISTERIOSA FINAL
  lunor: {
    id: 'lunor', name: 'Lunor', line: 'mysterious', stadio: 'final',
    personalita: 'steady, loyal', rarita: 1,
    bisogno: 'evening presence',
    decorazioni: ['☾', '·', '☽'],
    animazione: 'illumina', tono: 'quieto'
  },
  nebryl: {
    id: 'nebryl', name: 'Nebril', line: 'mysterious', stadio: 'final',
    personalita: 'sensitive, deep', rarita: 2,
    bisogno: 'steady but gentle affection',
    decorazioni: ['~', '·', '~'],
    animazione: 'sospira', tono: 'malinconico'
  },
  astryn: {
    id: 'astryn', name: 'Astryn', line: 'mysterious', stadio: 'final',
    personalita: 'astral, enigmatic', rarita: 3,
    bisogno: 'calm and precision',
    decorazioni: ['✦', '★', '✦'],
    animazione: 'vola leggero', tono: 'enigmatico'
  },
  velmoru: {
    id: 'velmoru', name: 'Velmoru', line: 'mysterious', stadio: 'final',
    personalita: 'protective, reserved', rarita: 1,
    bisogno: 'few stimuli, stable environment',
    decorazioni: ['◉', '‿', '◉'],
    animazione: 'osserva', tono: 'protettivo'
  },
  noctara: {
    id: 'noctara', name: 'Noctara', line: 'mysterious', stadio: 'final',
    personalita: 'intense, deeply attached', rarita: 3,
    bisogno: 'high relational consistency',
    decorazioni: ['★', '◉', '★'],
    animazione: 'occhi luminosi', tono: 'intenso'
  }
};

// ==========================================
// STATS & DECAY
// ==========================================
const STATS = ['fame', 'felicita', 'pulizia', 'energia', 'affetto', 'disciplina', 'attivita', 'calma', 'routine', 'serale'];
const STAT_LABELS = {fame:'🍖 Hunger',felicita:'😊 Happiness',pulizia:'🧼 Cleanliness',energia:'⚡ Energy',affetto:'💕 Affection',disciplina:'📏 Discipline',attivita:'🎮 Activity',calma:'🧘 Calm',routine:'⏰ Routine',serale:'🌙 Evening'};

const DECADIMENTO = {
  tender: {affetto:-3, pulizia:-2, routine:-2},
  lively: {felicita:-4, attivita:-4, energia:-2},
  mysterious: {calma:-3, serale:-2, routine:-2}
};

const BISOGNI_MOLTIPLICATORI = {
  mochi:{affetto:2}, zippo:{attivita:2}, noxi:{calma:2},
  briciola:{affetto:2}, trilly:{felicita:1.5}
};

// ==========================================
// DIALOGHI
// ==========================================
const DIALOGHI = {
  tenero: {
    alto: ["Ti voglio bene! ♥", "Sei la mia persona preferita!", "Mi fai sentire al sicuro ♡"],
    medio: ["Mi piace stare con te~", "Posso avere più coccole? ^^"],
    basso: ["Ho bisogno di attenzioni...", "Ti vuoi giocare un po' con me?"]
  },
  lively: {
    alto: ["YAAAY! Giochiamo! ⚡", "Sono pieno di energia!", "Che figata! Andiamo!"],
    medio: ["Gioco? Gioco? Dì di sì!", "Andiamo a esplorare!"],
    basso: ["Mi annoiooo...", "Qualcosa di divertente?"]
  },
  misterioso: {
    alto: ["La notte è bella con te ✦", "Il silenzio è confortante...", "Starò con te..."],
    medio: ["Mi piace guardare le stelle...", "C'è calma qui..."],
    basso: ["Il silenzio pesa... °_°", "Resta con me?"]
  }
};

const DIALOGHI_COMPAGNO = {
  mochi:{
    idle: ["...?", "C'è qualcuno?", "... ♥", "Mi manchi~"],
    happy: ["Mi ami? ♥", "Yay! Sono felice!", "Possiamo stare insieme?", "COCCOLE! ♡♡♡"],
    sad: ["... :'(", "Mi ignori?", "Ho paura...", "Resta con me..."]
  },
  zippo:{
    idle: ["GIOCHIAMO!", "Corriamo!", "YAAAY!", "Let's gooo!"],
    happy: ["WOOO! CHE FIGATA!", "Ancora! Ancora! ⚡", "Sei il migliore!"],
    sad: ["...why", "Sbuff...", "Mi ignori? :("]
  },
  noxi:{
    idle: ["*guarda le stelle*", "...", "Silenzio...", "✦"],
    happy: ["*sorride piano*", "Mi piace questo momento...", "☆"],
    sad: ["...°_°", "*si nasconde*", "..."]
  }
};

// ==========================================
// EVOLUZIONE
// ==========================================
const EVO_conditions = {
  mieli:   {fame:60,felicita:75,pulizia:75,affetto:80,disciplina:50,attivita:40,calma:40,routine:60},
  ninnolo: {fame:60,felicita:55,pulizia:60,affetto:65,disciplina:50,attivita:'<40',calma:70,routine:60},
  veluna:  {fame:80,felicita:85,pulizia:85,affetto:90,disciplina:70,attivita:50,calma:60,routine:85},
  trilly:  {fame:55,felicita:85,pulizia:55,affetto:75,disciplina:40,attivita:80,calma:'<50',routine:50},
  briciola:{fame:45,felicita:45,pulizia:50,affetto:65,disciplina:45,attivita:35,calma:60,routine:35},
  sprinto: {fame:60,felicita:80,pulizia:55,affetto:60,disciplina:55,attivita:85,calma:'<40',routine:50},
  turbolo: {fame:45,felicita:75,pulizia:'<50',affetto:55,disciplina:'<40',attivita:85,calma:'<35',routine:'<45'},
  voltix:  {fame:75,felicita:85,pulizia:75,affetto:70,disciplina:60,attivita:90,calma:40,routine:75},
  bombo:   {fame:50,felicita:80,pulizia:'<45',affetto:60,disciplina:35,attivita:70,calma:'<45',routine:45},
  ribik:   {fame:55,felicita:65,pulizia:55,affetto:70,disciplina:'<45',attivita:65,calma:35,routine:50},
  lunor:   {fame:60,felicita:60,pulizia:60,affetto:70,disciplina:55,attivita:'<45',calma:80,routine:60,serale:75},
  nebryl:  {fame:50,felicita:['40-65'],pulizia:55,affetto:80,disciplina:50,attivita:'<40',calma:85,routine:50,serale:70},
  astryn:  {fame:75,felicita:80,pulizia:80,affetto:85,disciplina:65,attivita:40,calma:90,routine:85,serale:85},
  velmoru: {fame:60,felicita:55,pulizia:65,affetto:70,disciplina:55,attivita:'<35',calma:85,routine:65,serale:70},
  noctara: {fame:70,felicita:70,pulizia:75,affetto:95,disciplina:60,attivita:35,calma:90,routine:90,serale:90}
};

// ==========================================
// UTILITY
// ==========================================
function rand(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function randItem(a){return a[Math.floor(Math.random()*a.length)];}
function clamp(v,min,max){return Math.max(min,Math.min(max,v));}

function getMoodLine(stats){
  const avg=STATS.reduce((s,k)=>s+stats[k],0)/STATS.length;
  if(avg>=75) return 'happy';
  if(avg<=30) return 'sad';
  return 'idle';
}

function getStarRating(r){
  const stars={1:'★☆☆',2:'★★☆',3:'★★★'};
  return stars[r]||'★☆☆';
}

function getMoodDialogue(comp, stats){
  const line=comp.line;
  const avg=STATS.reduce((s,k)=>s+stats[k],0)/STATS.length;
  const level=avg>=75?'alto':avg>=45?'medio':'basso';
  const lines=DIALOGHI[line]?.[level]||["..."];
  return randItem(lines);
}

function applyDecay(stats,compId,lastDecay){
  const comp=COMPANIONS[compId]||COMPANIONS.mochi;
  const line=comp.line;
  const base=DECADIMENTO[line]||{};
  const mult=BISOGNI_MOLTIPLICATORI[compId]||{};
  const hours=lastDecay?((Date.now()-lastDecay)/(1000*60*60)):0;
  const decayRate=hours/6;
  STATS.forEach(k=>{
    let d=base[k]||0;
    if(mult[k]) d*=mult[k];
    stats[k]=clamp(stats[k]+Math.round(d*decayRate),0,100);
  });
  return stats;
}

function checkEvolution(stats,compId){
  if(stats.interazioni<10) return null;
  const line=COMPANIONS[compId]?.line;
  if(!line) return null;
  const candidates=Object.entries(EVO_conditions).filter(([id,_])=>COMPANIONS[id]?.line===line);
  let best=null,bestMatches=-1;
  for(const[id,req]of candidates){
    let matches=0;
    for(const[k]of Object.entries(req)){
      const v=stats[k];
      if(typeof req[k]==='number'){
        if(v>=req[k]) matches++;
      } else if(typeof req[k]==='string'&&req[k].startsWith('<')){
        if(v<parseInt(req[k].slice(1))) matches++;
      }
    }
    if(matches>bestMatches){
      bestMatches=matches;
      best=id;
    }
  }
  return best;
}

// ==========================================
// COMMANDS
// ==========================================
const DATA_DIR=path.join(__dirname,'data');
const DATA_FILE=id=>path.join(DATA_DIR,`${id}.json`);

function loadUser(userId){
  const f=DATA_FILE(userId);
  if(fs.existsSync(f)){
    const d=JSON.parse(fs.readFileSync(f,'utf8'));
    if(d.lastDecay) d.stats=applyDecay(d.stats,d.companionId,d.lastDecay);
    return d;
  }
  return null;
}

function saveUser(userId,data){
  if(!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR,{recursive:true});
  fs.writeFileSync(DATA_FILE(userId),JSON.stringify(data,null,2));
}

function hatch(userId){
  const babyMap={tender:'mochi',lively:'zippo',mysterious:'noxi'};
  const linee=['tender','lively','mysterious'];
  const line=linee[Math.floor(Math.random()*linee.length)];
  const compId=babyMap[line];
  const comp=COMPANIONS[compId];
  const stats={fame:70,felicita:70,pulizia:70,energia:70,affetto:70,disciplina:50,attivita:50,calma:50,routine:50,serale:50,interazioni:0};
  const data={companionId:compId,stats,line,lineKind:line,lastDecay:Date.now(),bornAt:Date.now()};
  saveUser(userId,data);
  return {comp,stats,evolved:false};
}

function action(userId,key,delta){
  const u=loadUser(userId);
  if(!u) return null;
  const comp=COMPANIONS[u.companionId];
  const stats=u.stats;
  const azioni={
    feed:{fame:25,felicita:5},
    play:{felicita:15,attivita:10,energia:-10},
    sleep:{energia:25,felicita:5},
    groom:{pulizia:30,felicita:5},
    cuddle:{affetto:25,felicita:10,calma:5},
    train:{disciplina:20,felicita:-5},
    evening:{serale:20,felicita:10,calma:10},
    evoke:{affetto:15,felicita:10}
  };
  const a=azioni[key]||{};
  Object.entries(a).forEach(([k,v])=>stats[k]=clamp(stats[k]+v,0,100));
  if(delta) stats.interazioni+=delta;
  const evolvedId=checkEvolution(stats,u.companionId);
  if(evolvedId){
    u.companionId=evolvedId;
    u.evolvedAt=Date.now();
  }
  u.stats=stats;
  u.lastDecay=Date.now();
  saveUser(userId,u);
  return {comp:COMPANIONS[u.companionId],stats,evolvedId};
}

function status(userId){
  const u=loadUser(userId);
  if(!u) return null;
  const comp=COMPANIONS[u.companionId];
  const mood=getMoodLine(u.stats);
  const art=ASCII_ART[u.companionId]?.[mood]||ASCII_ART.mochi?.[mood]||ASCII_ART.mochi.idle;
  return {comp,stats:u.stats,mood,art,evolvedAt:u.evolvedAt};
}

function talk(userId){
  const u=loadUser(userId);
  if(!u) return null;
  const comp=COMPANIONS[u.companionId];
  const mood=getMoodLine(u.stats);
  const lines=DIALOGHI_COMPAGNO[u.companionId]?.[mood]||getMoodDialogue(comp,u.stats);
  return {comp,text:randItem(lines)};
}

function evolve(userId){
  const u=loadUser(userId);
  if(!u) return null;
  u.stats.interazioni=10;
  const evolvedId=checkEvolution(u.stats,u.companionId);
  if(evolvedId){
    u.companionId=evolvedId;
    u.evolvedAt=Date.now();
    saveUser(userId,u);
    return {comp:COMPANIONS[evolvedId],evolved:true};
  }
  return {comp:COMPANIONS[u.companionId],evolved:false};
}

function decayAll(){
  if(!fs.existsSync(DATA_DIR)) return;
  fs.readdirSync(DATA_DIR).filter(f=>f.endsWith('.json')).forEach(f=>{
    const id=f.replace('.json','');
    const u=loadUser(id);
    if(!u||!u.lastDecay) return;
    u.stats=applyDecay(u.stats,u.companionId,u.lastDecay);
    u.lastDecay=Date.now();
    saveUser(id,u);
  });
}

// ==========================================
// RENDER
// ==========================================
function render(s){
  const {comp,stats,mood,art,evolvedAt}=s;
  const stars=getStarRating(comp.rarita);
  const interazioni=stats.interazioni||0;
  const nextEvo=comp.stadio==='baby'?(10-interazioni):'MAX';
  const lineIcon={tender:'☀️',lively:'🌙',mysterious:'🌫️'}[comp.line];
  const lineName={tender:'TENDER',lively:'LIVELY',mysterious:'MYSTERIOUS'}[comp.line];
  
  console.log('');
  console.log(`╭${'─'.repeat(41)}╮`);
  console.log(`│  ${lineIcon} LINE ${lineName} — ${comp.stadio.toUpperCase()} ${lineIcon}  │`.padEnd(43)+'│');
  console.log(`├${'═'.repeat(41)}┤`);
  console.log(`│`);
  console.log(`│   ${comp.name} ${stars}`);
  console.log(`│   ${comp.personalita}`);
  console.log(`│`);
  art.forEach(line=>console.log(`│  ${line}`.padEnd(43)+'│'));
  console.log(`│`);
  if(comp.stadio==='baby'){
    console.log(`│  Interactions: ${interazioni}/10 → EVO`.padEnd(43)+'│');
  } else if(evolvedAt){
    console.log(`│  ✨ EVOLVED! ✨`.padEnd(43)+'│');
  }
  console.log(`╰${'─'.repeat(41)}╯`);
  console.log('');
  console.log(`💫 NEED: ${comp.bisogno}`);
  console.log('');
  STATS.forEach(k=>{
    const v=stats[k];
    const bar=Math.round(v/10);
    const fill='█'.repeat(bar);
    const empty='░'.repeat(10-bar);
    console.log(`${STAT_LABELS[k].padEnd(14)} [${fill}${empty}] ${v}%`);
  });
}

// ==========================================
// CLI
// ==========================================
const cmd=process.argv[2];
const userId=process.argv[3];

if(cmd==='decay'){
  decayAll();
  console.log('✅ Decadimento applicato a tutti i companion');
} else if(cmd==='status'&&userId){
  const s=status(userId);
  if(!s){console.log('No companion found. Use: hatch <user>');process.exit(1);}
  render(s);
} else if(cmd==='hatch'&&userId){
  const r=hatch(userId);
  console.log(`🎉 ${r.comp.name} was born! (line ${r.comp.line})`);
  const s=status(userId);
  render(s);
} else if(cmd==='talk'&&userId){
  const r=talk(userId);
  if(!r){console.log('No companion found.');process.exit(1);}
  console.log(`${r.comp.name} dice:`);
  console.log(`"${r.text}"`);
} else if(cmd==='evolve'&&userId){
  const r=evolve(userId);
  if(r.evolved){
    console.log(`✨ EVOLUTION! ${r.comp.name} was born!`);
    const s=status(userId);
    render(s);
  } else {
    console.log('Not ready to evolve yet. 10 interactions required.');
  }
} else if(['feed','play','sleep','groom','cuddle','train','evening','evoke'].includes(cmd)&&userId){
  const delta=cmd!=='evoke'?1:0;
  const r=action(userId,cmd,delta);
  if(!r){console.log('No companion found.');process.exit(1);}
  console.log(`💫 ${r.comp.name} ha ${cmd}!`);
  const s=status(userId);
  render(s);
  if(r.evolvedId){
    console.log(`\n🎊✨ EVOLUTION! ${r.comp.name} was born! ✨🎊`);
  }
} else if(cmd==='list'){
  console.log('🐾 Available companions:');
  Object.values(COMPANIONS).forEach(c=>console.log(`  ${c.name} (${c.line}, ${c.stadio})`));
} else {
  console.log('TOMODACHI CLI v2.0');
  console.log('-------------------');
  console.log('status <user>   - Show companion');
  console.log('hatch <user>    - Hatch a new egg');
  console.log('talk <user>     - Make your companion talk');
  console.log('evolve <user>   - Force evolution (if ready)');
  console.log('feed/play/sleep/groom/cuddle/train/evening/evoke <user>');
  console.log('decay           - Apply decay to all companions');
  console.log('list            - List all companions');
}
