---
title: "Management API: Variant Updates Require the Versions Endpoint"
description: "Management API: Variant Updates Require the Versions Endpoint"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/01-api-sdk-implementation/09-management-api-variant-updates-require-the-versions-endpoint
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: csa108ff2b8571becf
---

# Management API: Variant Updates Require the Versions Endpoint

Attempting to update variant fields via the /experiences/{experience\_uid} endpoint in the Personalize Management API results in validation errors or the changes not being applied. This prevents programmatic management of variant content.

**Root Cause**

The /experiences/{experience\_uid} endpoint only supports updating experience-level fields. It does not support updating variant-specific fields. A separate versions endpoint must be used for variant updates.

**Resolution**

1.  Review your API request and confirm whether the fields being updated are experience-level or variant-level. Experience name, status, and configuration belong to the experiences endpoint; variant content and rules belong to the versions endpoint.
2.  Update your API calls to target the correct versions endpoint for any variant field updates.
3.  If your implementation uses Lytics audiences in the variant configuration, pass external Lytics audience IDs using the lyticsAudiences field rather than the audiences field to ensure correct resolution.
4.  Test the updated API call and confirm the variant fields are saved and returned correctly.

After switching to the versions endpoint and using the correct field names, variant updates will be applied successfully.
