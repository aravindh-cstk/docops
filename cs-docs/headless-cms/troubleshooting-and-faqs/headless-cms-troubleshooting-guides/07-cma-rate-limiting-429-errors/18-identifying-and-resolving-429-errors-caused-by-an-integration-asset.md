---
title: "Identifying and Resolving 429 Errors Caused by an Integration Asset"
description: "Identifying and Resolving 429 Errors Caused by an Integration Asset"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/07-cma-rate-limiting-429-errors/18-identifying-and-resolving-429-errors-caused-by-an-integration-asset
doc_type: faq
_cms_section_uid: csab421043e7407787
_cms_faq_uid: cs6d2f6df5cccc8674
---

# Identifying and Resolving 429 Errors Caused by an Integration Asset

A sudden spike of 429 errors appears on the Images API or CDA during a specific time window. The errors are not caused by end-user traffic but originate from a backend integration or automated process.

**Root Cause**

An integration asset - such as a third-party connector, a scheduled script, or an automated build pipeline - is making an excessive number of API calls in a short window, exhausting the rate limit and causing 429 errors for all other traffic. The integration does not implement request throttling or back-off logic.

**Resolution**

1.  Review all active integrations, scheduled tasks, and automated pipelines that make CDA or Images API calls.
2.  Identify the specific integration responsible by correlating the 429 spike timestamp with integration execution logs.
3.  Add request throttling and exponential backoff to the identified integration to prevent it from bursting above the rate limit.
4.  Consider scheduling high-volume integration jobs during off-peak hours to reduce overlap with production traffic.
5.  Contact Contentstack Support and request logs for the affected time window to confirm the source of the traffic spike.

After adding throttling to the integration, monitor the API error rate during the next scheduled integration run. If 429 errors do not recur at the same volume, the integration is operating within the rate limit.
