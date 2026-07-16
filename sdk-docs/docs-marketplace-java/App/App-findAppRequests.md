---
title: "findAppRequests"
description: "The findAppRequests method retrieves a call to list app requests with specified headers, app UID, and parameters."
url: "https://www.contentstack.com/java-marketplace-app-findapprequests"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAppRequests

The findAppRequests method retrieves a call to list app requests with specified headers, app UID, and parameters.

No parameters.

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
App app = marketplace.app().findAppRequests(); 
Call response = app.execute();
```
