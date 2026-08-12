---
title: "Conditional Rules Failing to Hide File Field Options"
description: "Conditional Rules Failing to Hide File Field Options"
url: /personalize/support-troubleshooting/personalize-troubleshooting-guides/05-platform-settings-permissions/05-conditional-rules-failing-to-hide-file-field-options
doc_type: faq
_cms_section_uid: csc937f59aa3c9d5e3
_cms_faq_uid: csb4a77286ce711acb
---

# Conditional Rules Failing to Hide File Field Options

Configuring conditional rules in Personalize may fail to hide specific options, such as "transparent background," when field-level validations are active. This prevents the enforcement of UI logic intended to restrict choices based on a selected variant.

**Root Cause**

The issue is caused by a system limitation where active validations on a file field interfere with the ability of conditional rules to hide or modify available options.

**Resolution**

1.  Navigate to the content type or field settings and temporarily remove all validations from the affected file field.
2.  Create and save the conditional rule intended to hide options for the specific variant.
3.  Re-enable the previously removed field-level validations.
4.  Verify that the rule remains active and functional after the validations are restored.

After temporarily removing validations and setting the rule, navigate to the entry editor and select the target variant. If the specific file field options are successfully hidden while validations are active, the issue is resolved.
