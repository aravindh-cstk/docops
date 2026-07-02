---
title: "variantAlias"
description: "When you pass variantAlias , the SDK includes it in the request so the Delivery API returns data for the specified variant. A variant alias typically looks like cs_personalize_a_0 , where: cs_personalize is the prefix for Personalize-created variants. The remaining segments identify the experience and the activated variant. Example : useCompositionData( { compositionUid: \"home-page\", url: \"/home\" }, { variantAlias: \"cs_personalize_a_0\" } );"
url: "https://www.contentstack.com/react-studio-sdk-variantalias"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## variantAlias

When you pass `variantAlias`, the SDK includes it in the request so the Delivery API returns data for the specified variant.

A variant alias typically looks like `cs_personalize_a_0`, where:

- `cs_personalize` is the prefix for Personalize-created variants.
- The remaining segments identify the experience and the activated variant.

**Example**:

```
useCompositionData(
  { compositionUid: "home-page", url: "/home" },
  { variantAlias: "cs_personalize_a_0" }
);
```

No parameters.
