---
title: "Analytics Dashboard TB to Byte Conversion Discrepancy"
description: "Analytics Dashboard TB to Byte Conversion Discrepancy"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/55-analytics-dashboard-tb-to-byte-conversion-discrepancy
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cse9781e8faf98a870
---

# Analytics Dashboard TB to Byte Conversion Discrepancy

The Analytics Dashboard terabyte values do not match when users manually convert the exported byte values using the binary standard (1 TiB = 1,099,511,627,776 bytes).

**Root Cause**

Contentstack Analytics uses the decimal (SI) standard: 1 TB = 1,000,000,000,000 bytes. The binary standard (1 TiB = 1,099,511,627,776 bytes) produces an apparent discrepancy of approximately 9.95%.

**Resolution**

No action required - the values are correct. Use decimal conversion when comparing Contentstack Analytics figures:

-   1 TB = 1,000 GB = 1,000,000,000,000 bytes (decimal / SI standard)
-   1 TiB = 1,024 GiB = 1,099,511,627,776 bytes (binary / IEC standard)

Contentstack uses decimal (SI) units. Exported byte values divided by 1,000,000,000,000 will match the terabyte values shown in the dashboard.
