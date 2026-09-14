---
title: "How to shape components for Studio: five rules"
description: "Five rules for building React components that bind cleanly to Studio: one prop per CT field, no hardcoded children, wrappers use slots, structural name-matching, Sections are the reusable unit."
url: /studio/component-shape-rules
---

# How to shape components for Studio: five rules

## How to shape components for Studio: five rules

Before you register anything: read this

Studio has one binding surface: a registered component's props. If your components aren't shaped for that, binding fails without an error. Components render blank, authors can't reach the fields, changes require code. Follow these five rules and everything else in the BYOC chapter clicks into place.

> **When to read this:** before writing your first registerComponent() call. Also anytime a component is rendering blank / an author can't find the field they expect to edit / you're tempted to hardcode a .map() inside a wrapper.
> 
> **Related:** [Design a component library that composes, not sprawls](/docs/studio/composable-primitives), the pattern-level framing. This page is the tactical five-rule checklist.

---

## Rule 1: One atomic prop binds to one CT field

**Every registered prop binds to exactly one Content Type field.** Coarse props that take a whole object (a group, a block, a card record) silently break Studio's binder.

### Why it bites

Studio's data binder runs a **recursive single-key unwrap** on every prop type except object and array. From studio-registry/src/data-binder/retrieve-data.ts:

```
if (type !== "object" && type !== "array" && !handledRepeaterContext) {
  resolvedData = getFlattenedData(resolvedData);
```

So a Group with one real field bound to an any\-typed prop silently becomes the inner value. Read the block as an object, and every lookup returns undefined. **Blank render, no error, nothing in the console.**

### The rule

| The bound field is | Prop type |
| --- | --- |
| A scalar CMS field (text, number, boolean, url) | Its natural type (text, number, etc.) |
| A Group / Global Field / whole block object | **object** |
| A list: Modular Blocks, multi-Reference, multi-Group, scalar list | **array** |
| A genuine primitive of unknown type | any (only safe here) |

**Never any for structured data.** Match the type to the real shape.

### Full detail

-   Deep dive: [register-component, The any flatten trap](https://studio-documentation.contentstackapps.com/prompts/register-component.html#the-any-flatten-trap-why-structured-data-renders-blank)
-   Skill enforcement: register-component refuses any for object/array-shaped fields and reports the fix.

---

## Rule 2: Never hardcode child components inside a wrapper's .map() or JSX

**A component that appears as JSX inside another component's render is invisible to Studio.** It renders at runtime, but no author-facing binding surface exists for it.

### The anti-pattern (what developers try first)

```
// ❌ Card is hardcoded inside CardList's render.
function CardList({ cards }) {
  return (
    <div className="grid">
      {cards.map((c) => (
        <Card heading={c.title} description={c.subtitle} href={c.url} />
      ))}
    </div>
  );
}
```

**Why this breaks Studio:**

-   Studio receives CardList with one prop cards: array. That's ONE binding, to the list field.
-   Every <Card> instance is baked into CardList's output. Studio's binding UI shows no Card.heading, Card.description, or Card.href chips because they aren't CardList's props.
-   Authors can't rebind individual cards, swap the card variant per drop, or restructure the card design without a code change.

### The correct pattern

```
// ✅ CardList is a Layout with a slot; Card is registered separately.
function CardList({ items, itemSlot }) {
  return (
    <div className="grid">
      {items.map((item, i) => (
        <div key={i}>{itemSlot(item)}</div>
      ))}
    </div>
  );
}

function Card({ heading, description, href }) {
  return (
    <a href={href}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </a>
  );
}

registerComponent({
  type: "CardList",
  component: CardList,
  props: {
    items: { type: "array" },
    itemSlot: { type: "slot" },  // ← Component slot: author drops a card-shaped Component here
  },
});

registerComponent({
  type: "Card",
  component: Card,
  props: {
    heading: { type: "text" },
    description: { type: "text" },
    href: { type: "href" },
  },
});
```

Now Studio has CardList registered with an items binding + a slot, AND Card registered as a separate atom-composition with 3 individually-bindable props.

### The rule

**Every child component that needs its own bindings ships as its own registerComponent() call.** Wrapper components expose slots. They don't render children inline.

### Full detail

-   Recipe: [Card grid with slots](/docs/studio/card-grid-with-slots), worked example.
-   Skill: [decompose-jsx-to-atomics](https://studio-documentation.contentstackapps.com/prompts/decompose-jsx-to-atomics.html) rejects a component that hardcodes children in .map() and produces the extraction plan.
-   Concept: [The composability ladder, Rung 2](/docs/studio/the-composability-ladder).

---

## Rule 3: Wrappers get slot props. Content atoms carry content. Never both.

Every registered component is **one shape**:

-   **Atom**: carries a single content unit (text, image, href) via props. Zero slot props.
-   **Layout**: arranges children via slots. Composition props (spacing, columns, ratio) but zero content props of its own.
-   **Compound**: both content AND arrangement, so **reject it**. Decompose into an atom + a layout.

The compound is the trap: a Card that takes heading, description, href AND .map()s a list of tags inside. Split it: Card becomes a layout with three slots (Header, Body, Footer). The atoms fill each slot.

### Why this matters

-   Atoms are recomposable by authors. Layouts are re-fillable by authors. Compounds are neither: they're the monolith you registered "to get it done."
-   Studio's binding surface only reaches props on registered atoms. A compound's inner atomics have no binding surface (see Rule 2).

### Full framework

The [four-question decision framework](/docs/studio/composable-primitives#four-questions-to-answer-when-building-any-component) enforces this at Q1 (classify Atom / Layout / Compound. Refuse compounds). Every planning skill runs it.

---

## Rule 4: Prop names should structurally match the shape they bind to

Studio does **structural matching** on binding: same child types in the same order matches even if names differ. That's the saving throw, not the design intent. Rely on it and same-type siblings can silently misalign.

### The failure mode

Inner Card component takes {heading: text, description: text, href: link}. CT field iterates array items with {title: text, subtitle: text, url: link}. Positional remap succeeds: same types in same order, so heading takes title, description takes subtitle, and href takes url. Great.

**But:** if someone reorders the CT field to {subtitle, title, url}, positional remap now aligns heading with subtitle. **Silent visual bug, no error.**

Same-type siblings (two text fields) are the specific hazard. Order changes on the CT side flip the mapping.

### The rule

**Use a Global Field as your Section's linked schema anchor whenever the shape is reusable.** A Global Field is one shape declared once and embedded everywhere. Structure is guaranteed identical. No positional remap needed.

If a Global Field isn't the right tool for this specific case, at minimum:

-   Name your component's props to match the CT field naming, least surprising.
-   Reorder your registerComponent props schema to match the CT field order.
-   Document the coupling so a future reorder doesn't silently break authored pages.

### Full detail

-   [Binding to CMS, Linked schema](/docs/studio/bind-a-section-to-cms-data#part-1-linked-schema-declares-the-shape): the positional-remap rules with worked examples.
-   [Multi-schema section recipe](/docs/studio/multi-schema-sections-for-multiple-content-types): Global Field pattern, one Section binding across 3 CTs.

---

## Rule 5: Sections are the reusable unit. Compose Components INTO a Section, then use the Section on Templates.

**Never compose registered Components directly onto a Template's canvas.** Templates are for assembling Sections in order. Sections are the reusable composition of Components.

### The correct three-layer path

```
Component (React source)   →   Section (built once in Studio)   →   Template (assembly)
──────────────────────────     ──────────────────────────────      ────────────────────
CardList + Card               "Card Grid Section"                  Any Template
registered via                composed in Studio,                  drops that Section
registerComponent()           linked to a Global Field             into position
                              or Modular Block
```

### For the CardList + Card case

Wrong (composing on the Template every time):

-   Drop CardList Component onto each Template canvas
-   Drop Card into CardList's slot on each Template canvas
-   Re-bind everything, per Template

Right (composing once as a Section, reusing):

1.  Register CardList + Card as Components (once, in code).
2.  **In Studio: create a new Section** called "Card Grid Section." Link it to a schema (Global Field gf\_card\_list or a Modular Block).
3.  **On the Section canvas**, drop CardList Component. Into CardList's slot, drop Card Component. Bind Card.heading / .description / .href to the iteration item's fields.
4.  **Save the Section.**
5.  On any Template (blog\_post, product\_page, campaign) drop "Card Grid Section" onto the Template canvas. It carries all its bindings with it.

One Section, N Templates. Zero re-composition per Template.

### Slot terminology: the distinction that matters

Two "slot" concepts. Don't mix them up:

| Type | Where declared | Purpose |
| --- | --- | --- |
| **Component slot** (slot-typed prop) | In registerComponent({...}) schema, inside the React source | Author drops another Component into it, inside a Section canvas |
| **Section Slot** (smart container primitive) | Placed on a Section canvas via the Smart Containers palette | Template author drops another Section into it, on a Template canvas |

For the CardList pattern: use a **Component slot**, declared as itemSlot: { type: 'slot' } on CardList's registration.

For "Template authors should decide what Section fills this hole": use a **Section Slot** primitive (see [Section Slots](/docs/studio/section-slots)).

---

## The five rules on one page

| # | Rule | Failure if broken |
| --- | --- | --- |
| 1 | One atomic prop binds to one CT field. Never any for objects/arrays. | Silent blank render: binder unwraps single-key objects. |
| 2 | Never hardcode child components inside a wrapper's .map() or JSX. Every child that needs its own bindings ships as its own registerComponent(). | Studio's binding UI can't reach inner components' props. |
| 3 | Wrappers get slot props, content atoms carry content. Never both. Refuse compounds. | Compound monoliths: unbindable, unreusable, code-only variants. |
| 4 | Prop names + order should structurally match the shape. Global Field anchor whenever reusable. | Positional remap silently misaligns on CT reorder. |
| 5 | Sections are the reusable unit. Compose Components into a Section once, then use the Section on Templates. | Re-composing per Template: bindings drift, no reuse across pages. |

## Where each rule is enforced by a skill

If you're driving Studio via the LLM skills, these enforcements catch violations automatically. If you're building manually, use this as your checklist.

| Rule | Skill that enforces it |
| --- | --- |
| 1 | [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html): refuses any for object/array-shaped fields |
| 2 | [decompose-jsx-to-atomics](https://studio-documentation.contentstackapps.com/prompts/decompose-jsx-to-atomics.html): refuses hardcoded .map() children, produces the extraction plan |
| 3 | [design-component-library](https://studio-documentation.contentstackapps.com/prompts/design-component-library.html): runs Q1 of the four-question framework, rejects compounds |
| 4 | [design-section-from-jsx](https://studio-documentation.contentstackapps.com/prompts/design-section-from-jsx.html): proposes the linked-schema shape, recommends Global Field anchor |
| 5 | [build-repeating-section](https://studio-documentation.contentstackapps.com/prompts/build-repeating-section.html) + [build-section](https://studio-documentation.contentstackapps.com/prompts/build-section.html): enforce Section-as-reusable-unit, reject compose-on-Template patterns |

## When you have doubts

-   Component rendering blank with no error: check Rule 1 (flatten trap).
-   Author asks "why can't I edit this?": check Rule 2 (hardcoded child).
-   Component grew 15 props over 3 sprints: check Rule 3 (compound, decompose).
-   Bindings misalign after a CT reorder: check Rule 4 (positional-remap fragility).
-   Same composition being rebuilt on multiple Templates: check Rule 5 (build a Section, reuse it).

## Related reading

-   **[Design a component library that composes, not sprawls](/docs/studio/composable-primitives)**: pattern-level framing (atoms + layouts + 4-question framework).
-   **[Register a component](/docs/studio/register-components)**: the mechanics of registerComponent(), including the flatten-trap deep dive.
-   **[Component schema: prop types](/docs/studio/component-schema-prop-types)**: every prop type Studio resolves for a component.
-   **[Card grid with slots](/docs/studio/card-grid-with-slots)**: the canonical worked example of Rules 2, 3, 5 applied together.
-   **[Binding to CMS](/docs/studio/bind-a-section-to-cms-data)**: linked schema + auto-binding rules (Rule 4).
-   **[The composability ladder](/docs/studio/the-composability-ladder)**: how composition runs from Component to Section to Section-in-Slot to Template.
