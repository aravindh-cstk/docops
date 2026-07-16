---
title: "findAppAuthorizations"
description: "The findAppAuthorizations method finds the app authorizations call."
url: "https://www.contentstack.com/java-marketplace-findappauthorizations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## findAppAuthorizations

The findAppAuthorizations method finds the app authorizations call.

No parameters.

Returns:
Type
call

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
App app = marketplace.app().findAppAuthorizations(); 
Call response = app.execute();
```
