---
title: "getExperiences"
description: "The getExperiences() method retrieves a list of experiences, each linked to its active variant's short UID. For inactive experiences, activeVariantShortUid will return null . The list is sorted by experience priority in decreasing order. Warning: The use of getExperiences() as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the getExperiences() method within the SDK instance. For more details, refer to getExperiences() with an SDK Instance."
url: "https://www.contentstack.com/javascript-personalize-edge-sdk-personalize-class-getexperiences"
product: "Contentstack"
doc_type: "method_details"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-07-02"
---

## getExperiences

The `getExperiences()` method retrieves a list of experiences, each linked to its active variant's short UID. For inactive experiences, `activeVariantShortUid` will return `null`. The list is sorted by [experience priority](/docs/developers/apis/personalize-management-api#experiences-priority) in decreasing order.

Warning:

The use of
getExperiences()

as a global function in the global Personalize namespace is deprecated. To ensure compatibility and future support, initialize the SDK and use the
getExperiences()

method within the SDK instance.
For more details, refer to
getExperiences()

with an SDK Instance.

No parameters.

Returns:
Type
ManifestExperience

**Example:**

```
Personalize.getExperiences(); // [{shortUid: 'a', activeVariantShortUid: '0'}]
```
