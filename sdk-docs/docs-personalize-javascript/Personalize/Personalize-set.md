---
title: "set"
description: "The `set()` method allows you to define user attributes as key-value pairs representing user traits. To use these attributes, create them with matching keys in the Personalize Attributes module. Warning: The use of `set()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `set()` method within the SDK instance. For more details, refer to `set()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-set"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## set

The `set()` method allows you to define user attributes as key-value pairs representing user traits. To use these attributes, create them with matching keys in the Personalize Attributes module.

Warning:

The use of
set()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
set()

method within the SDK instance.
For more details, refer to
set()

with an SDK Instance.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| clientAttributes | ClientAttributes | No | — | An object representing key-value pairs to define user traits, set on the client. |

Returns:
Type
Promise<void>

**Example:**

```
await Personalize.set({ age: 20 });
```
