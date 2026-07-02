---
title: "addParams"
description: "The addParams method adds the specified parameters to this location and returns the updated location. Specified by: addParams"
url: "https://www.contentstack.com/java-marketplace-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addParams

The addParams method adds the specified parameters to this location and returns the updated location.

**Specified by: **

addParams

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | HashMap | Yes | — | The parameters to be added |

Returns:
Type
App

**Throws:**

**java.lang.NullPointerException **- if the params argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
HashMap param = new HashMap(); 
App app = marketplace.app().addParams(param);
```
