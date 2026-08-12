---
title: "Validated Fields Cannot Be Target Fields in Field Visibility Rules"
description: "Validated Fields Cannot Be Target Fields in Field Visibility Rules"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/91-validated-fields-cannot-be-target-fields-in-field-visibility-rules
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs6f1c67e4e48b80e4
---

# Validated Fields Cannot Be Target Fields in Field Visibility Rules

Adding Regex validation to a sub-field inside a Global Field causes the parent group to become invisible when Field Visibility Rules are applied.

**Root Cause**

This is expected behavior. Fields with validation constraints cannot be used as target fields in Field Visibility Rules. This applies even within Groups or Global Fields.

**Resolution**

1.  Use a non-validated control field (such as a Select or Boolean) as the source of the visibility condition.
2.  Apply validation to the conditionally shown field, but use the non-validated control field as the FVR target.

After restructuring to use a non-validated control field, confirm dependent fields show and hide correctly based on the control field’s value.
