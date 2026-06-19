---
title: "[Use Workflows] - Revoke Edit Access for an Entry"
description: Instructions for revoking edit access for users on an entry in a specific workflow stage.
url: https://www.contentstack.com/docs/headless-cms/revoke-edit-access-for-an-entry
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - administrators
version: latest
last_updated: 2026-03-26
---

# [Use Workflows] - Revoke Edit Access for an Entry

This page explains how users or roles with workflow stage transition rights can revoke other users’ edit access for an entry in the current workflow stage. Content managers and administrators should use this when they need to prevent further changes to finalized content during a workflow stage.

## Revoke Edit Access for an Entry

**Note**: If you are not familiar with Workflow and its related concepts, we recommend you to check out these articles before you start working with them: [Workflow](/docs/developers/set-up-workflows-and-publish-rules/about-workflows), [Workflow Stages](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-stages), and [Tasks](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-tasks).

Users or roles with workflow stage transition rights over an entry can also revoke edit access for other users who can edit the entry in the current workflow stage. This helps eliminate the possibility of unwanted modifications to the entry.

For example, a user with the “Editor” role can grant a content manager edit access over the entry when on the “Ready for Review” stage. The content manager then incorporates the changes suggested by the editor in the entry. Once all changes have been made, the editor can revoke edit access for the content manager over the “Ready for Review” stage to avoid any further modifications to the finalized content.

To revoke edit access for other users who can edit an entry in a particular workflow stage, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:

- Go to your [stack](/docs/developers/set-up-stack/about-stack), and open the entry.
- On the entry page, go to the **Workflow Details** section under the **Status** panel on the right. The current workflow stage of the entry and its color label appear under this section.
- Further below, you will also see a section that displays the **Users to whom edit access is granted** over the current workflow stage. Click on the “**x**” icon beside a user name to revoke edit access for that user.
- When more than four users are able to edit the entry over the current workflow stage, click on **View All** to view the entire list of users.
- In the **All Other users** dialog box that appears on screen, you can click on the “**x**” icon beside a user name to revoke those users’ edit access rights over the entry.
- Once done, click on **Close**.

## Common questions

### Who can revoke edit access for an entry in a workflow stage?
Users or roles with workflow stage transition rights over an entry can revoke edit access for other users who can edit the entry in the current workflow stage.

### Where do I revoke a user’s edit access on an entry?
On the entry page, in the **Workflow Details** section under the **Status** panel, use the “**x**” icon beside a user name in the **Users to whom edit access is granted** list.

### What should I do if I don’t see the user I want to revoke in the list?
When more than four users are able to edit the entry over the current workflow stage, click on **View All** to view the entire list of users, then revoke access from the **All Other users** dialog box.

### Why would I revoke edit access after changes are made?
Revoking edit access helps eliminate the possibility of unwanted modifications to the entry and avoids any further modifications to the finalized content.