---
title: "Change Workflow"
description: " Learn to change workflow stages in Visual Editor for seamless task coordination, progress tracking, and page editing in Contentstack."
url: /headless-cms/change-workflow
---

# Change Workflow

## Change Workflow

[Visual Editor](/docs/headless-cms/about-visual-editor) allows you to change the [workflow](/docs/headless-cms/about-workflows) of a web page directly within the page editing interface. This feature streamlines task assignment, progress tracking, and team collaboration without switching interfaces.

To change the workflow of a web page using Visual Editor, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:

1.  Navigate to your [stack](/docs/headless-cms/about-stack) and select **Visual Experience**.
2.  Click **Editor** in the bottom pill menu.
3.  Use the **URL bar** to open the page for which you want to update the workflow.
4.  Click the “horizontal ellipses” icon and select **Change Workflow.**
5.  In the **Change Workflow Details** modal, perform the following steps:
    1.  Select one or more [entries](/docs/headless-cms/about-entries) and click **Next**.
    2.  Choose the appropriate [Workflow Stage](/docs/headless-cms/about-workflow-stages).
    3.  Optionally, set the due date using the **Date Picker** tool.
    4.  Assign the stage using one or both of the following dropdowns:
        -   **User(s):** Assigns the stage to selected individual users.
        -   **Role(s):** Assigns the stage to all users associated with the selected roles.
            
            **Tip:** The assigned workflow appears in the user’s [**Tasks**](/docs/headless-cms/about-workflow-tasks) section.
            
    5.  Check **Notify via email** to send email notifications to the assignees.
    6.  Optionally, provide any additional information or instructions in the **Add comment** field.
    7.  Click **Update Workflow** to apply your changes.

![Change_Workflow.gif](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8a4045782bdd2156/6992e8d390d761000803df0f/Change_Workflow.gif)

  
The selected entries are updated with the new workflow.

**Note:**

-   Workflow stages can be updated in bulk only if all selected entries share the same workflow and current stage.
-   Some workflow stages restrict edit access to specific users or roles. Users without edit permissions cannot modify the page but may see an option to **Request Edit Access** within Visual Editor. Once submitted, the request is sent for approval and remains pending until reviewed.
