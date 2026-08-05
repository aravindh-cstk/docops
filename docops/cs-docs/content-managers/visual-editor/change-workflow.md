---
title: "[Visual Editor] - Change Workflow"
description: Change the workflow of a web page directly within the Visual Editor page editing interface.
url: https://www.contentstack.com/docs/headless-cms/change-workflow
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: unknown
last_updated: 2026-03-25
---

# [Visual Editor] - Change Workflow

This page explains how to change the workflow of a web page using Contentstack Visual Editor. It is intended for content managers and collaborators who need to assign tasks, track progress, and update workflow stages directly from the page editing interface.

### Change Workflow

[Visual Editor](./about-visual-editor.md) allows you to change the [workflow](../../developers/set-up-workflows-and-publish-rules/about-workflows.md) of a web page directly within the page editing interface. This feature streamlines task assignment, progress tracking, and team collaboration without switching interfaces.

To change the workflow of a web page using Visual Editor, log in to your [Contentstack account](https://www.contentstack.com/login/) and perform the following steps:
- Navigate to your [stack](../../developers/set-up-stack/about-stack.md) and select **Visual Experience**.
- Click **Editor** in the bottom pill menu.
- Use the **URL bar** to open the page for which you want to update the workflow.
- Click the “horizontal ellipses” icon and select **Change Workflow.**
- In the **Change Workflow Details** modal, perform the following steps:Select one or more [entries](../author-content/about-entries.md) and click **Next**.
- Choose the appropriate [Workflow Stage](../../developers/set-up-workflows-and-publish-rules/about-workflow-stages.md).
- Optionally, set the due date using the **Date Picker** tool.
- Assign the stage using one or both of the following dropdowns:**User(s):** Assigns the stage to selected individual users.
- **Role(s):** Assigns the stage to all users associated with the selected roles.

  **Tip:** The assigned workflow appears in the user’s [**Tasks**](../../developers/set-up-workflows-and-publish-rules/about-workflow-tasks.md) section.
- Check **Notify via email** to send email notifications to the assignees.
- Optionally, provide any additional information or instructions in the **Add comment** field.
- Click **Update Workflow** to apply your changes.

The selected entries are updated with the new workflow.

**Note:** Workflow stages can be updated in bulk only if all selected entries share the same workflow and current stage.

## Common questions

**Q: Where do I change a page’s workflow in Visual Editor?**  
A: Click the “horizontal ellipses” icon and select **Change Workflow.**

**Q: Can I assign a workflow stage to both users and roles?**  
A: Yes, you can assign the stage using one or both dropdowns: **User(s)** and **Role(s)**.

**Q: Will assignees be notified automatically?**  
A: Only if you check **Notify via email** to send email notifications to the assignees.

**Q: When can workflow stages be updated in bulk?**  
A: Workflow stages can be updated in bulk only if all selected entries share the same workflow and current stage.