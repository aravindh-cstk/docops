---
title: "Entry Publish Fails with Missing Required Field - Modular Block Minimum Instance Misconfiguration"
description: "Entry Publish Fails with Missing Required Field - Modular Block Minimum Instance Misconfiguration"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/69-entry-publish-fails-with-missing-required-field-modular-block-minimum-instance-m
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs89c4e19080137bca
---

# Entry Publish Fails with Missing Required Field - Modular Block Minimum Instance Misconfiguration

Publishing an entry fails with a Missing Required Field error. No validation error is visible in the entry UI during save or publish. The error only appears in the publish queue.

**Root Cause**

The modular block within the content type has a minimum instance configuration set to 1, requiring at least one block instance to be present for the entry to be valid. When the entry does not include an instance of that modular block, the missing required field validation triggers at publish time. The UI does not surface this validation error during entry editing because the constraint check is applied at publish rather than save.

**Resolution**

1.  Navigate to the content type schema in the CMS and locate the modular block field showing the validation error.
2.  Open the field settings and change the minimum instance value from 1 to 0 if the block is not always required.
3.  Save the content type schema.
4.  Retry publishing the affected entry and confirm it succeeds without the Missing Required Field error.

After updating the minimum instance configuration, attempt to publish the entry again. If publishing succeeds without validation errors, the constraint has been corrected.
