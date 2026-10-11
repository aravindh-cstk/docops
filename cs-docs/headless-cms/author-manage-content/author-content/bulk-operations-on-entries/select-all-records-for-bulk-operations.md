---
title: "Select All Records for Bulk Operations on Entries"
description: "Select every entry in the Contentstack entries list and run a bulk publish, unpublish, delete, or add to release on all of them in one action."
url: /headless-cms/select-all-records-for-bulk-operations
uid: blt4e63fb5906e20b0e
---

# Select All Records for Bulk Operations on Entries

## Select All Records for Bulk Operations on Entries

On the entries list, the checkboxes select entries one page at a time, and a bulk action applies only to the entries you selected on that page. If a search returns 200 entries, you can select at most 100 of them, run the action, and then repeat it for the rest.

Select all records removes the batching. Select the header checkbox, then choose to select all records, and the action applies to all 200 entries in one job. Bulk actions themselves are unchanged: the same modals, options, and results apply, only the size of the selection is different.

You do not have to search or filter first. Select all records works on the entries list as it is, and applying filters or a search simply narrows what “all” means.

**Note:** Select all records is available only if included in your plan. Contact our [support](mailto:support@contentstack.com) team to enable this feature if needed.

## When to Use Select All Records

Use select all records when you want to act on an entire list rather than on a handful of specific entries. Common examples include the following:

-   Publishing every entry of a content type to a new environment.
-   Unpublishing every entry tagged for a campaign that has ended.
-   Deleting every entry left behind by a migration, identified by a tag or a title pattern.
-   Adding every entry in a language to a release before a site launch.

Narrow the list first with [search, filters, or a view](/docs/headless-cms/about-bulk-operations-on-search-results) when you want to act on part of your content, or leave the list as it is to act on all of it.

Use the standard per-page checkboxes when you want a specific, hand-picked set of entries. Select all records acts on the whole list, so it is not the right choice when your selection is partly manual.

## Supported Bulk Actions

Select all records supports the following bulk actions on entries:

-   **Publish**: Supported.
-   **Unpublish**: Supported.
-   **Delete**: Supported.
-   **Add to Release**: Supported.
-   **Update Workflow Details**: Not supported.
-   **Export**: Not supported.

Select all records applies to entries only. It is not available for assets.

## Select All Records and Run a Bulk Action

To run a bulk action on every entry in the entries list, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Entries” icon in the left navigation panel. You can also use the shortcut key “E” (for both Windows and Mac OS users).
2.  Optional: narrow the list to the entries you want to act on. You can combine column filters, the filters panel, and [search](/docs/headless-cms/entries-list-overview). Skip this step to act on every entry in the list.
3.  Select the checkbox in the table header to select every entry on the current page. A banner appears above the table: _All 10 entries are selected on this page. Select all matching your current filters?_

    **Note:** The banner appears only when the list holds more entries than one page shows. If the list has 25 entries and the page size is 30, the header checkbox already selects all of them, and no banner appears.

4.  In the banner, click **Select all {number} entries**. The banner changes to _All {number} entries (matching your current filters) are selected_, and the floating bar at the top of the page updates its **Show Selected** count to the full number of entries.

    **Note:** Select all records resolves a maximum of **10,000 entries**. Narrow the list with filters or search if it holds more.

5.  Click **Show Selected ({number})** in the floating bar to review the entries you are about to act on.
6.  In the floating bar, click the bulk action you want to run: **Add to Release**, **Delete**, **Publish**, or **Unpublish**. If an action is not visible, click the vertical ellipsis to see the rest.
7.  Complete the modal for that action as you normally would, and confirm.

Contentstack creates a single background job and returns you to the entries list. To clear the selection without running an action, click **Clear selection** in the banner.

**Note:** Changing your filters, your search text, or the page resets the selection. Select all records again after you adjust the list.

## Track a Select All Records Action

A select-all bulk action runs in the background, and the entries list does not update immediately.

-   Track the job in the [Stack Bulk Task Queue](/docs/headless-cms/stack-bulk-task-queue), where it appears as a single task with its status and the list of entries it affected.
-   For publish and unpublish, also track the outcome in the [Publish Queue](/docs/headless-cms/view-publish-status-of-entries-assets-in-publish-queue), where the job appears as one bulk entry rather than one entry per record.

## Limits and Behavior

Review the following before you run a select-all action:

-   A select-all action resolves a maximum of **10,000 entries**. If the list holds more entries than that, only the first 10,000 entries are acted on.
-   Select all records applies to entries only. Assets are not included, even when they appear in your search results.
-   Contentstack resolves the entries when the job runs, not when you make the selection. Entries that change or are created between those two moments can therefore change the set that is acted on.
-   Draft entries that have never been indexed are not resolved by a select-all action. When you delete an entry, its drafts are deleted with it.
-   Deleted entries move to the [Trash](/docs/headless-cms/about-trash) and can be restored within **14 days**, the same as any other bulk delete.
-   A select-all delete does not remove the localized versions of the entries it deletes, regardless of the language the list is filtered to. To delete localized versions, use the **Delete** modal of the master language entry. Refer to [Bulk Delete Localized Entry Versions](/docs/headless-cms/bulk-delete-localized-entry-versions).
-   You can roll back a select-all publish from the Publish Queue, the same as any other bulk publish. Refer to [Bulk Publish Entries](/docs/headless-cms/bulk-publish-entries).
-   Language, environment, and scheduling limits are unchanged. For the full list, refer to [Limitations of Bulk Operations on Entries](/docs/headless-cms/limitations-of-bulk-operations-on-entries).

**Additional Resource**:

-   For the standard per-page bulk actions, refer to [Bulk Publish Entries](/docs/headless-cms/bulk-publish-entries), [Bulk Unpublish Entries](/docs/headless-cms/bulk-unpublish-entries), [Bulk Delete Entries](/docs/headless-cms/bulk-delete-entries), and [Bulk Add to Release](/docs/headless-cms/bulk-add-to-release).
