---
title: "addHeaders"
description: "The addHeaders method adds headers to a HashMap and adds them to the request. Specified by: addHeaders provides support to add custom header to the request"
url: "https://www.contentstack.com/java-marketplace-apprequest-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## addHeaders

The addHeaders method adds headers to a HashMap and adds them to the request.

**Specified by:**

**addHeaders** provides support to add custom header to the request

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
Marketplace marketplace = new Marketplace.Builder("ORGANIZATION_UID") .host("marketplace.contentstack.io").build(); 
AppRequest appRequest = marketplace.request(); 
HashMap headers = new HashMap(); 
appRequest.addHeaders(headers);
```
