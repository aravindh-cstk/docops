---
title: Automations guides and connectors - Azure ChatGPT
description: Azure ChatGPT connector documentation for generating chat responses, prompt responses, and translating entry data in Automate.
url: https://www.contentstack.com/docs/agent-os/azure-chatgpt
product: Contentstack Automate
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# Automations guides and connectors - Azure ChatGPT

This page explains how to connect and configure the Azure ChatGPT connector in Automate, including prerequisites and setup steps for the Chat, Prompt, and Translate an Entry actions. It is intended for users configuring third-party service actions in an automation and should be used when integrating an Azure-hosted ChatGPT deployment into Automate workflows.

## Azure ChatGPT

The Azure ChatGPT connector lets you generate the content via chat responses and prompt responses using the Azure cloud network. You can also translate the entry data using the **Translate an Entry **action.

Enterprises and businesses can deploy their ChatGPT versions on the Azure cloud and use the Azure ChatGPT connector to generate responses by integrating their Azure account within the Azure ChatGPT connector.

## Prerequisites

To use the Azure ChatGPT connector, you first need to connect your Azure ChatGPT account with Automate using the following steps:
- [Log in to your Contentstack account](https://www.contentstack.com/login) and click the **Automate** icon from the left navigation panel.
- Select your project and then the automation.
- Click **Configure Action Step** from the left navigation panel and then **Action** **Step** to configure third-party services.
- Within the **Choose Connector**, click the **Azure** **ChatGPT** connector.
- Under **Choose** **an Action**, select the **Chat** action.
- In the **Configure Action **section, click** + Add New Account** to add your Azure ChatGPT account.
- In the **Authorize** modal, enter the **Title**, **Resource Name**, **API Key**, **Deployment Name/ID**, and **API Version** retrieved from the Azure platform.
  Log in to the [**Azure**](https://azure.microsoft.com/en-in) Platform.
- You must create a resource (if not created already). Click **+ Create Resource**.
- Click the resource created. Click to manage the keys or create one in the **Manage Keys** section.
- In the **Model Deployments** section, click **Manage Deployments** -> Authorize your account. You will see a list of all the deployments created in the Azure platform. Click **+ Create new deployment** to create a new deployment.**Note: **Refer to the [Azure OpenAI Service REST API Reference](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#authentication) document for more information on API Version.
- Click the **Authorize** button.

This sets up your Azure ChatGPT account for the Azure ChatGPT connector.

## Set up the Azure ChatGPT

Perform the following steps to set up the Azure ChatGPT action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Azure ChatGPT** connector.
- You will see three actions under the **Choose an Action** tab: **Chat**, **Prompt**, and **Translate an Entry**.

Let’s look at each of them in detail.

### Chat Action
- Under **Choose an Action** tab, select the **Chat** action.
- On the **Chat Configure Action** page, enter the details given below:
  Click the **+ Add New Account** button to add your **Azure ChatGPT** account.
- In the **Prompt Text **field, provide your query to generate the chat response(s).
- Select the **Role** from the dropdown options to send to the API model request. By default, the role is set to the user.**Additional Resource: **There are three types of roles provided by the OpenAI platform. The **system** role sets the response context, the **assistant** role provides the response content, and the **user** role asks the prompt.
- Enable the **Show Optional Fields** toggle button to display the **Number of Tokens**, **Randomness of Responses**, **Number** **of** **Chat** **Responses**, **User Identifier**, **Frequency** **of** **Repeated** **Words**, **Presence** **of** **Repeated** **Responses**, and **Additional** **Prompt** **Text** fields.
- Enter the **Number of Tokens** to generate the content. This must be within the range of 1 to 2048.
- Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.
- Enter the **Number of Chat Responses** you want to be generated in the automation response. This must be within the range of 1 to 3.
- Provide the **User Identifier** name, which helps the OpenAI platform to monitor and detect abuse.
- Provide the value to set the **Frequency of Repeated Words**. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.
- Provide the value to set the **Presence of Repeated Responses**. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.
- You can mark the** Sanitize text** checkbox to remove special characters or spaces from the chat response. By enabling this checkbox, any special characters or spaces in the chat response will be eliminated, resulting in a clean and compatible text.
- Click **Proceed**.
- To test the configured action, click the** Test Action** button.
- You will get the response(s). Once set, click the** Save and Exit **button.

### Prompt Action
- Under **Choose an Action** tab, select the **Prompt** action.
- On the **Prompt Configure Action **page, enter the details given below:
  Click **+ Add New Account** button to connect your Azure ChatGPT account as shown in the [Prerequisites](#prerequisites) step.
- Provide the** Prompt Text** to generate response(s).
- Enable the **Show Optional Fields **toggle button to display the **Number of Tokens**, **Randomness of Responses**, **Number of Prompt Responses**, **User Identifier**, **Frequency** **of** **Repeated** **Words**, and **Presence** **of** **Repeated** **Responses** fields.
- Enter the **Number** **of** **Tokens** to generate the content. This must be within the range of 1 to 2048.
- Enter a value for the **Randomness of Responses** of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of 0 to 2.
- Enter the** Number of Prompt Responses** you want to be generated in the automation response. This must be within the range of 1 to 3.
- Provide the **User Identifier** name which helps the OpenAI platform to monitor and detect abuse.
- Provide the value to set the **Frequency of Repeated Words**. The most positive value is likely to avoid the use of repeated words. This must be within the range of -2 to 2.
- Provide the value to set the **Presence of Repeated Responses**. The most positive value is likely to generate a new response. This must be within the range of -2 to 2.
- You can mark the **Sanitize text **checkbox to remove special characters or spaces from the chat response. By enabling this checkbox, any special characters or spaces in the chat response will be eliminated, resulting in a clean and compatible text.
- Click **Proceed**.
- To test the configured action, click the** Test Action** button.
- You will get the response(s). Once set, click the** Save and Exit **button.

### Translate an Entry

The Translate an Entry action returns the translated entry data in the response. To use this action, follow the steps below:
- Under **Choose an Action** tab, select the **Translate an Entry **action.
- On the **Translate an Entry Configure Action **page, enter the details given below:
  Click **+ Add New Account **button to connect your Azure ChatGPT account as shown in the [Prerequisites](#prerequisites) step.
- In the **Entry** **Data** field, enter the entry data to translate.
- In the **Content** **Type** **Schema** field, enter the content type schema for translating the entry data.You can fetch the **Entry** **Data** and **Content** **Type** **Schema** from the previous step using the [*Get a Single Content Type*](/docs/developers/automation-hub-connectors/contentstack-management-content-types-actions#get-a-single-content-type) and [*Get a Single Entry*](/docs/developers/automation-hub-connectors/contentstack-management-entries-actions#get-a-single-entry)* *actions.
- In the **Select** **Language** drop-down, select the language in which you want to translate the entry data.
- Click the **Show Optional Fields** toggle button to use these optional fields:
  Provide the **Prompt** **Text** to generate the response. This offers additional capabilities to customize the translated entry data.
- Enter the **Number** **of** **Tokens** to generate the content. By default, the token limit is **2000**.
- Click **Proceed**.
- Check if the details are correct. If yes, then click **Test Action** button.
- You will get the response(s). Once set, click **Save and Exit**.

This sets the **Azure ChatGPT** connector.

## Common questions

### Do I need an Azure deployment to use this connector?
Yes. In the **Authorize** modal, you must provide **Deployment Name/ID**, and the steps include creating and managing deployments in the Azure platform.

### What actions are available in the Azure ChatGPT connector?
You will see three actions under the **Choose an Action** tab: **Chat**, **Prompt**, and **Translate an Entry**.

### What are the allowed ranges for tokens and randomness?
For **Chat** and **Prompt**, **Number of Tokens** must be within the range of 1 to 2048, and **Randomness of Responses** must be within the range of 0 to 2.

### What does “Sanitize text” do?
By enabling the **Sanitize text** checkbox, any special characters or spaces in the chat response will be eliminated, resulting in a clean and compatible text.