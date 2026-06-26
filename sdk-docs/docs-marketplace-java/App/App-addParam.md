---
title: "addParam"
description: "The addParam method adds a header with the specified key and value to the current location and returns the updated location. Specified by: addParam in interface BaseImplementation<App>"
url: "https://www.contentstack.com/java-app-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParam

The addParam method adds a header with the specified key and value to the current location and returns the updated location.

**Specified by:**

**addParam** in interface **BaseImplementation<App>**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | Object | Yes | — | The value of the header to be added |

Returns:
Type
App

**Throws:**

**java.lang.NullPointerException **- if the key or value argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marktetplace.contentstack.io").build(); 
App app = marketplace.app().addParam("key","value");
```
