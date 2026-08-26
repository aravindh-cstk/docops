---
title: "Component Schema Prop Types"
description: "Reference for every prop type available in Contentstack Studio component schemas, including type-specific options, validation, and wrap vs studioAttributes patterns."
url: /studio/component-schema-prop-types
uid: bltf4dac865d04bc8a1
---

# Component Schema Prop Types

## Component Schema Prop Types

Every registered component declares its prop schema. Studio uses it to render the right-panel form, the data picker, and the in-canvas validation.

This page is the reference for **prop types**. For the component-level fields (type, component, displayName, thumbnailUrl, etc.), see [Registering components](/docs/studio/register-components). TypeScript types for props and schema shapes are available from @contentstack/studio-react: import StudioAttributes, RegisterComponentConfig, and related types from there rather than reaching into internal packages.

## Schema Shape

```
{
  type:    "Button",
  // …
  props: {
    label: { type: "string", defaultValue: "Click me" },
    href:  { type: "href" },
    size:  {
      type:         "choice",
      options:      ["small", "medium", "large"],
      defaultValue: "medium",
    },
  },
}
```

Each prop is an object with a **type** plus type-specific options.

## Fields Every Prop Supports

| Field | Type | Purpose |
| --- | --- | --- |
| type | string | The prop type (see table below). Required. |
| displayName | string | Label in the right panel. Defaults to the prop key. |
| defaultValue | matches the prop's value type | What renders if no value is set. See [Default data](/docs/studio/set-component-default-data). |
| defaultValueHint | string | Hint text describing the expected default; shown when no value is set. Distinct from placeholder (string / href only), which is the input placeholder. |
| helpText | string | Inline help text under the form field. |
| validate | (value) => boolean \\| string \\| void | Custom validation. Return a string to show as an error message; return true / nothing to accept. |

## Prop Types

| type | Renders in the right panel as | Use it for |
| --- | --- | --- |
| "string" | Text input | Labels, headings, body copy |
| "boolean" | Toggle | Show/hide flags, on/off switches |
| "number" | Number input (or slider) | Counts, sizes, percentages |
| "choice" | Radio group or dropdown | Variants like size, intent, tone. Set multiSelect: true for tag/category-style multi-select. |
| "href" | Link picker | URLs, with internal link / external link distinction |
| "imageurl" | Image picker | Media asset URLs from the stack or external |
| "datestring" | Date or date-time picker | Publication dates, scheduling |
| "array" | Editable list | Repeating items where the item type matters |
| "object" | Nested form (a group of sub-props) | Structured props like { title, subtitle, link } |
| "slot" | Drop target on the canvas | Child components, giving you a Section-Slot-like placeholder |
| "any" | Raw editor | Last resort for anything that doesn't fit above |
| "json\_rte" | Rich-text editor | Structured rich text (Contentstack's JSON RTE format) |

## Type-Specific Options

### string

```
title: {
  type:        "string",
  displayName: "Title",
  defaultValue: "Hello",
  placeholder: "Enter a heading",
  control:     "default",     // or "large" for textarea, "markdown" for markdown editor
}
```

| Option | Values |
| --- | --- |
| control | "default" (single-line input) · "large" (textarea) · "markdown" (markdown editor) |
| placeholder | Placeholder text |

### number

```
columns: {
  type:        "number",
  displayName: "Columns",
  defaultValue: 3,
  min:         1,
  max:         12,
  step:        1,
  control:     "slider",      // or "default" for a number input
}
```

### choice

```
size: {
  type:         "choice",
  options:      ["small", "medium", "large"],
  defaultValue: ["medium"],
  control:      "dropdown",      // or "radio" for radio buttons
  multiSelect:  false,
}
```

Or label/value pairs when the option labels differ from values:

```
intent: {
  type:    "choice",
  options: [
    { value: "primary",   label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "danger",    label: "Danger" },
  ],
  defaultValue: ["primary"],
}
```

| Option | Values |
| --- | --- |
| options | string\[\] or { value, label }\[\] |
| multiSelect | true for multi-select, default false |
| control | "radio" (single, default) · "dropdown" (single or multi) |

### href

```
href: {
  type:        "href",
  displayName: "Link",
  defaultValue: "#",
  placeholder: "https://…",
}
```

The right-panel control is Studio's link picker, which supports both internal (entry / composition reference) and external links.

### imageurl

```
src: {
  type:        "imageurl",
  displayName: "Image",
}
```

The right panel shows an asset picker. Your component receives a URL string at render time.

### datestring

```
publishedAt: {
  type:        "datestring",
  displayName: "Published",
  control:     "datetime",       // or "date" for date-only
}
```

### array

```
features: {
  type:        "array",
  displayName: "Features",
  items: { type: "string" },     // each item is a string
}
```

The items field is itself a prop config: nest any prop type.

### object

```
cta: {
  type:        "object",
  displayName: "Call to action",
  properties: {
    label: { type: "string", defaultValue: "Sign up" },
    href:  { type: "href",   defaultValue: "#" },
  },
}
```

object props render as a nested form group in the right panel.

### slot

The most powerful prop type: it lets authors drop child components.

```
children: {
  type:        "slot",
  displayName: "Content",
}
```

A slot prop receives an array of children at render time. Your component renders them somewhere inside its tree:

```
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

You can also drive slot count from a number prop, useful for "this card has N columns" patterns:

```
columns: {
  type:         "number",
  defaultValue: 3,
},
items: {
  type:        "slot",
  countProp:   "columns",      // children auto-grow / shrink with `columns`
  itemFactory: () => ({        // template node for new children
    type: "Text",
    props: {},                 // Studio fills static defaults from the registered schema
  }),
},
```

### boolean

```
disabled: {
  type:        "boolean",
  defaultValue: false,
  displayName: "Disabled",
}
```

### json\_rte

```
body: {
  type:        "json_rte",
  displayName: "Body",
}
```

Renders Contentstack's JSON Rich Text Editor. The right panel shows a rich-text editor control. Your component receives a JSON RTE document object at render time and must serialize it using @contentstack/json-rte-serializer or equivalent.

> **⚠ Don't use string for an RTE-bound prop.** RTE fields deliver a **JSON RTE document object** (not a pre-serialized string). Binding one to a string prop tries to render the structured object as text: you get \[object Object\] or stringified JSON in the page. Always use json\_rte for RTE-backed bindings. The component receives the JSON RTE object and must:
> 
> 1.  Serialize the JSON RTE document to HTML via @contentstack/json-rte-serializer
> 2.  Sanitize the HTML (DOMPurify or equivalent)
> 3.  Render with dangerouslySetInnerHTML
> 
> ```
> import { jsonToHtml } from "@contentstack/json-rte-serializer";
> import DOMPurify from "isomorphic-dompurify";
> 
> function BlogBody({ body }: { body: object | undefined }) {
>   if (!body) return null;
>   const html = jsonToHtml(body);              // JSON RTE doc → HTML string
>   const safe = DOMPurify.sanitize(html);      // sanitize editor-supplied content
>   return <article dangerouslySetInnerHTML={{ __html: safe }} />;
> }
> ```
> 
> Verified against the SDK: JsonRTEProp = PropBase<NodePropTypes\["json\_rte"\], object> in composable-studio-sdk/packages/studio-registry/src/component-registry/component-props.type.ts: the prop value is object, not string.

### any

```
config: {
  type:        "any",
  displayName: "Config",
}
```

Use sparingly. Studio shows a raw JSON editor. No type checking, no nice form controls. Useful for prototypes and developer-only props.

## Selection and Edit Handles: wrap vs studioAttributes

Studio needs a DOM element to attach selection handles, hover overlays, and inline-edit anchors to. Every registered component contracts with the SDK in one of two ways for that, declared via the wrap option on registerComponent:

| wrap | Behaviour | Use when… |
| --- | --- | --- |
| false (default) | The SDK injects a studioAttributes prop into your component. Your component's root element must spread it ({...studioAttributes}) so the builder can attach handles. | Your component renders a **single root element**. Recommended path: no extra wrapping in the DOM. |
| true | The SDK wraps your component in its own <div> automatically. You don't receive studioAttributes. | Your component renders multiple top-level siblings (fragment) OR doesn't have a stable single root. Adds an extra <div> to your DOM. |

**Quick decision rule:** Start with wrap: false. Switch to wrap: true only if your component's render output is a React fragment or returns sibling elements with no shared root, and be aware the extra <div> can break CSS rules that rely on parent selectors or direct-child combinators.

### wrap: false: the canonical pattern

```
import type { StudioAttributes } from "@contentstack/studio-react";

export function Hero({
  headline,
  subhead,
  studioAttributes,                                  // injected by Studio
}: HeroProps & StudioAttributes) {
  return (
    <section {...studioAttributes} className="hero">  // spread on the root
      <h1>{headline}</h1>
      <p>{subhead}</p>
    </section>
  );
}
```

Register with:

```
registerComponent({
  type: "site-hero",
  displayName: "Hero",
  component: Hero,
  wrap: false,        // default — could be omitted
  props: { /* … */ },
});
```

The StudioAttributes type comes from @contentstack/studio-react ({ studioAttributes?: BuilderNodeInternalAttributes }). Extending your props type with it gives the consumer a typed contract without coupling to internal SDK structure.

### wrap: true: when your component has no single root

```
// Two sibling elements — no clean root to spread on
export function FeatureCallout({ icon, label }: Props) {
  return (
    <>
      <span className="icon">{icon}</span>
      <strong>{label}</strong>
    </>
  );
}
```

```
registerComponent({
  type: "feature-callout",
  displayName: "Feature Callout",
  component: FeatureCallout,
  wrap: true,        // SDK adds a wrapper <div> automatically
  props: { /* … */ },
});
```

### Common pitfalls

-   **wrap: false but not spreading studioAttributes:** the canvas can't select the component. Selection handles, hover overlays, and inline-edit anchors all silently fail.
-   **wrap: false on a fragment-rooted component:** same problem. Either refactor to a single root or use wrap: true.
-   **wrap: true when the component already has a clean root:** adds an unnecessary <div> to the DOM and can break CSS that targets parent selectors.

## Validation

The validate function runs whenever the prop value changes:

```
slug: {
  type:        "string",
  displayName: "Slug",
  validate: (value) => {
    if (!value) return "Slug is required.";
    if (!/^[a-z0-9-]+$/.test(value)) return "Lowercase letters, numbers, and hyphens only.";
    // return true or nothing to accept
  },
}
```

Return: - A **string**: shown as an error in the right panel; the value is rejected - false: rejected without an error message (use a string instead for UX) - true or undefined: accepted

## A Complete Worked Example

```
registerComponent({
  type:        "Card",
  displayName: "Product Card",
  description: "Product tile with image, title, price, and CTA",
  thumbnailUrl: cardIcon,
  component:   ProductCard,
  props: {
    title: {
      type:        "string",
      displayName: "Title",
      defaultValue: "Product name",
      placeholder: "Enter the product name",
    },
    image: {
      type:        "imageurl",
      displayName: "Cover image",
      helpText:    "Recommended: 800×800 square crop",
    },
    price: {
      type:        "number",
      displayName: "Price",
      min:         0,
      step:        0.01,
    },
    badge: {
      type:    "choice",
      options: [
        { value: "new",       label: "New" },
        { value: "sale",      label: "On sale" },
        { value: "exclusive", label: "Exclusive" },
        { value: "",          label: "None" },
      ],
      defaultValue: [""],
    },
    cta: {
      type:        "object",
      displayName: "Call to action",
      properties: {
        label: { type: "string", defaultValue: "View details" },
        href:  { type: "href",   defaultValue: "#" },
      },
    },
    featured: {
      type:        "boolean",
      displayName: "Featured",
      defaultValue: false,
      helpText:    "Adds a highlighted border",
    },
  },
});
```

## Next

-   [Default data](/docs/studio/set-component-default-data): when defaults render
-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): make controls match your brand
-   [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration): code-split big components
