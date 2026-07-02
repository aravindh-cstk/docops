---
title: "addHeaders"
description: "The addHeaders method takes a HashMap of headers and adds them to the request. Specified by: addHeaders provides support to add custom header to the request"
url: "https://www.contentstack.com/java-marketplace-installation-addheaders"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeaders

The addHeaders method takes a HashMap of headers and adds them to the request.

**Specified by:**

**addHeaders** provides support to add custom header to the request

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
HashMap parameters = new HashMap(); 
Installation installation = marketplace.installation().addHeaders(parameters);
```
