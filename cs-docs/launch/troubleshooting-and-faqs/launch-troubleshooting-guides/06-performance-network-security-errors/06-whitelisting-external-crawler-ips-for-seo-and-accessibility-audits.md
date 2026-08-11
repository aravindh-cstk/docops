---
title: "Whitelisting External Crawler IPs for SEO and Accessibility Audits"
description: "Whitelisting External Crawler IPs for SEO and Accessibility Audits"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/06-performance-network-security-errors/06-whitelisting-external-crawler-ips-for-seo-and-accessibility-audits
doc_type: faq
_cms_section_uid: cs686bcb12156f6b2e
_cms_faq_uid: cs00e8f0502b408588
---

# Whitelisting External Crawler IPs for SEO and Accessibility Audits

A website auditing tool is unable to crawl content hosted on Launch. This prevents the execution of pre-go-live scans used to ensure the site is properly indexed, optimized for SEO, and meets general accessibility standards.

**Root Cause**

Access restrictions are typically managed at the Content Delivery Network (CDN) layer (such as Cloudflare or CloudFront). Because the platform does not manage these perimeter security settings, external crawler IPs must be manually permitted at the CDN level.

**Resolution**

1.  Identify the specific IP address of the auditing tool's crawler.
2.  Access the configuration settings for the CDN or WAF used to manage the website's traffic.
3.  Add the crawler's IP address to the trusted whitelist or allowlist to permit the tool to bypass security restrictions.
4.  Once the configuration is updated, the auditing tool can proceed with the SEO and accessibility crawl.

The issue is resolved when the auditing tool successfully accesses the website pages and completes the scheduled scan without being blocked by security filters.
