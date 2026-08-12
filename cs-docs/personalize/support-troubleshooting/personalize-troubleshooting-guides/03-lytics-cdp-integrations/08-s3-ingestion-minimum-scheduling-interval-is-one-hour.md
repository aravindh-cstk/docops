---
title: "S3 Ingestion Minimum Scheduling Interval Is One Hour"
description: "S3 Ingestion Minimum Scheduling Interval Is One Hour"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/03-lytics-cdp-integrations/08-s3-ingestion-minimum-scheduling-interval-is-one-hour
doc_type: faq
_cms_section_uid: cs5e5eda65652298fc
_cms_faq_uid: cs73532b8ce48ce934
---

# S3 Ingestion Minimum Scheduling Interval Is One Hour

Organizations using S3 ingestion to synchronize profile data into Contentstack Personalize (via Lytics) require near-real-time data freshness but are limited to a minimum scheduling interval of one hour. Shorter intervals of 15 or 30 minutes are not currently available through the standard configuration.

**Root Cause**

The minimum supported scheduling interval for S3 ingestion in Lytics is one hour. Sub-hourly scheduling is not currently a supported configuration option for this ingestion method.

**Resolution**

1.  If hourly ingestion is insufficient for your use case, contact Contentstack Support and raise a request to explore sub-hourly S3 ingestion options. This request will be escalated to the Lytics team for assessment.
2.  As an interim approach, consider aggregating profile updates into a single hourly batch to maximize the relevance of each ingestion run.
3.  Evaluate whether the Lytics Attribute API or Cloud Connect can be used to push attribute updates on a more frequent or event-driven basis, bypassing the S3 scheduling constraint for time-sensitive data.
4.  For near-real-time attribute updates tied to specific user events, use the Personalize Edge API (PATCH /user-attributes) to push individual attribute changes as they occur, rather than relying on scheduled batch ingestion.

Sub-hourly S3 scheduling is a platform enhancement under consideration. Check with Contentstack Support for the current status of this capability.
