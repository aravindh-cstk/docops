---
title: "Add a component from Figma"
description: "Generate a code component from a Figma design and write it into your project, with styling method auto-detected."
url: /studio/cli-component-add
uid: blt921dcf0b339a29fa
---

# Add a component from Figma

## Add a component from Figma

studio:component:add generates a code component from a Figma design and writes the component file, its style file, and metadata into your project. It detects your project's styling method (Tailwind, CSS Modules, styled-components, or vanilla CSS) and matches it.

Use it when your team designs in Figma and you want the code component scaffolded for you instead of hand-writing it.

## Usage

```
csdx studio:component:add --component-id=component-123
```

You get the component ID from the Studio Figma plugin. If you omit the flag, the CLI prompts for it. During the run it also shows hints and asks for an optional prompt to steer generation.

To override the detected styling method, answer the CLI's interactive prompt (for example "Use CSS Modules instead of Tailwind").

## Flags

| Flag | Alias | Description |
| --- | --- | --- |
| --component-id | -i | Component ID from the Studio Figma plugin (prompted if omitted) |

## See also

-   [Generate components from Figma](/docs/studio/generate-components-from-figma): the concept and the LLM equivalent of this command.
-   [Sync a component to the Figma plugin](/docs/studio/cli-component-sync). The reverse direction: expose an existing code component to designers.
-   [Studio CLI](/docs/studio/cli)
