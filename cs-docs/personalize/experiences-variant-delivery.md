---
title: "[Personalize] - Experiences & Variant Delivery"
description: "Resolve issues with missing personalized module variants, locked A/B test distributions, geolocation activation failures, and missing Lytics pop-ups."
url: "https://www.contentstack.com/docs/personalize/experiences-variant-delivery"
product: "Contentstack"
doc_type: "guide"
audience:
  - developers
  - admins
version: "current"
last_updated: "2026-04-09"
---

# [Personalize] - Experiences & Variant Delivery

## 1\. Personalized Module Variants Missing in Alternate Branches

### Summary

Personalized module variants may appear missing when switching from the main branch to an alternate branch. This behavior prevents testing personalized modules in non-main environments.

### Root Cause

This is a product limitation. Variant groups, variants, and entry variants are exclusively supported on the main branch and are not cloned when new branches are created.

### Resolution

1.  Configure all variant groups, variants, and entry variants exclusively on the main branch.
2.  Note that these elements will not be present when a new branch is created.
3.  Refer to the official documentation regarding entry variant limitations for further details on branch-specific support.

### Verification

Navigate to the main branch to verify variant visibility. If variants appear there but not in derived branches, the behavior is confirmed as expected.

* * *

## 2\. Locked Variant Distribution in Active A/B Split Tests

### Summary

Ending an A/B split test to promote a winning variant can be difficult because the variant distribution sliders remain locked, even if the test is paused.

### Root Cause

System locks on variant distribution are a deliberate safeguard once an experiment is live. This ensures test results remain statistically valid by preventing mid-test adjustments that would skew data.

### Resolution

1.  Recognize that distribution sliders are non-functional while a test is running or paused.
2.  Identify the winning variant based on current analytics.
3.  Create a new draft of the personalized experience to override the locked settings.
4.  Direct 100% of the traffic to the winning variant within the new draft to "promote" the winner.
5.  Manually copy the winning content into the main baseline entry if it is intended to replace the original version permanently.

### Verification

Publish the new draft with 100% traffic directed to the winner. If the winning content is consistently served to all users, the issue is resolved.

* * *

## 3\. Geolocation Variants Failing to Activate in Personalize

### Summary

Personalization variants based on "Geolocation - Country" conditions may fail to activate, resulting in a null status in personalization logs and the delivery of default content.

### Root Cause

This is typically caused by limitations in the third-party IP geolocation database. If a user's IP address cannot be correctly mapped to a specific country in the external database, the location trigger fails to resolve.

### Resolution

1.  Review personalization logs to confirm if geolocation variants return a null status while other variants activate correctly.
2.  Use a VPN during testing to provide a verified IP address associated with the target country.
3.  Test on a mobile device, as mobile networks often provide more consistent geolocation data.
4.  Perform manual testing via GraphQL by explicitly passing the regional condition (e.g., country: "US") in the query to bypass automatic resolution.

### Verification

Check personalization logs after using a VPN or hardcoded GraphQL parameter. If the variant status changes from null to active (e.g., 3\_1), the configuration is correct, and the failure is confirmed as a database-resolution issue.

* * *

## 4\. Lytics Experience Pop-up Failing to Appear on Live Pages

### Summary

A Lytics Experience (such as a notification or pop-up) may be visible in the preview environment but fail to appear on live pages, often accompanied by a "Bad Request" error.

### Root Cause

The request sent to the personalization edge API is missing the PROJECT\_UID header. Without the x-cs-personalize-project-uid header during a PATCH request to the /user-attributes endpoint, the system returns an error and blocks the experience.

### Resolution

1.  Open browser developer tools and inspect the **Network** tab for failed requests to personalize-edge.contentstack.com.
2.  Look for the error message: personalize.USER\_ATTRIBUTES.PROJECT\_UID\_HEADER\_NOT\_SET.
3.  Update the implementation to ensure the required Project UID is included in all personalization-related request headers.
4.  Verify the experience is correctly activated in the Lytics dashboard and targeted to the correct URL.

### Verification

Navigate to the target live page after ensuring the Project UID header is correctly set. If the intended pop-up appears as expected, the issue is resolved.