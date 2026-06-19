---
title: Automations guides and connectors - Smartling
description: Set up the Smartling action connector to add content for translation and download translated content from a Smartling project.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/smartling
product: Smartling
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Smartling

This page explains what the Smartling connector does and how to set it up in an automation workflow. It is intended for developers configuring third-party action steps to send content for translation and download translated content from a Smartling project.

## Smartling

Smartling is one of the most widely used cloud-based language translation platforms. It helps you to localize content across different digital properties.  
The Smartling Connector enables you to add content for translation and download the translated content from your Smartling project.

## Set up Smartling

Perform the following steps to set up the Smartling action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Smartling **connector.
- Under **Choose an Action** tab, you will see two actions:
  - **Add Content to a Project**: This action helps you send data to your Smartling project for translation.
- **Download Translated Content**: This action helps you download the translated content from your Smartling project.

Let's take the first example of the **Download Translated Content** action to download the translated content from your **Smartling** project.  
Action 1: Select the** ****Download Translated Content** action:
- Click the **+ Add New Account **button to set up your Smartling account (see screenshot in next step).
- In the **Authorize modal**, enter the **Title**, **User Identifier**, **User Secret ID**, and **Account UID** of your Smartling account.You can create the **User Secret ID** and **Account UID** by navigating through **Account Settings** > **API** > **Create Token** in your Smartling account.

  **Additional Resource:** Refer to the [Integrating Smartling Guide](https://help.smartling.com/hc/en-us/articles/115004187694-API-Tokens-) for more details.  
  Then, click** Authorize**.
- On the **Configure Action** page, enter the following details while configuring the action:
  - **Project ID**: Select the Smartling project ID from the Lookup drop-down.
- **Locale to Download**: Select the locale in which you want the content to be downloaded.
- **File URI**: Enter the file url/path to invoke the download action.
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.

Action 2: Select the** Add Content to a Project** action:
- Click the **+ Add New Account **button to set up your Smartling account (see screenshot in next step).
- In the **Authorize modal**, enter the **Title**, **User Identifier**, **User Secret ID**, and **Account UID** of your Smartling account.You can create the **User Secret ID** and **Account UID** by navigating through **Account Settings** > **API** > **Create Token** in your Smartling account.

  **Additional Resource:** Refer to the [Integrating Smartling Guide](https://help.smartling.com/hc/en-us/articles/115004187694-API-Tokens-) for more details.  
  Then, click** Authorize**.
- On the **Configure Action** page, enter the following details while configuring the action:
  - **Project ID**: Select the Smartling project ID from the Lookup drop-down.
- **Locale**: Select the locale in which you want to translate the content from the list of locales fetched from your Smartling project.
- **Contents**: Add the content you want Smartling to translate.
- **Callback URL**: Mention the callback URL for Smartling to invoke when the translation is completed.
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.

To use the Pause connector to store the output from the previous action and use it as the input to download the translated content from the same project, refer to the [Pause Connector](/docs/developers/automation-hub-connectors/pause) documentation

This completes the setup for **Smartling** action connector.

## Common questions

**Q: What actions are available in the Smartling connector?**  
A: **Add Content to a Project** and **Download Translated Content**.

**Q: What Smartling credentials are required in the Authorize modal?**  
A: **Title**, **User Identifier**, **User Secret ID**, and **Account UID**.

**Q: Where do I create the User Secret ID and Account UID in Smartling?**  
A: Navigate to **Account Settings** > **API** > **Create Token** in your Smartling account.

**Q: How can I reuse output from a previous action when downloading translated content?**  
A: Use the Pause connector; refer to the [Pause Connector](/docs/developers/automation-hub-connectors/pause) documentation.