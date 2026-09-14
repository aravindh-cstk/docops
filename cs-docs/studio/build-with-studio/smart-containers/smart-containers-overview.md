---
title: "Smart Containers Overview"
description: "Smart Containers are the three primitives that turn a static layout into a data-driven one."
url: /studio/smart-containers-overview
uid: blt578101e1717c9e3a
---

# Smart Containers Overview

## Smart Containers

Smart Containers are the three primitives that turn a static layout into a data-driven one. Use them when you need to render many items, switch designs based on the item, or carve out an editable placeholder in an otherwise-fixed section.

They live together under the **Smart Containers** category in the component palette, and they're meant to be combined: most real-world list UI on Studio is one of these three nested inside another.

Your browser can't play this video. [Download it instead](https://assets.contentstack.io/v3/assets/blt54a810a25f9de55a/blta12f42e43e98b8b6/6a6b93c64d864f52430e9a1f/04-quickstart-list-section.mp4).

**See it built (5:31)**: three cards assembled the repetitive way first, then replaced with a Repeater bound to a list, then Condition Blocks added so each block-type renders its own design. Covers Repeaters and Condition Blocks. For Section Slots, read [Section Slots](/docs/studio/section-slots). [See all six videos](/docs/studio/studio-video-walkthroughs).

## The three primitives

| Primitive | One-line summary |
| --- | --- |
| [Repeater](/docs/studio/create-repeatable-content-with-repeaters) | Render the same shape N times, once per item in a bound list |
| [Condition Block](/docs/studio/control-visibility-with-condition-blocks) | Render which design to show, based on the type of the current item |
| [Section Slot](/docs/studio/section-slots) | Carve a placeholder in a designed section that the next composer fills |

### Repeater: "render N times"

A Repeater binds to a list-shaped field (a Group with multiple: true, a Modular Block list, a multi-reference field, or any other array source the project exposes) and renders whatever you drop inside it once per item. It produces no DOM of its own (display: contents), so it's selectable only from the Layers tab. See [Repeaters](/docs/studio/create-repeatable-content-with-repeaters).

### Condition Block: "pick which design"

A Condition Block is a switch inside the canvas: when the current item matches the configured type, render its contents. Otherwise, skip. It pairs naturally with a Repeater iterating over heterogeneous data, because each iteration may need a different design. Like the Repeater, it has no DOM of its own and is selected from Layers. See [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks).

### Section Slot: "carve a placeholder"

A Section Slot is a named opening inside a section the section author has already designed. The section provides the structure (frame, grid row, "item template" position inside a Repeater). The slot is the region left open for the template author to fill. Slots are chainable and recursive: a slot can hold a slotful section whose slots hold more sections. See [Section Slots](/docs/studio/section-slots).

## How they compose

Smart Containers are rarely used alone. The three patterns below cover most data-driven UI on Studio.

### Repeater of Modular Blocks with a Condition Block inside

When a list field is a **Modular Block** with multiple block types, each block has its own schema. The Repeater iterates the list. A Condition Block inside it picks the design per block type.

![Repeater bound to body_blocks with Condition Blocks for hero_block, cta_block, and quote_block rendering Hero, CTA Strip, and Pull Quote](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am20d7f06b258fb09e/41d9b6dd771f3d40453d825e/containers-overview-modular-blocks-tree.png)

See [Modular Blocks](/docs/studio/rendering-modular-block-fields) for the full walkthrough.

### Repeater of References with a Condition Block inside

When a list field is a **multi-content-type Reference** (e.g. "Related Posts" can point to Blog Posts or Case Studies), the same pattern applies: Repeater iterates, Condition Block branches by content type.

![Repeater bound to related_posts with Condition Blocks for Blog Post and Case Study rendering Blog Card and Case Study Card](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am0bb3536c95b188db/ef4101fdfc9a1adf0c810e4f/containers-overview-references-tree.png)

See [Reference fields](/docs/studio/rendering-reference-fields) for the full walkthrough.

### Section + Section Slot inside a Repeater

When a section is designed as a "card frame" with a slot in the middle, dropping that section inside a Repeater produces one card per item, and the template author fills the slot with whatever component the page calls for. The slot's contents are evaluated once per iteration, so they receive the current item's binding scope automatically.

![Repeater bound to featured_items contains a Card Frame section with a Section Slot labelled Body for the template author to fill](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambb5b16a78f2f9d02/18d0275d5b8772681494f20c/containers-overview-section-slot-in-repeater.png)

This is how you ship a section that's structurally locked but content-flexible per item.

## Where Smart Containers live

Smart Containers work on every canvas type:

-   **Templates**: directly bind to the connected content type's fields
-   **Sections**: bind to fields declared on the section's linked schema (auto-binding picks the right scope per drop site)

Inside a Repeater or Condition Block, the Data Picker exposes an additional root labelled **"Repeater Data"**, the current iteration item. Bindings through this root render as repeater.<field> and resolve to whichever item the Repeater is currently rendering at runtime. The page-level root (template.\*, "Linked Template Entry") stays available too, so an iteration card can still bind one prop to a per-item field and another to a page-wide field (e.g. template.brand\_color). The two roots are distinct: the SDK encodes them as RepeaterBindingValue (with a repeaterUID discriminator) and TemplateBindingValue respectively.

That's why the same section can be dropped at the root of a page or inside a Repeater and bind correctly in both places: Studio adds the right picker root based on the drop site, and bindings written against repeater.\* resolve to whatever iteration scope the nearest enclosing Repeater provides.

## Selecting Smart Containers on the canvas

Repeaters and Condition Blocks render no DOM of their own. Clicking the canvas where one "is" actually clicks the child inside it.

To select a Repeater or Condition Block, switch the left panel to the **Layers tab** and click the row there. Only then does the right panel show the container's own Configuration and Properties. Section Slots, by contrast, do render a visible drop region on the canvas and can be selected directly.

## Authoring with Preview Mode

Two of the three primitives (**Repeaters** and **Condition Blocks**) expose a per-instance **Preview Mode** toggle in the right panel's Configuration group. The toggle controls only the canvas rendering at authoring time. It does **not** affect deployed/published output. At a visitor's runtime the Repeater always iterates and the Condition Block always evaluates.

| Container | Preview Mode **off** (default, design view) | Preview Mode **on** (preview view) |
| --- | --- | --- |
| **Repeater** | Renders the inner slot **once**, shows the single child design you're authoring, with no live data overlay. Good for laying out the card. | Fetches the bound list and renders the child **N times** (once per real item) using the previewed entry's actual values. Good for verifying the layout under real content variation. |
| **Condition Block** | Children **always** render on the canvas regardless of whether the condition matches the current iteration. You don't lose the design when the previewed entry doesn't satisfy the condition. | Evaluates the When Condition against the current iteration item. Children render **only** when truthy. Use this to verify the conditional fires for the rows you expect. |
| **Section Slot** | (no Preview Mode, Section Slots always render their filled or default contents) | - |

The toggle is **per-instance**: flip the outer Repeater into preview while leaving inner Repeaters in design mode for focused authoring. Each Repeater or Condition Block stores its own state via metadata.mode = "design" | "preview" on the node.

> **Authoring aid only.** Preview Mode never changes what gets published. It's the canvas pretending to be runtime, so you can see how the iteration and conditional logic will behave before you deploy. Toggle it on near the end of a layout pass, off again when you go back to authoring the single-card design.

See [Repeaters: Configuration](/docs/studio/create-repeatable-content-with-repeaters#configuration) and [Condition Blocks: When and Preview Mode](/docs/studio/control-visibility-with-condition-blocks#the-right-panel-when-and-preview-mode) for the dedicated treatments.

## Pages in this chapter

-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): bind to a list field, render the inner shape per item
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): switch designs based on item type
-   [Modular Blocks](/docs/studio/rendering-modular-block-fields): Repeater + Condition recipe for heterogeneous block lists
-   [Reference fields](/docs/studio/rendering-reference-fields): Repeater + Condition recipe for multi-content-type references
-   [Section Slots](/docs/studio/section-slots): carve an editable placeholder in a designed section

## See also

-   [Sections overview](/docs/studio/build-and-use-sections): where Smart Containers live
-   [Templates](/docs/studio/templates-guide): Smart Containers also work directly on template canvases
-   [Recipe: card grid with slots](/docs/studio/card-grid-with-slots)
