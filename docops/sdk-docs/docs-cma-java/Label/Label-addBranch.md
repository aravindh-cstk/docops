---
title: "addBranch"
description: "Enter your branch's unique ID."
url: "https://www.contentstack.com/java-management-label-addbranch"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addBranch

Enter your branch's unique ID.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | Object | Yes | — | Branch's unique ID. |

Returns:
Type
Label

```
import contentstack;
Contentstack contentstack = new Contentstack.Builder().build();
Label label = contentstack.stack().label();
response = label.addBranch(value);
```
