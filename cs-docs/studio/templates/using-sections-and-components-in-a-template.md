---
title: "Using Sections and Components in a Template"
description: "Learn how to compose templates in Contentstack Studio by dragging sections and components onto the canvas, binding data, and managing save and deploy actions."
url: /studio/using-sections-and-components-in-a-template
---

# Using Sections and Components in a Template

## Using Sections and Components in a Template

Open a template on the canvas, and you compose it by dragging from the left palette into the center.

![Studio canvas with palette, canvas, and right panel](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amdab6d10d23adef72/dc57e93fd9b8ef53461589f9/connected-template-canvas.png)

## The Canvas, in Plain English

-   **Left panel**: what you can drop. Components, sections, layers, search.
-   **Center**: the canvas. Drop targets are highlighted as you drag.
-   **Right panel**: properties of whatever you selected. It has two standard tabs:
-   **Settings**: component properties and data bindings
-   **Design**: styles
-   In page- or component-authoring contexts, an extra **Data** or **Component Data** tab appears for page- or component-level data.
-   **Top bar**: composition title, content type chip, preview entry, URL editor, view toggles, **Save** and **Deploy**.

Clicking the swap icon (⇌) next to **PREVIEW ENTRY:** opens the **Select Entries** modal, a searchable list of entries for the connected content type, with Title, Modified At, Publish Status, and URL columns:

![Select Entries modal: Blog Post content type selected in dropdown, three entries listed — "Welcome to Studio: visua…", "Why composition beats ha…", "Designing for speed: a m…" — each with Modified At, Publish Status (preview), and URL. Cancel and Add Selected Entries buttons at bottom.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9fe0ba173f952340/b54a86a6d29a3b18fca17e40/preview-entry-picker.png)

## What You Can Drop

The left palette has seven main categories (Advanced is hidden when empty):

![Palette with Smart Containers expanded](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am31c9b748e2839e37/53a63d2f90e6efc0575e1806/component-palette-expanded.png)

| Category | What's in it |
| --- | --- |
| **Basic** | Text, heading, button, link primitives |
| **Media** | Image, video, asset placeholders |
| **Container** | Box, Row, Column: layout primitives |
| **Smart Containers** | Repeater, Condition Block, Section Slot |
| **Advanced** | Advanced built-in components (hidden when empty) |
| **Registered Components** | **Your** registered React components |
| **HTML Elements** | Raw HTML primitives |

On a template, sections live in the **Layers** panel or can be dragged in from the compositions list (the panel that shows all authored sections and templates available in your project).

### Full template assembled from sections

Here's a Blog Post template assembled by drag-dropping two section compositions: Hero Strip (filled with a Button in its section slot) and Card Grid (with its Card Title exposed prop overridden to _"Related Blogs"_). The right panel shows the section's exposed prop ready for further editing.

![Blog Post template canvas: Hero Strip section at top with "Welcome to Studio" headline bound to entry.hero, a "Get started" CTA filled into the Hero's section-slot. Card Grid section below renders 2 iteration cards from related_posts. Right Properties panel shows "Card Title: Related Blogs" — the template's override of the section's exposed prop.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd8588a05bcd56605/fc0d950c8781e477d783832d/template-blog-post-full-stack.png)

This single template demonstrates the full architectural chain: - **Registered Components** (Hero, Card) declared in code - **Sections** built from those components (Hero Strip, Card Grid) - **Template** consuming the sections via drag-drop + filling section slots + overriding exposed props

Every authored decision, what's static, what's linked-schema, what's iterated, what's overridable, lives in this one canvas.

## Binding a Component to Entry Data

When you select a component on the canvas, the right panel switches to its properties.

![Three-step flow — click the component, open the Data tab, then type a literal or click the binding chip to open the Data Picker](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame979ac2a8ca28444/60bd3dfe4159aa2378d29f7a/templates-bind-component-flow.png)

The same flow works for your registered components: each prop you declared becomes bindable in the same Data Picker.

## Dropping a Section onto a Template

When you drop a section onto a template, Studio uses the section's **linked schema** to decide which field on your page's content type it should bind to.

-   **One match**: bound automatically.
-   **Multiple matches**: bound to one, with a dropdown in the section's right-panel settings to switch.
-   **No match**: drops unbound; you can pick a field manually if a compatible one exists.

See [Auto-binding](/docs/studio/auto-binding-by-drop-location) for details.

## Save vs. Deploy

| Button | What it does |
| --- | --- |
| **Save** | Persists your changes to Contentstack. Doesn't push to a live environment. |
| **Deploy** | Moves the composition through your publishing workflow to a target environment. |

Saving a **section** has an extra step: Studio may open the **Expose Props** modal so you can decide which component props on the section should be tunable per-template-instance. See [Expose Section Props](/docs/studio/expose-section-props).

## Common Pitfalls

| Pitfall | Why it bites | Fix |
| --- | --- | --- |
| **"No element is currently selected" in the right panel** | Nothing is focused on the canvas, so the panel has nothing to show. | Click a component on the canvas first. |
| **A bound value renders empty** | The connected entry doesn't have that field set. | Switch the Preview Entry from the canvas toolbar (the swap icon, labeled with two opposing arrows) to an entry that has the field populated. |
| **A registered component drops but renders blank** | It may be missing default data. | Have your developer add sensible defaults; see [Component default data](/docs/studio/set-component-default-data). |

## Next

-   [Sections](/docs/studio/build-and-use-sections)
-   [Auto-binding](/docs/studio/auto-binding-by-drop-location)
-   [Section Slots](/docs/studio/section-slots)
-   [Register your components](/docs/studio/register-components)
