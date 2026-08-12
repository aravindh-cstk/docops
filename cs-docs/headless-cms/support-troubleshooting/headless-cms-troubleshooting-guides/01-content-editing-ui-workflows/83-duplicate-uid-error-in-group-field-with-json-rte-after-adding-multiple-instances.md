---
title: "Duplicate UID Error in Group Field with JSON RTE After Adding Multiple Instances"
description: "Duplicate UID Error in Group Field with JSON RTE After Adding Multiple Instances"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/83-duplicate-uid-error-in-group-field-with-json-rte-after-adding-multiple-instances
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: csd244449a8034eaec
---

# Duplicate UID Error in Group Field with JSON RTE After Adding Multiple Instances

A Multiple Group field containing a JSON RTE field returns a duplicate UID error when more than one group instance is added. Saving or publishing fails.

**Root Cause**

An extra empty schema: \[\] array in the JSON RTE field configuration within the Group causes a UID conflict when multiple instances are created.

**Resolution**

1.  Fetch the content type schema via CMA: GET /v3/content\_types/{uid} and look for a duplicate empty schema array in the JSON RTE field configuration.
2.  Remove the duplicate empty schema: \[\] entry from the JSON RTE field configuration using the CMA: PUT /v3/content\_types/{uid} with the corrected field configuration.
3.  After fixing the schema, re-save affected entries and confirm multiple group instances can be added and saved without the duplicate UID error.

After correcting the JSON RTE field configuration, add two or more instances of the Multiple Group and confirm it saves and publishes without errors.
