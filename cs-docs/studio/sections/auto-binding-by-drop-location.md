---
title: "Auto-Binding by Drop Location"
description: "Learn how Studio auto-binds sections to CMS fields based on drop location scope, including root, Repeater, and Modular Block contexts."
url: /studio/auto-binding-by-drop-location
uid: blt891cab31b57bb723
---

# Auto-Binding by Drop Location

## Auto-Binding by Drop Location

Studio doesn't just look at the page's top-level fields. It auto-binds against the **scope at the drop location**. Drop the same section at the root of a page or inside a Repeater, and you'll get different, but correct, binding behavior.

Scope-aware binding matters because it eliminates manual field-wiring in most cases and prevents mismatched bindings, where a section meant to render a card grid accidentally resolves against the page's top-level metadata instead of the list it should iterate.

## What "Scope" Means

| Drop location | Where Studio looks for matches |
| --- | --- |
| **Root of a page** | The page's top-level fields |
| **Inside a Repeater** | The schema of the Repeater's iteration item |
| **Inside a Modular Block** | The fields of that specific block |
| **Nested** (Repeater inside Repeater, block inside group, …) | The innermost scope; scopes chain |

## Three Possible Outcomes

| Result | What happens |
| --- | --- |
| **Exactly one match** | Studio binds automatically: no manual step. |
| **Multiple matches** | Studio binds to one; the section's right-panel settings show a dropdown to switch. |
| **Zero matches** | Section drops unbound; you can pick a field manually if a compatible one exists, meaning a field with the same data type and matching structure (e.g., a Group field with the same number and types of children, or a Reference field pointing to the same content types). |

## When the Iteration Item Matches the Section's Data Shape Exactly

There's a special case worth knowing about: if the surrounding scope **itself** mirrors the section's shape, for example, when the iteration item matches the section's data shape exactly, as when a Repeater iterates a list of gf\_featured\_card, the section binds directly to the iteration item with no wrapper field needed.

This is what makes the _section-inside-Repeater_ pattern Just Work: see [Recipe: card grid with slots](/docs/studio/card-grid-with-slots).

## Worked Example: Same Section, Three Drop Locations

A **Featured Card** section anchored on gf\_featured\_card:

![landing_page schema with three drop targets — hero_card at root, card inside cta block, items\[\] inside gallery block's Repeater — each annotated with its auto-derived binding](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am064708b54c369dfd/0f8ee1aed7c8966388388ab9/sections-auto-binding-drop-targets.png)

Same section, three drop locations, three different bindings, all picked automatically.

## When Auto-binding Doesn't Apply

-   Sections **without** a linked schema skip auto-binding entirely. They have no data to bind. They render the same content wherever you drop them: useful for purely presentational sections like footers and divider strips.
-   If a section has multiple linked schemas (different content types), Studio matches against the schema entry that corresponds to the template's connected content type.

## Next

-   [Linked schema](/docs/studio/link-content-types-with-linked-schema)
-   [Section Slots](/docs/studio/section-slots)
-   [Recipe: multi-schema section](/docs/studio/multi-schema-sections-for-multiple-content-types)
