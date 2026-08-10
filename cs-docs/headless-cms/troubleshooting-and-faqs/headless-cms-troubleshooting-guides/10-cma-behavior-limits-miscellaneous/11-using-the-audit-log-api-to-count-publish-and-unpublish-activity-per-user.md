---
title: "Using the Audit Log API to Count Publish and Unpublish Activity Per User"
description: "Using the Audit Log API to Count Publish and Unpublish Activity Per User"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/11-using-the-audit-log-api-to-count-publish-and-unpublish-activity-per-user
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs49e63e9410190a3d
---

# Using the Audit Log API to Count Publish and Unpublish Activity Per User

An administrator needs a consolidated count of how many publish and unpublish actions were performed by each user within a specific date range. No built-in analytics view provides this breakdown.

**Root Cause**

Contentstack does not provide a pre-built analytics report for publish and unpublish counts per user. However, the Audit Log API records every content action including publish and unpublish events, with the associated user, timestamp, and action type. This data can be retrieved and aggregated to produce the required count.

**Resolution**

1.  Call the Audit Log API with a date range filter: GET /v3/audit-logs?from=<start\_date>&to=<end\_date>&limit=100, then paginate through all results using skip.
2.  Filter the response for entries where the action field is publish or unpublish.
3.  Group the filtered results by the user field to produce a per-user count.
4.  Export or process the aggregated data into a report format as required.

**Note:** The Audit Log API has a record limit per call. For large date ranges (for example, 11 months of activity), paginate through all results before aggregating. Contact Contentstack Support if the audit log history does not extend to the required start date.

After aggregating the filtered audit log data, verify the per-user publish and unpublish counts against known activity to confirm the results are accurate.
