---
title: "reset"
description: "The `reset()` method reverts the SDK to its original state by performing the following actions: Deletes the manifest. Clears the user ID. Removes any associated cookies in browser environments. This method ensures a clean slate for the SDK's operation. Warning: The use of `reset()` method in the global Personalize namespace is deprecated. As part of the transition to use the SDK instance, `Personalize.reset()` is no longer required and will be removed in a future release."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-reset"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## reset

The `reset()` method reverts the SDK to its original state by performing the following actions:

- Deletes the manifest.
- Clears the user ID.
- Removes any associated cookies in browser environments.

This method ensures a clean slate for the SDK's operation.

Warning:

The use of
reset()

method in the global Personalize namespace is deprecated. As part of the transition to use the SDK instance,
Personalize.reset()

is no longer required and will be removed in a future release.

No parameters.

Returns:
Type
void

**Example:**

```
await Personalize.init(projectUid);
Personalize.getUserId(); // returns a random user ID
Personalize.reset();
Personalize.getUserId(); // returns `undefined`
```
