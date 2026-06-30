---
title: "addParams"
description: "The addParams method adds the specified parameters. Specified by: addParams in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-auth-addparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addParams

The addParams method adds the specified parameters.

**Specified by:**

**addParams** in interface **BaseImplementation**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| params | HashMap | Yes | — | The parameters to be added |

Returns:
Type
Auth

**Throws:**

**NullPointerException - **if the params argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Auth authorizations = marketplace.authorizations(); 
HashMap params = new HashMap(); 
authorizations.addParams(params);
```
