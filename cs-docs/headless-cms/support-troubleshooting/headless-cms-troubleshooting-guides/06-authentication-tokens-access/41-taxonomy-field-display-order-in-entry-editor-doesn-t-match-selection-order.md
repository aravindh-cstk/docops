---
title: "Taxonomy Field Display Order in Entry Editor Doesn’t Match Selection Order"
description: "Taxonomy Field Display Order in Entry Editor Doesn’t Match Selection Order"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/06-authentication-tokens-access/41-taxonomy-field-display-order-in-entry-editor-doesn-t-match-selection-order
doc_type: faq
_cms_section_uid: csa8cb43433fdb8a3c
_cms_faq_uid: cs7c649ea9a31ea164
---

# Taxonomy Field Display Order in Entry Editor Doesn’t Match Selection Order

After selecting taxonomy terms in a specific order in the entry editor, the displayed order of terms in the taxonomy field does not match the order in which they were selected. The Content Delivery API correctly captures the selection order, but the UI display is inconsistent.

**Root Cause**

This is a UI display bug. The entry editor’s taxonomy field component renders terms in a different order than the sequence in which they were selected. The underlying data is stored and returned by the CDA in the correct selection order - the discrepancy is cosmetic and limited to the editor display.

**Resolution**

An engineering fix has been deployed to correct the taxonomy term display order in the entry editor. The editor should now reflect the selection order consistent with the CDA output.

1.  If the display order is still inconsistent after the fix deployment, contact Contentstack Support with the content type UID and a screen recording showing the ordering discrepancy.
2.  In the meantime, verify the correct order via the CDA and trust the API output for downstream rendering - the data is correct even if the editor display was inconsistent.

After the fix deployment, select taxonomy terms in a specific order and confirm the entry editor displays them in the same sequence as the CDA returns them.
