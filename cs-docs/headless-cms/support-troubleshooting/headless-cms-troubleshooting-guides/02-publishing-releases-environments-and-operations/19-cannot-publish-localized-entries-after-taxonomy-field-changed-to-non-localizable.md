---
title: "Cannot Publish Localized Entries After Taxonomy Field Changed to Non-Localizable"
description: "Cannot Publish Localized Entries After Taxonomy Field Changed to Non-Localizable"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/19-cannot-publish-localized-entries-after-taxonomy-field-changed-to-non-localizable
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs34d2d146ad7593d9
---

# Cannot Publish Localized Entries After Taxonomy Field Changed to Non-Localizable

After changing a taxonomy field from localizable to non-localizable across 40+ content types, localized entries fail to publish. Errors show ‘missing required field’ or the entries remain in an inconsistent state.

**Root Cause**

Changing a field’s localizable status after entries have been created creates a data state mismatch. Localized entries already have locale-specific values stored for the field. When the field is changed to non-localizable, the system expects the value to come from the master locale only, but the localized versions may have stale or conflicting data that prevents publish validation from passing.

**Resolution**

1.  Contact Contentstack Support and provide the affected content type UIDs, the field UID that was changed, and a sample of failing entry UIDs. Engineering will assess the data state.
2.  For each affected localized entry, open it in the CMS editor under each locale, verify the field state, and re-save to trigger schema revalidation.
3.  If the field is required and the master locale value is not propagating to localized entries, confirm the field value is set in the master locale and re-save the master locale entry first, then re-save localized entries.
4.  For large-scale remediation, use a CMA script to re-save all affected localized entries after the master locale is confirmed correct.

After resolving the data state mismatch, verify that localized entries publish successfully and the correct (master locale) non-localizable field value is reflected in all locale variants.
