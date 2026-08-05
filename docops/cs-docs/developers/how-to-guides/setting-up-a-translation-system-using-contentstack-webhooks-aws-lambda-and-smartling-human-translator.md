---
title: "[How-to Guides and Knowledgebase articles] - Setting up a Translation System Using Contentstack Webhooks, AWS Lambda, and Smartling Human Translator"
description: "Guide to set up a language translation system for a Contentstack-powered website using Contentstack Webhooks, AWS Lambda, and Smartling Human Translator."
url: https://www.contentstack.com/docs/developers/how-to-guides/setting-up-a-translation-system-using-contentstack-webhooks-aws-lambda-and-smartling-human-translator
product: "Contentstack"
doc_type: "how-to-guide"
audience:
  - developers
version: "unknown"
last_updated: "unknown"
---

# [How-to Guides and Knowledgebase articles] - Setting up a Translation System Using Contentstack Webhooks, AWS Lambda, and Smartling Human Translator

This page explains how to set up a translation system that connects Contentstack workflows and webhooks with AWS Lambda and Smartling’s Human Translator flow. It is intended for developers integrating translation automation into a Contentstack-powered site, and should be used when you want workflow-stage changes to trigger translation and then write translated content back into Contentstack.

## Setting up a Translation System Using Contentstack Webhooks, AWS Lambda, and Smartling Human Translator

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to use the [Translation](../marketplace-apps.md#translation) apps, refer to the [Marketplace](../marketplace-apps.md) documentation.

Smartling is one of the most widely used cloud-based language translation platforms. It helps you to localize content across different digital properties. Through the APIs provided by Contentstack and Smartling, it is possible to integrate these two powerful applications.

In this guide, we will go through the steps required to set up a language translation system for your Contentstack-powered website by using Contentstack Webhooks, AWS Lambda, and Smartling that uses Human Translation.

**Additional resource**: This guide discusses the steps required to translate content using the Human Translator feature in Smartling. We have another guide that details out the steps required to set up a [content translation system using the MT profile](/docs/developers/how-to-guides/setting-up-a-translation-system-using-contentstack-webhooks-aws-lambda-and-smartling-machine-translation) feature in Smartling.

**Process overview**: We will first set up the essentials, such as creating a stack and one additional language, in Contentstack. We will create a workflow and add 4 stages in it namely Draft, Send for Translation, Review, and Completed. We will then create lambda functions that will help us create the bridge between Contenstack and Smartling for translation.

We will also set up a webhook such that when the workflow stage in an entry changes from Draft to Send for Translation, the webhook will issue a trigger to our first lambda function to initiate the translation process with Smartling. We will then translate the content in the Smartling app. And using the second lambda function, we will update the content of the entry in the required language along with changing its workflow stage to “Review.”

**Additional resource**: Smartling has implemented **Contentstack Connector **that pushes content from Contentstack to the Smartling app. Read more about this [Connector](https://help.smartling.com/hc/en-us/articles/1260801669349-Contentstack-Connector-Overview) on their official website.

## Prerequisites

- [AWS account](https://aws.amazon.com/) and access to AWS Lambda, AWS API Gateway, and AWS IAM
- [Contentstack Account](https://app.contentstack.com/#!/login)
- [Smartling Account](https://www.smartling.com/)
- Working knowledge of [AWS Lambda and API Gateways](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html)

## Steps for Execution

Here are the steps required to set up this translation system:

- [Set up the essentials in Contentstack](#set-up-the-essentials-in-contentstack)
- [Set up the workflow for translation in Contentstack](#set-up-the-workflow-for-translation-in-contentstack)
- [Configure your project in Smartling](#configure-your-project-in-smartling)
- [Set up the AWS lambda functions](#set-up-the-aws-lambda-functions)
- [Trigger a webhook to initiate translation](#trigger-a-webhook-to-initiate-translation)
- [Try out the steps](#try-out-the-steps)

Let's get started!

## Set up the Essentials in Contentstack

To set up the essentials, [log in to your Contentstack account](https://app.contentstack.com/#!/login) and follow the steps given below:

[Create a stack](../set-up-stack/create-a-new-stack.md), add a [content type](/docs/developers/create-content-types) (for our exercise, we have [created](../create-content-types/create-a-content-type.md) a [Single Content Type](../create-content-types/single-vs-multiple-content-types.md#single) named **Smartling**).

**Note**: In our example, we have used “title,” “url,” “single_line,” and “rich_text_editor,” fields. We will translate the content of these fields. Content of special fields such as File, Boolean, Reference, Select will not be translated.

- Next, [add two languages](/docs/developers/multilingual-content) (locales), in our example, we have added the following two languages:

English [en-us] which is the source language.

- French- France [fr-fr] is another language which will be our target language.

  **Note**: Ensure that the languages you add are [supported by Smartling](https://help.smartling.com/hc/en-us/articles/360049532693-Supported-Locales).
- Once you have added the languages, go to your content type (**Smartling** in our example) and [create an entry](../../content-managers/author-content/create-an-entry.md) in the en-us locale.
- Lastly, [create a management token](../create-tokens/generate-a-management-token.md) for your stack which we will use later while setting up the lambda function.
- With these steps, we have set up the essentials in Contentstack. Let's now move ahead with creating a workflow.

## Set up the Workflow for Translation in Contentstack

To set up workflows for the translation process, perform the following steps:

Click the “Settings” icon on the left navigation panel, and click on **Workflows**.![Smartling_Machine_Translation_1_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc6b38e31c7cd6bbd/60be1f5b324cea0e697822d5/Smartling_Machine_Translation_1_highlighted.png)

- On the **Workflow Settings** page, click on **+ New Workflow**.![Smartling_Machine_Translation_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc7c99fe9f16b360f/60be1f6d3fb413770446eb7b/Smartling_Machine_Translation_2_highlighted.png)
- Provide a suitable name to your workflow and an optional description.
- Under the **Scope** option, select if this workflow should be applied to **All Content Types** or **Specific Content Type(s)**. For our example, we will select the **Specific Content Types(s)** option and then select our content type, **Smartling** from the dropdown menu, as shown below:![Smartling_Machine_Translation_3_no_highlight.gif](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt177e1b2e1a03b1d9/6140eae29d27cf7da4b9fcb1/Smartling_Machine_Translation_3_no_highlight.gif)
- Inside the **WORKFLOW STAGES** option, [add four stages](../set-up-workflows-and-publish-rules/add-workflows-and-stages.md#add-workflow-stages) (for example, Draft, Send for Translation, Review, and Completed) as shown below:
****

**Additional resource**: Learn more about workflow and its stages, refer to the [set up workflows](../set-up-workflows-and-publish-rules/add-workflows-and-stages.md) guide.

- Lastly, click on the **Enable Workflow** checkbox and then on the **Save** button.
- With these steps, our workflow is ready. Now when the editor changes the workflow stage from “Draft” to “Send for Translation,” the webhook will be triggered (we will set it up later in the guide) and call the first lambda function.
- Now go back to the **Workflow Settings** page and note down the **WORKFLOW ID** that we just created as shown below:
- We will need the UID of the **Review** stage which we will add as an environment variable while setting up our lambda function. To get the UID of the “Review” stage, open [Postman](https://www.postman.com/downloads/) or any other API collaboration & development platform and make a GET request on the following URL, enter the Workflow ID (highlighted above) at the end of the URL:
- https://api.contentstack.io/v3/workflows/{YOUR WORKFLOW UID}
- **Note**:Refer to our [workflow API documentation](../../../api-docs/api-detail/content-management-api.md#get-a-single-workflow) to learn more about the required headers to make an API request.
- SSO-enabled organizations can use the management token to make API requests.
- You will get the following response:
- The highlighted UID in the above screenshot will be used in the lambda function's environment variable, so make note of it.
- Let's now move ahead and configure the project in Smartling.

## Configure Your Project in Smartling

For this exercise, you need a full stack account with Smartling. You can sign up with one of their plans and get started with setting up your account. You may read through their [getting started](https://help.smartling.com/hc/en-us/articles/115003671993-Sign-in-to-Smartling) article.

### Create a New Project

To create a new project in Smartling, log in to your Smartling account and follow the steps given below:

Click on the **SMARTLING** icon at the top left corner.

- Then, create a new project by clicking on **Create New Project** as shown below:![Create_New_Project.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt66229fde6ed0d7f9/5fe0c3671166ce7d2ed196cf/Create_New_Project.png)
- On the **Create Project** screen, the **Apple iOS** is selected by default, leave it as is and click on **Next**.
- On the **Project Details** screen, provide a suitable name to your project. If you have already created a linguistic package earlier, then select it from the **Linguistic package** dropdown.

If you haven't created any linguistic package yet, click on the **Create New Package** link. When you click on it, the **Source Language** dropdown appears. Select your source language, for example, English (United States), and then add your target language in the **Target Languages** field as shown below. For our example, we have added French (France) as our target language. Then, click on **Create Project**:

******Note**: You can add more languages as your target language but French-France is selected as it is the requirement of this exercise.

Your project is now created in Smartling. Let's move ahead and create a workflow in Smartling.

### Add a Workflow for Your Smartling Project

For human translation, the workflow is already added by default in Smartling. But if you want to learn how to add a workflow in Smartling, follow the steps given below:

- Click on the project that you just created, then on the **Settings** gear icon on the extreme right corner of the screen, and select **Project Settings** as shown below:![Project_Settings.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt40d9f030c112c49d/5fe0c528a00f8977b7234065/Project_Settings.png)
- On the **Settings** page, select **Workflows** from the left navigation panel.
- On the **Workflow Configuration** page, you will see a default workflow. Click on the dropdown icon inside the **Translation** block and select **Manage Step** as shown below:![Workflow_Configuration.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt0c3b52fce7f2ee16/5fe0c570a703d10ab87e8a8f/Workflow_Configuration.png)
- On the **Manage Step: Translation** screen, provide a suitable **Step Name**, for example **Translation**. In the **Translation Provider** dropdown, the **Human translators** option is selected by default, don't change it and also leave the remaining options to their default values, and click on **Save** as shown below:![Human_Translator.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt4743ba673b4d0706/5fe0c818b721aa1cd8dc1baf/Human_Translator.png)

The **Smartling Workflow** is now ready.

**Note**: If you want to add more target languages to your project, click on the **Project Settings** option, and select **Languages** (similar to how you selected **Workflows** above). Then, click on the **Add Language** button. Then, in the **Add Languages** modal, add languages in the **Select Language** dropdown. Select **Project Default** from the **Default Translation Workflow** dropdown, Authorize all active strings from the **Translation Authorization** dropdown, and click on **Add**.

Let's move ahead and create user and secret keys.

### Generate User Identifier and Secret Keys

To do this, carry out the following steps:

- Click on the **ACCOUNT SETTINGS** dropdown at the top of the screen and select **API**.
- On the **API** screen, click on **Create Token** button inside the **Project Tokens** section as shown below:![Project_Token.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blteae2bd250732c00a/5fe0c94f1166ce7d2ed196ed/Project_Token.png)
- On the **Create Project Access Token** popup, select your project (if not already selected, from the dropdown) provide a name inside the **Token Name** field, and click on **Create** as shown below:![Project_Access_Token_Screen.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt90e2bd4b3da21d13/5fe0c99ca00f8977b7234079/Project_Access_Token_Screen.png)
- Make note of the User identifier, Project ID, and User Secret keys as we will need these while setting up our lambda function.
- With these steps we have now configured our Smartling account. Let's move ahead and create the lambda functions.

## Set up the AWS Lambda Functions

For this exercise, we will be creating two lambda functions. The first lambda function (once invoked) will take the content of the entry, write it into a file, and place it in the Smartling app for translation.

The second lambda function gets invoked once the file (placed by the first lambda function) has been translated and then it updates the entry with the translated content along with changing the workflow stage of that entry to "Review."

### Set up the First Lambda Function

Let's now create the first lambda function by using the steps given below:

Log in to your [AWS Management Console](https://aws.amazon.com/console/), select **Lambda** from the **Service** list.

- Click on the **Create function** button, and then the **Author from Scratch** option.
- Provide a name to your lambda function inside the **Function name** field, select **Node.js 12.x** as your **Runtime** language, and click on the **Create function** button.
- You will get a success message on creation of the lambda function. If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.
- Once you receive the code, use the file named **before-translation**, and upload it as a ZIP file by scrolling down to the **Actions** dropdown (in the **Function code** section) and selecting **Upload a .zip file** as shown below:![Upload_a_zip_file.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6b159ffe63ae47b4/6388f6a932ba8c322850dbe4/Upload_a_zip_file.jpg)
- Keep **Handler** as **index.handler** and click on **Save**.
- Goto **Environment Variable** section, under **Configuration** tab and add the following variables to it, by clicking on **Edit** and then **Add environment variable**.

**apiKey**: <<Your stack API key>  
**baseUrl**: `https://api.contentstack.io` (for Europe region, enter the value as `https://eu-api.contentstack.com/`. Similarly, for Azure NA region, enter the value as `https://azure-na-api.contentstack.com`, and for Azure EU region, enter the value as `https://azure-eu-api.contentstack.com`).  
**contentTypeUid**: <<Your content type UID, for our example it is Smartling)  
**managementToken**: <<Your stack management token>>  
**projectId**: <<Your Smartling project ID we created above>>  
**sourceLocale**: <<Source language>>  
**targetLocale**: <<Target language>>  
**userIdentifier**: <<User user identifier key that we generated above in smartling>>  
**userSecret**: <<User secret key that we generated above in Smartling>>  
**callbackUrl**: <<API Endpoint of the second lambda function. Refer [Smartling callback URL](https://help.smartling.com/hc/en-us/articles/360007829194-Callbacks-and-Webhooks) for more details>>

- Once you have made changes in the settings, click on the **Save** button.
- Your lambda function is now ready. Scroll up to the **Designer** section and click on **+ Add trigger**.
- On the **Add trigger** screen, from the **Select a trigger** dropdown, select **API Gateway**.
- From the **API** dropdown, select **Create an API**. Then, select **REST API** inside the **API type** block, select **Open** from the **Security** dropdown, and click on **Add**.![Trigger_config.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta523e829588b3b8a/5fe0cc131ebd9777b168f389/Trigger_config.png)
- An API for your lambda function is now created. Under the **Designer** block, click on **API Gateway**, you will see the **Details** link. Click on it and you will find your **API endpoint**. Make a note of it as we will need it while setting up our webhook in Contentstack.![Details_section_in_Trigger.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blta2fd582a92cf4e15/5fe0cc5a1688a075156a4a8a/Details_section_in_Trigger.png)

Let's move ahead and create our second lambda function.

### Set up the Second Lambda Function

Let's set up the second lambda function which will be invoked once the translation gets completed. Follow the same steps, as mentioned above. But this time, use the file named **after-translation** and upload it as a zip file in your lambda function. Also, use the following environment variables while setting up the function:

In the above screenshot, **workflowStageUid** is the UID of the **Review** stage that we retrieved using Postman. So enter the UID of the Review stage as the value for this environment variable.

Follow similar steps to create an API trigger for this lambda function as well and use its API endpoint as the value of the callbackUrl environment variable in your first lambda function.

## Trigger a Webhook to Initiate Translation

To create and [set up a webhook](../set-up-webhooks/create-a-webhook.md) in Contentstack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Hover over the “Settings” icon on the left navigation panel, and click on **Webhooks**.

- On the **Webhooks** page, click on **+ New Webhook**.
- On the **Create Webhook** page, fill up the **Name** field (for example, Smartling Translation). In the **URL to notify** field, enter the URL (the API endpoint of the first lambda function) that you generated in the previous step.
- Scroll down to the When section for creating a trigger for the webhook as shown below:![Smartling_Machine_Translation_6_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt312ab18479e87d3d/60be1fcb36617c1194b6cc92/Smartling_Machine_Translation_6_no_highlight.png)
- Ensure to check the **Enable Webhook** option and click on the **Save** button to save your settings.
- With these steps, we have completed the entire set up and now we are ready to try it out.

## Try Out the Steps

To do this, follow these steps:

Go to your entry in your content type (in our example, it is **Smartling** content type) and change the workflow stage by selecting **Send for Translation** from the **WORKFLOW DETAILS** section on the right side.

- The workflow stage changes to "Send for Translation". Upon the change of stage, the webhook triggers a notification to our first lambda function. The function takes the content of the entry, creates a file, and places it in your project in the Smartling app.
- Now go to your Smartling project that you created earlier and click on the **Files** option as shown below:![The_File_Option.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5ccf05f770151247/6388f6e5c97f0e5fe17bc825/The_File_Option.jpg)
- You will see the file created and placed by the lambda function with the name **translate.json** as shown below:![translatejson_file.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt533be0e98b4e9a52/5fe0ce5fa00f8977b7234099/translatejson_file.png)
- Click on that file and you will see the list of target languages that you have added in Smartling. Click on **More options** (three dots) next to the **Download** option corresponding to your target language and click on **View Translations**.![View_Translations.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd795d8c4b99f2051/5fe0ce88a7955d1a6a8905bc/View_Translations.png)
- Select your source string, click on **More options** (three dots), and select **Edit in CAT Tool** as shown below:![Edit_in_CAT_Tool.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt44bff2dcffba1e8e/6388e48f908ab80839eb745a/Edit_in_CAT_Tool.jpg)
- You will be redirected to the translation page where you can insert the translated text. Under **Language Resources** on the right top corner, hover over **MT**, and click on **Insert MT**.
- Click on **Save All**. A pop up will ask you for confirmation so click on **Save**.
- Then, click on **Submit**. Another pop up will ask you for confirmation. Let the default settings as is and click on **Submit**. You will get a confirmation message, click on **Close**.
- Now come back to your project and refresh the page. The status has now changed to **Published** from **In-progress**. This change of status will invoke the second lambda function which will update the entry with translated content and also changes the workflow stage to "Review".
- Go back to your entry in Contentstack and select **French - France** from the **locale** drop-down and you should see your entry translated in the target language, French and the workflow stage changed to **Review**.

**Additional resource**: We have created similar guides that use [AWS Translate](./set-up-a-translation-system-with-contentstack-webhooks-and-workflows-aws-lambda-and-aws-translate.md) and [Memsource](/docs/developers/how-to-guides/setting-up-translation-system-with-contentstack-webhooks-memsource-and-aws-lambda) for content translation for Contentstack-powered websites. If you use any other platform besides the ones mentioned, you can still create the integration by following the steps mentioned in our [Manage Content Translation in Contentstack](/docs/developers/how-to-guides/manage-content-translation-in-contentstack) guide.

## Common questions

**Q: What triggers the translation process in this setup?**  
A: A webhook is set up such that when the workflow stage in an entry changes from Draft to Send for Translation, the webhook will issue a trigger to the first lambda function.

**Q: How many AWS Lambda functions are used and what do they do?**  
A: Two lambda functions are used: the first places a file in Smartling for translation, and the second updates the entry with translated content and changes the workflow stage to "Review."

**Q: Which workflow stage UID is required as an environment variable?**  
A: The UID of the **Review** stage is required and is used in the lambda function's environment variable.

**Q: Is this page maintained and supported?**  
A: **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.