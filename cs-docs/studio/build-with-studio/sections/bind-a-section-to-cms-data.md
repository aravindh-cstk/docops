---
title: "Bind a Section to CMS Data"
description: "A Section renders content from a CMS entry. This page is the single canonical explanation of how that happens: the two pieces that make it work, a linked."
url: /studio/bind-a-section-to-cms-data
---

# Bind a Section to CMS Data

## Binding a Section to CMS data

A Section renders content from a CMS entry. **This page is the single canonical explanation of how that happens**, the two pieces that make it work: a **linked schema** (declares the shape the Section expects) and **auto-binding** (Studio matches that shape to whatever field the Section is dropped over).

Both used to live on separate pages ([linked-schema.md](/docs/studio/link-content-types-with-linked-schema), [auto-binding.md](/docs/studio/auto-binding-by-drop-location)). They were always the two halves of one topic, so they now live here together.

## Part 1: Linked schema (declares the shape)

A Section's **linked schema** declares the shape of data it expects. When the Section is dropped onto a Template, Studio finds a field on the Template's connected content type with a matching shape and binds the Section to it.

Matching is **structural**, not name-based. Field names can differ: Studio remaps by position and data type. What has to align is the structure.

### The ideal Section anchor

Studio matches strongest when the Section is anchored on a **reusable structural field type**:

| Field type | Why it's a great Section anchor |
| --- | --- |
| **Global Field** | Defined once, embedded in many content types unchanged. Guaranteed identical structure everywhere, the strongest match. |
| **Group** | Same child types in the same order, so it matches even if names differ. |
| **Modular Blocks** | Section narrows to one block. The page's blocks field needs to include that block. |
| **Reference** | Matches when the Section and page reference fields list the same set of referenced content types (sorted equality on reference\_to). |

Picking a **Global Field** is almost always the right move. It sidesteps every nested-name issue and works across content types by construction.

### One Section, many schemas

A single Section can be linked to **multiple schemas** (different fields on the same content type, or fields across different content types) as long as the structure matches.

**Example: a "Featured Card" Section reused across content types.** Define a Global Field once:

![Global Field gf_featured_card with heading, description, image, and cta_url](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am70beed4ec2760902/39d910aa4ac02cb1f316088a/recipes-multi-schema-gf-featured-card.png)

Build one **Featured Card** Section linked to gf\_featured\_card. Embed the Global Field into any content type that needs it, under whatever local name makes sense:

![Three content types embedding gf_featured_card (blog_post.hero_card, product.promo_card, event.banner) each under a different local field UID alongside CT-specific fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ameddb9d3b5c515e41/4f14c48796dd301a437965bf/recipes-multi-schema-three-content-types.png)

Drop **Featured Card** on a blog\_post Template and it matches hero\_card. On a product it matches promo\_card. On an event it matches banner. The field UIDs differ. The Global Field guarantees the inside is identical, so the Section binds automatically.

If a content type exposes the Global Field **twice** (say promo\_card and secondary\_card), Studio binds to one and shows a **picker in the Section's settings** so the author can switch.

### What "matching structure" means

| Field type | Rule |
| --- | --- |
| Group / Global Field | Same number of immediate children with the same sorted set of data types. Child names can differ: Studio builds a positional remap (e.g. heading → title). |
| Modular Blocks | At least one block name in common between the Section's blocks and the page's blocks. |
| Reference | Same set of referenced content types (sorted equality on reference\_to). |
| Any | Same data\_type on the field, same multiple/single flag. |

**Nested groups caveat.** The positional remap is **one level deep**. If your Section binds a group inside another group, the **inner group's name must match** on both sides: only top-level names get remapped. Prefer Global Fields for nested shapes. They sidestep the issue because the structure is literally identical wherever you use it.

## Part 2: Auto-binding (matches shape to drop location)

Studio doesn't look at the page's top-level fields when the Section is dropped. It auto-binds against the **scope at the drop location**, the schema visible where the Section sits in the tree.

### What "scope" means

| Drop location | Where Studio looks for matches |
| --- | --- |
| **Root of a page** | The page's top-level fields |
| **Inside a Repeater** | The schema of the Repeater's iteration item |
| **Inside a Modular Block** | The fields of that specific block |
| **Nested** (Repeater inside Repeater, block inside group, and so on) | The innermost scope. Scopes chain |

### Three possible outcomes

| Result | What happens |
| --- | --- |
| **Exactly one match** | Studio binds automatically, no manual step. The **Data root** field in the right-panel **Settings** shows what the Section is reading from. |
| **Multiple matches** | Studio binds to one (the first in schema order). Open the **Data root** picker to switch. Dropping the same Section twice lets each instance read from a different field. |
| **Zero matches** | Section drops unbound. Open the **Data root** picker to select a compatible target if one exists. Content shows the components' default values instead. |

## Part 3: Data root (on any page, including freeform)

Auto-binding needs a Template's connected content type to match against. A **freeform** page has none, so nothing matches and a dropped Section renders its components' default values.

The **Data root** is the per-placement answer to "where does this Section read from?". It is a full data binding, not only a field name, so it can point at:

| Target | Typical use |
| --- | --- |
| a field of the Template's content type | a Template page: this is what auto-binding fills in for you |
| a **pinned entry** | a freeform page: pin the entry in **Data**, then root the Section at it |
| a field inside a pinned entry | one group or reference within that entry |
| a query result | a freeform Collection Section over many entries |
| the surrounding Repeater item | a Section inside a Repeater, the default there |

Set it in **Settings**, then **Data root**. The picker is the same data binder used for every other binding, with one difference: it offers **only targets whose structure matches what the Section declared**. Everything else is greyed out, on the same rules as auto-binding: same shape, names may differ.

Two things follow automatically once a Data root is set:

-   The Section's **exposed props** re-point at the new data, unless you have edited one by hand: a manual edit means the page owns that value from then on.
-   Any references the Section needs are added to the entry's fetch, so nested content resolves instead of coming back empty.

### On a Template vs. on a freeform page

|  | Template | Freeform |
| --- | --- | --- |
| Starting state | pre-filled from the Section's **linked schema** | empty, you pick |
| Changing it | switches to another matching field | picks any matching target |
| Clearing it | Section shows component defaults. **Restore default** brings the linked-schema field back | Section shows component defaults |

A Section with **no linked schema** has no declared shape, so it has no Data root. Those Sections are the same wherever you drop them, which is exactly what makes them useful for footers and divider strips.

![Section selected on a template canvas: right-panel Settings shows the Data root the Section is reading from.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1dd710418fc692c5/62f6f6d243bcf621f557df4a/section-data-source-dropdown.png)

### The scope-root match

Special case: if the surrounding scope **itself** mirrors the Section's shape (e.g. a Repeater iterating a list of gf\_featured\_card), the Section binds directly to the iteration item, no wrapper field needed. The Section-inside-Repeater pattern relies on this, see [Recipe: card grid with slots](/docs/studio/card-grid-with-slots).

### Worked example: same Section, three drop locations

A **Featured Card** Section anchored on gf\_featured\_card:

![landing_page schema with three drop targets (hero_card at root, card inside cta block, items\[\] inside gallery block](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2db2da00e859f968/d94e87d657767bf0235c294e/sections-auto-binding-drop-targets.png)

Same Section, three drop locations, three different bindings, all picked automatically.

## What the Template author actually sees

The "binds automatically" line above is doing real work. Here's what a Template author experiences:

1.  **They drop the Section.** It appears on the canvas with its inner components already showing bound content: heading text populated, image visible, CTA label set. They didn't touch the Data Picker.
2.  **If the Template's content type matches** one the Section was linked to, Studio scopes the Section to the field on the Template's content type that has the same structural shape.
3.  **If the page has two fields that both match** (two embedded gf\_featured\_card instances, say), Studio binds to one. The **Data root** picker switches to the other.
4.  **If nothing matches**, the Section still drops but its inner bindings have nothing to resolve: content shows defaults. Either add the new content type to the Section's linked schemas list, or set a **Data root** manually.

For the Template author the experience is: drop, done. The Section's job is to declare the shape. The Template author's job is to drop it in the right place. Studio does the wiring.

## When auto-binding doesn't apply

-   Sections **without** a linked schema skip auto-binding entirely, and have no **Data root**. They have no data to bind. Same content wherever you drop them, useful for purely presentational sections like footers and divider strips.
-   If a Section has multiple linked schemas (different content types), Studio matches the schema entry that corresponds to the Template's connected content type. On a freeform page there is no such content type, so the **Data root** records which linked schema it matched.

## Next

-   [Section Slots](/docs/studio/section-slots): how a Section lets Templates fill regions per-instance
-   [Expose Section Props](/docs/studio/expose-section-props): how a Section lets Templates override individual values per-instance
-   [Matching rules reference](/docs/studio/linked-schema-matching-rules): every rule in one lookup table
-   [Recipe: card grid with slots](/docs/studio/card-grid-with-slots)
-   [Recipe: multi-schema Section](/docs/studio/multi-schema-sections-for-multiple-content-types)
