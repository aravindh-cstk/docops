---
title: "Add Workflows and Stages"
description: "Learn how to create workflows and add stages in Contentstack to manage and control your content approval process."
url: /headless-cms/add-workflows-and-stages
uid: blt38041a58f3cdf5f8
---

# Add Workflows and Stages

## Add Workflows and Stages

You can create [workflows](/docs/headless-cms/about-workflows) in Contentstack to define the content approval and publishing process for your [stack](/docs/headless-cms/about-stack).

Before you get started, note the following:

-   Only the [stack owner](/docs/headless-cms/types-of-roles#owner), [admin](/docs/headless-cms/types-of-roles#admin), and users with the [developer](/docs/headless-cms/types-of-roles#developer) role can create and manage workflows.
-   [Content managers](/docs/headless-cms/types-of-roles#content-manager) and users with [custom roles](/docs/headless-cms/types-of-roles#custom-role) cannot view workflow settings. However, they can use workflows in entries and manage their [assigned tasks](/docs/headless-cms/about-workflow-tasks).
-   You can create multiple workflows within a stack. A [content type](/docs/headless-cms/about-content-types) can be linked to more than one workflow if each workflow is associated with a different branch.

## Create a Workflow

To create a workflow in your stack, log in to your [Contentstack account](https://www.contentstack.com/login) and perform the following steps:

1.  Go to your [stack](/docs/headless-cms/about-stack) and click the “Settings” icon or use the shortcut key “S” (for both Windows and Mac users).
2.  Select **Workflows** (press **Alt + F** on Windows or **Option + F** on Mac).
3.  On the **Workflow Settings** page, open the **Workflows** tab and click **\+ New Workflow**.

## Configure Workflow Details

1.  On the workflow creation page, enter the following details:
    1.  **Workflow name**: Enter a descriptive name for the workflow.
    2.  **Description**: Provide additional information about the workflow.
    3.  **Scope**: Choose whether this workflow applies to all content types or specific ones.
    4.  **Branch(es)**: Select the branches where this workflow applies.
2.  Select one of the following scope options:
    1.  **All Content Types**: Applies the workflow to all content types and entries.
    2.  **Specific Content Types**: Lets you choose one or more content types from the **Select Content Type** dropdown.

![Configure_Workflow_Details.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt139061a49b7bfda0/690905e5ccb21754efc58b01/Configure_Workflow_Details.png)

**Note:** A content type can be associated with more than one workflow if each workflow applies to a distinct branch.

## Add Stages

Define the steps in your content lifecycle by adding stages.

1.  Click **Add a stage**.
2.  Enter a **Stage name** and a **Description**.
3.  Choose a color label to identify the stage. Each stage name and color must be unique.

**Note:** You can add up to **20 stages** in a workflow.

## Define Stage Transitions

Select the stage to which an entry can move next.

-   **All stages**: Allows users to move entries to any other stage.
-   **Specific stage(s)**: Restricts movement to selected stages only.

**Tip:** You can only select stages that already exist. Create additional stages first if none appear in the list.

![Add_Stages_and_Transitions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte08c47cddab9ee2c/69090651e0bf2afe9ea472d5/Add_Stages_and_Transitions.png)

## Set Permissions

1.  Define who can **move entries** from the current stage to the next available stage.

    1.  **All users/roles**: Any user can move entries between stages.
    2.  **Specific user(s)/role(s)**: Restricts movement to selected users or roles.

    **Note:** When specific users are assigned, others cannot move entries to the next stage.

2.  Specify who can **edit entries** at this stage.

    1.  **All users/roles**: All users can edit entries.
    2.  **No users**: Restricts editing for all users.
    3.  **Current stage users**: Allows only users with transition rights to edit entries.

    **Note:** Stack owners, admins, and workflow superusers can always edit entries, regardless of restrictions.


## Prevent Self-Advancement

Enable the **Prevent self-advancement** toggle to add an extra layer of review and accountability.

When enabled:

-   The user who moved an entry into a stage cannot move it to the next one.
-   You must assign at least two unique approvers (users or roles).
-   If only one approver is assigned, an error prompts you to add more.

**Tip:** Use these controls to enforce dual validation and maintain editorial compliance in review workflows.

![Set_Permissions_and_Prevent_Self-Advancement.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt427bf66ff9a7c92e/690906bf531ab077e4281aee/Set_Permissions_and_Prevent_Self-Advancement.png)

## Assign Superusers

Superusers have elevated privileges within a workflow.

1.  Click the **Superusers** dropdown and select one or more users to grant superuser permissions.
2.  They can move entries between any stages and edit or delete entries without restrictions.
3.  You can add multiple users, but not roles.
4.  Organization and stack owners are superusers by default.
5.  Superuser permissions apply only to entries within the associated content types.
6.  Only admins, owners, or developers can edit workflow settings.

## Enable and Save the Workflow

1.  Select the **Enable Workflow** checkbox. Once enabled, the **Workflow** section appears in the right sidebar of entries for all associated content types.
2.  Click **Save** to create and activate the workflow.

![Assign_Superusers_and_Enable_Workflow.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a0aea95f48ad4f7/69090736f373fd91befa9f88/Assign_Superusers_and_Enable_Workflow.png)

## API Reference

To create a workflow and add stages via API, refer to the [Create a workflow](/docs/developers/apis/content-management-api/workflows#create-a-workflow) API request.
