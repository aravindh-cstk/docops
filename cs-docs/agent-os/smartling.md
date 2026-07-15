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
- Within the **Configure Action Step**, click the **Smartling **connector.![Smartlin.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte58a0d029042a9bf/6527f8e15a3045c1bb005acb/Smartlin.png)
- Under **Choose an Action** tab, you will see two actions:
  - **Add Content to a Project**: This action helps you send data to your Smartling project for translation.
- **Download Translated Content**: This action helps you download the translated content from your Smartling project.

Let's take the first example of the **Download Translated Content** action to download the translated content from your **Smartling** project.  
Action 1: Select the** ****Download Translated Content** action:
- Click the **+ Add New Account **button to set up your Smartling account (see screenshot in next step).![Smartling-Action-Download-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2ef18ea8718cdbd6/63dcad27040e3e388a964bcb/Smartling-Action-Download-Add-New-Account.png)
- In the **Authorize modal**, enter the **Title**, **User Identifier**, **User Secret ID**, and **Account UID** of your Smartling account.You can create the **User Secret ID** and **Account UID** by navigating through **Account Settings** > **API** > **Create Token** in your Smartling account.

  **Additional Resource:** Refer to the [Integrating Smartling Guide](https://help.smartling.com/hc/en-us/articles/115004187694-API-Tokens-) for more details.  
  Then, click** Authorize**.
- On the **Configure Action** page, enter the following details while configuring the action:
  - **Project ID**: Select the Smartling project ID from the Lookup drop-down.
- **Locale to Download**: Select the locale in which you want the content to be downloaded.
- **File URI**: Enter the file url/path to invoke the download action.![Smartling-Action-Download-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6b5bd86294860143/63dcad267ccfaf4bc687f03c/Smartling-Action-Download-Configure-Action.png)
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Smartling-Action-Download-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2fb31367e05e2437/63dcad2711a22c0d982328f4/Smartling-Action-Download-Input.png)
- Check if the details are correct. If yes, click **Test Action**.![Smartling-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt105722368964d803/63dcad2d45febe7be9212883/Smartling-Test-Action.png)
- Once set, click **Save and Exit**.

Action 2: Select the** Add Content to a Project** action:
- Click the **+ Add New Account **button to set up your Smartling account (see screenshot in next step).![Smartling-Action-Add-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt88ca1799f1639f28/63dcad2614a2b44fa11def3c/Smartling-Action-Add-Add-New-Account.png)
- In the **Authorize modal**, enter the **Title**, **User Identifier**, **User Secret ID**, and **Account UID** of your Smartling account.You can create the **User Secret ID** and **Account UID** by navigating through **Account Settings** > **API** > **Create Token** in your Smartling account.

  **Additional Resource:** Refer to the [Integrating Smartling Guide](https://help.smartling.com/hc/en-us/articles/115004187694-API-Tokens-) for more details.  
  Then, click** Authorize**.
- On the **Configure Action** page, enter the following details while configuring the action:
  - **Project ID**: Select the Smartling project ID from the Lookup drop-down.
- **Locale**: Select the locale in which you want to translate the content from the list of locales fetched from your Smartling project.
- **Contents**: Add the content you want Smartling to translate.
- **Callback URL**: Mention the callback URL for Smartling to invoke when the translation is completed.![Smartling-Action-Add-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9892b5b065580a1e/63dcad2683cdf64d44f74f1a/Smartling-Action-Add-Configure-Action.png)
- Click **Proceed**.
- You will see the input values which you have configured in the **Configure Action** modal.![Smartling-Action-Add-Input.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8be257369ddefd03/63dcad2686b8be36ce832082/Smartling-Action-Add-Input.png)
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.

To use the Pause connector to store the output from the previous action and use it as the input to download the translated content from the same project, refer to the [Pause Connector](./pause.md) documentation

This completes the setup for **Smartling** action connector.

## Common questions

**Q: What actions are available in the Smartling connector?**  
A: **Add Content to a Project** and **Download Translated Content**.

**Q: What Smartling credentials are required in the Authorize modal?**  
A: **Title**, **User Identifier**, **User Secret ID**, and **Account UID**.

**Q: Where do I create the User Secret ID and Account UID in Smartling?**  
A: Navigate to **Account Settings** > **API** > **Create Token** in your Smartling account.

**Q: How can I reuse output from a previous action when downloading translated content?**  
A: Use the Pause connector; refer to the [Pause Connector](./pause.md) documentation.