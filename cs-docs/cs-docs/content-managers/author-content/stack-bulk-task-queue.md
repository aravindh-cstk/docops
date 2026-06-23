---
title: "[Author Content] - Stack Bulk Task Queue"
description: The Bulk Task Queue displays a list of bulk operations performed within a specific stack.
url: https://www.contentstack.com/docs/headless-cms/stack-bulk-task-queue
product: Contentstack
doc_type: guide
audience:
  - content-managers
  - authors
version: unknown
last_updated: 2026-03-25
---

# [Author Content] - Stack Bulk Task Queue

This page explains how to access and use the Bulk Task Queue in a Contentstack stack, including what details are shown for each bulk task, the meaning of each task status, and how to filter the queue. It is intended for Contentstack content managers and authors who need to monitor or review bulk operations performed within a stack.

## Stack Bulk Task Queue

The Bulk Task Queue displays a list of bulk operations performed within a specific stack.

To access the bulk task queue for your organization, log in to your [Contentstack account](https://www.contentstack.com/login), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md) and click the “Settings” icon on the left navigation panel. You can also use the shortcut key “S” (for both Windows OS and Mac OS users) to access **Settings**.
- Click the **Bulk Task Queue** tab to access the section.

The queue provides the following details about each task:
- **Time**: The date and time when the task was initiated.
- **Job ID**: The job ID of the action performed.
- **Task Details**: Type of action performed by the user.
- **By User**: The name of the user who initiated the bulk operation.
- **Task Status**: The current status of the task.
- **Actions**: This column provides options to interact with a specific bulk action.  
  **Open Release**: Navigate directly to the release associated with the bulk action.
- **View Details**: A comprehensive list of all entries impacted by this bulk operation, including their entry name, version, language, and content type.

## Task Status

The Task Status represents the status of the bulk operation. The following are the list of statuses for a bulk task.
- **Waiting**: The task is in the queue, awaiting processing.
- **In Queue**: The task is queued and will be processed once the in-progress tasks are completed.
- **In Progress**: The task is currently being processed.
- **Partial Complete**: The task has been completed from the CDA side; some operations are still pending on the CMA side.
- **Failed**: The task processing encountered an error.
- **Completed**: The bulk action has been fully processed.

## Filter Bulk Task Queue

Use filters to narrow down the tasks in the queue and fetch the data you need.
- **Time**: Refine your view by selecting specific task statuses.
- **Users**: Filter tasks performed by specific stack users.

Click **Reset filters** to clear all the applied filters.

## Common questions

### Where do I find the Bulk Task Queue in a stack?
Go to your stack, open **Settings** (or press “S”), and click the **Bulk Task Queue** tab.

### What does “Partial Complete” mean?
**Partial Complete** means the task has been completed from the CDA side; some operations are still pending on the CMA side.

### What information can I see for each bulk task?
You can see **Time**, **Job ID**, **Task Details**, **By User**, **Task Status**, **Actions** (including **Open Release**), and **View Details**.

### How do I clear applied filters in the Bulk Task Queue?
Click **Reset filters** to clear all the applied filters.