---
title: "How is Multi-Armed Bandit different from a standard A/B test?"
description: "How is Multi-Armed Bandit different from a standard A/B test?"
url: /personalize/support-troubleshooting/personalize-faqs/01-personalize-faqs/17-how-is-multi-armed-bandit-different-from-a-standard-a-b-test
doc_type: faq
_cms_section_uid: cscb528d10f8112334
_cms_faq_uid: cs0ba07af69c239c68
---

# How is Multi-Armed Bandit different from a standard A/B test?

In a standard A/B test, traffic distribution remains fixed, either equally split or custom, until the test ends. With Multi-Armed Bandit:

-   All variants start with equal traffic.
-   Traffic is continuously optimized toward better-performing variants.
-   Underperforming variants are gradually shown less often, but are not fully excluded.
