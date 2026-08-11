---
title: "Understanding Audit Log Retention and Custom Date Range Limits"
description: "Understanding Audit Log Retention and Custom Date Range Limits"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/02-git-repository-integrations/06-understanding-audit-log-retention-and-custom-date-range-limits
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: csb3f413bf42599254
---

# Understanding Audit Log Retention and Custom Date Range Limits

A team needs clarity on how far back Audit Log entries can be retrieved within a Contentstack stack, in order to plan compliance or historical review activities.

**Root Cause**

This is a clarification of existing platform behavior rather than a defect. The default date range filters available in the Audit Log UI are limited to 1, 7, 15, and 30 days, but the Custom Date Range option does not enforce a strict limit, allowing retrieval of older logs where available.

**Resolution**

1.  Navigate to the Audit Log section under Settings within your Contentstack stack.
2.  Use the default date range filters (1, 7, 15, or 30 days) for standard recent-activity review.
3.  For older records, select the Custom Date Range option and specify the desired start and end dates, noting that older logs can be retrieved if still available in the system.
4.  Refer to the official Contentstack documentation on Audit Log retention for any updates to retention policy specifics relevant to your plan.

The issue is resolved once the team has clarity on the available date range options and can successfully retrieve the historical Audit Log data needed for their use case.
