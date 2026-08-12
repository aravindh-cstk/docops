---
title: "Field Visibility Rules Not Working When Parent Field Has Multiple = true"
description: "Field Visibility Rules Not Working When Parent Field Has Multiple = true"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/61-field-visibility-rules-not-working-when-parent-field-has-multiple-true
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs31ee358367355ea0
---

# Field Visibility Rules Not Working When Parent Field Has Multiple = true

Field visibility rules work correctly when a Group or Global Field’s Multiple setting is false, but stop functioning when Multiple is set to true. Conditional field display does not apply regardless of rule configuration.

**Root Cause**

This is a known platform limitation. The FVR engine supports sub-field references within Group or Global Fields only when the parent field is not marked as Multiple. When Multiple = true, the engine cannot evaluate conditions across multiple instances, so rules do not apply.

**Resolution**

1.  Set Multiple to false on the parent field if the multiple-instance requirement can be relaxed.
2.  Alternatively, expose all sub-fields without conditional visibility and use clear field labels or help text to guide editors on which fields apply in each scenario.
3.  Submit an enhancement request through Contentstack Support to extend FVR support to Multiple parent fields.

This is a documented platform limitation. No workaround currently enables FVR inside a Multiple Group or Multiple Global Field.
