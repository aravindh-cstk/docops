---
title: "Resolving null User-Agent values in usage reporting"
description: "Resolving null User-Agent values in usage reporting"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/01-resolving-null-user-agent-values-in-usage-reporting
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs8ca275bce7b8bf82
---

# Resolving null User-Agent values in usage reporting

Usage metrics in the dashboard may display "null" for device or browser categories when processing API requests. This prevents accurate reporting and attribution of traffic to specific platforms or devices.

**Root Cause**

The calling client or integration script is not sending a User-Agent header in the HTTP request.

**Resolution**

1.  Review all direct HTTP integrations, custom scripts, or backend services making API calls.
2.  Ensure every request includes a valid and descriptive User-Agent header.
3.  Verify that asset-heavy flows are not bypassing header configurations.

After updating the scripts to include a User-Agent header, monitor the usage logs or dashboard. If the "null" values are replaced by the specified User-Agent strings, the reporting discrepancy is resolved.
