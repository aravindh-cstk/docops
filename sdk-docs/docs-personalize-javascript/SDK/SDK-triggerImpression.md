---
title: "triggerImpression"
description: "The triggerImpression() method records an impression for a specified experience and associates it with the active variant defined in the current user’s manifest. Use this method whenever an experience is displayed to the user to ensure accurate tracking."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-triggerimpression"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## triggerImpression

The `triggerImpression()` method records an impression for a specified experience and associates it with the active variant defined in the current user’s manifest. Use this method whenever an experience is displayed to the user to ensure accurate tracking.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| experienceShortUid | string | No | — | The unique identifier of the experience for which the impression is to be recorded. |

Returns:
Type
Promise<void>

**Example:**

```
const experienceShortUid = 'a';
await personalizeSdk.triggerImpression(experienceShortUid);
```
