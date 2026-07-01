# NBA Auction Multiplayer

This version keeps the original **Play vs Bot** mode and adds **Play vs Friend** with private room codes.

## What changed

- Landing page with two options: Play vs Bot / Play vs Friend
- Friend mode lets one player create a code and the other join it
- A Cloudflare Worker + Durable Object owns each room's live game state
- The server validates bids, passes, budgets, roster slots, hidden true values, and results
- The frontend only receives the current public player, rosters, bids, and final derived results

## Recommended deployment: one Cloudflare Worker with static assets

This is the cleanest path because the HTML and multiplayer API live on the same origin.

```bash
cd ~/Downloads/nba-auction-multiplayer
npm install
npm run deploy
```

That deploys:

- `public/index.html` as the site
- `src/worker.js` as the API/WebSocket server
- one Durable Object room per game code

## Local development

```bash
cd ~/Downloads/nba-auction-multiplayer
npm install
npm run dev
```

Then open the Wrangler local URL in two browser tabs. Create a room in one tab and join it in the other.

## Keeping your current Cloudflare Pages site

You can also keep Pages for the static site and deploy only the Worker separately. In that setup, the frontend needs to know the Worker URL.

Open DevTools on the Pages site and run this once:

```js
localStorage.setItem('NBA_AUCTION_API_BASE', 'https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev');
location.reload();
```

For production, you can hardcode the Worker URL in `public/index.html` by changing:

```js
const MULTIPLAYER_API_BASE = window.MULTIPLAYER_API_BASE || localStorage.getItem('NBA_AUCTION_API_BASE') || '';
```

into:

```js
const MULTIPLAYER_API_BASE = 'https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev';
```

## GitHub notes

If you migrate to Worker static assets, commit the whole project folder structure:

```text
public/index.html
src/worker.js
wrangler.toml
package.json
README.md
```

Then deploy with `npm run deploy`.
