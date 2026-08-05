---
title: " addHeaders"
description: "The addHeaders method adds the specified parameters to this location and returns the updated location. Specified by: addHeaders provides support to add custom header to the request."
url: "https://www.contentstack.com/java-marketplace-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

##  addHeaders

The addHeaders method adds the specified parameters to this location and returns the updated location.

**Specified by:**

**addHeaders** provides support to add custom header to the request.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | HashMap | Yes | — | The parameters to be added |

Returns:
Type
App

**Throws:**

**java.lang.NullPointerException **- if the params argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
HashMap param = new HashMap(); 
App app = marketplace.app().addHeaders(param);
```
