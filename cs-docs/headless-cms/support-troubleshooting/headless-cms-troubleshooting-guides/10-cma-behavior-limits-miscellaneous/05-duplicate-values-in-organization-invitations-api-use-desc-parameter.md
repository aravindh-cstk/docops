---
title: "Duplicate Values in Organization Invitations API: Use desc Parameter"
description: "Duplicate Values in Organization Invitations API: Use desc Parameter"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/05-duplicate-values-in-organization-invitations-api-use-desc-parameter
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs513483e2c2de5cf5
---

# Duplicate Values in Organization Invitations API: Use desc Parameter

The Organization Invitations API returns duplicate entries in the response, making it difficult to get an accurate and clean list of pending invitations.

**Root Cause**

Without the desc parameter, the API may return results in an ordering that produces duplicate entries in the paginated response due to a shifting dataset during pagination (skip-limit overlap). Adding the desc parameter stabilizes the sort order and prevents duplicates from appearing across pages.

**Resolution**

1.  Add the desc parameter to the Organization Invitations API request: GET /v3/organizations/{org\_uid}/invitations?desc=created\_at
2.  The desc parameter sorts results in descending order by creation date, which prevents duplicate entries from appearing across paginated responses.
3.  Re-run the request and confirm the invitation list no longer contains duplicate entries.

After adding the desc parameter, verify the response contains unique invitation entries with no duplicates.
