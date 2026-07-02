---
title: "getVariantAliases"
description: "The getVariantAliases() method retrieves a list of active experiences represented as variant aliases. These aliases are used by Personalize to identify CMS variants and can be passed to the CMS Delivery API to fetch personalized content entries. The list is ordered by priority, with higher-priority variants appearing earlier. Warning: The use of getVariantAliases() as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the getVariantAliases() method within the SDK instance. For more details, refer to getVariantAliases() with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getvariantaliases"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getVariantAliases

The `getVariantAliases()` method retrieves a list of active experiences represented as variant aliases. These aliases are used by Personalize to identify CMS variants and can be passed to the CMS Delivery API to fetch personalized content entries.

The list is ordered by priority, with higher-priority variants appearing earlier.

Warning:

The use of
getVariantAliases()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
getVariantAliases()

method within the SDK instance.
For more details, refer to
getVariantAliases()

with an SDK Instance.

No parameters.

Returns:
Type
string[]

**Example:**

```
Personalize.getVariantAliases(); // ['cs_personalize_a_0', 'cs_personalize_b_1']
```
