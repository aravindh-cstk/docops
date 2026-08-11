---
title: "Bind CMS Content to Studio Components"
description: "Learn how Studio components get their data from Contentstack through prop binding, the Data Picker, scope-aware Repeaters, and automatic Visual Editor integration."
url: /studio/bind-cms-content-to-studio-components
---

# Bind CMS Content to Studio Components

## Bind CMS Content to Studio Components

**Binding** is how Studio components get their data from Contentstack instead of from hard-coded values. Click a prop in the right panel, pick a field from the data picker, and the component now renders that field's value for whichever entry is the current preview.

This page consolidates binding across linked templates, sections, and Freeform templates. The concept is the same in all three contexts; the available data sources differ.

## What Binding Does

![Two side-by-side cards comparing a hard-coded prop and a bound prop. The Hard-coded card shows { title: 'Hello' } rendering as the literal string 'Hello' for every entry. The Bound card shows { title: template.title } resolving at render time to the current entry's title field — different value per entry.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amefb1870a2d702bb6/008a78a6e9b1bc102b4b6191/composition-hard-coded-vs-bound.png)

A bound prop is dynamic: the value comes from the connected entry, a pinned entry, a pinned query, or one of several other sources. Different preview entries produce different rendered values. One template, many pages.

## Static Value vs. Bound: Same Prop, Different Source

Every prop on every component has the same two halves in the right panel: a **direct input** and a **binding chip**. Use the input to type a literal value; use the chip to bind the prop to a CMS field. You can switch a prop between the two whenever you want: the component doesn't know or care which source produced its value, so there's no refactor cost.

What changes when you switch is **where the value comes from at render time**:

| Where you pointed the prop | What the visitor sees |
| --- | --- |
| Typed value (the direct input) | Exactly what you typed: same string for every page, every entry, every render |
| Connected entry field (template.\* on a Connected template) | The current entry's value: different per render because the entry differs per URL |
| Pinned entry's field (Freeform templates) | The pinned entry's value: same across renders until you re-pin |
| Pinned query result field (Freeform templates) | The query's matched record: refreshes as the underlying content changes |
| Repeater iteration item | The current item's value: different for every iteration the Repeater renders |
| Reference field on the current entry | The referenced entry's value |

Same component, same prop, different visitor experience depending on which source you picked.

### What this lets you do

-   **Mix per prop on the same component.** A Hero can have a typed ctaLabel: "Get started" and a bound headline: template.title at the same time. Two props, two sources, one instance.
-   **Re-bind without losing layout.** Switching a prop from a typed value to a CMS field is one click on the binding chip, pick a field, save. The component's position, neighbours, and other props don't move. There's no rebuild.
-   **Use the same flow for [Expose Props](/docs/studio/expose-section-props) overrides.** When a section author exposes a prop, the template author sees that prop in the section instance's right panel with the same direct input + binding chip: they can type a literal, pick a template field, or pick an outer scope's field, all from the same control.

## Auto-enables Visual Editor Integration

If you're using Visual Editor, binding automatically generates markup for inline editing: no separate wiring. The binding mapper auto-emits the data-cslp tags that Contentstack's Live Preview / Visual Editor use to detect "this DOM node is bound to this CMS field." You never write data-cslp in your component code: Studio does it for you at render time, derived from the binding map you authored in the canvas.

| What you author in Studio | What ships at render time | Why it matters |
| --- | --- | --- |
| Hero.headline → template.title (binding in the canvas) | <h1 data-cslp="entry\_uid.title">{title}</h1> (output of <StudioComponent />) | The marketer sees a hover-highlight on the headline in Live Preview and can click-to-edit the title inline: no extra wiring |
| Card.image → template.featured\_image | <img data-cslp="entry\_uid.featured\_image" …> | Same: image-field hover-highlight, click-to-replace via Visual Editor, all automatic |
| Repeater of references with per-iteration bindings | data-cslp carries the iteration's entry UID + field path | Inline editing follows iteration scope; the right entry's field is opened when an author clicks |

So **building a Section in Studio simultaneously builds the Visual Editor integration**: no separate wiring step, no data-cslp prop threading through components, no hand-maintained cslp-util calls. The two concerns share one source of truth: the binding map.

**Why this matters for teams already using Visual Editor.** A pre-Studio app needs developers to plumb data-cslp tags through every component that renders a CMS field, which is the bulk of the work to make Visual Editor light up. With Studio, the prop-to-field map IS the source of truth for both Studio rendering AND data-cslp emission. **Studio doesn't replace Visual Editor: it auto-enables it.** Every Section / Template you build in Studio gets inline-editing for free; nothing in your existing VE setup gets removed or re-wired.

See [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app) for the full coexistence model.

## Where Binding Happens

Every registered component prop has two halves in the right panel:

1.  **A direct input:** type a value, pick from a dropdown, choose a date, etc.
2.  **A binding chip:** click it to open the Data Picker; pick a source field instead

Switch between them per prop. Some props are bound; others use literal values. Authors decide per drop.

## The Data Picker

Open it by clicking a prop's binding chip. The picker shows tabs for each data source available in the current context.

![Data Picker showing the Blogs content-type schema tree — Title, URL, Excerpt, Featured Image (with nested fields), Primary Author, Co-Authors, Content Tier, Related Blogs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb8c15138c8f9f63/64e5182b28c45217cbcdca5d/data-picker.png)

The example above is the picker opened on a section linked to the Blogs content type. The tree mirrors the CT's schema: top-level scalar fields (Title, URL, Excerpt) at one level, group fields like Featured Image expanded to show their children (Title, URL, UID, Permanent URL, Filename, Description), reference fields like Primary Author and Co-Authors as their own rows, and Related Blogs (a self-reference) at the bottom. Click any field to bind the prop to it.

### Data sources by context

| Context | Sources you'll see |
| --- | --- |
| **Connected template** | template.\* (connected entry), dataSources.contentstack.\*, query data sources |
| **Section** | template.\* (the section's linked schema scope), plus all of the above |
| **Freeform template** | The Freeform-specific data sources: see [Freeform overview](/docs/studio/freeform-templates) for how data gets onto a Freeform template (it has no connected entry to provide template.\*) |
| **Inside a Repeater** | The Repeater's iteration item as template.\*, with the outer scope accessible via dataSources.page.\* |
| **Inside a Condition Block** | The narrowed iteration item: template.\* knows which block / CT it's inside |
| **Component Default Data** (any context, when a component is selected) | Whatever you pass via the data prop on <StudioComponent specOptions={...} data={...} />. This is the canonical hook for **bringing external data into a composition** (live pricing, geo, feature flags, weather, anything outside Contentstack). See [Component Default Data: runtime data injection](/docs/studio/set-component-default-data#part-2--runtime-component-default-data-the-data-prop-on-studiocomponent-). |

The picker only shows what's actually available: if a prop is inside a Repeater inside a Section, you'll see the Repeater's iteration scope first; if you specifically need the outer page's data, you can switch to dataSources.page.\*. The "Component Default Data" root only appears when a component is selected (it's scoped per-component-instance).

## Step-by-step: Binding a Component

For a Heading component with a text prop on a blog\_post template:

1.  Drop the Heading onto the canvas
2.  Click the Heading to select it
3.  Right panel: **Data** tab
4.  Next to the text prop, click the binding chip (link icon)
5.  The Data Picker opens, showing the blog\_post content type's fields
6.  Pick title
7.  The Heading on the canvas re-renders with the current entry's title

The right panel now shows text: template.title (or similar: UI varies). Switching the preview entry updates the heading's rendered text.

## Type Compatibility

Studio's Data Picker filters fields by type. A string prop only shows fields that resolve to a string (text, single-line text, URL, etc.). An imageurl prop only shows file fields with image MIME types.

If the picker shows no fields, the prop's type doesn't match anything on the available data sources. Either:

-   Pick a different field that does match
-   Change the component's prop type if you control the registration
-   Add a transformation in your component code (but Studio's binding stays string-to-string at the SDK level)

## Binding Inside Repeaters

When you drop a Repeater bound to template.items\[\] and put a component inside it, template.\* inside the Repeater refers to the **current iteration item**, not the page entry.

![Layers tree — Page (blog_post) contains a Repeater bound to template.related_posts, with Heading and Text inside bound to repeater.title and repeater.excerpt](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am93b4f8a65cb7fe7b/6075e15a550edb2f4e6b928c/composition-binding-inside-repeater-tree.png)

This is **scope-aware binding**. Studio's picker knows which scope you're in and shows the right fields: template.\* inside the page root (the connected entry), repeater.\* inside a Repeater (the iteration item, labelled "Repeater Data" in the picker). **When a component is inside a Repeater, template.\* always refers to the current item.**

## Binding Inside Condition Blocks

Inside a Condition Block sitting inside a Repeater, repeater.\* narrows to the matched block type or content type. The picker shows only fields that exist on that specific type.

![Layers tree — Repeater bound to template.body_blocks; Condition Block matches when block.type equals hero; Heading inside binds to template.headline](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4ce1d94e99ff5211/16f2e7d5f1d462644ea74ef5/composition-binding-condition-block-tree.png)

If you reorder a Condition Block such that it no longer matches what you expect, the bindings inside may render empty until the condition matches again.

## Design-side Binding

Studio also lets you bind **design properties** (background colors, image sources, padding values) to CMS data. The mechanism is the same: click the binding chip next to the design property in the Design panel and pick a field.

Useful for:

-   Dynamic theming per entry (each entry's brand\_color drives the section's background)
-   Image-driven layouts where the asset comes from an entry field
-   Spacing scales that vary per content type

See [Design Panel UI](/docs/studio/style-components-with-the-design-panel) for the design controls themselves.

## Linked Compositions: Dynamic Templates

The most powerful use of binding: one Connected template renders every entry of the connected content type. Bindings inside the template resolve against the current entry; the entry changes per URL.

![Connected blog_post template wired to /blog/{{entry.url}} with Heading, Image, Text, and a Repeater of Cards bound to template fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8971810b233bdcde/3ed442bf3486cd330bd42374/composition-connected-template-tree.png)

Visit /blog/ai-101: all bindings resolve against the "AI 101" entry. Visit /blog/llm-economics: all bindings resolve against the "LLM Economics" entry.

One template, N rendered pages, your components.

## Personalization and Localization

Binding works natively with Contentstack's localization and Personalize:

-   **Localization**: passing locale: "fr" to useCompositionData fetches the French version of every bound field: Studio doesn't need a separate binding flow
-   **Personalize variants**: variantAlias does the same for variant-specific content
-   **A/B testing**: variant aliases drive the rendered version per visitor

The bindings stay the same; the data behind them switches. See [Install the Studio SDK: Fetch a composition](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with-usecompositiondata) for the locale / variantAlias options.

**Worked example: locale switching.** A Hero component has headline bound to template.title. The composition was built on an English blog\_post entry with title: "Getting started". When the app calls useCompositionData({ locale: "fr" }), Contentstack fetches the French variant of the same entry (e.g. title: "Premiers pas"). The binding template.title resolves to the French string: the Hero renders "Premiers pas" with no change to the composition itself.

## Static vs. Bound: When to Use Which

| Situation | Use static | Use binding |
| --- | --- | --- |
| Brand name in a footer (never changes) | ✅ |  |
| Header text on a blog post (varies per post) |  | ✅ |
| Button size variant ("large", "medium") | ✅ | unless varies per content |
| Hero image (varies per page) |  | ✅ |
| Decorative SVG icon (fixed for the design) | ✅ |  |
| Product price (varies per product) |  | ✅ |

A typical Connected template has 60–80% bound props (content that varies) and 20–40% static (styling, layout, design intent). Sections lean further to bound when they're content-shaped, further to static when they're purely decorative.

## Common Pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| Binding renders empty | The bound field isn't populated on the current preview entry | Switch the preview entry (⇄ icon on the canvas toolbar) to one with data |
| Data Picker doesn't show the field I want | Field type doesn't match the prop type | Pick a compatible field or rebind to a different prop |
| Binding works in preview but renders empty in production | The content isn't published in the production environment | Publish the entry to the target environment |
| Binding inside a Repeater resolves to the page-level value | The scope wasn't the Repeater item | Re-open the Data Picker: it'll start at the Repeater scope by default; you may have switched to dataSources.page.\* |
| Two bindings on the same component conflict | One is in a parent scope, one in a child scope, both referencing template.\* | Different scopes resolve to different items. Use dataSources.page.\* to disambiguate when needed. |

## Best Practices

**Bind early, customise later.** Drop a component, bind every prop that's content, then start tweaking styles. This builds in the data dependency from the start.

**Prefer simple paths.** template.title is cleaner than template.featured.metadata.computed\_title. Deep paths break when authors change CT structure.

**Document your bindings.** If a section relies on a specific field shape, mention it in the section's description. New authors who use the section don't always know which fields it expects.

**Use the linked schema for sections.** Sections binding via a linked schema automatically know what shape to expect: see [Linked schema](/docs/studio/link-content-types-with-linked-schema). Manual bindings fall apart faster than schema-driven ones.

## See Also

-   [Templates: Connected content type](/docs/studio/connected-content-type): where template.\* comes from
-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): iteration scope
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): narrowing scope
-   [Freeform overview](/docs/studio/freeform-templates): extra data sources available only when Freeform mode is enabled
-   [Install the Studio SDK: Fetch options](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with-usecompositiondata): locale, variantAlias, etc.
