---
title: "Understanding Cache Revalidation Rate Limit Windows and Automation Thresholds"
description: "Understanding Cache Revalidation Rate Limit Windows and Automation Thresholds"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/11-caching-cdn-content-delivery/07-understanding-cache-revalidation-rate-limit-windows-and-automation-thresholds
doc_type: faq
_cms_section_uid: cs7d38c3adf52c6b66
_cms_faq_uid: cs87e0dbfd86df3966
---

# Understanding Cache Revalidation Rate Limit Windows and Automation Thresholds

Teams using the Launch cache revalidation feature need clarity on how the rate limit “day” is defined (a fixed UTC day versus a rolling window), when the limit resets, and what the actual soft and hard automation thresholds are for their organization, especially when documentation or prior guidance appears inconsistent with observed behavior.

**Root Cause**

The cache revalidation rate limit uses a rolling 24-hour window rather than a fixed calendar day, each revalidation call counts against the limit for 24 hours from the moment it was triggered, and the reset time depends on when those specific requests were made. Automation soft and hard limits are configured per organization and may differ from generic figures previously communicated.

**Resolution**

1.  Confirm with Contentstack Support the exact soft and hard automation limits configured for your specific organization, as these can vary and may not match generic documentation figures.
2.  Understand that the cache revalidation limit operates on a rolling 24-hour window: each call remains counted against the limit for 24 hours from when it was made, not from a fixed daily reset time.
3.  Use the in-product notifications available in the Launch UI, which surface alerts at 80% of the limit and when the limit is reached, including the specific timestamp when the rate limit will reset.
4.  Monitor your organization’s automation usage against the confirmed soft and hard limits to proactively avoid hitting the threshold.
5.  If a separate connector-related issue (such as missing error feedback when a rate limit is exceeded) is also observed, track it as a distinct case rather than conflating it with the rate-limit definition question.

The issue is resolved when the team has accurate, organization-specific figures for the rate limit thresholds and understands the rolling-window reset behavior, with in-product notifications relied upon for ongoing visibility.
