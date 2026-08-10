---
title: "Social Embed Option Disappeared From JSON RTE"
description: "Social Embed Option Disappeared From JSON RTE"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/97-social-embed-option-disappeared-from-json-rte
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs89560591d92cd212
---

# Social Embed Option Disappeared From JSON RTE

The social embed button in the JSON RTE is no longer visible for certain content types. It was previously working.

**Root Cause**

The social embed option requires the Social Embed feature to be enabled at the field level. When a content type is restructured or duplicated, the social embed configuration may not carry over correctly.

**Resolution**

1.  Open the content type in the Content Type Builder and navigate to the affected JSON RTE field.
2.  Click the field to open its configuration, navigate to Advanced > Custom settings.
3.  Enable the Social Embed toggle.
4.  Save the content type and confirm the social embed option now appears in the JSON RTE toolbar.

After enabling the Social Embed toggle, verify the option appears in the JSON RTE for editors.
