---
title: "“Published before localized” Error on Referenced Entries in a Locale"
description: "“Published before localized” Error on Referenced Entries in a Locale"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/13-published-before-localized-error-on-referenced-entries-in-a-locale
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: cs85ab70ad2d18e005
---

# “Published before localized” Error on Referenced Entries in a Locale

A locale-specific page fails to load in the production environment. Referenced entries on that page display the error Published before localized in the CMS, and the page renders blank or with missing content.

**Root Cause**

The error Published before localized appears when a referenced entry was published to an environment before it was localized. The entry exists in the master locale but has not been saved as a localized version for the target language. The CDA cannot serve the localized version because it does not exist, causing the page to fail or display incomplete content.

**Resolution**

1.  Navigate to each referenced entry showing the Published before localized error in the CMS.
2.  Open the entry in the target locale (for example, German or de).
3.  Save the entry in that locale - even without content changes - to create the localized version.
4.  Publish the localized version to the target environment.
5.  Reload the production page and confirm it now renders correctly.

After saving and publishing the localized version of all referenced entries, request the affected page URL. If the page loads correctly, all referenced entries are now localized and published.
