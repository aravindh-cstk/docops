---
title: "getInitializationStatus"
description: "The `getInitializationStatus()` method provides the current status of SDK initialization. The status transitions to initializing when the SDK starts initializing, updates to success upon completion, and changes to error if an issue occurs. Note: Use this method to verify that the SDK has been fully initialized before calling other SDK methods."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getuserid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getInitializationStatus

The `getInitializationStatus()` method provides the current status of SDK initialization. The status transitions to initializing when the SDK starts initializing, updates to success upon completion, and changes to error if an issue occurs.

**Note:** Use this method to verify that the SDK has been fully initialized before calling other SDK methods.

No parameters.

Returns:
Type
InitializationStatus

**Example:**

```
const initializationPromise = Personalize.init(projectUid);
Personalize.getInitializationStatus(); // `initializing`.
await initializationPromise;
Personalize.getInitializationStatus(); // `success`
```
