---
title: "Section Data Reference"
description: "Reference for Studio's Section Data control — which targets can root a placed section, how structural matching runs, what the picker shows, and how a root resolves at render time."
url: /studio/section-data-reference
---

# Section Data Reference

## Section Data Reference

**Section Data** is the per-placement binding that answers which document a placed section reads from. It is present on every placement in every composition type, and it replaced the older **Data source** dropdown, which could only list fields of a template's connected content type.

This page is the reference: every rule, in the order Studio applies them. For the concept-level explanation and the authoring walkthrough, see [Binding to CMS, Part 3: Section Data](/docs/studio/bind-a-section-to-cms-data).

## Why it is a binding, not a field name

A field path cannot express "this document, wherever this placement happens to sit". Making Section Data a full binding is what lets a placement:

-   read a **pinned entry** or a **query result** on a freeform page, where there is no connected content type to name a field on.
-   **override** the iteration context of an enclosing Repeater (a document root is absolute, so every row resolves the same document).
-   record **which linked schema it matched**, which is what the section's internal bindings get remapped through.

Nothing saved before the control existed changes behaviour: a placement with no stored root resolves exactly as it always did, from its linked schema. The derived answer is recomputed on every read and never written back, so opening an old page does not mark it dirty.

## 1: What can root a section

| Category | Accepted |
| --- | --- |
| Fields | group, global\_field, blocks, reference, file, link |
| Whole documents | an entry root (the **Entire Entry** row), a group item, a block item, a resolved reference, a query result item |
| Schemaless subtrees | custom fields, plain JSON, external data, matched by key name only, since there is no schema to compare |
| Never | scalar fields (text, number, boolean, isodate, and so on) |

Scalars are excluded by construction, not by policy: a section's inner bindings read fields of their root, so a scalar root can only ever resolve to nothing.

One constraint comes from the authoring side rather than the matcher: every schema linked to a section shares the first one's constraint family, and a content-type-level schema blocks field-level selections.

## 2: What the section declares

Each linked\_schemas entry resolves to exactly one **shape**:

| Shape | When |
| --- | --- |
| **Field-anchored** | the entry's selected field resolves to a field on the content type |
| **Block-anchored** | the selected field names one block of a Modular Blocks field |
| **Content-type-anchored** | the entry names a content type with no selected field |

A selected field that no longer resolves (renamed or deleted on the content type) is **skipped**. It is not widened to the whole content type. A section that resolves to zero shapes has no declared structure, so the picker falls back to the base rule above and hides nothing else.

The **first** linked schema is load-bearing: it is the coordinate system the section's internal bindings are authored against, so it decides the remap when several shapes match.

## 3: Matching

Two passes over every shape: all shapes **exactly**, then all shapes by **containment**. First hit wins.

### Field targets

| Target field | Rule |
| --- | --- |
| group / global\_field | **Pass 1:** equal sorted child data types, remapped by position. **Pass 2:** section ⊆ target: every child the section declares is present, matched order-preserving by data type. The pairing becomes the remap. Extra fields on the target are ignored. |
| blocks | at least one block UID in common |
| reference | at least one referenced content type in common |
| file / link | data type only |
| any | data\_type and the multiple flag must agree |

### Whole-document targets

Array-ness must agree first. The target is list-like if it is multiple, a reference, a blocks field, or a collection-cardinality section's source. Then:

| Section shape | Rule |
| --- | --- |
| Content-type-anchored | the two schemas match on equal length and sorted data types |
| Field-anchored | the document's schema equals the section's field shape. multiple fields are refused |

**Both are still equality, not containment.** A section shaped like a small group can root at a matching field of a larger entry, but not at the larger entry itself. There is also no Modular Blocks arm here, so a query result cannot root a blocks-anchored section. Root it at the blocks field of a pinned entry instead.

### Schemaless targets

Every child key the section expects must be present **by name**. Extra keys are allowed and the remap is the identity. Never positional, JSON key order is not a contract.

## 4: What the picker shows

| Rule | Effect |
| --- | --- |
| **Hide, not grey** | Only selectable targets, and routes to them, are drawn. A whole content type would otherwise be hundreds of greyed rows around a handful of candidates. |
| **Subtree-aware** | A node survives if it is selectable or anything beneath it is. Unselectable containers remain as navigation. |
| **A match terminates the walk for its own contents** | The items and variants of a matched node are never candidates. Picking the collection and picking one of its elements are not two different answers. They survive as **routes** only when a distinct nested field beneath them matches, and are drawn unpickable. |
| **The entry root is offered by its own row** | **Entire Entry**, not a tree row, so the root never collapses the tree it anchors. It is the only gesture that can express a content-type-anchored section's choice: in the entry list a click drills in, and in the drilled view the header owns Back. |
| **Unresolved references are not drilled** | Referenced data reaches a section through a Repeater + Condition Block. Offering a second route would contradict it. |
| **Reopening drills in** | Reopening a bound placement's picker opens inside the bound entry, once per open, so **Back** reaches the list and stays there. |

## 5: What a pick writes

Four things move together:

1.  The placement records the root binding, the UID remapping, and which linked schema matched, plus the legacy flat selected-field value, so an older published SDK still resolves the placement.
2.  The pinned entry's fetch gains the reference hops the root crosses **and** the section's own internal reference paths. Skip this and the canvas renders bare reference stubs while the deployed site is correct. Template roots persist nothing. Query roots contribute through their query spec.
3.  Auto-seeded exposed props are rebased onto the new root. Hand-edited props are never re-pointed. The flag is one-way, and a manual prop that stops resolving renders blank rather than silently reverting to a value the author did not choose.
4.  The canvas receives a targeted context update carrying the root, the remap, and the fetch root.

Clearing drops the stored keys (both the root and the legacy flat value) which restores the section's declared field. Clear is offered only when the stored root differs from what the placement would derive without it.

## 6: How a placement resolves

| Step | Rule |
| --- | --- |
| Root | An explicit stored root wins. Otherwise Studio derives one from the section's declaration: the placement's stored selected field, then the linked schema for the page's content type, then the first linked schema. On a freeform page, with no page content type, the derived answer is genuinely empty. |
| Fetch root | The single fetched document a set of paths is rooted at: the template entry, a pinned entry, a query, or the enclosing Repeater's item. Only an **explicit** root rebases the document. A derived one means "no opinion". |
| Scoping | The document is scoped to the root's path (numeric segments are indices. An un-indexed hop onto a list takes the first element), then the UID remap is applied. |
| Remap depth | **One level.** Nested group and block UIDs must match on both sides. Prefer Global Fields for nested shapes. The structure is identical by construction. |
| Cardinality | Single-cardinality sections collapse a list to its first element. Collection sections iterate. Cardinality comes from the matched schema, else the page content type's schema, else the first linked schema. |
| Inside a Repeater | Relative to the iteration item, re-scoped per row, unless an explicit document root overrides it, which is absolute. |

## 7: Known limits

| Limit | Consequence |
| --- | --- |
| Whole-document matching is equality | A group item of a bigger group cannot root a section that the group's field would accept. |
| No Modular Blocks arm for whole documents | A query result can never root a blocks-anchored section. |
| Field projection is not applied to non-template fetch roots | A pinned-entry or query root fetches the document, without narrowing to the fields the placement needs. |
| "Render nothing" has no affordance | Deliberately clearing a root to render nothing is honoured for already-saved data, but the UI can no longer produce it. Clearing now restores the declared field. |

## See also

-   [Binding to CMS](/docs/studio/bind-a-section-to-cms-data): the concept, and the authoring walkthrough
-   [Linked-schema matching rules](/docs/studio/linked-schema-matching-rules): the drop-time auto-binding algorithm this control sits on top of
-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): iteration context, which a document root overrides
-   [Expose Section Props](/docs/studio/expose-section-props): the props that get rebased when a root changes
