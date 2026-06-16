---
title: "[Set Up Your Project] - Get Started with Workflows"
description: Get Started with Workflows
url: https://www.contentstack.com/docs/developers/set-up-workflows-and-publish-rules/get-started-with-workflows
product: Contentstack
doc_type: getting-started
audience:
  - developers
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Get Started with Workflows

This page explains how to begin using workflows and (optionally) publish rules in a Contentstack stack, and how to view workflow details for entries. It is intended for developers setting up workflows for a stack and should be used after creating workflows/stages and any required publish rules.

## Get Started with Workflows

To start working with [workflows](/docs/developers/set-up-workflows-and-publish-rules/about-workflows) for your [stack](/docs/developers/set-up-stack/about-stack), you need to create:
- **Workflows** (which includes defining stages), and
- **Publish rules** (if required)

After you have [added a workflow](/docs/developers/set-up-workflows-and-publish-rules/add-workflows-and-stages) and [created the publish rules](/docs/developers/set-up-workflows-and-publish-rules/add-a-publish-rule), let’s discuss how to use the workflow.

To see the workflow details, log in to your [contentstack](https://app.contentstack.com/#!/login) account and perform the following steps:
- Go to the Stack and open the entry for which you have enabled the workflow.
- On the right-hand side of the entry page, click on the “Status” icon.
- Under **Workflow Details****,** you will find the current stage of the entry, the list of users to whom the entry stage is assigned, along the due date.

**Publish Rules** are displayed just below **WORKFLOW DETAILS**. However, these rules will be visible only if the rules have been applied to the content type associated with the entries you are viewing.

## Common questions

### Do I need to create publish rules to use workflows?
No. **Publish rules** are required only if needed for your setup; workflows can be used without publish rules.

### Where can I view an entry’s current workflow stage?
On the entry page, click the “Status” icon on the right-hand side and look under **Workflow Details**.

### Why don’t I see Publish Rules under WORKFLOW DETAILS?
These rules will be visible only if the rules have been applied to the content type associated with the entries you are viewing.

### What information is shown in Workflow Details?
It shows the current stage of the entry, the list of users to whom the entry stage is assigned, along the due date.