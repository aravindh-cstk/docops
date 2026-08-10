---
title: "Cannot Add Fields to Content Type - 500 Field Limit Reached"
description: "Cannot Add Fields to Content Type - 500 Field Limit Reached"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/89-cannot-add-fields-to-content-type-500-field-limit-reached
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4807066ec98ba254
---

# Cannot Add Fields to Content Type - 500 Field Limit Reached

A user is unable to add new fields to a content type. Field additions silently fail.

**Root Cause**

Contentstack enforces a maximum of 500 fields per content type, counting all fields at every nesting level: top-level, inside Groups, inside Modular Block schemas, and from Global Fields.

**Resolution**

1.  Review the content type’s total field count - complex schemas accumulate counts quickly.
2.  Refactor: move reusable field groups to Global Fields, or split the content type into a parent type with reference fields pointing to sub-types.
3.  Remove unused or deprecated fields.

After reducing the field count below 500, verify new fields can be added and the content type saves.
