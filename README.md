# Starting Five

Starting Five is a real-time NBA auction draft game where players build a 5-man roster under a fixed budget, then compare team quality across scoring, rebounding, playmaking, star power, defense, and total team rating.

Live site: [startingfive.tkimify.com](https://startingfive.tkimify.com)

## Why I Built It

The idea originated from influencers on Instagram/TikTok where two players stting next to each other would bid on NBA players to construct rosters. I liked the concept of the game and immediately thought of making the game more accessible - in the aspect of easily setting up the game environment online, and also allowing individual play against a bot. The idea expanded beyond the original game I saw online - roster ratings are formulaically calculated after each game, drafts can now be played with up to 10 players, and you can now search for an opponent online. This was an exciting project to build and watch my ideas come to life. Seeing the app slowly grow in my circles has been super fun to see and has reminded me of my love for building things for the sake of implementing a fun idea I have.

## Tech Stack

- **Frontend:** HTML, CSS, and vanilla JavaScript
- **Backend:** Cloudflare Workers
- **Real-time multiplayer:** WebSockets
- **Stateful rooms:** Cloudflare Durable Objects
- **Hosting:** Cloudflare Worker static assets
- **Tooling:** Wrangler, npm

This app does not use a frontend framework. Most of the complexity lives in game state, auction validation, roster logic, multiplayer synchronization, and responsive UI behavior.

## Features

- **Play vs Bot:** Draft against a bot with budget-aware bidding behavior and multiple strategies varying in aggressiveness and budget conservation.
- **Play Online / Friend Mode:** 'Find a Game' feature to connect with a random player online, or create a private room code and draft live with friends.
- **Up to 10 multiplayer teams:** Draft with up to 10 friends, filling in extra spots with bots as necessary.
- **Custom game settings:** Configure player count, auction budget, and draft pool (Current NBA pool, Modern Superstars, All-Time Greats, hidden custom pool feature).
- **Draft pools:** Draft pool player quality makeup shifts every game, ensuring variability in gameplay and roster construction.
- **Results screen:** Compares team rating and category strengths using pre-determined player ratings calculated using real-life statistics.
- **Shareable PNG export:** Download a compact image of the final draft results.

## Code Structure

```text
public/
  index.html        Main app shell and modal/footer markup
  styles.css        Responsive UI, results layouts, share-card export styling
  app.js            Frontend state, bot mode, rendering, local auction flow, share export
  logo.png          Starting Five logo asset
  favicon.png       Browser icon
  tkimifylight.png  Footer brand mark

src/
  worker.js         Cloudflare Worker API, WebSocket handling, Durable Object room logic

wrangler.toml       Cloudflare Worker, asset, and Durable Object configuration
package.json        npm scripts and Wrangler dependency
```

## Architecture

The app is split into two main runtime paths:

1. **Client-only bot mode**
   - `public/app.js` owns local game state.
   - Bot bidding, auction turns, roster assignment, and final scoring happen in the browser.

2. **Authoritative multiplayer mode**
   - `src/worker.js` owns room state inside a Durable Object.
   - Clients connect over WebSockets.
   - The server validates room joins, bids, passes, timers, budgets, roster slots, bot actions, reconnects, and final results.

This keeps friend-mode games synchronized and prevents clients from deciding hidden auction outcomes on their own.

## Game Logic Highlights

- **Auction safety:** The max bid calculation always preserves at least `$1` per remaining roster slot.
- **Skipped players:** If everyone passes before a bid, the player can move back into the remaining pool instead of ending the draft immediately.
- **Roster optimization:** Flexible players are assigned into guard/forward/center slots based on eligibility and positional penalties.
- **Scoring model:** Final ratings are derived from roster value and category stats, normalized against the draft pool.
- **Multi-team results:** 3+ player games rank every team by total rating and each category.
- **2-player results:** 1v1 games use a focused head-to-head layout with a radar chart and paired rosters.

## Local Development

```bash
npm install
npm run dev
```

Then open the Wrangler local URL, usually:

```text
http://localhost:8787
```

For multiplayer testing, open the site in two browser tabs or use a phone on the same Wi-Fi network with the Mac's local IP address.

## Deployment

```bash
npm run deploy
```

Wrangler deploys:

- `public/` as static assets
- `src/worker.js` as the Worker entry point
- `AuctionRoom` as the Durable Object class for multiplayer rooms
