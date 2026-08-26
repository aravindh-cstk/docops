---
title: "Organization Bulk Task Queue"
description: "Efficiently manage bulk operations in Contentstack with the Bulk Task Queue. Track, filter, and oversee tasks seamlessly for optimal content management."
url: /administration/organization-bulk-task-queue
uid: bltacba0a23cab5507d
---

# Organization Bulk Task Queue

## Organization Bulk Task Queue

The **Bulk Task Queue** section displays the queue of bulk operations that the users of your organization perform. Examples of such operations include:

-   Large [bulk operations](/docs/headless-cms/bulk-publish-entries) such as publish, unpublish, or delete on [entries](/docs/headless-cms/about-entries) or [assets](/docs/headless-cms/about-assets)
-   [Non-localizable](/docs/headless-cms/non-localizable-field) field updates in a [content type](/docs/headless-cms/about-content-types) with a large number of [localized](/docs/headless-cms/localize-an-entry) entries
-   [Release deployment](/docs/headless-cms/deploy-a-release) (publish or unpublish) with a large set of entries and assets

This section acts as a queuing system for each organization, which processes complex bulk operations as and when resources permit.

## Prerequisites

-   [Contentstack account](https://www.contentstack.com/login)
-   Organization [Owner or Admin](/docs/administration/about-administration-roles) permissions

## What You Will Learn

-   How to access the Bulk Task Queue for your organization.

-   What each task status means.

-   How to filter tasks in the queue.


## Access the Bulk Task Queue

To access the bulk task queue for your organization, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:

1.  Select the Organization from the dropdown on the header, and click on the “Org Admin” icon on the left navigation panel.
2.  Click on the **Bulk Task Queue** tab to access the section.![Bulk Task Queue tab in Org Admin settings](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d6681c77abb3cd6/66aa2111c10344e38d068467/Organization_Bulk_Task_Queue_1.png)

You will be able to see two tabs: **Ongoing** (for tasks in queue) and **Completed** (for completed tasks).

Under the **Ongoing**/**Completed** tabs, you will find the following information related to the tasks in queue:

-   **Time**: The date and time on which the task was first performed
-   **Job ID**: The job ID of the action performed
-   **Task Details**: Type of action performed by the user
-   **Stack Name**: Name of the stack on which the bulk operation was performed
-   **By User**: Name of the user who initiated the bulk operation
-   **Task Status**: The current status of the task

## Task Status

A bulk operation can be present in the following specific states when sent to the queuing system of any organization for processing.

-   **Waiting**: The **Waiting** state indicates that the bulk operation has just been sent to the queue and Contentstack has not yet started working on it
-   **In Queue**: The **In Queue** state indicates that the bulk operation has entered the job processing queue. Contentstack will take up such an operation as soon as other operations in the queue have been processed
-   **In Progress**: The **In Progress** state indicates that the bulk operation is being processed by Contentstack
-   **Partially Completed**: The **Partially Completed** state indicates that the bulk operation has been completed from the CDA side and some operations are still to be completed from the CMA side
-   **Failed**: The **Failed** state indicates that the bulk actions has failed
-   **Completed**: The **Completed** state indicates that the bulk action is completely processed

Operations that have been completely processed are automatically moved to the **Completed** tab.

## Filter Bulk Task Queue

You can apply filters to refine the tasks present in the queuing system and display only the required information.

The **Filters** section, located on the left, displays the list of available filters, which includes the following:

-   **Actions**: The **Actions** filter allows you to filter the tasks present in the queue according to the type of bulk operation being performed. You can select one or more of the following available filters:
    -   **Bulk Action Type**: This option allows you to view only the tasks related to large bulk operations performed on entries or assets.
    -   **Content Type Update**: This option allows you to view only the tasks related to non-localizable field updates made in a content type.
    -   **Releases**: This option allows you to view only the tasks related to complex release deployments.
    -   **Branches**: It will show the create/delete actions performed on branches within a stack.
-   **Stacks**: This filter allows you to view only the tasks related to a specific stack in the organization.
-   **Users**: This filter allows you to view only the tasks performed by a specific user of the organization.

Check the filter options that you want to apply.

![Filters panel for the Bulk Task Queue](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte32b742816df870f/66aa255ab3480ccea514bfdf/Organization_Bulk_Task_Queue_2.png)

Click **Reset filters** to clear all the applied filters.
