---
title: "Publishing Fails Due to Mandatory JSON RTE Field Left Blank"
description: "Publishing Fails Due to Mandatory JSON RTE Field Left Blank"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/46-publishing-fails-due-to-mandatory-json-rte-field-left-blank
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs4b315d5988cfb5fe
---

# Publishing Fails Due to Mandatory JSON RTE Field Left Blank

Publishing an entry fails with a missing mandatory field error. All visible fields appear populated but the error persists.

**Root Cause**

A JSON RTE field is mandatory in the schema but appears empty in the entry. Common causes: the field was added as mandatory after the entry was created; the field is inside a modular block that was not scrolled to; or the field was cleared during editing.

**Resolution**

1.  Open the browser developer tools and attempt the publish to see the specific field UID in the 422 error response.
2.  Use browser search or manually scroll through all fields and modular blocks to locate the flagged JSON RTE field.
3.  Add at least minimal placeholder content to the mandatory JSON RTE field, or mark the field as non-mandatory if it should be optional.

After filling the mandatory JSON RTE field, confirm the entry is published successfully to all target environments.
