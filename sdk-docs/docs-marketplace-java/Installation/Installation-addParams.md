---
title: "addParams"
description: "The addParams method takes a HashMap of parameters and returns a generic type T. Specified by: addParams in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-installation-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParams

The addParams method takes a HashMap of parameters and returns a generic type T.

**Specified by:**

**addParams** in interface **BaseImplementation**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | Object | Yes | — | The value of the header to be added |

Returns:
Type
Installation

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
HashMap parameters = new HashMap(); 
Installation installation = marketplace.installation().addParams(parameters);
```
