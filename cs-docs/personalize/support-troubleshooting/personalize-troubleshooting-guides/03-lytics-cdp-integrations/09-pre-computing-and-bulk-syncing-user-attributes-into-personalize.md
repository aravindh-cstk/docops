---
title: "Pre-Computing and Bulk-Syncing User Attributes into Personalize"
description: "Pre-Computing and Bulk-Syncing User Attributes into Personalize"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/09-pre-computing-and-bulk-syncing-user-attributes-into-personalize
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs4541fd33b7f939eb
---

# Pre-Computing and Bulk-Syncing User Attributes into Personalize

Organizations that calculate user attributes offline or in batch (not in real-time) need to sync these pre-computed values into Contentstack Personalize before a user starts an active session. There is uncertainty about whether a batch API or server-side mechanism exists for this use case.

**Root Cause**

This is an architectural question rather than a bug. "Data in Contentstack Personalize" is stored and managed via Lytics. Syncing attributes to Lytics automatically makes them available to Personalize. Separately, the Personalize Edge API supports a request-time pattern for setting attributes per user session.

**Resolution**

1.  To pre-load user attributes before a session, sync the data directly into Lytics rather than using the Personalize Edge API. Data synced to Lytics is automatically available to Personalize.
2.  Use Lytics Cloud Connect or the Lytics Attribute API to perform bulk attribute imports. These tools support server-side and scheduled data pushes without requiring an active user session.
3.  If you are using the request-time pattern (PUT /user-attributes followed by GET /manifest), be aware that a race condition is theoretically possible. To mitigate this, ensure attributes are set before the manifest request is made, and treat the /user-attributes call as a prerequisite step in your request flow.
4.  Note that the Personalize Edge API is scheduled for deprecation in favor of a Lytics-first data model. Begin transitioning attribute management to Lytics to ensure long-term compatibility.

For bulk pre-computed attribute scenarios, Lytics Cloud Connect or the Attribute API is the recommended approach. Contact Contentstack Support for guidance on configuring the correct Lytics ingestion method for your data architecture.
