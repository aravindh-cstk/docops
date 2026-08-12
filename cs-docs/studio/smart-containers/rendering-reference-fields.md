---
title: "Rendering Reference Fields"
description: "Learn how to render Contentstack reference fields on the canvas using Repeaters and Condition Blocks, including single-CT and multi-CT patterns."
url: /studio/rendering-reference-fields
---

# Rendering Reference Fields

## Rendering Reference Fields

A **Reference field** in Contentstack points to one or more entries, either to a single content type (single-CT) or to a list of allowed content types (multi-CT). On the canvas, a reference field becomes a small collection you iterate with a **Repeater**, and inside the Repeater you wrap every binding in a **Condition Block**, one branch per content type. **This is true for single-CT references too**, not just multi-CT ones.

## Why a Condition Block Is Always Required Inside a Repeater on a Reference

Studio's own hint copy says this explicitly. When you try to bind a component to a field that lives on a referenced entry from inside a Repeater, the canvas prompts:

> _"The selected component will be wrapped inside a Condition component to support Contentstack schema requirements."_ composable-studio/src/i18n/translations/canvas.json to wrapDescription.reference

And again on hover:

> _"Wrap a Condition component to bind fields from the selected Content Type."_  
> actionDesc.reference

> _"Parent repeater is bound to reference field with single/multiple content types."_  
> parent.repeater.reference

The phrase **"single/multiple content types"** is deliberate, the rule applies to both. At the schema level, the Repeater's iteration item is typed as "an entry from one of the allowed reference\_to CTs". Until you narrow that with a Condition Block, the entry's fields aren't directly addressable through the Data Picker; you'd be binding to a polymorphic shape Contentstack can't resolve at render time. The Condition Block is the narrowing step.

## What a Reference Field Looks Like

A reference field on a content type has:

-   data\_type: "reference"
-   multiple: true for a list, false for a single referenced entry
-   reference\_to: \[...\]: the list of content type UIDs it is allowed to point at

Two shapes that need Condition Blocks on the canvas:

| Shape | reference\_to | Pattern |
| --- | --- | --- |
| **Single-CT list** | \["product"\] | Repeater → **one** Condition Block (one CT) → component bound to repeater.<field> |
| **Multi-CT list** | \["product", "event", "article"\] | Repeater → Condition Block with **N** branches → CT-specific component in each branch |

A **single-entry** reference (multiple: false) is _not_ a Repeater target. Drop the Condition Block directly on the field (still required, just no Repeater).

## Single-CT Reference List

Even when only one content type is allowed, you still wrap with a Condition Block, it just has one branch.

![Single-CT reference list rendered with a Repeater bound to blog_post.recommendations and a one-branch Condition Block wrapping a ProductCard](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am78db19fd8461eef3/73d731bfb866e0cfc4c86a12/containers-references-single-ct-tree.png)

When you drop the <ProductCard> straight into the Repeater (no Condition Block), Studio's binding hint surfaces _"Add a condition for_ _product_ _schema, then bind the component within it to the hover fields"_ (canvas.json → bindingHint.needs-condition-before). Accepting that prompt wraps the card in a Condition Block automatically.

## Multi-CT Reference List

When the reference allows several content types, each iteration of the Repeater might be a different shape. The Condition Block now has **one branch per content type**, and each branch holds a CT-specific component.

![Multi-CT reference list — Page → recommendations field → Repeater → ConditionBlock (inside the Repeater) → three sibling branches (ProductCard, EventCard, ArticleCard) inside the ConditionBlock, each keyed off repeater._content_type_uid](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am830cf8aa0359fc95/ae2d1a70b1b80c9728796167/containers-references-multi-ct-tree.png)

The discriminator is **\_content\_type\_uid**, Contentstack stamps it on every referenced entry, so it's always available inside the repeater context without any extra setup. Each branch binds props to fields that _that_ content type actually has.

### Worked example: Blog post recommendations

The blog post has a recommendations reference field pointing to product, event, and article. Each recommendation should render with its own design:

-   **product**: image, title, price, "Buy" CTA
-   **event**: date badge, title, venue, "Register" CTA
-   **article**: thumbnail, title, read-time, "Read" CTA

Steps:

1.  Drop a **Repeater** onto the canvas inside the blog post template and bind it to recommendations.
2.  Inside the Repeater, drop a **Condition Block**.
3.  Add three branches. For each, set the condition to repeater.\_content\_type\_uid == "<ct\_uid>".
4.  Drop the matching component into each branch and bind its props to repeater.<field> paths, each branch sees the same repeater context but binds different fields.
5.  Optionally add a **default** branch (or a "Skip" branch with a fallback card) for content types added later.

Result: one Repeater + one Condition Block renders a polymorphic list without any custom code on the runtime side.

## Auto-Bind Nuance: reference\_to Must Match as a Set

When a **section** with a reference field in its linked schema is dropped onto a template, Studio tries to auto-bind it to a reference field on the page. The rule for references is **strict sorted-set equality** on reference\_to:

composable-studio/src/utilities/sectionCompositionAutoBinding.ts:171-172

```
if ("reference_to" in field && (field as ReferenceField).reference_to) {
  return [...(field as ReferenceField).reference_to].sort();
}
```

Two reference fields auto-match only when their sorted reference\_to arrays are identical. Practical consequences:

-   A section whose linked schema reference points at \["product"\] will **not** auto-bind to a page reference field of \["product", "event"\], even though "product" is in both.
-   Adding one new content type to either side breaks the auto-match. You'll have to bind manually (still works fine; just not automatic).
-   Section authors targeting **multi-CT** references should pick the exact CT set they expect templates to expose. If that set isn't stable across pages, a **Global Field** or **Modular Blocks**\-based section anchor is usually a better choice than a reference (modular blocks use a looser, "at least one shared block" rule; see doFieldStructuresMatch in the same file).

> The looseness reserved for modular blocks does **not** apply to references. Reference fields require exact first-level shape equality because there's no Condition Block narrowing semantics at the _section auto-bind_ level, narrowing only happens later, inside the Repeater, when authors wrap component bindings in a Condition Block.

## Verifying Multi-CT Branches with Preview Mode

The Condition Block pattern depends on the right branch firing for the right \_content\_type\_uid. Verify before deploying:

1.  **Pick a previewed entry whose reference field spans the CTs you care about.** If the field is related\_posts allowing \[blog\_post, case\_study, event\], the entry you preview against should have references to _all three_, otherwise you'll only confirm the branches that happen to appear in the data sample. Use the entry switcher in the canvas header or the previewed-entry binding to swap to a fixture entry that covers the full union.
2.  **Select the Repeater in the Layers tab.** Right panel switches to the Repeater's Configuration + Properties.
3.  **Toggle Preview Mode on** (under Configuration). The Repeater changes from rendering its slot once to rendering it _N_ times, once per referenced entry, with each iteration's \_content\_type\_uid populated.
4.  **Walk down the rendered list and confirm each iteration picks the expected branch.** A blog\_post reference should render <BlogCard …>; a case\_study reference should render <CaseStudyCard …>; an event reference should render <EventCard …>. If two CTs render the same card, the discriminator is wrong (or one branch's condition is missing).
5.  **For the Condition Blocks themselves**, select each one in Layers and toggle Preview Mode on too. With both Repeater + Condition Block in preview, you see exactly what a visitor sees, the conditional-skip behavior is now active, so a branch whose condition doesn't match the current iteration won't render at all. This is the surest way to catch a branch that's _never_ firing because its condition is wrong (e.g. value typo in the CT UID).
6.  **Toggle back to design mode** before going back to layout work. In design mode the Condition Block keeps its children visible regardless of the current iteration, so you can edit the card without it disappearing.

Preview Mode is per-Repeater and per-Condition-Block, so inner containers stay in design mode while you verify the outer iteration. None of this changes published output, at the visitor's runtime the Repeater always iterates and the Condition Block always evaluates. See [Smart Containers → Authoring with Preview Mode](/docs/studio/contentstack-studio-overview) for the full mental model.

## Common Pitfalls

-   **Skipping the Condition Block on a single-CT reference.** Studio will refuse the direct binding and surface the _"Add a condition for_ _<ct>_ _schema"_ prompt. Add the Condition Block (one branch) and bind inside it.
-   **Wrapping a single-entry reference in a Repeater.** If multiple: false, no Repeater, just a Condition Block on the field, with the component bound inside.
-   **Expecting auto-bind across mismatched** **reference\_to** **sets.** One CT added or removed on either side breaks the section auto-bind. Bind manually, or restructure around a Global Field if you need plug-and-play behaviour.
-   **Forgetting** **\_content\_type\_uid** **in the Condition Block.** This is the only reliable discriminator on a multi-CT reference list. Don't try to branch on a field like title that exists in every CT.
-   **Designing the Condition Block at the wrong altitude.** Put the Condition Block _inside_ the Repeater, not around it. One Condition Block per iteration; not one for the whole list.
-   **Verifying with a previewed entry that doesn't cover every CT.** You'll only confirm the branches whose CT appears in the sample data, a missing branch wired against a CT not in the previewed entry stays untested. Pick a fixture entry whose reference list spans the full allowed-CT union (see _Verifying multi-CT branches with Preview Mode_ above).

## See Also

-   [Repeaters](/docs/studio/create-repeatable-content-with-repeaters): the iteration primitive used here
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): branching by content type or any other expression
-   [Modular Blocks](/docs/studio/rendering-modular-block-fields): the sibling pattern when you control the schema instead of pointing at other entries
-   [Linked schema](/docs/studio/link-content-types-with-linked-schema): how sections declare the shape they need, including references
