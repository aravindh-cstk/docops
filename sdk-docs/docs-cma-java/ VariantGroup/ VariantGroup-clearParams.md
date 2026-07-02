---
title: "clearParams"
description: "The clearParams method removes a specific query parameter from the request using its key."
url: "https://www.contentstack.com/java-management-variantgroups-clearparams"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## clearParams

The `clearParams` method removes a specific query parameter from the request using its key.

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| key | String | Yes | — | Removes the query parameter that matches the specified key. |

Returns:
Type
Void

```
import Contentstack;

// Replace AUTHTOKEN and API_KEY with your actual credentials

Contentstack contentstack = new Contentstack.Builder().setAuthToken(AUTHTOKEN).build();
Stack stack = contentstack.stack(API_KEY);

VariantGroup variantgroup = stack.variantGroup();

// Remove a specific query parameter (e.g., 'include_count') using its key

variantGroup.clearParams("key");
```
