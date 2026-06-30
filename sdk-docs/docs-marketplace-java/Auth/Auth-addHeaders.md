---
title: "addHeaders"
description: "The addHeaders method adds the specified parameters. Specified by: addHeaders in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-auth-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeaders

The addHeaders method adds the specified parameters.

**Specified by:**

**addHeaders** in interface **BaseImplementation**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| headers | HashMap | Yes | — | The parameters to be added |

Returns:
Type
Auth

**Throws:**

**NullPointerException - **if the params argument is null

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("api.contentstack.io").build(); 
Auth authorizations = marketplace.authorizations(); 
HashMap params = new HashMap(); 
authorizations.addHeaders(params);
```
