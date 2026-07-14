---
title: "[Set Up Your Project] - Enable or Disable a Workflow"
description: Instructions to enable or disable a workflow in Contentstack, with related API reference links.
url: https://www.contentstack.com/docs/headless-cms/enable-or-disable-a-workflow
product: Contentstack
doc_type: how-to
audience:
  - developers
  - administrators
version: current
last_updated: 2026-03-26
---

# [Set Up Your Project] - Enable or Disable a Workflow

This page explains how to enable or disable a workflow in Contentstack. It is intended for developers or stack administrators managing workflow availability, and should be used when you need to turn a workflow on or off in the UI (or reference the related API requests).

## Enable or Disable a Workflow

Contentstack allows you to enable and disable a [workflow](./about-workflows.md) as per your requirements.

To enable or disable a workflow, log in to your [Contentstack account](https://app.contentstack.com/#!/login), and perform the following steps:
- Go to your [stack](../set-up-stack/about-stack.md) and click on the “Settings” icon (press “S”) on the left navigation panel.
- Click on **Workflows** (press “**alt + F**” for Windows OS, and “option + **F**” for Mac OS).
- Hover over the workflow you want to enable/disable, and click on the “Power” icon to enable or disable the workflow![Enable_a_workflow_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1f3b670bf49a7602/60c0bee0971f487708eb2477/Enable_a_workflow_1_highlighted.png)
- Alternatively, to enable or disable the workflow via the workflow page, you need to check or uncheck the **Enable Workflow** checkbox, respectively.![Enable_webhook.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9bd6eb5fa33333dd/6320716f94f0bf32f4c41b0d/Enable_webhook.png)
- Click on **Save**.

## API Reference

Here are the links to the API requests related to this action:
- [Enable workflow](../../../api-docs/api-detail/content-management-api.md#enable-workflow)
- [Disable workflow](../../../api-docs/api-detail/content-management-api.md#disable-workflow)

## Common questions

### Does disabling a workflow delete it?
No. Disabling a workflow enables or disables the workflow; it does not indicate deletion.

### Where do I enable or disable a workflow in the UI?
You can use the “Power” icon from the workflows list, or check/uncheck the **Enable Workflow** checkbox on the workflow page.

### Are there API requests for enabling or disabling workflows?
Yes. See the API Reference links for [Enable workflow](../../../api-docs/api-detail/content-management-api.md#enable-workflow) and [Disable workflow](../../../api-docs/api-detail/content-management-api.md#disable-workflow).