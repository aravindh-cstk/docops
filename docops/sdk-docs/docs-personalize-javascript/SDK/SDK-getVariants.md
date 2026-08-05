---
title: "getVariants"
description: "The `getVariants()` method retrieves the active variants as key-value pairs, where the keys are experience short UIDs and the values are variant short UIDs. For inactive experiences, the values will be `null` ."
url: "https://www.contentstack.com/copy-of-javascript-personalize-edge-sdk-sdk-getvariants"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getVariants

The `getVariants()` method retrieves the active variants as key-value pairs, where the keys are experience short UIDs and the values are variant short UIDs. For inactive experiences, the values will be `null`.

No parameters.

Returns:
Type
Record<string, string>

**Example:**

```
personalizeSdk.getVariants(); // {a: 0, b: 1}
```
