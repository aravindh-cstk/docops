---
title: "How Studio, Live Preview, and Visual Editor Work Together"
description: "Learn how Live Preview, Visual Editor, and Studio relate — one rendering layer with two editing modes, split by structure versus content."
url: /studio/how-studio-live-preview-and-visual-editor-work-together
---

# How Studio, Live Preview, and Visual Editor Work Together

## How Studio, Live Preview, and Visual Editor Work Together

**Note:** Studio is currently available as part of an Early Access Program and may not be accessible to all users. For more information or to request access, contact our [support](mailto:support@contentstack.com) team.

## The Big Picture

These three are not three interchangeable tools you pick between. They are one rendering layer with two editing modes stacked on top of it, divided by what they edit:

![studio_visual_editor_live_preview_layers.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am9015eb0f39f8a825/371c15aebd9ea98c10108bf2/studio_visual_editor_live_preview_layers.png)

The key relationship to understand: Live Preview is the foundation. Visual Editor is built on top of Live Preview and requires it to be set up. Studio sits one level higher and produces pages that both Live Preview and Visual Editor can work with automatically.

## What Each One Does

### Live Preview — the foundation (rendering)

-   **Purpose:** Lets you see content changes in real time, exactly as they appear on your live site, before publishing.
-   **Who uses it:** Everyone. It is the shared preview surface. Developers configure it once; everyone else simply sees through it.
-   **What it actually is:** Real-time rendering of unpublished content. The Live Preview SDK connects the CMS to your website over the postMessage API, fetches draft content from the Preview Service using a Preview Token, and renders it inside an iframe in the CMS interface.

**Note:** Live Preview is not an editor you switch into. It is the view that Visual Editor and Studio both operate within.

### Visual Editor — content editing

-   **Purpose:** A no-code, in-context way to update the content on a page—swap text, change an image, update a link—directly on the rendered preview.
-   **Who uses it:** Content creators and marketers, for day-to-day authoring.
-   **What it actually does:** Adds click-to-edit behavior on top of Live Preview. Each editable element carries a Live Edit Tag identifying which CMS field powers it; clicking it opens that field for editing in place.
-   **Depends on:** Live Preview. Visual Editor cannot work unless Live Preview is configured for your site.

### Studio — structure building

-   **Purpose:** Design and assemble the structure and layout of a page or template—which components appear, where they sit, and which CMS fields they bind to.
-   **Who uses it:** Developers (register components, apply logic), designers (enforce design tokens and brand), and marketers (assemble pages within guardrails).
-   **What it actually does:** A component-based canvas where you drag and drop components, build repeater and condition blocks, bind component properties to Contentstack entry fields, and apply layout and design tokens.
-   **Boundary:** Studio owns the skeleton. It does not do field-by-field content authoring—that is Visual Editor's job.

## Studio vs. Visual Editor: Why They Look So Similar

The most common source of confusion: both Studio and Visual Editor show a visual rendering of your page with clickable elements, so on screen they look nearly identical. The difference is what you can change:

| If You Want To… | You Are Changing… | Use |
| --- | --- | --- |
| Add a new section, component, or promo banner | Structure | Studio |
| Change spacing, layout, or background color | Structure/design | Studio |
| Create a brand-new landing-page template | Structure | Studio |
| Bind a component to a different CMS field | Structure (data binding) | Studio |
| Fix a typo in a headline | Content | Visual Editor |
| Swap a product image for a sale | Content | Visual Editor |
| Update a link or button label | Content | Visual Editor |

**Quick rule of thumb:** Changing where things are or what components exist means you use Studio. Changing the words or images inside them means you use Visual Editor.

And Live Preview? It is never the answer to "which tool do I edit in." It is the preview you are already looking through while you work in either of the other two.

## Tool Comparison at a Glance

| Tool | Layer | Edits | Primary User | Depends On |
| --- | --- | --- | --- | --- |
| Studio | Structure | Layout, components, data binding | Developers, designers, marketers | — |
| Visual Editor | Content | Field values (text, images, links) | Content creators, marketers | Live Preview |
| Live Preview | Rendering (foundation) | Nothing; it renders | Everyone (configured by developers) | — |

## How the Pieces Connect: Live Edit Tags

The mechanism that ties all three together is the Live Edit Tag.

A Live Edit Tag is an attribute Studio attaches to a rendered element that records which CMS field powers it (its content type, entry, locale, and field path). When you bind a component to a field in Studio, Studio emits this tag automatically.

Those same tags are what Live Preview and Visual Editor read to make an element click-to-edit. This is the whole pipeline:

1.  You bind a component to a field in Studio, and Studio emits a Live Edit Tag on it.
2.  Your site renders through Live Preview, so the tag is present in the page.
3.  An editor opens Visual Editor, which reads the tag and lets them click that element to edit its content.

So you do the binding once, in Studio, and the element becomes editable everywhere downstream.

**Note:** Default and AI-generated Studio components get Live Edit Tags automatically. Custom React components must add the tag themselves, or they render but are not click-to-editable in Visual Editor.

## The Integrated Workflow

A page's lifecycle, from structure to content:

### 1\. Build the structure in Studio

You add or import components (default, Figma-synced, or custom), define layout and spacing, and apply design tokens.

### 2\. Connect to the CMS

You link the composition to a content type and map each component property to a Contentstack entry field. Studio then emits the Live Edit Tags and wires up Live Preview automatically, so the rendered page knows which field powers which element.

### 3\. Author content in Visual Editor

Content managers click elements on the rendered page to edit text and images in place, switch between localization and personalization variants, and review changes live—all without touching the layout, which stays locked to what Studio defined.

## Prerequisites

For the integrated workflow above to function, the following must already be in place:

-   Live Preview is set up for your website (the foundation for both editing modes).
-   A Preview Token and an iframe-compatible site (to avoid CORS errors).
-   Compatible SDK versions (see the Live Preview and Visual Editor setup guides for current minimums).
-   A Studio project linked to your stack, running a React app (CSR or SSR).

## Best Practices

-   **Define guardrails in Studio.** Lock layout dimensions so content editors cannot accidentally alter the design while authoring.
-   **Set structure once, iterate content often.** Use Studio for structural change; use Visual Editor for the frequent, low-risk text and image tweaks.
-   **Sync designs early.** Use the Figma-to-Studio plugin so components match your design system from the start.
-   **Tag your custom components.** Ensure developers add Live Edit Tags to custom React components, or they are not editable in Visual Editor.

## Summary

-   **Live Preview** is the foundation. It renders unpublished content in real time. Both editing modes sit on it, and it requires no other tool.
-   **Visual Editor** (formerly Visual Builder) is content editing, built on top of Live Preview and requiring it. It edits field values via Live Edit Tags.
-   **Studio** is a structure building, one level up. It owns layout and data binding, and emits the Live Edit Tags that make the rendered page editable downstream.

Together: Studio defines the page, Live Preview renders it, and Visual Editor edits its content, one continuous pipeline, not three competing tools.
