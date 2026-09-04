---
title: "Bind CMS Content to Studio Components"
description: "Learn how Studio components get their data from Contentstack through prop binding, the Data Picker, scope-aware Repeaters, and automatic Visual Editor integration."
url: /studio/bind-cms-content-to-studio-components
uid: blt6f3068b1df5cf904
---

# Bind CMS Content to Studio Components

## Bind CMS Content to Studio Components

**Binding** is how Studio components get their data from Contentstack instead of from hard-coded values. Click a prop in the right panel, pick a field from the data picker, and the component now renders that field's value — for whichever entry is the current preview.

This page consolidates binding across linked templates and sections. The concept is the same in both contexts; the available data sources differ.

## What binding does

![Two side-by-side cards comparing a hard-coded prop and a bound prop. The Hard-coded card shows { title: 'Hello' } rendering as the literal string 'Hello' for every entry. The Bound card shows { title: template.title } resolving at render time to the current entry's title field — different value per entry.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8637b84d26960919/75530b378debbedf4cc066e1/composition-hard-coded-vs-bound.svg)

A bound prop is dynamic — the value comes from the connected entry, a pinned entry, a pinned query, or one of several other sources. Different preview entries produce different rendered values. One template, many pages.

**The Data Picker is the UI you'll use for every binding** — click a prop's binding chip and it opens the field tree for the current scope. Here's what it looks like on a section linked to a Blogs content type:

![Data Picker showing the Blogs content-type schema tree — Title, URL, Excerpt, Featured Image (with nested fields), Primary Author, Co-Authors, Content Tier, Related Blogs](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb8c15138c8f9f63/64e5182b28c45217cbcdca5d/data-picker.png)

Details on the picker's tabs, scoping, and type filtering are in [The Data Picker](#the-data-picker) below. The rest of this page is split into two halves:

1.  **Binding concepts** — what binding is, how sources scope, how the picker works (this page, top half).
2.  **data-cslp tag emission** — the _second job_ the binding map does at render time: emitting the data-cslp tags Visual Editor consumes. See [data-cslp tag emission](#data-cslp-tag-emission--visual-editor-consumes-what-studio-emits) — orthogonal to authoring; skip on first read if VE isn't installed.

## Static value vs. bound — same prop, different source

Every prop on every component has the same two halves in the right panel: a **direct input** and a **binding chip**. Use the input to type a literal value; use the chip to bind the prop to a CMS field. You can switch a prop between the two whenever you want — the component doesn't know or care which source produced its value, so there's no refactor cost.

What changes when you switch is **where the value comes from at render time**:

| Where you pointed the prop | What the visitor sees |
| --- | --- |
| Typed value (the direct input) | Exactly what you typed — same string for every page, every entry, every render |
| Connected entry field (template.\* on a Connected template) | The current entry's value — different per render because the entry differs per URL |
| Repeater iteration item | The current item's value — different for every iteration the Repeater renders |
| Reference field on the current entry | The referenced entry's value |

Same component, same prop, different visitor experience depending on which source you picked.

### What this lets you do

-   **Mix per prop on the same component.** A Hero can have a typed ctaLabel: "Get started" and a bound headline: template.title at the same time. Two props, two sources, one instance.
-   **Re-bind without losing layout.** Switching a prop from a typed value to a CMS field is one click on the binding chip → pick a field → save. The component's position, neighbours, and other props don't move. There's no rebuild.
-   **Use the same flow for [Expose Props](/docs/studio/expose-section-props) overrides.** When a section author exposes a prop, the template author sees that prop in the section instance's right panel with the same direct input + binding chip — they can type a literal, pick a template field, or pick an outer scope's field, all from the same control.

## data-cslp tag emission — Visual Editor consumes what Studio emits

The binding mapper has a **second job most developers don't realise it does**: it auto-emits the data-cslp tags that Contentstack's Live Preview / Visual Editor use to detect "this DOM node is bound to this CMS field." You never write data-cslp in your component code — Studio derives it at render time from the binding map you authored in the canvas.

> **Studio itself has no inline-edit surface.** All value edits inside Studio happen in the right panel. Inline click-to-edit is a separate feature provided by **Visual Editor**, which — if installed independently in the same app — reads the data-cslp tags Studio emits. This section describes tag emission only; the inline-editing capability is Visual Editor's, not Studio's.

| What you author in Studio | What ships at render time | Who consumes it |
| --- | --- | --- |
| Hero.headline → template.title (binding in the canvas) | <h1 data-cslp="entry\_uid.title">{title}</h1> (output of <StudioComponent />) | Visual Editor (if installed) — draws the hover overlay + inline-edit affordance on the headline |
| Card.image → template.featured\_image | <img data-cslp="entry\_uid.featured\_image" …> | Visual Editor (if installed) — same, for the image field |
| Repeater of references with per-iteration bindings | data-cslp carries the iteration's entry UID + field path | Visual Editor (if installed) — inline editing follows iteration scope |

So **building a Section in Studio produces the tags Visual Editor needs** — no separate wiring step, no data-cslp prop threading through components, no hand-maintained cslp-util calls. The tag emission and the render both share one source of truth: the binding map.

**What this means for teams already using Visual Editor.** A pre-Studio app needs developers to plumb data-cslp tags through every component that renders a CMS field. With Studio, the prop-to-field map IS the source of truth for data-cslp emission — every Section / Template you build in Studio ships tags at render time, and Visual Editor's inline editing works on those pages because the tags are present. Studio doesn't provide, enable or "auto-wire" inline editing — that capability lives entirely in Visual Editor and requires Visual Editor to be installed and configured independently.

See [Add Studio to a Visual Editor app](/docs/studio/add-studio-to-a-visual-editor-app) for the full coexistence model.

## Where binding happens

Every registered component prop has two halves in the right panel:

1.  **A direct input** — type a value, pick from a dropdown, choose a date, etc.
2.  **A binding chip** — click it to open the Data Picker; pick a source field instead

Switch between them per prop. Some props are bound; others use literal values. Authors decide per drop.

## The Data Picker

Open it by clicking a prop's binding chip. The picker shows tabs for each data source available in the current context.

![Data Picker showing the Blogs content-type schema tree — Title, URL, Excerpt, Featured Image (with nested filename, URL, permanent URL, description), Primary Author (reference), Co-Authors (reference multi), Content Tier (choice), Related Blogs (reference multi). Two icon tabs at the top switch between the linked-schema scope (page entry) and the repeater scope (iteration item, only visible inside a Repeater).](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amcb8c15138c8f9f63/64e5182b28c45217cbcdca5d/data-picker.png)

**Reading the tree above** — this is the picker opened on a section linked to the Blogs content type. The tree mirrors the CT's schema:

-   Top-level scalar fields at one level (Title, URL, Excerpt)
-   Group fields expanded to show their children (Featured Image → Title, URL, UID, Permanent URL, Filename, Description)
-   Reference fields as their own rows (Primary Author, Co-Authors)
-   Self-references at the bottom (Related Blogs)

Click any field to bind the prop to it.

### Data sources by context

| Context | Sources you'll see |
| --- | --- |
| **Connected template** | template.\* (connected entry), dataSources.contentstack.\*, query data sources |
| **Section** | template.\* (the section's linked schema scope), plus all of the above |
| **Inside a Repeater** | The Repeater's iteration item as template.\*, with the outer scope accessible via dataSources.page.\* |
| **Inside a Condition Block** | The narrowed iteration item — template.\* knows which block / CT it's inside |
| **Component Default Data** (any context, when a component is selected) | Whatever you pass via the data prop on <StudioComponent specOptions={...} data={...} />. This is the canonical hook for **bringing external data into a composition** (live pricing, geo, feature flags, weather, anything outside Contentstack). See [Component Default Data → runtime data injection](/docs/studio/set-component-default-data#part-2--runtime-component-default-data-the-data-prop-on-ltstudiocomponent-gt). |

The picker only shows what's actually available — if a prop is inside a Repeater inside a Section, you'll see the Repeater's iteration scope first; if you specifically need the outer page's data, you can switch to dataSources.page.\*. The "Component Default Data" root only appears when a component is selected (it's scoped per-component-instance).

## Step-by-step — binding a component

For a Heading component with a text prop on a blog\_post template:

1.  Drop the Heading onto the canvas
2.  Click the Heading to select it
3.  Right panel → **Data** tab
4.  Next to the text prop, click the binding chip (link icon)
5.  The Data Picker opens, showing the blog\_post content type's fields
6.  Pick title
7.  The Heading on the canvas re-renders with the current entry's title

The right panel now shows text: template.title (or similar — UI varies). Switching the preview entry updates the heading's rendered text.

## Type compatibility

Studio's Data Picker filters fields by type. A string prop only shows fields that resolve to a string (text, single-line text, URL, etc.). An imageurl prop only shows file fields with image MIME types.

If the picker shows no fields, the prop's type doesn't match anything on the available data sources. Either:

-   Pick a different field that does match
-   Change the component's prop type if you control the registration
-   Add a transformation in your component code (but Studio's binding stays string-to-string at the SDK level)

## Binding inside Repeaters

When you drop a Repeater bound to template.items\[\] and put a component inside it, template.\* inside the Repeater refers to the **current iteration item**, not the page entry.

![Layers tree — Page (blog_post) contains a Repeater bound to template.related_posts, with Heading and Text inside bound to repeater.title and repeater.excerpt](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ama931293c29c40bac/9b2c8976eb5f8b84bc7ca146/composition-binding-inside-repeater-tree.svg)

This is **scope-aware binding**. Studio's picker knows which scope you're in and shows the right fields: template.\* inside the page root (the connected entry), repeater.\* inside a Repeater (the iteration item — labelled "Repeater Data" in the picker). The SDK tags these as TemplateBindingValue vs RepeaterBindingValue (with repeaterUID) respectively.

## Binding inside Condition Blocks

Inside a Condition Block sitting inside a Repeater, repeater.\* narrows to the matched block type or content type. The picker shows only fields that exist on that specific type.

![Layers tree — Repeater bound to template.body_blocks; Condition Block matches when block.type equals hero; Heading inside binds to template.headline](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf79988ea948f021c/36ca9c15b3aa6692abd2c808/composition-binding-condition-block-tree.svg)

If you reorder a Condition Block such that it no longer matches what you expect, the bindings inside may render empty until the condition matches again.

## Design-side binding

Studio also lets you bind **design properties** (background colors, image sources, padding values) to CMS data. The mechanism is the same — click the binding chip next to the design property in the Design panel and pick a field.

Useful for:

-   Dynamic theming per entry (each entry's brand\_color drives the section's background)
-   Image-driven layouts where the asset comes from an entry field
-   Spacing scales that vary per content type

→ See [Design Panel UI](/docs/studio/style-components-with-the-design-panel) for the design controls themselves.

## Linked compositions — dynamic templates

The most powerful use of binding: one Connected template renders every entry of the connected content type. Bindings inside the template resolve against the current entry; the entry changes per URL.

![Connected blog_post template wired to /blog/{{entry.url}} with Heading, Image, Text, and a Repeater of Cards bound to template fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb15d25372a997423/ff416324901cff23aa73cade/composition-connected-template-tree.svg)

Visit /blog/ai-101 → all bindings resolve against the "AI 101" entry. Visit /blog/llm-economics → all bindings resolve against the "LLM Economics" entry.

One template, N rendered pages, your components.

## Personalization and localization

Binding works natively with Contentstack's localization and Personalize:

-   **Localization**: passing locale: "fr" to useCompositionData fetches the French version of every bound field — Studio doesn't need a separate binding flow
-   **Personalize variants**: variantAlias does the same for variant-specific content
-   **A/B testing**: variant aliases drive the rendered version per visitor

The bindings stay the same; the data behind them switches. See [Install the Studio SDK → Fetch a composition](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with-usecompositiondata) for the locale / variantAlias options.

## Static vs bound — when to use which

| Situation | Use static | Use binding |
| --- | --- | --- |
| Brand name in a footer (never changes) | ✅ |  |
| Header text on a blog post (varies per post) |  | ✅ |
| Button size variant ("large", "medium") | ✅ | unless varies per content |
| Hero image (varies per page) |  | ✅ |
| Decorative SVG icon (fixed for the design) | ✅ |  |
| Product price (varies per product) |  | ✅ |

A typical Connected template has 60–80% bound props (content that varies) and 20–40% static (styling, layout, design intent). Sections lean further to bound when they're content-shaped, further to static when they're purely decorative.

## Common pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| Binding renders empty | The bound field isn't populated on the current preview entry | Switch the preview entry (⇄ icon on the canvas toolbar) to one with data |
| Data Picker doesn't show the field I want | Field type doesn't match the prop type | Pick a compatible field or rebind to a different prop |
| Binding works in preview but renders empty in production | The content isn't published in the production environment | Publish the entry to the target environment |
| Binding inside a Repeater resolves to the page-level value | The scope wasn't the Repeater item | Re-open the Data Picker — it'll start at the Repeater scope by default; you may have switched to dataSources.page.\* |
| Two bindings on the same component conflict | One is in a parent scope, one in a child scope, both referencing template.\* | Different scopes resolve to different items. Use dataSources.page.\* to disambiguate when needed. |

## Best practices

**Bind early, customise later.** Drop a component → bind every prop that's content → only then start tweaking styles. This builds in the data dependency from the start.

**Prefer simple paths.** template.title is cleaner than template.featured.metadata.computed\_title. Deep paths break when authors change CT structure.

**Document your bindings.** If a section relies on a specific field shape, mention it in the section's description. New authors who use the section don't always know which fields it expects.

**Use the linked schema for sections.** Sections binding via a linked schema automatically know what shape to expect — see [Linked schema](/docs/studio/link-content-types-with-linked-schema). Manual bindings fall apart faster than schema-driven ones.

## See also

-   [Templates → Connected content type](/docs/studio/connected-content-type) — where template.\* comes from
-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters) — iteration scope
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks) — narrowing scope
-   [Install the Studio SDK → Fetch options](/docs/studio/install-the-studio-sdk#4-fetch-a-composition-with-usecompositiondata) — locale, variantAlias, etc.
