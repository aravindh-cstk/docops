---
title: "The composability ladder"
description: "Learn the four-rung mental model behind Contentstack Studio: how slot props and Section Slots let Components, Sections, and Templates compose into each other."
url: /studio/the-composability-ladder
uid: blt6253bde15752bfa7
---

# The composability ladder

## The composability ladder

Studio's whole architecture is one idea applied four times: **a slot is a placeholder you fill later.** The same fill mechanism repeats up the stack: once at the component level (your React code), once inside Sections (Section Slots), once between Sections (Sections compose Sections via Section Slots), and once at the page level (Templates compose Sections).

If you internalize this single rung-on-rung pattern, the rest of Studio's UI stops being a list of features and becomes one ladder you climb deliberately.

## The render path is orthogonal

Before climbing, **client-side rendering (CSR) vs server-side rendering (SSR)** is a one-time choice at the app shell. It changes WHERE csStudio.fetchCompositionData runs, client (useCompositionData hook) vs server (Server Component / getServerSideProps / loader), and nothing about the composition shape. Every rung below is identical in both modes.

See [CSR vs SSR: choosing a render strategy](/docs/studio/choosing-between-csr-and-ssr-rendering).

The default for App Router (SEO-needing visitor routes) is RSC: fetch in a Server Component, render in a "use client" wrapper. CSR is for SPAs without SEO needs. The canvas route is always client-only.

## The four rungs

![Four nested rungs - Rung 4 Template (outermost) holds Rung 3 Section-in-Slot which holds Rung 2 Section which holds Rung 1 Component (innermost). Each rung fills the placeholders the rung below it opened.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambaf3846ea110cb08/98f8eb4e093a5bf89b2ede76/composability-ladder-rungs.png)

Each rung **fills** what the rung below it exposed. The same slot mechanism climbs the ladder.

## Rung 1: Component with slot props

A registered React component declares its prop schema. **Slot-typed props are the placeholders** the next rung fills:

```
// Your React code
export function Hero({ headline, children }: HeroProps & StudioAttributes) {
  return (
    <section className="hero">
      <h1>{headline}</h1>
      {children}            {/* ← the slot. Studio renders whatever the Section drops in. */}
    </section>
  );
}

// Registration
registerComponent({
  type: "doc-hero",
  component: Hero,
  props: {
    headline: { type: "string", defaultValue: "..." },
    children: { type: "slot" },   // ← THIS is the placeholders
  },
});
```

A slot prop has no defaultValue. It starts empty until something fills it.

-   [Component schema: slot prop](/docs/studio/component-schema-prop-types)
-   [register-component skill](https://studio-documentation.contentstackapps.com/prompts/register-component.html)

## Rung 2: Section composing components + opening Section Slots

A Section drops registered components onto a canvas and binds their props to a linked schema (so the component's data resolves from the CMS). Inside any component's slot prop, the Section author drops a **Section Slot**, Studio's smart-container that says "leave this placeholders open for the rung above me to fill."

![Hero Strip Section contains a doc-hero component whose children slot prop is filled by a SectionSlot labelled Drop a CTA - the placeholder a Template above will fill with a specific CTA component.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2e3a8dc36f38dfd5/1687d976f8f1274a3c210f25/composability-rung2-hero-strip.png)

Why a Section Slot inside the component's slot prop, instead of dropping a CTA component? Because the Section's job is to **author the layout shape**, not lock in one CTA. The Section Slot defers the actual fill to the Template that uses this Section: same Hero Strip serves a blog post (links to next article) AND a product page (links to checkout), with different CTAs.

-   [Sections overview](/docs/studio/build-and-use-sections)
-   [Section Slots](/docs/studio/section-slots)
-   [understand-section-slots: concept skill](https://studio-documentation.contentstackapps.com/prompts/understand-section-slots.html)
-   [build-section skill](https://studio-documentation.contentstackapps.com/prompts/build-section.html)

## Rung 3: Section-in-Slot (Sections composing Sections)

This is the rung most people miss. A Section's Section Slot doesn't have to be filled with a raw component: **it can be filled with another Section.**

![A Page Section contains a doc-hero whose Section Slot is filled (at rung 3) with a Hero Strip Section. That inner Hero Strip itself contains a doc-hero with its own Section Slot, which a Template fills at rung 4 with a doc-button.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am81d14d7c23068dd8/672c0b7e68882a48add397a2/composability-rung3-section-in-slot.png)

The fill rule recurses. A child Section can itself expose another Section Slot, and the rung above fills THAT with yet another Section, for as many levels as the design demands.

Two patterns this enables:

1.  **Reuse complex compounds.** A "Hero Strip with optional CTA + optional ribbon" Section authored once can drop into a "Page Hero" Section's slot, a "Landing Page Hero" Section's slot, and a "Blog Post Hero" Section's slot. Each fills the inner CTA slot differently.
2.  **Author-friendly variability.** Instead of forking a Section to add one variant, expose a Section Slot. Authors swap the inner Section per template instance without engineering touching anything.

-   [understand-section-slots: Section-in-Slot rule](https://studio-documentation.contentstackapps.com/prompts/understand-section-slots.html#what-fills-a-slot-a-section-not-a-raw-component)
-   [use-section-slot skill](https://studio-documentation.contentstackapps.com/prompts/use-section-slot.html)

## Rung 4: Template composing Sections

A Template owns the URL pattern + connected entry and composes the top-level Sections. The canvas at this rung is a flat list of Sections: the recursion is hidden in the Sections themselves.

![Blog Post Template wired to URL /blog/{{entry.url}} and content type blog_post composes two top-level Sections - a Hero Strip Section whose Section Slot is filled with a doc-button bound to entry.url, and a Card Grid Section containing a Repeater that iterates entry.related_posts rendering a doc-card per item.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2c5b99643f2153e1/afbf56a69ad6281aeb7e3bb5/composability-rung4-blog-template.png)

Templates fill Section Slots exposed by their Sections AND override exposed props (so "Related Blogs" becomes "Latest from the blog"). Both are different shapes of the same idea: **the rung above fills placeholder the rung below opened.**

> **Sections are compound components.** At rung 4 the Template consumes each Section like it would a code component: **Exposed Props** are the Section's props (which values the Template overrides), **Section Slots** are the Section's children / slot props (which regions the Template drops into). Designing a Section is the same design act as designing a code component's public API: pick which values are overridable, pick which regions are droppable, lock everything else. See [Section Slots: Sections are compound components](/docs/studio/section-slots#sections-are-compound-components-section-slots-exposed-props-give-them-the-shape).

-   [Templates overview](/docs/studio/templates-overview)
-   [Templates compose Sections + Components](/docs/studio/using-sections-and-components-in-a-template)
-   [build-connected-template skill](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html)

## Where each rung lives in your stack

| Rung | Lives in | Edited by |
| --- | --- | --- |
| 1: Component | Your repo (TSX) + registerComponent call | Engineer, PR + deploy |
| 2: Section | Composition entry in Contentstack | Author in Studio canvas, publish |
| 3: Section-in-Slot | Composition entry (parent Section), the slot fill is part of its ui tree | Author in Studio canvas, publish |
| 4: Template | Composition entry, URL + section drops | Author in Studio canvas, publish |

Rung 1 ships through git, then continuous integration (CI), then deploy. Rungs 2-4 ship through Contentstack publish. **The engineering boundary stops at rung 1.** Everything above is data the author edits.

## When to introduce a new rung

A heuristic for staying on the right rung:

-   **"I want this prop bindable to a different CMS field per template."** Don't add a slot. **Expose the prop**. The component stays the same. The binding map changes. See [expose-section-props](https://studio-documentation.contentstackapps.com/prompts/expose-section-props.html).
-   **"I want this region of the Section to hold different content per template."** Add a **Section Slot** in the Section. See [use-section-slot](https://studio-documentation.contentstackapps.com/prompts/use-section-slot.html).
-   **"I want this region of the component to hold different content."** Declare a slot prop on the component. See [Component schema, slot](/docs/studio/component-schema-prop-types).
-   **"I want a totally different layout per template."** Build a new **Template** over the same Sections. See [build-connected-template](https://studio-documentation.contentstackapps.com/prompts/build-connected-template.html).
-   **"I want a different shape inside this Section, but same outer frame."** Add a new **child Section** filling the same Section Slot, which is rung 3.

## Acceptance test: do you understand how it works?

You have the model when you can read this sentence and unfold it:

> "The Blog Post template drops a Hero Strip Section, which drops a <doc-hero> component, which has a children slot prop filled by a Section Slot, which the template fills with a <doc-button> whose href binds to entry.url, all rendered server-side via csStudio.fetchCompositionData in a Server Component and hydrated through a "use client" wrapper."

If that reads as one continuous idea (four rungs of the same fill mechanism + an orthogonal render-path choice), you're done. If it reads as a list of features you'd have to look up, walk back through this page and the linked deep-dives.

## Next

-   **[Set up Studio](/docs/studio/setup-overview)**: install the SDKs (rung 0)
-   **[Register your components](/docs/studio/bring-your-own-components-guide)**: rung 1
-   **[Sections](/docs/studio/build-and-use-sections)**: rungs 2 + 3
-   **[Templates](/docs/studio/templates-overview)**: rung 4
-   **[CSR vs SSR](/docs/studio/choosing-between-csr-and-ssr-rendering)**: the orthogonal render-path choice
