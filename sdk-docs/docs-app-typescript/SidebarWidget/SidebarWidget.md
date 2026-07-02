---
title: "SidebarWidget"
description: "The SidebarWidget UI location integrates with entry sidebars to provide contextual tools and information for content editors."
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/sidebarwidget"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# SidebarWidget

## SidebarWidget

The `SidebarWidget` UI location integrates with entry sidebars to provide contextual tools and information for content editors.

```
const sidebar = sdk.location.SidebarWidget;
if (sidebar) {
  const entry = sidebar.entry;
  const stack = sidebar.stack;
}
```

It supports the following core objects:

- [Entry](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#entry-object)
- [Stack](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#stack-object)
