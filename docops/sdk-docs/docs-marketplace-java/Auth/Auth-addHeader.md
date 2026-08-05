---
title: "addHeader"
description: "The addHeader adds a header with the specified key and value. Specified by: addHeader provides support to add custom header to the request"
url: "https://www.contentstack.com/java-marketplace-auth-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeader

The addHeader adds a header with the specified key and value.

**Specified by:**

**addHeader **provides support to add custom header to the request

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | Object | Yes | — | The value of the header to be added |

Returns:
Type
Auth

**Throws:**

**NullPointerException - **if the key or value argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Auth authorizations = marketplace.authorizations(); 
authorizations.addHeader("key", "value");
```
