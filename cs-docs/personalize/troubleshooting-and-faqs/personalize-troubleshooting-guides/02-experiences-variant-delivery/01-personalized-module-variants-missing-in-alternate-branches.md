---
title: "Personalized Module Variants Missing in Alternate Branches"
description: "Personalized Module Variants Missing in Alternate Branches"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/02-experiences-variant-delivery/01-personalized-module-variants-missing-in-alternate-branches
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs3771b47f3be5f39d
---

# Personalized Module Variants Missing in Alternate Branches

Personalized module variants may appear missing when switching from the main branch to an alternate branch. This behavior prevents testing personalized modules in non-main environments.

**Root Cause**

This is a product limitation. Variant groups, variants, and entry variants are exclusively supported on the main branch and are not cloned when new branches are created.

**Resolution**

1.  Configure all variant groups, variants, and entry variants exclusively on the main branch.
2.  Note that these elements will not be present when a new branch is created.
3.  Refer to the official documentation regarding entry variant limitations for further details on branch-specific support.

Navigate to the main branch to verify variant visibility. If variants appear there but not in derived branches, the behavior is confirmed as expected.
