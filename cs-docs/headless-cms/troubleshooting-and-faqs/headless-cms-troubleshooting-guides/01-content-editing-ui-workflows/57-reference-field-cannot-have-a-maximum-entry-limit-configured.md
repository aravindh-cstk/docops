---
title: "Reference Field Cannot Have a Maximum Entry Limit Configured"
description: "Reference Field Cannot Have a Maximum Entry Limit Configured"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/57-reference-field-cannot-have-a-maximum-entry-limit-configured
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cse9b8b7e25ae4307e
---

# Reference Field Cannot Have a Maximum Entry Limit Configured

A customer tries to set a maximum entry limit on a Reference field to restrict how many entries editors can select. The option does not appear to be available for Reference fields, though documentation suggests it should be.

**Root Cause**

Setting a maximum value limit on Reference fields is a known limitation currently tracked internally (JIRA UE-4241). While this feature is available for other field types, it has not been implemented for Reference fields. The documentation reference is inaccurate.

**Resolution**

At this time, maximum entry limits cannot be configured for Reference fields. As a workaround:

1.  Use a Modular Block instead of a Reference field if maximum instances need to be enforced - Modular Blocks support minimum and maximum instance settings.
2.  Implement frontend validation to restrict the number of selected references if the UI constraint is not available.
3.  Contact Contentstack Support to register interest in this feature so it can be prioritized in future releases.
