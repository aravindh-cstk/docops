---
title: "findAppInstallations"
description: "The findAppInstallations method finds the app installation call."
url: "https://www.contentstack.com/java-marketplace-app-findappinstallations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAppInstallations

The findAppInstallations method finds the app installation call.

No parameters.

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
App app = marketplace.app().findAppInstallations(); 
Call response = app.execute();
```
