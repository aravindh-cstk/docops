---
title: "Understanding Bandwidth and API Usage Metrics"
description: "Understanding Bandwidth and API Usage Metrics"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/10-cma-behavior-limits-miscellaneous/04-understanding-bandwidth-and-api-usage-metrics
doc_type: faq
_cms_section_uid: cs25565de666e3d5c9
_cms_faq_uid: cs7868c04d31916a70
---

# Understanding Bandwidth and API Usage Metrics

There is confusion about how Subscription Usage bandwidth is calculated, what time period it covers, and whether the Top URLs counter reflects all-time data or the selected date range.

**Root Cause**

Contentstack Analytics metrics follow specific calculation and refresh rules that are not always clearly communicated:

-   Subscription Usage bandwidth: a rolling 30-day metric that updates once per day, not in real time.
-   Top URLs counter: applies only to the selected date range filter in the Analytics dashboard, not all-time data.
-   No direct API exists to query highest-bandwidth entries specifically, but the Analytics API provides URL-level data that can be filtered for this purpose.

**Resolution**

1.  Use the Analytics API to retrieve URL-level request data: the response can be analyzed to identify which asset or entry URLs are generating the most bandwidth.
2.  When reviewing Subscription Usage, allow up to 24 hours for the metric to reflect the latest data.
3.  When filtering Top URLs, ensure the date range is set to the desired analysis period: the counter resets with each filter change.

After adjusting expectations for the 24-hour refresh cycle and using the correct date range in the Analytics dashboard, confirm that the bandwidth and URL data align with the expected consumption patterns.
