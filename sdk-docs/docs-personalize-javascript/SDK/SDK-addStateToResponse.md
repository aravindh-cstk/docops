---
title: "addStateToResponse"
description: "The `addStateToResponse()` helper method appends user state information, including the user ID and current manifest, as set-cookie headers to the provided response object. This method is typically used in Edge Functions to efficiently manage user state tracking. By using this approach, the Personalize SDK can initialize in the browser without needing a network call to retrieve the manifest."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-addstatetoresponse"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addStateToResponse

The `addStateToResponse()` helper method appends user state information, including the user ID and current manifest, as set-cookie headers to the provided response object. This method is typically used in Edge Functions to efficiently manage user state tracking.

By using this approach, the Personalize SDK can initialize in the browser without needing a network call to retrieve the manifest.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| response | Response | No | — | A standard web response object used to append set-cookie headers for managing user state. |

Returns:
Type
Promise<void>

**Example:**

```
await personalizeSdk.addStateToResponse(response);
```
