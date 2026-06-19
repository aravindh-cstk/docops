---
title: "[Extensions] - Limitations of Dashboard Extensions"
description: Limitations and constraints for dashboard extensions, including size, title length, installation limits, configuration size, and height behavior.
url: https://www.contentstack.com/docs/developers/create-dashboard-extensions/limitations-of-dashboard-extensions
product: Contentstack
doc_type: developer-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Limitations of Dashboard Extensions

This page lists the limitations of Dashboard Extensions, including size limits, installation limits, configuration constraints, and display behavior. It is intended for developers building or managing dashboard extensions and should be referenced when designing, configuring, or troubleshooting extension implementations.

## Limitations of Dashboard Extensions

**Note**: Experience Extensions use the legacy approach with extensions. We recommend using the [Dashboard UI Location](/docs/developers/developer-hub/dashboard-location/) for the Contentstack App Framework to extend the functionality of your apps.

- The maximum size of the dashboard extension code cannot exceed 500KB.
- The maximum character length for the Title field is 256.
- You can install a maximum of **50 **extensions (including custom fields, sidebar extensions, dashboard extensions, and JSON RTE plugins) in a [stack](/docs/developers/set-up-stack/about-stack).
- The maximum size of the dashboard extension’s configuration parameters cannot exceed 10KB.
- The height of the dashboard extension can be altered when it is in the full-screen mode. It can vary from the default dashboard extension height to the browser window's height only.

## Common questions

### What is the maximum allowed size for dashboard extension code?
The maximum size of the dashboard extension code cannot exceed 500KB.

### How many extensions can be installed in a stack?
You can install a maximum of **50 **extensions (including custom fields, sidebar extensions, dashboard extensions, and JSON RTE plugins) in a [stack](/docs/developers/set-up-stack/about-stack).

### What is the maximum size for dashboard extension configuration parameters?
The maximum size of the dashboard extension’s configuration parameters cannot exceed 10KB.

### Can the dashboard extension height be changed?
The height of the dashboard extension can be altered when it is in the full-screen mode. It can vary from the default dashboard extension height to the browser window's height only.