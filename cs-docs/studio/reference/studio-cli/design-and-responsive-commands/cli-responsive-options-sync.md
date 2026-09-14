---
title: "Sync responsive breakpoints"
description: "Sync the responsive breakpoints defined in your registerBreakpoints function to the Studio project."
url: /studio/cli-responsive-options-sync
---

# Sync responsive breakpoints

## Sync responsive breakpoints

studio:responsive-options:sync reads the responsive breakpoints defined in your registerBreakpoints function and syncs them to the Studio project, so canvas authoring reflects the same breakpoints your code renders at.

## Usage

```
csdx studio:responsive-options:sync
csdx studio:responsive-options:sync --file-path=src/studio/breakpoints.ts
csdx studio:responsive-options:sync --file-dir=src/studio
```

Run flagless and the CLI searches your project for the registerBreakpoints function. Use the flags to point it at a specific file or directory.

## Flags

| Flag | Alias | Description |
| --- | --- | --- |
| --file-path | -p | Path to the file containing the registerBreakpoints function |
| --file-dir | -d | Directory to search for the registerBreakpoints function |

## See also

-   [Studio CLI](/docs/studio/cli): install and setup.
