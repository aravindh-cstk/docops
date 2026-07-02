---
title: "getActiveVariant"
description: "The getActiveVariant() method returns the short UID of the active variant for a specified experience, identified by its short UID. It returns null if the experience is not active or there are no variants active for the user."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-getactivevariant"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getActiveVariant

The `getActiveVariant()` method returns the short UID of the active variant for a specified experience, identified by its short UID. It returns `null` if the experience is not active or there are no variants active for the user.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| experienceShortUid | string | No | — | The unique identifier for an experience, available in the Personalize Experiences page or through a variant alias. |

Returns:
Type
string | null

**Example:**

```
const activeVariant = personalizeSdk.getActiveVariant(experienceShortUid);
```
