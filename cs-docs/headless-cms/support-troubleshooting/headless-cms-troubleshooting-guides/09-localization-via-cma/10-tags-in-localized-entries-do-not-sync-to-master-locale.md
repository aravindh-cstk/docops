---
title: "Tags in Localized Entries Do Not Sync to Master Locale"
description: "Tags in Localized Entries Do Not Sync to Master Locale"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/10-tags-in-localized-entries-do-not-sync-to-master-locale
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs3a9c949fd76cd2d5
---

# Tags in Localized Entries Do Not Sync to Master Locale

Tags added to an entry in a localized version (for example, fr-fr) do not appear in the corresponding master locale (en) entry. Editors expect tags to be shared across locales.

**Root Cause**

The Tags field is localizable by default. Tags added in a localized entry are stored specifically for that locale and are not automatically inherited by or synced to the master locale entry. Only non-localizable fields are shared across all locales automatically.

**Resolution**

This is expected behavior. To have tags shared across locales:

1.  Add the same tags manually to each locale version where they are needed.
2.  Alternatively, use a non-localizable custom Select or Reference field for structured tagging that must be consistent across locales.

If tag consistency across locales is a business requirement, consider using a non-localizable field for the tagging use case instead of the native Tags field.
