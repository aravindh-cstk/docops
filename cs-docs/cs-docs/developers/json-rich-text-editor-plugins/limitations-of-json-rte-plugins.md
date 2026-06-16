---
title: "[Json Rich Text Editor Plugins] - Limitations of JSON RTE Plugins"
description: Limitations of using JSON RTE Plugins.
url: https://www.contentstack.com/docs/developers/json-rich-text-editor-plugins/limitations-of-json-rte-plugins
product: Contentstack
doc_type: reference
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Json Rich Text Editor Plugins] - Limitations of JSON RTE Plugins

This page lists the known limitations and constraints when using JSON RTE Plugins in Contentstack, intended for developers planning or implementing JSON RTE plugin extensions and needing to understand platform limits and security behavior.

## Limitations of JSON RTE Plugins

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [RTE UI Location](/docs/developers/developer-hub/rte-location/) for the Contentstack App Framework to extend the functionality of your apps.

The limitations of using JSON RTE Plugins are as follows:
- The title you provide for a JSON RTE plugin cannot exceed **256** characters.
- You can add a maximum of **50** extensions (including custom fields, custom widgets, dashboard widgets, and JSON RTE plugins) in a stack.
- The maximum size of the JSON RTE plugin configuration cannot exceed **10 KB**.
- The maximum number of JSON RTE plugins that can be added to a single JSON RTE field in a content type is **five**. This limit is configurable. For more information, contact our [support](mailto:support@contentstack.com) team.
- JSON RTE plugins are loaded in an iframe in sandbox mode for security reasons, keeping the cookies unexposed. However, as popups are allowed in the current sandbox mode, you can open the popup window and access the cookies or storage in the popup window.

## Common questions

**Q: What is the maximum number of JSON RTE plugins allowed in a single JSON RTE field?**  
A: The maximum number of JSON RTE plugins that can be added to a single JSON RTE field in a content type is **five**.

**Q: How many total extensions can be added in a stack (including JSON RTE plugins)?**  
A: You can add a maximum of **50** extensions (including custom fields, custom widgets, dashboard widgets, and JSON RTE plugins) in a stack.

**Q: What is the maximum allowed size for a JSON RTE plugin configuration?**  
A: The maximum size of the JSON RTE plugin configuration cannot exceed **10 KB**.

**Q: Where should I look for the recommended approach instead of legacy Experience Extensions?**  
A: We recommend using the [RTE UI Location](/docs/developers/developer-hub/rte-location/) for the Contentstack App Framework to extend the functionality of your apps.