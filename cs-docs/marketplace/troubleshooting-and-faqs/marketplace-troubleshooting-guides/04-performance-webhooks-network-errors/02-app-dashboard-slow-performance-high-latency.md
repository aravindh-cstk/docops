---
title: "App Dashboard Slow Performance (High Latency)"
description: "App Dashboard Slow Performance (High Latency)"
url: /marketplace/troubleshooting-and-faqs/marketplace-troubleshooting-guides/04-performance-webhooks-network-errors/02-app-dashboard-slow-performance-high-latency
doc_type: faq
_cms_section_uid: cs75f582f26c50a642
_cms_faq_uid: cs904a876e546b9f70
---

# App Dashboard Slow Performance (High Latency)

Marketplace apps take a long time (up to 3 minutes) to load their dashboards.

**Resolution**

1.  Check the size of the data being requested; minimize deep reference nesting in the app's initial fetch.
2.  Verify the status of the app's external hosting provider (e.g., AWS, Vercel).
3.  Implement caching on the app's backend to reduce frequent API calls.

The app dashboard loads in under 5 seconds on subsequent refreshes
