---
title: "Nested Global Fields Inside Modular Blocks - Feature Flag Required"
description: "Nested Global Fields Inside Modular Blocks - Feature Flag Required"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/93-nested-global-fields-inside-modular-blocks-feature-flag-required
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs043b896d5f196e98
---

# Nested Global Fields Inside Modular Blocks - Feature Flag Required

A customer wants to use a Global Field inside an existing block of a Modular Block. This option is not available in the UI.

**Root Cause**

Nesting Global Fields inside individual blocks of a Modular Block is an Early Access feature not enabled by default for all organizations.

**Resolution**

1.  Contact Contentstack Support and request enablement of the Nested Global Field feature, providing the Organization ID.
2.  After enablement, navigate to the Modular Block schema in the Content Type Builder and confirm the option to add a Global Field inside an existing block is now available.

After the feature is enabled, add a Global Field to a Modular Block block definition and verify it renders correctly in entry instances.
