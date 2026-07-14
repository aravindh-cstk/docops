---
title: "[Use Workflows] - Send an Entry for Edit Access Approval"
description: Send an entry for edit access approval in Workflows when stage access rules restrict editing.
url: https://www.contentstack.com/docs/headless-cms/send-an-entry-for-edit-access-approval
product: Contentstack
doc_type: how-to
audience:
  - content-managers
  - editors
version: current
last_updated: 2026-03-26
---

# [Use Workflows] - Send an Entry for Edit Access Approval

This page explains how to request edit access for an entry when Workflows stage access rules restrict who can edit or delete it. Content managers and editors should use this when they need the current workflow stage user(s) to approve edit access for an entry.

## Send an Entry for Edit Access Approval

**Note**: If you aren’t familiar with Workflows, we recommend reading about [Workflows](../../developers/set-up-workflows-and-publish-rules/about-workflows.md) and its related concepts such as [Stages](../../developers/set-up-workflows-and-publish-rules/about-workflow-stages.md) and [Tasks](../../developers/set-up-workflows-and-publish-rules/about-workflow-tasks.md) before proceeding with this article.

If a [stage access rule](../../developers/set-up-workflows-and-publish-rules/add-workflows-and-stages.md#add-stage-transition-and-access-rules) has been set for a specific stage, only the specified users will be able to edit or delete the entry in that stage. Any other users who wish to edit the entry need to request the current workflow stage user(s) to allow them to edit the entry on the current workflow stage.

**Additional Resource**: As you send entries for edit access approval, it would be helpful to understand [how stage access rules work](../../developers/set-up-workflows-and-publish-rules/add-workflows-and-stages.md#add-stage-transition-and-access-rules).

To send your entry for edit access approval, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../../developers/set-up-stack/about-stack.md), and open the entry.
- On the entry page, click on **Request Edit Access** at the bottom of the page.  
![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc471833c629409e9/60de100b9648f1650fe1a505/image.png)The **Request Edit Access** dialog box appears on screen.
- Add comments for the approver in the **Add comments** box and click on **Send Request**.  
![image.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt97f1e65d7e1a42fd/60de104896b48063c70748a6/image.png)The entry will be sent for edit access approval to the users with stage access rights.

Once an edit request has been sent, you will see the current status of the request (pending, approved, rejected) in the **Tasks** section.

## Common questions

### Who can approve my edit access request?
Users with stage access rights for the entry’s current workflow stage can approve the request.

### Where do I see whether my request is pending, approved, or rejected?
You can see the current status of the request (pending, approved, rejected) in the **Tasks** section.

### Why don’t I have the ability to edit or delete an entry in a stage?
If a [stage access rule](../../developers/set-up-workflows-and-publish-rules/add-workflows-and-stages.md#add-stage-transition-and-access-rules) has been set for a specific stage, only the specified users will be able to edit or delete the entry in that stage.

### What should I include in the request?
Add comments for the approver in the **Add comments** box before clicking **Send Request**.