---
title: "Section Preview Route"
description: "Learn how to add the canvas route to your app, mount StudioCanvas, and configure the Canvas URL in Studio project settings for section preview."
url: /studio/section-preview-route
---

# Section Preview Route

## Section Preview Route

The **canvas route** is the page in your app that Studio loads inside its iframe when an author opens a section. It mounts <StudioCanvas />: that's it.

## What You'll Do

1.  Choose a URL path: /canvas, /studio-canvas, or whatever fits your routing conventions
2.  Create the route in your app
3.  Mount <StudioCanvas />
4.  Set the same path as the **Canvas URL** in Studio project Settings → Configuration

## Add the Route: Pick Your Framework

### Next.js: App Router

```
// app/canvas/page.tsx
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

> **Why client-only?** App Router server-renders the initial HTML even for "use client" components. <StudioCanvas /> renders null on the server and populates on the client. That mismatch causes a hydration error.

For App Router, load <StudioCanvas /> client-only using next/dynamic with ssr: false:

-   The "use client" directive alone is not enough; App Router still runs a server render pass.
-   next/dynamic({ ssr: false }) skips that server pass and loads the component only in the browser.

```
// app/<canvasPath>/page.tsx
"use client";
import dynamic from "next/dynamic";

const StudioCanvas = dynamic(
  () => import("@contentstack/studio-react").then((m) => m.StudioCanvas),
  { ssr: false },
);

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

### Next.js: Pages Router

Pages Router also needs dynamic({ ssr: false }). <StudioCanvas /> would render on the server otherwise:

```
// pages/canvas.tsx
import dynamic from "next/dynamic";

const StudioCanvas = dynamic(
  () => import("@contentstack/studio-react").then((m) => m.StudioCanvas),
  { ssr: false },
);

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

### Vite / React Router

```
// src/routes/CanvasRoute.tsx
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

```
// in your router config
{
  path: "/canvas",
  element: <CanvasRoute />,
}
```

### Remix

```
// app/routes/canvas.tsx
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

## Tell Studio About the Route

Now point Studio at the path you picked. Project → Settings → Configuration → set **Canvas URL** to your path (e.g. /canvas).

Studio combines the **Base URL (origin) + Canvas URL (path)** to get the full iframe URL. The Base URL is **not** the Canvas URL field. It's the per-locale URL on the environment the project targets (_Stack → Settings → Environments → <env> → URL for <locale>_), which for local dev must be your dev origin:

```
Base URL (env per-locale)   Canvas URL (project)
http://localhost:5173    +  /canvas  =  http://localhost:5173/canvas
```

Studio loads that URL whenever an author opens a section. If the environment's per-locale Base URL is empty, the canvas stays blank. Set it before relying on the canvas.

## Verify the Canvas Route

1.  Save the Canvas URL in Studio.
2.  Open any section composition from the Sections tab.
3.  Confirm the canvas iframe loads with <StudioCanvas /> rendered inside.

If the iframe is blank or you see "Canvas URL is not configured" / "Environment Not Configured", see [Troubleshoot](/docs/studio/troubleshoot-common-studio-issues).

## Optional: LLM-Assisted Setup

```
npx @contentstack/studio-skills install
```

Then: _"set up the section preview route"_. The LLM creates the route file **and** sets Canvas URL in Studio in one step.

## Next

Wire template preview routes: [Wire template preview routes](/docs/studio/template-preview-routes)
