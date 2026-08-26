---
title: "Bring Your Own Components"
description: "Learn how to register your own React components with Contentstack Studio so authors can use your design system components to compose pages."
url: /studio/bring-your-own-components
uid: blt9c574722748d0adb
---

# Bring Your Own Components

## Bring Your Own Components

Studio ships with a small set of default components: Box, Row, Heading, Text, Image, Repeater, and a few more. These defaults demonstrate core registration mechanics and serve as a reference implementation.

For real work, you **register your own components**. After that, Studio's palette shows your Button, your Card, your Hero alongside the defaults, and authors compose pages with the components your design system already provides.

## The Model in One Diagram

![Your React component flows through registerComponent into Studio — palette tile, drop on template, right-panel form for editable, bindable, and choice props](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/am1afb014c4d6520de/5da9c170d2d4d2731d3dbff5/byo-component-registration-flow.png)

You declare a **schema** (prop names, types, defaults, validation, help text). Studio uses it to render the palette tile, the right-panel form, and the data picker. Your React component runs unchanged: Studio just feeds it the right props at render time. This separation means your component stays framework-agnostic; only the schema needs to understand Studio's UI contracts.

## What You Get for Registering

| Surface | What appears |
| --- | --- |
| **Left palette** | A tile labelled with your displayName, with your thumbnailUrl (rendered when the component declares a section; user-registered components default into the "Registered Components" section) |
| **Canvas** | Your component renders inline with the right props bound |
| **Right panel — Settings** | Each prop gets a form field (typed input, dropdown, link picker, image picker) |
| **Right panel — Data** | Each prop has a "bind to data" chip that opens the data picker |
| **Right panel — Design** | If you declared styles, style controls appear here |
| **Layers panel** | Your component shows by displayName in the layer tree |

## What's in This Chapter

| Page | Covers |
| --- | --- |
| [Registering components](/docs/studio/register-components) | The three register APIs: registerComponent, registerComponents, registerLazyComponent |
| [Component schema](/docs/studio/component-schema-prop-types) | The schema shape: every field, every prop type |
| [Default data](/docs/studio/set-component-default-data) | What renders when an author drops a component before binding anything |
| [Optimizing load](/docs/studio/optimizing-load-with-lazy-registration) | Lazy registration, Suspense, bundle impact |
| [Design tokens](/docs/studio/configure-design-tokens-in-studio) | Map your design system's tokens so Studio's controls match brand |
| [Studio CLI](/docs/studio/studio-cli) | csdx plugin for scripted component registration, Figma sync, token import |
| [Figma → Studio (copy/paste)](/docs/studio/copy-and-paste-from-figma-to-studio) | The author flow: paste a Figma frame into the canvas |
| [Figma → Studio (generate)](/docs/studio/generate-components-from-figma) | The agentic CLI: generate React components from Figma into your project |
| [Testing your components](/docs/studio/testing-your-components) | Preview in isolation, validate prop changes |
| [Publishing the library](/docs/studio/publishing-the-component-library) | Share your component library across multiple Studio projects |

## The Minimum to Get Started

A registered Button, end-to-end:

```
// src/lib/studio-components.ts
import { registerComponent } from "@contentstack/studio-react";
import { Button } from "@/components/Button";
import buttonIcon from "@/assets/icons/button.svg";

registerComponent({
  type:        "Button",
  displayName: "Button",
  thumbnailUrl: buttonIcon,
  component:   Button,
  props: {
    label: { type: "string", defaultValue: "Click me" },
    href:  { type: "href",   defaultValue: "#" },
  },
});
```

Import that file once at app boot (alongside @/lib/contentstack) and **Button** appears in Studio's palette under **Registered Components**.

## Order of Operations Matters

registerComponent must run **before** the canvas iframe loads, otherwise Studio doesn't see your components in the palette. The safest place is a shared module imported at app boot. See [Troubleshoot → "Registered components don't appear"](/docs/studio/troubleshoot-common-studio-issues#registered-components-dont-appear-in-studios-palette) if they're missing.

**Tip:** Run npx @contentstack/studio-skills install, then ask: _"register my Button component as a Studio component"_. The LLM reads your component file, infers the prop shape, and writes the registry entry for you.

## Next

[Registering components](/docs/studio/register-components)
