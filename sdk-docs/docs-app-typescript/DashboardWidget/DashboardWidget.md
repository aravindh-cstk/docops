---
title: "DashboardWidget"
description: "The DashboardWidget UI location integrates with the Contentstack dashboard to provide stack-level functions."
url: "https://www.contentstack.com/developers/sdks/contentstack-app-sdk/typescript/reference/dashboardwidget"
product: "Contentstack"
doc_type: "class_intro"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

# DashboardWidget

## DashboardWidget

The `DashboardWidget` UI location integrates with the Contentstack dashboard to provide stack-level functions.

```
const dashboard = sdk.location.DashboardWidget;
if (dashboard) {
  const stack = dashboard.stack;
  const frame = dashboard.frame;
}
```

It supports the following objects:

- [Stack](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#stack-object)
- [Frame](/docs/developers/sdks/contentstack-app-sdk/typescript/reference#frame-object)
