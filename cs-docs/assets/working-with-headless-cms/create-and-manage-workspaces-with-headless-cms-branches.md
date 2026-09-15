---
title: "Create and Manage Workspaces with Headless CMS Branches"
description: "Learn how to create branches in Contentstack Headless CMS for isolated development, ensuring changes don’t impact the default branch."
url: /assets/create-and-manage-workspaces-with-headless-cms-branches
uid: blt21405574792b4bfa
---

# Create and Manage Workspaces with Headless CMS Branches

## Create and Manage Workspaces with Headless CMS Branches

In Contentstack Headless CMS, branches create isolated copies of a stack so teams can develop and validate changes without impacting the main (default) branch. A new child branch inherits the stack configuration and content from its source branch at the time of creation, including content types, entries, languages, extensions, releases, and linked workspaces.

**Note:**

-   Only stack owners, admins, and developers can create branches.
-   A branch can be created from the main or from any other branch (for subsequent branches).
-   Only one branch creation operation can run at a time per organization. Additional branch creation requests remain in the queue until the current operation completes. Status is available in the organization’s bulk task queue.

To create a new branch, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:

1.  Navigate to **CMS** through “App Switcher”.
2.  Open your stack and click **Settings** > **Branches**.
3.  Click **\+ New Branch**.
4.  In **Create New Branch**, enter:
    -   **Branch ID:** Enter a unique ID (for example, staging or dev).
    -   **Source Branch:** Select the branch that the new branch should inherit from.

        **Note:** For the first child branch, main is typically selected by default.

        The spaces and workspaces linked with the source branch appear in the **Workspace setup** section.

5.  For each linked workspace, choose one of the following:
    -   **Link existing workspace:** Select this to keep the branch connected to the same workspace as the source branch.
    -   **Fork and link workspace:** Select this to create a new workspace copy for the new branch.
6.  Click **Create** to initiate the branch creation process.
7.  Switch to the new branch using the branch selector.
8.  Go to **Settings** > **Assets Hub**.
9.  Verify linked workspaces:
    -   Workspaces linked as-is appear unchanged.
    -   Forked workspaces appear as newly linked workspaces (e.g., test\_1 if the workspace name before forking was test).

This setup ensures branch-level isolation in the stack and workspace-level isolation in assets when required.
