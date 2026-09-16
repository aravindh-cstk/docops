---
title: "Limitations of Bulk Operations on Entries"
description: "Learn about the limitations of performing bulk operations on entries in Contentstack."
url: /headless-cms/limitations-of-bulk-operations-on-entries
uid: bltfecc063276da0931
---

# Limitations of Bulk Operations on Entries

## Limitations of Bulk Operations on Entries

-   You can publish or unpublish up to **100 entries** in **10 languages** across **10 environments** at a time.
-   You can export up to **10,000 entries** at a time.
-   You can select and delete up to **100 entries** at a time.
-   You can publish up to **10 localized entry versions** across **10 environments** at a time.
-   When scheduling bulk publishing/unpublishing, the date cannot exceed **12 months** from the current date.
-   You can update the workflow stage for a maximum of **10 entries** at a time, provided they share the same workflow and workflow stage.
-   You can change the workflow stage of up to **10 selected entries** to a common stage. For example, you can move entries in the “Ready for Review” stage to the “Complete” stage at once.
-   Localized entry versions can only be deleted through the “Delete” modal of the master language entry. They cannot be deleted directly from the “Delete” modal of the localized entries themselves.
-   When deleting entries in bulk from the entry list page, you cannot delete the corresponding localized versions of the selected entries.

**Note:** If you need to increase these limits, contact our [support](mailto:support@contentstack.com) team.

## Limitations of Select All Records

[Select All Records](/docs/headless-cms/select-all-records-for-bulk-operations) runs a bulk action on every entry in the entries list rather than on a per-page selection. The following limits apply to it:

-   A select-all action resolves a maximum of **10,000 entries**. If the list holds more entries than that, only the first 10,000 entries are acted on.
-   Select All Records supports publish, unpublish, delete, and add to release. It is not available for workflow updates or export.
-   Select All Records applies to entries only. It is not available for assets.
-   Contentstack resolves the list when the job runs, not when you make the selection, so entries that change in between can change the set that is acted on.
-   Draft entries that have never been indexed are not resolved by a select-all action.
-   Select-all publish and unpublish jobs do not create a rollback point.
-   The language, environment, and scheduling limits listed above apply to select-all actions as well.
