---
title: "[Marketplace guides and apps] - Workflow Board App Installation Guide"
description: Workflow Board App Installation Guide
url: https://www.contentstack.com/docs/marketplace/workflow-board
product: Contentstack
doc_type: marketplace-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Marketplace guides and apps] - Workflow Board App Installation Guide

This page explains how to install, configure, and use the Workflow Board app from the Contentstack Marketplace within a stack. It is intended for Contentstack stack Owners/Admins who want a Kanban-style view of workflows, stages, and tasks, and should be used when setting up the app and learning its core UI behaviors (authorization, navigation, task movement, and filters).

## Workflow Board App Installation Guide

The Workflow Board is a [Full Page Location](../developer-hub/full-page-location.md) app, which displays the workflow stages and tasks in a Kanban format. You can view the list of workflows along with the workflow stages and workflow tasks for content types within your Contentstack environment. You can drag and drop the tasks from one workflow stage to another and update the required details. Also, the app enables you to search for workflows and entries in the Workflow Board app. You can apply various filters to sort the workflow task cards.

Contentstack Marketplace lets you integrate the Workflow Board app directly into your headless CMS. You can easily use this app to view the workflows of your stack. It displays all the workflow stages and tasks on the Workflow Board app in a Kanban view.

## Prerequisites

- [Contentstack account](https://www.contentstack.com/login/)
- Access to the Contentstack Organization/Stack as the Owner/Admin

Let's follow this step-by-step guide to install and configure the Workflow Board app within your stack.

## Steps for Execution

- [Install and Configure the Workflow Board app in Contentstack Marketplace](#install-and-configure-the-workflow-board-app-in-contentstack-marketplace)
- [Use Workflow Board within your Stack](#use-workflow-board-within-your-stack)

## Install and Configure the Workflow Board app in Contentstack Marketplace

Follow the steps to install the application in Contentstack.

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click the **Marketplace** icon to go to the Marketplace.
- Click **Apps** from the left panel.
- Within the Marketplace, you can see all the available apps. Hover over the **Workflow Board** app and click **Install App**.
- In the popup window, select the stack where you want to install the Workflow Board app and click the **Install** button.
- On the **UI Locations** tab, you can see the predefined app locations. You can use the toggle button corresponding to each UI location to enable or disable it based on your requirements.

**Note**: No additional configuration is required to use the Workflow Board app.

## Use Workflow Board within your Stack

To use the Workflow Board application in your stack, follow the steps given below:

Log in to your [Contentstack account](https://www.contentstack.com/login/).

- In the left-hand side primary navigation, click **Settings** of your stack, navigate to **Workflows**, and then click **+ New Workflow** to create a new workflow.
- Enter the **Workflow Name** and **Description**, select the **Scope**, add the **Workflow Stages** and **Workflow Superuser(s)**, **Enable** the workflow, and click the **Save** button.

This creates your new workflow.

**Note**: You can also set the [Publish Rules](../set-up-workflows-and-publish-rules/about-publish-rules.md) for the workflow stages.

- Now, click **Entries** in the left navigation panel, open the entry that belongs to the content type added to the workflow, and then click the **Workflow Details** icon in the right navigation panel of your entry.
- Set the workflow stage of an entry and assign the workflow task to the user or role, add comments, and then click **Save**.

You can track the workflow tasks assigned by clicking **Tasks** in the left-hand side primary navigation panel.

**Additional Resource**: For more information about [Workflows](../set-up-workflows-and-publish-rules/about-workflows.md), [Workflow Stages](../set-up-workflows-and-publish-rules/about-workflow-stages.md), [Workflow Tasks](../set-up-workflows-and-publish-rules/about-workflow-tasks.md), and [Publish Rules](../set-up-workflows-and-publish-rules/about-publish-rules.md), please refer to the [Set up Workflows and Publish Rules](/docs/developers/set-up-workflows-and-publish-rules/) documentation.

## Workflow Board App

- Now, go to the stack dashboard. In the left-hand side primary navigation, you will find the **Workflow Board** app icon (as shown below).

**Note**: Workflow Board is a Full Page Location app. For more information, refer to the [Full Page Location](../developer-hub/full-page-location.md) documentation.

- Click the app icon to view the Workflow Board app within your CMS.
- You first need to authorize the app by providing access to your stack. Click the **Authorize** button to start using the app.
- In the popup window, click the **Authorize** button again to authenticate the Workflow Board app.

The Workflow Board app will show a list of all workflows in the left panel and all the workflow stages and tasks (entries) on the right side of the board.

**Note**: The first created workflow is visible on top of the list. By default, the Workflow Board app displays the workflow stages and entries for the first created workflow.

**Tip**: If Workflows are already created and not visible on screen, please contact the Super Admin to remove the **Workflow Old API** plan from your organization.

- Click the **Edit Workflow** icon to edit the workflow in the Contentstack Workflow editor.

Also, you can search for any workflow using the search bar.

- Click the **Collapse** icon to hide the list of workflows.
- Click the **Expand** icon to show the list of workflows if the sidebar is collapsed.

**Note**: By default, the sidebar for the list of workflows is always visible.

- To view the workflow stages and tasks (entries), click the **workflow name** in the left panel of the Workflow Board app.

**Note**: On page reload or page navigation, the app shows the workflow where it was before refreshing the landing page.

## Workflow Stages

The Workflow Board app displays the workflow stages and the total number of entries that belong to the stage on the top of the board. You can scroll right to view all the workflow stages.

## Workflow Tasks

The Workflow task (or entry) preview card shows all the associated details. You can view the Entry title, Content type name, Release name (if any), Locale, and the number of assignees. You can use the vertical scroll bar to see all the workflow tasks.

If a task is not assigned to any user or role, the card shows the **Unassigned** state.

If a task is assigned to a user, the card shows the total number of assignees in the **User(s)** category. Hover over the **User(s)** category to view all the assigned users' names.

If a task is assigned to a role, the card shows the total number of roles assigned to the entry in the **Role(s)** category. Hover over the **Role(s)** category to view all the permitted roles.

- Drag and drop a workflow task card to move it from one workflow stage to another.

When you drop a task in another stage, a popup appears to update the status of the workflow task. Set the required details, and click the **Update** button.

The task, now, is visible in another stage.

**Note**: If the workflow task is restricted from any workflow stage, you can see a message when you drag the card to that stage.

## Workflow Board Filters

The Workflow Board app lets you apply filters based on the entries.

- **Search an Entry**: You can search an entry by typing the entry title in the search bar.

Also, you can view the total number of entries in a workflow on the Workflow Board app. Click the **Reload** icon to update the number if any entry is added or deleted.

- **Content Type Filter**: You can view the workflow tasks (entries) based on the selected **Content Type(s)**. By default, the **All Content Types** option is selected.
- **Sort By Filter**: You can shuffle and sort the tasks (entries) according to the available sorting options.

By default, the **Modified At: Newest** option is selected. It enables you to view the entries arranged in their recently modified order.

Select the **Title (ASC)** option from the **Sort By** dropdown to view the entries arranged in the ascending alphabetical order of the entry titles.

Select the **Title (DESC)** option from the **Sort By** dropdown to view the entries arranged in descending alphabetical order of the entry titles.

Select the **Modified At: Oldest** option from the **Sort By** dropdown to view the entries arranged in the order as per the oldest modified entry.

Select the **Created At: Newest** option from the **Sort By** dropdown to view the entries arranged in their recently created order.

Select the **Created At: Oldest** option from the **Sort By** dropdown to view the entries arranged in the order as per the oldest created entry.

- **View Type Filter**: You can preview the workflow task cards in a **Comfortable** or **Compact** view.

By default, the **Comfortable** option is selected.

Select the **Compact** option from the **View Type** dropdown to view the workflow task cards in compact view.

## Common questions

**How do I start using the Workflow Board app after installation?**  
Go to the stack dashboard, click the **Workflow Board** app icon, and complete the authorization by clicking **Authorize** in the app and in the popup window.

**Do I need to configure anything after installing the Workflow Board app?**  
No. **Note**: No additional configuration is required to use the Workflow Board app.

**Why can’t I see existing workflows in the Workflow Board app?**  
**Tip**: If Workflows are already created and not visible on screen, please contact the Super Admin to remove the **Workflow Old API** plan from your organization.

**How do I move a task to another workflow stage?**  
Drag and drop a workflow task card to another stage, then update the status details in the popup and click **Update**.