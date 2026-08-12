---
title: "‘Invalid CSLP Tag’ Error for Fields in Referenced Entries"
description: "‘Invalid CSLP Tag’ Error for Fields in Referenced Entries"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/05-custom-extensions-live-preview-analytics/36-invalid-cslp-tag-error-for-fields-in-referenced-entries
doc_type: faq
_cms_section_uid: csc1c30860c7f89df1
_cms_faq_uid: cs86d70ea67c972689
---

# ‘Invalid CSLP Tag’ Error for Fields in Referenced Entries

Visual Builder throws an ‘Invalid CSLP tag’ error when editing fields within referenced entries. Fields in the parent content type work correctly.

**Root Cause**

The error is caused by path discontinuity. When fields are nested inside a referenced content type via a template/wrapper structure, Visual Builder attempts to construct the CSLP tag path but the path includes a reference boundary that is not correctly traversed.

**Resolution**

1.  Ensure addEditableTags() is called on referenced entry objects individually, not just on the parent entry.
2.  For nested reference structures, call addEditableTags on each resolved reference’s data object at the correct depth level.
3.  Confirm the CSLP tag attributes contain the full path from the root entry, including the reference field UID and the referenced entry’s UID.

After ensuring addEditableTags is applied at each reference level, reload Visual Builder and confirm fields in referenced entries are editable without Invalid CSLP tag errors.
