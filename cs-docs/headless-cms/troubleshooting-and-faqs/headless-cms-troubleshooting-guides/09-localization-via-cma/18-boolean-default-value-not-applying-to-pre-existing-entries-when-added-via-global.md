---
title: "Boolean Default Value Not Applying to Pre-Existing Entries When Added via Global Field"
description: "Boolean Default Value Not Applying to Pre-Existing Entries When Added via Global Field"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/18-boolean-default-value-not-applying-to-pre-existing-entries-when-added-via-global
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs5c784dbfac563c84
---

# Boolean Default Value Not Applying to Pre-Existing Entries When Added via Global Field

A global field containing a boolean field with a default value of true is added to an existing content type. When editing pre-existing entries, the boolean field appears as false instead of the expected default value.

**Root Cause**

Default field values in Contentstack are applied only to new entries created after the field and its default are configured. Pre-existing entries already have a saved data state - even if the boolean field was absent before, the existing entries are not retroactively updated with the default value when the field is added. This applies whether the field is added directly or via a Global Field.

**Resolution**

This is expected behavior. Default values are forward-looking only. For pre-existing entries:

1.  Use a CMA script to fetch all pre-existing entries, check if the boolean field value is false or undefined, set it to true programmatically, and update each entry via PUT.
2.  Alternatively, if the volume is small, open each pre-existing entry in the editor and manually set the boolean field to true before saving.
3.  For future reference: when adding a boolean (or any) field with a default value to an existing content type, plan to run a migration script to backfill the default value for existing entries.

After running the backfill script, fetch a sample of pre-existing entries via the CDA and confirm the boolean field returns true.
