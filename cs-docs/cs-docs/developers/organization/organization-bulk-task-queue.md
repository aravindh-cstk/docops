---
title: "[Organization] - Organization Bulk Task Queue"
description: Documentation for the Organization Bulk Task Queue in Contentstack, including task statuses and filtering options.
url: https://www.contentstack.com/docs/developers/organization/organization-bulk-task-queue
product: Contentstack
doc_type: guide
audience:
  - developers
  - organization-admins
version: unknown
last_updated: 2026-03-25
---

# [Organization] - Organization Bulk Task Queue

This page explains the Organization **Bulk Task Queue** in Contentstack, including what types of bulk operations appear there, who can access it, how to view ongoing vs completed tasks, the meaning of each task status, and how to filter the queue. It is intended for Organization Owners/Admins and developers who need to monitor or troubleshoot bulk operations across stacks in an organization.

## Title

[Organization] - Organization Bulk Task Queue

## Url

/developers/organization/organization-bulk-task-queue

## Article content

### Item 1

#### Article section

##### Heading

Organization Bulk Task Queue

##### Content

The **Bulk Task Queue** section displays the queue of bulk operations that the users of your organization perform. Examples of such operations include:
- Large [bulk operations](/docs/content-managers/bulk-operations-on-entries-and-assets) such as publish, unpublish, or delete on [entries](/docs/content-managers/working-with-entries/about-entries) or [assets](/docs/content-managers/working-with-assets/about-assets)
- [Non-localizable](/docs/developers/multilingual-content/non-localizable-field) field updates in a [content type](/docs/developers/create-content-types/about-content-types) with a large number of [localized](/docs/developers/multilingual-content/localize-an-entry) entries
- [Release deployment](/docs/content-managers/create-and-manage-releases/deploy-a-release) (publish or unpublish) with a large set of entries and assets

This section acts as a queuing system for each organization, which processes complex bulk operations as and when resources permit.

To access the bulk task queue for your organization, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Select the Organization from the dropdown on the header, and click on the “Org Admin” icon on the left navigation panel.
- Click on the **Bulk Task Queue** tab to access the section.

**Note**: Only the Organization [Owner](/docs/developers/organization/organization-roles#organization-owner) and [Admins](/docs/developers/organization/organization-roles#organization-admin) can access the “Bulk Task Queue” section.

You will be able to see two tabs: **Ongoing** (for tasks in queue) and **Completed** (for completed tasks).

Under the **Ongoing**/**Completed** tabs, you will find the following information related to the tasks in queue:
- **Time**: The date and time on which the task was first performed
- **Job ID**: The job ID of the action performed
- **Task Details**: Type of action performed by the user
- **Stack Name**: Name of the stack on which the bulk operation was performed
- **By User**: Name of the user who initiated the bulk operation
- **Task Status**: The current status of the task

## Task Status

A bulk operation can be present in the following specific states when sent to the queuing system of any organization for processing.
- **Waiting**: The **Waiting** state indicates that the bulk operation has just been sent to the queue and Contentstack has not yet started working on it
- **In Queue**: The **In Queue** state indicates that the bulk operation has entered the job processing queue. Contentstack will take up such an operation as soon as other operations in the queue have been processed
- **In Progress**: The **In Progress** state indicates that the bulk operation is being processed by Contentstack
- **Partially Completed**: The **Partially Completed** state indicates that the bulk operation has been completed from the CDA side and some operations are still to be completed from the CMA side
- **Failed**: The **Failed** state indicates that the bulk actions has failed
- **Completed**: The **Completed** state indicates that the bulk action is completely processed

Operations that have been completely processed are automatically moved to the **Completed** tab.

## Filter Bulk Task Queue

You can apply filters to refine the tasks present in the queuing system and display only the required information.

The **Filters** section, located on the left, displays the list of available filters, which includes the following:
- **Actions**: The **Actions** filter allows you to filter the tasks present in the queue according to the type of bulk operation being performed. You can select one or more of the following available filters:**Bulk Action Type**: This option allows you to view only the tasks related to large bulk operations performed on entries or assets.
- **Content Type Update**: This option allows you to view only the tasks related to non-localizable field updates made in a content type.
- **Releases**: This option allows you to view only the tasks related to complex release deployments.
- **Branches**: It will show the create/delete actions performed on branches within a stack.
- **Stacks**: This filter allows you to view only the tasks related to a specific stack in the organization.
- **Users**: This filter allows you to view only the tasks performed by a specific user of the organization.

Check the filter options that you want to apply.

Click **Reset filters** to clear all the applied filters.

## Common questions

### Who can access the “Bulk Task Queue” section?
Only the Organization Owner and Admins can access the “Bulk Task Queue” section.

### Where do I find tasks that are finished processing?
Operations that have been completely processed are automatically moved to the **Completed** tab.

### What does “In Queue” mean for a bulk operation?
It indicates that the bulk operation has entered the job processing queue and will be taken up as soon as other operations in the queue have been processed.

### How do I clear all applied filters?
Click **Reset filters** to clear all the applied filters.