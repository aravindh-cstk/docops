---
title: "addHeader"
description: "The addHeader method adds a header with a specified key and value to a request. Specified by: addHeader in interface BaseImplementation"
url: "https://www.contentstack.com/java-marketplace-installation-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeader

The addHeader method adds a header with a specified key and value to a request.

**Specified by:**

**addHeader** in interface **BaseImplementation**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The key of the header to be added |
| value | String | Yes | — | The value of the header to be added |

Returns:
Type
Installation

**Example:**

```
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
Installation installation = marketplace.installation().addHeader("key", "value");
```
