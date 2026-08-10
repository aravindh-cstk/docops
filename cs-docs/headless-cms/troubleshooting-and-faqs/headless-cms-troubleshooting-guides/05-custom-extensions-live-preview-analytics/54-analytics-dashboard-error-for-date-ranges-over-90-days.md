---
title: "Analytics Dashboard Error for Date Ranges Over 90 Days"
description: "Analytics Dashboard Error for Date Ranges Over 90 Days"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/54-analytics-dashboard-error-for-date-ranges-over-90-days
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs78b6835ad7f89e70
---

# Analytics Dashboard Error for Date Ranges Over 90 Days

The Analytics Dashboard returns an error when a date range exceeding two months is selected.

**Root Cause**

The Analytics Dashboard has a 90-day maximum limit for a single date range query. When the selected range exceeds 90 days, the underlying query fails and the dashboard component throws an error. This is a platform constraint, not a bug.

**Resolution**

1.  Select date ranges of 90 days or less in the Analytics Dashboard.
2.  To analyze a period longer than 90 days, split into multiple 90-day queries and combine the data manually or via the Analytics API.

After adjusting the date range to 90 days or less, confirm the Analytics Dashboard loads data correctly.
