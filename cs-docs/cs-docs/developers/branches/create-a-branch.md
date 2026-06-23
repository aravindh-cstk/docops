---
title: "[Set Up Your Project] - Create a Branch"
description: Documentation for creating a branch in Contentstack and related API references.
url: https://www.contentstack.com/docs/headless-cms/create-a-branch
product: Contentstack
doc_type: how-to
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Create a Branch

This page explains how to create a branch in a Contentstack stack, including who can create branches, what a child branch inherits, and where to find related API references. It is intended for stack owners, admins, developers, and content managers who need to work on isolated copies of stack content.

## Create a Branch

You can create a [branch](./about-branches.md) off of your stack's main (default) branch. The child branch you create inherits all of the content types, entries, assets, languages, extensions, releases, etc. that were part of the main branch as it is.

**Note:** Only stack owners, admins, and developers can create a new branch.

Both developers and content managers can make changes to different copies (branches) of the same stack content in isolation.

**Additional Resource:** For all child branches created subsequently, you can select any other branch apart from main to act as source branch.

To create a branch, log in to your [Contentstack account](https://www.contentstack.com/login/), go to your stack, and perform the following steps:
- Click the “Settings” icon on the left navigation panel, and select **Branches**.  
  **Note:** The main branch is the default branch for any stack.
- Click on **+ New Branch**.
- The **Create New Branch** form appears for you to add the following details:  
  **Branch ID:** Enter a unique ID for the branch, such as “staging” or “development”.
- **Source:** Select a branch from the dropdown from which this new branch should inherit data.

**Note:** By default, the main branch will be the source branch for the first child branch you create.
- Finally, click **Create** to save your branch.

**Note:** At a time only **one** branch can be created across an organization. The creation actions triggered for any other branches will remain in the “in-queue” state till the current branch creation action is completed. You can view the status of these actions within the [organization's bulk task queue](../organization/organization-bulk-task-queue.md).

## API Reference

To perform operations related to Branches within your stack via API, refer to the following documents:
- [Branches collection](../../../api-docs/api-detail/content-management-api.md#branches) in our Content Management API
- [Branches GET requests](../../../api-docs/api-detail/content-delivery-api.md#branches) in our Content Delivery API
- [GraphQL API](../../../api-docs/api-detail/graphql-content-delivery-api.md)

## Common questions

### Who can create a new branch?
Only stack owners, admins, and developers can create a new branch.

### What does a child branch inherit from the main branch?
The child branch inherits all of the content types, entries, assets, languages, extensions, releases, etc. that were part of the main branch as it is.

### Can I use a branch other than main as the source branch?
For all child branches created subsequently, you can select any other branch apart from main to act as source branch.

### Why is my branch creation action in an “in-queue” state?
At a time only **one** branch can be created across an organization; other branch creation actions remain in the “in-queue” state till the current branch creation action is completed.