---
title: "findApps"
description: "The findApps method finds the app's call."
url: "https://www.contentstack.com/java-marketplace-app-findapps"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## findApps

The findApps method finds the app's call.

No parameters.

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
App app = marketplace.app().findApps(); 
Call response = app.execute();
```
