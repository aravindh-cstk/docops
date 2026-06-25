---
title: "[Extensions] - Limitations of Sidebar Extensions"
description: Limitations of Sidebar Extensions.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/limitations-of-sidebar-extensions
product: Contentstack
doc_type: reference
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Limitations of Sidebar Extensions

This page lists the known limitations of Sidebar Extensions in Contentstack. It is intended for developers building or maintaining Sidebar Extensions and should be used to understand constraints (such as size limits, browser support, and scope limits) before implementation.

## Limitations of Sidebar Extensions

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the  [Sidebar UI Location](../developer-hub/sidebar-location.md) for the Contentstack App Framework to extend the functionality of your apps.

The limitations to using Sidebar Extensions are as follows:
- The maximum size of the sidebar extension source code cannot exceed **500** KB.
- The title you provide to an Sidebar Extension cannot exceed **256** characters.
- You can install maximum **50** extensions (including custom fields and Sidebar Extensions) in a stack
- The size of the configuration file of a Sidebar Extension cannot exceed **10** KB.
- The maximum number of content types that can be added in the scope of a Sidebar Extensions is **20**.
- Internally as well externally hosted Sidebar Extensions are not supported on Internet Explorer and Microsoft Edge as these browsers lack support for the <iframe> srcdoc attribute. [Read more](https://caniuse.com/#feat=iframe-srcdoc).
- Extensions are loaded in an iframe in sandbox mode for security reason. Hence, the cookies are not exposed. However, as popups are allowed in the current sandbox mode, you can open the popup window and access the cookies or storage in the popup window.

## Common questions

**Q: What is the maximum allowed size for a sidebar extension source code?**  
A: The maximum size of the sidebar extension source code cannot exceed **500** KB.

**Q: How many extensions can be installed in a stack?**  
A: You can install maximum **50** extensions (including custom fields and Sidebar Extensions) in a stack

**Q: Are Sidebar Extensions supported on Internet Explorer and Microsoft Edge?**  
A: Internally as well externally hosted Sidebar Extensions are not supported on Internet Explorer and Microsoft Edge as these browsers lack support for the <iframe> srcdoc attribute.

**Q: Why can’t Sidebar Extensions access cookies directly?**  
A: Extensions are loaded in an iframe in sandbox mode for security reason. Hence, the cookies are not exposed. However, as popups are allowed in the current sandbox mode, you can open the popup window and access the cookies or storage in the popup window.