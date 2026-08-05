---
title: "createInstallation"
description: "The createInstallation method creates an installation call."
url: "https://www.contentstack.com/java-marketplace-app-createinstallation"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## createInstallation

The createInstallation method creates an installation call.

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
App app = marketplace.app().createInstallation(body); 
Call response = app.execute();
```
