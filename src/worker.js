// NBA Auction multiplayer Worker + Durable Object
// Deploy with Wrangler. The static HTML can be served by this Worker using assets.directory = "./".

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const MASTER = [
  // Superstar tier
  {name:"Nikola Jokic", pos:"C", tier:"superstar", ppg:29.6, rpg:12.7, apg:10.2, def:6},
  {name:"Luka Doncic", pos:"G", tier:"superstar", ppg:28.2, rpg:8.0, apg:7.7, def:4},
  {name:"Giannis Antetokounmpo", pos:"F", tier:"superstar", ppg:30.9, rpg:11.4, apg:6.1, def:9},
  {name:"Shai Gilgeous-Alexander", pos:"G", tier:"superstar", ppg:30.1, rpg:5.5, apg:6.2, def:7},
  {name:"Jayson Tatum", pos:"F", tier:"superstar", ppg:26.8, rpg:8.7, apg:5.8, def:7},
  {name:"Victor Wembanyama", pos:"C", tier:"superstar", ppg:24.3, rpg:11.0, apg:3.9, def:9},
  {name:"Anthony Edwards", pos:"G", tier:"superstar", ppg:27.6, rpg:5.7, apg:4.5, def:6},
  {name:"Kevin Durant", pos:"F", tier:"superstar", ppg:27.1, rpg:6.6, apg:4.2, def:6},
  {name:"Joel Embiid", pos:"C", tier:"superstar", ppg:27.6, rpg:10.9, apg:5.2, def:8},
  {name:"LeBron James", pos:"F", tier:"superstar", ppg:24.4, rpg:7.8, apg:8.2, def:5},

  // Star tier
  {name:"Stephen Curry", pos:"G", tier:"star", ppg:24.5, rpg:4.4, apg:5.9, def:4},
  {name:"Devin Booker", pos:"G", tier:"star", ppg:25.6, rpg:4.4, apg:6.9, def:5},
  {name:"Kawhi Leonard", pos:"F", tier:"star", ppg:23.7, rpg:6.1, apg:3.6, def:9},
  {name:"Anthony Davis", pos:"F", tier:"star", ppg:24.7, rpg:11.6, apg:3.5, def:8},
  {name:"Donovan Mitchell", pos:"G", tier:"star", ppg:26.1, rpg:4.9, apg:5.1, def:5},
  {name:"Jaylen Brown", pos:"F", tier:"star", ppg:23.0, rpg:5.5, apg:3.6, def:7},
  {name:"Tyrese Haliburton", pos:"G", tier:"star", ppg:18.6, rpg:3.7, apg:9.2, def:4},
  {name:"Paolo Banchero", pos:"F", tier:"star", ppg:25.9, rpg:7.5, apg:4.1, def:5},
  {name:"Ja Morant", pos:"G", tier:"star", ppg:23.2, rpg:4.0, apg:7.3, def:5},
  {name:"Trae Young", pos:"G", tier:"star", ppg:22.5, rpg:3.0, apg:11.6, def:3},
  {name:"Jalen Brunson", pos:"G", tier:"star", ppg:26.0, rpg:3.5, apg:6.7, def:4},
  {name:"Damian Lillard", pos:"G", tier:"star", ppg:24.9, rpg:4.7, apg:7.1, def:3},
  {name:"Kyrie Irving", pos:"G", tier:"star", ppg:24.7, rpg:4.8, apg:4.6, def:4},
  {name:"Jimmy Butler", pos:"F", tier:"star", ppg:17.5, rpg:5.4, apg:4.8, def:8},
  {name:"Cade Cunningham", pos:"G", tier:"star", ppg:26.1, rpg:6.1, apg:9.1, def:4},
  {name:"Alperen Sengun", pos:"C", tier:"star", ppg:19.1, rpg:10.3, apg:4.9, def:6},

  // Starter tier
  {name:"Domantas Sabonis", pos:"C", tier:"starter", ppg:19.4, rpg:13.6, apg:5.9, def:5},
  {name:"DeMar DeRozan", pos:"F", tier:"starter", ppg:22.0, rpg:4.3, apg:5.0, def:4},
  {name:"Bam Adebayo", pos:"C", tier:"starter", ppg:16.7, rpg:9.6, apg:4.0, def:8},
  {name:"Zion Williamson", pos:"F", tier:"starter", ppg:21.6, rpg:6.8, apg:4.7, def:5},
  {name:"Julius Randle", pos:"F", tier:"starter", ppg:20.9, rpg:7.5, apg:4.7, def:4},
  {name:"Karl-Anthony Towns", pos:"C", tier:"starter", ppg:22.5, rpg:11.1, apg:3.3, def:4},
  {name:"Pascal Siakam", pos:"F", tier:"starter", ppg:20.2, rpg:6.9, apg:3.5, def:6},
  {name:"Jrue Holiday", pos:"G", tier:"starter", ppg:12.5, rpg:4.6, apg:4.8, def:8},
  {name:"CJ McCollum", pos:"G", tier:"starter", ppg:20.1, rpg:4.1, apg:4.2, def:4},
  {name:"Tyler Herro", pos:"G", tier:"starter", ppg:23.9, rpg:5.5, apg:5.2, def:3},
  {name:"Desmond Bane", pos:"G", tier:"starter", ppg:19.2, rpg:6.1, apg:5.3, def:5},
  {name:"Brandon Ingram", pos:"F", tier:"starter", ppg:22.2, rpg:5.6, apg:5.2, def:4},
  {name:"Scottie Barnes", pos:"F", tier:"starter", ppg:19.3, rpg:7.7, apg:5.8, def:7},
  {name:"Franz Wagner", pos:"F", tier:"starter", ppg:24.1, rpg:5.7, apg:4.7, def:6},
  {name:"Darius Garland", pos:"G", tier:"starter", ppg:20.6, rpg:2.9, apg:6.7, def:4},
  {name:"Myles Turner", pos:"C", tier:"starter", ppg:15.6, rpg:6.5, apg:1.5, def:8},
  {name:"Jarrett Allen", pos:"C", tier:"starter", ppg:13.5, rpg:9.7, apg:1.9, def:8},
  {name:"Rudy Gobert", pos:"C", tier:"starter", ppg:12.0, rpg:10.9, apg:1.8, def:9},
  {name:"Chet Holmgren", pos:"C", tier:"starter", ppg:15.0, rpg:8.0, apg:2.0, def:8},

  // Role tier
  {name:"Herbert Jones", pos:"F", tier:"role", ppg:11.2, rpg:4.1, apg:2.1, def:9},
  {name:"Mikal Bridges", pos:"F", tier:"role", ppg:17.6, rpg:4.2, apg:3.3, def:8},
  {name:"Jalen Williams", pos:"F", tier:"role", ppg:19.5, rpg:4.5, apg:4.6, def:6},
  {name:"Alex Caruso", pos:"G", tier:"role", ppg:9.8, rpg:3.7, apg:3.6, def:9},
  {name:"Klay Thompson", pos:"G", tier:"role", ppg:14.2, rpg:3.1, apg:2.2, def:5},
  {name:"Draymond Green", pos:"F", tier:"role", ppg:8.5, rpg:6.9, apg:6.0, def:9},
  {name:"Aaron Gordon", pos:"F", tier:"role", ppg:14.4, rpg:6.5, apg:3.4, def:6},
  {name:"Bruce Brown", pos:"G", tier:"role", ppg:9.1, rpg:3.7, apg:2.5, def:6},
  {name:"OG Anunoby", pos:"F", tier:"role", ppg:18.0, rpg:4.8, apg:2.2, def:9},
  {name:"Derrick White", pos:"G", tier:"role", ppg:16.4, rpg:4.5, apg:4.8, def:8},
  {name:"Austin Reaves", pos:"G", tier:"role", ppg:20.2, rpg:4.5, apg:5.8, def:4},
  {name:"Josh Hart", pos:"F", tier:"role", ppg:13.6, rpg:9.6, apg:5.9, def:6},
  {name:"Brook Lopez", pos:"C", tier:"role", ppg:13.0, rpg:5.0, apg:1.8, def:8},
  {name:"Mike Conley", pos:"G", tier:"role", ppg:8.2, rpg:2.6, apg:4.5, def:6},
  {name:"Kentavious Caldwell-Pope", pos:"G", tier:"role", ppg:8.7, rpg:2.2, apg:2.0, def:7},
  {name:"Jaden McDaniels", pos:"F", tier:"role", ppg:12.2, rpg:3.0, apg:1.4, def:8},
  {name:"Andrew Wiggins", pos:"F", tier:"role", ppg:18.0, rpg:4.5, apg:2.6, def:6},
  {name:"Donte DiVincenzo", pos:"G", tier:"role", ppg:11.7, rpg:3.7, apg:3.6, def:5},
  {name:"Norman Powell", pos:"G", tier:"role", ppg:21.8, rpg:3.2, apg:2.1, def:4},
  {name:"Tobias Harris", pos:"F", tier:"role", ppg:13.7, rpg:5.9, apg:2.2, def:4},

  // Bench tier
  {name:"Gary Trent Jr.", pos:"G", tier:"bench", ppg:11.8, rpg:2.2, apg:1.3, def:5},
  {name:"Naz Reid", pos:"C", tier:"bench", ppg:14.2, rpg:5.6, apg:2.0, def:5},
  {name:"Bobby Portis", pos:"F", tier:"bench", ppg:13.6, rpg:7.4, apg:1.3, def:4},
  {name:"Delon Wright", pos:"G", tier:"bench", ppg:6.5, rpg:2.9, apg:3.3, def:6},
  {name:"Kelly Olynyk", pos:"C", tier:"bench", ppg:9.0, rpg:4.6, apg:2.6, def:3},
  {name:"Cody Martin", pos:"F", tier:"bench", ppg:6.8, rpg:3.4, apg:1.8, def:6},
  {name:"Duncan Robinson", pos:"G", tier:"bench", ppg:12.9, rpg:2.4, apg:2.0, def:2},
  {name:"Jae'Sean Tate", pos:"F", tier:"bench", ppg:7.9, rpg:4.0, apg:2.3, def:6},
  {name:"Malik Monk", pos:"G", tier:"bench", ppg:17.2, rpg:3.8, apg:5.6, def:3},
  {name:"Payton Pritchard", pos:"G", tier:"bench", ppg:14.3, rpg:3.8, apg:3.5, def:4},
  {name:"Luke Kennard", pos:"G", tier:"bench", ppg:8.9, rpg:2.8, apg:3.3, def:3},
  {name:"T.J. McConnell", pos:"G", tier:"bench", ppg:9.1, rpg:2.4, apg:4.4, def:5},
  {name:"Al Horford", pos:"C", tier:"bench", ppg:9.0, rpg:6.2, apg:2.1, def:7},
  {name:"Kevon Looney", pos:"C", tier:"bench", ppg:4.5, rpg:6.1, apg:1.6, def:6},
  {name:"Max Strus", pos:"G", tier:"bench", ppg:9.4, rpg:4.3, apg:3.2, def:4},
  {name:"Obi Toppin", pos:"F", tier:"bench", ppg:10.5, rpg:4.0, apg:1.6, def:3},
  {name:"Grayson Allen", pos:"G", tier:"bench", ppg:10.6, rpg:3.0, apg:2.1, def:4},
  {name:"Caris LeVert", pos:"G", tier:"bench", ppg:10.2, rpg:2.8, apg:3.7, def:4},
];
const TIER_BASE = {superstar:95, star:72, starter:50, role:30, bench:15};
const TIER_VALUE_BOUNDS = {
  superstar:{min:86, max:100},
  star:{min:66, max:84},
  starter:{min:45, max:63},
  role:{min:26, max:44},
  bench:{min:10, max:25},
};
const STAR_POWER_FIXED_MAX = 100;

// Stat-to-value formula. It is deterministic: same player, same true value every game.
// Values are normalized within each tier, then clamped to that tier's bounds.
const STAT_WEIGHTS = {ppg:1.55, rpg:1.15, apg:1.35, def:3.75};
function statComposite(p){
  return p.ppg*STAT_WEIGHTS.ppg + p.rpg*STAT_WEIGHTS.rpg + p.apg*STAT_WEIGHTS.apg + p.def*STAT_WEIGHTS.def;
}
function tierStatRange(tier){
  const vals = MASTER.filter(p=>p.tier===tier).map(statComposite);
  return {min:Math.min(...vals), max:Math.max(...vals)};
}
const TIER_STAT_RANGES = Object.fromEntries(Object.keys(TIER_BASE).map(t=>[t, tierStatRange(t)]));
function statBasedTrueValue(player){
  const bounds = TIER_VALUE_BOUNDS[player.tier];
  const range = TIER_STAT_RANGES[player.tier];
  const rawNorm = range.max===range.min ? 0.5 : (statComposite(player)-range.min)/(range.max-range.min);
  const norm = clamp(rawNorm,0,1);
  return clamp(Math.round(bounds.min + norm*(bounds.max-bounds.min)), bounds.min, bounds.max);
}

const POOL_PROFILES = [
  {name:"Superteam Showcase", desc:"A loaded class — 4 superstars, 3 stars, and 3 random depth pieces.", groups:[
    {tiers:["superstar"], count:4}, {tiers:["star"], count:3}, {tiers:["starter","role","bench"], count:3}
  ]},
  {name:"Balanced", desc:"A mixed class — 5 from the top two tiers, 4 from starter/role, and 1 bench piece.", groups:[
    {tiers:["superstar","star"], count:5}, {tiers:["starter","role"], count:4}, {tiers:["bench"], count:1}
  ]},
  {name:"Top Heavy", desc:"Three superstars headline the draft, then seven role/bench players fill out the board.", groups:[
    {tiers:["superstar"], count:3}, {tiers:["role","bench"], count:7}
  ]},
  {name:"Deep Sleeper", desc:"Only one superstar appears — the rest of the draft is about finding starter, role, and bench value.", groups:[
    {tiers:["superstar"], count:1}, {tiers:["starter","role"], count:4}, {tiers:["bench"], count:5}
  ]},
];



function rand(min,max){ return min + Math.random()*(max-min); }
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }
function clamp(v,lo,hi){ return Math.max(lo,Math.min(hi,v)); }
function samplePlayers(tiers, count, selectedNames){
  const options = shuffle(MASTER.filter(p=>tiers.includes(p.tier) && !selectedNames.has(p.name)));
  return options.slice(0,count);
}
function buildPool(){
  const profile = pick(POOL_PROFILES);
  const selected = [];
  const selectedNames = new Set();
  profile.groups.forEach(group=>{
    const picks = samplePlayers(group.tiers, group.count, selectedNames);
    picks.forEach(p=>{ selected.push(p); selectedNames.add(p.name); });
  });
  const order = shuffle(selected).map((p,idx)=>({
    id: "p"+idx, name:p.name, pos:p.pos, tier:p.tier,
    trueValue: statBasedTrueValue(p), ppg:p.ppg, rpg:p.rpg, apg:p.apg, def:p.def, drafted:false
  }));
  return {profile, order};
}

const POS_INDEX = {G:0, F:1, C:2};
const ROSTER_LAYOUT = ['G','G','F','F','C'];
function posDistance(a,b){ return Math.abs(POS_INDEX[a]-POS_INDEX[b]); }
function penaltyMultiplier(dist){ return dist===0 ? 1 : (dist===1 ? 0.92 : 0.78); }
function publicPlayer(p){
  if(!p) return null;
  const {trueValue, adjustedValue, ...rest} = p;
  return {...rest};
}
function rosterByPosition(game, side){
  const byPos = {G:[], F:[], C:[]};
  game.rosters[side].forEach(p=> byPos[p.assignedPos].push(p));
  const counts = {G:0, F:0, C:0};
  return ROSTER_LAYOUT.map(posLabel => byPos[posLabel][counts[posLabel]++] || null).filter(Boolean);
}
function optimizeRosterPositions(game, side){
  const roster = game.rosters[side];
  const used = Array(ROSTER_LAYOUT.length).fill(false);
  const assignment = Array(roster.length).fill(null);
  let bestAssignment = null;
  let bestScore = Infinity;
  function search(idx, score){
    if(score >= bestScore) return;
    if(idx >= roster.length){ bestScore = score; bestAssignment = assignment.slice(); return; }
    const player = roster[idx];
    for(let i=0;i<ROSTER_LAYOUT.length;i++){
      if(used[i]) continue;
      const slot = ROSTER_LAYOUT[i];
      const dist = posDistance(player.pos, slot);
      used[i] = true; assignment[idx] = slot;
      search(idx+1, score + dist*100 - player.trueValue*0.01);
      used[i] = false; assignment[idx] = null;
    }
  }
  search(0,0);
  const remaining = {G:2,F:2,C:1};
  roster.forEach((player, idx)=>{
    const assignedPos = bestAssignment ? bestAssignment[idx] : player.pos;
    const dist = posDistance(player.pos, assignedPos);
    player.assignedPos = assignedPos;
    player.posPenaltyDist = dist;
    player.adjustedValue = Math.round(player.trueValue * penaltyMultiplier(dist));
    remaining[assignedPos] -= 1;
  });
  game.posSlots[side] = remaining;
}
function assignPosition(game, side){ optimizeRosterPositions(game, side); }
function topNSum(arr, n){ return arr.slice().sort((a,b)=>b-a).slice(0,n).reduce((a,b)=>a+b,0); }
function topNAvg(arr, n){ const vals = arr.slice().sort((a,b)=>b-a).slice(0,n); return vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0; }
function teamAxes(game, side, maxes){
  const roster = game.rosters[side];
  const sumPpg = roster.reduce((s,p)=>s+p.ppg,0);
  const sumRpg = roster.reduce((s,p)=>s+p.rpg,0);
  const sumApg = roster.reduce((s,p)=>s+p.apg,0);
  const sumDef = roster.reduce((s,p)=>s+p.def,0);
  const teamTop3Avg = topNAvg(roster.map(p=>p.trueValue), 3);
  const poolScaledStarPower = maxes.starPowerPoolAvg ? teamTop3Avg/maxes.starPowerPoolAvg*100 : 0;
  const fixedScaledStarPower = teamTop3Avg/STAR_POWER_FIXED_MAX*100;
  const starPower = clamp(Math.round((poolScaledStarPower + fixedScaledStarPower)/2),0,100);
  return [
    clamp(Math.round(sumPpg/maxes.ppg*100),0,100),
    clamp(Math.round(sumRpg/maxes.rpg*100),0,100),
    clamp(Math.round(sumApg/maxes.apg*100),0,100),
    starPower,
    clamp(Math.round(sumDef/maxes.def*100),0,100),
  ];
}
function buildResults(game){
  const top5Raw = topNSum(game.order.map(p=>p.trueValue), 5);
  const score = (side)=> clamp(Math.round(game.rosters[side].reduce((s,p)=>s+p.adjustedValue,0)/top5Raw*100),0,100);
  const scores = {host:score('host'), guest:score('guest')};
  const winner = scores.host===scores.guest ? 'tie' : (scores.host>scores.guest ? 'host' : 'guest');
  const maxes = {
    ppg: topNSum(game.order.map(p=>p.ppg),5),
    rpg: topNSum(game.order.map(p=>p.rpg),5),
    apg: topNSum(game.order.map(p=>p.apg),5),
    def: topNSum(game.order.map(p=>p.def),5),
    starPowerPoolAvg: topNAvg(game.order.map(p=>p.trueValue),3),
  };
  const totalPoolValue = game.order.reduce((s,p)=>s+p.trueValue,0);
  const priceScale = totalPoolValue/40;
  const rows = (side)=> rosterByPosition(game, side).map(p=>{
    const expectedValue = p.soldPrice*priceScale;
    const tag = expectedValue < p.trueValue*0.75 ? 'steal' : (expectedValue > p.trueValue*1.35 ? 'overpay' : '');
    return {
      name:p.name, pos:p.assignedPos, naturalPos:p.pos, bigShift:p.posPenaltyDist===2, price:p.soldPrice, tag
    };
  });
  return {winner, scores, axes:{host:teamAxes(game,'host',maxes), guest:teamAxes(game,'guest',maxes)}, rows:{host:rows('host'), guest:rows('guest')}};
}

function newRoomGame(code){
  const {profile, order} = buildPool();
  return {
    code, profileName: profile.name, status:'waiting', guestJoined:false, order,
    budgets:{host:20, guest:20},
    slots:{host:5, guest:5},
    posSlots:{host:{G:2,F:2,C:1}, guest:{G:2,F:2,C:1}},
    rosters:{host:[], guest:[]},
    initialFirst: Math.random()<0.5 ? 'host' : 'guest',
    roundIndex:0, nominationCount:0, auction:null, log:[], over:false, results:null,
    rematch:{host:false, guest:false}
  };
}
function otherSide(side){ return side==='host' ? 'guest' : 'host'; }
function label(side){ return side==='host' ? 'Host' : 'Guest'; }
function maxBid(game, side){
  if(game.slots[side]<=0) return 0;
  const slotsAfterThis = game.slots[side]-1;
  return Math.max(0, game.budgets[side] - slotsAfterThis);
}
function addLog(game, who, text){ game.log.push({who, text}); if(game.log.length>80) game.log.shift(); }
function firstBidderFor(game){
  let f = (game.nominationCount % 2 === 0) ? game.initialFirst : otherSide(game.initialFirst);
  if(game.slots[f]<=0) f = otherSide(f);
  return f;
}
function availableUndraftedPlayers(game){ return game.order.filter(p=>!p.drafted); }
function autoFillRemainingRoster(game, side){
  if(game.slots[side] <= 0) return;
  const needed = game.slots[side];
  const candidates = availableUndraftedPlayers(game).slice(0, needed);
  addLog(game, 'sys', `${label(side)} gets ${needed} remaining player${needed===1?'':'s'} automatically because the other roster is full.`);
  candidates.forEach(player=>{
    player.drafted = true; player.soldTo = side; player.soldPrice = 1;
    game.budgets[side] -= 1; game.slots[side] -= 1; game.rosters[side].push(player);
    assignPosition(game, side);
    addLog(game, 'sys', `${label(side)} receives ${player.name} automatically for $1.`);
  });
}
function endGame(game){ game.over = true; game.status = 'ended'; game.results = buildResults(game); }
function maybeAutoFillAfterRosterFull(game){
  if(game.slots.host <= 0 && game.slots.guest > 0){ autoFillRemainingRoster(game,'guest'); endGame(game); return true; }
  if(game.slots.guest <= 0 && game.slots.host > 0){ autoFillRemainingRoster(game,'host'); endGame(game); return true; }
  if(game.slots.host <= 0 && game.slots.guest <= 0){ endGame(game); return true; }
  return false;
}
function startRound(game){
  if(maybeAutoFillAfterRosterFull(game)) return;
  if(game.roundIndex >= game.order.length){ endGame(game); return; }
  const player = game.order[game.roundIndex];
  const opener = firstBidderFor(game);
  game.nominationCount += 1;
  game.auction = { playerId:player.id, bid:0, bidder:null, turn:opener, openDeclines:{host:false, guest:false} };
  addLog(game, 'sys', `Player ${game.roundIndex+1} of ${game.order.length} revealed: ${player.name}. ${label(opener)} gets first action.`);
}
function recycleAuctionPlayer(game){
  const idx = game.order.findIndex(p=>p.id===game.auction.playerId);
  if(idx >= 0){
    const [player] = game.order.splice(idx,1);
    game.order.push(player);
    addLog(game, 'sys', `No opening bid — ${player.name} moves to the back of the pool.`);
  }
  game.auction = null;
}
function passBeforeOpeningBid(game, side){
  const player = game.order.find(p=>p.id===game.auction.playerId);
  game.auction.openDeclines[side] = true;
  addLog(game, side, `${label(side)} passes before bidding on ${player.name}.`);
  const other = otherSide(side);
  if(game.slots[other] > 0 && !game.auction.openDeclines[other]){
    game.auction.turn = other;
    addLog(game, 'sys', `${label(other)} still has the option to open bidding on ${player.name}.`);
    return;
  }
  recycleAuctionPlayer(game);
}
function resolveAuction(game, winnerSide){
  if(!game.auction || !winnerSide) return;
  const player = game.order.find(p=>p.id===game.auction.playerId);
  const price = game.auction.bid;
  if(price <= 0){ recycleAuctionPlayer(game); return; }
  player.drafted = true; player.soldTo = winnerSide; player.soldPrice = price;
  game.budgets[winnerSide] -= price; game.slots[winnerSide] -= 1; game.rosters[winnerSide].push(player);
  assignPosition(game, winnerSide);
  addLog(game, 'sys', `${label(winnerSide)} wins ${player.name} for $${price} — slotted at ${player.assignedPos}${player.assignedPos!==player.pos?' (off natural position)':''}.`);
  game.auction = null; game.roundIndex += 1;
  if(maybeAutoFillAfterRosterFull(game)) return;
  if(game.roundIndex >= game.order.length) endGame(game);
}
function processBid(game, side, amount){
  if(game.over || game.status !== 'active') return;
  if(!game.auction || game.auction.turn !== side || game.slots[side] <= 0) return;
  amount = Number(amount);
  if(![1,2,5].includes(amount)) return;
  const openingBid = game.auction.bid === 0;
  const newBid = game.auction.bid + amount;
  if(newBid > maxBid(game, side)) return;
  game.auction.bid = newBid; game.auction.bidder = side; game.auction.turn = otherSide(side);
  addLog(game, side, openingBid ? `${label(side)} opens at $${newBid}.` : `${label(side)} raises to $${newBid}.`);
}
function processPass(game, side){
  if(game.over || game.status !== 'active') return;
  if(!game.auction || game.auction.turn !== side) return;
  if(game.slots[side] <= 0){ maybeAutoFillAfterRosterFull(game); return; }
  if(!game.auction.bidder){ passBeforeOpeningBid(game, side); return; }
  addLog(game, side, `${label(side)} passes at $${game.auction.bid}.`);
  resolveAuction(game, game.auction.bidder);
}
function stateForClient(game, side, connected){
  const opp = otherSide(side);
  const currentPlayer = game.auction ? game.order.find(p=>p.id===game.auction.playerId) : null;
  return {
    type:'state', roomCode: game.code, side, status: game.status, over: game.over, connected,
    draftedCount: game.rosters.host.length + game.rosters.guest.length, orderLength: game.order.length,
    me: {side, budget:game.budgets[side], slots:game.slots[side], posSlots:game.posSlots[side], maxBid:maxBid(game,side), roster:game.rosters[side].map(publicPlayer)},
    opponent: {side:opp, budget:game.budgets[opp], slots:game.slots[opp], posSlots:game.posSlots[opp], maxBid:maxBid(game,opp), roster:game.rosters[opp].map(publicPlayer)},
    auction: game.auction ? {
      bid:game.auction.bid, bidder:game.auction.bidder, turn:game.auction.turn, openDeclines:game.auction.openDeclines, player:publicPlayer(currentPlayer)
    } : null,
    log: game.log,
    rematch:{requested: game.rematch || {host:false, guest:false}, connected},
    results: game.results
  };
}
function makeCode(){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s='';
  for(let i=0;i<5;i++) s += chars[Math.floor(Math.random()*chars.length)];
  return s;
}

export class AuctionRoom {
  constructor(state, env){
    this.state = state; this.env = env; this.sessions = new Map(); this.game = null; this.loaded = false;
  }
  async load(){
    if(this.loaded) return;
    this.game = await this.state.storage.get('game');
    this.loaded = true;
  }
  async save(){ await this.state.storage.put('game', this.game); }
  connectedMap(){ return {host:this.sessions.has('host'), guest:this.sessions.has('guest')}; }
  async fetch(request){
    await this.load();
    const url = new URL(request.url);
    if(request.method === 'POST' && url.pathname.endsWith('/init')){
      const code = url.searchParams.get('code') || makeCode();
      if(!this.game){ this.game = newRoomGame(code); await this.save(); }
      return new Response(JSON.stringify({ok:true, code:this.game.code}), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }
    if(request.method === 'GET' && url.pathname.endsWith('/status')){
      if(!this.game){
        return new Response(JSON.stringify({exists:false, full:false, message:'Invalid room code.'}), {status:404, headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
      }
      const connected = this.connectedMap();
      const full = !!(this.game.guestJoined && connected.host && connected.guest && !this.game.over);
      return new Response(JSON.stringify({
        exists:true,
        full,
        status:this.game.status,
        over:!!this.game.over,
        connected,
      }), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }
    if(request.headers.get('Upgrade') === 'websocket') return this.handleWebSocket(request);
    return new Response('Not found', {status:404, headers:CORS_HEADERS});
  }
  async handleWebSocket(request){
    const url = new URL(request.url);
    const side = url.searchParams.get('side');
    if(side !== 'host' && side !== 'guest') return new Response('Invalid side', {status:400});
    if(!this.game) return new Response('Room does not exist', {status:404});
    if(side === 'guest' && this.game.guestJoined && this.sessions.has('guest') && !this.game.over){
      return new Response('Room is already full', {status:409, headers:CORS_HEADERS});
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();

    if(this.sessions.has(side)){
      try{ this.sessions.get(side).close(1012, 'Replaced by new connection'); }catch(e){}
    }
    this.sessions.set(side, server);
    if(side === 'guest' && !this.game.guestJoined){
      this.game.guestJoined = true;
      this.game.status = 'active';
      addLog(this.game, 'sys', 'Guest joined. The friend draft is ready.');
      await this.save();
    }
    server.addEventListener('message', async (event)=>{
      let msg; try{ msg = JSON.parse(event.data); }catch(e){ return; }
      await this.handleAction(side, msg);
    });
    server.addEventListener('close', async ()=>{
      this.sessions.delete(side);
      if(this.game && this.game.status === 'active' && !this.game.over){
        addLog(this.game, 'sys', `${label(side)} disconnected. Waiting for them to reconnect.`);
        await this.save();
      }
      this.broadcast();
    });
    server.addEventListener('error', async ()=>{
      this.sessions.delete(side);
      if(this.game && this.game.status === 'active' && !this.game.over){
        addLog(this.game, 'sys', `${label(side)} disconnected. Waiting for them to reconnect.`);
        await this.save();
      }
      this.broadcast();
    });
    this.broadcast();
    return new Response(null, {status:101, webSocket:client});
  }
  async handleRematch(side){
    if(!this.game || !this.game.over){ this.broadcast(); return; }
    if(!this.game.rematch) this.game.rematch = {host:false, guest:false};
    if(!this.game.rematch[side]){
      this.game.rematch[side] = true;
      addLog(this.game, 'sys', `${label(side)} requested a rematch.`);
    }

    if(this.game.rematch.host && this.game.rematch.guest){
      const code = this.game.code;
      const freshGame = newRoomGame(code);
      freshGame.status = 'active';
      freshGame.guestJoined = true;
      addLog(freshGame, 'sys', 'Rematch started with a fresh player pool.');
      this.game = freshGame;
    }

    await this.save();
    this.broadcast();
  }

  async handleAction(side, msg){
    if(msg && msg.type === 'rematch'){ await this.handleRematch(side); return; }
    if(!this.game || this.game.over){ this.broadcast(); return; }
    if(this.game.status !== 'active'){ this.broadcast(); return; }
    if(!this.sessions.has('host') || !this.sessions.has('guest')){ this.broadcast(); return; }
    if(msg.type === 'reveal'){ if(!this.game.auction) startRound(this.game); }
    else if(msg.type === 'bid') processBid(this.game, side, msg.amount);
    else if(msg.type === 'pass') processPass(this.game, side);
    await this.save();
    this.broadcast();
  }
  broadcast(){
    if(!this.game) return;
    const connected = this.connectedMap();
    for(const [side, ws] of this.sessions.entries()){
      try{ ws.send(JSON.stringify(stateForClient(this.game, side, connected))); }catch(e){}
    }
  }
}

export default {
  async fetch(request, env, ctx){
    const url = new URL(request.url);

    if (url.hostname === "nba-auction.tmkm.workers.dev") {
      url.hostname = "startingfive.tkimify.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    if(request.method === 'OPTIONS') return new Response(null, {headers:CORS_HEADERS});
    if(request.method === 'POST' && url.pathname === '/api/room/create'){
      const code = makeCode();
      const id = env.AUCTION_ROOMS.idFromName(code);
      const stub = env.AUCTION_ROOMS.get(id);
      const initRes = await stub.fetch(`https://room/init?code=${code}`, {method:'POST'});
      if(!initRes.ok) return new Response('Could not create room', {status:500, headers:CORS_HEADERS});
      return new Response(JSON.stringify({code}), {headers:{'Content-Type':'application/json', ...CORS_HEADERS}});
    }
    const statusMatch = url.pathname.match(/^\/api\/room\/([A-Z0-9]+)\/status$/i);
    if(statusMatch){
      const code = statusMatch[1].toUpperCase();
      const id = env.AUCTION_ROOMS.idFromName(code);
      return env.AUCTION_ROOMS.get(id).fetch(request);
    }
    const wsMatch = url.pathname.match(/^\/api\/room\/([A-Z0-9]+)\/ws$/i);
    if(wsMatch){
      const code = wsMatch[1].toUpperCase();
      const id = env.AUCTION_ROOMS.idFromName(code);
      return env.AUCTION_ROOMS.get(id).fetch(request);
    }
    // If static assets are bound, serve the site from this same Worker.
    if(env.ASSETS) return env.ASSETS.fetch(request);
    return new Response('NBA Auction multiplayer Worker is running.', {headers:CORS_HEADERS});
  }
};
