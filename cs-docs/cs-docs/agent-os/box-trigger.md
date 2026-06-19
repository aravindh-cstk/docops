---
title: "[Automations guides and connectors] - Box Trigger"
description: Documentation for setting up the Box Trigger in Automation Hub connectors.
url: https://www.contentstack.com/docs/agent-os/box-trigger
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Box Trigger

This page explains what the Box Trigger is and how to configure it in Automation Hub. It is intended for developers and automation builders who want to start automations based on Box events (for example, when a file is uploaded) and should be used when setting up or testing a Box-based trigger in an automation.

## Box Trigger

[Box](https://app.box.com/folder/0) is a cloud content management and file sharing service. The platform lets you store, share, collaborate on, and manage files and documents securely on the cloud.

The Automate Box trigger lets you add Box-specific trigger events, such as **File Uploaded**, in your automation.

**Note:** After successfully configuring a trigger, if you re-configure any other trigger you will be prompted to revert to the previously configured trigger. You can revert back to the last trigger configurations by clicking the **Revert Changes **button.

## Set up the Box Trigger

Perform the following steps to set up the Box trigger:
- Click **Configure Trigger** from the left navigation panel.
- Within the **Configure Trigger step**, click the **Box **connector.
- Under **Choose Trigger **tab, select the **Box **trigger.
- In the **Configure Trigger **tab, click **+ Add New Account** to add your Box account.
- For Box OAuth, provide the OAuth permissions for all the values by checking the boxes, and click **Authorize**.
- In the pop-up that appears, log into your Box account. Once done, click the **Grant access to Box** button.
- Provide an Account Name and then click **Save**.
- **Select an Event** from the drop-down. In the **Select Folder** drop-down, select a folder to invoke the trigger.You can select nested folders created in your Box account.

    **Note: **You **must **create a new folder within your Box cloud drive, as the `#root` folder cannot be selected for a trigger. Additionally, you can **only **assign a **single **folder to a trigger.
- Click the **Proceed **button.
- To execute and test the configured trigger, click the **Test Trigger **button.
- On successful configuration, you can see the below output. Click the **Save and Exit **button.

Additionally, you can use the Box trigger with the [Box Connector](/docs/developers/automation-hub-connectors/box-action) to generate the file download URL. For example, select the “File Uploaded” event in the Box trigger and configure the Box action to fetch the file download URL.

This sets the **Box **trigger connector.

## Common questions

### Why can’t I select the `#root` folder for a trigger?
You **must **create a new folder within your Box cloud drive, as the `#root` folder cannot be selected for a trigger.

### Can I assign multiple folders to a single Box trigger?
No. You can **only **assign a **single **folder to a trigger.

### What should I do if I re-configure another trigger and want to restore the previous Box trigger settings?
You can revert back to the last trigger configurations by clicking the **Revert Changes **button.

### How can I generate a file download URL after a “File Uploaded” event?
Use the Box trigger with the [Box Connector](/docs/developers/automation-hub-connectors/box-action) to generate the file download URL by configuring the Box action to fetch the file download URL.