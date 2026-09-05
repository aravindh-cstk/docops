---
title: "Set Edit Access Permissions for Workflow Stages"
description: "Ensure that only authorized users can modify content. With Contentstack, you can define which users can edit an entry on any particular stage of the workflow."
url: /headless-cms/set-edit-access-permissions-for-workflow-stages
uid: blt5753dcf866c9cac3
---

# Set Edit Access Permissions for Workflow Stages

## Set Edit Access Permissions for Workflow Stages

You can define which users or roles can edit an entry on different stages of the workflow. This [stage access rule](/docs/headless-cms/add-workflows-and-stages#add-stage-transition-and-access-rules) ensures that only authorized users modify content when on a particular stage.

For example, you can allow only the users with the “Release Manager” role to edit an entry when on the “Ready for Publish” stage, or only “Editors” can make changes when the entry is on the “Ready for Review” stage.

## Set Edit Access Permissions on a Workflow Stage

To set edit access permissions on an entry that has been moved to a particular Workflow stage, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your [stack](/docs/headless-cms/about-stack) and follow the below steps:

1.  Click the “Settings” icon, and select **Workflows**.
2.  Under the **Workflows** tab, you will see a list of existing workflows, if already created. Click on the workflow you want to update.
3.  To edit settings for a specific workflow stage, click on the “Edit” icon of that stage.![Set_Edit_Access_Permissions_for_Workflow_Stages_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltf9d484e2251c7770/60c0c5cf3fb413770446f6f1/Set_Edit_Access_Permissions_for_Workflow_Stages_1_highlighted.png)  

4.  Click on **Stage transition and access rules** drop-down to expand.
5.  Under the **Users/roles who can edit the entry in this stage** section, select whom you want to provide edit access to (for example, **Current stage user(s)**). ![Set_Edit_Access_Permissions_for_Workflow_Stages_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt40f8dee2511cb286/60c0c5d7ff4b120facb60cda/Set_Edit_Access_Permissions_for_Workflow_Stages_2_highlighted.png)

    **Additional Resource:** Learn how to [add stage transition and access rules for each workflow stage](/docs/headless-cms/add-workflows-and-stages#add-stage-transition-and-access-rules) to create an efficient content lifecycle.

6.  Once you have made the changes, click on **Done** and then **Save** the workflow changes.

**Note:** Workflow [superusers](/docs/headless-cms/add-workflows-and-stages#add-workflow-superusers), [organization owners](/docs/administration/about-administration-roles#organization-owner), and stack [owners](/docs/headless-cms/types-of-roles#owner)/[admins](/docs/headless-cms/types-of-roles#admin) can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.
