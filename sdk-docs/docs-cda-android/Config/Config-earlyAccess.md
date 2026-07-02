---
title: "earlyAccess"
description: "The earlyAccess method retrieves features by enabling the early access header, allowing access to functionalities that are part of the early access program."
url: "https://www.contentstack.com/android-config-earlyaccess"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## earlyAccess

The `earlyAccess` method retrieves features by enabling the early access header, allowing access to functionalities that are part of the early access program.

No parameters.

Returns:
Type
Config

**Example:**

```
Config config = new Config();
String[] earlyAccess = {"Taxonomy", "Teams", "Terms", "LivePreview"};
config.earlyAccess(earlyAccess);
stack = Contentstack.stack("apiKey", "deliveryToken", "environment", config);
```
