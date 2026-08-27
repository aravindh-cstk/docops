---
title: "Linked-Schema Matching Rules"
description: "Reference for every rule and edge case in Studio's algorithm that matches a section's linked schema to fields on a template's connected content type."
url: /studio/linked-schema-matching-rules
uid: blt34a7c81407940869
---

# Linked-Schema Matching Rules

## Linked-Schema Matching Rules

When a section is dropped onto a template, Studio looks for fields on the template's connected content type that **structurally match** the section's linked schema. This page is the reference for the matching algorithm: every rule, every edge case.

For the concept-level explanation, see [Linked schema](/docs/studio/link-content-types-with-linked-schema) and [Auto-binding](/docs/studio/auto-binding-by-drop-location).

## The Match Question Studio Asks

For each candidate field on the template's content type schema, Studio asks:

> Could a section configured for <section's linked field> bind to <this template field> and have its internal bindings resolve correctly?

The answer is yes when **the structure matches**. Field names don't have to be the same, and Studio builds a positional remap by data type when names differ.

## Per-Data-Type Matching Rules

### data\_type === "group" or "global\_field" (and multiple flag agrees)

A match requires:

1.  Same number of immediate children
2.  The sorted set of children's data\_types is identical

The child names can differ; Studio builds a positional remap (e.g. section's heading ↔ page's title) when names don't match.

![Four matching examples for group / global_field fields — identical multisets match (order-invariant); different child counts or types do not](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3dc7445bc1abdfd3/9a68bf3547ddbc8113efc0af/reference-group-matching-examples.png)

### data\_type === "blocks" (modular blocks)

Looser rule: a match is declared if the section's blocks union and the template field's blocks union share **at least one block UID**.

![Three rows showing the modular blocks intersection rule — any shared block UID declares a match; disjoint unions do not](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1fc8b8f4343988ae/119c4955de94174589bab1f5/reference-blocks-matching-examples.png)

Why looser: sections typically wrap their Repeater in a ConditionBlock that narrows to one specific block UID, so they care that the targeted block exists on both sides, not whether the unions are equal. Strict set equality would refuse the common recursive-shape pattern where the template field's nested modular\_blocks allows only the inner block type while the section's modular\_blocks allows several at root.

### data\_type === "reference"

Strict rule: a match requires the section's reference\_to union and the template field's reference\_to union to be **equal as sorted sets**. Every CT in one must be present in the other, and vice versa. Order in the schema doesn't matter (the comparison sorts both sides first), but the membership must be identical.

![Four rows showing strict sorted-set equality for reference fields — order-invariant equality matches; subsets, supersets, or disjoint unions do not](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1f1b098d10c7b1d1/95433cc0b7fa673487a8ff5c/reference-references-matching-examples.png)

Why strict (unlike blocks): references have no ConditionBlock narrowing mechanism; at runtime a reference field can resolve to any CT in its union, and the section's internal bindings assume the **exact** union it was authored against. Accepting a subset would let bindings reference CTs the template's field can't actually hold; accepting a superset would let the template surface CTs the section doesn't know how to render. Sorted-set equality is the only safe rule.

If the unions differ even by one CT, the section won't auto-bind. Fix it by aligning the reference\_to lists on both content types, or by adding a second linked-schema entry to the section that targets the alternate shape.

### Scalar types (text, number, file, etc.)

Same data\_type plus same multiple flag. No child structure to check.

![Three rows showing scalar matching — same data_type and same multiple flag matches; differences in either do not](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amceb84cd64d6f9517/921087ef4537af1173fa983a/reference-scalar-matching-examples.png)

## The multiple Flag

Across all types, the section's multiple flag must match the template field's. A single-value field never matches a multi-value field, even if the data types align.

## Three Drop Outcomes

After applying the rules, Studio computes the match count and resolves to one of three outcomes:

| Matches found | Outcome |
| --- | --- |
| **Exactly 1** | Auto-picked. The section binds to that field without user input. The right-panel **Settings → Properties** still surfaces a **DATA SOURCE dropdown** showing the bound field as the only option (the control is the same on every section drop; the menu just has one entry in this case). |
| **More than 1** | Studio binds to one (the first in schema order). The right-panel **Settings → Properties** shows the same **DATA SOURCE dropdown** with all matches; the author can switch. Per-instance: dropping the same section twice on the same template lets each instance bind to a different field. |
| **Zero** | Section drops unbound. A warning indicates no compatible field. Author can manually pick from compatible fields, or move the section to a different scope. |

![Section selected on a template canvas — right-panel Settings → Properties shows the DATA SOURCE dropdown listing the matching field(s) on the template's content type. The same dropdown appears for one-match and multi-match cases; the menu just lists more options when multiple fields match.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1dd710418fc692c5/62f6f6d243bcf621f557df4a/section-data-source-dropdown.png)

## Scope-Aware Matching

Studio doesn't only check the template's top-level fields. It walks into the **scope at the drop location**:

| Drop location | Scope walked |
| --- | --- |
| Root of the template | Top-level fields of the template's connected content type |
| Inside a Repeater | Schema of the Repeater's iteration item |
| Inside a Modular Block (under ConditionBlock) | Fields of that specific block |
| Nested combinations | Innermost scope; scopes chain |

The matcher runs against the resolved scope's schema, not the template's top-level schema. So a section anchored on gf\_card can match an items\[\] repeater of gf\_card (root scope), match a card field inside a CTA block (block scope), or scope-root-match the iteration item itself when iterating over a list of gf\_card.

### Scope-root match (special case)

When the surrounding scope **itself** mirrors the section's shape (e.g. a Repeater iterating a list of gf\_featured\_card, or a Modular Block whose schema **is** the Global Field), the section binds directly to the scope root. No wrapper field needed. The section "becomes" the iteration item.

This is what makes the section-inside-Repeater-of-its-own-shape pattern work cleanly. See [Card grid with slots recipe](/docs/studio/card-grid-with-slots).

## The Positional UID Remap

When a group or global\_field match is declared and the child names differ, Studio builds a remap by position within data-type:

![Section schema heading/body/image remapped by position to Page schema title/desc/hero via three indigo arrows](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf8fbe939c9d00f72/448705e315a827ab32e36dd4/reference-positional-remap-example.png)

Bindings inside the section that reference template.heading now resolve through page.title at render time. The author doesn't see this; the section's UI says template.heading; Studio handles the translation.

### The remap is shallow (one level deep)

The remap only translates top-level child names. **Nested groups must use the same name on both sides.**

![Three schema cards demonstrating the shallow nested-group remap — Page A matches because the nested group keeps the name 'inner'; Page B fails because it was renamed to 'content'](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am4aeae113b514e314/7ef5bc8c5ce87aa9db0d253a/reference-nested-group-remap-cases.png)

For nested shapes, **prefer Global Fields**. Embed the same Global Field everywhere; the structure is literally identical and the remap question never comes up.

## What the User Override Looks Like

If Studio's auto-pick is wrong (or if you want a non-default match), the section's right-panel Settings shows a **Linked Field** dropdown when multiple matches exist. Picking a different field:

1.  Updates the section's binding for this drop instance
2.  Builds a new positional remap against the chosen field
3.  Stores the override on the template (not on the section composition)

The override is per-instance; different drops of the same section can target different fields.

## What's NOT Supported

Documented to avoid surprises:

-   **Renaming a nested group's children** with the remap. Only top-level remap is supported.
-   **Reordering** a section's binding to a different field of the same shape via prop. Use the right-panel Linked Field dropdown instead.
-   **Cross-CT match without a linked schema entry.** A section with linked\_schemas: \[blog\_post\] will not match product's fields. Add product to the section's linked schemas to enable matching there.

## Algorithm Summary (for the Curious)

```
def match(section_field, page_scope):
    matches = []
    for page_field in page_scope:
        if not same_data_type(section_field, page_field): continue
        if not same_multiple_flag(section_field, page_field): continue
        if page_field.data_type == "blocks":
            if section_field.blocks ∩ page_field.blocks: matches.append(page_field)
        elif page_field.data_type == "reference":
            if sorted(section_field.refs) == sorted(page_field.refs): matches.append(page_field)
        elif page_field.data_type in ("group", "global_field"):
            section_children = sorted(child.data_type for child in section_field.schema)
            page_children    = sorted(child.data_type for child in page_field.schema)
            if section_children == page_children: matches.append(page_field)
        else:
            matches.append(page_field)
    return matches
```

This is illustrative; actual implementation handles edge cases like missing schemas and scope-root variations.

## See Also

-   [Linked schema](/docs/studio/link-content-types-with-linked-schema): concept page
-   [Auto-binding](/docs/studio/auto-binding-by-drop-location): scope-aware behaviour
-   [Multi-schema section recipe](/docs/studio/multi-schema-sections-for-multiple-content-types): worked example with multiple matches
