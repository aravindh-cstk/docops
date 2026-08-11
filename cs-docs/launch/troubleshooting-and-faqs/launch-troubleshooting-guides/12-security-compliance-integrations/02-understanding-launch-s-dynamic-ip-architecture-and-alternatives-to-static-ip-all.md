---
title: "Understanding Launch’s Dynamic IP Architecture and Alternatives to Static IP Allowlisting"
description: "Understanding Launch’s Dynamic IP Architecture and Alternatives to Static IP Allowlisting"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/12-security-compliance-integrations/02-understanding-launch-s-dynamic-ip-architecture-and-alternatives-to-static-ip-all
doc_type: faq
_cms_section_uid: cs1f3cd549d8c00204
_cms_faq_uid: cs7c1fa4de2b926daf
---

# Understanding Launch’s Dynamic IP Architecture and Alternatives to Static IP Allowlisting

An organization needs to allowlist the IP addresses used by Contentstack Launch in their Cloudflare WAF or other network perimeter tools to ensure uninterrupted communication. The organization requests a static list of IPs from Contentstack Support.

**Root Cause**

Contentstack Launch does not maintain static or fixed IP addresses. The platform uses a dynamically scaling cloud infrastructure where IP addresses are assigned and released automatically. There is no fixed IP list that can be provided for allowlisting purposes, as the IPs change as the infrastructure scales.

**Resolution**

1.  Do not attempt to allowlist by IP address for Launch traffic, as the dynamic nature of the infrastructure means any list will become outdated quickly.
2.  Use identity-based security controls instead, such as API key validation, OAuth token verification, or request signing—to authenticate communication between your infrastructure and Launch.
3.  If your WAF requires source IP allowlisting and Launch is the origin, configure the WAF rule to allow traffic based on the hostname or domain rather than IP address.
4.  For Log Targets specifically, note that Launch Log Targets also use dynamic source IPs, configure the destination log system to accept connections from any IP and rely on authentication credentials (such as API keys or OTEL tokens) for security.

The issue is resolved when the network configuration uses identity-based controls rather than IP allowlisting, and communication between Launch and external systems is uninterrupted.
