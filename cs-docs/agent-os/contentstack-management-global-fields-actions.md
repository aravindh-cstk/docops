---
title: "[Automations guides and connectors] - Contentstack Management - Global Fields Actions"
description: Contentstack Management - Global Fields Actions
url: https://www.contentstack.com/docs/agent-os/contentstack-management-global-fields-actions
product: Contentstack
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Contentstack Management - Global Fields Actions

This page explains how to use the Contentstack Management connector’s Global Fields actions in Automation Hub to fetch global field details from a stack. It is intended for developers or automation builders configuring connector actions, and should be used when setting up or testing workflows that read global field data.

## Contentstack Management - Global Fields Actions

A [Global Field](../developers/global-field/about-global-field.md) is a reusable field (or group of fields) that you can define once and reuse in any content type within your stack. You can perform global field based operations using the following Contentstack Management Global Field actions.

Let’s look at each of these in detail.

## Get All Global Fields

This action fetches the details of all the global fields in a stack.

- Under **Choose an Action** tab, select the **Get All Global Fields** action.
- On the **Get All Global Fields Configure Action **page, enter the details given below:Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack **and **Branch **from the **Lookup **list.

  **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).
- Click the **Include branch details** checkbox to include the branch details of the global fields.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4476849f54abb78a/6628cae9528fc1e8b055b524/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltadd15580ff3bc08b/6601a8d101e3118155cb0b30/Test_Action.png)
- The output will be shown as below. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b4a5f5425928dd4/6628cae9b05441da7c99fec9/Save_Exit.png)

## Get a Single Global Field

This action fetches the details of a single global field in a stack.

- Under **Choose an Action** tab, select the **Get a Single Global Field** action.
- On the **Get a Single Global Field Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.
- Select a **Stack**, **Branch**, and **Global Field **from the **Lookup **list.

  **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).
- Click the **Include branch details **checkbox to include the branch details of the global field.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte1e48d9e29d79faf/6628cadd528fc1d68c55b51b/Select_Fields.png)
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action.
- The output will be shown as follows. Click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd224fdeeb4be0ebe/6628caddbb637257d31dfa6b/Save_Exit.png)

## Common questions

**Q: What does the “Include branch details” checkbox do?**  
A: It includes the branch details of the global fields (or the global field) in the action output.

**Q: What happens if I leave the Branch field empty?**  
A: **Note: **By default, the **main** branch is selected (even if the **Branch** field is empty).

**Q: Do I need to connect an account before selecting a Stack and Branch?**  
A: Click **+ Add New Account** button to connect your Contentstack account as shown in the [Connect your Contentstack Account to Automate](/docs/developers/automation-hub-connectors/contentstack-management#connect-your-contentstack-account-to-automate) step.