---
title: "Sync a component to the Figma plugin"
description: "Make a code component available in the Figma plugin's mapping dropdown so designers can link layers to it."
url: /studio/cli-component-sync
---

# Sync a component to the Figma plugin

## Sync a component to the Figma plugin

studio:component:sync makes one of your code components available in the Figma plugin's mapping dropdown, so designers can link Figma layers to it. Use it when your team works Figma-first and you want designers to see which components exist before they design.

## Usage

```
csdx studio:component:sync --component-path=src/components/Card.jsx
```

The component path is required. If omitted, the CLI prompts for it.

## Flags

| Flag | Alias | Description |
| --- | --- | --- |
| --component-path | -p | Component file to sync (required) |

## See also

-   [Add a component from Figma](/docs/studio/cli-component-add). The reverse direction: generate code from a design.
-   [Generate components from Figma](/docs/studio/generate-components-from-figma)
-   [Studio CLI](/docs/studio/cli)
