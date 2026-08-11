---
title: "Link Content Types with Linked Schema"
description: "Learn how a section's linked schema declares the shape of data it expects and how Studio auto-binds sections to matching fields on connected content types."
url: /studio/link-content-types-with-linked-schema
---

# Link Content Types with Linked Schema

## Link Content Types with Linked Schema

A section's **linked schema** declares the _shape_ of data it expects. When the section is dropped onto a template, Studio finds a field on the template's connected content type with a matching shape and binds the section to it.

Matching is **structural**, not name-based. Field names can differ between the section and the template's content type. What has to align is the structure: Studio remaps by position and data type.

## The Ideal Section Anchor

Studio matches strongest when the section is anchored on a **reusable structural field type**:

| Field type | Why it's a great section anchor |
| --- | --- |
| **Global Field** | Defined once, embedded in many content types unchanged. Guaranteed identical structure everywhere: the strongest match. |
| **Group** | Same child types in the same order → it matches, even if names differ. |
| **Modular Blocks** | Section narrows to one block; the page's blocks field just needs to include that block. |
| **Reference** | Matches when the section and page reference fields list the same set of referenced content types (sorted equality on reference\_to). |

Picking a **Global Field** is almost always the right move. It sidesteps every nested-name issue and works across content types by construction.

## Linking One Section to Many Schemas

A single section can be linked to **multiple schemas**, different fields on the same content type, or fields across different content types, as long as the structure matches.

### Example: a "Featured Card" section reused across content types

Define a Global Field once:

![Global Field gf_featured_card with heading, description, image, and cta_url](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1e0d49cff7ac8130/01d84b2ef0f035d9fd020f43/recipes-multi-schema-gf-featured-card.png)

Build one **Featured Card** section linked to gf\_featured\_card. Embed the Global Field into any content type that needs it, under whatever local name makes sense:

![Three content types embedding gf_featured_card — blog_post.hero_card, product.promo_card, event.banner — each under a different local field UID alongside CT-specific fields](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am8f0e7258937d9d3f/9dd1af27f2b2bfedb9d028d2/recipes-multi-schema-three-content-types.png)

Drop **Featured Card** on a blog\_post template and it matches hero\_card. On a product it matches promo\_card. On an event it matches banner. The field UIDs differ; the Global Field guarantees the inside is identical, so the section binds automatically.

If a content type exposes the Global Field **twice** (say promo\_card _and_ secondary\_card), Studio binds to one and shows a **picker in the section's settings** so the author can switch.

## What "Auto-Population" Actually Looks Like to a Template Author

The "binds automatically" line above is doing real work. Here's what a template author experiences when they drop a section onto a template:

1.  **They drop the section.** The section appears on the canvas with its inner components already showing their bound content, heading text populated, image visible, CTA label set. They didn't touch the Data Picker.
2.  **If the template's content type matches one the section was linked to**, Studio scopes the section to the field on the template's content type that has the same structural shape, a Group field, an embedded Global Field, or a referenced entry (see the matching table above). The section's inner bindings resolve against that matched field automatically. The section author wrote those bindings in terms of the section's own schema; Studio translates them to the template's field without any manual step.
3.  **If the page has two fields that both match** (e.g. two embedded gf\_featured\_card Global Field instances), Studio binds to one and shows a picker in the section's settings so the template author can switch between them.

For the template author the experience is just: drop, done. They never have to know which schema field the section is bound to, Studio chose it for them based on structural match. Their job is to drop the section in the right place and let the section's defaults work.

### When the page's content type doesn't match any of the section's linked schemas

The section drops, but its inner bindings have nothing to resolve against, content is empty or shows the components' default values. Studio does NOT block the drop or show an error; the section just renders unpopulated. The fix is for the section author to add the new content type to the section's linked schemas list. One section can link to many content types, as long as the structural shape matches in each.

### Nested context: section inside a Repeater inside a template

Auto-binding follows whatever scope the section is dropped into. If a section sits inside a Repeater that iterates the template's related\_posts field, the section's inner bindings resolve against the current Repeater item, not against the template's connected entry. Drop the same section at the template root and it resolves against the connected entry; drop it inside a Repeater and it resolves against each iteration item. Same section, scope-aware.

### Why this matters

A section authored once, linked to a structural shape, becomes drop-anywhere. The template author doesn't open the Data Picker, doesn't pick fields, doesn't write a single binding, they just drop the section and the right entry data appears. Combined with [Expose Props](/docs/studio/expose-section-props), which lets specific inner props be overridden per template instance, you get shared structure, shared layout, per-instance customisation where it matters, and zero forking.

## What "Matching Structure" Means

| Field type | Rule |
| --- | --- |
| Group / Global Field | Same number of immediate children with the same sorted set of data types. Child names can differ: Studio builds a positional remap (e.g. heading → title). |
| Modular Blocks | At least one block name in common between the section's blocks and the page's blocks. |
| Reference | Same set of referenced content types (sorted equality on reference\_to). |
| Any | Same data\_type on the field, same multiple/single flag. |

### Nested groups caveat

The positional remap is **one level deep**, only the top-level child field names get remapped; names inside nested groups must match exactly. For example, if your section binds a group card that contains a nested group cta, the top-level name card can differ between the section and the content type (Studio remaps it), but the nested group name cta must be identical on both sides.

Prefer Global Fields for nested shapes. They sidestep the issue because the structure is literally identical wherever you use it.

## Next

-   [Auto-binding](/docs/studio/auto-binding-by-drop-location): what Studio does when you drop the section
-   [Matching rules reference](/docs/studio/linked-schema-matching-rules)
