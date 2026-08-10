---
title: "Non-Localizable Fields Appearing Editable Inside Multiple Group Fields in Localized Entries"
description: "Non-Localizable Fields Appearing Editable Inside Multiple Group Fields in Localized Entries"
url: /headless-cms/troubleshooting-and-faqs/headless-cms-troubleshooting-guides/09-localization-via-cma/06-non-localizable-fields-appearing-editable-inside-multiple-group-fields-in-locali
doc_type: faq
_cms_section_uid: cse0040e377fcd5a26
_cms_faq_uid: csc0fbd5198d26b5d0
---

# Non-Localizable Fields Appearing Editable Inside Multiple Group Fields in Localized Entries

Fields marked as Non-localizable in the master locale are appearing editable in a localized entry when they are nested inside a Multiple Group field. The affected fields are intended to inherit values from the master locale but display incorrectly in the localized entry editor.

**Root Cause**

This is a known platform bug affecting Non-localizable fields nested inside Group fields marked as Multiple. The non-localizable metadata is not correctly applied to each group instance in the localized entry’s internal data structure. As a result, localized entries may show those fields as editable and may not correctly display or inherit the master locale value.

**Resolution**

**Option 1 - API update:**

1.  Fetch the affected entry via the CMA: GET /v3/content\_types/{uid}/entries/{entry\_uid}?locale={locale}
2.  Locate the affected Group field instances in the entry JSON. For each instance within the Multiple Group, add the non\_localizable\_content: true property within the \_metadata object.
3.  Update the entry via the CMA: PUT /v3/content\_types/{uid}/entries/{entry\_uid}?locale={locale} with the corrected entry JSON.

**Option 2 - UI approach:**

1.  Identify a previous version of the entry (for example, version 2) that contains the correct \_metadata with non\_localizable\_content set correctly.
2.  In the CMS entry editor, use the version history dropdown to open that version.
3.  Create a new version from that older version. The correct non\_localizable metadata will be restored in the new version.

After applying either fix, open the localized entry and confirm that the Non-localizable fields inside the Multiple Group field display as read-only and show the correct master locale value.
