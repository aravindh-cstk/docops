---
title: "Serve Your Canvas App over HTTPS Locally"
description: "The one fix that works in every browser for the \\\"Studio can't reach http://localhost\\\" class of problems (mixed-content, Private Network Access, \\\"SDK Not."
url: /studio/serve-your-canvas-app-over-https-locally
---

# Serve Your Canvas App over HTTPS Locally

## Serve your canvas-app over HTTPS locally

The **one fix that works in every browser** for the "Studio can't reach http://localhost" class of problems (mixed-content, Private Network Access, "SDK Not Initialized" dialog). If you're not sure whether this is the issue you're hitting, first confirm via [Troubleshoot: Studio can't reach your localhost canvas](/docs/studio/troubleshoot-common-studio-issues#studio-cant-reach-your-canvas).

## The concepts behind it

Studio runs at https://app.contentstack.com (public HTTPS). Your canvas-app dev server runs at http://localhost:PORT (private HTTP). Every modern browser rejects the private HTTP iframe inside the public HTTPS page, two overlapping mechanisms (mixed content + Private Network Access), and no header, CSP, or SDK setting from either side can undo that at the browser level.

**Serving https://localhost:PORT with a locally-trusted cert eliminates both mechanisms in one step.** The request from Studio to your canvas then runs from public HTTPS to private HTTPS, which browsers accept as long as the certificate is trusted. Point your project's Canvas URL at https://localhost:PORT (with the s) and the canvas iframe loads cleanly in every browser you own: no per-browser flags, no config in Studio, no CORS mystery.

## Step 1: Install and trust mkcert

[mkcert](https://github.com/FiloSottile/mkcert) generates a locally-trusted certificate authority (CA) that browsers on your machine accept, then issues per-domain certificates signed by that CA. This is a **one-time setup per machine**.

```
# macOS
brew install mkcert
brew install nss           # only needed if you use Firefox

# Linux (Ubuntu / Debian)
sudo apt install libnss3-tools
curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
chmod +x mkcert-v*-linux-amd64
sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert

# Windows
choco install mkcert
# or: scoop bucket add extras && scoop install mkcert
```

**Trust the CA once**, on every machine that runs the dev server:

```
mkcert -install
```

This adds mkcert's root CA to your system trust store (Keychain on macOS, the Windows certificate store, or your Linux distro's cert store), plus to Firefox's separate cert store if nss is installed. Chrome, Brave, Edge, Safari all pick this up from the system store, no per-browser step.

## Step 2: Issue a cert for localhost

Run this in your canvas-app project root:

```
mkcert localhost 127.0.0.1 ::1
```

Two files appear in the directory:

-   localhost+2.pem: the certificate (or localhost.pem depending on mkcert version)
-   localhost+2-key.pem: the private key

Add them to .gitignore. These are per-machine and should never be committed:

```
# local HTTPS certs (mkcert)
*.pem
```

The cert is valid for 2 years by default. Re-run mkcert localhost 127.0.0.1 ::1 to refresh.

## Step 3: Configure your dev server

Pick your framework. Each config below assumes the cert files are at the project root. Adjust paths if you put them elsewhere.

### Vite (React / Vue / Svelte / Solid)

```
// vite.config.ts
import { defineConfig } from "vite";
import fs from "node:fs";

export default defineConfig({
  server: {
    https: {
      cert: fs.readFileSync("./localhost+2.pem"),
      key:  fs.readFileSync("./localhost+2-key.pem"),
    },
    port: 3006,             // or whatever your Canvas URL uses
  },
});
```

Restart Vite. The startup log now shows https://localhost:3006/.

### Next.js: App Router or Pages Router (15+)

Next.js has built-in HTTPS support since 13.5+:

```
next dev \
  --experimental-https \
  --experimental-https-key  ./localhost+2-key.pem \
  --experimental-https-cert ./localhost+2.pem
```

Wire that into package.json so npm run dev uses HTTPS automatically:

```
{
  "scripts": {
    "dev": "next dev --experimental-https --experimental-https-key ./localhost+2-key.pem --experimental-https-cert ./localhost+2.pem"
  }
}
```

On older Next.js (< 13.5), use a custom server, see [Node http / Express](#node-http-express-custom-server) below.

### Remix

Remix's Vite integration uses the same Vite server.https config as above. If you're on the classic Remix compiler (not Vite), pass a custom server: see [Node http / Express](#node-http-express-custom-server).

### Astro

```
// astro.config.mjs
import { defineConfig } from "astro/config";
import fs from "node:fs";

export default defineConfig({
  server: {
    port: 3006,
  },
  vite: {
    server: {
      https: {
        cert: fs.readFileSync("./localhost+2.pem"),
        key:  fs.readFileSync("./localhost+2-key.pem"),
      },
    },
  },
});
```

### Nuxt 3

```
// nuxt.config.ts
import fs from "node:fs";

export default defineNuxtConfig({
  devServer: {
    https: {
      cert: fs.readFileSync("./localhost+2.pem"),
      key:  fs.readFileSync("./localhost+2-key.pem"),
    },
    port: 3006,
  },
});
```

### Angular CLI

Add flags to ng serve:

```
ng serve \
  --ssl \
  --ssl-cert ./localhost+2.pem \
  --ssl-key  ./localhost+2-key.pem \
  --port 3006
```

Or persist in angular.json under projects.<name>.architect.serve.options:

```
{
  "ssl": true,
  "sslCert": "./localhost+2.pem",
  "sslKey":  "./localhost+2-key.pem",
  "port": 3006
}
```

### Webpack dev server

```
// webpack.config.js
const fs = require("node:fs");

module.exports = {
  // …
  devServer: {
    server: {
      type: "https",
      options: {
        cert: fs.readFileSync("./localhost+2.pem"),
        key:  fs.readFileSync("./localhost+2-key.pem"),
      },
    },
    port: 3006,
  },
};
```

### create-react-app (react-scripts, if you're still on it)

```
HTTPS=true \
SSL_CRT_FILE=./localhost+2.pem \
SSL_KEY_FILE=./localhost+2-key.pem \
PORT=3006 \
npm start
```

### Node http / Express custom server

```
// server.js
import { createServer } from "node:https";
import { readFileSync } from "node:fs";
import express from "express";

const app = express();
// … your routes …

createServer(
  {
    cert: readFileSync("./localhost+2.pem"),
    key:  readFileSync("./localhost+2-key.pem"),
  },
  app,
).listen(3006, () => {
  console.log("https://localhost:3006/");
});
```

Works for Next.js < 13.5, Fastify, Koa, and any other Node framework: pass your app to createServer.

### Docker Compose / dev container

Mount the certs into the container:

```
services:
  canvas-app:
    build: .
    ports: ["3006:3006"]
    volumes:
      - ./localhost+2.pem:/certs/localhost.pem:ro
      - ./localhost+2-key.pem:/certs/localhost-key.pem:ro
    command: >
      npm run dev
      -- --https --cert /certs/localhost.pem --key /certs/localhost-key.pem
```

Each developer runs mkcert -install + mkcert localhost 127.0.0.1 ::1 on their host machine so the browser trusts the cert. The container uses the mounted files.

## Step 4: Update the Studio project's Canvas URL

1.  Open [app.contentstack.com](https://app.contentstack.com/), go to **Studio**, select your project, and open **Settings**, then **Configuration**.
2.  Change **Canvas URL** from http://localhost:PORT to https://localhost:PORT (add the s). If your Canvas URL used a project-relative path like /canvas, no change needed there. Studio prepends the origin.
3.  Save.

## Step 5: Verify

1.  Reload any composition in Studio. The iframe loads. No "SDK Not Initialized" dialog. No mixed-content shield. No PNA block.
2.  In DevTools on the Studio tab, under Network, the request to https://localhost:PORT/... now returns **200** with your rendered composition, not net::ERR\_BLOCKED\_BY\_LOCAL\_NETWORK\_ACCESS\_CHECKS or blocked:mixed-content.
3.  Confirm <StudioComponent /> / <StudioCanvas /> render normally.

If the iframe still fails after this, it's not the browser block. Go back to [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues) and match against the other "Canvas iframe issues" entries (canvas route missing, wrong Canvas URL path, <StudioCanvas /> not mounted, studioSdk.init() not called at boot).

## FAQ

**Do I have to do this every time I clone the repo?** No. The mkcert CA is per-machine: install it once via mkcert -install, and every project you generate certs for are trusted. Certs themselves live in the project directory and are gitignored. Regenerate with mkcert localhost 127.0.0.1 ::1 when you clone.

**Does this affect production?** No. Production already runs on real HTTPS with a real CA (Let's Encrypt, Cloudflare, whatever your host issues). This entire mechanism is local-dev-only.

**What about my team / continuous integration (CI)?** Each developer runs mkcert -install on their own machine. CI environments don't need it: they either use real HTTPS (deployed to staging) or don't hit Studio's canvas in browser-load mode.

**What if I don't want to install mkcert?** Use the per-browser escape hatches listed in [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues#studio-cant-reach-your-canvas): Brave / Chrome / Edge / Firefox each have a flag or about:config toggle to disable the block. Safari has no per-flag toggle, mkcert is the only clean path there.

**Can I share one cert across a monorepo?** Yes. Generate mkcert localhost 127.0.0.1 ::1 at the repo root and reference the same paths from each package's dev-server config. Every app that binds to localhost:PORT uses the same cert, only the port differs.

**Is there a Windows-specific gotcha?** mkcert -install on Windows may prompt for admin. Accept. Firefox on Windows needs nss similar to Linux. The mkcert Windows README covers this.

## See also

-   [Troubleshoot: Studio can't reach your localhost canvas](/docs/studio/troubleshoot-common-studio-issues#studio-cant-reach-your-canvas): the symptoms this fixes.
-   [Setup: Section preview route](/docs/studio/section-preview-route): where the Canvas URL setting lives.
-   [mkcert on GitHub](https://github.com/FiloSottile/mkcert): upstream docs.
