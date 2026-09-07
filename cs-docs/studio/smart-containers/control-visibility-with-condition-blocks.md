---
title: "Control Visibility with Condition Blocks"
description: "Learn how to use Condition Blocks inside Repeaters to render different designs based on item type, such as Modular Block types or Reference content types."
url: /studio/control-visibility-with-condition-blocks
uid: blt1377dd5b70bb5358
---

# Control Visibility with Condition Blocks

## Control Visibility with Condition Blocks

A **Condition Block** lets you switch designs based on the current item's type. It is used **inside a [Repeater](/docs/studio/create-repeatable-content-with-repeaters)** when the items the Repeater iterates are **heterogeneous**, most often:

-   A [**Modular Block**](/docs/studio/rendering-modular-block-fields) list where each block has a different schema (e.g. hero, quote, cta)
-   A [**Reference**](/docs/studio/rendering-reference-fields) field that points to multiple content types (e.g. product, event, article)

Think of it as a switch statement inside the canvas: depending on what kind of thing the current iteration is, show this design or that design.

## When to Use a Condition Block

| You have… | Reach for a Condition Block? |
| --- | --- |
| A [Modular Block](/docs/studio/rendering-modular-block-fields) field with multiple block types (each block has a different schema) | Yes |
| A multi-type [Reference](/docs/studio/rendering-reference-fields) field pointing to several content types | Yes |
| A list that needs different designs based on a discriminator field | Yes |
| A homogeneous list where every item has the same shape | No: just put a single component inside the Repeater |
| Hide/show based on a non-discriminator boolean | No: use a regular component's visibility prop instead |

If the data is "different things in the same list, each rendered its own way" → Condition Block. If the data is "same shape every time" → just a component inside the Repeater is enough.

## How It Works

You'll find the Condition Block tile in the **Smart Containers** palette category, alongside [Repeater](/docs/studio/create-repeatable-content-with-repeaters) and Section Slot. Nest it inside a Repeater for most use cases:

1.  Drop a **Repeater** on the canvas and bind its source (e.g. template.body\_blocks for a Modular Block field, or template.recommendations for a multi-type reference).
2.  Inside the Repeater, drop a **Condition Block**.
3.  **Select the Condition Block via the Layers tab** (not by clicking the canvas; see below).
4.  In the right panel, set the **When Condition** (the dropdown lists the discriminators available in the iteration scope: block type names for Modular Blocks, content type UIDs for References).
5.  Inside the Condition Block, design what should render when the condition is true.

Repeat: add more Condition Blocks inside the Repeater, one per case.

### Selecting a Condition Block: use the Layers tab, not the canvas

Same caveat as [Repeaters](/docs/studio/create-repeatable-content-with-repeaters#selecting-a-repeater-use-the-layers-tab-not-the-canvas): a Condition Block renders as <div style="display: contents">: an invisible wrapper. Clicking on the canvas where the Condition Block "is" selects the child inside it, not the Condition Block itself.

![Condition Block selected via the Layers tab in a Card Grid section — Layers shows Header / Box / Repeater (No source configured) / Section Slot / Condition Block (selected, "No condition configured") / Contents. The Condition Block chip sits on top of the section's heading on the canvas because the Condition Block has no DOM box of its own. The right panel shows Configuration → When (Select Condition dropdown) + Preview Mode + Properties → Contents.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am469476d7bc940edb/3067150a0fbdd2e1d11cd521/condition-block-properties.png)

**To select a Condition Block, switch the left panel to the Layers tab and click the Condition Block's row there.** Only then does the right panel show its **When Condition** builder. This is the only way to set or change a Condition Block's discriminator after it's been dropped.

The Layers tree exposes the Condition Block's nested structure: the Condition Block itself, with a child Contents row (the slot inside the block that holds whatever should render when the condition is true). Both rows are reachable only through Layers: the Condition Block row to set the When Condition, the Contents row to drop the actual design that renders when the condition matches.

### The right panel: When and Preview Mode

When the Condition Block is selected (via Layers), the right panel has a **Configuration** group with two controls:

**Preview Mode**: same toggle as a [Repeater](/docs/studio/create-repeatable-content-with-repeaters#configuration):

-   **Off** (default): the Condition Block's children render on the canvas regardless of whether the condition matches the current iteration. This lets you author the design without losing it whenever the previewed entry doesn't satisfy the condition.
-   **On**: the Condition Block evaluates its condition against the current iteration item and renders children only when truthy. Use this to verify the conditional really fires the way you intended before deploying.

This is purely an authoring aid; deployed rendering always evaluates the condition.

**When Condition**: three picks:

| Part | What you choose |
| --- | --- |
| **Field to test** | A field on the current iteration item. Studio shows fields available on whatever the parent Repeater is iterating: block type for Modular Blocks, \_content\_type\_uid for References, any field for Group lists. |
| **Operator** | How to compare. Studio offers different operators depending on the field's data type (see below). |
| **Value** | What to compare against. Free-form for strings/numbers; dropdown for enums and known options (block type names, content type names, booleans). |

### Operators available per field type

The operator dropdown adapts to what kind of field you picked:

| If the field is a… | The operators offered are |
| --- | --- |
| **Single-line text / URL / multi-line text** | equals, not equals, contains, does not contain, starts with, ends with, matches (regex), is empty, is not empty |
| **Number** | equals, not equals, less than, less than or equal, greater than, greater than or equal |
| **Boolean** | is true, is false |
| **Date** | before, after, equals (with date and relative-date pickers) |
| **Select / Choice (single or multi)** | is one of, is none of |
| **Group with multiple / list** | is empty, is not empty, length equals, contains an item with a given field value |
| **Reference** | content type is, content type is not |
| **Modular Block** | is of type, is not of type |
| **File / Image** | has value, is empty |

### How Studio decides whether to render

For each item the Repeater produces, Studio walks the Condition Blocks in the order they're listed in Layers. For each one:

-   **Matches** → the Condition Block's children render. The next Condition Block is still checked; both can match.
-   **Doesn't match** → the Condition Block renders nothing for this iteration. Move on.

Two Condition Blocks can both match the same iteration. They're **independent guards**, not a switch with break, both render if both match. If you want exclusive behaviour ("if hero, render hero design; otherwise render fallback"), make the conditions disjoint.

### Bindings inside a Condition Block

Inside a Condition Block that sits inside a Repeater, repeater.\* (picker root: "Repeater Data") refers to the **current iteration item** that matched the condition. So if the condition is block is of type hero, repeater.headline inside that Condition Block refers to the matched hero block's headline. The SDK encodes these as RepeaterBindingValue with a repeaterUID, distinct from template-level TemplateBindingValue.

-   For [Modular Blocks](/docs/studio/rendering-modular-block-fields): the blocks union narrows to just the matched type inside the Condition Block, so repeater.\* autocompletes the matched block's fields.
-   For [References](/docs/studio/rendering-reference-fields): the referenced content type is known inside the Condition Block, so repeater.\* autocompletes the referenced CT's fields.

## Inside a Repeater Iterating Modular Blocks

A blog\_post content type has a body\_blocks field: a Modular Block list where each block can be one of hero, feature\_grid, quote, or cta. Each block type has its own schema.

![Page template with a Repeater bound to template.body_blocks and four Condition Blocks per Modular Block type](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb7b1895cbbc51dec/b853c8c19a30569085a00d26/containers-condition-modular-blocks-tree.png)

At render time, the Repeater iterates body\_blocks. For each block:

-   A hero block matches the first Condition Block → renders the Hero.
-   A feature\_grid block matches the second → renders the feature grid.
-   And so on for each block type.

One composition, four different designs, one Repeater + four Condition Blocks. Authors add blocks in any order and repeat block types; Studio renders each one correctly.

See [Modular Blocks](/docs/studio/rendering-modular-block-fields) for how the underlying field is modelled and how the blocks union is exposed to Studio.

## Inside a Repeater Iterating Reference Fields

A recommendations field on blog\_post is a [Reference](/docs/studio/rendering-reference-fields) field that points to entries from multiple content types: product, event, article. You want each kind rendered with its own card design.

![Repeater bound to template.recommendations with three Condition Blocks — product, event, article — each rendering its own card](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am33aefc0ef5fc7e6a/dbfb41014bc5de71cde1f218/containers-condition-references-tree.png)

Same idea, the Repeater iterates the reference list; each iteration is a different content type; each Condition Block matches its type and renders the appropriate design. The discriminator under the hood is \_content\_type\_uid on the referenced entry, exposed in the picker as "content type is".

See [References](/docs/studio/rendering-reference-fields) for how multi-type reference fields are modelled.

## Standalone Use (Rare)

Condition Blocks are almost always nested inside a Repeater, because that's where heterogeneity naturally appears. But a Condition Block can sit at the **template level** too, directly inside a section or template, not inside a Repeater. In that case the discriminator is a field on the template/entry itself, not on a per-item iteration.

Common standalone uses:

-   **Audience / variant switch**: Condition Block on template.audience to render a different design when the entry is targeted at a specific audience (when not using the platform's Personalize feature directly).
-   **Feature flag**: Condition Block on a boolean like template.show\_promo to gate an entire section.
-   **Stage gating**: Condition Block on template.status to render preview-only scaffolding when the entry is in draft.

For these standalone cases the repeater.\* root doesn't apply; bindings inside the Condition Block come from template.\* as usual.

## Multiple Condition Blocks for One Type (Allowed but Rare)

You can have two Condition Blocks both matching the same block type, useful for things like "show this hero design for entries with featured: true, and that hero design otherwise". Both render if both match (they are independent guards, not switch/break).

For simple "true/false" splits this works. For richer conditional logic, consider modelling it as separate block types instead.

## Condition Blocks vs. Section Slots

Both let the page vary based on data, but in different ways:

| Need | Condition Block | Section Slot |
| --- | --- | --- |
| Different designs per item type in a list | Yes | Slots don't switch on data |
| Different content per page instance | Conditions don't switch on page | Yes |
| Fixed structure, dynamic content | Yes | Slots leave content open |
| Author-chosen component variations | Conditions are data-driven | Yes: slots are author-chosen |

Use Conditions for data-driven branching; use Slots for author-driven flexibility.

## Common Pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| Condition Block doesn't render anything | Condition never matches the current iteration | Check the discriminator, for Modular Blocks, confirm the block type UID matches; for References, confirm the entry's CT UID matches |
| Two Condition Blocks for the same type both render | They're independent guards, not exclusive cases | Make one condition more specific, or accept both rendering and order them intentionally (most-specific condition first) |
| Binding inside a Condition Block doesn't resolve | The condition narrowed to a type that doesn't have that field | Only fields on the matched block / entry type are available inside the Condition Block. Verify the field exists on that type. |
| Adding a new Modular Block type doesn't render anything | No Condition Block matches the new type | Add a Condition Block for the new type, or a fallback Condition Block at the end that catches anything unmatched |

## See Also

-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): the sibling pattern; Condition Blocks almost always live inside one
-   [Modular Blocks](/docs/studio/rendering-modular-block-fields): the most common heterogeneous source
-   [References](/docs/studio/rendering-reference-fields): multi-type reference fields are the other common heterogeneous source
-   [Section Slots](/docs/studio/section-slots): author-driven content variation (the contrast above)
