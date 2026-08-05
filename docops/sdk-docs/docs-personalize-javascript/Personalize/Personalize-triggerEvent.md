---
title: "triggerEvent"
description: "The `triggerEvent()` method records significant user actions, such as clicking a CTA or scrolling to the end of a page, by passing an `eventKey` —a unique identifier defined in the Personalize Events module. This allows tracking conversions, analyzing user behavior, and measuring A/B test outcomes. Warning: The use of `triggerEvent()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `triggerEvent()` method within the SDK instance. For more details, refer to `triggerEvent()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-triggerevent"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## triggerEvent

The `triggerEvent()` method records significant user actions, such as clicking a CTA or scrolling to the end of a page, by passing an `eventKey`—a unique identifier defined in the Personalize Events module. This allows tracking conversions, analyzing user behavior, and measuring A/B test outcomes.

Warning:

The use of
triggerEvent()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
triggerEvent()

method within the SDK instance.
For more details, refer to
triggerEvent()

with an SDK Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| eventKey | string | No | — | Key for the event in Personalize |

Returns:
Type
Promise<void>

**Example:**

```
await Personalize.triggerEvent('clickCTA');
```
