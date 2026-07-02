---
title: "addHeader"
description: "The addHeader method adds a header with the specified key and value to this location and returns the updated location. Specified by: addHeader in interface BaseImplementation<App>"
url: "https://www.contentstack.com/java-marketplace-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeader

The addHeader method adds a header with the specified key and value to this location and returns the updated location.

**Specified by:**

**addHeader*** *in interface **BaseImplementation<App>**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | String | Yes | — | The value of the header to be added |

Returns:
Type
App

**Throws:**

**java.lang.NullPointerException **- if the key or value argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
App app = marketplace.app().addHeader("key","value");
```
