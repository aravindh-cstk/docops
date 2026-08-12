---
title: "Canvas URL"
description: "Learn what the canvas URL is, how to configure it in project settings, and how to add the matching route to your app for section previews."
url: /studio/canvas-url
---

# Canvas URL

## Canvas URL

The **canvas URL** is a project-level path that Studio uses to **preview sections**. It does _not_ affect how templates render at their real URLs.

## Why It Exists

A section has no URL of its own, it's a reusable block, not a page. But Studio still needs a real page to load inside its iframe so you can preview and author the section. The canvas URL points at that page.

```
Section preview iframe  =  Base URL          +  Canvas URL
                           (Environment +       (project setting,
                            Language)            e.g. /canvas)
```

## What the Canvas Route Needs

The page at your canvas URL needs to mount <StudioCanvas />:

```
// e.g. app/canvas/page.tsx in Next.js
import { StudioCanvas } from '@contentstack/studio-react';

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

That's it. Studio drives the rest via URL params.

## Where You Set It

Studio → your project → **Settings** → **Configuration**.

![Canvas URL field in project Configuration](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcca84cd9f8fcf310/5ba9a26d2e50619f95f8e2da/project-settings.png)

Once you've saved the Canvas URL, follow the steps in [Set up the section preview route](/docs/studio/section-preview-route) to add the matching route to your app.

-   **Environment** + **Language**: together resolve the Base URL from your stack's environment config
-   **Canvas URL**: the path on your site (e.g. /canvas)

_(The_ _Enable Freeform Feature_ _toggle on the same page belongs to the optional [Freeform](/docs/studio/freeform-templates) chapter; leave it off unless you need it.)_

## When the Canvas URL Is Used

| Action | Uses canvas URL? |
| --- | --- |
| Opening a section to author or preview | ✅ Yes |
| Building / verifying a section in isolation | ✅ Yes |
| Opening a template | ❌ No, templates use their own URL patterns |
| Visitors loading a published page | ❌ No |

## Errors and Fixes

| Error | Fix |
| --- | --- |
| **"No Canvas URL Found"** or MISSING\_CANVAS\_URL | Set the Canvas URL field in Project Configuration |
| Canvas iframe fails to resolve a Base URL | Pick an Environment + Language in Project Configuration |
| Canvas loads blank | Your canvas route exists but doesn't mount <StudioCanvas />: add the snippet above |
| Canvas iframe shows your home page | Canvas URL is /: change it to a dedicated route like /canvas |

## Optional: LLM-Assisted Setup

```
npx @contentstack/studio-skills install
```

Then ask your LLM: _"set up the section preview route"_. It will add the canvas route to your code **and** set the Canvas URL in Studio.

## Next

-   [Set up the section preview route](/docs/studio/section-preview-route)
-   [Sections overview](/docs/studio/build-and-use-sections)
-   [Install the Studio SDK](/docs/studio/install-the-studio-sdk): full SDK reference (install + init + register + fetch + mount)
