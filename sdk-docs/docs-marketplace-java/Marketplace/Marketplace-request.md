---
title: "request"
description: "The request method retrieves a new instance of the AppRequest class with the specified client and orgId."
url: "https://www.contentstack.com/java-marketplace-request"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## request

The request method retrieves a new instance of the AppRequest class with the specified client and orgId.

No parameters.

Returns:
Type
AppRequest

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
AppRequest request = marketplace.request();
```
