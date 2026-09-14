---
title: "Set the active project"
description: "Set the active Studio project the CLI writes to, interactively or by project ID."
url: /studio/cli-project-set
---

# Set the active project

## Set the active project

studio:project:set connects the CLI to a Studio project. Every other studio:\* command runs against whatever project is active, so this is part of the [one-time setup](/docs/studio/cli#one-time-setup). Run it once per project you work on.

## Usage

```
csdx studio:project:set                              # interactive picker
csdx studio:project:set --project-id=proj_abc123     # set directly
```

Without a flag, the CLI lists the projects your account can access and lets you pick. Find a project's ID in Studio: open your project, then Settings, then General.

## Flags

| Flag | Alias | Description |
| --- | --- | --- |
| --project-id | -i | Project ID to set as the active project |

## See also

-   [Show the active project](/docs/studio/cli-project-get): confirm which project is currently selected.
-   [Studio CLI](/docs/studio/cli): install and setup.
