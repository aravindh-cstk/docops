---
title: "Field Display Name and UID Blank in Content Type - Missing field_metadata"
description: "Field Display Name and UID Blank in Content Type - Missing field_metadata"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/09-field-display-name-and-uid-blank-in-content-type-missing-field-metadata
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csed8bcd0d714113f2
---

# Field Display Name and UID Blank in Content Type - Missing field_metadata

Fields in a content type display blank names and UIDs in the CMS UI. The fields exist in the schema but their display values are not visible.

**Root Cause**

The field\_metadata property is missing from the field definitions in the content type schema. This property is required for the CMS to render field display names and other UI-level metadata. When it is absent or has invalid values, the fields appear blank in the interface.

**Resolution**

1.  Retrieve the content type schema via the CMA: GET /v3/content\_types/{content\_type\_uid}
2.  Identify fields where the field\_metadata key is missing or empty.
3.  Add the field\_metadata key with appropriate default values to each affected field. At minimum, include: { "field\_metadata": { "description": "", "default\_value": "" } }
4.  Update the content type schema via: PUT /v3/content\_types/{content\_type\_uid} with the corrected schema.
5.  Reload the CMS UI and confirm the field display names are now visible.

After updating the schema with the field\_metadata key, reload the content type in the CMS. If field display names are now visible, the metadata has been correctly added.
