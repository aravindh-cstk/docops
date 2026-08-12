---
title: "Variant \"Not in Plan\" When Using Non-Main Branch"
description: "Variant \"Not in Plan\" When Using Non-Main Branch"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/02-experiences-variant-delivery/12-variant-not-in-plan-when-using-non-main-branch
doc_type: faq
_cms_section_uid: cs4c52103b84f43f09
_cms_faq_uid: cs87073c6168177f5b
---

# Variant "Not in Plan" When Using Non-Main Branch

Variants appear inaccessible or show a "not in plan" message when a user is working in a non-main branch of a Contentstack stack. Personalization variant configurations that were created on the main branch do not appear in other branches.

**Root Cause**

Variant groups, variants, and entry variants are supported exclusively on the main branch and are not cloned when new branches are created. This is a product limitation, not a configuration error.

**Resolution**

1.  Switch to the main branch of your stack to access variant configurations.
2.  Confirm that all personalization setup — including variant groups, variants, and entry variants — is performed exclusively on the main branch.
3.  Do not attempt to recreate variant configurations on non-main branches, as this is not supported.
4.  For testing purposes, use the main branch with appropriate environment or release configurations.

After switching to the main branch, variant configurations will be accessible and personalization will function as expected.
