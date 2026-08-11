---
title: "Analyzing Cache Miss Reports and 429 Rate-Limit Errors at the CDN Layer"
description: "Analyzing Cache Miss Reports and 429 Rate-Limit Errors at the CDN Layer"
url: /launch/troubleshooting-and-faqs/launch-troubleshooting-guides/02-git-repository-integrations/05-analyzing-cache-miss-reports-and-429-rate-limit-errors-at-the-cdn-layer
doc_type: faq
_cms_section_uid: cs7538cd1d93165903
_cms_faq_uid: csecb5da954b98dc29
---

# Analyzing Cache Miss Reports and 429 Rate-Limit Errors at the CDN Layer

A team requests a detailed analysis of cache misses on their Launch-hosted site, specifically to identify which URLs are contributing most to 429 (rate-limit) errors observed at the origin.

**Root Cause**

A high proportion of origin requests resulting in 429 responses typically indicates that a large share of traffic is bypassing the CDN cache and hitting rate-limited origin endpoints directly, often due to specific URL patterns, query parameters, or user agents that prevent effective caching.

**Resolution**

1.  Request a cache-miss and request-volume analysis from Contentstack Support, specifying the time window and the metric of interest (e.g., top URLs contributing to 429 responses).
2.  Review the resulting report, paying attention to whether the breakdown should be analyzed from the page/URL perspective rather than purely the API endpoint perspective, depending on what is actionable for your team.
3.  Identify the specific URL patterns or page types most responsible for cache misses and 429 errors.
4.  Implement caching improvements for the identified URL patterns, for example, by removing cache-busting query parameters, adjusting cache-control headers, or restructuring URLs to be more cache-friendly.
5.  Request a follow-up report after implementing changes to confirm a reduction in cache misses and 429 errors for the affected URLs.

The issue is resolved when the proportion of requests resulting in cache misses and 429 errors is significantly reduced for the identified high-impact URLs.
