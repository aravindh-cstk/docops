---
title: "JSON RTE Content Not Displaying - Imported JSON Keys Do Not Match Field UID"
description: "JSON RTE Content Not Displaying - Imported JSON Keys Do Not Match Field UID"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/86-json-rte-content-not-displaying-imported-json-keys-do-not-match-field-uid
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs579ecced1a9a9636
---

# JSON RTE Content Not Displaying - Imported JSON Keys Do Not Match Field UID

A JSON RTE field appears empty after content was imported. The data exists in the entry JSON but the field does not render.

**Root Cause**

The JSON RTE field stores content using its field UID as the key. If the imported JSON uses a different key, the field cannot find its data and renders empty.

**Resolution**

1.  Fetch the content type schema: GET /v3/content\_types/{uid} and identify the exact UID of the JSON RTE field.
2.  Compare the field UID against the keys used in the imported entry JSON.
3.  If keys differ, update the entry JSON to use the correct field UID: PUT /v3/content\_types/{uid}/entries/{entry\_uid} with the corrected JSON structure.

After correcting the JSON key to match the field UID, confirm the JSON RTE field renders the imported content and the entry can be saved and published.
