---
title: "set"
description: "The set() method allows you to define user attributes as key-value pairs representing user traits. To use these attributes, ensure that matching keys are created in the Personalize Attributes module. Setting user attributes is an async operation, as they are sent to Personalize’s edge network using the Edge API."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-set"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## set

The `set()` method allows you to define user attributes as key-value pairs representing user traits. To use these attributes, ensure that matching keys are created in the Personalize Attributes module. Setting user attributes is an async operation, as they are sent to Personalize’s edge network using the Edge API.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| clientAttributes | ClientAttributes | No | — | An object containing key-value pairs that define user traits on the client. |

Returns:
Type
Promise<void>

**Example:**

```
await personalizeSdk.set({ age: 20 });
```
