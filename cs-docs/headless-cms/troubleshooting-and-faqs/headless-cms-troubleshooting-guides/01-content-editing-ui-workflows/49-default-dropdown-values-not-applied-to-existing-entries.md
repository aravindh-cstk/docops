---
title: "Default Dropdown Values Not Applied to Existing Entries"
description: "Default Dropdown Values Not Applied to Existing Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/01-content-editing-ui-workflows/49-default-dropdown-values-not-applied-to-existing-entries
doc_type: faq
_cms_section_uid: cs44c6043feba8178c
_cms_faq_uid: cs4bb3df0b8739fb51
---

# Default Dropdown Values Not Applied to Existing Entries

After updating a content type to add default values to dropdown fields, the defaults do not populate in existing entries. Only new entries receive the default values.

**Root Cause**

Default field values in Contentstack are applied only to entries created after the defaults are configured. Existing entries already have a saved state and are not retroactively updated with new default values when the content type is modified.

**Resolution**

This is expected behavior. For existing entries:

1.  Use a CMA script to fetch all existing entries that are missing the default value, set the field value programmatically, and update the entries via the CMA.
2.  Alternatively, manually open each affected entry and save it - if the field is blank, the default will populate on save.

After applying the default values to existing entries (programmatically or manually), verify that all entries contain the expected default field values.
