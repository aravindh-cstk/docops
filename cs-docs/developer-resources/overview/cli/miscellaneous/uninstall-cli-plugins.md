---
title: "[Contentstack Command-line Interface (CLI)] - Uninstall CLI Plugins"
description: Uninstall or remove Contentstack CLI plugins using the plugins:uninstall command.
url: https://www.contentstack.com/docs/headless-cms/uninstall-cli-plugins
product: Contentstack
doc_type: cli-guide
audience:
  - developers
version: latest
last_updated: 2026-03-26
---

# [Contentstack Command-line Interface (CLI)] - Uninstall CLI Plugins

This page explains how to uninstall/remove plugins from the Contentstack Command-line Interface (CLI). It is intended for developers who have installed or created CLI plugins and need to remove them from their local CLI setup.

## Uninstall CLI Plugins

If you have created or installed a plugin using [Contentstack CLI](./install-the-cli.md), and want to uninstall/ remove that plugin, you can do it by using the **plugins:uninstall **command.

**Note**: This command will not delete the plugin’s code folder.

To do this, run the following commands in your terminal:
- Get a list of plugins you have installed:

```
csdx plugins
```

- ****From the available plugins listed in the terminal, uninstall it by passing its name in the command below:

```
csdx plugins:uninstall <>
```

## Common questions

### Does `plugins:uninstall` delete the plugin’s code folder?
No. **Note**: This command will not delete the plugin’s code folder.

### How do I see which plugins are installed before uninstalling one?
Run:
```
csdx plugins
```

### How do I uninstall a specific plugin?
From the available plugins listed in the terminal, uninstall it by passing its name in the command below:
```
csdx plugins:uninstall <>
```