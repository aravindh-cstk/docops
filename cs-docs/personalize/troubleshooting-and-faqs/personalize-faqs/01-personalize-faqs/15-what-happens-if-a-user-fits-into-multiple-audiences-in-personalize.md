---
title: "What happens if a user fits into multiple audiences in Personalize?"
description: "What happens if a user fits into multiple audiences in Personalize?"
url: /personalize/troubleshooting-and-faqs/personalize-faqs/01-personalize-faqs/15-what-happens-if-a-user-fits-into-multiple-audiences-in-personalize
doc_type: faq
_cms_section_uid: cscb528d10f8112334
_cms_faq_uid: cs5dd8f25cdf312501
---

# What happens if a user fits into multiple audiences in Personalize?

When a user qualifies for more than one audience, content priority is determined by experience order and variant hierarchy.

**Within an experience:**

-   Variants are mutually exclusive, so only one variant is displayed.
-   The variant order determines which variant is selected if a user matches multiple variants.

**Across experiences:**

-   Experiences are prioritized based on their order in the Experiences list (via [Prioritize Experiences](/docs/personalize/prioritize-experiences)).
-   If multiple experiences apply, all variant fields are applied unless there’s a conflict.
-   When conflicts occur, the highest-priority experience (listed first) takes precedence. This design ensures users receive consistent and predictable content, even when they belong to multiple audiences.
