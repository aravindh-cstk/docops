---
title: Automations guides and connectors - Google Vertex
description: Documentation for setting up and using the Google Vertex connector in Automate, including prerequisites and available actions.
url: https://www.contentstack.com/docs/agent-os/google-vertex
product: Contentstack Automate
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# Automations guides and connectors - Google Vertex

This page explains how to set up and use the Google Vertex connector in Contentstack Automate, including prerequisites for connecting a Google Vertex service account and how to configure available actions. Read this when you are building or maintaining Automate workflows that use Google Vertex Gemini models or Vertex AI Search for commerce catalog operations.

## Google Vertex

The Automate Google Vertex connector leverages Vertex’s [Gemini API model](https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/gemini) to generate responses based on user prompts within your automation.

Gemini models are advanced machine learning models offered by Google Vertex AI, designed to handle complex natural language tasks with high accuracy and efficiency.

These models utilize sophisticated deep learning and natural language understanding techniques for tasks such as text generation, comprehension, summarization, and more.

With the [Google Vertex AI Search for commerce](https://cloud.google.com/solutions/retail-product-discovery?hl=en) platform, you can manage (create or delete) the products in the Catalog. This helps to improve product discoverability on the e-commerce site.

## Prerequisites

To use the Google Vertex connector, you first need to connect your [Google Vertex service account](https://console.cloud.google.com/welcome?project=research-sandbox-1) with Automate using the following steps:
- [Log in to your Contentstack account](https://www.contentstack.com/login) and click the **Automate **icon from the left navigation panel.
- Select your project and then the automation.
- Click **Configure Action Step** from the left navigation panel and then **Action Step** to configure third-party services.
- Within the **Choose Connector**, click the **Google Vertex **connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt017fedf663917734/66a8a34590e89a730628fed3/Select_Connector.png)
- Under **Choose an Action**, select any one action from the list. Here, we are selecting the **Send Prompt **action.

    **Note: **The Function Calling (Beta) and Function Calling Response (Beta) actions are currently in the **Beta phase** due to Google Gemini services. This status may change in the future.
- In the **Configure Action** section, click **+ Add New Account **to add your Google Vertex service account.![Add_Acount_Send_Prompt.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt89b1954bc2bde95d/66a8a3447f0b67822dfd1942/Add_Acount_Send_Prompt.png)
- In the **Authorize **modal, provide details such as **Title**, and **Service Account Key**.
To create a service account key, follow the steps below:
      Go to the **Google Cloud Platform**.
- Navigate to the **IAM & Admin** page. Select the **Service Accounts **section in the left navigation. You can use a pre-existing account or create a new Service Account to get the Service Account Key.

  **Additional Resource:** For more information on getting the Service Account Key, refer to the [Create Service Account](https://cloud.google.com/iam/docs/keys-list-get) documentation.
- Once done, provide the permission to access the Vertex API.
- Click the **Authorize **button.![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt6c9c54de169bf575/65c27809e7bf98d67a6d1ef3/Authorize_Button.png)

This sets up your Google Vertex service account for the Google Vertex connector.

## Set up the Google Vertex Connector

Perform the following steps to set up the Google Vertex connector:
- From the left navigation panel, click **Configure Action Step**.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Google Vertex **connector.
- Under **Choose an Action**, you will see the actions: **Function Calling (Beta)**, **Function Calling Response (Beta)**, **Send Prompt**, **Create or Update a Product**, and **Delete** **a** **Product**.![Select_Actions.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9d385a314a1cff37/678e10b7a949fd6890edd578/Select_Actions.png)

Once done, you can start setting up your Google Vertex connector.

### Function Calling (Beta)

The Function Calling (Beta) action allows you to generate the responses based on a configured Sub Automation. Within the Function Calling (Beta) action, you can include various sub automations, which the Gemini model will analyze to generate and return responses accordingly. To use the Function Calling (Beta) action, follow the steps below:
- Under **Choose an Action **tab, select the **Function Calling (Beta)** action.
- On the **Function Calling (Beta) Configure Action **page, enter the details given below:
      Click** + Add New Account** button to connect your Google Vertex service account as shown in the [Prerequisites](#prerequisites) step.
- In the **Select Project **drop-down, select a project to use the Vertex API.
- In the **Select Model **drop-down, select a Gemini model to generate a response. Currently, the models available are: **gemini-1.0-pro**, **gemini-1.0-pro-001**, **gemini-1.0-pro-002**, **gemini-1.5-flash-001**, **gemini-1.5-pro-001**.

  **Additional Resource: **For more information, refer to the [Google AI Gemini](https://ai.google.dev/gemini-api/docs/models/gemini) documentation.
- Provide the **Prompt Text **to generate response(s).![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbc65899770d000d4/66a8a3a259c15c5d214320c3/Select_Fields.png)
- Click the **+ Add Sub Automation** button to add multiple sub automations.

        **Note: **You must create a [Sub Automation](./sub-automation-action.md) to use it in the Function Calling (Beta) action.
- Click the **Show Optional Fields** toggle button to use the optional field.
- You can mark the **Sanitize text **checkbox to remove special characters or spaces from the chat response. Enabling this checkbox, eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8d9f8b84c3ee2cde/66a8a3a2c1034431a60674ad/Show_Optional_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click **Test Action**.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1b62e8769d9efb93/66a8a3a27f0b6709e2fd194c/Test_Action.png)
- You will get the response(s). Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt47cc8d35c10b6dff/66a8a3a2bc6ec2afa9f98e64/Save_Exit.png)

**Note: **The Function Calling (Beta) feature selects which Sub Automation to run from a list of multiple options and generates the input for it. In the [Sub Automation](./sub-automation-action.md) action, the Sub Automation determined by the Function Calling (Beta) action is executed.

### Function Calling Response (Beta)

With the** Function Calling Response (Beta)** action, you can format the output from the **Function Calling (Beta)** action and the **Sub Automation**. To use the Function Calling Response (Beta) action, follow the steps below:
- Under **Choose an Action** tab, select the **Function Calling Response (Beta)** action.
- On the **Function Calling Response (Beta) Configure Action **page, enter the details given below:
      Click** + Add New Account **button to connect your Google Vertex service account as shown in the [Prerequisites](#prerequisites) step.
- In the **Select Project **drop-down, select a project to use the Vertex API.
- In the **Select Model **drop-down, select a Gemini model to generate a response. Currently, the models available are: **gemini-1.0-pro**, **gemini-1.0-pro-001**, **gemini-1.0-pro-002**, **gemini-1.5-flash-001**, **gemini-1.5-pro-001**.

  **Additional Resource: **For more information, refer to the [Google AI Gemini](https://ai.google.dev/gemini-api/docs/models/gemini) documentation.
- In the **Function Calling Response** field, select the output from the previous Function Calling action step.
- In the **Sub Automation Response** field, select the output from the sub automation.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdcbc942325edd575/66a8a39559c15c70654320bf/Select_Fields.png)
- Click the **Show Optional Fields **toggle button to use the optional field.You can mark the **Sanitize text **checkbox to remove special characters or spaces from the chat response. Enabling this checkbox eliminates any special characters or spaces in the chat response, resulting in a clean and compatible text.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8ee91b977d54814f/66a8a395a4a6574ae01de22e/Show_Optional_Fields.png)
- Click **Proceed**.
- Check if the details are correct. If yes, then click **Test Action**.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta262d2bf72e7d319/66a8a395a3b12e71895f5ce4/Test_Action.png)
- You will get the response(s). Once set, click **Save and Exit**.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7a4c141801022f3b/66a8a395c103446b470674a9/Save_Exit.png)

**Additional Resource:** Refer to the [ChatGPT Use Cases](./chatgpt-use-cases.md) to learn more about the Sub Automation action.

### Send Prompt

This action returns the generated response from the Gemini API model.
- Under **Choose an Action** tab, select the **Send Prompt **action.
- On the **Send Prompt Configure Action** page, enter the details given below:
      Click **+ Add New Account **button to connect your Google Vertex service account as shown in the [Prerequisites](#prerequisites) step.
- In the **Select Project **drop-down, select a project to use the Vertex API.
- In the **Select Model **drop-down, select a Gemini model to generate a response. Currently, the models available are: **Gemini 1.5 Pro**, **Gemini 1.5 Flash**, and **Gemini 1.0 Pro**.

  **Additional Resource: **For more information, refer to the [Google AI Gemini](https://ai.google.dev/gemini-api/docs/models/gemini) documentation.
- In the **Prompt Text **field, enter a text to generate a response.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt425d7bcc9e5ac3b2/66a8a38b2fce458ad96fcc42/Select_Fields.png)
- Optionally, enable the **Show Optional Fields** toggle to view the optional fields.
- Enter the **System Instruction Text **to provide specific guidance or directives to the model to help it understand the context and generate an appropriate response based on the provided prompt text.For example, enter *What is Metaverse?* in Prompt Text and *Respond in Shakespeare language* in System Instruction Text.![System_Instruction_Text.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt4ff62f1a174e23c0/66a8a38bbc6ec26854f98e5f/System_Instruction_Text.png)
- Enter the **Number of Tokens **to generate the content. This must be within the range of** 1 to 8192**.
- Enter a value for the** Randomness of Responses** of the generated content. 0 being the most precise and 1 being the most random content predictions. This must be within the range of **0 to 1**.
- Enter the **Top-K** value to define how the model selects tokens for output. Entering a Top-K value of 1 implies that the next chosen token is the most likely among all tokens in the model's vocabulary. Top-K value of 3 means that the next token is selected from the three most probable tokens using temperature. This must be within the range of **1 to 40**.
- Enter the **Top-P** value to define how the model selects tokens for output. For instance, if tokens A, B, and C have probabilities of 0.3, 0.2, and 0.1; then entering a Top-P value as 0.5, the model chooses either A or B as the next token using temperature and excludes C. This must be within the range of **0 to 1**.
- Additionally, mark the **Sanitize text **checkbox to remove special characters or spaces from the chat response. By enabling this checkbox, any special characters or spaces in the chat response will be eliminated, resulting in a clean and compatible text.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae613c4cc56295a8/66a8a38b0ccb2f2ce27ffece/Show_Optional_Fields.png)
- Click the **Proceed **button.
- Click the **Test Action **button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt2abef2ba43c2909f/66a8a38ba4a6570d2c1de229/Test_Action.png)
- Once set, click the **Save and Exit **button. You will see a response generated for your prompt.![Save_Exit_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt9e6a453ef2dd284a/66a8a38bc3ff6aeb9609c718/Save_Exit_Button.png)

### Create or Update a Product

This action lets you create/update a new/existing product in the Google Vertex AI Search for the commerce catalog.
- Under **Choose an Action** tab, select the **Create or Update a Product **action.
- On the **Create or Update a Product Configure Action** page, enter the details given below:
      Click **+ Add New Account **button to connect your Google Vertex service account as shown in the [Prerequisites](#prerequisites) step.
- In the **Select** **Catalog** drop-down, select a catalog to create a new product.A **Catalog** represents a collection of all products. It acts as the master database for search, recommendations, and product organization.

        **Additional Resources: **Refer to the [About catalogs and products](https://cloud.google.com/retail/docs/catalog?utm_source=chatgpt.com) documentation to learn more.
- In the **Select** **Branch** drop-down, select the branch to create a new product.A **Branch **is a specific version of the catalog used for different purposes. For example, testing on staging, development or production environments.

        Products created in the catalog can be added, modified, or tested within specific branches before they are published live.
- Enter the **Product Name/ID** for the product you want to create. In the **Product** **Data** field, define attributes such as, title, categories, and other details. You can also fetch a predefined schema template to structure your entry data.You can either manually enter the** Product Name/ID** or retrieve it from the previous step.

        **Note:** Ensure that the `title` and `categories` keys are included in your JSON.
- Optionally, enable the** Show Optional Fields** toggle to view the optional field. Mark the checkbox to create a new product if it does not already exist.![Select_Other_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd4e7e7a6ead321d5/678e0d21cc4fb9c311ceb6ce/Select_Other_Fields.png)
- Click the **Proceed **button.
- Click the **Test Action **button to test the configured action.
- Once set, click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltabd215581d2d2c41/678e11bf5b4b8a845b68c0f6/Save_Exit.png)

### Delete a Product

This action lets you delete an existing product in the Google Vertex AI Search for the commerce catalog.
- Under **Choose an Action** tab, select the **Delete a Product **action.
- On the **Delete a Product Configure Action** page, enter the details given below:
      Click **+ Add New Account **button to connect your Google Vertex service account as shown in the [Prerequisites](#prerequisites) step.
- In the **Select** **Catalog** drop-down, select a catalog to delete an existing product.**Additional Resources: **Refer to the [About catalogs and products](https://cloud.google.com/retail/docs/catalog?utm_source=chatgpt.com) documentation to learn more.
- In the **Select Branch** drop-down, select the branch to delete an existing product.
- Enter the** Product Name/ID** for the product you want to delete.You can either manually enter the **Product Name/ID **or retrieve it from the previous step.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltfe951682f10e616f/678e0d337a4b630cc8fad2e3/Select_Fields.png)
- Click the **Proceed **button.
- Click the **Test Action **button to test the configured action.
- Once set, click the **Save and Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt818bf9a11ef5b4f3/678e13fe5a5c630b50c0e610/Save_Exit.png)

This completes the **Google Vertex **connector’s setup.

## Common questions

### Do I need a Google Vertex service account to use this connector?
Yes, you first need to connect your Google Vertex service account with Automate as described in the Prerequisites section.

### Which actions are currently in Beta?
The Function Calling (Beta) and Function Calling Response (Beta) actions are currently in the Beta phase due to Google Gemini services.

### Can I manage products in Google Vertex AI Search for commerce using this connector?
Yes, you can manage products in the Catalog using the Create or Update a Product action and the Delete a Product action.

### Where can I find more information about Gemini models?
Refer to the Google AI Gemini documentation link provided in the Select Model steps for the relevant actions.