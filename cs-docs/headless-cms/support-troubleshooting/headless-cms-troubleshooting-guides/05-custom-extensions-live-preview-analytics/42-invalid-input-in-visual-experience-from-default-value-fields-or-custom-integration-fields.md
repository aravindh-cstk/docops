---
title: "‘Invalid Input’ in Visual Experience From Default Value Fields or Custom Integration Fields"
description: "‘Invalid Input’ in Visual Experience From Default Value Fields or Custom Integration Fields"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/42-invalid-input-in-visual-experience-from-default-value-fields-or-custom-integration-fields
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs50869e42622e62cd
---

# ‘Invalid Input’ in Visual Experience From Default Value Fields or Custom Integration Fields

An ‘Invalid Input’ error occurs in Visual Experience. In one pattern, entry creation fails in Visual Experience for a content type when fields have default values configured. In another pattern, the error occurs when interacting with Bynder or similar custom integration asset fields even without modifying them.

**Root Cause**

Two distinct root causes produce the same Invalid Input error:

-   Default value initialization failure (JIRA VB-1457): Visual Experience encounters a failure while processing undefined data during the initialization of fields with default values. This is a platform bug.
-   Custom integration field regression: recent platform fixes inadvertently affected how certain third-party integration fields (such as Bynder asset picker) pass their data through Visual Experience’s form layer. Fields that were previously working began returning Invalid Input after the fix.

**Resolution**

**For default value initialization failures:**

1.  A platform fix has been deployed (JIRA VB-1457). Entry creation in Visual Experience should now work correctly for content types with default value fields.
2.  If the error persists after the fix, contact Contentstack Support with the content type UID and the specific fields that have default values.

**For custom integration field regressions (Bynder, etc.):**

1.  Contact Contentstack Support and report the Invalid Input error with the integration name, the specific field type, and a description of the actions that trigger it.
2.  As a workaround: use the standard entry editor instead of Visual Experience for entries containing the affected integration fields until the regression is resolved.

After the relevant platform fix is deployed, confirm entry creation and editing in Visual Experience work without Invalid Input errors for both default value fields and custom integration fields.
