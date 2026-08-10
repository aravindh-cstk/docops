---
title: "Change Entry Workflow Stage"
description: "Change Entry Workflow Stage"
url: /headless-cms/change-entry-workflow-stage
---

# Change Entry Workflow Stage

## Change Entry Workflow Stage

A [workflow](/docs/headless-cms/about-workflows) lets you manage the [stages](/docs/headless-cms/about-workflow-stages) through which your content will move in the content creation process.

Once you are done working on an entry at a particular stage (e.g., “Draft”), you can change its workflow stage (e.g., “Ready for Review”), assign a user to work on the next stage, and even add a due date if needed.

To change the workflow stage of an [entry](/docs/headless-cms/about-entries), log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your [stack](https://www.contentstack.com/docs/headless-cms/about-stack/), and perform the following steps:

1.  Open the entry workflow stage of which you want to update.
2.  On the entry page, go to the **Workflow Details** section under the **Status** panel on the right. You will see the current stage of the entry, along with the stage’s color label as shown below:![Change_Entry_Workflow_Stage_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltceac930908c2c68b/60c0c50d2d47ce78c28ad0eb/Change_Entry_Workflow_Stage_1_highlighted.png)
3.  Click on the **Change** link located beside the workflow stage’s name. This will open the **Entry Workflow Settings** section with the following sections:
    1.  **Set Workflow Stage**: Select the next stage you want to set for this entry.
    2.  **Set Due Date**: Select the due date for the next stage via the date picker tool.
    3.  **Assign to**: Select the **User(s)** from your stack to whom you want to assign the next stage. Also, you can select **Role(s)** to assign the stage to a particular role. If you want to send an email notification to the assignee, check the **Notify via Email** box.
    4.  **Add Comment**: Add any comment if you want to send a short description or guidelines to the assignee on what needs to be done in the next stage.
4.  Finally, click on **Update**.

As soon as an entry stage is assigned to a user, it is added as a new task in the [Tasks](/docs/headless-cms/about-workflow-tasks) section of the assignee.

**Additional Resource:** You can get familiar with the [workflow use cases](/docs/headless-cms/workflows-use-cases) to learn how to efficiently work with the workflows. Also, you can check out the [Limitations](/docs/headless-cms/workflows-limitations) and [FAQs](/docs/faqs/#workflows-faqs) section.

## API Reference

To change the workflow stage of an entry via API, refer to the [Set entry workflow stage](/docs/developers/apis/content-management-api/workflows#set-entry-workflow-stage) API request.
