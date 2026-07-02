---
title: "addParam"
description: "The addParam method adds a parameter to a collection using a key-value pair. Specified by: addParam in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-apprequest-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The addParam method adds a parameter to a collection using a key-value pair.

**Specified by:**

**addParam** in interface **BaseImplementation**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | Object | Yes | — | The value of the given key in the queryParams map |

Returns:
Type
AppRequest

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
AppRequest appRequest = marketplace.request(); 
appRequest.addParam("key", "value");
```
