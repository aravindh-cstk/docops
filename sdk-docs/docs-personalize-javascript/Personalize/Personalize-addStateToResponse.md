---
title: "addStateToResponse"
description: "The `addStateToResponse()` helper method appends user state information, including the user ID and current manifest, as set-cookie headers to the provided response object. This method is typically used in edge functions to efficiently manage user state tracking. By using this approach, the Personalize SDK can initialize in the browser without needing a network call to retrieve the manifest. Warning: The use of `addStateToResponse()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `addStateToResponse()` method within the SDK instance. For more details, refer to `addStateToResponse()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-addstatetoresponse"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addStateToResponse

The `addStateToResponse()` helper method appends user state information, including the user ID and current manifest, as set-cookie headers to the provided response object. This method is typically used in edge functions to efficiently manage user state tracking.

By using this approach, the Personalize SDK can initialize in the browser without needing a network call to retrieve the manifest.

Warning:

The use of
addStateToResponse()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
addStateToResponse()

method within the SDK instance.
For more details, refer to
addStateToResponse()

with an SDK Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| response | Response | No | — | A standard web response object used to append set-cookie headers for managing user state. |

Returns:
Type
Promise<void>

**Example:**

```
await Personalize.addStateToResponse(response);
```
