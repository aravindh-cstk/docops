---
title: "New Block With Non-Localizable Fields Added Outside Group in Translated Entry"
description: "New Block With Non-Localizable Fields Added Outside Group in Translated Entry"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/17-new-block-with-non-localizable-fields-added-outside-group-in-translated-entry
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs6d6bf8e718d51576
---

# New Block With Non-Localizable Fields Added Outside Group in Translated Entry

When adding a new block containing non-localizable fields to the master locale within a group, the block is added outside the group in the translated (localized) entry.

**Root Cause**

Once master and localized entries have diverged in block structure, the system cannot automatically map new block instances to the correct position in the localized entry’s group.

**Resolution**

1.  Use the CMA to align the block structure in the localized entry with the master locale.
2.  Fetch the localized entry: GET /v3/content\_types/{uid}/entries/{entry\_uid}?locale={locale}
3.  Compare the block array structure against the master locale entry and identify the positional mismatch.
4.  Update the localized entry via CMA PUT to place the new block at the correct position within the group.

After aligning the block structure via CMA, verify the localized entry renders correctly in both the CMS editor and the frontend.
