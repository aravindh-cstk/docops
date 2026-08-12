---
title: "Investigating SSR Response Time Differences Between Launch and Other Hosting Providers"
description: "Investigating SSR Response Time Differences Between Launch and Other Hosting Providers"
url: /launch/support-troubleshooting/launch-troubleshooting-guides/15-application-performance-resource-management/03-investigating-ssr-response-time-differences-between-launch-and-other-hosting-providers
doc_type: faq
_cms_section_uid: cs952c8e2acdedb37b
_cms_faq_uid: cs42a9463a17254dc0
---

# Investigating SSR Response Time Differences Between Launch and Other Hosting Providers

A team comparing server-side rendering (SSR) performance between Contentstack Launch and another hosting provider (such as Vercel) observes page component resolution times exceeding 2 seconds on Launch for the same codebase, which cannot be replicated on the comparison platform.

**Root Cause**

Comparative load testing using simulated traffic confirmed the latency difference was an expected result of geographic hosting variation. If the comparison platform’s instance is hosted in a region geographically closer to the test traffic than the Launch deployment region, the additional network distance accounts for the millisecond-level differences observed.

**Resolution**

1.  Confirm the hosting region for both the Launch deployment and the comparison platform deployment.
2.  Run comparative load tests using a tool such as k6, simulating traffic from a location consistent with your actual user base, rather than relying on anecdotal browser testing alone.
3.  If a significant regional latency gap is identified, evaluate whether Launch supports deployment in a region closer to your primary user base, and request a region change through Contentstack Support if needed.
4.  Re-run the comparative load test after any regional adjustment to confirm response times have improved.

The issue is resolved when the observed latency difference is understood to be a function of geographic hosting distance, and (if applicable) the deployment region is adjusted to better match the target user base.
