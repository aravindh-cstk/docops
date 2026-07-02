---
title: "triggerImpressions"
description: "The triggerImpressions() method triggers multiple impressions for the given input. If provided with Experience Short UIDs, the impression is sent for the corresponding active variants in the manifest. If provided with Variant Aliases instead, it will use the Experience Short UID and Variant Short UID in the alias to trigger impressions, without referring to the manifest. Warning: The use of triggerImpressions() as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the triggerImpressions() method within the SDK instance. For more details, refer to triggerImpressions() with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-triggerimpressions"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## triggerImpressions

The `triggerImpressions()` method triggers multiple impressions for the given input. If provided with Experience Short UIDs, the impression is sent for the corresponding active variants in the manifest. If provided with Variant Aliases instead, it will use the Experience Short UID and Variant Short UID in the alias to trigger impressions, without referring to the manifest.

Warning:

The use of
triggerImpressions()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
triggerImpressions()

method within the SDK instance.
For more details, refer to
triggerImpressions()

with an SDK Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| triggerImpressionOptions | TriggerImpressionOptions | No | — | A Javascript object containing either experienceShortUids or aliases. Trigger impressions with either Experience Short UIDs or Variant Aliases. |

Returns:
Type
Promise<void>

**Example:**

```
const experienceShortUids = ['a', 'b'];
await Personalize.triggerImpressions({ experienceShortUids });
await Personalize.triggerImpressions({ aliases: ['cs_personalize_a_0', 'cs_personalize_b_1'] });
```
