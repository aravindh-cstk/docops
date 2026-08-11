---
title: "The Composability Ladder"
description: "Learn the four-rung mental model behind Contentstack Studio — how slot props and Section Slots let Components, Sections, and Templates compose into each other."
url: /studio/the-composability-ladder
---

# The Composability Ladder

## The Composability Ladder

Studio's whole architecture is one idea applied four times: **a slot is a placeholder you fill later.** The same fill mechanism repeats up the stack, once at the component level (your React code), once inside Sections (Section Slots), once between Sections (Sections compose Sections via Section Slots), and once at the page level (Templates compose Sections).

If you internalize this single rung-on-rung pattern, the rest of Studio's UI stops being a list of features and becomes one ladder you climb deliberately.

## The Render Path Is Orthogonal

Before climbing, decide **CSR vs SSR** once at the app shell. It changes WHERE sdk.fetchCompositionData runs, client (useCompositionData hook) vs server (Server Component / getServerSideProps / loader), and nothing about the composition shape. Every rung below is identical in both modes.

→ [CSR vs SSR: choosing a render strategy](/docs/studio/choosing-between-csr-and-ssr-rendering)

The default for App Router (SEO-needing visitor routes) is RSC: fetch in a Server Component, render in a "use client" wrapper. CSR is for SPAs without SEO needs. The canvas route is always client-only.

## The Four Rungs

![Four nested rungs - Rung 4 Template (outermost) holds Rung 3 Section-in-Slot which holds Rung 2 Section which holds Rung 1 Component (innermost). Each rung fills the placeholders the rung below it opened.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am992f5335039d5300/153e82c0def6ed484c49cd96/composability-ladder-rungs.png)

Each rung **fills** what the rung below it exposed. The same slot mechanism climbs the ladder.

## Rung 1: Component with Slot Props

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
  schema: {
    headline: { type: "string", defaultValue: "..." },
    children: { type: "slot" },   // ← THIS is the placeholder
  },
});
```

A slot prop has no defaultValue; it starts empty until something fills it.

→ [Component schema: slot prop](/docs/studio/component-schema-prop-types) → [register-component skill](/docs/studio/register-components)

## Rung 2: Section Composing Components + Opening Section Slots

A Section drops registered components onto a canvas and binds their props to a linked schema (so the component's data resolves from the CMS). Inside any component's slot prop, the Section author drops a **Section Slot**, Studio's smart-container that says "leave this placeholder open for the rung above me to fill."

![Hero Strip Section contains a doc-hero component whose children slot prop is filled by a SectionSlot labelled Drop a CTA - the placeholder a Template above will fill with a specific CTA component.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2a237175ee3b1987/4bc79a0ce9673d9cc73c36c9/composability-rung2-hero-strip.png)

Why a Section Slot inside the component's slot prop, instead of just dropping a CTA component? Because the Section's job is to **author the layout shape**, not lock in one CTA. The Section Slot defers the actual fill to the Template that uses this Section, same Hero Strip serves a blog post (links to next article) AND a product page (links to checkout), with different CTAs.

→ [Sections overview](/docs/studio/contentstack-studio-overview#a-section-is-a-component-bound-to-a-content-type) → Section Slots → understand-section-slots: concept skill → [build-section skill](/docs/studio/build-and-use-sections)

## Rung 3: Section-in-Slot (Sections Composing Sections)

This is the rung most people miss. A Section's Section Slot doesn't have to be filled with a raw component, **it can be filled with another Section.**

![A Page Section contains a doc-hero whose Section Slot is filled (at rung 3) with a Hero Strip Section. That inner Hero Strip itself contains a doc-hero with its own Section Slot, which a Template fills at rung 4 with a doc-button.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am476c0f27d8a13668/e945ffc8393473836eaa5f7d/composability-rung3-section-in-slot.png)

The fill rule recurses. A child Section can itself expose another Section Slot, and the rung above fills THAT with yet another Section, for as many levels as the design demands.

Two patterns this unlocks:

1.  **Reuse complex compounds.** A "Hero Strip with optional CTA + optional ribbon" Section authored once can drop into a "Page Hero" Section's slot, a "Landing Page Hero" Section's slot, and a "Blog Post Hero" Section's slot, each fills the inner CTA slot differently.
2.  **Author-friendly variability.** Instead of forking a Section to add one variant, expose a Section Slot. Authors swap the inner Section per template instance without engineering touching anything.

→ understand-section-slots: Section-in-Slot rule → use-section-slot skill

## Rung 4: Template Composing Sections

A Template owns the URL pattern + connected entry (or freeform) and composes the top-level Sections. The canvas at this rung is a flat list of Sections, the recursion is hidden in the Sections themselves.

![Blog Post Template wired to URL /blog/{{entry.url}} and content type blog_post composes two top-level Sections - a Hero Strip Section whose Section Slot is filled with a doc-button bound to entry.url, and a Card Grid Section containing a Repeater that iterates entry.related_posts rendering a doc-card per item.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amba466701c9d9481d/e50e1e41d208d53a15f86d33/composability-rung4-blog-template.png)

Templates fill Section Slots exposed by their Sections AND override exposed props ("Related Blogs" → "Latest from the blog"), both are different shapes of the same idea: **the rung above fills the placeholder the rung below opened.**

→ [Templates overview](/docs/studio/using-sections-and-components-in-a-template) → Templates compose Sections + Components → [build-connected-template skill](/docs/studio/connected-content-type) → [build-freeform-template skill](/docs/studio/freeform-templates)

## Where Each Rung Lives in Your Stack

| Rung | Lives in | Edited by |
| --- | --- | --- |
| 1: Component | Your repo (TSX) + registerComponent call | Engineer; PR + deploy |
| 2: Section | Composition entry in Contentstack | Author in Studio canvas; publish |
| 3: Section-in-Slot | Composition entry (parent Section); the slot fill is part of its ui tree | Author in Studio canvas; publish |
| 4: Template | Composition entry; URL + section drops | Author in Studio canvas; publish |

Rung 1 ships through git → CI → deploy. Rungs 2-4 ship through Contentstack publish. **The engineering boundary stops at rung 1.** Everything above is data the author edits.

## When to Introduce a New Rung

A heuristic for staying on the right rung:

-   **"I want this prop bindable to a different CMS field per template."** Don't add a slot; **expose the prop**. The component stays the same; the binding map changes. → expose-section-props
-   **"I want this region of the Section to hold different** _**content**_ **per template."** Add a **Section Slot** in the Section. → use-section-slot
-   **"I want this region of the** _**component**_ **to hold different** _**content**_**."** Declare a slot prop on the component. → [Component schema § slot](/docs/studio/component-schema-prop-types)
-   **"I want a totally different layout per template."** New **Template**, same Sections. → [build-connected-template](/docs/studio/connected-content-type)
-   **"I want a different shape inside this Section, but same outer frame."** A new **child Section** filling the same Section Slot. → rung 3.

## Acceptance Test: Do You Have the Mental Model?

You have the model when you can read this sentence and unfold it:

> _"The Blog Post template drops a Hero Strip Section, which drops a_ _<doc-hero>_ _component, which has a_ _children_ _slot prop filled by a Section Slot, which the template fills with a_ _<doc-button>_ _whose_ _href_ _binds to_ _entry.url__, all rendered server-side via_ _sdk.fetchCompositionData_ _in a Server Component and hydrated through a_ _"use client"_ _wrapper."_

If that reads as one continuous idea (four rungs of the same fill mechanism + an orthogonal render-path choice), you're done. If it reads as a list of features you'd have to look up, walk back through this page and the linked deep-dives.

## Next

-   [**Set up Studio**](/docs/studio/setup-overview): install the SDKs (rung 0)
-   [**Register your components**](/docs/studio/register-components): rung 1
-   [**Sections**](/docs/studio/build-and-use-sections): rungs 2 + 3
-   [**Templates**](/docs/studio/connected-content-type): rung 4
-   [**CSR vs SSR**](/docs/studio/choosing-between-csr-and-ssr-rendering): the orthogonal render-path choice
