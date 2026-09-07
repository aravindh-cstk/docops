---
title: "Manage Spaces and Workspaces in Assets Hub"
description: "Discover how to manage and link workspaces in Contentstack's Assets Hub. Learn to link, change, or unlink workspaces effectively."
url: /assets/manage-spaces-and-workspaces-in-assets-hub
uid: bltcb076de8e1e9456e
---

# Manage Spaces and Workspaces in Assets Hub

## Manage Spaces and Workspaces in Assets Hub

**Assets Hub** allows stack admins to manage how spaces and workspaces connect to the current branch. Each branch can link to one or more spaces.

## View Linked Workspaces

To view linked workspaces, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **CMS** through “App Switcher”.
2.  Open your stack and click **Settings** > **Assets Hub**.
3.  Under **Linked Workspaces**, the following details are displayed:
    -   Space name (read-only)
    -   Workspace name (read-only)

**Note:** A space can be linked to up to **10 stacks**.

## Link a Workspace

To link an additional workspace:

1.  Click **\+ Link Workspace**.
2.  Select:
    -   Space
    -   Workspace
3.  Click **Link Workspace**.

Assets from the selected workspace become available for use in the branch.

## Change Linked Workspace

If a space contains multiple workspaces, you can change the linked workspace for the branch:

1.  Click the vertical ellipsis beside the workspace.
2.  Select **Change Linked Workspace**.
3.  Choose a different workspace.
4.  Click **Confirm**.

**Warning:** This replaces the current workspace connection and may impact entries referencing assets from the previously linked workspace.

## Set a Workspace as Default

To define where new assets are created by default:

1.  Click the vertical ellipsis beside the workspace.
2.  In the dropdown menu, scroll to locate **Set as Default**.
3.  Click **Confirm**.

The selected workspace becomes the default asset location for that branch. Any new assets added to the stack are added to this workspace by default.

## Unlink a Workspace

To unlink an existing workspace:

1.  Click the vertical ellipsis beside the workspace.
2.  In the dropdown menu, scroll to locate **Unlink Workspace**.
3.  Type **UNLINK** to confirm.
4.  Click **Unlink**.

**Warning:** Unlinking a workspace removes access to the workspace and all its assets from the branch. Review and ensure no active content depends on those assets before proceeding.
