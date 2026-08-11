---
title: "Diagnosing 413 Payload Too Large Errors Caused by Cloud Provider Header Limits"
description: "Diagnosing 413 Payload Too Large Errors Caused by Cloud Provider Header Limits"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/06-performance-network-security-errors/11-diagnosing-413-payload-too-large-errors-caused-by-cloud-provider-header-limits
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: cs1246dcc3398081d3
---

# Diagnosing 413 Payload Too Large Errors Caused by Cloud Provider Header Limits

A Launch-hosted application returns a 413 Payload Too Large error (sometimes shown as CF1001) when handling certain requests, particularly those carrying a large number of cookies or custom headers.

**Root Cause**

The 413 error is caused by request and header size limits enforced at the underlying cloud provider infrastructure level. These limits cannot be increased from the Contentstack side, as they are set by the infrastructure provider rather than by the Launch application layer.

**Resolution**

1.  Identify which requests are triggering the 413 error and inspect their total header size, with particular attention to cookies and any custom headers being set.
2.  Reduce the overall size of cookies sent with requests - for example, by trimming unnecessary cookie data, consolidating multiple cookies, or moving large values to server-side session storage instead of client-side cookies.
3.  Review any custom headers added by the application or intermediary services and remove or shorten any that are not strictly necessary.
4.  Retest the previously failing requests after reducing header size to confirm the 413 error no longer occurs.

The issue is resolved when requests complete successfully without triggering the 413 Payload Too Large error, having reduced the overall request header size below the cloud provider’s limit.
