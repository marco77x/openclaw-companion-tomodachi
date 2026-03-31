// ============================================
// COMPANION ANIMATIONS MODULE
// ============================================

const ANIMATIONS = {
  // ============================================
  // BABY FORMS
  // ============================================
  
  tomodachi: {
    name: "TOMODACHI",
    idle: [
      "    ♡  ♡  ♡\n   (^·‿·^)\n    ~~~ ~~",
      "    ♡  ♡  ♡\n   (@·‿·@)\n    ~~~ ~~",
      "    ♡  ♡  ♡\n   (^·‿·^)\n    ~ ~~ ~",
    ],
    happy: [
      "     ♡  ♡  ♡\n    \\(^O^)/\n    ~~~ ~~",
      "     ♡  ♡  ♡\n    /(^o^)\\\n    ~~~ ~~",
    ],
    sad: [
      "    ·  ·  ·\n   (·  ‿  ·)\n    ~~~ ~~",
      "    ·  ·  ·\n   (·  ‿  ·)\n   ~~ ~~~",
    ],
    special: [
      "    ♡  ♥  ♡\n   (^·‿·^)\n    ♥~~♥~~",
    ],
  },
  
  zippo: {
    name: "Zippo",
    idle: [
      "    ●  ●\n   <· ·>\n    /\\",
      "   ●  ●\n   <· ·>\n    /\\",
      "  ●  ●\n  <· ·>\n   /\\",
    ],
    happy: [
      "     ●  ●\n    \\(^O^)/\n     /\\",
      "    ●  ●\n   /(^o^)\\\n    /\\",
    ],
    sad: [
      "    ·  ·\n   <·  ·>\n    /\\",
      "   ·  ·\n   <· ‿ ·>\n    /\\",
    ],
    special: [
      "    ●● ●●\n   <· ·>\n   ~~~~~~~~\n    /\\",
    ],
  },
  
  noxi: {
    name: "Noxi",
    idle: [
      "     ☆\n    (·)\n   /   \\",
      "      ☆\n    (·)\n   /   \\",
      "    ☆\n   (·)\n  /   \\",
    ],
    happy: [
      "    ☆  ☆\n   (^·‿·^)\n   /     \\",
      "   \\☆ ☆/\n   (^·‿·^)\n    ",
    ],
    sad: [
      "     ·\n    (·)\n   /   \\",
      "      ·\n    (·)\n   ~~~  ~~~",
    ],
    special: [
      "    ✦ ✦ ✦\n   (^·‿·^)\n  ✦  ~~~ ✦",
      "    ✦*✦\n   (^·‿·^)\n  *~~¥~~*",
    ],
  },

  // ============================================
  // TENERA LINE - FINALE
  // ============================================
  
  mieli: {
    name: "Mieli",
    idle: [
      "   ♡  ♡\n  (^‿^)\n  /~~~\\",
      "  ♡  ♡\n (^‿^)\n /~~~\\",
    ],
    happy: [
      "   ♡  ♡  ♡\n /(^‿^)\\\n  ~~~ ~~~",
      "  ♡ ♥ ♡\n(^‿^)\\\n ~♥~♥~",
    ],
    sad: [
      "   ·  ·\n (· ‿ ·)\n  ~~~ ~~~",
      "   · ·\n (· ‿ ·)\n  ~~~~~",
    ],
    special: [
      "   ♡  ♡\n /(^‿^)\\\n ♥~~~~~♥",
      "  >(((°>",
    ],
  },
  
  ninnolo: {
    name: "Ninnolo",
    idle: [
      "   zzZ\n  (-·-)\n  /   \\",
      "  zzz\n (-·-)\n/   \\",
      "   Zzz\n  (-·-)\n  ~~~",
    ],
    happy: [
      "   ♡\n (-^‿^-)\n  ~~~",
      "  ♡  ♡\n(-^‿^-)\n  ~~~",
    ],
    sad: [
      "   ·\n (-·-)\n  ~~~",
    ],
    special: [
      "   💤\n (-·-)\n ~💤~💤~",
    ],
  },
  
  veluna: {
    name: "Veluna",
    idle: [
      "    ✦\n  /(^·^)\\\n /     \\",
      "   ✦\n /(^·^)\\\n/     \\",
    ],
    happy: [
      "   ✦ ✦\n/(^‿^)\\\n  ✦  ✦",
      "  ✦✦✦\n(^‿^)\n ✦✦✦",
    ],
    sad: [
      "    ·\n /(·-·)\\\n  ~~~",
    ],
    special: [
      "   ✦ ✦ ✦\n/(^‿^)\\\n✦ ~♥~ ✦\n   ✦ ✦",
    ],
  },
  
  trilly: {
    name: "Trilly",
    idle: [
      "  ♡  ♡\n (^o^)\n  /\\",
      " ♡  ♡\n(^o^)\n /\\",
    ],
    happy: [
      "  ♡  ♡  ♡\n/(^o^)\\\n ♡  ♡",
      "  ♡♥♡\n/(^o^)\\\n  ♥♥♥",
    ],
    sad: [
      "  ·  ·\n (·o·)\n  /\\",
    ],
    special: [
      "  ♡♥♡♥♡\n(^o^)\\\n ♡♥♡♥♡",
    ],
  },
  
  briciola: {
    name: "Briciola",
    idle: [
      "   ·\n  (·)\n   ~",
      "  ·\n (·)\n  ~",
    ],
    happy: [
      "   ♡\n (^‿^)\n  ~",
      "  ♥ ♡\n(^‿^)\n  ~",
    ],
    sad: [
      "   ·\n  (·)\n   ·",
      "  ·\n (·)\n  ·",
    ],
    special: [
      "   ♡\n (^‿^)\n ~~♥~~",
    ],
  },

  // ============================================
  // VIVACE LINE - FINALE
  // ============================================
  
  sprinto: {
    name: "Sprinto",
    idle: [
      "   ● ●\n  <· ·>\n   /\\",
      "  ● ●\n <· ·>\n  /\\",
    ],
    happy: [
      "   ● ●\n  <^o^>\n  /\\\\",
      "  ●● ●●\n <(^o^)>\n  /\\\\",
    ],
    sad: [
      "   · ·\n  <· ·>\n   /\\",
    ],
    special: [
      "  ●● ●● ●●\n <(^o^)>\n /////////",
    ],
  },
  
  turbolo: {
    name: "Turbolo",
    idle: [
      "   ●\n  (@)\n   /\\",
      "  ●\n (@)\n/\\",
    ],
    happy: [
      "   ●● ●●\n  (@@)\n  /\\\\\\\\",
      " ●●●●●●\n (@@@)\n //////",
    ],
    sad: [
      "   ·\n  (@)\n   /\\",
    ],
    special: [
      " ●●●●●●●●●●\n  @@@@)\n !!!!!!!!",
    ],
  },
  
  voltix: {
    name: "Voltix",
    idle: [
      "   ★\n  <·>\n   /\\",
      "  ★\n <·>\n/\\",
    ],
    happy: [
      "   ⚡\n  <^o^>\n  /\\\\",
      "  ⚡⚡⚡\n <(^o^)>\n  /\\\\\\\\",
    ],
    sad: [
      "   ·\n  <·>\n   /\\",
    ],
    special: [
      " ⚡⚡⚡⚡⚡\n  <^o^>\n ⚡/////⚡",
    ],
  },
  
  bombo: {
    name: "Bombo",
    idle: [
      "  ● ●\n <(@)>\n  /\\",
      " ● ●\n<(@)>\n/\\",
    ],
    happy: [
      "  ● ● ●\n<(@.@)>\n /\\\\",
      " ●●●●●\n<(@.@)>\n /////",
    ],
    sad: [
      "  · ·\n <(@)>\n  /\\",
    ],
    special: [
      " ●●●●●●●\n<(@.@)>\n////♥////",
    ],
  },
  
  ribik: {
    name: "Ribik",
    idle: [
      "  ●●\n <· ·>\n  /\\",
      " ●●\n<· ·>\n/\\",
    ],
    happy: [
      "  ●●●\n <(^o^)>\n  /\\\\",
      "  ●● ●●\n<(^o^)>\n  //\\\\",
    ],
    sad: [
      "  ··\n <· ·>\n  /\\",
    ],
    special: [
      "  ●●●●●\n<(^o^)>\n /////\\\\",
    ],
  },

  // ============================================
  // MISTERIOSA LINE - FINALE
  // ============================================
  
  lunor: {
    name: "Lunor",
    idle: [
      "   ☾\n  (·)\n   ~",
      "  ☾\n (·)\n  ~",
    ],
    happy: [
      "   ☾\n (^‿^)\n  ~♥~",
      "  ☾ ☾\n(^‿^)\n ~♥~",
    ],
    sad: [
      "   ☾\n (·  ·)\n  ~~~",
    ],
    special: [
      "  ☾  ☾  ☾\n (^‿^)\n~☾~~☾~~☾~",
    ],
  },
  
  nebril: {
    name: "Nebril",
    idle: [
      "   ~\n  (·)\n   ·",
      "  ~\n (·)\n  ·",
    ],
    happy: [
      "   ~\n (^‿^)\n  ~♥~",
      "  ~ ~\n(^‿^)\n  ♥♥♥",
    ],
    sad: [
      "   ~\n (·  ·)\n   ·",
    ],
    special: [
      " ~ ~ ~ ~ ~\n  (^‿^)\n ~♥~♥~♥~",
    ],
  },
  
  astryn: {
    name: "Astryn",
    idle: [
      "    ✦\n  /(·)\\\n    ·",
      "   ✦\n /(·)\\\n  ·",
    ],
    happy: [
      "   ✦ ✦\n/(^‿^)\\\n  ✦ ✦",
      "  ✦✦✦\n(^‿^)\n ✦✦✦",
    ],
    sad: [
      "    ·\n  /(·)\\\n   ·",
    ],
    special: [
      "✦ ✦ ✦ ✦ ✦\n/(^‿^)\\\n✦~♥~♥~✦\n ✦ ✦ ✦ ✦",
    ],
  },
  
  velmoru: {
    name: "Velmoru",
    idle: [
      "  \\\n  (·)\n  /~",
      " \\\n (·)\n/~",
    ],
    happy: [
      "   ✦\n (^‿^)\n  ~♥~",
    ],
    sad: [
      "  \\\n  (·)\n  /·",
    ],
    special: [
      " ✦     ✦\n  (^‿^)\n ✦~♥~♥~✦",
    ],
  },
  
  noctara: {
    name: "Noctara",
    idle: [
      "   ★\n  (·)\n   ·",
      "  ★\n (·)\n  ·",
    ],
    happy: [
      "   ★\n (^‿^)\n  ★♥★",
      "  ★  ★\n(^‿^)\n ★♥★",
    ],
    sad: [
      "   ★\n (·  ·)\n  ~~~",
    ],
    special: [
      " ★  ★  ★\n  (^‿^)\n★~★~★~★~★",
    ],
  },
};

// ============================================
// ANIMATION CONTROLLER
// ============================================

let animationFrames = {};
let animationIntervals = {};
let currentMood = 'idle';

function getAnimation(companionId, mood = 'idle') {
  const companion = ANIMATIONS[companionId.toLowerCase()];
  if (!companion) return null;
  
  const frames = companion[mood] || companion.idle;
  return frames;
}

function startAnimation(companionId, mood = 'idle', onFrame = () => {}) {
  stopAnimation(companionId);
  
  const frames = getAnimation(companionId, mood);
  if (!frames || frames.length === 0) return;
  
  let frameIndex = 0;
  animationFrames[companionId] = frameIndex;
  
  // Initial call
  onFrame(frames[frameIndex], frameIndex, frames.length);
  
  // Start interval
  const speed = mood === 'happy' ? 400 : mood === 'special' ? 600 : 800;
  animationIntervals[companionId] = setInterval(() => {
    frameIndex = (frameIndex + 1) % frames.length;
    animationFrames[companionId] = frameIndex;
    onFrame(frames[frameIndex], frameIndex, frames.length);
  }, speed);
}

function stopAnimation(companionId) {
  if (animationIntervals[companionId]) {
    clearInterval(animationIntervals[companionId]);
    delete animationIntervals[companionId];
  }
}

function getCurrentFrame(companionId) {
  const frames = getAnimation(companionId, currentMood);
  if (!frames) return null;
  const frameIndex = animationFrames[companionId] || 0;
  return frames[frameIndex];
}

function setMood(mood) {
  currentMood = mood;
}

module.exports = {
  ANIMATIONS,
  getAnimation,
  startAnimation,
  stopAnimation,
  getCurrentFrame,
  setMood,
};
