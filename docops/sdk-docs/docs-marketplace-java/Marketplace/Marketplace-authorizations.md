---
title: "authorizations"
description: "The authorizations method retrieves a new instance of the Auth class with the given client and orgId."
url: "https://www.contentstack.com/java-marketplace-authorizations"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## authorizations

The authorizations method retrieves a new instance of the Auth class with the given client and orgId.

No parameters.

Returns:
Type
Auth

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Auth authorizations = marketplace.authorizations();
```
