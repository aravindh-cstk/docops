---
title: Automations guides and connectors - Gemini
description: Gemini connector documentation for generating content through chat responses and translating entry data in Automate.
url: https://www.contentstack.com/docs/agent-os/gemini
product: Contentstack Automate
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-25
---

# Automations guides and connectors - Gemini

This page explains how to set up and use the Gemini connector in Contentstack Automate, including prerequisites for connecting Google AI Studio and configuring the available actions. It is intended for developers and automation builders who need to generate chat responses or translate entry data within an automation workflow.

## Gemini

The Gemini connector enables you to generate content through chat responses using the Gemini model. You can also translate the entry data using the Translate an Entry action. The Gemini connector currently contains two actions: **Chat** and **Translate an Entry.**

## Prerequisites

To use the Gemini connector, you first need to connect your [Google AI Studio](https://aistudio.google.com/app/apikey) with Automate using the following steps:
- [Log in to your Contentstack account](https://www.contentstack.com/login) and click the **Automate **icon from the left navigation panel.
- Select your project and then the automation.
- Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
- Within the **Choose Connector**, click the **Gemini **connector.
- Under **Choose an Action**, select the **Chat **action.
- In the **Configure Action** section, click **+ Add New Account **to add your Google AI Studio account.
- In the **Authorize **modal, provide details such as **Title**, and **API Key **from the Google AI Studio.To generate an API key in Google AI Studio, follow the steps below:

      Go to the [Google AI Studio](https://aistudio.google.com/app/apikey).
- Click the **Get API key **option in the top navigation and then click the** + Create API key** button.
- From the **Search Google Cloud projects** drop-down, select an existing Google Cloud project.
- Once done, click **Create API key in existing project** button.
- In the **API key generated** popup, click **Copy** to to copy the key.
- Click the **Authorize **button.

This sets up your Google AI Studio account for the Gemini connector.

## Set up the Gemini Connector

Perform the following steps to set up the Gemini connector:
- From the left navigation panel, click **Configure Action Step**.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Gemini **connector.
- Under **Choose an Action**, you will see the **Chat **action.

### Chat

The Chat action returns the chat response(s) from the Gemini model. To use the Chat action, follow the steps below:
- Under **Choose an Action **tab, select the **Chat** action.
- On the **Chat Configure Action **page, enter the details given below:
      Click** + Add New Account** button to connect your Gemini account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Model **from the dropdown list to generate content for the chat responses.**Note:** Different models are available to different users, based on the account the user holds such as paid accounts. You must check your account access before selecting the model.
- Click the **+ Add System Instruction Text** button to provide specific guidance or directives to the model to help it understand the context and generate an appropriate response based on the provided prompt text.
- Select a** User Prompt** (text or image) to generate response(s).Click** + Add User Prompt **to enter multiple prompts.

        When **Text **prompt is selected:

          From the **Select Message Type** drop-down, select the **Text **type.
- In the **Input Text** field, enter the input text to generate a response.

        When **Image **is selected:
- From the **Select Message Type** drop-down, select the Image type.
- In the **Image URL **field, enter the URL of the image.
- Select the **MIME** **Type **for the image.
- Click the **Show Optional Fields** toggle button to use these optional fields:
          Select the **Response Type** as either Text, **JSON **or **Structured Output**. For the **Response Type **as **JSON **or **Structured Output**, the output is produced in a valid JSON format.When selecting **Structured Output **as the Response **Type**, you must provide a valid JSON-formatted structured schema to ensure a properly formatted response.

            **Note**:
                To use [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs/supported-schemas), all fields or function parameters **must **be marked as required.
- A schema can include up to **100 object properties **in total, with a maximum of **5 **levels of nesting.
- Structured Output generates only the specified keys and values. To enable this, you must set `additionalProperties: false`.

            **Additional Resource: **See the [JSON Schema](https://json-schema.org/) documentation for more details.
- Enter the **Number of ****Tokens** to generate the content.
- Enter a value for the **Randomness of Responses **of the generated content. 0 being the most precise and 2 being the most random content predictions. This must be within the range of **0 to 2**.
- Enter the **Top-P** value to define how the model selects tokens for output. For instance, if tokens A, B, and C have probabilities of 0.3, 0.2, and 0.1; then entering a Top-P value as 0.5, the model chooses either A or B as the next token using temperature and excludes C. This must be within the range of **0 to 1**.
- Enter the **Top-K **value to define how the model selects tokens for output. Entering a Top-K value of 1 implies that the next chosen token is the most likely among all tokens in the model's vocabulary. Top-K value of 3 means that the next token is selected from the three most probable tokens using temperature. This must be within the range of **1 to 40**.
- Enter the **Count of Response** to fetch the desired number of responses for the user prompt. If you enter **5**, then **5 responses **will be displayed in the output.
- You can mark the **Sanitize text **checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.
- Click **Proceed**.
- Check if the details are correct. If yes, then click **Test Action**.
- You will get the response(s). Once set, click **Save and Exit**.

### Translate an Entry

The Translate an Entry action returns the translated entry data in the response. To use this action, follow the steps below:
- Under **Choose an Action** tab, select the **Translate an Entry **action.
- On the **Translate an Entry Configure Action **page, enter the details given below:
      Click **+ Add New Account **button to connect your Gemini account as shown in the [Prerequisites](#prerequisites) step.
- Select the **Model** from the dropdown list for response predictions.
- In the **Entry** **Data** field, enter the entry data to translate.
- In the **Content** **Type** **Schema** field, enter the content type schema for translating the entry data.You can fetch the **Entry** **Data** and **Content** **Type** **Schema** from the previous step using the [Get a Single Content Type](./contentstack-management-content-types-actions.md#get-a-single-content-type) and [Get a Single Entry](./contentstack-management-entries-actions.md#get-a-single-entry) actions.
- In the **Select** **Language** drop-down, select the language in which you want to translate the entry data.
- Click the **Show Optional Fields** toggle button to use these optional fields:
          Provide the **Prompt** **Text** to generate the response. This offers additional capabilities to customize the translated entry data.
- Enter the **Number** **of** **Tokens** to generate the content. By default, the token limit is **2000**.
- Click **Proceed**.
- Check if the details are correct. If yes, then click **Test Action**.
- You will get the response(s). Once set, click **Save and Exit**.

This completes the **Gemini **connector’s setup.

## Common questions

### What actions are available in the Gemini connector?
The Gemini connector currently contains two actions: **Chat** and **Translate an Entry.**

### Do I need a Google AI Studio API key to use the Gemini connector?
Yes. In the **Authorize **modal, provide details such as **Title**, and **API Key **from the Google AI Studio.

### Can the Chat action accept both text and image prompts?
Yes. Select a** User Prompt** (text or image) to generate response(s).

### What should I do if I don’t see a model I expect in the Model dropdown?
Different models are available to different users, based on the account the user holds such as paid accounts. You must check your account access before selecting the model.