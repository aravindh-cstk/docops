---
title: "What happens if I delete an environment that already has published content?"
description: "What happens if I delete an environment that already has published content?"
url: /headless-cms/support-troubleshooting/headless-cms-faqs/15-environments-faqs/06-what-happens-if-i-delete-an-environment-that-already-has-published-content
doc_type: faq
_cms_section_uid: cs4c3d8d1aab495506
_cms_faq_uid: cs131b326e6ad8c041
---

# What happens if I delete an environment that already has published content?

If you [delete an environment](/docs/headless-cms/delete-an-environment) with published content, the associated [entries](/docs/headless-cms/about-entries) and [assets](/docs/headless-cms/about-assets) remain in Contentstack but become inaccessible via that environment.

[Delivery tokens](/docs/headless-cms/about-delivery-tokens) linked to the deleted environment are invalidated, preventing content retrieval through APIs.

**Warning:** This action is permanent, and you cannot restore a deleted environment.
