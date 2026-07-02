---
title: "addHeader"
description: "The addHeader method sets a custom header for the request. Use this to specify a key–value pair in the request header."
url: "https://www.contentstack.com/java-management-variantgroups-addheader"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## addHeader

The `addHeader` method sets a custom header for the request. Use this to specify a key–value pair in the request header.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | The name of the header to include in the request. Common headers include `authorization` , `authtoken` , or `api_key` . |
| value | Object | Yes | — | The value assigned to the header. This can be a string, such as a token or API key. Appears in the final request header. |

Returns:
Type
Void

```
import Contentstack;

// Replace AUTHTOKEN and API_KEY with your actual credentials

Contentstack contentstack = new Contentstack.Builder().setAuthToken(AUTHTOKEN).build();
Stack stack = contentstack.stack(API_KEY);

// Add a custom header to the request using a key-value pair.
// For example: key = "authorization", value = "Bearer your_auth_token"

VariantGroup variantgroup = stack.variantGroup();
variantGroup.addHeader("key", "value");
```
