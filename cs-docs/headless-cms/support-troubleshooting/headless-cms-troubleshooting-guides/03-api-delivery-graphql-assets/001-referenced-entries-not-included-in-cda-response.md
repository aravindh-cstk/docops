---
title: "Referenced Entries Not Included in CDA Response"
description: "Referenced Entries Not Included in CDA Response"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/001-referenced-entries-not-included-in-cda-response
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs7f9106135d7068a0
---

# Referenced Entries Not Included in CDA Response

Referenced entry fields or names do not appear in the Content Delivery API (CDA) response when fetching entries.

**Root Cause**

The Delivery API does not automatically expand reference fields. Referenced entries must be explicitly included using the appropriate inclusion parameters.

Common causes include:

-   Missing include\[\] parameter in REST (CDA) requests
-   Missing nested reference selection in GraphQL queries
-   Referenced entries not published in the requested environment
-   Locale mismatch between the parent and referenced entry

If inclusion is not configured correctly, only the reference UID is returned.

**Resolution**

For REST (CDA):

-   Use the include\[\] parameter to expand referenced fields.
-   Specify include\_depth if nested references are required.

For GraphQL:

-   Explicitly query nested reference fields in the selection set.

Additionally:

-   Confirm referenced entries are published.
-   Verify environment and locale alignment.

Re-run the request with proper inclusion parameters and confirm that referenced entry fields are expanded in the API response.
