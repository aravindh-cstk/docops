---
title: "Add design tokens"
description: "Fetch design tokens from Figma, or generate them by analyzing your project, and write a register-design-tokens file."
url: /studio/cli-design-token-add
uid: blt60ae4024424d1e6b
---

# Add design tokens

## Add design tokens

studio:design-token:add brings design tokens into your project. Give it a Figma design-token ID to fetch from Figma, or run it with no ID and it analyzes your project (CSS custom properties, JS/TS token files) and generates a register-design-tokens file.

Import the generated file into your app's entry point (main.tsx, index.tsx, etc.) so the tokens register at boot. Re-run the command any time to refresh.

## Usage

```
csdx studio:design-token:add --design-token-id=abc123-def456
csdx studio:design-token:add                 # generate by analyzing the project
```

When generating from the project, the CLI prompts for the token access level (dynamic / tokens / arbitrary). See the deep dive for what each level exposes to authors.

## Flags

| Flag | Alias | Description |
| --- | --- | --- |
| --design-token-id | -i | ID of the design tokens to fetch from Figma. If omitted, generates from the project |

## See also

-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): access levels and what the generated file looks like.
-   [Update design-token config](/docs/studio/cli-design-token-config): change values in the generated file later.
-   [Studio CLI](/docs/studio/cli)
