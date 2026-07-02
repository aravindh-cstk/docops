---
title: "createApp"
description: "The createApp method creates an app call."
url: "https://www.contentstack.com/java-marketplace-app-createapp"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## createApp

The createApp method creates an app call.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| body | JSONObject | Yes | — | The body of the call |

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
JSONObject body = new JSONObject(); 
App app = marketplace.app().createApp(body); 
Call response = app.execute();
```
