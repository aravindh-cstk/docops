---
title: "Allowlisting Vendor IPs for Programmatic Access to Launch-Hosted Assets"
description: "Allowlisting Vendor IPs for Programmatic Access to Launch-Hosted Assets"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/06-performance-network-security-errors/08-allowlisting-vendor-ips-for-programmatic-access-to-launch-hosted-assets
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: csbf1746e87ae4c43f
---

# Allowlisting Vendor IPs for Programmatic Access to Launch-Hosted Assets

A third-party vendor receives HTTP 403 errors when programmatically accessing Launch-hosted public assets (such as PDF files). The vendor believes their outbound IP addresses need to be allowlisted in order to access the site.

**Root Cause**

Launch sits behind a CDN layer (such as Cloudflare) that can apply traffic filtering rules. When a third-party vendor’s requests originate from IP addresses not recognized by an existing allowlist or filtering rule, the CDN can return a 403 error even though the underlying content is intended to be publicly accessible.

**Resolution**

1.  Collect the exact outbound IP addresses used by the third-party vendor for their programmatic requests, including any new IPs introduced by infrastructure changes on their side.
2.  Identify the specific URLs being accessed and confirm whether they are intended to be publicly accessible without authentication.
3.  Submit the IP addresses to Contentstack Support or your internal CDN/WAF administrator to be added to the allowlist for the relevant Launch domain.
4.  After the allowlist update, have the vendor retest programmatic access to confirm the 403 errors are resolved.
5.  If issues persist after the initial allowlist update, provide additional request details (such as User-Agent string and CDN ray IDs) to help narrow down any remaining filtering rules affecting the vendor’s traffic.

The issue is resolved when the third-party vendor can programmatically access the intended Launch-hosted URLs without encountering 403 errors.
