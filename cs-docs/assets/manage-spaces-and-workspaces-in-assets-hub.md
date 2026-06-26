---
title: "[AM2.0] - Manage Spaces and Workspaces in Assets Hub"
description: Manage how spaces and workspaces connect to the current branch in Assets Hub, including viewing, linking, changing, setting default, and unlinking workspaces.
url: https://www.contentstack.com/docs/assets/manage-spaces-and-workspaces-in-assets-hub
product: Contentstack
doc_type: guide
audience:
  - administrators
  - developers
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Manage Spaces and Workspaces in Assets Hub

This page explains how stack admins can manage linked spaces and workspaces for a branch in Assets Hub, including how to view current links, link additional workspaces, change the linked workspace, set a default workspace, and unlink a workspace.

## Manage Spaces and Workspaces in Assets Hub

**Assets Hub** allows stack admins to manage how spaces and workspaces connect to the current branch. Each branch can link to one or more spaces.

## View Linked Workspaces

To view linked workspaces, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

- Navigate to **CMS** through “App Switcher”.
- Open your stack and click **Settings** > **Assets Hub**.
- Under **Linked Workspaces**, the following details are displayed:Space name (read-only)
- Workspace name (read-only)

**Note:** A space can be linked to up to **10 stacks**.

## Link a Workspace

To link an additional workspace:

- Click **+ Link Workspace**.
- Select:Space
- Workspace
- Click **Link Workspace**.

Assets from the selected workspace become available for use in the branch.

## Change Linked Workspace

If a space contains multiple workspaces, you can change the linked workspace for the branch:

- Click the vertical ellipsis beside the workspace.
- Select **Change Linked Workspace**.
- Choose a different workspace.
- Click **Confirm**.

**Warning:** This replaces the current workspace connection and may impact entries referencing assets from the previously linked workspace.

## Set a Workspace as Default

To define where new assets are created by default:

- Click the vertical ellipsis beside the workspace.
- In the dropdown menu, scroll to locate **Set as Default**.
- Click **Confirm**.

The selected workspace becomes the default asset location for that branch. Any new assets added to the stack are added to this workspace by default.

## Unlink a Workspace

To unlink an existing workspace:

- Click the vertical ellipsis beside the workspace.
- In the dropdown menu, scroll to locate **Unlink Workspace**.
- Type **UNLINK** to confirm.
- Click **Unlink**.

**Warning:** Unlinking a workspace removes access to the workspace and all its assets from the branch. Review and ensure no active content depends on those assets before proceeding.

## Common questions

**Q: How many stacks can a space be linked to?**  
A: A space can be linked to up to **10 stacks**.

**Q: What happens after I link a workspace?**  
A: Assets from the selected workspace become available for use in the branch.

**Q: What is the impact of changing the linked workspace?**  
A: This replaces the current workspace connection and may impact entries referencing assets from the previously linked workspace.

**Q: What should I consider before unlinking a workspace?**  
A: Unlinking a workspace removes access to the workspace and all its assets from the branch. Review and ensure no active content depends on those assets before proceeding.