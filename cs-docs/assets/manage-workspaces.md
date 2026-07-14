---
title: "[AM2.0] - Manage Workspaces"
description: Workspace management in Contentstack Assets lets you organize and isolate asset operations within a space.
url: https://www.contentstack.com/docs/assets/manage-workspaces
product: Contentstack Assets
doc_type: guide
audience:
  - developers
  - content-managers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Manage Workspaces

This page explains how to manage workspaces in Contentstack Assets within a space, including viewing details, editing, forking, managing languages, and deleting workspaces. It is intended for users who administer or organize asset operations and need to configure workspace settings and language availability.

## Manage Workspaces

Workspace management in Contentstack Assets lets you organize and isolate asset operations within a space. You can view workspace details, update workspace information, fork workflows, manage languages, and delete workspaces when no longer required.

All workspace actions apply only within the selected space. To view the workspaces within a space, navigate to **Space Settings > Workspaces**.

## View Workspace Details
To view workspace details, click a workspace name to open its details panel.

The details panel displays:
- **System metadata:** Title, UID, Created By, Modified By, Created At, and Modified At.
- **Languages:** Languages enabled for the workspace and their fallback languages.

This view provides a quick summary of workspace configuration and language coverage.

## Edit a Workspace
To update workspace details such as the name and description, perform the following steps:
- Click the vertical ellipsis in the **Actions** column of the workspace and select **Edit Workspace**.
- Update the **Name** or **Description** as required.

  **Note:** The **UID** and **Source Workspace** fields remain read-only after creation.
- Click **Update Workspace**.

## Copy Workspace UID
To copy the workspace UID, perform the following steps:
- Click the vertical ellipsis in the **Actions** column of the workspace.
- Select **Copy UID**.

## Fork a Workspace
Forking creates a new workspace using an existing workspace as the source. The new workspace inherits assets and settings from the source workspace, allowing teams to reuse configurations while making independent changes.

For example, a Spring Campaign workspace already exists. A regional team needs a variation of the same assets for a localized promotion. Forking allows reusing of the campaign setup while enabling region-specific changes.

To fork a workspace, perform the following steps:
- Click the vertical ellipsis in the **Actions** column of the workspace and select **Fork this Workspace**.
- In the **Create a Fork** modal, enter the following details:**Name (required)**
- **UID (required)**
- **Description (optional)**
- Verify the **Source Workspace**.
- Click **Create Fork**.

The new workspace inherits assets and settings from the selected source workspace.

## Manage Workspace Languages
Languages are added globally in **Assets > Settings > Languages** and then selectively enabled for each workspace.

To manage languages for a workspace, perform the following steps:
- Click the vertical ellipsis in the **Actions** column of the workspace and select **Manage Workspace Languages**.
- In the **Manage Workspace Languages** modal, review the languages currently enabled for the workspace.
- Click **+ Add Language**.
- Select one or more languages from the available list. Each language displays its fallback language.

  **Note:** The default language remains locked and cannot be removed.
- Click **Apply** to confirm the selection.
- Click **Save Changes** to add the selected languages to the workspace.

Only languages enabled in a workspace are available for asset localization within that workspace.

**Note:**
- Languages must exist in **Assets > Settings > Languages** before they can be added to a workspace.
- Each workspace can enable a different set of languages based on its requirements.
- Assets support localization only for languages enabled in the active workspace.
- Changes to workspace languages apply only to that workspace and do not affect other workspaces or spaces.

## Delete a Workspace
To delete a workspace, perform the following steps:
- Click the vertical ellipsis in the **Actions** column of the workspace and select **Delete Workspace**.
- Click **Yes, Delete Workspace** to confirm the delete action.

**Warning:** Deleting a workspace permanently removes all its assets, users, and collaborators. This action is irreversible. Deleting a workspace does not affect its source workspace or other workspaces.

Managing workspaces effectively helps teams to ensure clean separation of workstreams, safer experimentation, and scalable asset operations within a space.

## Common questions

**Q: Where do I find the list of workspaces for a space?**  
A: Navigate to **Space Settings > Workspaces**.

**Q: Can I change a workspace UID after creation?**  
A: No. The **UID** field remains read-only after creation.

**Q: Does deleting a workspace affect other workspaces?**  
A: No. Deleting a workspace does not affect its source workspace or other workspaces.

**Q: Why can’t I remove the default language from a workspace?**  
A: The default language remains locked and cannot be removed.