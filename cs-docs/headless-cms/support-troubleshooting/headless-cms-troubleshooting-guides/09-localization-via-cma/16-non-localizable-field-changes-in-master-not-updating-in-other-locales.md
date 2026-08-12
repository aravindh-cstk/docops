---
title: "Non-Localizable Field Changes in Master Not Updating in Other Locales"
description: "Non-Localizable Field Changes in Master Not Updating in Other Locales"
url: /headless-cms/support-troubleshooting/headless-cms-troubleshooting-guides/09-localization-via-cma/16-non-localizable-field-changes-in-master-not-updating-in-other-locales
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: csfe078006c130c711
---

# Non-Localizable Field Changes in Master Not Updating in Other Locales

A non-localizable field value is updated in the master locale but does not immediately appear in localized entry views (for example, French). Editors see stale data in the localized entry.

**Root Cause**

In the reported case, Contentstack was unable to reproduce this behavior, and the customer subsequently confirmed the update had synced correctly with no further action taken - no root cause was confirmed. Client-side or browser-level caching of the localized entry view is a plausible explanation for the apparent delay, since non-localizable fields are expected to propagate immediately across all locales, but this has not been confirmed as the cause.

**Resolution**

1.  Verify the correct value is present in the CDA API response for the localized entry: GET /v3/content\_types/{uid}/entries/{entry\_uid}?locale={locale} - if the API returns the updated value, the issue is UI-side only.
2.  Perform a hard refresh (Ctrl+Shift+R / Cmd+Shift+R) on the localized entry view.
3.  If the field still shows the old value after a hard refresh, re-save the master locale entry to trigger re-propagation.
4.  If the stale value persists in both the UI and the API response, contact Contentstack Support with the entry UID, affected locale, and stack details for further investigation.

After hard-refreshing (or re-saving the master entry), confirm the non-localizable field reflects the latest master locale value in the localized entry view.
