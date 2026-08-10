---
title: "CDN IP Reassignment After Certificate Renewal Causes Image Loading Failures"
description: "CDN IP Reassignment After Certificate Renewal Causes Image Loading Failures"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/065-cdn-ip-reassignment-after-certificate-renewal-causes-image-loading-failures
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: csf2430c5aaf26b36f
---

# CDN IP Reassignment After Certificate Renewal Causes Image Loading Failures

Images that were loading correctly begin failing after a period of time. Investigation reveals that CDN IP addresses changed during a certificate renewal or domain re-verification process, causing previously cached IP addresses or firewall rules to become stale.

**Root Cause**

CDN providers like Cloudflare and Fastly may reassign IP addresses to a domain during certificate renewal or domain re-verification processes. This is a CDN provider-level behavior that Contentstack cannot prevent. When IP addresses change, any firewall rules or client-side IP caches that had the old addresses will block or fail to connect to the new addresses.

**Resolution**

There is no guaranteed way to prevent CDN IP reassignment - this is a CDN provider behavior. Mitigation strategies:

1.  Do not whitelist CDN IP addresses by specific IP value. Instead, whitelist by domain name using DNS-based firewall rules, which automatically resolve to the current IPs.
2.  If IP-based whitelisting is required (for example, in legacy firewall configurations), establish a process to review and update CDN IP lists periodically and after any certificate renewal events.
3.  Subscribe to CDN provider status pages and IP change announcements to proactively update firewall rules before changes take effect.

After updating firewall rules to reflect the new CDN IPs, verify image loading is restored by testing affected asset URLs from the impacted network environment.
