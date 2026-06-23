---
title: "[Automations guides and connectors] - Automating Asset Management with Contentstack Automate"
description: Automate updating an asset description based on a Voice Profile when a new asset is published in Contentstack using Contentstack Automate.
url: https://www.contentstack.com/docs/agent-os/automating-asset-management-with-contentstack-automate
product: Contentstack Automate
doc_type: guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# [Automations guides and connectors] - Automating Asset Management with Contentstack Automate

This page explains how to set up a Contentstack Automate workflow that updates an asset’s description dynamically when an asset is published, using ChatGPT (Chat with Vision + Chat) and Brand Kit (Voice Profile). It is intended for developers and automation builders configuring triggers and action steps across these connectors.

## Automating Asset Management with Contentstack Automate

This use case covers a scenario where you can dynamically update the asset description based on a Voice Profile whenever a new asset is published in Contentstack.

In this use case, we configure the **Contentstack Asset **Trigger. With the **Chat with Vision** action, fetch the asset UID and provide a suitable prompt to generate the response. In the next step, configure the **Get a Single Voice Profile **action using the Brand Kit connector to fetch the **Voice Profile**. To use this action, you must create a Voice Profile that certainly defines the product’s Voice Profile.

Next, in the Chat action, fetch the asset title and description based on the Voice Profile and Chat with Vision response. Once done, configure the Update an Asset action to update the asset description.

Let's break this scenario to see what the trigger event and the consequent action must be required to execute the Automation:
- **Set up the “Contentstack Asset'' Trigger Event: **This trigger event is activated whenever a user publishes an asset in Contentstack.
- **Set up the ChatGPT “Chat with Vision” Action: **Once the above event triggers the automation, Chat with Vision fetches the asset UID and generates a response based on the prompt.
- **Set up the Brand Kit “Get a Voice Profile” Action:** Once the response generates, Get a Single Voice Profile fetches the Voice Profile created in the Brand Kit.
- **Set up the ChatGPT “Chat” Action: **Provide a prompt to generate an output based on the Chat with Vision and Get a Voice Profile action output.
- **Set up the Contentstack “Update an Asset” Action: **Fetch the output of the Chat action in the Asset Description.

The steps to set up the Automation are as follows:
- [Configure Contentstack Trigger](#configure-contentstack-trigger)
- [Configure ChatGPT Connector](#configure-chatgpt-connector)
- [Configure Brand Kit Connector](#configure-brand-kit-connector)
- [Configure ChatGPT Connector](#configure-chatgpt-connector-1)
- [Configure Contentstack Connector](#configure-contentstack-connector)

Let's look at the setup in detail.

## Configure Contentstack Trigger

Log in to your [Contentstack account](https://www.contentstack.com/login/).
- After logging in, click the **App Switcher **icon, then select **Agent OS** from the list.
- Go to your project or click **+ New Project **to add a new project. Enter a **Project Name **and an optional **Description**.
- In the top navigation, click **Automations**. Then, click **+ New Automation**. From the dropdown, click **Create New** to add the steps required to configure the automation.
- Enter the** Automation Name** and **Description**.
- Click **Create**.
- Select **Configure Trigger **from the left navigation panel.
- Within the **Configure Trigger **step, click the **Contentstack **trigger connector.
- Under the **Choose Trigger** tab, select **Asset **Trigger.
- On the **Asset Trigger Configure Trigger** page, enter the details given below:  
  Click **+ Add New Account** button to connect your Contentstack account.**Additional Resource: **Refer to the [Contentstack Trigger](./contentstack-trigger.md) documentation to learn about adding an account.
- Select the trigger event from the drop-down, i.e., **Asset Published **and select a **Stack** and **Branch **from the **Lookup **drop-down.For Asset Trigger, you will find the following events:
  - **Asset Created:** When you create a new asset in your stack.
  - **Asset Updated:** When you update an asset.
  - **Asset Deleted: **When you delete an asset.
  - **Asset Published: **When you publish your assets to a publishing environment.
  - **Asset Publish Failed:** When asset publishing fails due to an error.
  - **Asset Unpublished:** When you unpublish or remove your assets from a publishing environment.
  - **Asset Unpublish Failed: **When the asset unpublishing activity fails.
  - **All: **When you perform any of the above activities on an asset.**Note: **By default, the **main **branch is selected (even if the **Branch **field is empty).
- **[Optional] **Enable the **Show Optional Fields **toggle button to display the **Environment **field.
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.

## Configure ChatGPT Connector

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **ChatGPT **connector.
- Under** Choose an Action **tab, select the **Chat with Vision **action.
- On the **Chat with Vision Configure Action **page, enter the details given below:  
  Click **+ Add New Account** button to connect your ChatGPT account.**Additional Resource:** Refer to the [ChatGPT](./chatgpt.md#prerequisites) Connector documentation to learn about adding an account.
- Select the **API Model **from the drop-down list for response predictions. You can select the **gpt-4-vision-preview** API model. This model will be available as gpt-4-vision after production support.
- Provide the **Prompt Text **to generate response(s). Click **+ Add Prompt Text** to enter multiple prompts.**Note: **For the Role as **system **or **assistant**, you will see the Prompt Text box to enter the text to generate response. If you select the Role as **user**, you can select the type of prompt content, i.e. Text or Image.

If you select the Role as user, then follow the below steps:
- Under the Prompt Input section, click **+ Add Prompt Input **button.
- In the **Select Prompt Type** drop-down, select the type of content, i.e., **Text **or **Image **to generate a response. For our use case we will select **Text**.
- Enter the **Prompt Value**. Fetch the asset UID from the trigger step and provide a valid prompt related to the asset.
- Click the **Show Optional Fields **toggle button to use these optional fields.
  - Enter the **Number of Tokens** to generate the content. This must be within the range of 1 to 2048.
  - Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.
  - Enter the **Number of Prompt Responses** you want to be generated in the automation response. This must be within the range of 1 to 3.
  - Provide the value to set the **Frequency of Repeated Words**. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.
  - Provide the value to set the **Presence of Repeated Responses**. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.
  - You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.
- Click **Proceed**.
- Click **Test Trigger **to execute and test the trigger that you configured.
- If successful, you will see an output as follows. If it looks appropriate, click **Save and Exit**.

## Configure Brand Kit Connector

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Brand Kit **connector.
- Under **Choose an Action** tab, select the **Get a Single Voice Profile** action.
- On the **Get a Single Voice Profile Configure Action** page, enter the details given below:  
  Click **+ Add New Account** button to connect your Brand Kit account.**Additional Resource:** Refer to the [Brand Kit Connector documentation](/docs/developers/automation-hub-connectors/brand-kit#prerequisites) to learn about adding an account.
- Select a **Brand Kit **and **Voice Profile **from the **Lookup **list.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

## Configure ChatGPT Connector

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **ChatGPT **connector.
- Under **Choose an Action** tab, select the **Chat** action.
- On the **Chat Configure Action **page, enter the details given below:  
  Click **+ Add New Account **button to connect your ChatGPT account.**Additional Resource:** Refer to the [ChatGPT](./chatgpt.md#prerequisites) Connector documentation to learn about adding an account.
- Select the **API Model **from the drop-down list to generate content for the chat responses.**Note:** Different models are available to different users based on the account the user holds such as paid accounts. You must check the account access before selecting the model.
- Provide the **Prompt Text **to generate response(s). Click **+ Add Prompt** **Text **to enter multiple prompts.
- Select the **Role **from the drop-down options to send to the API model request. By default, the role is set to the user.**Additional Resource:** There are three different types of roles provided by the OpenAI platform. The **system **role sets the response context, the **assistant **role provides the response content, and the **user **role asks the prompt.
- Enter the value in the **Input Query **field. Add a prompt to generate a response based on the output data from Chat with Vision and Get a Single Voice Profile actions. This will ensure that the generated content aligns with the Brand Kit Voice Profile.
- Click the **Show Optional Fields** toggle button to use these optional fields:
  - Select the **Response Type **as either **Text **or **JSON**. This ensures that the output is produced in a valid JSON format. By default, the response in ChatGPT is fetched in text format.**Note:** Ensure you are using the gpt-3.5-turbo-1106 model and above to access and correctly use the Response Type field in the connector.
  - Enter the **Number of Tokens** to generate the content. This must be within the range of 1 to 2048.
  - Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.
  - Enter the **Number of Chat Responses** you want to be generated in the automation response. This must be within the range of 1 to 3.
  - Provide the value to set the **Frequency of Repeated Words**. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.
  - Provide the value to set the **Presence of Repeated Responses**. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.
  - You can mark the **Sanitize text** checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

## Configure Contentstack Connector

Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Contentstack **connector.
- Select the **Contentstack Management **connector to perform CMS tasks.
- Under **Choose an Action** tab, select the **Update an Asset** action.
- On the **Update an Asset Configure Action **page, enter the details given below:  
  Click **+ Add New Account **button to connect your ChatGPT account.**Additional Resource:** Refer to the [Contentstack](/docs/developers/automation-hub-connectors/contentstack-action) Connector documentation to learn about adding an account.
- Select a **Stack **and an **Asset **from the **Lookup **list.If you have assets stored in nested folders within your Contentstack CMS, you can select such assets as well for updating their details.
- Enter a **Title **and a suitable **Description **for the asset to update. Here, fetch the asset title from the **Asset Trigger **step and description from the Chat action as shown below:
- Specify a **File Name **for the asset and the Input URL of the image you want to update.
- Optionally, enable the **Show Optional Fields **toggle button to display the **Select Folder** field. In the **Select Folder **drop-down, choose a destination folder to update an asset in it.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

Activate the automation and publish an asset in the selected stack. You will see the updated description of the asset.

## Common questions

**Q: What event starts this automation?**  
A: The automation starts when the **Asset Published** event occurs in the **Contentstack Asset** trigger.

**Q: Why are there two ChatGPT steps (Chat with Vision and Chat)?**  
A: **Chat with Vision** fetches the asset UID and generates a response based on the prompt, and **Chat** generates an output based on the Chat with Vision and Get a Voice Profile action output.

**Q: What do I need in Brand Kit before using “Get a Single Voice Profile”?**  
A: You must create a Voice Profile that certainly defines the product’s Voice Profile.

**Q: Where is the generated text used in Contentstack?**  
A: The output of the Chat action is fetched in the **Asset Description** in the **Update an Asset** action.

<!-- filename: automations-guides-and-connectors-automating-asset-management-with-contentstack-automate.md -->