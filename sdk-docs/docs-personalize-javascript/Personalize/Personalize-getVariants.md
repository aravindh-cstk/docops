---
title: "getVariants"
description: "The `getVariants()` method retrieves the active variants as key-value pairs, where the keys are experience short UIDs and the values are variant short UIDs. For inactive experiences, the values will be `null` . Warning: The use of `getVariants()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `getVariants()` method within the SDK instance. For more details, refer to `getVariants()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getvariants"
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

Warning:

The use of
getVariants()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
getVariants()

method within the SDK instance.
For more details, refer to
getVariants()

with an SDK Instance.

No parameters.

Returns:
Type
Record<string, string>

**Example:**

```
Personalize.getVariants(); // {a: 0, b: 1}
```
