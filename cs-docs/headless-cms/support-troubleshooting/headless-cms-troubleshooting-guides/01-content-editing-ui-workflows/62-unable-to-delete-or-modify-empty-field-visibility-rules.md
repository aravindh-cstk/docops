---
title: "Unable to Delete or Modify Empty Field Visibility Rules"
description: "Unable to Delete or Modify Empty Field Visibility Rules"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/62-unable-to-delete-or-modify-empty-field-visibility-rules
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cse3b06c706c384984
---

# Unable to Delete or Modify Empty Field Visibility Rules

Field visibility rules created without conditions (empty rules) cannot be deleted or modified in the content type editor. The empty rule blocks further content type saves.

**Root Cause**

Empty rules - created without condition values - can become locked in the schema if the editor was closed before the rule was completed or if the rule was partially saved. The UI may not expose a delete action for empty rules in certain states.

**Resolution**

1.  Export the content type schema via the CMA: GET /v3/content\_types/{content\_type\_uid}
2.  Locate and remove the empty rule entry from the field visibility configuration in the JSON.
3.  Update the content type via the CMA with the cleaned schema: PUT /v3/content\_types/{content\_type\_uid}
4.  Reload the content type in the CMS UI and confirm the empty rule no longer appears.

After updating the schema via CMA, open the content type and confirm field visibility rules can now be modified and saved without errors.
