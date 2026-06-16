---
title: "[Set Up Your Project] - About Workflow Stages"
description: About Workflow Stages
url: https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/about-workflow-stages
product: Set Up Your Project
doc_type: guide
audience:
  - developers
version: v1
last_updated: 2026-03-25
---

# [Set Up Your Project] - About Workflow Stages

This page explains what workflow stages are and how they help teams manage content creation and review. It is intended for developers and team members setting up workflows, and should be used when defining the stages your content entries move through before publishing.

## About Workflow Stages

A workflow lets you define the content creation and review process for your team. The core part of creating a workflow is defining the stages of content creation.

As we know, content flows through different stages before it is published. A workflow stage is nothing but the actual state of your content (entries). For example, if you are defining a workflow, you might want your content to flow through the following stages:

In the above example:
- **First Draft**: Your first stage could be the draft writing stage where the content manager creates the first draft.
- **Review**: Then, a reviewer or an editor will review the draft to make the required changes in the content.
- **Copyedit**: Once the content is reviewed, someone proofreads the content during the copy editing stage.
- **SEO Tags**: The SEO team will then add the SEO terms to increase the visibility of your content on the website in search engines.
- **Complete**: The content is then marked as complete, and is ready for publishing.
- **Approved**: The content is finally approved for publishing.

Once you have added these stages and enabled the workflow, the stages will be visible on every entry page of the corresponding content types of the stack. The workflow helps the content manager know the current stage of the content and control pushing the entry from one stage to another

Whenever a new entry is created, let’s say in the **Draft** stage, the user can work on this stage and push it to the next stage and assign it to a different user. The user can also assign a deadline (due date) for completion of the next task along with any special instructions if needed.

When an entry is assigned to a user, it appears in the **Tasks** notification, as shown in the following screenshot:

While defining workflows, you can also set **Stage transition and access rules** (i.e., only certain users can move to certain stages or edit on certain stages) and assign superusers (to whom stage transition and access rules do not apply), and do a lot more.

We will learn more about creating and using workflows in a later section.

## Common questions

**Q: What is a workflow stage?**  
A: A workflow stage is the actual state of your content (entries).

**Q: Where do workflow stages appear after enabling a workflow?**  
A: The stages will be visible on every entry page of the corresponding content types of the stack.

**Q: Can tasks be assigned when moving an entry to the next stage?**  
A: Yes, the user can push it to the next stage and assign it to a different user, and can also assign a deadline (due date) along with any special instructions if needed.

**Q: Can you restrict who can move or edit entries in certain stages?**  
A: Yes, you can set **Stage transition and access rules** and assign superusers (to whom stage transition and access rules do not apply).