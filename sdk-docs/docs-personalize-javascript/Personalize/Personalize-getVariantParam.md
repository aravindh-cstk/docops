---
title: "getVariantParam"
description: "The getVariantParam() method returns an opaque variant parameter, formatted as a comma-separated list of active experience and variant short UIDs. This parameter is designed to be easily included in a URL as a query parameter, enabling the transfer of the active variants for the current user. This method is commonly used in edge functions to streamline the handling of variant information. Warning: The use of getVariantParam() as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the getVariantParam() method within the SDK instance. For more details, refer to getVariantParam() with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getvariantparam"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getVariantParam

The `getVariantParam()` method returns an opaque variant parameter, formatted as a comma-separated list of active experience and variant short UIDs. This parameter is designed to be easily included in a URL as a query parameter, enabling the transfer of the active variants for the current user.

This method is commonly used in edge functions to streamline the handling of variant information.

Warning:

The use of
getVariantParam()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
getVariantParam()

method within the SDK instance.
For more details, refer to
getVariantParam()

with an SDK Instance.

No parameters.

Returns:
Type
string

**Example:**

```
Personalize.getVariantParam(); // 'a_0,b_1'
```
