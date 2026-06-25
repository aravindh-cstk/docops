---
title: "[Studio] - Register Custom Components"
description: Register custom React components for drag-and-drop use in Contentstack Studio.
url: https://www.contentstack.com/docs/studio/register-custom-components
product: Contentstack Studio
doc_type: guide
audience:
  - developers
  - frontend-engineers
version: early-access
last_updated: 2026-03-25
---

# [Studio] - Register Custom Components

This page explains how to create and register custom React components so they appear in Studio’s **Registered Components** panel for drag-and-drop use. It is intended for developers building Studio experiences who need custom UI components, props, Live Edit support, and component organization options.

**Note:** Studio is currently available in limited Beta. To request access and participate in the feedback program, contact our [support](mailto:support@contentstack.com) team.

Studio includes a built-in library of components (e.g., text, images, containers) for building pages. However, most real-world projects require custom UI components to reflect brand identity, support specific logic, or enable advanced user interactions.

This guide shows how to create, register, and enhance your own React components so they appear in the **Registered Components** panel for drag-and-drop use in Studio.

## How Component Registration Works

To register a component:
- Write a standard React component
- Use the `registerComponents()` method from the `@contentstack/studio-react` package
- Your component appears in **Registered Components** inside Studio
- Drag it into the Canvas and configure its props and styles

## Create a Simple Component

Here’s a basic example, a `Heading 2` (`<h2>`) component.

```
function H2() {
  return
## I am a heading
;
}
```

## Register the Component

Import `registerComponents` and call it with your component definition:

```
import { registerComponents } from "@contentstack/studio-react";

function H2() {
  return
## I am a heading
;
}

registerComponents([
  {
    type: "h2", // Unique internal name (one word, lowercase)
    component: H2,
  },
]);
```

After registering, the component appears in **Registered Components** in Studio.

## Adding Props for Customization

Most components need **props** so users can change their content or behavior in the Studio.

**Example**: To make the heading text customizable.

```
interface H2Props {
  text: string;
}

function H2(props: H2Props) {
  const { text } = props;
  return
## {text}
;
}

registerComponents([
  {
    type: "h2",
    component: H2,
    props: {
      text: {
        type: "string",           // Prop type
        defaultValue: "Hello World", // Initial value
      },
    },
  },
]);
```

Now, you can edit the `text` prop via the right-hand properties panel in Studio.

## Enabling Live Edit for Visual Builder

To enable inline editing (Live Edit) from CMS-bound content:
- Prefix the prop name with `
- Apply the Live Edit tag using `CslpTag`

```
import { CslpTag } from "@contentstack/studio-react";

interface H2Props {
  text: string;
  $text: CslpTag; // Live Edit tag type
}

function H2(props: H2Props) {
  const { text, $text } = props;
  return
## {text}
;
}
```

## Controlling Canvas Wrapping

By default, Studio wraps your component in a `<div>` to enable editing. You can change or disable this behavior. When you disable it, you have to pass the studio attributes manually to the component to enable editing in the canvas.

The below example shows how you can wrap a component with a `section` tag instead of `div`:

```
registerComponents([
  {
    type: "h2",
    component: H2,
    wrap: "section",
  },
]);
```

If you disable wrapping, you must manually apply Studio editing attributes.

```
import { StudioAttributes, CslpTag } from "@contentstack/studio-react";

interface H2Props extends StudioAttributes {
  text: string;
  $text: CslpTag;
}

function H2(props: H2Props) {
  const { text, $text, studioAttributes } = props;
  return (

## {text}

  );
}

registerComponents([
  {
    type: "h2",
    component: H2,
    wrap: false, // Disable default wrapper
  },
]);
```

**Note:** These attributes are required for Studio functionality. Omitting them can result in errors during component interaction.

## Hide a Component from the Library

To register a component without displaying it in the Studio library:

```
registerComponents([
  {
    type: "h2",
    component: H2,
    hideFromComponentList: true,
  },
]);
```

## Improve Component Discoverability

Make your components easier to identify and use by adding:
- `displayName`: Shown in the Studio UI
- `description`: Short summary (coming soon)
- `thumbnailUrl`: 48x48px image to visually represent the component

```
registerComponents([
  {
    type: "h2",
    component: H2,
    displayName: "Heading 2",
    thumbnailUrl: "https://example.com/heading2.png",
  },
]);
```

## Organize Components into Sections

By default, all registered components appear under **Registered Components**. You can organize them into custom sections:

```
registerComponents([
  {
    type: "h2",
    component: H2,
    displayName: "Heading 2",
    thumbnailUrl: "https://example.com/heading2.png",
    sections: "Custom Headings", // Your own section name
  },
]);
```

## Add Default Styles and Design Tokens

Define default styling or apply tokens from your design system:

```
registerComponents([
  {
    type: "h2",
    component: H2,
    styles: {
      default: {
        displayName: "Body",
        defaultStyles: {
          backgroundColor: "red",
        },
      },
    },
  },
]);
```

- Default styles are passed as `className`
- **Named style groups** are passed as props

## Best Practices for Registering Components

Follow these tips for maintainable and user-friendly components:
- Use unique, lowercase `type` values
- Type your props using TypeScript
- Define sensible default prop values
- Add a `displayName` and thumbnail for visual clarity
- Use Live Edit tags for CMS-bound props
- Organize components into logical sections
- Apply design system styles for consistent branding

Custom component registration empowers your team to extend Studio with reusable, brand-aligned UI elements tailored to your project’s needs. By combining standard React patterns with Studio’s powerful visual interface, you can deliver consistent, editable, and scalable components, without sacrificing control or flexibility.

Whether you’re adding a simple heading or integrating deeply with your design system, registered components ensure your page-building experience remains structured, intuitive, and developer-friendly.

## Common questions

### What does the `type` field do when registering a component?
It is the unique internal name for the component (one word, lowercase) used during registration and identification in Studio.

### How do I let users edit component content in Studio?
Add `props` in the `registerComponents()` definition (for example, a `text` prop) so users can edit values via the right-hand properties panel.

### How do I enable Live Edit for CMS-bound content?
Prefix the prop name with ` and apply the Live Edit tag using `CslpTag`.

### Can I register a component but hide it from the Studio library?
Yes, set `hideFromComponentList: true` in the `registerComponents()` configuration.