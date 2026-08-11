---
title: "Copy and Paste from Figma to Studio"
description: "Learn how to paste a Figma frame directly into the Studio canvas and convert Figma nodes into a composition tree without writing any code."
url: /studio/copy-and-paste-from-figma-to-studio
---

# Copy and Paste from Figma to Studio

## Copy and Paste from Figma to Studio

Studio supports pasting a Figma frame directly into the canvas. Studio converts the Figma nodes into a composition tree; no code generated, no developer involved.

Useful for: - One-off marketing pages where the design lives in Figma - Prototyping a layout that matches a design before deciding which components it'll use - Quickly turning a design system frame into a Studio composition

## The Flow

1.  Open the Figma file. Select the frame you want to bring in.
2.  Copy it: ⌘C / Ctrl+C.
3.  Open Studio. Open or create a composition. Click into the canvas.
4.  Paste: ⌘V / Ctrl+V.
5.  Studio creates a composition tree mirroring the Figma layout.

After paste, the result is a regular composition. You can edit it, drop in registered components, bind to data, save, deploy, same as any other.

## What Translates

| Figma element | Becomes in Studio |
| --- | --- |
| Frame | A Box container with the frame's layout (flex / grid / auto-layout) |
| Text layer | A Text component with the typography styles preserved |
| Rectangle / shape | A Box with the fill / border styles |
| Image | An Image component with the image asset embedded |
| Group | A Box wrapper |
| Auto-layout | Translated to flex with matching gap, direction, alignment |

## What doesn't (cleanly) translate

-   **Interactive prototypes:** Figma's click-through arrows have no equivalent
-   **Custom plugins or smart components:** only the rendered result comes across
-   **Variants / component sets:** the selected variant is what you get; not a switchable component
-   **Constraints and responsiveness:** bring across as best-effort fixed layouts

For these cases, the [generate components](/docs/studio/generate-components-from-figma) path is a better fit. It produces real React components instead of one-time composition trees.

## When to copy/paste vs. when to generate

| Use copy/paste when… | Use generate when… |
| --- | --- |
| The Figma frame is a one-off layout for one page | The Figma file defines reusable design-system components |
| You want a quick visual import to start editing | You want first-class React components for the long haul |
| The result is for a single composition | You want to register the components and reuse them across many compositions |
| You're a designer or content author | You're a developer maintaining the component library |

## After paste: next steps

The pasted result is a tree of Boxes, Text components, and Images. Common follow-ups:

-   **Replace generic Box wrappers with your registered components.** A "Hero" frame from Figma becomes Box+Text+Image after paste; manually swap the Box for your Hero component to get back to your design system.
-   **Bind text to entry data.** Paste preserves the literal text from Figma; bind those to the connected entry's fields so the page renders real content.
-   **Refine spacing using Studio's Design panel.** Figma's pixel-precision sometimes generates verbose CSS; review padding and gap values and consolidate them to your spacing scale.

## Figma file conventions that help

If your design team uses these patterns in Figma, paste-to-Studio produces cleaner results:

-   **Use Auto-layout** instead of free-positioning. Auto-layout translates cleanly to flex/grid, reducing manual fixes after import. Free-positioned layers arrive as absolute-positioned elements that won't reflow.
-   **Name layers meaningfully.** "Hero", "Card", "CTA"; names carry through to the Layers panel in Studio, making it easier to navigate and replace Box wrappers with your registered components.
-   **Keep frames at reasonable sizes.** 1440 × N for desktop, 375 × N for mobile. Studio uses the frame's width as the artboard size, so a frame wider than typical screen widths produces an oversized canvas.

## Related: the Studio Figma Plugin

Copy/paste uses the **Copy to Studio** button from the Studio Figma Plugin, which puts composition JSON on your clipboard. The plugin has three additional outputs for deeper workflows. See [Figma: generate components](/docs/studio/generate-components-from-figma) for the full plugin breakdown, including CLI setup and Auto Map. For this copy/paste flow, no developer CLI setup is needed; install the plugin from the Figma Marketplace and authorize it against your Contentstack account.

| Plugin output | What it produces | When you'd use it instead |
| --- | --- | --- |
| **Copy to Studio** | Composition JSON for one Figma frame | This page's flow: one-off layout into one composition |
| **Copy CLI Command** | A ready-to-run csdx studio:component:add invocation | When you want real, committable React components instead of a pasted tree |
| **Import Design Tokens** | Studio-side token registration | When the Figma file's color/typography/spacing tokens should flow into Studio's token system |
| **Copy CSS Variables** | --token-name: value declarations | When the project consumes tokens through plain CSS rather than Studio's token system |

## Next

-   [Figma: generate components](/docs/studio/generate-components-from-figma): when you need real React components instead of a pasted tree
-   [Component schema](/docs/studio/component-schema-prop-types): what each pasted Box / Text / Image becomes in terms of editable props
