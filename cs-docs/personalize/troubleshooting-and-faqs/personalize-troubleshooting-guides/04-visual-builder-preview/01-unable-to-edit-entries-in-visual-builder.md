---
title: "Unable to Edit Entries in Visual Builder"
description: "Unable to Edit Entries in Visual Builder"
url: /personalize/troubleshooting-and-faqs/personalize-troubleshooting-guides/04-visual-builder-preview/01-unable-to-edit-entries-in-visual-builder
doc_type: faq
_cms_section_uid: cs14c857a91fb461be
_cms_faq_uid: csb6b44b35e5c63e90
---

# Unable to Edit Entries in Visual Builder

Editing entries within the Visual Builder interface may fail to function correctly. This issue prevents users from restoring or using full editing capabilities while working in the interface.

**Root Cause**

This is typically caused by a version mismatch in the initialization method. Using an outdated version of the Live Preview SDK leads to compatibility failures within the Visual Builder.

**Resolution**

1.  Update the Live Preview SDK to the latest available version.
2.  Verify that the init method in your code is aligned with the current implementation requirements.

After updating the SDK and the init method, open the Visual Builder and attempt to edit an entry. If the editing functionality works as expected, the issue is resolved.
