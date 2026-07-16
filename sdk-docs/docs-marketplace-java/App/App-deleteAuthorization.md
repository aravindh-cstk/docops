---
title: "deleteAuthorization"
description: "The deleteAuthorization method deletes the authorization call."
url: "https://www.contentstack.com/java-marketplace-deleteauthorization"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## deleteAuthorization

The deleteAuthorization method deletes the authorization call.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| authorizationUid | String | Yes | — | UID of the authorization call |

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("api.contentstack.io").build(); 
App app = marketplace.app().deleteAuthorization("authorizationUid"); 
Call response = app.execute();
```
