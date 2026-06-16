---
title: "[Extensions] - Limitations of Asset Sidebar Extensions"
description: Limitations of Asset Sidebar Extensions
url: https://www.contentstack.com/docs/developers/create-asset-sidebar-extensions/limitations-of-asset-sidebar-extensions
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Limitations of Asset Sidebar Extensions

This page lists the limitations of Asset Sidebar Extensions in Contentstack. Developers building or maintaining Asset Sidebar Extensions should read this to understand size, configuration, browser, and installation constraints before implementing or deploying extensions.

## Limitations of Asset Sidebar Extensions

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [Asset Sidebar UI Location](/docs/developers/developer-hub/asset-sidebar-location/) for the Contentstack App Framework to extend the functionality of your apps.

The limitations to using Asset Sidebar Extension are as follows:
- The maximum size of the asset sidebar extension source code cannot exceed **500** KB**.**
- The title you provide to an asset sidebar extension cannot exceed **256 **characters**.**
- The width of the asset sidebar extension can range from **335 **to **1024 **pixels.
- You can install a maximum of **50 **extensions (including custom fields, custom widgets, JSON RTE plugins, and asset sidebar extensions) in a stack.
- The size of the configuration file of an asset sidebar extension cannot exceed **10 **KB**.**
- Internally as well as externally hosted asset sidebar extensions are not supported on Internet Explorer and Microsoft Edge as these browsers lack support for the <iframe> srcdoc attribute. Read more about the [browser support for asset sidebar extensions](https://caniuse.com/#feat=iframe-srcdoc).
- Extensions are loaded in an iframe in sandbox mode for security reasons. Hence, the cookies are not exposed. However, as popups are allowed in the current sandbox mode, you can open the popup window and access the cookies or storage in the popup window.

## Common questions

### What is the maximum size allowed for an asset sidebar extension source code?
The maximum size of the asset sidebar extension source code cannot exceed **500** KB**.**

### How many extensions can be installed in a stack?
You can install a maximum of **50 **extensions (including custom fields, custom widgets, JSON RTE plugins, and asset sidebar extensions) in a stack.

### What browsers do not support asset sidebar extensions?
Internally as well as externally hosted asset sidebar extensions are not supported on Internet Explorer and Microsoft Edge as these browsers lack support for the <iframe> srcdoc attribute.

### Are cookies available to asset sidebar extensions?
Extensions are loaded in an iframe in sandbox mode for security reasons. Hence, the cookies are not exposed. However, as popups are allowed in the current sandbox mode, you can open the popup window and access the cookies or storage in the popup window.