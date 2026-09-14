---
title: "Bring Your Own Components Chapter Guide"
description: "Register your existing React components so Studio uses them as the visual building blocks for authors."
url: /studio/bring-your-own-components-guide
uid: blt8f517ff0ce9be4bc
---

# Bring Your Own Components Chapter Guide

## Bring Your Own Components

Register your existing React components so Studio uses them as the visual building blocks for authors.

> **Read these two first (the concept + the checklist):**
> 
> 1.  **[Design a component library that composes, not sprawls](/docs/studio/composable-primitives)**: the what to register pattern (atoms + layouts, DS-portable, 4-question framework). Answers "what should the shape of my library be?"
> 2.  **[How to shape components for Studio: five rules](/docs/studio/component-shape-rules)**: the how each individual component must be shaped checklist (one prop per CT field, no hardcoded children, wrappers use slots, etc.). Answers "what breaks if I skip this and start registering?"
> 
> The first is the strategy. The second is the tactical rulebook. Both take ~10 minutes together and save the rewrites.

## On this chapter

### Start here

-   [Chapter overview](/docs/studio/bring-your-own-components): How Studio's registration model works and why you bring your own components instead of using the defaults.
-   **[How to shape components for Studio (five rules)](/docs/studio/component-shape-rules)**: Tactical checklist for shaping React components that bind cleanly to Studio. One prop per CT field, never hardcode child components in a wrapper's .map(), wrappers use slots, structural name-matching, Sections are the reusable unit.

### Registration path: start here

-   [Registering components](/docs/studio/register-components): The three register APIs (registerComponent, registerComponents, registerLazyComponent) and when to use each.
-   [Optimizing load (lazy registration)](/docs/studio/optimizing-load-with-lazy-registration): Ship schemas eagerly and defer heavy component code until it's needed. Read this alongside registering. The choice of API affects load behaviour.
-   [Component schema: prop types](/docs/studio/component-schema-prop-types): Reference for every prop type Studio accepts and how each renders in the right-panel form.
-   [Design props](/docs/studio/design-props): Mark a CSS-property prop as breakpoint-aware: authors set a value per breakpoint in the Settings tab, your component receives a generated class.
-   [Bring Your Own State (BYOS)](/docs/studio/bring-your-own-state): Shared state variables authors can bind, plugging in Redux/Zustand or web storage via getState/setState, and letting authors wire buttons to your functions with action props.
-   [Default data](/docs/studio/set-component-default-data): Give dropped components sensible defaults so they render visibly before any binding.

### Design system integration

-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): Swap Studio's neutral defaults for your design system's colours, spacing, and typography.
-   [Figma to Studio (copy/paste)](/docs/studio/copy-and-paste-from-figma-to-studio): Paste a Figma frame directly into the canvas as a one-off composition.
-   [Figma to Studio (generate components)](/docs/studio/generate-components-from-figma): Turn a Figma frame into committable React component source with registrations wired up.
-   [Breakpoints](/docs/studio/configure-custom-breakpoints): Configure the responsive viewports authors design against.

### Rich content and tooling

-   [JSON RTE (custom element rendering)](/docs/studio/json-rte-custom-element-rendering): Teach the SDK how to render custom elements stored in Contentstack's JSON Rich Text fields.
-   [Studio CLI](/docs/studio/studio-cli): Scriptable component registration, Figma sync, and token import from the terminal.

### Scaling and quality

-   [Testing your components](/docs/studio/testing-your-components): A workflow for verifying palette, form, and binding behaviour per component.
-   [Publishing the component library](/docs/studio/publishing-the-component-library): Patterns for sharing one registry across multiple Studio-powered projects.

## See also

-   [Docs home](/docs/studio/studio-documentation-home)
-   [Studio setup](/docs/studio/setup-chapter-guide): Stand up the project before you start registering components.
