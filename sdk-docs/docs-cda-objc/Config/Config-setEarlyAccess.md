---
title: "setEarlyAccess"
description: "With the setEarlyAccess header support, you can access features that are part of the early access program."
url: "https://www.contentstack.com/ios-config-setearlyaccess"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setEarlyAccess

With the `setEarlyAccess` header support, you can access features that are part of the early access program.

No parameters.

Returns:
Type
config

```
Config *config = [[Config alloc] init];
[config setEarlyAccess:@[@"Taxonomy",@"Teams",@"Terms", @"LivePreview"]];
```
