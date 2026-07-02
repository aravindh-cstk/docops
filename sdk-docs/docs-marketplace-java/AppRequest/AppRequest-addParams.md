---
title: "addParams"
description: "The addParams method adds all the key-value pairs from the given HashMap to the queryParams HashMap and returns the updated AppRequest object. Specified by: addParams in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-apprequest-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

The addParams method adds all the key-value pairs from the given HashMap to the queryParams HashMap and returns the updated AppRequest object.

**Specified by:**

**addParams** in interface **BaseImplementation**

****

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | Object | Yes | — | The value of the header to be added |

Returns:
Type
AppRequest

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("api.contentstack.io").build(); 
AppRequest appRequest = marketplace.request(); 
HashMap headers = new HashMap(); 
appRequest.addParams(headers);
```
