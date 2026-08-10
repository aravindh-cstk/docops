---
title: "Stack Bulk Task Queue"
description: "Manage and track bulk operations in your Contentstack release with the Bulk Task Queue. Access task details, statuses, and filters for efficient processing."
url: /headless-cms/stack-bulk-task-queue
---

# Stack Bulk Task Queue

## Stack Bulk Task Queue

The Bulk Task Queue displays a list of bulk operations performed within a specific stack.

To access the bulk task queue for your organization, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon on the left navigation panel. You can also use the shortcut key “S” (for both Windows OS and Mac OS users) to access **Settings**.![Stack Bulk Task Queue_1.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt52b840249455b28a/66cf24a968aa7c0d68a55496/Stack_Bulk_Task_Queue_1.png)
2.  Click the **Bulk Task Queue** tab to access the section.![Stack Bulk Task Queue_2.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt13a9064d72ca2208/66cf2548ec1754e22ec6aa21/Stack_Bulk_Task_Queue_2.png)

The queue provides the following details about each task:

-   **Time**: The date and time when the task was initiated.
-   **Job ID**: The job ID of the action performed.
-   **Task Details**: Type of action performed by the user.
-   **By User**: The name of the user who initiated the bulk operation.
-   **Task Status**: The current status of the task.
-   **Actions**: This column provides options to interact with a specific bulk action.
    
    -   **Open Release**: Navigate directly to the release associated with the bulk action.
    -   **View Details**: A comprehensive list of all entries impacted by this bulk operation, including their entry name, version, language, and content type.
    
    ![Stack Bulk Task Queue_3.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89371a254fd6ac93/66cf2548baa9790657da7177/Stack_Bulk_Task_Queue_3.png)

## Task Status

The Task Status represents the status of the bulk operation. The following are the list of statuses for a bulk task.

-   **Waiting**: The task is in the queue, awaiting processing.
-   **In Queue**: The task is queued and will be processed once the in-progress tasks are completed.
-   **In Progress**: The task is currently being processed.
-   **Partial Complete**: The task has been completed from the CDA side; some operations are still pending on the CMA side.
-   **Failed**: The task processing encountered an error.
-   **Completed**: The bulk action has been fully processed.

## Filter Bulk Task Queue

Use filters to narrow down the tasks in the queue and fetch the data you need.

-   **Time**: Refine your view by selecting specific task statuses.
-   **Users**: Filter tasks performed by specific stack users.

Click **Reset filters** to clear all the applied filters.
