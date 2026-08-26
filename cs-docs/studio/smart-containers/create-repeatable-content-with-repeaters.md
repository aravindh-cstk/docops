---
title: "Create Repeatable Content with Repeaters"
description: "Learn how to use Repeaters in Contentstack Studio to render multi-valued fields like Modular Blocks, Reference fields, and Groups as iterated lists of components."
url: /studio/create-repeatable-content-with-repeaters
uid: blt815626101c696c82
---

# Create Repeatable Content with Repeaters

## Create Repeatable Content with Repeaters

Use a **Repeater** whenever a field can hold multiple values you want rendered the same way each time: a Modular Block list, a Reference field with multiple entries, a Group with multiple: true, or any array field. Drop the Repeater on the canvas, bind it to the multi-valued field, drop a component (or section) inside it, and each value in the bound field produces one rendered instance.

It's the building block for everything list-shaped: card grids, navigation menus, feature lists, accordions, tabs, carousels.

## When to Use a Repeater

| You have… | Reach for a Repeater? |
| --- | --- |
| A field that holds **multiple values** rendered the same way (a Group with multiple: true, an array field) | ✅ |
| A **Modular Block** list with multiple blocks | ✅, pair with a [Condition Block](/docs/studio/control-visibility-with-condition-blocks) inside for the heterogeneous shapes |
| A **Reference field** pointing to multiple entries | ✅, wrap every iteration-item binding in a [Condition Block](/docs/studio/control-visibility-with-condition-blocks), **even for a single-CT reference**. Contentstack's schema requires the Condition to narrow the iteration item to the referenced entry's shape. See [References](/docs/studio/rendering-reference-fields). |
| A single non-repeating field | ❌: just bind a component directly |
| You want N drop targets with different content per slot | ❌: use [Section Slots](/docs/studio/section-slots) instead |

If the data is "the same shape, N times," use a Repeater. If the data is "fixed, but I want authors to drop different things in different positions," use a Section Slot.

## How to Add One

The Repeater tile lives in the **Smart Containers** palette category.

1.  Drop the **Repeater** onto the canvas where you want the list
2.  Select the Repeater, **via the Layers tab, not by clicking the canvas** (see below)
3.  Right panel → **Data** tab → bind the Repeater's Items property to a multi-valued field
4.  Drop a component (or a section) inside the Repeater
5.  Bind that component's props through the Data Picker's **"Repeater Data"** root; paths render as repeater.<field> and resolve to the _current iteration item_ at render time. template.\* (the page entry) and repeater.\* (the iteration item) are **separate picker roots**; the picker exposes both so you can mix page-level and iteration-level fields on the same component. See [What iteration looks like in practice](#what-iteration-looks-like-in-practice) below.

A Repeater authored on Card Grid section, **Preview Mode on**, bound to related\_posts, iterating two real blog post entries; Properties panel shows Items: Related Posts and Contents: Condition Block:

![Repeater selected in the Card Grid section. Right panel shows Configuration → Preview Mode (on) and Properties → Contents (Condition Block) + Items (Related Posts). Canvas renders two iteration cards with real titles from the previewed entry's related posts.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am2af4f237b7a2a2c0/fb706ba11a603ff500984bb6/repeater-properties.png)

Clicking the Items field opens the Data Picker to pick the multi-valued field that drives iteration. Once bound and Preview Mode is on, each value in that field produces one render of whatever you drop into the slot.

## Selecting a Repeater: Use the Layers Tab, Not the Canvas

This is the single most important thing to know about authoring with Repeaters (and [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks), which behave the same way).

![Card Grid section Layers panel showing the full tree: Header / Box / Repeater ("Iterates Related Posts") / Condition Block ("When Blog Post") / Box / Card. Studio annotates each Repeater + Condition Block row with what it's bound to.](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am223a13fbc0609654/545bf85546c7f873fbf2f4ff/layers-panel-card-grid.png)

A Repeater renders as <div style="display: contents">: an **invisible wrapper** in the DOM tree. It adds no visible box, no margin, no padding, no border. Whatever you dropped _inside_ the Repeater is what's actually painted on the canvas.

Consequence: clicking on the canvas where the Repeater "is" actually clicks **the child** (the Section Slot, Hero, Card, whatever's inside). You can't select the Repeater by clicking the canvas because there's nothing there to click. Studio's right panel then shows the child's properties, not the Repeater's.

**To select a Repeater, switch the left panel to the Layers tab and click the Repeater row there.** Only then does the right panel show the Repeater's Configuration + Properties: Preview Mode, Contents, Items.

The same holds in reverse: when you author the Repeater's contents (the components inside), clicking those on the canvas works fine, because they have their own DOM. Layers is needed specifically when the thing you want to select is structural (Repeater, Condition Block, Section composition wrapper) and adds no DOM of its own.

## The Repeater's Right Panel: What Each Section Means

When the Repeater is selected (via Layers), the right panel has two groups:

### Configuration

| Field | What it does |
| --- | --- |
| **Preview Mode** | A toggle that flips the canvas rendering of _this Repeater_ between design-time and preview-time. With Preview Mode **off** (the default), the Repeater renders its slot once, showing the single child design you authored. With Preview Mode **on**, the Repeater fetches the bound values and renders the child _N times_, once per real item, so you see the layout the way visitors will. The toggle is stored on the node as metadata.mode = "design" or "preview". It's per-Repeater, so you can flip the outer Repeater into preview mode while leaving inner Repeaters in design mode for focused authoring. |

Preview Mode is purely an authoring aid; it does NOT affect deployed/published rendering. At the visitor's runtime, the Repeater always iterates the bound values. The toggle just controls whether the _canvas_ shows the design-time single-slot view or the live N-item view.

### Properties

| Field | What it does |
| --- | --- |
| **Contents** | A status display, not a stored prop. Shows The slot is empty, with no component added yet when no child has been dropped inside, and updates once a child is present. Reads from node.slots.root under the hood. |
| **Items** | The bound multi-valued field, which is what the Repeater iterates over. Click **Bind items** to open the Data Picker and pick any multi-valued source (a Group with multiple: true, a Modular Block field, a Reference field that allows multiple, etc.). Stored as node.props.items = { type, binding: { type, value } } like any other prop binding; see [CMS Binding: Static value vs bound](/docs/studio/bind-cms-content-to-studio-components#static-value-vs-bound--same-prop-different-source). |

The two groupings (Configuration vs Properties) map to a clean separation: **Configuration** is for author-time controls that don't affect the data model; **Properties** is for the data model itself (what's bound, what's inside).

At render time, the Repeater renders its inner content once per value in the bound field, with template.\* resolving to the current item.

## What Iteration Looks Like in Practice

Inside a Repeater, the Data Picker exposes the iteration scope as a new root labelled **"Repeater Data"**, which is the current iteration item. Bind a Heading's text to repeater.title (Repeater Data → title) inside a Repeater, and at render time the Heading shows the title of _whichever item the Repeater is currently rendering_. One binding, N rendered Headings, one per value in the bound field. The SDK distinguishes these from template-level bindings: iteration bindings carry a repeaterUID discriminator (RepeaterBindingValue) while template-level bindings do not (TemplateBindingValue).

### Worked example: binding a card inside a Repeater

Say a landing\_page template has a features field (Group, multiple: true, with children title:text and description:text). On the canvas you drop a Repeater, bind Items to template.features, then drop a Card component inside the Repeater. Now you open the Card's right panel → Data tab and click the binding chip on each prop.

The Data Picker shows **two roots** stacked vertically:

| Picker root | What it surfaces | When to pick from here |
| --- | --- | --- |
| **Repeater Data** (repeater.\*) | title, description: the fields of _one_ feature item | Anything that should change per iteration. **Pick from here.** |
| **Linked Template Entry** (template.\*) | The whole landing\_page entry: brand\_color, hero\_image, features (the list itself), etc. | Page-wide fields shared by every card (e.g. the brand colour applied to every card's border). |

Bindings you write: - Card.heading → Repeater Data → title (stored as repeater.title), renders the first feature's title in iteration 1, the second feature's title in iteration 2, and so on - Card.body → Repeater Data → description (stored as repeater.description) - Card.borderColor → Linked Template Entry → brand\_color (stored as template.brand\_color), same colour on every card, because the source is the page entry, not the iteration

**The wrong way (common mistake):** picking Linked Template Entry → features → 0 → title. That hard-codes "always show the first feature's title" on every iteration; every card renders identically. The Repeater Data root is the only one that participates in iteration.

A visual mnemonic: **"Repeater Data" is the picker root whose fields _change_ each render; "Linked Template Entry" is the root whose fields _stay the same_ across iterations.**

### Two things available inside the iteration scope

| What it is | How to use it |
| --- | --- |
| **The current item** (repeater.\*, picker root "Repeater Data") | The item's fields are exposed in the picker, bind any prop to any field. The item's shape depends on what the Repeater is iterating: a Modular Block list gives you the matched block's fields, a Reference list gives you the referenced entry's fields, a Group with multiple: true gives you one group instance's fields. |
| **The current index** | The zero-based index of the iteration: 0 for the first item, 1 for the second, etc. The picker exposes it as a separate option so you can bind a prop like "card number" to it. |

There isn't a separate "first / last / total" exposed. If your design needs them, the simplest patterns are: - **"First item is special":** drop a [Condition Block](/docs/studio/control-visibility-with-condition-blocks) inside the Repeater with a condition on the index (e.g. "index equals 0"). - **"Show total count":** bind a Text component outside the Repeater to the bound field's length (template.items.length on a Connected template, or the Pinned Query's count on a Freeform template).

### Nested Repeaters: why they don't confuse each other

Drop a Repeater for products, drop another Repeater inside it for each product's features, and bindings inside the inner Repeater still resolve correctly. The picker shows you the right iteration scope based on where you are in the Layers tree: repeater.\* (Repeater Data) inside the inner Repeater is the current feature, not the current product. To reach the outer Repeater's scope from inside, the picker exposes the outer Repeater as a separate option in the Data Picker; pick from it explicitly when you need it.

Authors don't need to think about which Repeater they're "inside"; the picker shows whichever scopes are reachable from the current selection.

### Reaching the outer page scope from inside a Repeater

Inside a Repeater, repeater.\* in the picker (Repeater Data) refers to the _current iteration item_, not the page entry. If you need a page-level field (e.g. the page's brand\_color to style each card the same), the picker offers the page scope (Linked Template Entry) as an explicit option you can switch to.

This is intentional. It means a section that uses a Repeater behaves the same way wherever it's dropped: on a template root, inside another Repeater, inside a section slot. The Repeater's contents always resolve against the current iteration item, never accidentally against the page entry.

## Quick Example: A Feature List

A landing page has a features field (Group with multiple: true, containing title and description children).

![Landing page with a Why us Heading and a Repeater bound to template.features rendering a Box of Heading + Text bound to repeater.title and repeater.description](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am287fde491b9cad59/7e987667b9e8dda6b80bd2a9/containers-repeater-feature-list-tree.png)

At render time:

![Rendered Why us heading above three feature cards side by side, each with a title and description](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amf13761a5de39e23e/59f621f3471c8e733e8b38e7/containers-repeater-render-output.png)

One Repeater drop, three rendered feature cards, no hand-coding of repetition.

## Repeater Inside a Section

Sections often own a Repeater as their core wrapper. The classic pattern (covered in [Card grid with slots](/docs/studio/card-grid-with-slots)):

![Card Grid section canvas showing the authored grid with Repeater and Section Slot](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amb0cc8493e6b8acbc/3bf3335c01f00846081c0dda/section-card-grid-authored.png)

The section's linked schema declares the shape of template.items\[\]; auto-binding picks the right field on the template's content type; the slot inside the Repeater lets template authors drop whatever item component they want.

## Repeater Inside a Repeater (Nested)

Studio supports nested Repeaters, useful for nested data shapes like a feature comparison table (rows of products, with multiple cells per row).

![Nested Repeaters for product comparison — outer Repeater bound to template.products, inner Repeater bound to repeater.features renders Text bound to repeater.value](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/amac8baa27fca55782/4fe9074a5fe7a54e2a29cfca/containers-repeater-nested-tree.png)

The inner Repeater's repeater.\* refers to the inner item; the outer Repeater's scope is wrapped around it (and reachable from the picker as a separate root). Studio's [scope-aware auto-binding](/docs/studio/auto-binding-by-drop-location) handles this naturally; bindings find the right scope without manual qualification.

## Repeater + Condition Block: Heterogeneous Lists

When the iteration source is a Modular Block field (where each block in the list can have a different schema), pair the Repeater with a [Condition Block](/docs/studio/control-visibility-with-condition-blocks):

![Repeater bound to template.body_blocks with three Condition Blocks — hero, feature_grid, cta — each wrapping the matching design](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/ame4e8ecedf3ecc239/263b8cd13d1685332d0c883f/containers-repeater-condition-blocks-tree.png)

Each block in the list matches one Condition Block; the right design renders for each block type.

## What About Static vs. Dynamic Content?

Repeaters always iterate **bound data**. They're not for "I want 3 hero sections statically"; for that, just drop 3 components.

If you want a list whose count is set by an author (not by data), use a **Slot Prop** with countProp; see [component-schema.md: slot](/docs/studio/component-schema-prop-types#slot).

## How Repeaters Look in the Layers Panel

Each iteration of a Repeater shows as one row in the Layers tab, labelled with the iteration index. Useful when debugging which iteration owns which DOM node.

For nested Repeaters, layers nest visually; the outer Repeater's row contains the inner Repeater's rows.

## Common Patterns

**Navigation menu:** Repeater bound to template.nav\_items, with each iteration rendering a link.

**Card grid:** Repeater bound to a list of gf\_card items, with a card component inside.

**Tabs:** Repeater bound to template.tabs, with a tab button + content per iteration. Paired with selected-tab state at the component level.

**Accordion:** Repeater bound to template.panels, with a collapsible header + body per iteration.

**Pricing comparison:** Outer Repeater over plans, inner Repeater over features.

## Common Pitfalls

| Symptom | Cause | Fix |
| --- | --- | --- |
| Repeater drops but doesn't render iterations | The bound field is empty in the preview entry | Switch the preview entry to one with data, or populate the field |
| Bindings inside the Repeater don't resolve | The picker's template.\* inside a Repeater refers to the _current iteration item_, not the page entry | If you genuinely need the outer page's data inside a Repeater, switch the picker to dataSources.page.\*; that's the explicit escape hatch and stays valid even nested under sections. Don't try to write a template.\* path that points outside the iteration; the Repeater shadows it. |
| Modular block Repeater shows the same design for every block | Missing Condition Blocks per block type | Add a Condition Block per block type inside the Repeater |
| Repeater bound to a Reference field but only the first entry renders | Reference field is single-value (multiple: false) | Set the Reference to multiple, or use a multi-valued Repeater source |

## See Also

-   [Modular Blocks](/docs/studio/rendering-modular-block-fields): heterogeneous lists where each block has its own schema
-   [Condition Blocks](/docs/studio/control-visibility-with-condition-blocks): sibling pattern for branching design by block type or field value
-   [References](/docs/studio/rendering-reference-fields): multi-reference fields are a common Repeater source
-   [Section Slots](/docs/studio/section-slots): when you want a fixed placeholder instead of dynamic iteration
