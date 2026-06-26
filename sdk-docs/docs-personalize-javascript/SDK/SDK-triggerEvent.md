---
title: "triggerEvent"
description: "The `triggerEvent()` method records important user actions, such as clicking a CTA or scrolling to the end of a page. It requires an `eventKey` a unique identifier defined in the Personalize Events module, to track conversions, analyze user behavior, and measure A/B test outcomes."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-triggerevent"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## triggerEvent

The `triggerEvent()` method records important user actions, such as clicking a CTA or scrolling to the end of a page. It requires an `eventKey` a unique identifier defined in the Personalize Events module, to track conversions, analyze user behavior, and measure A/B test outcomes.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| eventKey | string | No | — | The unique key for the event in Personalize. |

Returns:
Type
Promise<void>

**Example:**

```
await personalizeSdk.triggerEvent('clickCTA');
```
