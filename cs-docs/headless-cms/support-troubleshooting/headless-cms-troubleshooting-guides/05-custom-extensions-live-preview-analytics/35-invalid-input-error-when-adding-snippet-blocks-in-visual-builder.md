---
title: "‘Invalid Input’ Error When Adding Snippet Blocks in Visual Builder"
description: "‘Invalid Input’ Error When Adding Snippet Blocks in Visual Builder"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/35-invalid-input-error-when-adding-snippet-blocks-in-visual-builder
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs8a07e63cc5f06ee0
---

# ‘Invalid Input’ Error When Adding Snippet Blocks in Visual Builder

Users encounter an ‘Invalid Input’ error when adding snippet blocks through Visual Builder Forms, even before content is added to the new block.

**Root Cause**

The error occurs when reference field values are added directly via Visual Builder Forms without the reference being pre-populated inside the entry first. Without a pre-existing value, the form cannot construct a valid CSLP tag path, causing the invalid input error.

**Resolution**

1.  Before using Visual Builder to add or edit a reference field, open the entry in the standard entry editor and add at least one value to the reference field.
2.  Save the entry.
3.  Now open Visual Builder - the pre-populated reference field will allow further additions without the Invalid Input error.

After pre-populating the reference field in the entry editor, open Visual Builder and confirm snippet blocks can be added without the Invalid Input error.
