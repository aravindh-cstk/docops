---
title: "‘Non-Localizable Exception’ Error in Localized Entry Despite Field Existing in Master"
description: "‘Non-Localizable Exception’ Error in Localized Entry Despite Field Existing in Master"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/19-non-localizable-exception-error-in-localized-entry-despite-field-existing-in-master
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs46f3c5c15c060d79
---

# ‘Non-Localizable Exception’ Error in Localized Entry Despite Field Existing in Master

localized entry shows the error: ‘Non-localizable (Exception) - This field instance does not exist in the master language entry, so it is editable.’ The field does exist in the master locale entry, and saving the master locale entry does not resolve the issue.

**Root Cause**

This error occurs when a field is marked as non-localizable after data has already been added to the localized entry for that field, without the corresponding value being present in the master locale entry. The misalignment between the master and localized entry structures creates an exception state where the system cannot determine the authoritative value for the non-localizable field.

**Resolution**

1.  Unlocalize the affected entry: in the entry editor, use the Unlocalize option for the specific locale. This removes the locale-specific version.
2.  Recreate the localized entry from the master locale: after unlocalizing, localize the entry again by switching to the locale and making the necessary translations.
3.  This process ensures a clean mapping of fields across locales, realigning the entry structure with the current content type schema.
4.  If unlocalizing would cause significant content loss, first export the localized content via CMA as a backup before unlocalizing.

After unlocalizing and recreating the localized entry, confirm the ‘Non-localizable Exception’ error no longer appears and the field shows the correct master locale value.
