---
title: "API Returns Null for activeVariantShortUid When Using Lytics Audiences"
description: "API Returns Null for activeVariantShortUid When Using Lytics Audiences"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/06-api-returns-null-for-activevariantshortuid-when-using-lytics-audiences
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs6b9c7ae8c58fbe30
---

# API Returns Null for activeVariantShortUid When Using Lytics Audiences

The Contentstack Personalize API returns null for activeVariantShortUid when Lytics-based audience conditions are in use. This blocks personalization testing and prevents variant evaluation from functioning correctly.

**Root Cause**

The null response is caused by missing audience slugs in the x-live-attributes request header. When Lytics audience conditions are used, the header must include the correct slug for each Lytics audience to allow the system to evaluate audience membership. Without valid slugs, audience conditions cannot be matched and the API returns null for the active variant.

**Resolution**

1.  Open browser developer tools or your API client and inspect the request header for the failing API call. Check whether x-live-attributes contains audience slugs for all Lytics-based audiences used in the experience.
2.  Navigate to the Lytics dashboard and retrieve the correct slug for each audience used in the experience configuration.
3.  Update your API request or cURL command to include the correct audience slugs in the x-live-attributes header.
4.  Retry the API call and confirm that activeVariantShortUid is now returned with a non-null value.

After passing the correct audience slugs in x-live-attributes, the API will correctly evaluate audience membership and return the active variant. If the issue persists after updating slugs, verify that the audience configuration in Lytics is active and that the slugs match exactly.
