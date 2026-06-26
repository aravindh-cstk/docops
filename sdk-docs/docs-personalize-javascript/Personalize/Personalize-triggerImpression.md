---
title: "triggerImpression"
description: "The `triggerImpression()` method records an impression for a specified experience and sends it for the active variant as defined in the current user’s manifest. Use this method whenever an experience is displayed to the user. Warning: The use of `triggerImpression()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `triggerImpression()` method within the SDK instance. For more details, refer to `triggerImpression()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-triggerimpression"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## triggerImpression

The `triggerImpression()` method records an impression for a specified experience and sends it for the active variant as defined in the current user’s manifest. Use this method whenever an experience is displayed to the user.

Warning:

The use of
triggerImpression()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
triggerImpression()

method within the SDK instance.
For more details, refer to
triggerImpression()

with an SDK Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| experienceShortUid | string | No | — | The unique identifier of the experience for which the impression is to be triggered. |

Returns:
Type
Promise<void>

**Example:**

```
const experienceShortUid = 'a';
await Personalize.triggerImpression(experienceShortUid);
```
