---
title: "Stack Bulk Task Queue"
description: "Manage and track bulk operations in your Contentstack release with the Bulk Task Queue. Access task details, statuses, and filters for efficient processing."
url: /headless-cms/stack-bulk-task-queue
uid: blt21edab79d9be7e65
---

# Stack Bulk Task Queue

## Stack Bulk Task Queue

The Bulk Task Queue displays a list of bulk operations performed within a specific stack.

To access the bulk task queue for your stack, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click **Settings** in the navigation bar. You can also use the shortcut key “S” (for both Windows OS and Mac OS users) to access **Settings**.
2.  Click the **Bulk Task Queue** tab to access the section.

The queue provides the following details about each task:

-   **Time**: The date and time when the task was initiated.
-   **Job ID**: The job ID of the action performed.
-   **Task Details**: Type of action performed by the user. A bulk find-and-replace operation creates two rows here: **Bulk Find** for the preview you generate, and **Bulk Replace** for the changes you apply.
-   **Initiated By**: The name of the user who initiated the bulk operation.
-   **Task Status**: The current status of the task.
-   **Actions**: This column provides options to interact with a specific bulk action.
    -   **Open Release**: Navigate directly to the release associated with the bulk action.
    -   **View Details**: A comprehensive list of all entries impacted by this bulk operation, including their entry name, version, language, and content type.

## Task Status

The Task Status represents the status of the bulk operation. The following are the list of statuses for a bulk task.

-   **Waiting**: The task is in the queue, awaiting processing.
-   **In Queue**: The task is queued and will be processed once the in-progress tasks are completed.
-   **In Progress**: The task is currently being processed.
-   **Partial Complete**: The task has been completed from the CDA side; some operations are still pending on the CMA side.
-   **Failed**: The task processing encountered an error.
-   **Completed**: The bulk action has been fully processed.

**Note:** A bulk find-and-replace operation appears as two jobs, **Bulk Find** and **Bulk Replace**. Open a job to review its entries under **All Entries**, **Successful Entries**, and **Failed Entries**, and select **Retry** on any failed entry. A completed job stays available in the queue for 30 days. For the full procedure, refer to [Find and Replace Entries in Bulk](/docs/headless-cms/find-and-replace-entries-in-bulk).

## Filter Bulk Task Queue

Use filters to narrow down the tasks in the queue and fetch the data you need.

-   **Time**: Refine your view by selecting specific task statuses.
-   **Users**: Filter tasks performed by specific stack users.

Click **Reset filters** to clear all the applied filters.
