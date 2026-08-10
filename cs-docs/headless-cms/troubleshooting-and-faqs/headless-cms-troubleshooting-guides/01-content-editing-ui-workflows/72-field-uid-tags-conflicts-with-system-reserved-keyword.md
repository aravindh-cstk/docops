---
title: "Field UID ‘tags’ Conflicts with System Reserved Keyword"
description: "Field UID ‘tags’ Conflicts with System Reserved Keyword"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/72-field-uid-tags-conflicts-with-system-reserved-keyword
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs9c6fc984dda0afca
---

# Field UID ‘tags’ Conflicts with System Reserved Keyword

A single-line text field with UID ‘tags’ does not appear in the entry editor, or filling it with a value makes the entire entry inaccessible. The field was created and appears in the content type schema.

**Root Cause**

‘tags’ is a reserved system keyword in Contentstack used for the native Tags metadata field. Creating a custom field with the UID ‘tags’ conflicts with the system-level Tags field. The UI cannot render both and may hide the custom field or cause instability in the entry editor.

**Resolution**

1.  Open the content type in the Content Type Builder.
2.  Locate the field with UID ‘tags’ and change its UID to a non-reserved value (for example, ‘article\_tags’, ‘custom\_tags’, or ‘tag\_list’).
3.  Save the content type.
4.  Open affected entries and confirm the field now appears and accepts input without making the entry inaccessible.

Other reserved field UIDs to avoid: title, uid, locale, created\_at, updated\_at, created\_by, updated\_by, publish\_details. Using these as custom field UIDs will cause unpredictable behavior.
