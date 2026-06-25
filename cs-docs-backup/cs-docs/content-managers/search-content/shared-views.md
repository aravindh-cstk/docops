---
title: "[Search Content] - Shared Views"
description: Contentstack shared views functionality for collaborating by sharing saved views within a stack.
url: https://www.contentstack.com/docs/headless-cms/shared-views
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - administrators
version: current
last_updated: 2026-03-25
---

# [Search Content] - Shared Views

This page explains how to share and manage saved views in Contentstack so teams can collaborate on consistent filtered content lists. It is intended for Contentstack users who work with Entries or Assets and need to share views with other users or roles, including managing View/Edit permissions.

## Shared Views

Contentstack’s shared views functionality allows users to collaborate by sharing saved views within a stack. Once a view is shared, any modifications made by users with edit access will be visible to all collaborators, ensuring a consistent and up-to-date view for teams. This document outlines how to use and manage shared views effectively.

To share your saved views, log in to your [Contentstack account](https://www.contentstack.com/login/), and follow the steps given below:
- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select the [**Entries**](../author-content/about-entries.md) or [**Assets**](../author-content/about-assets.md) module.
- Within the **Saved Views** tab, you will find all your saved views.**Additional Resource: **Refer to our [Save Your Views](./save-your-views.md) document for more information.
- Click the **vertical ellipsis** next to your saved view and select **Share**.
- In the **Share View** modal, search for and select users or roles to share the view with. Assign one of the following permissions:**View**: Users can view the shared view but cannot update it. However, they can modify and save it as a new view.
- **Edit**: Users can make changes to the view. Any updates they make will be visible to everyone with access.

**Note:** If you have **View** access to a shared view, you cannot grant **Edit** access to other users.
- Click **Manage** to:View users or roles with current access to the view.
- Change access levels (**View** or **Edit**) for users and roles.
- Remove users or roles if they no longer need access.

**Note:** Only the [owner](../../developers/invite-users-and-assign-roles/types-of-roles.md#owner) or users with edit access can modify the access settings.
- After assigning permissions, click **Share**. The selected users or roles will:Receive a notification via the **bell icon**.
- See the shared view in their **Entries** or **Assets** list.

Shared views streamline collaboration by ensuring that team members have access to relevant filtered content. By assigning appropriate permissions, you can control how others interact with the shared view.

## Common questions

### Who can change access settings for a shared view?
Only the owner or users with edit access can modify the access settings.

### What is the difference between View and Edit permissions?
View lets users view the shared view but not update it (they can modify and save it as a new view). Edit lets users make changes to the view, and updates are visible to everyone with access.

### Can a user with View access grant Edit access to others?
No. If you have View access to a shared view, you cannot grant Edit access to other users.

### Where will collaborators see a shared view?
They will see the shared view in their Entries or Assets list and receive a notification via the bell icon.