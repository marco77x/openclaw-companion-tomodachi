#!/usr/bin/env node
// CLI for Companion System
const { loadCompanion, hatchNew, render, listCompanions } = require('./companion');

const args = process.argv.slice(2);
const command = args[0];

if (!command) {
  console.log('Usage: companion <userId> [hatch|status|feed|play|groom|nap|list]');
  process.exit(1);
}

const userId = args[1] || 'default';

switch (command) {
  case 'hatch': {
    const companion = hatchNew(userId);
    console.log('\n🎉 New companion hatched!\n');
    console.log(render(companion));
    break;
  }
  
  case 'status': {
    const companion = loadCompanion(userId);
    if (!companion) {
      console.log(`No companion found for ${userId}. Run 'companion hatch' first.`);
    } else {
      console.log(render(companion));
    }
    break;
  }
  
  case 'feed':
  case 'play':
  case 'groom':
  case 'nap': {
    const companion = loadCompanion(userId);
    if (!companion) {
      console.log(`No companion found for ${userId}. Run 'companion hatch' first.`);
      break;
    }
    
    const actions = {
      feed: { key: 'lastFed', stat: 'HUNGER', gain: 20 },
      play: { key: 'lastPlayed', stat: 'MOOD', gain: 15 },
      groom: { key: 'lastGroomed', stat: 'GROOMING', gain: 25 },
      nap: { key: 'lastNapped', stat: 'ENERGY', gain: 30 },
    };
    
    const action = actions[command];
    companion[action.key] = Date.now();
    companion.stats[action.stat] = Math.min(100, companion.stats[action.stat] + action.gain);
    
    require('./companion').saveCompanion(userId, companion);
    console.log(`\n🐾 ${companion.name} ${command}ed! (+${action.gain} ${action.stat})\n`);
    console.log(render(companion));
    break;
  }
  
  case 'list': {
    const list = listCompanions();
    if (list.length === 0) {
      console.log('No companions yet. Use "companion hatch <userId>" to hatch one!');
    } else {
      console.log('\n📋 All Companions:\n');
      for (const c of list) {
        console.log(`  ${c.name} (${c.species}) - ${c.rarity}`);
        console.log(`  Owner: ${c.userId}\n`);
      }
    }
    break;
  }
  
  default:
    console.log(`Unknown command: ${command}`);
    console.log('Available: hatch, status, feed, play, groom, nap, list');
}
