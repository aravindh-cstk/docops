---
title: "Rendering Modular Block Fields"
description: "Learn how to combine a Repeater with Condition Blocks to render heterogeneous Modular Block fields in Contentstack Studio."
url: /studio/rendering-modular-block-fields
uid: blt9229e97c1b3ae587
---

# Rendering Modular Block Fields

## Rendering Modular Block Fields

A **Modular Block** field in Contentstack is a list where **each item can be one of several block types**, and each block type carries its own schema. Consider a content type with a body\_blocks field whose items can be a hero, a feature\_grid, a quote, or a cta: same list, four different shapes, mixed in any order the author chooses.

That heterogeneity is what makes Modular Blocks different from a plain Group-with-multiple: true: a Repeater alone can iterate the list, but it has no way to know _which_ of the four schemas it's looking at on any given iteration, and therefore no way to bind the right component or pick the right design.

The pattern Studio uses to render a Modular Block field is **Repeater + one Condition Block per block type**.

## Why a Repeater Alone Isn't Enough

A [Repeater](/docs/studio/create-repeatable-content-with-repeaters) bound to a multi-value field renders its contents once per item. That works perfectly when every item shares the same schema: a list of testimonials, a list of related posts. The single design inside the Repeater applies uniformly to every iteration.

Modular Blocks break that assumption. On iteration 1 the item might be { hero: { headline, image } }. On iteration 2 it might be { quote: { text, attribution } }. Iteration 3, another hero. The fields aren't the same, so a single fixed design can't bind to them: repeater.headline is meaningful for a hero item but undefined for a quote item.

What you actually want: **one design per block type, and Studio picks the matching design for each iteration item based on the block uid present on it.** That's what a Condition Block does.

## The Canonical Pattern

![Canonical pattern — Repeater bound to blog_post.body_blocks with one Condition Block per block type (hero, feature_grid, quote, cta)](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am3f2231bd0d70fc8e/06f876d98e36b2d820f9c899/containers-modular-blocks-canonical-tree.png)

Three rules to keep in mind:

1.  **The Repeater binds to the Modular Block field itself.** Not to one of the block types, to the whole list.
2.  **Each Condition Block narrows the iteration to ONE block-type-uid.** It's the condition item is a hero (or feature\_grid, etc.). Studio evaluates these per-iteration; the matching condition's children render, the others are skipped.
3.  **Components inside a Condition Block bind via repeater.<field>, and the field set available to them is that block type's schema, not the union.** This is the payoff: inside the hero condition the picker shows headline, image, cta\_label; inside the quote condition it shows text, attribution, author\_role. No null-checks, no if (item.hero) gymnastics.

The render order is the data's order. Whatever order the author placed the blocks in the entry is the order they appear on the canvas: the Repeater iterates left-to-right, and each item picks exactly one Condition Block.

## Worked Example: blog\_post.body\_blocks

A blog post content type with a Modular Block field body\_blocks whose four block types are hero, feature\_grid, quote, cta:

![blog_post content type schema — title, slug, and a body_blocks modular_blocks field with four block-type schemas](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am37da38b4d9c8548b/cf83cb85ecd877243337cc3e/containers-modular-blocks-schema.png)

A blog post template with this Modular Block authored on the canvas looks like this in the Layers tab:

![Blog Post Layers tree — Container holds a Repeater iterating body_blocks with four Condition Blocks (hero, feature_grid, quote, cta) and their components](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am80cb38127b6c95c2/c36706cb7135dce7488cfeac/containers-modular-blocks-layers-tree.png)

Bindings inside each branch:

| Block branch | Component | Prop bindings |
| --- | --- | --- |
| hero | Hero | headline → repeater.headline, image → repeater.image, ctaLabel → repeater.cta\_label |
| feature\_grid | FeatureGrid | heading → repeater.heading, items → repeater.features (a nested list) |
| quote | Quote | text → repeater.text, attribution → repeater.attribution |
| cta | CTA | label → repeater.label, url → repeater.url, variant → repeater.style |

Given an entry whose body\_blocks is \[hero, quote, feature\_grid, quote, cta\], the canvas (with Preview Mode on the Repeater) renders exactly that: Hero, Quote, FeatureGrid, Quote, CTA, in that order.

## How the Data Picker Presents This

The Data Picker is **scope-aware**: it shows different fields depending on what is selected. That's what makes the pattern ergonomic.

-   Click the Repeater's Items binding, and the picker shows the page entry's schema. Pick body\_blocks. The Repeater is now iterating the modular block list.
-   Inside a Condition Block (say, the one matching feature\_grid), select the FeatureGrid component and click its heading prop, and the picker shows **only the feature\_grid block's fields**: heading, features. The other block types' fields are not in the picker, because the surrounding condition has narrowed the scope.

Internally, this narrowing is what getFieldSchemaAtPath does when it descends into a Modular Block field: with no block uid in scope it returns a **merged** schema (the union of all block fields, used by Studio for auto-binding heuristics); with a block uid in scope, exactly what a Condition Block establishes, it returns just that block's schema.

> See composable-studio/src/utilities/sectionCompositionAutoBinding.ts (lines ~60–100, getFieldSchemaAtPath + the "blocks" branch) for the source of truth. The same file's doFieldStructuresMatch (line ~197) explains why Modular Blocks are matched **loosely** during section auto-binding: a section's Repeater is typically wrapped in a single Condition Block, so it only needs ONE common block uid with the page's modular block field, not strict superset/subset equality.

## Build the Pattern Step by Step

Concretely, to build the body\_blocks example from scratch on a blog post template:

1.  **Drop the Repeater.** From the Smart Containers palette, drop a Repeater onto the canvas at the position where the body should render. The Repeater renders as <div style="display: contents"> and adds no visible box: to select it, use the Layers tab, not the canvas.
2.  **Bind the Repeater's Items.** Layers, click Repeater. Right panel, Data tab, click Items. In the picker, select body\_blocks from the page entry's fields. The Repeater is now iterating the Modular Block list. Turn on **Preview Mode** in the Configuration group to see real iterations on canvas.
3.  **Drop the first Condition Block.** Inside the Repeater (use Layers to land it there cleanly), drop a Condition Block. Right panel, Properties, set the condition to _When block is hero_. The picker scope is now narrowed to the hero block's schema.
4.  **Drop the Hero component inside the Condition Block.** Bind each prop using repeater.<field>, for example headline → repeater.headline. The Data Picker, scoped to the hero branch, only exposes the hero block's fields, so there's nothing to get wrong.
5.  **Repeat for feature\_grid, quote, cta.** Each is a sibling Condition Block inside the same Repeater, each narrowed to a different block-type-uid, each holding the component you want to render for that type.
6.  **Verify on the canvas.** With Preview Mode on and the Repeater bound, the canvas now renders the entry's body in source order, with each item picking exactly one Condition Block's design.

## What Gets Persisted

The composition JSON for this pattern is just nested nodes: Repeater node, ConditionBlock nodes, Component nodes, with bindings on each. Studio doesn't generate one fused "modular renderer" node; the persisted shape mirrors the Layers tree exactly. That's why the same pattern survives reuse in sections: a section containing Repeater → ConditionBlock(hero) → Hero can be dropped onto any page whose schema includes a Modular Block field that allows hero, and the section's auto-binding code only requires _one_ shared block uid (see the loose-match rule in doFieldStructuresMatch).

## Common Pitfalls

**Forgetting the Condition Block.** Dropping components directly inside the Repeater (no Condition Block layer) means _one_ design tries to render for _every_ block type. Bindings like repeater.headline are undefined whenever the iteration item isn't a hero. You see one block type render correctly and the rest render empty.

**Binding to template.X instead of repeater.X.** template.\* resolves to the page entry. Inside a Repeater, repeater.\* resolves to the current iteration item. If you bind headline → template.headline from inside the Repeater, you'll get the page's top-level headline field (if any) on every iteration, never the per-block field. The picker doesn't always make this obvious; double-check the path string.

**Missing block types in the design.** Modular Blocks let editors choose freely from the union. If your content type defines four block types but your canvas only has three Condition Blocks, the fourth block type produces a _gap_ in the render: the Repeater iterates the item, no condition matches, nothing renders. Either add the missing Condition Block or accept the gap as intentional (e.g. a draft-only block type your front-end deliberately hides).

**Trying to compare or sort across block types.** A Condition Block fans the design out per block type: there's no single binding context that sees fields from two different blocks side-by-side. If you need cross-block logic (e.g. "show a divider between any two adjacent CTAs"), that belongs in component code, not in Studio's binding graph.

**Wrapping the whole list in a single Condition Block.** A Condition Block matches _one_ block uid. If you wrap the Repeater itself in a Condition Block, you're saying "only render this Repeater when the page's modular block field is of type X", which isn't what Modular Blocks are. The Condition Blocks belong **inside** the Repeater, one per type.

## Nested Modular Blocks

A block type's schema can itself contain a Modular Block field: a common shape for recursive content like nested sections, accordion groups, or tabbed layouts. The pattern doesn't change; it just nests.

Take a section\_group block on body\_blocks whose schema is { heading, items\[\] } where items is itself a Modular Block field allowing text\_card and image\_card. The Layers tree becomes:

![Nested Modular Blocks — a section_group Condition Block contains a Heading and an inner Repeater on repeater.items with text_card and image_card branches](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ambcc746ee3c2e7be3/d32420e446aa82c1598ec4ed/containers-modular-blocks-nested-tree.png)

Two things to notice:

-   The **inner Repeater binds to repeater.items**, not template.items. repeater.\* always refers to "the iteration item of the _nearest_ enclosing Repeater": once you're inside the inner Repeater, repeater.\* refers to the inner iteration item, not the outer one. There's no outerRepeater.\* token; if you need the outer context, expose it as a section prop or restructure.
-   Section auto-binding stays loose for nested cases too. A section's Repeater of items whose Condition Block matches text\_card will bind successfully against a page whose section\_group.items allows text\_card + image\_card + a third type: only one shared block uid is required at each level.

## See Also

-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): the iteration primitive on its own
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): design switching on per-item type
-   [Reference fields](/docs/studio/rendering-reference-fields): the same Repeater + Condition pattern, required for **both single-CT and multi-CT** references
-   [Section auto-binding](/docs/studio/auto-binding-by-drop-location): how sections containing this pattern get matched against page schemas
