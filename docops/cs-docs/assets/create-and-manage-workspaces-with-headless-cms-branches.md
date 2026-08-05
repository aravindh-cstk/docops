---
title: "[AM2.0] - Create and Manage Workspaces with Headless CMS Branches"
description: Create and manage workspaces with Headless CMS branches in Contentstack Headless CMS.
url: https://www.contentstack.com/docs/assets/create-and-manage-workspaces-with-headless-cms-branches
product: Contentstack
doc_type: article
audience:
  - developers
  - admins
version: AM2.0
last_updated: 2026-03-25
---

# [AM2.0] - Create and Manage Workspaces with Headless CMS Branches

This page explains how branches work in Contentstack Headless CMS and how to create a new branch while choosing whether to link existing workspaces or fork and link new workspace copies. It is intended for stack owners, admins, and developers who need isolated environments for development and validation without impacting the main branch.

## Create and Manage Workspaces with Headless CMS Branches

In Contentstack Headless CMS, branches create isolated copies of a stack so teams can develop and validate changes without impacting the main (default) branch. A new child branch inherits the stack configuration and content from its source branch at the time of creation, including content types, entries, languages, extensions, releases, and linked workspaces.

**Note:**
- Only stack owners, admins, and developers can create branches.
- A branch can be created from the main or from any other branch (for subsequent branches).
- Only one branch creation operation can run at a time per organization. Additional branch creation requests remain in the queue until the current operation completes. Status is available in the organization’s bulk task queue.

To create a new branch, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the steps given below:
- Navigate to **CMS** through “App Switcher”.
- Open your stack and click **Settings** > **Branches**.
- Click **+ New Branch**.
- In **Create New Branch**, enter:**Branch ID:** Enter a unique ID (for example, staging or dev).
- **Source Branch:** Select the branch that the new branch should inherit from.**Note:** For the first child branch, `main` is typically selected by default.

The spaces and workspaces linked with the source branch appear in the **Workspace setup** section.
- For each linked workspace, choose one of the following:**Link existing workspace:** Select this to keep the branch connected to the same workspace as the source branch.
- **Fork and link workspace:** Select this to create a new workspace copy for the new branch.
- Click **Create** to initiate the branch creation process.
- Switch to the new branch using the branch selector.
- Go to **Settings** > **Assets Hub**.
- Verify linked workspaces:Workspaces linked as-is appear unchanged.
- Forked workspaces appear as newly linked workspaces (e.g., `test_1` if the workspace name before forking was `test`).

This setup ensures branch-level isolation in the stack and workspace-level isolation in assets when required.

## Common questions

**Q: Who can create branches in Contentstack Headless CMS?**  
A: Only stack owners, admins, and developers can create branches.

**Q: Can I create a branch from something other than `main`?**  
A: Yes, a branch can be created from the main or from any other branch (for subsequent branches).

**Q: What happens if multiple branch creation requests are submitted in the same organization?**  
A: Only one branch creation operation can run at a time per organization; additional requests remain in the queue until the current operation completes, and status is available in the organization’s bulk task queue.

**Q: How do I confirm whether a workspace was linked or forked for a branch?**  
A: Go to **Settings** > **Assets Hub** and verify linked workspaces; linked workspaces appear unchanged, while forked workspaces appear as newly linked workspaces (e.g., `test_1` if the workspace name before forking was `test`).