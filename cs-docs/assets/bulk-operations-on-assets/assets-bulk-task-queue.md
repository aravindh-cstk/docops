---
title: "Assets Bulk Task Queue"
description: "Efficiently track and manage bulk asset operations in Contentstack's Bulk Task Queue. Monitor task progress, status, and resolve issues with ease."
url: /assets/assets-bulk-task-queue
uid: bltd4063351e248ffbe
---

# Assets Bulk Task Queue

## Assets Bulk Task Queue

The Bulk Task Queue displays a list of bulk operations performed within a specific space. When you run a bulk action on assets, that is, when you select multiple assets and perform a bulk operation on them, Contentstack processes the action as a background job and records it in this queue. The queue gives you a single place to track each job's progress, confirm completion, and identify any assets that failed to process.

There are two queues. The **space** queue, in Space Settings, tracks bulk actions on assets in that space, such as a bulk delete or a bulk move. The **product** queue tracks changes to asset types and fields, which apply across the whole of Assets rather than to one space.

To access the **Bulk Task Queue** for a space, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps below:

1.  Open **Assets** and select the space you want to review.
2.  Click **Space Settings** in the top navigation panel.
3.  Click the **Bulk Task Queue** tab to open the queue.

The queue provides the following details about each task:

-   **Time**: The date and time when the task was initiated.
-   **Job ID**: The unique identifier of the bulk job.
-   **Task Details**: The type of bulk action performed, such as **Bulk Delete**.
-   **Initiated By**: The name of the user who started the bulk operation. System-generated jobs display as system.
-   **Task Status**: The current status of the task.
-   **Actions**: This column provides options to interact with a specific bulk action.
-   **View Details**: Open a side panel that lists every asset included in the bulk operation, along with each asset's title, type, locale, and any errors recorded during processing.

## Asset Type and Field Changes

Changes to asset types and fields do not all behave the same way. Adding is immediate, and removing runs in the background.

These complete as soon as you save:

-   Adding a field to an asset type.
-   Adding a field to a group field.
-   Editing a field’s attributes, including its default value.

These are queued as a background job, because every affected asset has to be updated:

-   Removing a field from an asset type.
-   Removing a field from inside a group field.
-   Deleting a field.
-   Creating an asset type.
-   Deleting an asset type.

When you save one of these, Contentstack confirms the change and gives you a job to follow rather than finishing on the spot. A notification links you to the queue.

**Note:** Asset type and field jobs run one at a time for your organization, in the order they were submitted. A large job delays the ones behind it.

**Note:** A job that fails is retried automatically up to three times before it is marked **Failed**. There is no manual retry, so submit the change again.

## Task Status

The Task Status represents the state of the bulk operation. The following statuses apply to a bulk task:

-   **Waiting**: The task is in the queue, awaiting processing.
-   **In Queue**: The task is queued and is processed once the in-progress tasks are complete.
-   **In Progress**: The task is currently being processed.
-   **Partially Completed**: The task finished, but one or more assets in the job were skipped or failed.
-   **Completed**: The bulk action has been fully processed.
-   **Failed**: The task processing encountered an error.

### What a Field Removal Changes

Removing a field clears its values from your assets, with three consequences worth knowing:

-   **Version history is left alone.** Only the current version of each asset is updated. Older versions keep the values they were saved with.
-   **Assets are not marked as modified.** The change does not create a new asset version, does not update Last Modified, and does not trigger webhooks. Republish the affected assets yourself if they are live.
-   **Restoring an asset re-applies the change.** An asset restored from the bin has its asset type recalculated, and values for removed fields are cleared from it.

Every job is recorded in both the Bulk Task Queue and the audit logs.

## Filter the Bulk Task Queue

Use filters to narrow down the tasks in the queue and find the data you need.

-   **Status**: Show only tasks with a specific status, such as Failed or Completed.
-   **Users**: Show tasks initiated by specific users.
-   **Date range**: Show tasks initiated within a selected time period.

To clear all applied filters, click **Reset Filters**.
