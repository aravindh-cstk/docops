---
title: "updateVersion"
description: "The updateVersion method updates the version call."
url: "https://www.contentstack.com/java-marketplace-updateversion"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## updateVersion

The updateVersion method updates the version call.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | String | Yes | — | The body of the call |

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
JSONObject body = new JSONObject(); 
App app = marketplace.app().updateVersion(body); 
Call response = app.execute();
```
