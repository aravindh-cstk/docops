---
title: "Resolving Unsupported Protocol Errors Caused by Dots in Subdomains"
description: "Resolving Unsupported Protocol Errors Caused by Dots in Subdomains"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/13-apex-domains-go-live/03-resolving-unsupported-protocol-errors-caused-by-dots-in-subdomains
doc_type: faq
_cms_section_uid: cs700e25dad612ade1
_cms_faq_uid: cs37b0c0be1f48ca89
---

# Resolving Unsupported Protocol Errors Caused by Dots in Subdomains

A Launch-hosted domain returns an unsupported protocol error or fails to provision correctly when the subdomain contains a dot character (e.g., v2.staging.example.com as a single label).

**Root Cause**

Dots within a subdomain label (as opposed to dots separating subdomain levels) are not supported in Launch’s domain registration system. The platform interprets additional dots as subdomain level separators, which can cause routing, SSL provisioning, or validation errors.

**Resolution**

1.  Replace any dots within a subdomain label with hyphens. For example, change v2.staging to v2-staging.
2.  Update the domain in the Launch UI to use the hyphen-formatted subdomain.
3.  Update the corresponding DNS CNAME record at your DNS provider to use the new subdomain format.
4.  Verify that SSL provisioning completes and the domain resolves correctly after the change.

The issue is resolved when the updated subdomain (using hyphens instead of dots) is accessible over HTTPS without protocol or routing errors.
