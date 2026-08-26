---
title: "Apply Studio Development Best Practices"
description: "A consolidated reference of patterns that work and patterns to avoid in Contentstack Studio, covering compositions, components, sections, bindings, design, and performance."
url: /studio/apply-studio-development-best-practices
uid: blt1f6aede4a478e9f8
---

# Apply Studio Development Best Practices

## Apply Studio Development Best Practices

A consolidated reference of patterns that work and patterns to avoid. Each section is brief: anti-patterns and remedies, no narrative. Look up the relevant section when you're in the weeds, not as a read-through.

## Compositions

-   **Templates over Freeform** for content-driven pages. Use Freeform only for genuinely one-off pages; if you'd build the same Freeform composition twice, model a content type instead.
-   **Save often, deploy deliberately.** Save is a draft milestone. Deploy is a release event.
-   **One template per content type, not per content variant.** Use bindings and component variants instead of forking.
-   **Don't bypass the URL pattern editor.** Edit URLs in Studio, not directly in stack records: the editor validates and re-derives URL metadata.

## Components

-   **Eager registerComponent by default.** Use registerLazyComponent only when bundle size becomes a real concern (large component library, heavy dependencies).
-   **Register at app boot.** A registration that runs inside a route component is too late for Studio's canvas iframe.
-   **Set sensible defaultValue on every prop.** Empty defaults make dropped components render blank, authors think Studio is broken.
-   **Use placeholder copy, not real copy** for default text values. "Your headline here" is better than "Buy our amazing product today".
-   **One type value per component, never reused.** Composition records reference components by type. Renaming breaks every composition that referenced the old name.
-   **Use the right prop type.** Specifically: string (not "text"), href (not "link"), imageurl (not "image"). Studio's exact prop types are: string, boolean, number, choice, href, imageurl, datestring, array, object, slot, json\_rte, any.
-   **Prefer choice over free string for known-finite options.** size: choice \["small", "medium", "large"\] is clearer than size: string.
-   **defaultValue, not default.** The prop config field is defaultValue: a common mistake.

## Sections

-   **Anchor sections on Global Fields when possible.** Same shape everywhere, no positional remap edge cases.
-   **Use linked schemas to bind by structure, not by name.** Multi-schema sections work across content types without forking.
-   **Section Slots when authors should drop something. Exposed Props when they should change something.** Same goal (per-instance variation), different mechanisms.
-   **Sections own iteration; templates own page-level layout.** A card\_grid section owns the grid + Repeater. The template that uses it owns where in the page the grid sits.
-   **Don't fork sections for per-template-instance text overrides.** Use [Expose Section Props](/docs/studio/expose-section-props).

## Repeaters and Condition Blocks

-   **Repeater + Condition Block for Modular Block lists:** one Repeater iterating the list, one Condition Block per block type.
-   **Don't manually loop inside a component.** If your component takes an array prop and .map()s internally, you're hiding iteration from Studio's binding system. Use a Repeater instead.
-   **template.\* inside a Repeater refers to the iteration item**, not the page entry. Use dataSources.page.\* if you genuinely need the outer scope inside the Repeater body.
-   **Add a fallback Condition Block** at the end of a Modular Block Repeater to catch new block types; otherwise new types render as nothing.

## CMS Binding

-   **Bind first, customise later.** Drop a component, bind every prop that's content, then style. Builds in the data dependency from the start.
-   **Prefer simple paths.** template.title is cleaner than template.featured.metadata.computed\_title. Deep paths break when authors change CT structure.
-   **Document which fields a section expects.** Add a description on the section composition so other authors know what shape to bind it to.
-   **Pinned Data is per Freeform composition.** Don't try to share pinned entries across compositions; pin them per page.

## Design and Styling

-   **Register tokens before components.** Components reference tokens via CSS variables; tokens must exist first.
-   **Narrow styleSections per component.** Showing every CSS section for every component bloats the panel. A button doesn't need overflow controls.
-   **Set token-level / class-level / arbitrary early.** Switching mid-project means re-styling everything. Decide before authors start composing.
-   **Use bindings for varying styles per entry.** Don't fork sections to vary background colour per page; bind the colour to an entry field instead.
-   **Define breakpoints once via registerBreakpoints.** Don't rely on authors typing media-query CSS.

## Content Structure

-   **One Global Field, many content types.** Embed Global Fields wherever a shape repeats. Linked-schema matching prefers Global Fields.
-   **Use modular blocks for "different things in a list".** Use repeating groups for "same thing N times".
-   **Slug fields drive URL patterns.** Make sure every linked CT has a URL-shaped field (url, slug, etc.) and use it in the template's URL pattern.
-   **Plan localization upfront.** Add locales in Contentstack before authoring; switching mid-project requires reflowing content.

## Project Organization

-   **One Studio project per stack environment.** Keep stage / production cleanly separated.
-   **Share component libraries across projects via a published package.** See [Publishing the library](/docs/studio/publishing-the-component-library).
-   **Version your component library.** Treat the package version as the schema version; breaking changes (renamed type, removed prop) deserve a major bump.
-   **Document linked schemas at the section level.** Every reusable section's description should say what shape it expects.

## Security and Performance

-   **.env.local for credentials, never source files.** Stack API Key is public; Delivery Token and Preview Token are secret.
-   **Lazy-register heavy components.** Chart libraries, video players, rich-text editors; defer the chunk until needed.
-   **Use SSR or SSG for visitor pages.** Pure CSR is fine for the canvas route, weak for SEO on real pages.
-   **Wire onEntryChange to refetch.** Without it, Live Preview won't update the page when authors edit.
-   **searchQuery is required on the server.** Don't skip it; Studio iframe overrides won't apply.
-   **<StudioComponent /> for templates, <StudioCanvas /> for the canvas route.** They're not interchangeable.

## Figma Workflow

-   **Sync existing components to the Figma plugin first.** Designers see what's available before designing.
-   **Generate from Figma into your project.** Use the [Studio CLI](/docs/studio/studio-cli) or [Figma generate](/docs/studio/generate-components-from-figma) skill for reusable components.
-   **Use copy/paste only for one-off layouts.** It produces composition trees, not React components.
-   **Name Figma layers meaningfully.** Layer names carry into Studio's Layers tab and into generated component names.

## Layers Panel

-   **Name layers when the structure isn't obvious.** A Box named "Hero container" beats the fourth Box from the top.
-   **Keep nesting shallow.** Five levels of nested Boxes is a smell; refactor into a section.
-   **Use Layers to debug binding scope.** Click a layer to see its scope in the right panel.

## What NOT to Do

A short list of anti-patterns:

-   **Don't disable Live Preview** to "simplify" Studio. The canvas iframe relies on Live Preview's pipe; disabling it breaks the editor.
-   **Don't put <StudioCanvas /> on multiple routes.** One canvas route per project. Anything else fragments preview behaviour.
-   **Don't rely on defaultValue for required data.** Defaults are author guidance, not runtime guarantees. If a prop must have a value, validate at the component level.
-   **Don't use any props except for prototypes.** They bypass type checking and form controls; authors get a raw JSON editor.
-   **Don't bind every prop.** Some props are styling, layout, or design intent; keep those static. Bind content, not configuration.
-   **Don't fork sections for cosmetic differences.** Expose props, use slots, or vary the design via tokens, but keep the section count low.

## Summary Table

| Topic | Quick rule |
| --- | --- |
| Bring your own components | Eager registerComponent default; lazy only for heavy bundles |
| Section design | Slots for content drops, exposed props for value overrides, linked schemas for data shape |
| Lists | Repeater for same-shape; Repeater + Condition Block for mixed |
| Bindings | Simple paths beat deep ones; template.\* is scope-aware |
| Styling | Tokens > classes > arbitrary, in that preference order |
| Project hygiene | One project per stack environment; component library as a versioned package |
| Performance | Lazy-load heavy components; SSR for visitor pages; wire onEntryChange |
| Two SDK components | <StudioCanvas /> for canvas route, <StudioComponent /> for templates |

## See Also

The relevant concept pages for each section above. The summary here is a digest, when you need the depth, follow the cross-links in each section.
