---
title: "Personalize UI Saved Values Not Visible After Platform Update"
description: "Personalize UI Saved Values Not Visible After Platform Update"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/01-api-sdk-implementation/05-personalize-ui-saved-values-not-visible-after-platform-update
doc_type: faq
_cms_section_uid: cs770b42cb56e18e4b
_cms_faq_uid: cs2b8bc9df62dbcaf9
---

# Personalize UI Saved Values Not Visible After Platform Update

Saved personalization values may stop appearing in the Personalize UI even though the values are returned correctly when queried directly via the API. This discrepancy causes confusion about whether data has been saved successfully.

**Root Cause**

A security-related library upgrade that processes query parameters introduced a default limit on the number of query params that can be passed in a single request. Because the new limit was lower than the maximum number of rules allowed in an audience (100), requests with many rules were silently truncated, causing values to appear missing in the UI.

**Resolution**

1.  Verify the issue by querying the Personalize API directly. If values are returned via API but not displayed in the UI, the query param limit is the likely cause.
2.  Contact Contentstack Support and reference the query parameter processing library limit. Engineering must explicitly configure the limit to 100 to match the maximum audience rule count.
3.  Once the configuration is updated, reload the Personalize UI and confirm that all saved values are now visible.

After the fix is applied, values saved in the UI and retrieved via the API will be consistent. If the issue persists, check whether the number of audience rules exceeds 100, as this is the configured maximum.
