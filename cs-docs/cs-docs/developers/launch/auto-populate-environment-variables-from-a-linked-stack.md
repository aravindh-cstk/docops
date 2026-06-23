---
title: "[Contentstack Launch] - Auto-populate Environment Variables from a Linked Stack"
description: Auto-populate Environment Variables in Contentstack Launch by linking a stack to your project and importing stack variables.
url: https://www.contentstack.com/docs/launch/auto-populate-environment-variables-from-a-linked-stack
product: Contentstack Launch
doc_type: how-to
audience:
  - developers
  - devops
version: current
last_updated: 2026-03-25
---

# [Contentstack Launch] - Auto-populate Environment Variables from a Linked Stack

This page explains how to link a Contentstack stack to a Contentstack Launch project so that environment variables (for example, `CONTENTSTACK_API_KEY`, `CONTENTSTACK_DELIVERY_TOKEN`, etc.) can be automatically imported, which is useful when importing and deploying Starter apps or SDK-based applications.

## Auto-populate Environment Variables from a Linked Stack

Importing a Starter app or any application with the Contentstack SDK requires adding key-value pairs of environment variables like `CONTENTSTACK_API_KEY`, `CONTENTSTACK_DELIVERY_TOKEN`, etc. Adding these environment variables manually is a tedious task.

Launch allows you to auto-populate the Environment Variables from your stack, by linking the stack to your project. This allows you to easily use the CMS environment variables while deploying your Launch project.

This step-by-step guide lets you link a stack to your project to auto-populate Environment Variables.

**Note**: This feature can also be used when creating or configuring an environment.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to Launch for your organization

## Steps for execution

Follow the steps to link a stack to your project:

- Click **Launch** from the dashboard.
- Click the **+ New Project** button.
- Select [Import from a Git Repository](./import-project-using-github.md) or [Upload a file](./import-project-using-file-upload.md) as usual from the **Create New Project** modal.
- In the **Environment Variables** section, click the **Connect and Import Variables** button.
- Select the **Stack** which has the Starter app installed and then select the **Delivery Token** for your stack.**Note**: On selecting a delivery token, Launch automatically selects a Stack environment available for the selected token.
- Click the **Import Variables** button.  
  You can see that the Environment Variables were auto-populated from your selected stack.
- Click the **Deploy** button.Your project is now deployed.

## View a linked stack

Follow the step to view the linked stack after project creation:

- Click the **Settings** icon in the left panel and then click **Stack Integration** to view the linked stack.

You can see the linked stack.

## Update a linked stack

Follow the steps below to update a linked stack:

- Click the **Settings** icon in the left panel and then click **Stack Integration**.
- Choose a stack from the dropdown and then click **Connect Stack** button.
- Once you choose a different stack, you must sync the stack variables. To do this, follow the steps below:Click **Environments** under Settings.
- Select your environment (`Default` in this example).
- Click** Environment Variables**.
- Click **Sync Stack Variables.**
- A popup displays asking for your confirmation. Select your delivery token and then click the** Sync Stack Variables** button.
- Click the **Save** button.

This will sync your new stack’s Environment Variables to your project.

## Common questions

**Q: What kinds of environment variables are auto-populated when linking a stack?**  
A: Key-value pairs of CMS-related environment variables like `CONTENTSTACK_API_KEY`, `CONTENTSTACK_DELIVERY_TOKEN`, etc.

**Q: When can this feature be used in Launch?**  
A: This feature can also be used when creating or configuring an environment.

**Q: What do I need to do after switching to a different linked stack?**  
A: You must sync the stack variables using **Sync Stack Variables** in the environment’s **Environment Variables** settings and then click **Save**.

**Q: Where do I view which stack is linked to my project?**  
A: Go to **Settings** and then **Stack Integration** to view the linked stack.