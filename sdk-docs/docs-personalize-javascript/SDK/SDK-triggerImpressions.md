---
title: "triggerImpressions"
description: "The triggerImpressions() method triggers multiple impressions for the given input. If provided with Experience Short UIDs, the impression is sent for the corresponding active variants in the manifest. If provided with Variant Aliases instead, it will use the Experience Short UID and Variant Short UID in the alias to trigger impressions, without referring to the manifest."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-triggerimpressions"
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

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| triggerImpressionOptions | TriggerImpressionOptions | No | — | A Javascript object containing either experienceShortUids or aliases. Trigger impressions with either Experience Short UIDs or Variant Aliases. |

Returns:
Type
Promise<void>

**Example:**

```
const experienceShortUids = ['a', 'b'];
await personalizeSdk.triggerImpressions({ experienceShortUids });
await personalizeSdk.triggerImpressions({ aliases: ['cs_personalize_a_0', 'cs_personalize_b_1'] });
```
