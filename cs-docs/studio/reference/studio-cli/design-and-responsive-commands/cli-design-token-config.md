---
title: "Update design-token config"
description: "Update configuration values, such as the token access level, in the generated register-design-tokens file."
url: /studio/cli-design-token-config
---

# Update design-token config

## Update design-token config

studio:design-token:config updates configuration values in the generated register-design-tokens file (for example, the token access level) without regenerating the tokens themselves. It's interactive: the CLI reads the current config and prompts you for the changes.

## Prerequisite

The register-design-tokens file must already exist. If it doesn't, generate it first with [studio:design-token:add](/docs/studio/cli-design-token-add).

## Usage

```
csdx studio:design-token:config
```

No flags. The command walks you through the current values and the ones you can change.

## See also

-   [Add design tokens](/docs/studio/cli-design-token-add): generate the file this command edits.
-   [Design tokens](/docs/studio/configure-design-tokens-in-studio): what the config values mean.
-   [Studio CLI](/docs/studio/cli)
