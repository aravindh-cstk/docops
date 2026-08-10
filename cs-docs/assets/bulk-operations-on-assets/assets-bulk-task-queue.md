---
title: Assets Bulk Task Queue
description: The Bulk Task Queue displays a list of bulk operations performed within a specific space.
url: https://www.contentstack.com/docs/assets/assets-bulk-task-queue
product: Contentstack
doc_type: guide
audience:
  - developers
  - content-managers
version: current
last_updated: 2026-06-09
---

# Assets Bulk Task Queue

This page explains how to access and use the Assets Bulk Task Queue in Contentstack to track bulk asset operations, review task details, and filter tasks by status, user, or date range. It is intended for users who run bulk actions on assets and need to monitor job progress and outcomes within a space.

Assets Bulk Task Queue

The Bulk Task Queue displays a list of bulk operations performed within a specific space. When you run a bulk action on assets, that is, when you select multiple assets and perform a bulk operation on them, Contentstack processes the action as a background job and records it in this queue. The queue gives you a single place to track each job's progress, confirm completion, and identify any assets that failed to process.

To access the **Bulk Task Queue** for a space, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps below:
- Open **Assets** and select the space you want to review.
- Click **Space Settings** in the top navigation panel.
- Click the **Bulk Task Queue** tab to open the queue.

The queue provides the following details about each task:
- **Time**: The date and time when the task was initiated.
- **Job ID**: The unique identifier of the bulk job.
- **Task Details**: The type of bulk action performed, such as **Bulk Delete**.
- **Initiated By**: The name of the user who started the bulk operation. System-generated jobs display as system.
- **Task Status**: The current status of the task.
- **Actions**: This column provides options to interact with a specific bulk action.
- **View Details**: Open a side panel that lists every asset included in the bulk operation, along with each asset's title, type, locale, and any errors recorded during processing.

## Task Status

The Task Status represents the state of the bulk operation. The following statuses apply to a bulk task:
- **Waiting**: The task is in the queue, awaiting processing.
- **In Queue**: The task is queued and is processed once the in-progress tasks are complete.
- **In Progress**: The task is currently being processed.
- **Partially Completed**: The task finished, but one or more assets in the job were skipped or failed.
- **Completed**: The bulk action has been fully processed.
- **Failed**: The task processing encountered an error.

## Filter the Bulk Task Queue

Use filters to narrow down the tasks in the queue and find the data you need.
- **Status**: Show only tasks with a specific status, such as Failed or Completed.
- **Users**: Show tasks initiated by specific users.
- **Date range**: Show tasks initiated within a selected time period.

To clear all applied filters, click **Reset Filters**.

## Common questions

### Where do I find the Bulk Task Queue for assets?
Open **Assets**, select the space, go to **Space Settings**, and click the **Bulk Task Queue** tab.

### What does “Partially Completed” mean?
It means the task finished, but one or more assets in the job were skipped or failed.

### How can I view which assets were included in a bulk job?
Use **View Details** to open a side panel listing every asset included in the bulk operation along with any errors recorded during processing.

### How do I remove all filters applied to the queue?
Click **Reset Filters**.