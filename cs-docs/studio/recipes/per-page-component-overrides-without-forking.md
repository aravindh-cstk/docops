---
title: "Per-Page Component Overrides without Forking"
description: "Learn how to expose section props in Contentstack Studio to deliver per-page content overrides across multiple landing pages without forking a section."
url: /studio/per-page-component-overrides-without-forking
uid: blt52719ecdd84b2454
---

# Per-Page Component Overrides without Forking

## Per-Page Component Overrides without Forking

A common request: "We have a hero section. Marketing wants the same hero design on five landing pages — but each page needs its own headline, subhead, and CTA copy."

The wrong solution is to fork the section five times. The right one is **Expose Section Props** — surface the prop values that should be tunable, leave the structure locked.

This recipe walks the full flow.

## The setup

A landing\_hero section that visually looks identical on every page but exposes per-instance content overrides.

![landing_hero section — hero Box containing Heading, Text, Button, and a background Image, with the first three exposed as Headline, Subhead, and CTA label/link props.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2af18656791b75b7/51a53b4c2b6c6d9fba3b20f5/recipes-overrides-landing-hero-structure.svg)

The hero is the same on every page. Only the four exposed props differ.

## Step 1 — Build the section

1.  **Compositions → Sections tab → + New Section** → name it landing\_hero
2.  On the canvas, drop a **Box** at the root and style it (background, height, padding, alignment)
3.  Inside the Box:
4.  **Heading** component, set text to "Your headline here"
5.  **Text** component, set to "A short subhead that explains the value"
6.  **Button** component, set label to "Get started", href to #
7.  **Image** component for the background overlay (with placeholder src)

8.  **Save**.


Studio opens the **Expose Props** modal because the section has component props that could be exposed.

![Save modal prompting to expose props after authoring a section, the entry point to the override flow](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9f1e9098065c938c/a04622e80ba866cb10f25147/save-modal-with-expose-props.png)

## Step 2 — Expose the right props

The modal lists every component prop it found, grouped by component type. Toggle the props you want template authors to override:

| Group | Prop | Expose? | Exposed As |
| --- | --- | --- | --- |
| HEADING | text | ✅ | Headline |
| TEXT | text | ✅ | Subhead |
| BUTTON | label | ✅ | CTA label |
| BUTTON | href | ✅ | CTA link |
| IMAGE | src | ❌ | (leave off — every page uses the same background) |

The **Exposed As** column is where you rename the prop to something page composers will understand. "Headline" is more useful than "text".

Click **Save** in the Expose Props modal.

![Expose Props modal listing component props grouped by type with author-friendly Exposed As labels](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1be3f9d7e0bef753/f895aecfa80cfa14295d9fdb/expose-props-modal.png)

Once exposed, the section author is done. The hero section itself is now reusable across any template — visual layout fixed, four overridable knobs surfaced. Here's the section's own canvas (a hero with a heading, body, and an empty CTA Section Slot ready for the template to fill):

![Landing hero section on its own canvas — heading, body, and Section Slot for the CTA visible; this is the canvas the section author saved](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am39e1bd55e6ea064e/d650dbd14817e6f2673b05fd/landing-hero-section-canvas.png)

## Step 3 — Use the section on the first landing page

1.  **Templates tab → + New Template** → pick your landing-page content type
2.  Drop the landing\_hero section onto the canvas
3.  Select the section instance
4.  In the right panel, you'll now see the four exposed inputs:

![Section instance Settings panel showing four exposed inputs — Headline, Subhead, CTA label, CTA link — each rendered as an empty text input.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambafe9cec08590028/cf8a146bc22099c15e189bb7/recipes-overrides-settings-panel.svg)

Fill in the values for this landing page:

```
Headline:    "Launch your campaign in days, not months"
Subhead:     "Studio gives marketing a fast lane — composed pages,
              your brand, no developer cycle."
CTA label:   "See how it works"
CTA link:    /demo
```

1.  **Save** the template.

![Connected template canvas showing the section dropped in with exposed inputs available in the right panel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab6d10d23adef72/dc57e93fd9b8ef53461589f9/connected-template-canvas.png)

When you select the dropped section instance, the Properties panel shows the exposed inputs the section author surfaced — here a Card Grid section dropped on a Blog Post template exposes a Card Title input pre-populated with "Related Blogs", which this template instance overrides per-entry:

![Section instance selected on template canvas — Properties panel on the right shows exposed input "Card Title: Related Blogs" + "Showing data from: Blog Post" context indicator](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am47200abcc7b5c0f7/ba0ac67fcfd7b68adeb6700f/section-instance-exposed-props.png)

## Step 4 — Use the same section on the second landing page

1.  **\+ New Template** → pick the same content type → name it after your second campaign
2.  Drop landing\_hero again
3.  Fill the exposed inputs with **different** content:

```
Headline:    "Built for global brands"
Subhead:     "Run multilingual pages from one place. Studio handles
              localisation; your team handles content."
CTA label:   "Book a demo"
CTA link:    /book-demo
```

Same section, same visual structure, same components, same design tokens — completely different content. **One section, many pages, zero forks.**

![Spring 2026 landing template canvas demonstrating the same section reused with different per-instance copy](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am58eef4675e814081/a7501a8ecf25288441b7b021/spring-2026-landing-canvas.png)

## Step 5 — Verify the per-instance behaviour

On the landing-hero section's canvas (not the template), change the **Heading** component's font size in the Design panel.

Reload both landing-page templates. Both heroes now use the new font size — the structure update propagates to every instance.

But the headline text on each landing page is preserved — that's per-instance override, untouched by the section update.

## What you can and can't do this way

**Can:** - Change a value per instance (string, number, choice, href, image URL, anything that's a simple value) - Have different exposed values across many instances - Bind an exposed prop to page entry data (e.g. Headline → template.headline) - Rename the exposed labels later without losing the per-instance values

**Can't (use [Section Slots](/docs/studio/section-slots) instead):** - Drop a different component subtree per instance — that needs a slot - Add or remove components per instance — also a slot - Change the structure of the hero per instance — restructure the section, not override

**Can't (use [linked schemas](/docs/studio/link-content-types-with-linked-schema) instead):** - Change which data source the hero binds to per instance — that's a binding decision driven by the linked schema

## When to expose, when to slot, when to bind

| Need | Tool |
| --- | --- |
| Per-page text / label / image / link | **Expose Section Prop** |
| Per-page component subtree | **Section Slot** |
| Per-page data binding (which entry / which list) | **Linked schema** + auto-binding |

A well-designed enterprise section uses **all three**:

-   Linked schema for the data shape ("this section binds to a card-list shape")
-   Slots for variable regions ("template authors drop the card component into here")
-   Exposed props for small per-instance tweaks ("override the section heading on this template")

## Speed it up with an LLM

```
curl -fsSL {{STUDIO_DOCS_BASE_URL}}/install.sh | sh
```

Then ask: _"In the landing\_hero section, expose the Heading text, Text content, and Button label/href as section props with author-friendly labels."_

## See also

-   [Expose Section Props](/docs/studio/expose-section-props) — the concept page
-   [Section Slots](/docs/studio/section-slots) — when you need a placeholder, not a value
-   [Linked schema](/docs/studio/link-content-types-with-linked-schema) — when binding source varies per page
