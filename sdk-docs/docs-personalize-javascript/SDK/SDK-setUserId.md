---
title: "setUserId"
description: "The setUserId() method allows assigning a custom, externally managed user ID to the current user, overriding the automatically generated ID created during the SDK's first initialization. This is useful for scenarios like when an anonymous user logs in. If you want to retain previously tracked user attributes after assigning a new user ID, use the preserveUserAttributes option, which merges the current user's attributes into the new ID. In browser environments, this method sets a cookie (cs-personalize-user-id) to persist the user ID across sessions. Note: You can call this method either before or after initializing the SDK."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-setuserid"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## setUserId

The `setUserId()` method allows assigning a custom, externally managed user ID to the current user, overriding the automatically generated ID created during the SDK's first initialization. This is useful for scenarios like when an anonymous user logs in.

If you want to retain previously tracked user attributes after assigning a new user ID, use the `preserveUserAttributes` option, which merges the current user's attributes into the new ID. In browser environments, this method sets a cookie `(cs-personalize-user-id)` to persist the user ID across sessions.

**Note: **You can call this method either before or after initializing the SDK.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| userId | string | No | — | The new user ID for the current user. |
| options | SetUserIdOptions | No | — | To retain previously tracked user data. |

Returns:
Type
Promise<void>

**Example:**

```
await personalizeSdk.setUserId(newUserId, { preserveUserAttributes: true });
```
