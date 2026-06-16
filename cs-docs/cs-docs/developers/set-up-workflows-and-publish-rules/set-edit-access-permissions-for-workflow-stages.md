---
title: "[Set Up Your Project] - Set Edit Access Permissions for Workflow Stages"
description: Set edit access permissions for workflow stages to control which users or roles can edit entries at different stages.
url: https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/set-edit-access-permissions-for-workflow-stages
product: Contentstack
doc_type: how-to
audience:
  - developers
  - admins
version: unknown
last_updated: 2026-03-26
---

# [Set Up Your Project] - Set Edit Access Permissions for Workflow Stages

This page explains how to define which users or roles can edit an entry at different workflow stages in Contentstack. It is intended for developers and administrators configuring workflows and access rules, and should be used when you need to restrict editing permissions based on an entry’s current workflow stage.

## Set Edit Access Permissions for Workflow Stages

You can define which users or roles can edit an entry on different stages of the workflow. This [stage access rule](/docs/developers/set-up-workflows-and-publish-rules/add-workflows-and-stages#add-stage-transition-and-access-rules) ensures that only authorized users modify content when on a particular stage.

For example, you can allow only the users with the “Release Manager” role to edit an entry when on the “Ready for Publish” stage, or only “Editors” can make changes when the entry is on the “Ready for Review” stage.

## Set Edit Access Permissions on a Workflow Stage

To set edit access permissions on an entry that has been moved to a particular Workflow stage, log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your [stack](/docs/developers/set-up-stack/about-stack) and follow the below steps:
- Click the “Settings” icon on the left navigation panel, and select **Workflows**.
- Under the **Workflows** tab, you will see a list of existing workflows, if already created. Click on the workflow you want to update.
- To edit settings for a specific workflow stage, click on the “Edit” icon of that stage.
- Click on **Stage transition and access rules** drop-down to expand.
- Under the **Users/roles who can edit the entry in this stage** section, select whom you want to provide edit access to (for example, **Current stage user(s)**).

****

**Additional Resource**: Learn how to [add stage transition and access rules for each workflow stage](/docs/developers/set-up-workflows-and-publish-rules/add-workflows-and-stages#add-stage-transition-and-access-rules) to create an efficient content lifecycle.
- Once you have made the changes, click on **Done** and then **Save** the workflow changes.

**Note**: Workflow [superusers](/docs/developers/set-up-workflows-and-publish-rules/add-workflows-and-stages#add-workflow-superusers), [organization owners](/docs/owners-and-admins/organization-roles#organization-owner), and stack [owners](/docs/developers/invite-users-and-assign-roles/types-of-roles#owner)/[admins](/docs/developers/invite-users-and-assign-roles/types-of-roles#admin) can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.

## Common questions

### Who can edit entries regardless of stage access rules?
Workflow superusers, organization owners, and stack owners/admins can edit or delete the entry in any workflow stage, irrespective of the stage access rules set for that stage.

### Where do I configure edit access for a workflow stage?
In your stack, go to **Settings** → **Workflows**, open the workflow, edit the stage, and expand **Stage transition and access rules**.

### What does the stage access rule control?
It defines which users or roles can edit an entry when it is on a particular workflow stage.

### Can I restrict editing to a specific role for a specific stage?
Yes, for example you can allow only users with the “Release Manager” role to edit entries on the “Ready for Publish” stage.