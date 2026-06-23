---
title: "[Use Workflows] - Change Entry Workflow Stage"
description: How to change the workflow stage of an entry in Contentstack, including setting due dates, assigning users/roles, and adding comments; also includes the related API reference.
url: https://www.contentstack.com/docs/headless-cms/change-entry-workflow-stage
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - developers
version: current
last_updated: 2026-03-25
---

# [Use Workflows] - Change Entry Workflow Stage

This page explains how to change an entry’s workflow stage in Contentstack, including assigning the next stage to users or roles and setting due dates. Content managers should use this when moving content through workflow stages (for example, from Draft to Ready for Review), and developers can reference the API link to perform the same action programmatically.

## Change Entry Workflow Stage

A [workflow](../../developers/set-up-workflows-and-publish-rules/about-workflows.md) lets you manage the [stages](../../developers/set-up-workflows-and-publish-rules/about-workflow-stages.md) through which your content will move in the content creation process.

Once you are done working on an entry at a particular stage (e.g., “Draft”), you can change its workflow stage (e.g., “Ready for Review”), assign a user to work on the next stage, and even add a due date if needed.

To change the workflow stage of an [entry](../author-content/about-entries.md), log in to your [Contentstack account](https://app.contentstack.com/#!/login), go to your [stack](../../developers/set-up-stack/about-stack.md), and perform the following steps:
- Open the entry workflow stage of which you want to update.
- On the entry page, go to the **Workflow Details** section under the **Status** panel on the right. You will see the current stage of the entry, along with the stage’s color label as shown below:
- Click on the **Change **link located beside the workflow stage’s name. This will open the **Entry Workflow Settings** section with the following sections:**Set Workflow Stage**: Select the next stage you want to set for this entry.
- **Set Due Date**: Select the due date for the next stage via the date picker tool.
- **Assign to**: Select the** User(s)** from your stack to whom you want to assign the next stage. Also, you can select **Role(s) **to assign the stage to a particular role. If you want to send an email notification to the assignee, check the **Notify via Email** box.
- **Add Comment**: Add any comment if you want to send a short description or guidelines to the assignee on what needs to be done in the next stage.
- Finally, click on **Update**.

As soon as an entry stage is assigned to a user, it is added as a new task in the [Tasks](../../developers/set-up-workflows-and-publish-rules/about-workflow-tasks.md) section of the assignee.

**Additional Resources**: You can get familiar with the [workflow use cases](../../developers/set-up-workflows-and-publish-rules/workflows-use-cases.md) to learn how to efficiently work with the workflows. Also, you can check out the [Limitations](../../developers/set-up-workflows-and-publish-rules/workflows-limitations.md) and [FAQs](/docs/faqs/#workflows-faqs) section.

## API Reference

To change the workflow stage of an entry via API, refer to the [Set entry workflow stage](../../../api-docs/api-detail/content-management-api.md#set-entry-workflow-stage) API request.

## Common questions

### Can I assign the next workflow stage to a role instead of specific users?
Yes. In the **Assign to** section, you can select **Role(s) **to assign the stage to a particular role.

### Can I set a due date when changing an entry’s workflow stage?
Yes. Use **Set Due Date** to select the due date for the next stage via the date picker tool.

### Will the assignee be notified when I change the workflow stage?
If you want to send an email notification to the assignee, check the **Notify via Email** box.

### Where can the assignee see the newly assigned stage?
As soon as an entry stage is assigned to a user, it is added as a new task in the [Tasks](../../developers/set-up-workflows-and-publish-rules/about-workflow-tasks.md) section of the assignee.