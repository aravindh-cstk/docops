---
title: "getVariantParam"
description: "The `getVariantParam()` method returns an opaque variant parameter, formatted as a comma-separated list of active experience and variant short UIDs. This parameter is designed to be easily included in a URL as a query parameter, enabling the transfer of the active variants for the current user. This method is commonly used in edge functions to streamline the handling of variant information."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-getvariantparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getVariantParam

The `getVariantParam()` method returns an opaque variant parameter, formatted as a comma-separated list of active experience and variant short UIDs. This parameter is designed to be easily included in a URL as a query parameter, enabling the transfer of the active variants for the current user.

This method is commonly used in edge functions to streamline the handling of variant information.

No parameters.

Returns:
Type
string

**Example:**

```
personalizeSdk.getVariantParam(); // 'a_0,b_1'
```
