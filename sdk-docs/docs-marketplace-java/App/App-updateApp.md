---
title: "updateApp"
description: "The updateApp method updates the app call."
url: "https://www.contentstack.com/java-marketplace-app-updateapp"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## updateApp

The updateApp method updates the app call.

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
App app = marketplace.app().updateApp(); 
Call response = app.execute();
```
