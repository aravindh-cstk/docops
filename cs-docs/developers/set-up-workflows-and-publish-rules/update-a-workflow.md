---
title: "[Workflows] - Update a Workflow"
description: How to update an existing workflow in Contentstack, including workflow details, branches, content types, stages, and stage-level rules.
url: https://www.contentstack.com/docs/headless-cms/update-a-workflow
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-25
---

# [Workflows] - Update a Workflow

This page explains how to update an existing workflow in Contentstack, including editing workflow details, managing branches and content types, and adjusting workflow stages and stage transition rules. It is intended for stack users (such as Owners, Admins, and Developers) who manage workflow configuration and should be used when your content review and publishing process changes.

## Update a Workflow

You can update an existing workflow in Contentstack to modify its configuration as your content processes evolve. Update workflow details such as the name, description, associated branches, content types, or stage-level rules to match your team’s publishing and review needs.

**Note:** By default, the [Owner](../invite-users-and-assign-roles/types-of-roles.md#owner), [Admin](../invite-users-and-assign-roles/types-of-roles.md#admin), and [Developer](../invite-users-and-assign-roles/types-of-roles.md#developer) roles can update workflows in a stack.

To update a workflow in your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
- Select **Workflows** (press **Alt + F** on Windows or **Option + F** on Mac).
- Under the **Workflows** tab, click the workflow you want to update from the list of existing workflows.
- Make the required changes to your workflow. For example, you can:Edit the workflow **name** or **description**
- Add or remove **branch(es)**
- Select or deselect **content types**
- Add, edit, or delete **workflow stages**
- To edit a workflow stage, click the **Edit** icon next to the stage name and make changes as needed.
- Within the **Stage Transition and Access Rules** section, you can enable the **Prevent self-advancement** toggle to ensure independent review and compliance:The user who moved an entry into the current stage cannot move it to the next stage.
- At least two distinct users or a multi-member role must have permission to advance the entry.
- If only one user or a single-member role is assigned, a validation message prompts you to add additional approvers.
**Tip:** Enable **Prevent self-advancement** for sensitive or compliance-driven workflows to maintain editorial accountability.
- To remove a workflow stage, click the **Delete** icon.**Note:** Deleting a stage permanently removes it from the workflow. If any entries are currently in that stage, they will **no longer be associated with a workflow stage** after deletion. You may need to manually move or reassign those entries to another stage to maintain continuity in your workflow process.
- Click **Save** to apply your updates.

The updated workflow settings automatically apply to entries associated with the relevant content types.

## API Reference

To update a workflow and add stages via API, refer to the [Update a workflow](../../../api-docs/api-detail/content-management-api.md#add-or-update-workflow-details) API request.

## Common questions

### Who can update workflows in a stack by default?
By default, the Owner, Admin, and Developer roles can update workflows in a stack.

### What happens if I delete a workflow stage that has entries in it?
Deleting a stage permanently removes it from the workflow, and any entries currently in that stage will no longer be associated with a workflow stage after deletion.

### When should I enable “Prevent self-advancement”?
Enable **Prevent self-advancement** for sensitive or compliance-driven workflows to maintain editorial accountability and ensure independent review.

### Do updated workflow settings apply automatically to existing entries?
The updated workflow settings automatically apply to entries associated with the relevant content types.

<!-- filename: workflows-update-a-workflow.md -->