---
title: "getUserId"
description: "The `getUserId()` method retrieves the current user ID. Warning: The use of `getUserId()` as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the `getUserId()` method within the SDK instance. For more details, refer to `getUserId()` with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getuserid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getUserId

The `getUserId()` method retrieves the current user ID.

Warning:

The use of
getUserId()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
getUserId()

method within the SDK instance.
For more details, refer to
getUserId()

with an SDK Instance.

No parameters.

Returns:
Type
string | undefined

**Example:**

```
const userId = Personalize.getUserId();
```
