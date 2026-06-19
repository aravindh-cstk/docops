---
title: "[Automations guides and connectors] - Box Action"
description: Documentation for configuring the Box Action connector to automate file upload and generate a file download URL.
url: https://www.contentstack.com/docs/agent-os/box-action
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Box Action

This page explains what the Box Action connector does and how to set it up in Automation Hub. It is intended for developers and automation builders who need to generate Box file download URLs for use in other automation actions.

## Box Action

[Box](https://app.box.com/folder/0) is a cloud content management and file sharing service. The platform lets you store, share, collaborate on, and manage files and documents securely on the cloud.

The Box action connector lets you automate the file upload and generation of a file download URL for your Box cloud drive assets. You can use the generated URL and utilize it in any other automation action.

**Note: **The generated URL is valid only for **15 minutes**.

## Set up the Box Action

Perform the following steps to configure the Box action:
- Click **Configure Action Step **from the left navigation panel.
- Then, click **Action Step** to configure third-party services.
- Within the **Configure Action step**, click the **Box **connector.
- Under **Choose an Action** tab, select the **Get File URL **action.
- In the **Configure Action** tab, click** + Add New Account **to add your Box account.
- For Box OAuth, provide the OAuth permissions for all the values by checking the boxes, and then click **Authorize**.
- In the pop-up that appears, log into your Box account. Once done, click the **Grant access to Box **button.
- Provide an Account Name and then click **Save**.
- In the **Select Folder** drop-down, select a folder within the `#root` folder to fetch the file URL.You can select nested folders created in your Box account.
- In the **Select File** drop-down, select the file to fetch its URL.
- Optionally, enable the **Show Optional Fields** toggle button to display the **File Version **field.
- In the **File Version** drop-down, select a file version to fetch the download URL of that version. Additionally, you can select the version from the** Suggested Data Element(s) **list. It fetches the most relevant element(s) configured in the previous step(s).
- Click the **Proceed **button.
- To execute and test the configured action, click the **Test Action** button.
- On successful configuration, you can see the below output. Click the **Save and Exit** button.

Additionally, you can use the [Box Trigger](/docs/developers/automation-hub-connectors/box-trigger) with the Box Connector to generate the file download URL. For example, select the “File Uploaded” event in the Box trigger and configure the Box action to fetch the file download URL.

This sets the **Box **action connector.

## Common questions

### How long is the generated Box file URL valid?
The generated URL is valid only for **15 minutes**.

### Which Box Action should I select to generate a download URL?
Under **Choose an Action** tab, select the **Get File URL **action.

### Can I fetch a download URL for a specific file version?
Yes. Enable **Show Optional Fields** to display **File Version **, then select a version in the **File Version** drop-down.

### Can I use Box Trigger with Box Action to generate a download URL automatically?
Yes. You can use the [Box Trigger](/docs/developers/automation-hub-connectors/box-trigger) with the Box Connector to generate the file download URL (for example, using the “File Uploaded” event).