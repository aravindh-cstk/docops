---
title: "Composition Building Blocks"
description: "Every entry in the catalog below is a node you drop into a composition's ui tree."
url: /studio/composition-building-blocks
uid: blt4de42571e51405e8
---

# Composition Building Blocks

## Composition Building Blocks

> The shared vocabulary for both the [Section Catalog](/docs/studio/section-compositions-api) and the [Template Catalog](/docs/studio/template-compositions-api). Assumes the [Create Compositions guide](/docs/studio/create-compositions-via-the-api) (entry fields, authentication, the zlib encoding, node anatomy).
> 
> **How to read it.** Each block is defined **once** here: its node shape plus a table of its attributes. The two catalogs assemble these blocks into real Section and Template cases and point back here rather than re-explaining anything.
> 
> Every bindable prop carries a type from a closed set of 13. The [Prop value type](#prop-value) reference table sits at the end. Skim it first if the { "type": … } wrappers below are unfamiliar.

> **Blocks are composition-agnostic.** The same block JSON drops into a Section, a linked Template, or a freeform Template **unchanged**. The only thing that varies between the three is **which value source feeds the block**. See [Data-source availability by composition](#data-source-availability-by-composition). Read that once and every block below applies everywhere.

---

# Start here: the anatomy of a node

Every entry in the catalog below is a **node** you drop into a composition's ui tree. Before scanning the catalog, learn the anatomy once so you can read every entry the same way.

> **See also:** [Create Compositions via the API, 5. The ui spec (layout tree)](/docs/studio/create-compositions-via-the-api#5-the-spec-layout-tree): the same fields shown as a terse TypeScript type plus the empty starting spec you POST to create a composition. This anatomy section is the walkthrough with worked examples. The index-page section is the type reference.

A node has seven keys. Six carry data. One (attrs) is reserved for future use and is always {}.

```
{
  "uid":      "V1StGXR8_Z5jdHi",   // 15-char nanoid, unique within THIS composition's tree
  "type":     "text",                // built-in name, OR a registered component's `type` string
  "attrs":    {},                    // reserved; keep as {}
  "metadata": { /* … */ },           // extras: bindings, condition, exposed props, mode, etc.
  "props":    { /* … */ },           // the component's own props (bindable)
  "slots":    { /* … */ },           // childUID → child nodes (the tree)
  "styles":   {}                     // per-group style overrides; {} when unstyled
}
```

**Key by key, what to know:**

-   **uid**: a 15-char [nanoid](https://github.com/ai/nanoid). Only needs to be unique **within this composition's ui tree**, not globally. The catalog uses short mnemonic uids like rep1, slot1, ct1 in place of real nanoids so the referring keys (like repeaterUID: "rep1") are visibly matched to their targets.
-   **type**: either a **built-in** name (see the [Built-in node types reference](#built-in-node-s)) or the **string a component was registered under**. type: "text" renders Studio's built-in text block. type: "simple-card" renders <SimpleCard> if you've registered it with registerComponent({ type: "simple-card", … }).
-   **attrs**: reserved. Always {}. Do not put custom data here.
-   **metadata**: carries anything that isn't a prop the component accepts. Common contents: node-level bindings on a page root (worked example below), a condition object on a condition-block, mode: "preview" on a repeater, compositionUID on a section-composition, sectionExposedProps on a section's page root.

    **Node-level metadata.bindings: worked example.** Used on the root page node to declare bindings that apply to the page as a whole (or on nodes that need a binding but don't have a corresponding prop). Shape mirrors props.<propName>.binding:

    ```
    {
      "type": "page",
      "metadata": {
        "bindings": {
          "pageTitle": { "type": "template", "value": { "path": { "title": {} } } },
          "canonicalUrl": { "type": "template", "value": { "path": { "url": {} } } }
        }
      },
      "props": { "children": { "type": "slot", "slot": "root" } },
      "slots": { "root": [ /* … */ ] }
    }
    ```

    Common uses on the page root: SEO metadata bindings (title, description, canonical), locale flags, or Section-level sectionExposedProps (Case 14 in the Section Catalog). If a binding has a matching prop on the component, put it in props. If it doesn't (page-scope metadata), put it here.

-   **props**: the shape a component author would recognise. **Each prop is a { type, binding } pair**: type is one of the 13 [prop value types](#prop-value) (string, plaintext, imageurl, href, slot, and so on), binding is where the value comes from (see [Value sources](#value-sources)). A prop whose type is slot uses a different shape. See the next section.
-   **slots**: the child tree. Each key is a **slot UID** (matched to whatever props.<propName>.slot points at). The value is an array of child nodes rendered inside that slot.
-   **styles**: per-group style overrides. Empty {} when the node uses defaults.

## How your React component's props become the JSON props

If <SimpleCard> is a React component that accepts text and buttonLabel as string props today:

```
function SimpleCard({ text, buttonLabel }) {
  return <div>{text} — {buttonLabel}</div>;
}
```

and you register it:

```
registerComponent({
  type: "simple-card",
  component: SimpleCard,
  props: {
    text:        { type: "string" },
    buttonLabel: { type: "string" },
  },
});
```

then a simple-card node in your ui tree encodes each prop as { type, binding }:

```
{
  "type": "simple-card",
  "props": {
    "text":        { "type": "string", "binding": { "type": "template",     "value": { "path": { "title": {} } } } },
    "buttonLabel": { "type": "string", "binding": { "type": "static_value", "value": "Learn more" } }
  }
}
```

Read the mapping: for every registered prop, the props.<propName> object in your ui node carries a type (matching the registered prop's type) and a binding (any of the six [value sources](#value-sources)). If a prop's value type is slot, the encoding is different: a slot prop uses { type: "slot", slot: "<slotUID>" } and the actual children live in the node's slots\["<slotUID>"\] array.

## The simplest possible node: a "hello world"

Bind the connected entry's title field to a built-in text node:

```
{
  "uid": "V1StGXR8_Z5jdHi",
  "type": "text",
  "attrs": {},
  "metadata": {},
  "props": {
    "text": {
      "type": "plaintext",
      "binding": { "type": "template", "value": { "path": { "title": {} } } }
    }
  },
  "slots": {},
  "styles": {}
}
```

Everything you see below in the catalog is a variant of this shape. As you scan, look for: **what type is it, what does its props map to, and does it have slots with children?** That's the whole reading pattern.

## Slots: how child nodes attach to a parent

Almost every block below the "Single value" case has **children**. Learn the slot mechanism now and every one of them will read the same way.

A slot is Studio's answer to "where inside this parent do the children go?" It's a two-part contract expressed in two adjacent fields of the same node:

1.  A **props entry with type: "slot"**: declares that this component accepts children at this named position, and points at a slot UID.
2.  A **slots entry keyed by that same slot UID**: holds the actual array of child nodes.

The slot UID on both sides has to be the **exact same string**. That's the whole link.

### Minimal example: a parent with one text child

Here's a box (a built-in Studio container from the [Structure group](#built-in-node-s)) that wraps a text node. Watch how the slot string on the parent's props.children.slot matches the key in the parent's slots:

```
{
  "uid":  "box_a",
  "type": "box",
  "attrs": {},
  "metadata": {},
  "props": {
    "children": {
      "type": "slot",        // ← this prop is a placeholder for child nodes
      "slot":  "s1"           // ← the slot UID it references
    }
  },
  "slots": {
    "s1": [                    // ← same UID; holds the actual children
      {
        "uid":  "txt_a",
        "type": "text",
        "attrs": {},
        "metadata": {},
        "props": {
          "text": { "type": "plaintext",
                    "binding": { "type": "template", "value": { "path": { "title": {} } } } }
        },
        "slots":  {},
        "styles": {}
      }
    ]
  },
  "styles": {}
}
```

Read the two parts side by side:

-   props.children is { type: "slot", slot: "s1" }: "there's a slot here called s1."
-   slots\["s1"\] is \[ <text node> \]: "and here's the array of nodes that live inside s1."

**children is not a magic name.** It's just the conventional prop name Studio's built-in containers (like box, page) declare for their child slot. Your own registered components can name their slot prop whatever they want: a <Card> with a header slot and a footer slot might expose headerSlot and footerSlot instead of children.

### More than one slot: a component with named regions

A component can declare multiple slot props. Each gets its own slot UID and its own array in slots. For example, imagine a registered two-column component with left and right slot props:

```
{
  "type": "two-column",
  "props": {
    "left":  { "type": "slot", "slot": "sL" },
    "right": { "type": "slot", "slot": "sR" }
  },
  "slots": {
    "sL": [ /* children rendered in the left column  */ ],
    "sR": [ /* children rendered in the right column */ ]
  }
}
```

Whatever slot props the component's registration declares, the composition JSON encodes them the same way: one props.<name> entry + one matching slots\["<slotUID>"\] array per slot.

### The one prop type that isn't bindable

Of the 13 [prop value types](#prop-value), slot is the only one that **cannot carry a binding**. Every other prop is { type, binding }. A slot prop is { type: "slot", slot: "<slotUID>" }. That's the difference: a slot prop holds nodes, not a value from a data source.

### Slots are how every container block works

Every block in the catalog below that has children uses this exact mechanism:

-   A [Repeater](#repeater) has a slot for its per-item template.
-   A [Condition Block](#condition-block) has a slot for the branch that renders when the condition matches.
-   A [Section slot](#section-slot) is a specific kind of slot, one a Template can fill from outside.
-   A [Registered component](#registered-component) with slot props uses this whenever a slot prop is declared.
-   The root page node itself uses a slot to hold the composition's top-level tree.

Once you can spot props.<name>.slot and its matching entry in slots, you can read every container block in the catalog without re-learning anything.

## How to read each catalog entry

Every block below follows the same layout:

1.  **One-line purpose**: italicised summary of what the block does.
2.  **The JSON shape**: the minimal working spec.
3.  **Attributes table**: every key that varies, with what it does.
4.  **Fed by** callout (where applicable): which [value sources](#value-sources) feed this block, and how the answer differs between Linked Template, Freeform Template, and Section (per the [availability matrix](#data-source-availability-by-composition)).
5.  **Cross-references**: links to the UI-guide equivalents and to catalog cases that use this block in a full worked example.

You do NOT need to read the catalog top-to-bottom. Skim the block you need, copy the JSON, adjust the binding and (if applicable) inner path. That's the workflow.

---

# Building blocks

Each block is a node you drop into a composition's ui tree, shown once with the attributes it carries. The catalog cases assemble these and point back here rather than re-explaining anything.

> **About the uids.** Two placeholder styles run through every example. Mnemonic node uids (rep1, slot1, ct1, block1) stand in for the 15-char nanoids real specs use (e.g. V1StGXR8\_Z5jdHi). They're kept short so a repeaterUID visibly matches the node uid it points at. Elided entry uids (blt8cdca5…, <section entry uid>) substitute for real Contentstack uids. Neither is a UUID.

## Single value

Bind one field to a prop.

```
{
  "type": "text",
  "props": {
    "text": {
      "type": "plaintext",
      "binding": { "type": "template", "value": { "path": { "title": {} } } }
    }
  }
}
```

**Reading this JSON, key by key:**

-   "type": "text": the **node's type** is "text", one of Studio's [built-in node types](#built-in-node-s) (the "Content" group). It renders Studio's built-in text component. If you wanted to render your own registered component instead, this would be the string you passed to registerComponent({ type: "..." }). See [Registered component](#registered-component).
-   "props": { "text": … }: the built-in text node accepts one prop named text. If this were your own component with props headline and subhead, you'd see two keys under props instead.
-   "text": { "type": "plaintext", "binding": { … } }: every bindable prop is a { type, binding } pair. type here is the **prop's value type** (one of the 13 in [Prop value type](#prop-value), "plaintext" = unformatted text). binding is where the value comes from.

The attribute table below explains the two keys inside binding that vary per case.

| Attribute | What it does |
| --- | --- |
| binding.type | which source the value comes from (here "template" = the entry the Section / Template is connected to). See [Value sources](#value-sources) for the six options. |
| binding.value.path | the field to read: { "title": {} } maps to the entry's title. Nest for deeper fields ({ "hero": { "cta": {} } }). An empty {} means "the whole bound field". |

A **single group** binds the same way: reach its inner field directly, e.g. { "path": { "textbox": {} } } ([Section Catalog Case 4](/docs/studio/section-compositions-api#case-4-section-for-a-single-type-group)).

> Fed by: the template source on a linked Template or a Section. In a **freeform Template** (no connected entry) the same node reads a **pinned entry** (contentstack) or a static\_value instead, see [availability](#data-source-availability-by-composition).

### Constructing binding.value.path: worked examples on a real content type

path is how you say **"which field on the entry do I want."** It's an object shaped like a slice of your content-type tree: each key is a field name, and its value is either another path object (drill deeper) or an empty {} (stop here, take the whole value at this leaf).

**The empty {} matters.** It's the leaf marker. Every path ends in {} somewhere. That's how you say "take the value at this key." An empty path: {} at the top level means "the whole bound scope" (used when the enclosing Repeater is iterating the whole scope, see below).

Here's a concrete content type, call it blog\_post:

```
blog_post
├── title                 (single line)
├── body                  (rich text)
├── hero_group            (Group)
│   ├── headline          (single line)
│   ├── subhead           (single line)
│   └── cta               (Group)
│       ├── label         (single line)
│       └── href          (URL)
├── body_sections         (Modular Block — allowed block-types: text_block, image_block)
│   ├── text_block  → { body: rich text, align: choice }
│   └── image_block → { image: file, caption: single line }
└── related               (Reference multi — target CTs: article_ref, podcast_ref)
```

Now the path for common cases against blog\_post:

| What you want to read | path |
| --- | --- |
| The entry's title | { "title": {} } |
| The rich-text body | { "body": {} } |
| A field one level inside a Group (hero\_group.headline) | { "hero\_group": { "headline": {} } } |
| A field two levels deep (hero\_group.cta.label) | { "hero\_group": { "cta": { "label": {} } } } |
| The whole hero\_group group as one blob | { "hero\_group": {} } |
| The whole hero\_group.cta subgroup | { "hero\_group": { "cta": {} } } |
| The body\_sections Modular Block array (feed to a Repeater's items) | { "body\_sections": {} } |
| The related Reference-multi array (feed to a Repeater's items) | { "related": {} } |

**Inside a Repeater**: the binding shifts to "type": "repeater" and path is relative to the current item, not the entry:

| What you want to read (item context) | path |
| --- | --- |
| body\_sections\[i\].text\_block.body: the text-block's rich-text body | { "text\_block": { "body": {} } } |
| body\_sections\[i\].image\_block.caption: the image-block's caption | { "image\_block": { "caption": {} } } |
| Any modular-block item's block-type key (used by Condition Blocks to discriminate) | { "text\_block": {} } (returns non-null only for text\_block items) |
| Any reference item's target content-type uid (used by CBs) | { "\_content\_type\_uid": {} } |
| A field on the referenced entry itself once a CB has matched, e.g. article\_ref.title | { "title": {} } (the CB has narrowed the context to the target entry) |

**When path is {}**: completely empty. This means "the whole bound scope, unnamed." It shows up when:

-   A **Section** is bound to a specific field (via linked\_schemas\[\].selected\_field: "body\_sections"), and a Repeater inside the Section iterates the scope itself. The Repeater's items path is {} because the whole scope IS the array.
-   A prop needs the whole entry as an object.

**How to build your own path (the mental checklist):**

1.  Look at your content type's field tree.
2.  Trace from the root down to the field you want, listing each intermediate group / block / field name in order.
3.  Write those names as nested keys, each with {} as its value.
4.  The last (deepest) key still has {}. That's the "take this value" marker.
5.  If you're inside a Repeater, start counting from the current item's shape, not the entry root.

If the field is a Group with multiple: true, a Modular Block, or a Reference-multi, you don't drill into individual items via path: you feed the whole array to a Repeater's items and let the Repeater walk it. Children of the Repeater then use type: "repeater" bindings with path relative to each item, per the table above.

## Value sources

The binding.type says where a value comes from. There are six types:

```
{ "binding": { "type": "template", "value": { "path": { "title": {} } } } }           // a field on the connected entry
{ "binding": { "type": "static_value", "value": "Featured" } }                        // value is a KEY into the entry's static_value group (see note), not the literal
{ "binding": { "type": "contentstack",
    "value": { "uid": "blt…", "_content_type_uid": "author", "path": { "title": {} } } } }  // a field on one pinned entry
{ "binding": { "type": "contentstack_queries",
    "value": { "queryUID": "query-1", "path": { "entries": {} } } } }                 // the results of a query (an array)
{ "binding": { "type": "repeater",
    "value": { "repeaterUID": "rep1", "path": { "title": {} } } } }                    // a field on the current repeater item
{ "binding": { "type": "component_props", "value": "title" } }                         // a prop the host app passes to the component
```

| Binding type | Reads from | Needs a data\_sources entry? |
| --- | --- | --- |
| template | a field on the connected/linked entry, the scope of a **linked template** or a **section**, **not available in a freeform template** (no connected entry) | no |
| static\_value | the composition's static\_value group, looked up by binding.value as a **key** (not the literal), see note | no |
| contentstack | a field on one specific pinned entry | **yes** (contentstack) |
| contentstack\_queries | the results of a saved query (an array) | **yes** (contentstack\_queries) |
| repeater | the current item while inside a [Repeater](#repeater) | no |
| component\_props | a prop the host app passes into the component (its default data) | no |

> **static\_value takes a KEY, not the literal.** binding.value names an entry in the composition's static\_value group. The SDK resolves it as static\_value.<value>. The key follows the editor's <nodeUID>-<propName> convention (e.g. "9c98…-text"). The actual value lives in the entry's static\_value field, a group organized by field type (text, choice, html\_rte, and so on), each a list of { key, value }, which the SDK flattens to a key → value map. It renders only if that group carries a key matching binding.value. The static\_value field starts empty at creation (see the entry-fields table in [index.md](/docs/studio/create-compositions-via-the-api)). If the key is absent, the component's own default/placeholder renders, **not** the string in binding.value.

**Declaring the two that need it.** A contentstack (pinned entry) and a contentstack\_queries (query) binding only resolve if the entry or query is declared in the composition's data\_sources:

```
"data_sources": [
  {
    "uid": "contentstack",
    "data": [{ "uid": "blt…", "_content_type_uid": "author" }]
  },
  {
    "uid": "contentstack_queries",
    "data": [
      {
        "uid": "query-1",
        "name": "Authors",
        "spec": {
          "contentType": "author",
          "sourceType": "content_type",
          "query": {},
          "params": { "limit": 10, "skip": 0, "desc": "created_at" }
        }
      }
    ]
  }
]
```

The query spec has four fields: contentType (the content-type or taxonomy uid), sourceType ("content\_type" (the default) or "taxonomy"), query (a filter object), and params (limit, skip, asc/desc, include, only). query and params are free-form.

> **More detail (prose/UI guides):** for binding on the canvas, see [CMS Binding](/docs/studio/bind-cms-content-to-studio-components) and [The Data tab](/docs/studio/the-component-data-tab). For pinned entries, see [Pinned Entries](/docs/studio/pin-specific-entries-to-a-component). For queries, see [Pinned Queries](/docs/studio/fetch-dynamic-content-with-pinned-queries) and [Query Builder](/docs/studio/query-builder). For component defaults, see [Component Default Data](/docs/studio/set-component-default-data).

### Data-source availability by composition

The six sources above are available in all three composition flavors, with one exception and two section-only wrinkles. The template source is the only one whose availability varies. Everything else differs only in emphasis.

| Source | Linked Template | Freeform Template | Section |
| --- | --- | --- | --- |
| template | the **connected entry**: a single content type, resolved from the request URL | **No**: there is no connected entry | the **linked-schema scope**: can span **multiple** content types (linked\_schemas is an array), narrowed by selected\_field, and repointable via a [Binding override](#binding-override) when embedded |
| contentstack (pinned entry) | Yes, its own | Yes, its own | Yes: declared on the section and **travels with it** into whatever template embeds it |
| contentstack\_queries (query) | Yes, its own | Yes, its own | Yes: **travels with the section** too |
| static\_value | Yes | Yes | Yes |
| repeater | Yes | Yes | Yes |
| component\_props | Yes | Yes (a common freeform choice, component default data) | Yes |

**The one rule that matters:** a **freeform Template has no template source**, so every entry-shaped block below (single value, repeater, condition, groups, reference, modular blocks) is fed by a **pinned entry, a query, a static value, or component default data** instead. The block's shape is identical: only the binding type changes.

## Repeater

Iterate a collection, rendering its children once per item.

```
{
  "uid": "rep1",
  "type": "repeater",
  "metadata": { "mode": "preview" },
  "props": {
    "items": {
      "type": "array",
      "binding": { "type": "template", "value": { "path": {} } }
    },
    "children": { "type": "slot", "slot": "items" }
  },
  "slots": {
    "items": [
      {
        "type": "text",
        "props": {
          "text": {
            "type": "plaintext",
            "binding": {
              "type": "repeater",
              "value": { "repeaterUID": "rep1", "path": { "title": {} } }
            }
          }
        }
      }
    ]
  }
}
```

| Attribute | What it does |
| --- | --- |
| props.items.binding | the collection to walk. The path you write depends on **where the scope starts**. See ["What path should I use here?"](#repeater) below the table. |
| metadata.mode | "preview" or "design". "preview" renders **every** item (what a live page shows). "design" renders a single editable placeholder. If you omit it, Studio derives the mode: "design" when the section exposes a [section-slot](#section-slot), otherwise "preview". |
| metadata.repeaterBindingFieldType | "reference" or "modular\_block": tells Studio the field kind so a [Condition block](#condition-block) can match. Absent for plain groups. |
| slots.<uid> | the per-item template. Children read the current item with a repeater binding whose repeaterUID equals this repeater node's uid. |

A Repeater is the normal way to iterate a collection **inside any composition's own ui**, section or template. It's independent of a [Section slot](#section-slot): a slot can inherit an enclosing Repeater's scope (see below), but a Repeater never needs a slot to work.

<a id="repeater-items-path"></a>

#### What path should I use for items.binding.value.path?

Every composition has a **scope**: the thing bindings resolve against. That scope is different for Sections and Templates, which is why the same Repeater takes different path values in each:

-   On a **Section**, the scope is whatever linked\_schemas\[\].selected\_field names. If the Section's selected\_field is "body\_sections", the scope IS entry.body\_sections (already the array. So the Repeater's path is {} (empty)) meaning "iterate the scope directly, no drilling needed."
-   On a **Template**, the scope is the entire entry (via connected\_content\_type). To iterate a specific field like entry.body\_sections, you have to name it: path: { "body\_sections": {} }.

Same content type, same iteration, two different path values, because the scope you start from is different.

**Worked examples** using the blog\_post content type shown earlier:

| Composition | Scope | You want to iterate | path on items |
| --- | --- | --- | --- |
| Section with selected\_field: "body\_sections" | entry.body\_sections (already the array) | body\_sections | {} |
| Section with selected\_field: "related" | entry.related (already the array) | related | {} |
| Section bound to the whole entry (selected\_field omitted) | entry | body\_sections | { "body\_sections": {} } |
| Section bound to the whole entry | entry | related | { "related": {} } |
| Linked Template (any) | the connected entry | body\_sections | { "body\_sections": {} } |
| Linked Template (any) | the connected entry | related | { "related": {} } |
| Freeform Template (no scope) | - | a saved query's entries | { "entries": {} } with binding.type: "contentstack\_queries" |

**Rule of thumb:** if your Section's selected\_field is literally the array you want to iterate, use path: {}. If you're one or more levels above it, name each hop until you reach the array.

The path table in the earlier ["Constructing binding.value.path" section](#constructing-worked-examples-on-a-real-content-type) applies here too: this is the same path shape, fed to a Repeater's items instead of a scalar prop.

**Reading the current item (the repeater context).** The text child in the slot above reads each item's title with the [repeater value source](#value-sources): binding.value.repeaterUID must equal **this** Repeater node's uid, and path is the field to read off the current item. Every binding inside the slot (including nested Repeaters and [Condition blocks](#condition-block)) resolves against that item. That inherited scope is the repeater context. See [Groups](#groups-and-global-fields) / [Reference](#reference) / [Modular blocks](#modular-blocks) for more worked children.

> **More detail (prose/UI guide):** [Smart Containers: Repeaters](/docs/studio/create-repeatable-content-with-repeaters): Preview Mode, selecting a Repeater from Layers, and when to use one.

> Fed by: template (a collection field on the entry / linked-schema scope) or contentstack\_queries (a query). In a **freeform Template** the items must bind a **query** or a pinned reference. There is no template collection to walk. See [availability](#data-source-availability-by-composition).

## Condition block

Render a branch only when the current item matches a discriminator.

```
{
  "type": "condition-block",
  "metadata": {
    "condition": {
      "type": "reference",
      "operator": "eq",
      "value": "ct2",
      "conditionBinding": {
        "type": "repeater",
        "value": { "repeaterUID": "rep1", "path": { "_content_type_uid": {} } }
      }
    }
  },
  "props": {
    "children": { "type": "slot", "slot": "body" }
  },
  "slots": {
    "body": [ /* rendered only for the matching item */ ]
  }
}
```

| Attribute | What it does |
| --- | --- |
| condition.type | which kind of field the branch tests. See the type list below. |
| condition.value | the value this branch matches: a content-type uid for reference, a block uid for modular\_block, and so on. |
| condition.operator | how value is compared. The valid operators depend on condition.type (see the operator table). |
| condition.conditionBinding | a repeater-scoped binding that reads the tested field off the current item: \_content\_type\_uid for a reference, the block key for a modular block. It may also carry content\_type\_uid + selected\_field to qualify the source field (always for modular blocks, optionally for references). These two are **authoring metadata**, not read by the runtime evaluator (which uses repeaterUID + path). |
| condition.dataBinding | points at the matched item's data so children can bind into it. Present on **every** condition type (most used with modular\_block). The runtime evaluator itself reads only conditionBinding. |
| slots.<uid> | rendered only when the current item matches. |

**One condition per block.** A condition block holds a single condition. There is no and/or combinator and no negate. To require several conditions at once, nest condition-blocks (each level is an implicit AND).

**Condition types.** In practice you'll almost always use reference and modular\_block: those are what the composition editor writes. The runtime supports the full set, so a spec authored through the API can use any:

| condition.type | Tests a | value is |
| --- | --- | --- |
| reference | reference field | a content-type uid |
| modular\_block | modular-blocks field | a block uid |
| string | text field | a string |
| number | number field | a number |
| boolean | boolean field | true / false |
| array | any array, by length | a number |
| date | date field | an ISO date string |
| select | select field | the chosen option |
| image\_extension | file field's extension | an extension (e.g. "png") |
| image\_size | file field's size | a number of bytes |

**Operators, by type.** Which operator values are valid depends on condition.type:

| Type(s) | Valid operators |
| --- | --- |
| reference | contentTypeIs, eq (plus the array-length operators, to test how many references) |
| modular\_block | is, eq (plus the array-length operators) |
| string | eq, neq, contains, startsWith, endsWith, matches, isEmpty, isNotEmpty |
| number, date, image\_size | eq, neq, gt, gte, lt, lte |
| boolean | is, eq |
| select (single) | is, eq, isNot |
| select (multiple) | includes, excludes |
| array (length) | lengthIs, lengthIsNot, lengthIsGreaterThan, lengthIsLessThan, lengthIsGreaterThanOrEqualTo, lengthIsLessThanOrEqualTo |
| image\_extension | is, eq, isNot |

Every reference/modular-block example in this catalog uses operator: "eq", the common case.

> **More detail (prose/UI guide):** [Smart Containers: Condition Blocks](/docs/studio/control-visibility-with-condition-blocks).

## Groups and global fields

A group is a bag of fields on the entry. A global field behaves identically.

**Single**: bind the inner field directly ([Single value](#single-value)). **Multiple**: iterate with a [Repeater](#repeater), reading each row's inner field via a repeater binding:

```
{
  "uid": "rep1",
  "type": "repeater",
  "props": {
    "items": {
      "type": "array",
      "binding": { "type": "template", "value": { "path": {} } }
    },
    "children": { "type": "slot", "slot": "r" }
  },
  "slots": {
    "r": [
      {
        "type": "text",
        "props": {
          "text": {
            "type": "plaintext",
            "binding": {
              "type": "repeater",
              "value": { "repeaterUID": "rep1", "path": { "single_line": {} } }
            }
          }
        }
      }
    ]
  }
}
```

-   A **section** declares its scope with linked\_schemas\[\].selected\_field. A **template** scopes via its connected\_content\_type + the entry the URL resolves. See the availability matrix above and each catalog's preamble.
-   A **dotted** selected\_field ("group1.inner\_group") targets a group nested inside another group: the section is authored against the inner field and a template drives it ([Section Catalog Case 12](/docs/studio/section-compositions-api#case-12-inner-nested-group)).
-   A global field with multiple: true uses this exact shape.

## Reference

A reference field points at entries of one or more content types. Iterate + branch per type.

Composed from [Repeater](#repeater) + [Condition block](#condition-block):

```
{
  "uid": "rep1",
  "type": "repeater",
  "metadata": { "repeaterBindingFieldType": "reference" },
  "props": {
    "items": {
      "type": "array",
      "binding": { "type": "template", "value": { "path": {} } }
    },
    "children": { "type": "slot", "slot": "r" }
  },
  "slots": {
    "r": [
      {
        "type": "condition-block",
        "metadata": {
          "condition": {
            "type": "reference",
            "operator": "eq",
            "value": "ct2",
            "conditionBinding": {
              "type": "repeater",
              "value": { "repeaterUID": "rep1", "path": { "_content_type_uid": {} } }
            }
          }
        },
        "slots": {
          "c": [ /* the referenced entry's fields, read via `repeater` */ ]
        }
      }
    ]
  }
}
```

Add one Condition block per referenced content type. Children read the referenced entry via a repeater binding on the repeater's uid.

> **More detail (prose/UI guide):** [Smart Containers: References](/docs/studio/rendering-reference-fields).

## Modular blocks

A modular-blocks field holds items of different block types.

The same shape as [Reference](#reference), but the Condition block switches on a **block type** and carries a dataBinding alongside conditionBinding:

```
{
  "uid": "rep1",
  "type": "repeater",
  "metadata": { "repeaterBindingFieldType": "modular_block" },
  "props": {
    "items": {
      "type": "array",
      "binding": { "type": "template", "value": { "path": {} } }
    },
    "children": { "type": "slot", "slot": "r" }
  },
  "slots": {
    "r": [
      {
        "type": "condition-block",
        "metadata": {
          "condition": {
            "type": "modular_block",
            "operator": "eq",
            "value": "block1",
            "conditionBinding": {
              "type": "repeater",
              "value": {
                "repeaterUID": "rep1",
                "content_type_uid": "price_range",
                "selected_field": "modular_blocks",
                "path": { "block1": {} }
              }
            },
            "dataBinding": {
              "type": "repeater",
              "value": { "repeaterUID": "rep1", "path": { "block1": {} } }
            }
          }
        },
        "slots": {
          "c": [ /* the block's fields, read via `repeater` */ ]
        }
      }
    ]
  }
}
```

One Condition block per block type.

> **More detail (prose/UI guide):** [Smart Containers: Modular Blocks](/docs/studio/rendering-modular-block-fields).

## Registered component

Render a component the consuming app registered with the SDK. The node type **is** the registered name. props are the component's own props, bindable via any [value source](#value-sources).

```
{
  "type": "simple-card",
  "props": {
    "text": {
      "type": "string",
      "binding": { "type": "template", "value": { "path": { "title": {} } } }
    },
    "buttonLabel": {
      "type": "string",
      "binding": { "type": "static_value", "value": "Learn more" }
    }
  }
}
```

The built-in nodes (text, box, header) are Studio's own registered components, a custom component behaves the same way, only the type and prop names change. In a **freeform Template**, a registered component's props are a natural fit for component\_props (the component's own default data).

> **More detail (prose/UI guides):** [Bring Your Own Components](/docs/studio/bring-your-own-components), [Registering components](/docs/studio/register-components), [Component schema: prop types](/docs/studio/component-schema-prop-types).

---

**Mechanics**: cross-cutting, used by the blocks above.

## Section slot

An empty placeholder the **template** fills.

```
{
  "type": "section-slot",
  "props": {
    "label": {
      "type": "string",
      "binding": { "type": "static_value", "value": "Drop a card here" }
    }
  }
}
```

| Attribute | What it does |
| --- | --- |
| props.label | the placeholder text a template author sees on the canvas (a static\_value). |
| (no slots of its own) | the slot is filled on the **template** side: the embedding section-composition node keys its slots on **this node's uid**. See the catalog's slot cases. |
| scope | content a template drops into the slot **inherits the surrounding repeater context**: it sees the current iteration item of whichever [Repeater](#repeater) encloses the slot. That can be the **section's own** Repeater (the slot sits inside it), **or the page's** Repeater when the template drops the whole section inside its own Repeater, the page's repeater context flows into the slot. |

> **Defined in a Section. Filled by either Template flavor.** A section-slot node can only be added while authoring a **Section** (it isn't in a Template's palette). But **any** Template, linked or freeform, can fill one (freeform templates embed sections the same way linked ones do).

> **More detail (prose/UI guide):** [Smart Containers: Section Slots](/docs/studio/section-slots).

## Binding override

When a template places a section, repoint the section's scope with sectionBindingOverride on the section-composition node.

```
{
  "type": "section-composition",
  "metadata": {
    "compositionUID": "<section entry uid>",
    "sectionBindingOverride": {
      "selectedField": "price_range_modular_blocks",
      "uidRemapping": {}
    }
  }
}
```

| Attribute | What it does |
| --- | --- |
| selectedField | the field the placed section binds against, **relative to where the embed sits**: a sibling field of the page CT ([Case 6](/docs/studio/section-compositions-api#case-6-modular-blocks)), or an inner leaf when the embed sits inside an outer Repeater ([Cases 12/13](/docs/studio/section-compositions-api#case-12-inner-nested-group)). |
| uidRemapping | { <section-side key>: <page-side key> }: relabels the page's data so the section's bindings resolve. Identity ({"single\_line":"single\_line"}) or empty {} when both sides use the same field/block uid. |

Two uses: **repoint to a sibling** field (Case 6, the simple form), or **narrow to an inner** field inside an outer repeater (Cases 12/13).

> **Applied by either Template flavor.** sectionBindingOverride isn't gated on a connected content type. A **freeform** Template can repoint an embedded section too (e.g. to a field on a pinned entry or a query item it iterates).

> **More detail (prose/UI guides):** [Using sections and components in a template](/docs/studio/using-sections-and-components-in-a-template), [Per-page overrides without forking](/docs/studio/per-page-component-overrides-without-forking).

## Exposed section prop

A section author marks **one internal component prop** as overridable per template instance. Stored as sectionExposedProps on the **section root's** ui.metadata, not a node you drop. The section-author counterpart to a [Binding override](#binding-override): the section lists what's negotiable, the template overrides it. overrides it.

```
{
  "ui": {
    "metadata": {
      "sectionExposedProps": [
        {
          "nodeUid": "<uid of the internal component instance>",
          "propKey": "text",
          "uid": "card_title",
          "displayName": "Card Title",
          "propType": "string",
          "bindingAtExposeTime": {
            "type": "template",
            "value": { "path": { "title": {} } }
          }
        }
      ]
    }
  }
}
```

| Attribute | What it does |
| --- | --- |
| nodeUid | the internal component instance whose prop is exposed. Exposure is **per instance**: three Heroes each expose their own headline independently. |
| propKey | the original schema key on that component ("text", "headline", "src"). The **Component Prop** column in the Expose modal. |
| uid | slug generated from displayName ("Card Title" becomes card\_title). The key the **page node** carries the override under. The runtime maps it back to nodeUid/propKey. Must be unique within the section. |
| displayName | the **Exposed As** label the template author sees in the override panel. |
| propType | the prop's value [type](#prop-value) (string, href, imageurl, and so on). Decides the override control: string gives a text input, imageurl an image picker, href a link picker. |
| bindingAtExposeTime | snapshot of the internal node's binding when it was exposed. Lets the runtime determine whether a page override applies or the prop falls through to the section's own binding. Omit for an unbound prop. |

At render the runtime spreads the page composer's values onto the section and builds section\_exposed\_overrides = { \[nodeUid\]: { \[propKey\]: value } }: the **sole** source of truth for each exposed field (an entry is emitted even for a cleared value, so it never falls back to the internal binding). Prose walkthrough: [Expose Section Props](/docs/studio/expose-section-props).

---

# Value reference

Two closed sets that the blocks and cases rely on.

## Prop value type

Every bindable prop carries a type (the { "type": …, "binding": … } wrapper). There are 13:

| type | Use for |
| --- | --- |
| string | short or long text |
| plaintext | text with no formatting (the current text-node type) |
| boolean | a true/false toggle |
| number | a number |
| datestring | a date or date-time |
| href | a link / URL |
| imageurl | an image or asset URL |
| object | a group of nested sub-props |
| array | an editable list |
| slot | a drop target holding child nodes (the only type that can't be bound) |
| choice | a single- or multi-select option |
| json\_rte | a JSON rich-text document |
| any | an arbitrary value |

A few near-misses are not their own type: rich text maps to json\_rte, a file or asset to imageurl, a link to href, a group to object, a select to choice.

> **More detail (prose/UI guides):** for prop types, see [Component schema](/docs/studio/component-schema-prop-types). For rich text, see [JSON RTE](/docs/studio/json-rte-custom-element-rendering).

## Built-in node types

A node's type is either one of Studio's built-ins below, or the name of a component the host app registered. The built-ins:

| Group | Types |
| --- | --- |
| Structure | page (the root), section, box, hstack, vstack, fragment |
| Smart containers | repeater, condition-block, section-slot, section-composition |
| Content | text, plain-text, rich-text, json-rte, collapsible-text, header, number, button, link, link-container |
| Media | image, video, embed |
| Raw HTML | html-element, style-sheet |

Any type that isn't in this list is a registered component: its type is the name it was registered under, and its props are that component's own props (see [Registered component](#registered-component)).

---

# Quick-reference cheat sheet

One-liners for every block and mechanic, in the order they appear above. Use this after you've read the anatomy section: it's the reminder card you keep open while writing JSON.

| Need | Use | One-liner |
| --- | --- | --- |
| Bind one field to a component prop | [Single value](#single-value) | { "type": <propType>, "binding": { "type": "template", "value": { "path": { "<field>": {} } } } } |
| Iterate an array of items | [Repeater](#repeater) | Node with type: "repeater", items bound to the collection, children in a slot that read the current item via "type": "repeater" binding with repeaterUID |
| Render different children per item type | [Condition block](#condition-block) inside a Repeater | Adds a metadata.condition with type, operator, value, and a conditionBinding that reads the discriminator field |
| Bind a single group's inner field | [Groups](#groups-and-global-fields) | Same as Single value, with a deeper path (e.g. { "hero\_group": { "headline": {} } }) |
| Iterate a group with multiple: true | [Groups](#groups-and-global-fields) with a Repeater | Repeater whose items.path = {} (scope root) or the group field name |
| Iterate references to other CTs, render per target CT | [Reference](#reference) | Repeater with repeaterBindingFieldType: "reference" + one Condition Block per target CT (condition.type: "reference", value: "<ct\_uid>") |
| Iterate a Modular Block, render per block-type | [Modular blocks](#modular-blocks) | Same as Reference but repeaterBindingFieldType: "modular\_block" + CBs with condition.type: "modular\_block", value: "<block\_uid>", plus a dataBinding |
| Render a component you registered | [Registered component](#registered-component) | Node whose type equals the string you passed to registerComponent({ type: … }). props are { type, binding } pairs matching the registered prop schema |
| Leave a placeholder in a Section for a Template to fill | [Section slot](#section-slot) | type: "section-slot" node. The embedding section-composition on the Template keys its slots on this node's uid |
| Repoint a Section's scope when a Template embeds it | [Binding override](#binding-override) | sectionBindingOverride on the section-composition node with selectedField + uidRemapping |
| Let a Template override one internal component prop of a Section | [Exposed section prop](#exposed-section-prop) | sectionExposedProps array on the Section's root page node's metadata. Template writes overrides on the placed section-composition |
| Read a **pinned entry** | [Value sources](#value-sources) | { "type": "contentstack", "value": { "uid": "<entry uid>", "\_content\_type\_uid": "<ct>", "path": { … } } } + declare in data\_sources |
| Read a **query's result list** | [Value sources](#value-sources) | { "type": "contentstack\_queries", "value": { "queryUID": "<key>", "path": { "entries": {} } } } + declare the query in data\_sources |
| Read a **static value** stored on the composition | [Value sources](#value-sources) | { "type": "static\_value", "value": "<key in static\_value group>" } |
| Read a **prop the host app passes in** (component defaults, freeform) | [Value sources](#value-sources) | { "type": "component\_props", "value": "<propName>" } |

**Prop value types (13):** string, plaintext, boolean, number, datestring, href, imageurl, object, array, slot, choice, json\_rte, any. See [Prop value type](#prop-value) for full descriptions.

**Built-in node types (5 groups):** Structure, Smart containers, Content, Media, Raw HTML. See [Built-in node types](#built-in-node-s) for the full list.
