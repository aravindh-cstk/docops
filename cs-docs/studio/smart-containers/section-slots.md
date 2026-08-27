---
title: "Section Slots"
description: "Learn how Section Slots let section authors carve named, editable holes into a section's layout for template authors to fill with any component or section."
url: /studio/section-slots
uid: bltc1ac0798fa01b970
---

# Section Slots

## Section Slots

## Slot vs Section Slot — two authoring layers

Studio has **two kinds of drop targets**, and they open at different authoring layers. Mixing them up is the single most common cause of "I can't drop this here."

|  | **Component Slot** | **Section Slot** |
| --- | --- | --- |
| Declared in | Component code (registerComponent schema — a slot prop) | The section's ui tree (a section-slot node inside the design) |
| Filled at | **Section authoring** — the section author drops other components into it | **Template authoring** — the template author drops components or sections into it |
| Frozen when | The section is saved — whatever's in the component slot at that moment is locked into the section | Never — every template instance can fill the slot differently |
| Use it to | Compose a component's _own_ structure inside a section (put a Button inside a Hero's children) | Leave a **region of the section variable** so each template that drops the section decides its content |

**Default to component slots.** Most swap-ability in a design should live at the component layer — the Section author fills it, every Section that uses the component inherits it, no extra rung of indirection. **Only escalate to a Section Slot when the fill decision genuinely belongs to the Template author** (per-Template variation the Section author can't lock in). If you're reaching for a Section Slot to handle a decision the Section author would happily make once, the Component Slot was the right tool.

The rule that follows: **exposing only a component slot is limited to section authoring — the template author can't touch it.** So a Section Slot is _needed_ precisely when you've concluded the Template must decide.

The two chain: a component slot in the section's design _can hold_ a Section Slot. That's exactly what the Hero Strip example below does — the Hero component declares a children component slot; the section author drops a Section Slot into that children, and the template author fills the Section Slot per instance. Slot inside slot, each at its own authoring layer.

## Sections are compound components — Section Slots + Exposed Props give them the shape

Think of a **section as a compound component built in Studio** — it wraps registered components with layout, bindings, and data scope, and exposes a contract to whoever drops it. That contract has exactly two levers, the same two a code component has:

| Code component surface | Section equivalent | What the template author gets to decide |
| --- | --- | --- |
| Props (title, href, tone, …) | [**Exposed Section Props**](/docs/studio/expose-section-props) | Which **values** are overridable per instance |
| Slot / children props (<Card><Card.Header>…</Card.Header></Card>) | **Section Slots** (this page) | Which **regions** are droppable per instance |

Everything else — the layout containers, the bindings to the linked schema, the internal component wiring — is locked-in section structure. **Exposed Props decide what the template author can _change_; Section Slots decide what they can _drop into_.** Design a section by asking those two questions and picking the right primitive for each.

## The primitive

Section Slot is the third Smart Container — alongside [Repeater](/docs/studio/create-repeatable-content-with-repeaters) and [Condition Block](/docs/studio/control-visibility-with-condition-blocks) — but it sits at a different layer: instead of binding to data, it carves an editable placeholder the next composer fills.

A **Section Slot** is a named placeholder _carved out of a section the section author has already designed_. The section author builds the structure — layout containers, headings, decorative elements, repeaters — and decides which regions should remain open for template authors to fill. Those regions become Section Slots.

You don't build a section that is _just_ a Section Slot. A slot only makes sense inside something — a card frame the section already drew, a row in a grid the section already laid out, an "item template" position inside a Repeater the section already bound. The slot is the opening in a designed structure, not the structure itself.

Slots are **chainable and recursive**: a slot can hold a slotful section, whose slots can hold more sections, all the way down.

## Slot vs Prop — when to use which

|  | Section Slot | Expose as Section Prop |
| --- | --- | --- |
| Exposes | A **placeholder** in the layout | A **value** on an existing component |
| Filled with | Any component or section | A literal value, or bound page data |
| Chainable / recursive? | **Yes** | No — a single value override |

In short: **slots expose a placeholder, props expose a value.**

-   Page authors should _drop_ something → slot.
-   Page authors should _change_ something already there → exposed prop.

A well-designed section often uses **both** — slots for the variable regions, exposed props for labels and flags.

## Authoring a section with slots

The Section Slot tile lives in the **Smart Containers** category of the palette while you're in section authoring mode (it's hidden in page editing). But you don't reach for it first — you reach for it after the section's shape exists.

The real authoring flow:

1.  **Build the section's structure first.** Layout containers (Box, Row, Grid), bindings to your section's linked schema, anything that's _fixed_ about the design — the card frame, the grid wrapper, the heading row, the call-to-action region styling.
2.  **Identify what's variable per template instance.** Look at the structure and ask: "what here should template authors decide instead of me?" The answer is usually one or two regions — the card's media, the row's CTA, the panel's body content.
3.  **Drop a Section Slot into each of those regions.** The slot replaces the variable content; the surrounding structure stays.
4.  **Label each slot** via the right panel's **Drop placeholder label** field — "Drop a card here", "Media", "CTA". This label is what the template author sees on the canvas. It's the only contract between section author and template author for that placeholder, so make it instructive.
5.  Save the section.

The order matters. If you drop a Section Slot at the top of an empty section, you've made a section that is just a placeholder — there's no design to wrap the placeholders, no reason for a template author to use this section over dropping the component directly. The value of a slot only exists when there's section design _around it_ worth preserving across template-instance variations.

What the slot looks like to the _page_ author depends on the label. A slot labelled "Drop a card here" renders as a dashed rectangle saying _Drop a card here_ on the template canvas, waiting for a component or section to be dropped in.

Here's a Hero Strip section actually built this way — a Hero component owns the headline + subhead (bound to the linked schema's entry.hero.\* fields), and exposes a children slot prop. Inside that slot, the section author drops a Section Slot — the _only_ per-template-instance variation point. Everything around it (the Hero's layout, gradient background, typography, the linked-schema bindings) is locked-in section structure:

![Hero Strip section authoring: canvas renders the Hero with headline + subhead from the linked entry, and a dashed "Drop a Button or Link here" placeholder inside the Hero where the Section Slot sits; left palette shows Registered Components expanded with all 6 custom components.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am80c62e301a149986/8708add46941970e9cd2228c/section-slot-in-hero.png)

Notice the visual integration. The Section Slot is placed _inside_ the Hero component's children slot prop (a slot-typed prop the component itself declares — see [Component schema → slot](/docs/studio/component-schema-prop-types#slot)). That places the dashed drop target inside the Hero's frame, surrounded by the Hero's gradient + spacing.

If the Section Slot were instead a _sibling_ of the Hero at the page root level — page > \[Hero, SectionSlot\] — the slot would render below the Hero as a disconnected block. The component-slot-prop → Section Slot chain is what makes the slot read as "part of" the section rather than a separate region.

This is the canonical pattern: **a registered component declares slot props for variable regions; a section composition places Section Slots inside those slot props; templates fill the Section Slots with concrete content via drag-drop.**

## Filling a slot on a page

When the section is dropped onto a page, each slot becomes a drop target with its label visible. Drop any component into it.

The slot's filled content lives on the **page**, not on the section. So the same section dropped twice on a page can have completely different slot contents in each instance.

Bindings inside the slot content inherit the data context surrounding the slot — if the slot is inside a Repeater, the slot's children see the current iteration item.

## Why slots are powerful — the List + Slot pattern

The pattern that comes up most often: a section that owns the _layout_ of a list but lets the page decide what each item looks like.

![card_grid section linked to gf_card_list — Box configured as a grid wraps a Repeater bound to template.items\[\] holding a Section Slot labelled Item template](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd2b9508ab3ac9f52/72a3948d7958207ae5dc0b64/containers-section-slot-list-pattern.svg)

The Global Field that defines the iteration source:

![Two stacked global field schemas — gf_card_list with heading and items\[\] repeater on top, gf_card with title, image, link below — connected by an arrow showing items\[\] iterates each gf_card](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1c444f399e7cb402/853412af87eebc5d58c7696e/containers-section-slot-card-list-schema.svg)

On a page, drop card\_grid → it auto-binds to any gf\_card\_list field. The slot inside the Repeater renders **once** as a drop target. Drop a card component into it. At render time, the slot's contents repeat for every item in the list.

## The full chain — sections inside slots

The real power: drop a slotful section _inside_ another section's slot.

Build a card section with four slots:

![card section linked to gf_card — a Box card frame with four Section Slots labelled Media, Headline, Body, Action](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amd02cc59f9e00096a/019f84416820dd47b434f824/containers-section-slot-card-anatomy.svg)

Then on a page:

1.  Drop card\_grid → auto-binds to featured\_products. One "Item template" slot appears.
2.  Drop card into that slot. Studio scope-root matches it against the iteration item — no manual binding.
3.  card's four named slots appear. Fill each with a real component.

![card_grid bound to featured_products contains an Item template slot; a card section dropped in exposes four named slots — Media, Headline, Body, Action — each labelled with what to drop](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2f59cee3ec605f8b/cd4db3a030db6c03b36c41a0/containers-section-slot-nested-chain.svg)

You have three independent layers of reuse: card\_grid owns the grid, card owns the card frame, leaf components own the visuals. Change any layer without touching the others.

## What it feels like to author with slots

Three things are worth knowing — they explain why slots compose the way they do and where the limits are.

**Slots only fill on a template, not in the section itself.** When you're authoring the section itself, the Section Slot tile renders as a labelled placeholder you can't drop into — that's intentional. Slot fills are decisions the _template author_ makes per drop site, so they don't make sense inside the section's own canvas. The moment that section is dropped onto a template, the slot becomes a live drop target labelled with whatever placeholder text you set, ready to accept any component or section the template author drags in.

**Slot fills belong to the template, not the section.** When a template author drops a card into a section's slot, the card is stored on the template composition, not on the section. Drop the same section onto two different templates and each instance has its own slot contents. Edit the section later and existing slot fills aren't affected — you can rename the slot's placeholder label, reorganise the section's design, and the template-side fills stay intact. (Delete the slot entirely and its fills become orphaned — Studio cleans them up on the next template save.)

**Anything can fill a slot — unless you restrict it.** By default the slot doesn't say "only accept sections of type X" or "only images here". Any registered component or any section can be dropped, and the label you give the slot is the _only_ hint the template author has about what fits — so use it to communicate intent: "Drop a card here" / "Media" / "CTA" / "Article body". If you _do_ want to constrain the slot — restrict which sections drop in, or pre-fill an empty slot with a default section — see Slot Defaults & Allowed Sections.

### What data does a section see when it's dropped into another section's slot?

This is the part that surprises people. When Section B is dropped into Section A's slot, the data scope flows in from outside, layer by layer:

-   **B's template.\* is A's scope, not the template's own.** If A is bound to the template's featured\_card field, B's inner bindings resolve inside that field — B's own [linked schema](/docs/studio/link-content-types-with-linked-schema) auto-binding matches against A's scope (the featured\_card group), not the template's connected content type. So a card section dropped into a featured-card section's slot binds to the card-shape inside the featured-card scope.
-   **B inherits any Repeater scopes around it.** If A is inside a Repeater, or A's slot is inside a Repeater inside A, B sees the current iteration item exactly as A would. The card section dropped inside a card-grid's iteration slot binds to the current iteration's card data.
-   **B can always reach the page entry as an explicit choice.** If B genuinely needs the page-level entry (e.g. the page's brand\_color), the Data Picker offers the page scope as an option and it always points at the outermost page entry — no matter how many slots deep B is nested.

### Why this matters for design

The combination — slot fills live on the template, scope flows in from the enclosing section, and the template's connected entry is always reachable as a choice — is what lets the [List + Slot pattern](#why-slots-are-powerful--the-list--slot-pattern) work without any per-section glue. The Repeater scopes each iteration to an item; the Section Slot inside the Repeater inherits that scope; any section dropped into the slot auto-binds against the item; the section's leaf components read the right fields. No wiring, no fork. The pattern is the direct consequence of slots being scope-pass-through openings.

## Variants of the pattern

| Section | Wrapper | Slot(s) |
| --- | --- | --- |
| Tabs | Repeater over tabs\[\] | "Tab content" |
| Accordion | Repeater over panels\[\] | "Panel body" |
| Carousel | Repeater over slides\[\] | "Slide content" |
| Two-column layout | No Repeater | "Left", "Right" |
| Hero with CTA | No Repeater | "Headline", "Subhead", "CTA" |

## Edge cases

| Scenario | What happens |
| --- | --- |
| Rename a slot's label | Existing filled children stay bound. Empty slots show the new label. |
| Delete a slot | Page composers see no placeholder. Next page save cleans up orphaned slot contents. |
| Move a section into a Repeater after slots are filled | Children travel with it; bindings re-resolve under the new iteration. |
| Same section dropped multiple times | Each instance has its own slot contents. |
| Section deleted from the catalog | The page shows "unknown section" but preserves filled children — no data loss. |

## Next

-   Slot Defaults & Allowed Sections: pre-fill an empty slot and restrict what drops in
-   [Expose Section Props](/docs/studio/expose-section-props): the value-level sibling
-   [Auto-binding](/docs/studio/auto-binding-by-drop-location): scope-root matching that makes nested sections "just work"
-   [Recipe: card grid with slots](/docs/studio/card-grid-with-slots)
-   Slot data: for a component's own slot props, carry data to dropped children with <Slot data={...}>
