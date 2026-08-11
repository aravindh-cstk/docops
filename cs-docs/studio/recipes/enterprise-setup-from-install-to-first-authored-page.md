---
title: "Enterprise Setup From Install to First Authored Page"
description: "End-to-end guide for enterprise teams to install the Studio, Live Preview, and Delivery SDKs, register components, and author the first page in about 30 minutes."
url: /studio/enterprise-setup-from-install-to-first-authored-page
---

# Enterprise Setup From Install to First Authored Page

## Enterprise Setup From Install to First Authored Page

The end-to-end recipe for enterprise teams shipping Studio with their own component library. From a blank app to authors composing pages against your design system, in roughly 30 minutes.

This recipe assumes: - You have a Contentstack stack with at least one content type (e.g. blog\_post) with a few entries - You have an existing React component library in your app - You have a running app dev server (Next.js, Vite, Remix, or any React framework)

## What You'll Have at the End

-   Studio + Live Preview + Delivery SDKs installed and wired
-   Your Button, Card, and Hero registered with Studio
-   A Studio project linked to your stack
-   A canvas route + a template preview route
-   A linked template that authors can edit, with bindings to your blog\_post entries
-   The page rendering at /blog/<slug> on your site with real entry data

## Step 1: Install the Three SDKs

In your app:

```
npm install @contentstack/delivery-sdk @contentstack/live-preview-utils @contentstack/studio-react
```

Create src/lib/contentstack.ts:

```
import Contentstack from "@contentstack/delivery-sdk";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { studioSdk } from "@contentstack/studio-react";

export const stack = Contentstack.stack({
  apiKey:        process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
  deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
  environment:   process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  region:        "US",
  live_preview: {
    enable:        true,
    preview_token: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN!,
    host:          "rest-preview.contentstack.com",
  },
});

ContentstackLivePreview.init({
  stackDetails: {
    apiKey:      process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
  },
  clientUrlParams: { host: "app.contentstack.com" },
  editButton: { enable: true },
});

studioSdk.init({
  stackSdk: stack,
  // contentTypeUid set after the Studio project is created in step 4
});

export { ContentstackLivePreview };
```

Populate .env.local:

```
NEXT_PUBLIC_CONTENTSTACK_API_KEY=blt7f2b3951e45bd591
NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN=cs...
NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN=cs...
NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT=production
NEXT_PUBLIC_CONTENTSTACK_DEFAULT_LOCALE=en-us
```

Detail: [Install the Studio SDK](/docs/studio/install-the-studio-sdk)

## Step 2: Register Your Components

```
// src/lib/studio-components.ts
import { registerComponents } from "@contentstack/studio-react";
import { Button } from "@/components/Button";
import { Card }   from "@/components/Card";
import { Hero }   from "@/components/Hero";
import buttonIcon from "@/assets/icons/button.svg";
import cardIcon   from "@/assets/icons/card.svg";
import heroIcon   from "@/assets/icons/hero.svg";

registerComponents([
  {
    type:        "Button",
    displayName: "Button",
    thumbnailUrl:        buttonIcon,
    component:   Button,
    props: {
      label:   { type: "string", defaultValue: "Click me" },
      href:    { type: "href",   defaultValue: "#" },
      variant: {
        type:         "choice",
        options:      ["primary", "secondary", "ghost"],
        defaultValue: ["primary"],
      },
    },
  },
  {
    type:        "Card",
    displayName: "Card",
    thumbnailUrl:        cardIcon,
    component:   Card,
    props: {
      title:    { type: "string",   defaultValue: "Card title" },
      image:    { type: "imageurl", displayName: "Cover image" },
      body:     { type: "string",   control: "large", defaultValue: "Body copy" },
      ctaLabel: { type: "string",   defaultValue: "Learn more" },
      ctaHref:  { type: "href",     defaultValue: "#" },
    },
  },
  {
    type:        "Hero",
    displayName: "Hero",
    thumbnailUrl:        heroIcon,
    component:   Hero,
    props: {
      headline: { type: "string",   defaultValue: "Welcome" },
      subhead:  { type: "string",   defaultValue: "Short tagline" },
      cover:    { type: "imageurl" },
      cta:      {
        type: "object",
        properties: {
          label: { type: "string", defaultValue: "Get started" },
          href:  { type: "href",   defaultValue: "#" },
        },
      },
    },
  },
]);
```

Wire it at boot:

```
// src/lib/contentstack.ts (add at the end)
import "./studio-components";
```

Detail: [Registering components](/docs/studio/register-components)

![Component palette showing registered Button, Card, and Hero ready for authors to drag onto the canvas](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am31c9b748e2839e37/53a63d2f90e6efc0575e1806/component-palette-expanded.png)

## Step 3: Add the Canvas Route and Template Preview Route

Canvas route, where Studio previews sections:

```
// app/canvas/page.tsx (Next.js App Router)
"use client";
import { StudioCanvas } from "@contentstack/studio-react";

export default function CanvasRoute() {
  return <StudioCanvas />;
}
```

Template preview route, a single catch-all that handles every URL (blog posts, product pages, contact, etc.):

```
// app/[[...slug]]/page.tsx  — Next.js App Router catch-all (CSR variant)
// One file handles every URL; Studio's CDA query resolves which template matches each URL.
"use client";
import { usePathname } from "next/navigation";
import { useCompositionData, StudioComponent } from "@contentstack/studio-react";

export default function StudioRoute() {
  const pathname = usePathname();
  const { specOptions, isLoading, error } = useCompositionData({ url: pathname });

  if (isLoading) return <Loading />;
  if (error)     return <ErrorState message={error.message} />;
  if (!specOptions?.spec) return <NotFound />;
  return <StudioComponent specOptions={specOptions} />;
}
```

No per-template routes (e.g. app/blog/\[slug\]/page.tsx) are needed; the catch-all covers all of them. Add opt-out routes (/api/\*, /admin/\*) ahead of the catch-all only if you need them.

Detail: [Section preview route](/docs/studio/section-preview-route) · [Template preview routes](/docs/studio/template-preview-routes) · [CSR vs. SSR](/docs/studio/choosing-between-csr-and-ssr-rendering) for SSR / RSC variants.

## Step 4: Create the Studio Project

In Studio:

1.  **\+ New Project** → name it (e.g. "Marketing Site") → connect to your stack
2.  **Settings → General**, note the Project ID
3.  **Settings → Configuration**:
4.  Environment: production (or your dev environment)
5.  Language: English - United States (en-us)
6.  Canvas URL: /canvas
7.  Save

Update studioSdk.init with the now-known content type:

```
studioSdk.init({
  stackSdk: stack,
  contentTypeUid: "compositions",   // the CT Studio created in your stack
});
```

Restart your dev server.

Detail: [Create a Studio project](/docs/studio/create-a-studio-project)

![Project Settings panel showing environment, language, and Canvas URL configured before authoring begins](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcca84cd9f8fcf310/5ba9a26d2e50619f95f8e2da/project-settings.png)

## Step 5: Build Your First Linked Template

In Studio:

![Templates list: the entry point for creating a new linked template against a content type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb51b9929ae9fbfd4/b79d3bf01cea2e05b78db40c/templates-list.png)

1.  **Compositions → Templates tab → + New Template**
2.  Pick the blog\_post content type when prompted
3.  Studio opens the canvas, a blank composition connected to blog\_post
4.  From the **Components** palette (left), drag your **Hero** onto the canvas
5.  Select the Hero on the canvas
6.  Right panel → **Data** tab → click the binding chip next to headline → bind to template.title
7.  Same for cover → template.featured\_image (or whatever your CT calls it)
8.  Drop a **Card** below the Hero, bind its title → template.title, body → template.body, image → template.featured\_image
9.  **Save**

Studio writes the composition record to your stack.

![Connected template canvas: Hero and Card bound to blog_post fields, ready to render any entry of that type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab6d10d23adef72/dc57e93fd9b8ef53461589f9/connected-template-canvas.png)

## Step 6: Verify the Render

Open http://localhost:3000/blog/<a-real-entry-slug> in your browser.

You should see: - Your Hero rendered with the entry's title and featured image - Your Card below with the entry's title, body, and image

Pick a different blog\_post entry; the page re-renders with that entry's data. **One template, many pages, all your components.**

![Data picker — binding component props directly to blog_post entry fields like template.title and template.featured_image](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb8c15138c8f9f63/64e5182b28c45217cbcdca5d/data-picker.png)

## Step 7: Hand Off to Authors

The team can now:

-   Open Studio → Compositions → the template you built
-   Edit any prop value inline
-   Swap components, add sections, reorder
-   Save + Deploy through your publishing workflow

Visitors see the changes when the composition publishes, at the same URL, same SEO, same routing.

## What You Have Now

Two routes, three SDK calls, one template, your components in the palette. Authors can build pages for every existing blog\_post entry without you writing more code.

To extend: - Repeat the template flow for other content types (product, author, …) - Build reusable sections (e.g. footer, CTA strip); see [Card grid with slots](/docs/studio/card-grid-with-slots) - Add per-template-instance overrides for hero copy; see [Overrides without forking](/docs/studio/per-page-component-overrides-without-forking)

## Speed It Up with an LLM

```
curl -fsSL https://www.contentstack.com/docs/studio/install.sh | sh
```

Then:

> "Install Studio in this project" "Register my Button, Card, and Hero components" "Add the canvas route and a template route for /blog/\[slug\]"

Each step has a dedicated skill that walks the same flow.

## See Also

-   [Bring your own components](/docs/studio/bring-your-own-components)
-   [Templates](/docs/studio/choosing-between-templates-and-sections)
-   [Verify end to end](/docs/studio/verify-your-studio-setup-end-to-end)
