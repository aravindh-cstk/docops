---
title: "Update a Workflow"
description: "Learn how to update an existing workflow in Contentstack to modify its configuration as your content processes evolve."
url: /headless-cms/update-a-workflow
---

# Update a Workflow

## Update a Workflow

You can update an existing workflow in Contentstack to modify its configuration as your content processes evolve. Update workflow details such as the name, description, associated branches, content types, or stage-level rules to match your team’s publishing and review needs.

**Note:** By default, the [Owner](/docs/headless-cms/types-of-roles#owner), [Admin](/docs/headless-cms/types-of-roles#admin), and [Developer](/docs/headless-cms/types-of-roles#developer) roles can update workflows in a stack.

To update a workflow in your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
2.  Select **Workflows** (press **Alt + F** on Windows or **Option + F** on Mac).
3.  Under the **Workflows** tab, click the workflow you want to update from the list of existing workflows.
4.  Make the required changes to your workflow. For example, you can:
    -   Edit the workflow **name** or **description**
    -   Add or remove **branch(es)**
    -   Select or deselect **content types**
    -   Add, edit, or delete **workflow stages**
5.  To edit a workflow stage, click the **Edit** icon next to the stage name and make changes as needed.![edit_a_workflow_stage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4225e0ab377b3e2a/69090838aad66483a5e34b1b/edit_a_workflow_stage.png)
6.  Within the **Stage Transition and Access Rules** section, you can enable the **Prevent self-advancement** toggle to ensure independent review and compliance:
    -   The user who moved an entry into the current stage cannot move it to the next stage.
    -   At least two distinct users or a multi-member role must have permission to advance the entry.
    -   If only one user or a single-member role is assigned, a validation message prompts you to add additional approvers.  
        ![Set_Permissions_and_Prevent_Self-Advancement.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt427bf66ff9a7c92e/690906bf531ab077e4281aee/Set_Permissions_and_Prevent_Self-Advancement.png)
        
        **Tip:** Enable **Prevent self-advancement** for sensitive or compliance-driven workflows to maintain editorial accountability.
        
7.  To remove a workflow stage, click the **Delete** icon.![remove_a_workflow_stage.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt39a02274900bb88d/690908690570b239b699abd0/remove_a_workflow_stage.png)
    
    **Note:** Deleting a stage permanently removes it from the workflow. If any entries are currently in that stage, they will **no longer be associated with a workflow stage** after deletion. You may need to manually move or reassign those entries to another stage to maintain continuity in your workflow process.
    
8.  Click **Save** to apply your updates.

The updated workflow settings automatically apply to entries associated with the relevant content types.

## API Reference

To update a workflow and add stages via API, refer to the [Update a workflow](/docs/developers/apis/content-management-api/workflows#add-or-update-workflow-details) API request.
