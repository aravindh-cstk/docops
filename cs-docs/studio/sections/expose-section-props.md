---
title: "Expose Section Props"
description: "Learn how to expose individual component props from a section so template authors can override specific values like text, labels, and colors per page instance."
url: /studio/expose-section-props
---

# Expose Section Props

## Expose Section Props

Sometimes you don't want to expose a whole region (that's what [Section Slots](/docs/studio/section-slots) are for): you just want to let the template author tweak **a single value** inside the section per instance. In a Featured Product Card, for example: the product title, the CTA button label, the background color.

**Expose as Section Prop** is exactly that. The section author picks individual component props and marks them as exposed, with a friendly label.

## How It Works

The Expose Props modal opens when you **Save** a section that has component prop candidates. Pick which props to expose, rename them to something page composers will understand, and save.

![Expose Props modal grouped by component type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1be3f9d7e0bef753/f895aecfa80cfa14295d9fdb/expose-props-modal.png)

For each prop, you set three things:

| Column | What it does |
| --- | --- |
| **Expose** | Toggle on to surface this prop |
| **Component Prop** | The internal prop name (read-only) |
| **Exposed As** | The label page composers see; rename to something clear like "Headline text" |

### What **Expose ON** actually does

Toggling Expose ON makes that specific component prop visible to the template author when they drop this section onto a template. It also makes the prop editable per instance: until you turn the toggle on, the prop is invisible outside the section and whatever value you set inside the section is what the template author gets, with no override possible.

Two things to know:

-   **Exposure is per component instance, not per prop name.** If your section has three Heroes, each Hero's Headline prop is exposed independently: turning one on doesn't turn the others on. You decide for each which is variable per template instance.
-   **The prop's type is preserved.** A string prop becomes a text input in the override panel; an image prop becomes the image picker; an href prop becomes the link picker. The template author gets the right control for the prop, automatically.

When the template author drops the section, every exposed prop appears with whatever value you set inside the section as its **starting value**. They can keep that, type a different value, or bind to template data: exactly as if they were authoring a fresh component on the template.

In the Card Grid section's Save flow, only the Header's Text prop is toggled exposed (renamed to **"Card Title"**); the Heading Level, the Repeater's Items, and the Card's Title are left internal. Templates that drop Card Grid see _Card Title_ in their right panel: nothing else from the section is overridable.

### What **Exposed As** actually does

The text you type into "Exposed As" is the label the template author sees in the override panel when the section is dropped onto their template. The original prop name might mean nothing to a template author: "headline" inside a Hero is obvious to you, the section author, but in a list of exposed props on a section called "Featured Card", "headline" is ambiguous (which heading? the card title? the section title?). Rename it to something the template author can act on: "Hero headline text", "Card title", "CTA label on hero".

Two practical rules:

-   **Labels must be distinct.** Two exposed props in the same section can't have the same label. If you try, Studio disables the Save button until you rename one. This matters most when you have repeated components: a section with three Heroes all exposing "Headline" forces you to rename: "Top hero headline", "Mid hero headline", "Bottom hero headline", so the template author can tell them apart.
-   **Labels affect only the override UI.** Renaming "Exposed As" doesn't break anything. Existing template instances that already override this prop keep their override values: only the label they see changes.

## What Page Composers See

When the section is dropped on a template, every exposed prop appears as a labelled input (using the **Exposed As** label) in the section instance's right-panel Properties. The input is **the standard prop-binding control**: the same one the section author used inside the section.

The template author can:

-   **Type a literal value** specific to this instance: overrides what the section author set
-   **Pick a field from the template's connected entry** so the value tracks the current entry: for example, "Card title" on the homepage shows entry.tagline, on the blog index it shows a fixed string, on a campaign page it pulls from the campaign entry's headline
-   **Pick a field from a repeater item** if the section sits inside a Repeater on the template: each iteration's card then shows that iteration's data
-   **Drop the same section twice with different overrides**: two Featured Cards on the same page, each with its own exposed-prop choices

Whatever you bound the prop to inside the section becomes the **starting value** the template author sees. They keep it as-is, or they swap it. No fork, no copy: the same section composition, different values per instance.

Internal props (the ones you left toggled OFF) stay locked at whatever you set: template authors can't see them and can't change them. That's the whole point: you choose what's negotiable per instance and what's locked.

## When to Use Which

| Need | Reach for |
| --- | --- |
| Different **value** per page (text, label, color, alt, …) | **Expose Section Prop** |
| Different **component subtree** per page (image hero vs. video hero) | **Section Slot** |
| Different **list data** per page (which entries the section iterates) | **Linked schema** + auto-binding |

A well-designed section often uses all three:

-   **Linked schema** for the data shape
-   **Slots** for the variable regions
-   **Exposed props** for the small labels and flags that need per-template-instance tweaks

## Next

-   [Section Slots](/docs/studio/section-slots)
-   [Linked schema](/docs/studio/link-content-types-with-linked-schema)
-   [Recipe: overrides without forking](/docs/studio/per-page-component-overrides-without-forking)
