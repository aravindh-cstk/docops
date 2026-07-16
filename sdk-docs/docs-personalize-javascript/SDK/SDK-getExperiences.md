---
title: "getExperiences"
description: "The `getExperiences()` method retrieves a list of experiences, each linked to its active variant's short UID. For inactive experiences, `activeVariantShortUid` will return `null` . The list is sorted by experience priority in decreasing order."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-sdk-getexperiences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-06-26"
---

## getExperiences

The `getExperiences()` method retrieves a list of experiences, each linked to its active variant's short UID. For inactive experiences, `activeVariantShortUid` will return `null`. The list is sorted by [experience priority](/docs/developers/apis/personalize-management-api#experiences-priority) in decreasing order.

No parameters.

Returns:
Type
ManifestExperience

**Example:**

```
personalizeSdk.getExperiences(); // [{shortUid: 'a', activeVariantShortUid: '0'}]
```
