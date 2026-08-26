---
title: "Pin Specific Entries to a Component"
description: "Learn how to pin one or more CMS entries to a Freeform template so layout components can bind directly to their fields."
url: /studio/pin-specific-entries-to-a-component
uid: bltd6464dfea80b6d89
---

# Pin Specific Entries to a Component

## Pin Specific Entries to a Component

Pin one or more entries to a Freeform template so the layout can bind to entry fields. Use this when your template assembles content from multiple entries, say a landing template featuring two products, a testimonial, and a CTA from a campaign entry.

## Why Pinning Matters

A Connected template owns the relationship "this template renders one entry of this content type". Bindings inside the layout naturally reach template.<field> on that entry. Simple.

A Freeform template has no such entry. So when the layout wants to render specific content from the CMS, say a campaign's headline, a featured product's image, a testimonial's quote, you need a way to bring those entries onto the template **explicitly**. That's what Pinned Entries does.

## Where to Pin

Inside a Freeform template on the canvas:

```
Right panel  →  Data tab  →  Additional Entry Data section
```

The Data tab itself only appears when [**Enable Freeform Feature**](/docs/studio/freeform-templates) is on in Project Configuration; without Freeform, the right panel collapses to **Settings only**. See [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data) for the full structure (Additional Entry Data + Queries + External Data sections).

## What You Can Do with a Pinned Entry

-   Bind any of its fields as a component prop: heading text, image source, CTA URL, etc.
-   Supply it as a Repeater source when it has list-shaped fields
-   Replace the pin with another entry of the same content type; bindings keep working

## Authoring Flow

1.  Open the Freeform template on the canvas
2.  Right panel to **Data** tab to **Additional Entry Data** section
3.  Add a pin: search the stack for the entry, confirm
4.  The pinned entry appears in the list with its title and content type
5.  Select any component on the canvas, then right panel **Data** tab, then bind a prop, then pick from the pinned entry's fields in the Data Picker

Step 3 opens a modal entry picker: a content-type filter at the top and a searchable, sortable table of candidate entries below it.

![Pinned Entries selection modal, content type filter at the top (here "Testimonial"), columns for Title / Modified At / Publish Status / URL, multi-select checkboxes, Cancel / Add Selected Entries actions at the bottom](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am231d31c6b48b1eb0/a6f147e777828c545dfc30b5/pinned-entries.png)

## Common Patterns

-   **One "template entry" pin** that holds metadata (title, hero image, CTA link) + several decorative entries (featured products, testimonials). The layout becomes a small composition over them.
-   **A campaign entry pin** for shared branding (colors, headline tone) + Pinned Queries for the dynamic content lists.
-   **A hero entry pin** + Pinned Queries for related-content lists below.

## Next

-   [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries)
-   [The Data tab](/docs/studio/page-data-tab-for-entry-data-queries-and-external-data)
-   [Freeform templates](/docs/studio/freeform-templates)
