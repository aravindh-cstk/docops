---
title: "init"
description: "The init() method initializes the SDK and must be called and awaited before use. It requests the Personalize Edge Manifest API and returns a promise that resolves to an SDK instance containing the current user's context, including active variants. This instance provides access to SDK features such as setting attributes, triggering events, and fetching variants. In browsers, if a manifest cookie exists (e.g., set by the addStateToResponse() method), the SDK bypasses the network request and uses the cookie."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-init"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## init

The `init()` method initializes the SDK and must be called and awaited before use. It requests the Personalize Edge [Manifest](/docs/developers/apis/personalize-edge-api#manifest) API and returns a promise that resolves to an SDK instance containing the current user's context, including active variants. This instance provides access to SDK features such as setting attributes, triggering events, and fetching variants.

In browsers, if a manifest cookie exists (e.g., set by the `addStateToResponse()` method), the SDK bypasses the network request and uses the cookie.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| projectUid | string | No | — | The personalize project UID. |
| options | InitOptions | No | — | Options for initialization options. |

Returns:
Type
Promise<Sdk>

**Example:**

```
const personalizeSdk = await Personalize.init(projectUid, { request });
```
