---
title: "When does traffic redistribution start in Multi-Armed Bandit A/B tests?"
description: "When does traffic redistribution start in Multi-Armed Bandit A/B tests?"
url: /personalize/troubleshooting-and-faqs/personalize-faqs/01-personalize-faqs/18-when-does-traffic-redistribution-start-in-multi-armed-bandit-a-b-tests
doc_type: faq
_cms_section_uid: cscb528d10f8112334
_cms_faq_uid: cs696c6253aa0145e7
---

# When does traffic redistribution start in Multi-Armed Bandit A/B tests?

Traffic redistribution begins only after the experience reaches either of the following thresholds across all variants:

-   At least **1,000 total impressions**, or
-   At least **30 total conversions.**

Until one of these thresholds is met, all variants continue to receive equal traffic. Once redistribution begins, Personalize continuously optimizes traffic allocation based on real-time performance.

To ensure ongoing learning, every Multi-Armed Bandit test reserves a minimum exploratory **traffic share of 1%**, which is split equally across all variants. This guarantees that each variant continues to receive a small amount of traffic, even if it is underperforming.
