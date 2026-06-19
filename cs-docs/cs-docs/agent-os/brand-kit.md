---
title: "[Automations guides and connectors] - Brand Kit Connector"
description: Documentation for the Brand Kit Connector in Contentstack Automations, including prerequisites, account connection steps, and available actions for Generative AI, Knowledge Vault, and Voice Profile.
url: https://www.contentstack.com/docs/agent-os/brand-kit
product: Contentstack
doc_type: automation-connector-guide
audience:
  - developers
  - admins
version: current
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Brand Kit Connector

This page explains how to connect and set up the Contentstack Brand Kit connector in Automations, including prerequisites and step-by-step configuration for Generative AI, Knowledge Vault, and Voice Profile actions. It is intended for Contentstack organization/stack admins and developers configuring automation workflows that use Brand Kit data.

## Brand Kit Connector

Contentstack's Brand Kit lets you streamline the management of brand identity and guidelines for your content.

Within the Brand Kit platform, you can create a Brand Kit to store brand-specific information. Inside a Brand Kit, you can make tone-specific Voice Profiles to set the tone of voice, formality level, and other key branding elements that highlight your brand. Each Brand Kit contains a Knowledge Vault, a centralized repository designed to store, manage, and organize all brand-related data items. Serving as a comprehensive knowledge base, it supports Contentstack's Generative AI by offering a reliable reference for content creation.

**Additional Resource: **Refer to the [Brand Kit](/docs/content-managers/brand-kit/about-brand-kit) documentation to know more.

The Brand Kit connector lets you perform Brand Kit specific actions. With this connector, you can fetch the details of Voice Profiles, Generative AI content, and create/update/delete and fetch the details of the Knowledge Vault items.

Details of each action are covered in their respective sections.

## Prerequisites

- Brand Kit enabled for your Contentstack organization.
- Access to the Contentstack Organization/Stack as the Owner/Admin.

To use the Brand Kit connector, you first need to add your Brand Kit account. To do so, follow the steps given below:

## Connect your Brand Kit Account to Automate

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Brand Kit **connector.
- Under **Choose an Action** tab, select any one action from the list. Here, we are selecting the **Create an Item in Knowledge Vault **action.
- On the **Configure Action **page, click the **+ Add New Account** to add your Brand Kit account.
- In the pop-up window, mark the checkboxes for all the OAuth permissions and then click the **Authorize **button.
- In the pop-up, select your organization to complete the authorization.
- In the pop-up that appears, view the module-specific access rights provided to the app. Click **Authorize **to complete authorization.
- Provide an Account Name and then click **Save**.

Once done, you can go ahead and set up your Brand Kit connector.

## Set up the Brand Kit Connector

Perform the following steps to set up the Brand Kit connector:

- From the left navigation panel, click **Configure Action Step**.
- Then, click **Action Step **to configure third-party services.
- Within the **Configure Action **Step, click the **Brand Kit **connector.

**Note: **You can sort and search the connector(s) based on the filter.

- Under **Choose an Action**, you will see these categories of actions: **Generative AI**, **Knowledge Vault**, and **Voice Profile**.

Let’s look at each of them in detail.

## Generative AI Action

The Generative AI acts as a bridge connecting your Vector database and the Large Language Model (LLM). When you give a prompt or command, the Generative AI API uses the prompt and sends it to the Vector database. The Vector database fetches a bunch of relevant data.

Next, the Generative AI API passes this data to the Large Language Model (LLM). Based on your prompt, the LLM then analyzes the data and understands what it means. Finally, the Generative AI API sends back the processed information to you as a response.

**Additional Resource: **Refer to the [Generative AI API](/docs/developers/apis/brand-kit-management-api#generative-ai) documentation to know more.

With the Generative AI action, you can fetch the details of the response generated using a Voice Profile and Knowledge Vault. You can perform Generative AI-based operations using the following Generative AI action.

Let’s look at the action in detail.

### Generative AI

This action fetches a response based on the provided prompt, generated using the selected Voice Profile and optionally the Knowledge Vault.

- Under **Choose an Action **tab, select the **Generative AI **action.
- On the **Generative AI Configure Action **page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **and **Voice Profile **from the **Lookup **list.
- Enter the preferred **Prompt **to generate the response.
- Click the **Use Knowledge Vault **checkbox to generate a response aligned with the **Knowledge Vault **items.
  - If you mark the checkbox, the AI will check for the items in the Knowledge Vault as per the prompt and the selected Voice Profile and generate a response for the provided prompt.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

## Knowledge Vault Actions

A Knowledge Vault is a centralized repository to store, manage, and organize brand-related documents, data, and content in your Brand Kit. You can create, update, or delete items within a Knowledge Vault. These items can be used to generate responses using the [Generative AI](#generative-ai) action.

**Additional Resource: **Refer to the [Knowledge Vault](/docs/content-managers/brand-kit/about-knowledge-vault) documentation to know more.

With the Knowledge Vault actions, you can create/delete/update and fetch the details of the items in the Knowledge Vault. You can perform Knowledge Vault based operations using the following Knowledge Vault actions.

**Example use case:**

Set up an automation with Create an Item in Knowledge Vault action and Generative AI action. With this automation, you can create an item in Knowledge Vault and generate content using the Knowledge Vault items and the prompt.

If you do not mark the checkbox for Knowledge Vault, Generative AI will provide a generic response.

**Additional Resource: **Refer to the [Knowledge Vault API](/docs/developers/apis/brand-kit-management-api#knowledge-vault) documentation to know more.

### Create an Item in Knowledge Vault

This action lets you create a new item in the Knowledge Vault.

- Under **Choose an Action **tab, select the **Create an Item in Knowledge Vault** action.
- On the **Create an Item in Knowledge Vault Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **from the **Lookup **list.
- Enter the preferred **Content **to create an item.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit** button.

### Delete an Item from Knowledge Vault

This action deletes an item from the Knowledge Vault.

- Under **Choose an Action **tab, select the **Delete an Item from Knowledge Vault **action.
- On the **Delete an Item from Knowledge Vault Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **from the **Lookup **list.
- Select the **Knowledge Vault Item **you want to delete from the **Lookup **list.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Get All Items in Knowledge Vault

This action fetches the details of all the items in the Knowledge Vault.

- Under **Choose an Action **tab, select the **Get All Items in Knowledge Vault** action.
- On the **Get All Items in Knowledge Vault Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **from the **Lookup **list to fetch all the items.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Get a Single Item in Knowledge Vault

This action fetches the details of a single existing item in the Knowledge Vault.

- Under **Choose an Action **tab, select the **Get a Single Item in Knowledge Vault** action.
- On the **Get a Single Item in Knowledge Vault Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **and **Knowledge Vault Item **from the **Lookup **list to fetch the details of a single item.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Get Data Chunks from Knowledge Vault

This action retrieves the most relevant data chunks by querying the existing Knowledge Vault in your Contentstack Brand Kit.

**Note:** You can fetch up to a maximum of **two** relevant data chunks at a time.

- Under **Choose an Action** tab, select the **Get Data Chunks from Knowledge Vault **action.
- On the **Get Data Chunks from Knowledge Vault Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand** **Kit** from the **Lookup** list to fetch the details of the data chunks from the Knowledge Vault.
- In the **Search** **Content** field, enter the content you want to query within the existing Knowledge Vault to retrieve the most accurate and relevant data chunks.**Note**:Ensure that items are added to the Knowledge Vault to enable the retrieval of data chunks.
- If the Knowledge Vault does not contain content matching the **Search** **Content**, the output will be generated based on the highest similarity score.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Update an Item in Knowledge Vault

This action lets you update an existing item in the Knowledge Vault.

- Under **Choose an Action **tab, select the **Update an Item in Knowledge Vault **action.
- On the **Update an Item in Knowledge Vault Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **and **Knowledge Vault Item **from the **Lookup **list.
- Enter the preferred **Content **to update the selected item.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

## Voice Profile Actions

Voice Profiles define a brand or individual user's preferred writing style, tone, and communication preferences. Through tailored Voice Profiles, you can direct the AI to produce content that mirrors the unique brand style and messaging objectives.

Within a Brand Kit, you can create multiple Voice Profiles, enabling the selection of distinct styles for various scenarios. For example, a company might prefer a formal tone for reports or press releases while opting for a casual tone for blog and social media content.

Within the Contentstack’s CMS, you can use the [AI Assistant](/docs/developers/marketplace-apps/ai-assistant-with-brand-kit) app to generate content based on the Brand Kit and Voice Profile.

**Additional Resource: **Refer to the [Voice Profile](/docs/content-managers/brand-kit/about-voice-profile) documentation to know more.

With the Voice Profile actions, you can create, update, delete, and fetch the details of all the Voice Profiles and Brand Kit. You can perform Voice Profile based operations using the following Voice Profile actions.

### Create a Voice Profile

This action creates a new Voice Profile in a specific Brand Kit.

- Under **Choose an Action **tab, select the **Create a Voice Profile** action.
- On the **Create a Voice Profile Configure Action **page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **from the **Lookup **list.
- Enter the **Voice Profile Name **to create a new Voice Profile.
- **[Optional] **Enable the **Show Optional Fields** toggle button to display the additional fields.
- Enter or update the short **Description **for the new Voice Profile.
- Select the **Formality Level**, **Tone of Voice**, **Humor Level**, **Language Complexity Level** from the drop-down list.**Formality Level**: You can set the formality level as **None**, **Casual**, **Business**, or **Professional**. Let’s discuss these in detail:**None**: Generic content without any specifications.
- **Casual**: Uses an informal but engaging tone that makes content more compelling.**Example: **"It’s true, nobody really enjoys grocery shopping. Here's five ways to make it less painful."
- **Business**: Employs clear and concise language that maintains a tone suitable for business settings.**Example: **"Please note that customer support is available 24/7 via our online customer portal."
- **Professional**: Uses polished language often found in legal documents or important announcements.**Example: **"We are pleased to announce the official launch of our new product line."
- **Tone Of Voice**: You can set the tone of Voice as **None**, **Informative**, **Assertive**, or **Persuasive**. Let’s discuss these in detail:**None**: Generic content without any specifications.
- **Informative**: Delivers facts in a neutral way, without opinions or personal slants.**Example: **"The report shows a 15% increase in sales."
- **Assertive**: Presents arguments and ideas with confidence, making clear recommendations.**Example: **"This method is the most effective based on our research."
- **Persuasive**: Uses strong arguments and emotional appeals to influence action or belief.**Example: **"Upgrade now and unlock exclusive features to transform your experience!"
- **Humor Level**: You can set the humor level as **None**, **Serious**, **Subtle**, or **Lighthearted**. Let’s discuss these in detail:**None**: Generic content without any specifications.
- **Serious**: Maintains a strictly professional tone, avoiding humor altogether.**Example: **"Lack of data security can have serious consequences."
- **Subtle**: Uses light touches of humor or wit to keep the audience engaged without compromising professionalism.**Example:** "Here are ten tips for writing email subject lines that won’t end up in the dreaded spam folder."
- **Lighthearted**: Incorporates relevant humor to connect with the audience and create a more playful atmosphere.**Example:** "Sometimes my biggest accomplishment of the day is simply remembering to mute myself during a virtual meeting."
- **Language Complexity Level**: You can set the complexity level as **None**, **Plain**, **Straightforward**, or **Technical**. Let’s discuss these in detail:**None**: Generic content without any specifications.
- **Plain**: Uses everyday words that are clear and understandable to a broad audience.**Example:** "Turn on the device and follow the on-screen instructions."
- **Straightforward**: Employs clear communication, potentially including industry-specific terms relevant to the target audience.**Example: **"The ROI of this investment is significant."
- **Technical**: Leverages advanced concepts and specialized vocabulary for audiences with prior knowledge.**Example:** "The software leverages machine learning algorithms for optimization.
- Enter the content in the **Insights **field which will serve as additional information that you can provide to the AI model.
- Enter the **Sample Content **for your Voice Profile to generate similar content in action.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Delete a Voice Profile

This action deletes an existing Voice Profile from a specific Brand Kit.

- Under **Choose an Action **tab, select the **Delete a Voice Profile** action.
- On the **Delete a Voice Profile Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **and **Voice Profile **from the **Lookup **list.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Get All Voice Profiles

This action fetches the details of all the Voice Profiles from a specific Brand Kit.

- Under **Choose an Action **tab, select the **Get All Voice Profiles** action.
- On the **Get All Voice Profiles Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **from the **Lookup **list to fetch the details of all the Voice Profiles.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Get a Single Brand Kit

This action fetches the details of a single Brand Kit in an organization.

- Under **Choose an Action** tab, select the** Get a Single Brand Kit** action.
- On the **Get a Single Brand Kit Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **from the **Lookup **list to fetch the details of a single brand kit.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Get a Single Voice Profile

This action fetches the details of a single Voice Profile.

- Under **Choose an Action** tab, select the **Get a Single Voice Profile** action.
- On the **Get a Single Voice Profile Configure Action** page, enter the details given below:Click **+ Add New Account** button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **and **Voice Profile **from the **Lookup **list.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

### Update a Voice Profile

This action updates an existing Voice Profile in a specific Brand Kit.

- Under **Choose an Action **tab, select the **Update a Voice Profile** action.
- On the **Update a Voice Profile Configure Action** page, enter the details given below:Click **+ Add New Account **button to connect your Brand Kit account as shown in the [Connect your Brand Kit Account to Automate](#connect-your-brand-kit-account-to-automate) step.
- Select a **Brand Kit **and **Voice Profile **from the **Lookup **list.
- **[Optional]** Enable the **Show Optional Fields** toggle button to display the additional fields.**Note**: If you have enabled the **Show Optional Fields** toggle button, you must select at least **one **optional field to update a Voice Profile.
- Enter a new **Voice Profile Name** to update the title of the Voice Profile.
- Enter or update the short **Description **for the existing Voice Profile.
- Select the **Formality Level**, **Tone of Voice**, **Humor Level**, **Language Complexity Level** from the drop-down list.You can update the Formality Level, Tone Of Voice, Humor Level, and Language Complexity Level for the Voice Profile as required. Additionally, you can update the information inside the **Insights **and **Sample Content **fields as shown in the [Create a Voice Profile](#create-a-voice-profile) step.
- Once done, click **Proceed**.
- Click **Test Action **to test the configured action.
- The output will be shown as below. Click the **Save and Exit **button.

This sets the **Brand Kit **connector.

## Common questions

### Who can configure the Brand Kit connector?
Brand Kit enabled for your Contentstack organization and Access to the Contentstack Organization/Stack as the Owner/Admin.

### What action categories are available in the Brand Kit connector?
**Generative AI**, **Knowledge Vault**, and **Voice Profile**.

### How many relevant data chunks can be fetched using “Get Data Chunks from Knowledge Vault”?
You can fetch up to a maximum of **two** relevant data chunks at a time.

### Can Generative AI generate responses without using the Knowledge Vault?
If you do not mark the checkbox for Knowledge Vault, Generative AI will provide a generic response.