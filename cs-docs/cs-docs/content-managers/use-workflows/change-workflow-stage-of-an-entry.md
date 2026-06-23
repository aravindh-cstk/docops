---
title: "[Author Content] - Change Workflow Stage of an Entry"
description: "How to change the workflow stage of an entry, assign users or roles, set due dates, and notify assignees."
url: https://www.contentstack.com/docs/headless-cms/change-workflow-stage-of-an-entry
product: "Author Content"
doc_type: "how-to"
audience:
  - content-managers
  - editors
  - reviewers
version: "current"
last_updated: 2026-03-26
---

# [Author Content] - Change Workflow Stage of an Entry

This page explains how to change an entry’s workflow stage, assign the next stage to users or roles, optionally set a due date, and notify assignees. Content managers and editors should use this when moving an entry from one workflow stage to another during the editorial process.

## Change Workflow Stage of an Entry

Once you are done working on a particular stage of an entry (e.g., Draft), you can change the stage of the entry (e.g., Ready for Review) and assign a user to work on the next stage. You can also add a due date for the next stage. Let’s look at how it’s done.
- On the entry page, go to the **Workflow Details** section on the right side panel. You will see the current stage of the entry, along with the stage’s color label as shown below:
- Click on the **Change** link located beside the stage name.
- This will open up a new window where you can make changes to the Workflow Stage of the entry as shown below:
- Under **Set Workflow Stage**, select the stage that you want to set for this entry.
- Set a **Due Date** for this new stage by using the date picker tool.
- Assign this stage to one or more users of your stack. To assign it to a user, click the **User(s)** field under **Assign to**, and select the user(s) from the list. If you can see a **Role(s)** field, you can assign the stage to a role.
- You can also choose to send a notification email to the assignee by selecting the **Notify via Email** field.
- Lastly, add any comments in the **Add Comments** field. A comment could be a short description or guidelines to the assignee on what needs to be done in the next stage.
- Click on **Update** to update the Workflow Stage of the entry.

As soon as an entry stage is assigned to a user, it is added as a new task in the **Tasks** section of the assignee. Learn more about [Tasks](../../developers/set-up-workflows-and-publish-rules/about-workflow-tasks.md) later in the document.

## Common questions

### Can I assign the next workflow stage to more than one user?
Yes. You can assign this stage to one or more users of your stack by selecting multiple user(s) in the **User(s)** field under **Assign to**.

### Can I assign a workflow stage to a role instead of a specific user?
Yes. If you can see a **Role(s)** field, you can assign the stage to a role.

### Will the assignee be notified automatically when I change the stage?
You can choose to send a notification email to the assignee by selecting the **Notify via Email** field.

### What happens after I assign a stage to a user?
As soon as an entry stage is assigned to a user, it is added as a new task in the **Tasks** section of the assignee.