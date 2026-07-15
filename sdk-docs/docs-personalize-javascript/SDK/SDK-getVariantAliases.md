---
title: "getVariantAliases"
description: "The `getVariantAliases()` method retrieves a list of active experiences represented as variant aliases. These aliases are used by Personalize to identify CMS variants and can be passed to the CMS Delivery API to fetch personalized content entries. The list is ordered by priority, with higher-priority variants appearing earlier."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-getvariantaliases"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getVariantAliases

The `getVariantAliases()` method retrieves a list of active experiences represented as variant aliases. These aliases are used by Personalize to identify CMS variants and can be passed to the CMS Delivery API to fetch personalized content entries.

The list is ordered by priority, with higher-priority variants appearing earlier.

No parameters.

Returns:
Type
string[]

**Example:**

```
personalizeSdk.getVariantAliases(); // ['cs_personalize_a_0', 'cs_personalize_b_1']
```
