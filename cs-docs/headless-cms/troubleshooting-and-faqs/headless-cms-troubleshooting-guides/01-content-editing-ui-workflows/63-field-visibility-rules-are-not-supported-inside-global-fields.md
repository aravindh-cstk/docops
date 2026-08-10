---
title: "Field Visibility Rules Are Not Supported Inside Global Fields"
description: "Field Visibility Rules Are Not Supported Inside Global Fields"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/63-field-visibility-rules-are-not-supported-inside-global-fields
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4cde9c7dd56533fd
---

# Field Visibility Rules Are Not Supported Inside Global Fields

A customer wants to conditionally show or hide fields within a Global Field based on a dropdown selection inside the same Global Field. Field visibility rules cannot be applied within Global Field structures.

**Root Cause**

Field Visibility Rules are not supported within Global Fields. The FVR engine applies at the content type level, not within the reusable Global Field structure. This is a current platform limitation.

**Resolution**

1.  Expose all fields without visibility rules and use field labels or help text to guide editors on which fields to populate per scenario.
2.  Replace the Global Field with a dedicated content type containing the conditional fields. Content types support FVR fully, allowing conditional display based on selections within the same entry.

After implementing the workaround, confirm editors can identify which fields to use in each scenario through guidance text or through FVR applied at content type level.
