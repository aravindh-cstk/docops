---
title: "getActiveVariant"
description: "The `getActiveVariant()` method returns the short UID of the active variant for a specified experience, identified by its short UID. It returns `null` if the experience is not active or there are no variants active for the user. Warning: The use of `getActiveVariant()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `getActiveVariant()` method within the SDK instance. For more details, refer to `getActiveVariant()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getactivevariant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getActiveVariant

The `getActiveVariant()` method returns the short UID of the active variant for a specified experience, identified by its short UID. It returns `null` if the experience is not active or there are no variants active for the user.

Warning:

The use of
getActiveVariant()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
getActiveVariant()

method within the SDK instance.
For more details, refer to
getActiveVariant()

with an SDK Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| experienceShortUid | string | No | — | The unique identifier for an experience, available in the Personalize Experiences page or through a variant alias. |

Returns:
Type
string | null

**Example:**

```
const activeVariant = Personalize.getActiveVariant(experienceShortUid);
```
