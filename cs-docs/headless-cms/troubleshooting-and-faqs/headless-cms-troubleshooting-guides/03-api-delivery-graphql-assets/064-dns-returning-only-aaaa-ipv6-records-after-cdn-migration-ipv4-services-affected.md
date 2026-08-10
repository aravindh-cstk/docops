---
title: "DNS Returning Only AAAA (IPv6) Records After CDN Migration - IPv4 Services Affected"
description: "DNS Returning Only AAAA (IPv6) Records After CDN Migration - IPv4 Services Affected"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/03-api-delivery-graphql-assets/064-dns-returning-only-aaaa-ipv6-records-after-cdn-migration-ipv4-services-affected
doc_type: faq
_cms_section_uid: csa8e77a421d40527f
_cms_faq_uid: cs0521b94d03839b7f
---

# DNS Returning Only AAAA (IPv6) Records After CDN Migration - IPv4 Services Affected

After a CDN migration, a custom domain that previously returned IPv4 (A) records in DNS lookups now returns only IPv6 (AAAA) records in some regions. Services that do not support IPv6 fail to connect.

**Root Cause**

During the CDN migration to Cloudflare, Cloudflare’s DNS resolution in certain regions may prioritize IPv6 over IPv4 or return only AAAA records. Services that exclusively use IPv4 stacks cannot connect to AAAA-only responses, causing connection failures in those regions.

**Resolution**

1.  Contact Contentstack Support and report the DNS behavior, specifying the affected domain, region, and that only AAAA records are being returned.
2.  The CDA and infrastructure team will work with the CDN provider to ensure both A and AAAA records are returned (dual-stack configuration).
3.  As an immediate mitigation for IPv4-only services, configure the service to prefer IPv4 resolution or implement a fallback DNS resolver that returns A records.

After the CDN DNS configuration is corrected to return dual-stack records, verify using DNS lookup tools from the affected region that both A and AAAA records are returned for the domain.
