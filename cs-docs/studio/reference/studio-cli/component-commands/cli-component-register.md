---
title: "Register local components"
description: "Register local UI components with Studio by scanning a file or directory. The CLI infers each prop schema and writes the registerComponent calls."
url: /studio/cli-component-register
---

# Register local components

## Register local components

studio:component:register registers UI components you've already written. Point it at a file or a directory. It infers each component's prop schema (from TypeScript types, PropTypes, or JSDoc), generates the registerComponent calls, and adds them to your Studio components registry. Afterward the components appear in Studio's palette under **Registered Components**.

## Usage

A single file:

```
csdx studio:component:register --component-path=src/components/Button.tsx
```

A whole directory:

```
csdx studio:component:register --component-dir=./components
```

If you pass neither flag, the CLI prompts for a file or directory path.

## Flags

| Flag | Alias | Description |
| --- | --- | --- |
| --component-path | -p | Path to a single component file to register |
| --component-dir | -d | Path to a directory of components to register |

## See also

-   [Registering components](/docs/studio/register-components): what registration means and the underlying API.
-   [register-component](https://studio-documentation.contentstackapps.com/prompts/register-component.html): the conversational (LLM) equivalent.
-   [Studio CLI](/docs/studio/cli)
