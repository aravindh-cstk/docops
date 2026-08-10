---
title: "‘Published Before Localization’ Warning in Entry Publish Status"
description: "‘Published Before Localization’ Warning in Entry Publish Status"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/02-publishing-releases-environments-and-operations/35-published-before-localization-warning-in-entry-publish-status
doc_type: faq
_cms_section_uid: cs6b2319c16c86eb80
_cms_faq_uid: cs5d4551265a30735d
---

# ‘Published Before Localization’ Warning in Entry Publish Status

A warning reading ‘Published before localization’ appears under the entry’s publish status tab, even though the entry has been published to multiple environments. The warning remains despite subsequent published actions.

**Root Cause**

The warning appears when the entry has been published to an environment before it was ever localized for a newly added language. Until the entry is explicitly opened and saved in that locale - which creates the localized version - the warning persists. Publishing from the master locale does not resolve the warning for the new locale.

**Resolution**

1.  Open the affected entry in the CMS.
2.  Switch to the locale that shows the ‘Published before localization’ warning.
3.  Open and save the entry in that locale (even without making changes). This creates the localized version and clears the warning.
4.  If the locale should continue to inherit from the master locale rather than having its own localized version, the warning will reappear after the next master locale publish. This is expected behavior for master-only entries.

After saving the entry in the affected locale, check the publish status tab. If the ‘Published before localization’ warning is gone, the entry is now correctly localized.
