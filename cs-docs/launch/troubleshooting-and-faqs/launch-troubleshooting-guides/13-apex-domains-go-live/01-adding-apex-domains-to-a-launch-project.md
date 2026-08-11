---
title: "Adding Apex Domains to a Launch Project"
description: "Adding Apex Domains to a Launch Project"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/13-apex-domains-go-live/01-adding-apex-domains-to-a-launch-project
doc_type: faq
_cms_section_uid: cs700e25dad612ade1
_cms_faq_uid: csff87e790424402a8
---

# Adding Apex Domains to a Launch Project

An attempt to add an apex domain (e.g., example.com without the www prefix) to a Launch project through the UI fails or is not supported through the standard domain addition flow.

**Root Cause**

Apex domain configuration in Launch requires manual setup by the Launch team due to DNS constraints, apex domains cannot use CNAME records and instead require an A record pointing to a specific IP address provided by the platform. This configuration is not available through self-service in the Launch UI.

**Resolution**

1.  Contact Contentstack Support and request apex domain configuration, providing the domain name and the Launch project and environment UIDs.
2.  Support will engage the Launch team, who will provide the DNS A record (IP address) to which the apex domain should point.
3.  Update the DNS A record at your authoritative DNS provider to point the apex domain to the provided IP address (e.g., 151.101.66.137).
4.  The Launch team will complete the domain registration and SSL provisioning on their end.
5.  Verify the apex domain resolves correctly by accessing it in a browser and confirming that the SSL certificate is valid.

The issue is resolved when the apex domain resolves to the Launch application and the SSL certificate is provisioned and active.
