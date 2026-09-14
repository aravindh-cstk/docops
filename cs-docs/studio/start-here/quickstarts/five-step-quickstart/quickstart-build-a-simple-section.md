---
title: "Quickstart 3: Build a Simple Section and Expose Props"
description: "Build a Hero Section bound to a Group field on your content type. Expose one prop so each Template can override it per-instance."
url: /studio/quickstart-build-a-simple-section
---

# Quickstart 3: Build a Simple Section and Expose Props

## Quickstart 3: Build a Simple Section + Expose Props

Build a **Hero Section** bound to a Group field on your content type. Expose one prop so each Template can override it per-instance.

**Time:** ~10 minutes. **Prereq:** [Quickstart 2: Register a component](/docs/studio/quickstart-register-a-component-with-a-slot). **Next:** [Build a List Section](/docs/studio/quickstart-build-a-list-section).

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blte3d3e645862b1807/6a6b93c3724440e94b83ea3d/03-quickstart-simple-section.mp4).

**Watch the walkthrough (7:26)**: it also covers the section canvas route, filling a Section Slot from a Template, and exposing a prop. [See all six videos](/docs/studio/studio-video-walkthroughs).

![Hero Strip Simple Section open in the Studio canvas. Left panel shows the Sections palette. The main canvas area shows the empty section placeholder. The right panel is ready to accept property overrides once components are dropped.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am7505900fa882139e/56cb4cec485c84bfdec1fe1a/quickstart-hero-strip-canvas.png)

## What you'll have at the end

-   A hero\_section Section composition in Studio.
-   Bound to a hero Group field on the blog\_post content type (fields: headline, subhead, cover\_image).
-   One prop (headline) exposed so each Template that drops this Section can rename it.
-   Two Templates using the same Section, showing different headlines.

## Prerequisites

-   \[ \] Quickstart 2 done: a <Hero> component is registered. If you don't have one:

    ```
    export function Hero({ headline, subhead, cover_image }: {
      headline: string; subhead: string; cover_image: string;
    }) {
      return (
        <section style={{ backgroundImage: `url(${cover_image})` }}>
          <h1>{headline}</h1>
          <p>{subhead}</p>
        </section>
      );
    }

    registerComponent({
      type: "hero", component: Hero, displayName: "Hero",
      props: {
        headline:    { type: "string" },
        subhead:     { type: "string" },
        cover_image: { type: "imageurl" },
      },
    });
    ```

-   \[ \] A blog\_post content type with a hero Group field (subfields: headline: text, subhead: text, cover\_image: file). Create it in Contentstack under Content Types if missing.
-   \[ \] A section canvas route: a dedicated /canvas route mounting <StudioCanvas />, plus a matching Canvas URL in project Settings. Set up in the [one-time step below](#before-you-build-set-up-the-section-canvas-route-one-time) if you haven't already.

## What "Simple Section" means

A **Simple Section** has NO Repeater at its root. It renders one shape, one time. Bound to:

-   One content type, or
-   One Global Field, or
-   One Group field, or
-   One block from a Modular Block, or
-   One target CT of a Reference field.

Iterating collections is a **List Section**: Quickstart 4.

## Before you build: set up the section canvas route (one-time)

A Section has no URL of its own, so the wildcard route from Quickstart 1 (<StudioUrlRenderer />) can't render it for editing. Sections author on a **dedicated canvas route** that mounts <StudioCanvas />. You only do this once. Every Section you ever build reuses it. It has two halves that must agree:

### a. Add the dedicated route in your app

Add a /canvas route **alongside** the wildcard route in src/App.tsx. Never replace the wildcard, and never point the wildcard at <StudioCanvas />:

```
import { Route, Routes } from "react-router";
import { StudioCanvas } from "@contentstack/studio-react";
import "./contentstack/initialize";
import { StudioUrlRenderer } from "./contentstack/StudioRenderer";

function App() {
  return (
    <Routes>
      <Route path="/canvas" element={<StudioCanvas />} />
      <Route path="*" element={<StudioUrlRenderer />} />
    </Routes>
  );
}

export default App;
```

<StudioCanvas /> is editing-only. It renders null outside Studio, so visiting http://localhost:3010/canvas directly shows a blank page. That's expected. It only comes alive inside Studio's iframe.

### b. Point Studio at that route

In Studio, open your project and go to **Settings**, then **Configuration**:

-   Set **Canvas URL** to /canvas (must match the route path above, exactly).
-   For **Environment** and **Language**, pick the ones whose Base URL resolves to your running app (the origin you set in [Prerequisites, Environment Base URL](/docs/studio/review-prerequisites-before-you-start#from-your-contentstack)).

If the path in Settings and the path in your router don't match, the section canvas loads blank or errors with MISSING\_CANVAS\_URL.

## Steps (in Studio's canvas)

### 1\. Create the Section

In Studio, open your project, go to **Compositions**, select the **Sections** tab, and click **\+ New Section**.

![Studio Compositions page: Sections tab active in the top bar. The "+ New Section" button visible in the top right. Three existing sections listed in the table (Card Grid, Featured Card, Hero Strip).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amfa0864f626a2dc78/a803a996f1f70da701b96f5c/step-sections-tab-new-btn.png)

In the modal that opens:

-   **Title:** Hero Section.
-   **Composable UID:** hero\_section.
-   **Link to schema:** pick the blog\_post content type, then set **Selected field:** to hero (the Group). This tells Studio "this Section renders one hero group's shape."

Save.

### 2\. Drop the Hero component + inspect its bindings

In the left palette, open **Registered Components**, then drag <Hero> onto the canvas.

Because the Section is linked to hero, Studio **auto-binds** the component's props to the matching fields in the Group:

-   Hero.headline maps to hero.headline (bound to the entry's title field in the shot below)
-   Hero.subhead maps to hero.subhead (bound to excerpt)
-   Hero.cover\_image maps to hero.cover\_image

Click the Hero on the canvas (or in the Layers tab), and the right panel switches to Properties and lists every prop with its current binding:

![Hero Strip Section canvas. Hero component selected. Left panel is on Layers tab with Hero highlighted. Center canvas renders the Hero with real entry data. Right panel Properties tab shows every Hero prop with its binding chip: Headline bound to Title, Subhead bound to Excerpt, Cover image with file/upload/URL options, CTA label, CTA link, Actions slot.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am849a74281de9bc84/9fb278b275737d892d198fb7/step-hero-selected-bindings.png)

No manual binding needed. The field names matched, so Studio wired them. Full detail on how auto-binding works: [Binding to CMS](/docs/studio/bind-a-section-to-cms-data).

### 3\. Save + Expose a prop

Click **Save**. The Expose Props modal opens.

![Expose Props modal open. Heading "Expose Props", explanation "Select which atomic component props should be exposed at the composed component level, and provide descriptive names for them". Below, a HERO section header, three columns (Expose toggle / Component Prop / Exposed As), and rows for Headline, Subhead, Cover image, CTA label, CTA link. Each row has a toggle to expose it and an input to rename what Template authors see.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amad5ecfd3329c0cd2/2c05269f8f5a312b526011ce/step-expose-props-modal.png)

The modal lists every component prop as a row with a toggle:

-   **Expose ON** means the Template that drops this Section can override this prop per instance.
-   **Expose OFF** means the value is locked at whatever the Section author set. Templates can't touch it.

Toggle headline **ON**. Rename it to something Template-authors will recognize (Card Title or Hero headline) in the "Exposed As" column. Leave subhead and cover\_image off (they'll always come from the entry's hero group).

Save.

### 4\. Drop the Section on two Templates

Skip if you don't have Templates yet. This ties into Quickstart 5.

If you do have Templates:

-   Open Template A and drop hero\_section. The right panel shows one field, **Hero headline**, with the default value from the entry.
-   Type "Welcome to the blog", then save.
-   Open Template B and drop the same hero\_section. The right panel shows **Hero headline** with the entry's default.
-   Type "Featured posts", then save.

Same Section. Two Templates. Different headlines. subhead and cover\_image still come from each entry's hero group.

## Verify

-   \[ \] Opening the Section shows your app's canvas in the iframe (not a blank page or MISSING\_CANVAS\_URL), confirms the /canvas route + Canvas URL setting agree.
-   \[ \] Hero Section appears in the Sections tab of your project's Compositions list.
-   \[ \] Its linked\_schemas in the entry JSON is \[{ content\_type\_uid: "blog\_post", selected\_field: "hero" }\].
-   \[ \] headline is in ui.metadata.sectionExposedProps (the exposed-props declaration).
-   \[ \] Dropping the Section on a Template shows exactly one editable field in the right panel.

## What happened

-   **Linked schema** told Studio which slice of the entry this Section renders: the hero group.
-   **Auto-binding** matched the component's prop names to the group's field names. You didn't wire manually.
-   **Expose Props** turned one internal prop into a Template-editable value. Everything else stays locked as the Section author decided.

Together: a Section = a compound component you built in Studio. Exposed Props are its props. You haven't met Section Slots yet. That's the children, covered in Quickstart 4.

## Next

**[Quickstart 4: Build a List Section with Section Slots](/docs/studio/quickstart-build-a-list-section)** (~15 min).

## Full-detail references

-   [Sections chapter](/docs/studio/sections-guide)
-   [Binding to CMS](/docs/studio/bind-a-section-to-cms-data): linked schema + auto-binding
-   [Expose Section Props](/docs/studio/expose-section-props): modal, labels, edge cases
-   [Section = compound component](/docs/studio/section-slots#sections-are-compound-components-section-slots-exposed-props-give-them-the-shape)
