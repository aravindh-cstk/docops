---
title: "addParam"
description: "The addParam method adds a parameter to the collection using a key-value pair. Specified by: addParam in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-installation-addparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParam

The addParam method adds a parameter to the collection using a key-value pair.

**Specified by:**

**addParam** in interface **BaseImplementation**

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
Installation installation = marketplace.installation().addParam("key", "value");
```
