---
title: "Allowlisting the Default Launch Domain to Prevent DNS and Phishing Filter Blocks"
description: "Allowlisting the Default Launch Domain to Prevent DNS and Phishing Filter Blocks"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/06-performance-network-security-errors/09-allowlisting-the-default-launch-domain-to-prevent-dns-and-phishing-filter-blocks
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: csae013ab43460f7b1
---

# Allowlisting the Default Launch Domain to Prevent DNS and Phishing Filter Blocks

End users experience DNS blocking or phishing warnings when accessing a Launch-hosted application through a custom domain. The warnings appear to originate from corporate DNS or security filters rather than from the application itself.

**Root Cause**

The default Launch domain pattern (\*.contentstackapps.com) had been flagged by one or more third-party security engines, likely due to prior abuse of similarly structured domains on shared hosting platforms. This flag can propagate into corporate DNS or security filtering products, blocking legitimate traffic to any site using the default domain, including via a custom domain that resolves through it.

**Resolution**

1.  Confirm the application follows web security best practices: serve over HTTPS, avoid unnecessary redirects, and do not load untrusted third-party scripts that could itself trigger security flags.
2.  As a workaround, advise affected end users or their IT departments to allowlist the default Launch domain (\*.contentstackapps.com) in their corporate DNS or security filtering product.
3.  Where possible, ensure your production traffic is served primarily through your custom domain rather than the default Launch domain, to reduce dependency on the flagged domain pattern.
4.  If the issue persists at scale, report the specific flagged domain pattern to Contentstack Support so it can be raised with the relevant security vendor for reputation review.

The issue is resolved when end users can access the application through the custom domain without triggering DNS blocking or phishing warnings, either through allowlisting or domain reputation remediation.
