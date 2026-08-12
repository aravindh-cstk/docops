---
title: "Management Token Will Not Be Deprecated - Clarification on Preview Token"
description: "Management Token Will Not Be Deprecated - Clarification on Preview Token"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/05-management-token-will-not-be-deprecated-clarification-on-preview-token
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: csb7b90ef6f3d9be0a
---

# Management Token Will Not Be Deprecated - Clarification on Preview Token

There is concern that the management token will be deprecated and replaced by the Preview token. Teams building automations on the CMA want assurance about its continued availability.

**CLARIFICATION**

The management token is not being deprecated. The Contentstack UI itself relies on the CMA for most of its operations. The Preview token is a separate credential introduced specifically to support Live Preview and Visual Builder features — it is not a replacement for the management token.

For clarity:

-   The management token does not expire unless an explicit expiry date is set at creation.
-   The Preview token is used only for Live Preview and Visual Builder integrations.
-   Automations, migrations, and integrations built on the CMA can continue operating without changes.

Teams can continue building on the CMA with confidence. Any future deprecation notices will be communicated in advance through official Contentstack channels.
