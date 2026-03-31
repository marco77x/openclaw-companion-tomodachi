// Species definitions with ASCII art - from Claude Code's Buddy System
// https://github.com/Kuberwastaken/claude-code

const SPECIES = {
  CAT: {
    id: 'cat',
    name: 'Felis catus',
    art: {
      common: [
        '  /\\_____/\\  ',
        ' /  o   o  \\ ',
        '( ==  ^  == )',
        ' )         (  ',
        '(           ) ',
        '( (  )   (  ) )',
        '(__(__)___(__)__)',
      ],
      uncommon: [
        '  /\\_____/\\  ',
        ' /  ^   ^  \\ ',
        '( =  TIGER =)',
        ' )         (  ',
        '(    WILD   ) ',
        '(__(__)___(__)__)',
      ],
      rare: [
        '  /\\_____/\\  ',
        ' /  @   @  \\ ',
        '( =  SIAMESE=)',
        ' )         (  ',
        '(  ELEGANT  ) ',
        '(__)_(__)___(__)',
      ],
    },
    stats: { HUNGER: 70, ENERGY: 70, MOOD: 70, GROOMING: 40 }
  },
  DOG: {
    id: 'dog',
    name: 'Canis lupus familiaris',
    art: {
      common: [
        '    /\\    ',
        '   /  \\   ',
        '  / ____\\  ',
        ' /_/    \\_\\',
        '   O    O  ',
        '  (------) ',
      ],
      uncommon: [
        '    /\\    ',
        '   /  \\   ',
        '  / <> \\  ',
        ' /_/    \\_\\',
        '   O    O  ',
        '  (BORK!) ',
      ],
      rare: [
        '    /\\    ',
        '   /  \\   ',
        '  / !! \\  ',
        ' /_/    \\_\\',
        '   O    O  ',
        ' (GUARD!) ',
      ],
    },
    stats: { HUNGER: 60, ENERGY: 90, MOOD: 90, GROOMING: 30 }
  },
  RABBIT: {
    id: 'rabbit',
    name: 'Oryctolagus cuniculus',
    art: {
      common: [
        '   (\\(\\' ,
        '   ( -.-)',
        '   o_(")(")',
      ],
      uncommon: [
        '   (\\(\\' ,
        '   ( ^.^)',
        '   o_(")(")',
      ],
      rare: [
        '   (\\(\\' ,
        '   ( @.@)',
        '   o_(")(")',
      ],
      epic: [
        '   (\\(\\' ,
        '   (=^@^=)',
        '   o_(")(")',
      ],
      legendary: [
        '   (\\(\\' ,
        '   (O  O)',
        '   (\\)  )',
        '   o_(")(")',
      ],
    },
    stats: { HUNGER: 80, ENERGY: 80, MOOD: 80, GROOMING: 50 }
  },
  BEAR: {
    id: 'bear',
    name: 'Ursus arctos',
    art: {
      common: [
        '  /\\___/\\',
        ' /       \\',
        '|  O   O  |',
        '|    <    |',
        ' \\  \\___/  /',
        '  \\_______/',
      ],
      uncommon: [
        '  /\\___/\\',
        ' /  ^   ^  \\',
        '|  (     )  |',
        '|   \\___/   |',
        ' \\  \\___/  /',
        '  \\_______/',
      ],
      rare: [
        '  /\\___/\\',
        ' / @   @ \\',
        '|    ^    |',
        '|   ---   |',
        ' \\  \\_/  /',
        '  \\_______/',
      ],
    },
    stats: { HUNGER: 50, ENERGY: 60, MOOD: 70, GROOMING: 60 }
  },
  FOX: {
    id: 'fox',
    name: 'Vulpes vulpes',
    art: {
      common: [
        '   /\\   ',
        '  /  \\  ',
        ' / ,.. \\ ',
        '/ (    )\\',
        '   ||  ',
      ],
      uncommon: [
        '   /\\   ',
        '  /  \\  ',
        ' / \\../ \\',
        '/ ( FLUFF )\\',
        '   ||  ',
      ],
      rare: [
        '   /\\   ',
        '  /  \\  ',
        ' / @..@ \\',
        '/ ( FIRE )\\',
        '   ||  ',
      ],
    },
    stats: { HUNGER: 70, ENERGY: 80, MOOD: 75, GROOMING: 40 }
  },
  OWL: {
    id: 'owl',
    name: 'Bubo bubo',
    art: {
      common: [
        '   ,_, ',
        '  (O O)',
        '  /|V|\\',
        ' / ----- \\',
        '   | |  ',
      ],
      uncommon: [
        '   ,_, ',
        '  (O O)',
        '  /|WTCH|\\',
        ' /--| |--\\',
        '   | |  ',
      ],
      rare: [
        '   ,_, ',
        '  (@ @)',
        '  /|V|\\',
        ' / -----\\',
        '   | |  ',
      ],
    },
    stats: { HUNGER: 60, ENERGY: 50, MOOD: 65, GROOMING: 70 }
  },
  PENGUIN: {
    id: 'penguin',
    name: 'Aptenodytes',
    art: {
      common: [
        '   _   ',
        '  (_)  ',
        '  /_\\  ',
        ' /   \\ ',
        '|     |',
        ' \\___/ ',
      ],
      uncommon: [
        '   _   ',
        '  (^)  ',
        '  /_\\  ',
        ' / WIG \\',
        '|     |',
        ' \\___/ ',
      ],
      rare: [
        '   _   ',
        '  (@)  ',
        '  /_\\  ',
        ' /TUXEDO\\',
        '|     |',
        ' \\___/ ',
      ],
    },
    stats: { HUNGER: 70, ENERGY: 70, MOOD: 70, GROOMING: 50 }
  },
  DRAGON: {
    id: 'dragon',
    name: 'Draco rex',
    art: {
      legendary: [
        '     /\\    ',
        '    /  \\   ',
        '   /    \\  ',
        '  /  /\\  \\ ',
        ' /  /  \\  \\',
        '/__/    \\__\\',
        '   |    |  ',
        '   |    |  ',
        '   |    |  ',
        '  /|    |\\ ',
      ],
    },
    stats: { HUNGER: 30, ENERGY: 100, MOOD: 100, GROOMING: 90 }
  },
  UNICORN: {
    id: 'unicorn',
    name: 'Equus unicornis',
    art: {
      legendary: [
        '      /\\  ',
        '     /  \\ ',
        '    /    \\',
        '   /  /\\  \\',
        '  /  /  \\  \\',
        ' /__/    \\__\\',
        '    \\    /  ',
        '     \\  /   ',
        '      \\/    ',
      ],
    },
    stats: { HUNGER: 40, ENERGY: 90, MOOD: 100, GROOMING: 100 }
  },
  GHOUL: {
    id: 'ghoul',
    name: 'Necronomicon',
    art: {
      legendary: [
        '   .-.   ',
        '  (o o)  ',
        '  |   |  ',
        '  | + |  ',
        '  |   |  ',
        '  ~~~~~~~ ',
      ],
    },
    stats: { HUNGER: 20, ENERGY: 80, MOOD: 50, GROOMING: 10 }
  },
  SLIME: {
    id: 'slime',
    name: 'Limax maximus',
    art: {
      common: [
        '  .--.',
        ' /    \\',
        '|      |',
        ' \\    /',
        '  `--\'',
      ],
      uncommon: [
        '  .--.--.',
        ' /        \\',
        '|  SLIMEY  |',
        ' \\        /',
        '  `--\'\'--\'',
      ],
      rare: [
        '  .--.--.',
        ' /  ~~  \\',
        '| CRYSTAL |',
        ' \\  ~~  /',
        '  `--\'\'--\'',
      ],
    },
    stats: { HUNGER: 90, ENERGY: 40, MOOD: 60, GROOMING: 20 }
  },
  SPIDER: {
    id: 'spider',
    name: 'Araneae',
    art: {
      common: [
        ' \\      /',
        '  \\    /',
        '   \\  /',
        '   /\\',
        '  /  \\',
        ' /    \\',
        '  \\  /',
        '   \\/',
      ],
      uncommon: [
        ' \\  ~~  /',
        '  \\    /',
        '   \\  /',
        '   /\\',
        '  /  \\',
        ' / \\/ \\',
        '  \\  /',
        '   \\/',
      ],
      rare: [
        ' \\ @  @ /',
        '  \\    /',
        '   \\  /',
        '   /\\',
        '  /PV\\',
        ' / \\/ \\',
        '  \\  /',
        '   \\/',
      ],
    },
    stats: { HUNGER: 50, ENERGY: 90, MOOD: 40, GROOMING: 80 }
  },
  GOBLIN: {
    id: 'goblin',
    name: 'Hobgoblin',
    art: {
      uncommon: [
        '  ,---.',
        ' /     \\',
        '| O   O |',
        '|   <   |',
        '|  ===  |',
        ' \\_____/',
      ],
      rare: [
        '  ,---.',
        ' / ^   ^\\',
        '| @   @ |',
        '|   ~   |',
        '|  KING |',
        ' \\_____/',
      ],
      epic: [
        '  ,---.',
        ' / @ @ \\',
        '|   W   |',
        '|  GOB  |',
        '|  LORD |',
        ' \\_____/',
      ],
    },
    stats: { HUNGER: 70, ENERGY: 80, MOOD: 60, GROOMING: 30 }
  },
  GHOST: {
    id: 'ghost',
    name: 'Specter',
    art: {
      uncommon: [
        '   .---.   ',
        '  /     \\  ',
        ' |  O O  | ',
        ' |   <   | ',
        ' |  ---  | ',
        '  \\_____/  ',
        '   |   |   ',
      ],
      rare: [
        '   .---.   ',
        '  / ~~~ \\  ',
        ' | O O O | ',
        ' |   W   | ',
        ' | MAGIC | ',
        '  \\_____/  ',
        '   |   |   ',
      ],
      epic: [
        '   .---.   ',
        '  /PHANTM\\  ',
        ' | x  x  x | ',
        ' |   ^   | ',
        ' |PRINCE| ',
        '  \\_____/  ',
        '   |   |   ',
      ],
      legendary: [
        '   .---.   ',
        '  /DRAGON\\  ',
        ' | <> <> <> | ',
        ' |  LORD  | ',
        ' |   OF   | ',
        ' |  DOOM  | ',
        '  \\_____/  ',
        '   |   |   ',
      ],
    },
    stats: { HUNGER: 0, ENERGY: 100, MOOD: 80, GROOMING: 100 }
  },
  WIZARD: {
    id: 'wizard',
    name: 'Archmage',
    art: {
      rare: [
        '      .-.      ',
        '     (o o)     ',
        '    /|   |\\    ',
        '   / |   | \\   ',
        '  |  |   |  |  ',
        '   \\ |   | /   ',
        '    \\|___|/    ',
        '       |       ',
        '      / \\      ',
      ],
      epic: [
        '      .-.      ',
        '     ( @ @)     ',
        '    /| W |\\    ',
        '   / | A | \\   ',
        '  |  | R |  |  ',
        '   \\ | D | /   ',
        '    \\|___|/    ',
        '       |       ',
        '      /O\\      ',
      ],
      legendary: [
        '      .-.      ',
        '     ( * *)     ',
        '    /|=MAGE=\\    ',
        '   / |   | \\   ',
        '  |  |SAGE|  |  ',
        '   \\ |   | /   ',
        '    \\|___|/    ',
        '       |       ',
        '      /A\\      ',
      ],
    },
    stats: { HUNGER: 30, ENERGY: 60, MOOD: 90, GROOMING: 70 }
  },
  ROBOT: {
    id: 'robot',
    name: 'Mech unit',
    art: {
      uncommon: [
        '   [===]   ',
        '  /     \\  ',
        ' | O   O | ',
        ' |   <   | ',
        ' |  ___  | ',
        '  \\_____/  ',
        '   |   |   ',
        '   |   |   ',
      ],
      rare: [
        '   [CNC]   ',
        '  / == \\  ',
        ' | @   @ | ',
        ' |   ^   | ',
        ' | TITAN | ',
        '  \\_____/  ',
        '   || ||  ',
        '   || ||  ',
      ],
      epic: [
        '   [ADV]   ',
        '  /TIER2\\  ',
        ' | x   x | ',
        ' |   +   | ',
        ' |SUPERMK| ',
        '  \\_____/  ',
        '  /// \\\\\\  ',
        '  /// \\\\\\  ',
      ],
      legendary: [
        '   [OMNI]   ',
        '  /ULTIMATE\\  ',
        ' |< x   x >| ',
        ' |  =====  | ',
        ' | PROTOTY | ',
        '  \\_____/  ',
        ' |||||||||  ',
        ' |||||||||  ',
      ],
    },
    stats: { HUNGER: 0, ENERGY: 100, MOOD: 50, GROOMING: 100 }
  },
  PHOENIX: {
    id: 'phoenix',
    name: 'Firebird',
    art: {
      legendary: [
        '    \\  /    ',
        '     \\/     ',
        '     /\\     ',
        '    /  \\    ',
        '   / /\\ \\   ',
        '  / /  \\ \\  ',
        ' / /    \\ \\ ',
        '/ /      \\ \\',
        '\\/`      `\\/',
      ],
    },
    stats: { HUNGER: 40, ENERGY: 100, MOOD: 100, GROOMING: 80 }
  },
  GORILLA: {
    id: 'gorilla',
    name: 'Silverback',
    art: {
      rare: [
        '  ,-----.  ',
        ' /  ^   ^  \\',
        '|  (==)==(  |',
        '|    ---    |',
        ' \\  \\___/  /',
        '  \\_______/  ',
      ],
      epic: [
        '  ,=====.  ',
        ' / SILVER \\',
        '|  ^   ^  |',
        '| (======) |',
        ' \\  APEX  /',
        '  \\_______/  ',
      ],
    },
    stats: { HUNGER: 50, ENERGY: 95, MOOD: 60, GROOMING: 40 }
  },
  WOLF: {
    id: 'wolf',
    name: 'Canis lupus',
    art: {
      uncommon: [
        '     /\\     ',
        '    /  \\    ',
        '   / ,..\\   ',
        '  / (    )\\  ',
        '  \\   ||   /  ',
        '   \\  ||  /   ',
      ],
      rare: [
        '     /\\     ',
        '    /  \\    ',
        '   / @..\\   ',
        '  / (WNTR)\\  ',
        '  \\   ||   /  ',
        '   \\  ||  /   ',
      ],
      epic: [
        '     /\\     ',
        '    /  \\    ',
        '   / ^..^\\   ',
        '  / (HOWL)\\  ',
        '  \\   ||   /  ',
        '   \\  ||  /   ',
      ],
      legendary: [
        '     /\\     ',
        '    /  \\    ',
        '   /~~~~\\   ',
        '  / (LUNA)\\  ',
        '  \\   ||   /  ',
        '   \\  ||  /   ',
      ],
    },
    stats: { HUNGER: 60, ENERGY: 85, MOOD: 70, GROOMING: 50 }
  },
  TURTLE: {
    id: 'turtle',
    name: 'Chelonia',
    art: {
      common: [
        '    ____    ',
        '   /    \\   ',
        '  |      |  ',
        '  |  ??  |  ',
        '   \\____/   ',
        '    |  |    ',
      ],
      uncommon: [
        '    ____    ',
        '   / SH \\   ',
        '  |      |  ',
        '  | ANCIENT|  ',
        '   \\____/   ',
        '    |  |    ',
      ],
      rare: [
        '    ____    ',
        '   /GOLD\\   ',
        '  |      |  ',
        '  | WISDOM|  ',
        '   \\____/   ',
        '    |  |    ',
      ],
    },
    stats: { HUNGER: 70, ENERGY: 30, MOOD: 80, GROOMING: 60 }
  },
};

const RARITIES = {
  common: { chance: 0.50, color: '\x1b[37m', label: 'common', multiplier: 1.0 },
  uncommon: { chance: 0.30, color: '\x1b[32m', label: 'uncommon', multiplier: 1.15 },
  rare: { chance: 0.12, color: '\x1b[34m', label: 'rare', multiplier: 1.3 },
  epic: { chance: 0.06, color: '\x1b[35m', label: 'epic', multiplier: 1.5 },
  legendary: { chance: 0.02, color: '\x1b[33m', label: 'legendary', multiplier: 1.75 },
};

const EYES = [
  { id: 'O  O', label: 'Ocular Distress' },
  { id: 'o  o', label: 'Nearsighted' },
  { id: '0  0', label: 'Cyclops Mode' },
  { id: 'x  x', label: 'Wedness' },
  { id: '>  <', label: 'Paranoid' },
  { id: '^  ^', label: 'Happy' },
  { id: '~  ~', label: 'Dopey' },
  { id: '$  $', label: 'Greedy' },
  { id: '@  @', label: 'Curious' },
  { id: '*  *', label: 'Starstruck' },
  { id: 'u  u', label: 'Fish-eyed' },
  { id: 'n  n', label: 'Concerned' },
  { id: 'w  w', label: 'Woozy' },
  { id: 'q  q', label: 'Sleepy' },
  { id: 'e  e', label: 'Bored' },
  { id: 'd  d', label: 'Derpy' },
  { id: 'b  b', label: 'Busy' },
  { id: 'y  y', label: 'Jokester' },
];

const HATS = [
  null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
  { id: 'hat', label: 'Party Hat' },
  { id: 'tophat', label: 'Top Hat' },
  { id: 'cap', label: 'Baseball Cap' },
  { id: 'crown', label: 'Crown' },
  { id: 'helm', label: 'Viking Helmet' },
  { id: 'beret', label: 'Beret' },
  { id: 'wizard', label: 'Wizard Hat' },
  { id: 'halo', label: 'Halo' },
];

const SHINY_CHANCE = 0.01;

function getSpeciesForRarity(rarity) {
  const validSpecies = Object.values(SPECIES).filter(s => s.art[rarity]);
  return validSpecies.length > 0 ? validSpecies : Object.values(SPECIES).filter(s => s.art.common);
}

// Seeded PRNG (mulberry32)
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function generateStats(rarity, speciesStats, rng) {
  const mult = RARITIES[rarity].multiplier;
  const stats = {};
  for (const [key, base] of Object.entries(speciesStats)) {
    let val = Math.round(base * mult * (0.8 + rng() * 0.4));
    if (rarity === 'legendary') val = Math.min(100, val + 10);
    if (rarity === 'epic') val = Math.min(100, val + 5);
    stats[key] = val;
  }
  return stats;
}

function generateSoul(rng) {
  const adjectives = [
    'whimsical', 'mysterious', 'ancient', 'cosmic', 'playful', 'wise', 
    'chaotic', 'serene', 'fierce', 'gentle', 'trickster', 'guardian'
  ];
  const nouns = [
    'wanderer', 'dreamer', 'seeker', 'keeper', 'shadow', 'spark',
    'echo', 'spirit', 'wisp', 'flame', 'storm', 'tide'
  ];
  const adj = adjectives[Math.floor(rng() * adjectives.length)];
  const noun = nouns[Math.floor(rng() * nouns.length)];
  return `${adj.charAt(0).toUpperCase() + adj.slice(1)} ${noun}`;
}

function hatch(seed, existingData = null) {
  const rng = mulberry32(seed);
  
  // Roll rarity
  let roll = rng();
  let rarity = 'common';
  let cumulative = 0;
  for (const [r, data] of Object.entries(RARITIES)) {
    cumulative += data.chance;
    if (roll < cumulative) {
      rarity = r;
      break;
    }
  }
  
  // Roll shiny
  const isShiny = rng() < SHINY_CHANCE;
  if (isShiny) {
    rarity = Object.keys(RARITIES)[Math.min(Object.keys(RARITIES).indexOf(rarity) + 1, 4)];
  }
  
  // Pick species that has this rarity
  const speciesPool = getSpeciesForRarity(rarity);
  const species = speciesPool[Math.floor(rng() * speciesPool.length)];
  
  // Roll eyes
  const eyeIndex = Math.floor(rng() * EYES.length);
  const eyes = EYES[eyeIndex];
  
  // Roll hat (only non-common get hats)
  let hat = null;
  if (rarity !== 'common') {
    const hatRoll = rng() * 100;
    const hatChance = rarity === 'uncommon' ? 20 : rarity === 'rare' ? 35 : rarity === 'epic' ? 50 : 70;
    if (hatRoll < hatChance) {
      const hatPool = HATS.filter(h => h !== null);
      hat = hatPool[Math.floor(rng() * hatPool.length)];
    }
  }
  
  // Generate stats
  const stats = generateStats(rarity, species.stats, rng);
  
  // Generate soul
  const soul = existingData?.soul || generateSoul(rng);
  
  // Generate name
  const adjectives = ['Swift', 'Shadow', 'Cosmic', 'Mystic', 'Ancient', 'Wild', 'Noble', 'Lucky'];
  const nouns = ['Paws', 'Whisker', 'Flame', 'Storm', 'Spirit', 'Echo', 'Spark', 'Fang'];
  const prefix = adjectives[Math.floor(rng() * adjectives.length)];
  const suffix = nouns[Math.floor(rng() * nouns.length)];
  const customName = existingData?.name || `${prefix}${suffix}`;
  
  return {
    id: seed,
    name: customName,
    species: species.id,
    speciesName: species.name,
    rarity,
    isShiny,
    eyes: eyes.id,
    eyeLabel: eyes.label,
    hat: hat?.id || null,
    hatLabel: hat?.label || null,
    soul,
    stats,
    birthday: Date.now(),
    lastFed: Date.now(),
    lastNapped: Date.now(),
    lastPlayed: Date.now(),
    lastGroomed: Date.now(),
    evolutions: [],
  };
}

module.exports = { SPECIES, RARITIES, EYES, HATS, SHINY_CHANCE, hatch, mulberry32 };
