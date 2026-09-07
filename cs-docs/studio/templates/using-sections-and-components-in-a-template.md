---
title: "Using Sections and Components in a Template"
description: "Learn how to compose templates in Contentstack Studio by dragging sections and components onto the canvas, binding data, and managing save and deploy actions."
url: /studio/using-sections-and-components-in-a-template
uid: bltd262b1a6341c83c6
---

# Using Sections and Components in a Template

## Using Sections and Components in a Template

Open a template on the canvas, and you compose it by dragging from the left palette into the center.

![Studio canvas with palette, canvas, and right panel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab6d10d23adef72/dc57e93fd9b8ef53461589f9/connected-template-canvas.png)

## The canvas, in plain English

-   **Left panel** — what you can drop. Components, sections, layers, search.
-   **Center** — the canvas. Drop targets are highlighted as you drag.
-   **Right panel** — properties of whatever you selected. Tabs: **Settings** (component properties and data bindings) and **Design** (styles). In page/component-authoring contexts an extra **Data** or **Component Data** tab appears for page- or component-level data.
-   **Top bar** — composition title, content type chip, preview entry, URL editor, view toggles, **Save** and **Deploy**.

## What you can drop

The left palette has seven main categories (Advanced is hidden when empty):

![Palette with Smart Containers expanded](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am31c9b748e2839e37/53a63d2f90e6efc0575e1806/component-palette-expanded.png)

| Category | What's in it |
| --- | --- |
| **Basic** | Text, heading, button, link primitives |
| **Media** | Image, video, asset placeholders |
| **Container** | Box, Row, Column — layout primitives |
| **Smart Containers** | Repeater, Condition Block, Section Slot |
| **Advanced** | Advanced built-in components (hidden when empty) |
| **Registered Components** | **Your** registered React components |
| **HTML Elements** | Raw HTML primitives |

On a template, sections live in the **Layers** panel or can be dragged in from the compositions list.

### Full template assembled from sections

Here's a Blog Post template assembled by drag-dropping two section compositions — Hero Strip (filled with a Button in its section slot) and Card Grid (with its Card Title exposed prop overridden to _"Related Blogs"_). The right panel shows the section's exposed prop ready for further editing.

![Blog Post template canvas: Hero Strip section at top with "Welcome to Studio" headline bound to entry.hero, a "Get started" CTA filled into the Hero's section-slot. Card Grid section below renders 2 iteration cards from related_posts. Right Properties panel shows "Card Title: Related Blogs" — the template's override of the section's exposed prop.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd8588a05bcd56605/fc0d950c8781e477d783832d/template-blog-post-full-stack.png)

This single template demonstrates the full architectural chain: - **Registered Components** (Hero, Card) declared in code - **Sections** built from those components (Hero Strip, Card Grid) - **Template** consuming the sections via drag-drop + filling section slots + overriding exposed props

Every authored decision — what's static, what's linked-schema, what's iterated, what's overridable — lives in this one canvas.

## Binding a component to entry data

> **Canonical:** [CMS binding — how components pull data](/docs/studio/bind-cms-content-to-studio-components). This section is a quick walkthrough of the UI flow; the mechanics live on the canonical page.

When you select a component on the canvas, the right panel switches to its properties.

![Three-step flow — click the component, open the Data tab, then type a literal or click the binding chip to open the Data Picker](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb95c3c25dc86758f/ecf39b65c26ec552b96ab4b4/templates-bind-component-flow.svg)

The same flow works for your registered components — each prop you declared becomes bindable in the same Data Picker.

## Dropping a section onto a template

When you drop a section onto a template, Studio uses the section's **linked schema** to decide which field on your page's content type it should bind to.

-   **One match** → bound automatically.
-   **Multiple matches** → bound to one, with a dropdown in the section's right-panel settings to switch.
-   **No match** → drops unbound; you can pick a field manually if a compatible one exists.

See [Auto-binding](/docs/studio/auto-binding-by-drop-location) for details.

## Save vs Deploy

| Button | What it does |
| --- | --- |
| **Save** | Persists your changes to Contentstack. Doesn't push to a live environment. |
| **Deploy** | Moves the composition through your publishing workflow to a target environment. |

Saving a **section** has an extra step — Studio may open the **Expose Props** modal so you can decide which component props on the section should be tunable per-template-instance. See [Expose Section Props](/docs/studio/expose-section-props).

## Common pitfalls

-   **"No element is currently selected" in the right panel** — click a component on the canvas first.
-   **A bound value renders empty** — the connected entry doesn't have that field set. Switch the Preview Entry from the canvas toolbar (the ⇄ icon) to an entry that has the field populated.
-   **A registered component drops but renders blank** — it may be missing default data. Have your developer add sensible defaults; see [Component default data](/docs/studio/set-component-default-data).

## Next

-   Sections
-   [Auto-binding](/docs/studio/auto-binding-by-drop-location)
-   [Section Slots](/docs/studio/section-slots)
-   [Register your components](/docs/studio/register-components)
