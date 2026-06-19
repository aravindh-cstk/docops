---
title: "[How-to Guides and Knowledgebase articles] - Translate Content Using Contentstack Webhooks and Workflows, AWS Lambda, and AWS Translate"
description: Translate Content Using Contentstack Webhooks and Workflows, AWS Lambda, and AWS Translate
url: https://www.contentstack.com/docs/developers/how-to-guides/set-up-a-translation-system-with-contentstack-webhooks-and-workflows-aws-lambda-and-aws-translate
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - content-managers
version: unknown
last_updated: 2026-04-28
---

# [How-to Guides and Knowledgebase articles] - Translate Content Using Contentstack Webhooks and Workflows, AWS Lambda, and AWS Translate

This page explains how to set up a translation system by combining Contentstack webhooks and workflows with AWS Lambda, AWS API Gateway, and AWS Translate. It is intended for developers and teams configuring automated translation flows triggered by workflow stage changes, and should be used when you want to localize entries programmatically based on workflow events.

## Article content

### Item 1

#### Article section

##### Heading

Set up a Translation System with Contentstack Webhooks and Workflows, AWS Lambda, and AWS Translate

##### Content

**Note:** This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to use the [Translation](https://www.contentstack.com/docs/developers/marketplace-apps#translation) apps, visit our [Marketplace]( https://www.contentstack.com/docs/developers/marketplace-apps) documentation.

While Contentstack does not offer translation services, it offers easy integration with third-party translation providers. In this guide, we will learn how to set up a translation system using Contentstack's [webhook](/docs/developers/set-up-webhooks/about-webhooks) and [workflows](/docs/developers/set-up-workflows-and-publish-rules/about-workflows) along with AWS Lambda and AWS Translate.

**Additional Resource:** You can also set up a translation system using Memsource, read our guide on how to [Set up Translation System with Contentstack Webhooks, Memsource, and AWS Lambda](/docs/developers/how-to-guides/setting-up-translation-system-with-contentstack-webhooks-memsource-and-aws-lambda).

Here's a quick overview of the process: When the [workflow stage](/docs/developers/set-up-workflows-and-publish-rules/about-workflow-stages) of [entry](/docs/content-managers/author-content/about-entries) in the master locale changes to “Send to Translation,” a webhook is triggered, which invokes an AWS Lambda code. This code translates content using AWS Translate and then localizes the entry with the translated content using a Content Management API request. This also changes the workflow stage status of the entry to “Review Translation.”

**Note**: SSO-enabled organizations can use the management token to make API requests.

## Prerequisites
- Working knowledge of AWS API Gateways
- Access to the AWS environments such as AWS Lambda, AWS API Gateway, and AWS IAM
- [AWS Secret Key](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html), ID, and [region](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
- [Contentstack account](https://app.contentstack.com/#!/login)

## Steps for Execution
- [Set up the Essentials](#set-up-the-essentials)
- [Set up Workflows for Translation](#set-up-workflows-for-translation)
- [Set up Lambda Function for Translation](#set-up-lambda-function-for-translation)
- [Trigger a Webhook to Initiate Translation](#trigger-a-webhook-to-initiate-translation)
- [Tryout the Set up](#tryout-the-set-up)
- ## Set up the Essentials
First, [create a stack](/docs/developers/set-up-stack/create-a-new-stack), and [add a content type](/docs/developers/create-content-types) (in our example it is **AWS Translate**), [add entries](/docs/content-managers/working-with-entries/create-an-entry) to it, at least one additional [language](/docs/developers/multilingual-content), and a publishing [environment](/docs/developers/set-up-environments).
For this example you can add **French (fr)** and **German (de) **as two additional language.
**Note: **Though Contentstack supports wide variety of languages, for this extension to work smoothly add [languages which are supported by AWS translate](https://docs.aws.amazon.com/translate/latest/dg/what-is.html).
- For this exercise we have created a sample code, contact our [Support](mailto:support@contentstack.com) team to get the code. The support team will provide you **AWS Translate** zip file. Unzip the file and you will find the following folders:**global field: **This folder contains a file named** locale** which you can import as a global field in your stack.
- **content type**: This folder contains a JSON file of the content type which you can import to your stack.
- **lambda function**: Move inside the** lambda function **folder and upload the** index.zip** file in lambda function in step 3.
- Goto the **Global Fields **section of your stack and[ import the global field](/docs/developers/global-field/import-a-global-field) file(in our example it is **Locale Field**) with a select field defined within it.
This global field will display and let you select AWS supported languages in the field of your entry.
- Now,[ import the content type](/docs/developers/create-content-types/import-a-content-type) file which we downloaded in the earlier step. After importing the content type file, [add the global field](/docs/developers/global-field/add-the-global-field-to-content-types) (**Locale Field**) to your **AWS Translate** content type.
After adding the global field to your content type, it should look similar to the one given below:

Once you have these configured, then you're ready to begin the integration process for translation.

## Set up Workflows for Translation
To set up workflows for the translation process within Contentstack, follow the below steps:

Click on the “Settings” icon (press “S”) on the left navigation panel and select **Workflows **(press “alt + F” for Windows OS, and “option + F” for Mac OS).
- Click on **+ New Workflow**.
- Add stages, as required. Add a translation-related stage, such as **Send to Translation**.
- Once the editor changes the workflow stage to “Send to Translation,” the webhook will be triggered and call the AWS Lambda function.
- Now go to the Workflow Settings page and note down the WORKFLOW ID that we just created as shown below (we will need this ID later when we make Postman call to retrieve the ID of the Review stage):
- We will need the UID of the Review stage. To get the UID of the “Review” stage, open [Postman](https://www.postman.com/downloads/) or any other API collaboration & development platform and make a GET request on the following URL, enter the Workflow ID at the end of the URL:

https://api.contentstack.io/v3/workflows/{YOUR WORKFLOW UID}

You will get the following response:

This **workflow stage UID** is used while setting up the webhook in Contentstack as a custom header. So make a note of it.

## Set up Lambda Function for Translation
Perform the following steps to set up your AWS Lambda function:

Login to your [AWS Management Console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0&code_challenge=eIfp5rbZe_3p9Tw2Tehn2bXwi6w4tXUzcpFAuPKGhU4&code_challenge_method=SHA-256), select **AWS Lambda Service** from the service list.
- Click on the **Create Function** button, and then the **Author from Scratch** option. Enter the **Function name**, and choose **Runtime **as the latest version of **Node.js**.
- Click on the **Create function** button.
- AWS Lambda offers an inline code editor. Scroll down to the **Code source** section, click on the **Upload from** dropdown menu, select the **.zip file** option, and upload the** index.zip **file that you downloaded in step 1.
- Keep **Handler** as **index.handler** and click on **Save**.
- Navigate to** General Configuration** section under **Configuration **tab, click on the **Edit **button and set the **Memory **to** 524 **MB. Also, set the **Timeout** time as **5 min 3 sec **as shown below.
- To add environment variables, go to the **Configuration** tab, click on **Environment variables**, and then the **Edit** button. Add the following environment variables:**Note**: For the EU region, change the base URL to `https://eu-api.contentstack.com/.` Similarly, for Azure NA, change the base URL to `https://azure-na-api.contentstack.com/`, and for Azure EU, change the base URL to `https://azure-eu-api.contentstack.com/`.
- Once you have added these environment variables, click on **Save**.
- With these steps, we have set up our lambda function. Let's now move ahead with creating an API gateway. Scroll up to the **Function overview** section and click on the **+ Add trigger** button. From the **Trigger configuration** dropdown menu, select the **API Gateway** option.
- Then, from the **API **dropdown menu, select **Create an API** option. Select **API type **as **REST API**, keep **Security **as **Open**, and click **Add**.
- You’ll be redirected to the **Triggers **section. Expand the **Details **link to get the **API endpoint **URL. We will use this URL while setting up a webhook in Contentstack in the next step.
That's it! We have set up the lambda function and created an API Gateway to invoke it.

Once you do this setup, AWS Lambda will run the code that we have uploaded and translate the content.

## Trigger a Webhook to Initiate Translation
We will now [set up a webhook](/docs/developers/set-up-webhooks/create-a-webhook) that triggers when the entry workflow stage is set to **Send to Translation**. To do this, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Click “Settings” (or press “S”) and select **Webhooks **(press “alt + W” for Windows, and “option + W” for macOS).
- Click on **+ New Webhook.**
- Enter any valid name for your webhook, for example, **AWS Lambda For Translation**.
- In the **URL To notify** field, enter the AWS Lambda URL, where the webhook will notify about the change.
- Select the appropriate authentication method to secure your webhook. Select **None** if no authentication will be used.
- Inside **Custom Headers**, add the **workflow stage UID** which we got through Postman.Note: In the **Custom Headers** section, we have named the **workflow stage UID** as **workflow_uid** as shown in the image below.
- Within **Stack-Level Scope**, specify conditions for creating, deleting, assigning, or unassigning branches, branch aliases, taxonomy or terms.
- In the **Branch-Level Scope** section, select the branch for which this webhook is applicable and configure trigger conditions for the specific branch.
- In the **Conditional View** section, select the options **Any **> **Entry** > **All** > **Workflow Stage Changed** > (Workflow name) > (Stage name for example, "Send for Translation").
- Click **Save** to create the webhook.
- This will configure your webhook to trigger when workflow stage is changed to “Send for Translation”, like in the above workflow example. As soon as the webhook is triggered, it notifies the specified URL about the event along with a JSON payload.****

## Tryout the Set up
Goto the **AWS Translate **entry that you created in step 1, and add content to your entry.
- Navigate to the global field and add AWS languages to the select field (**Locale Field **in our example**).******We have selected **French (fr)** and **German (de) **from the AWS languages displayed via the select field.
****
- Now select the language that you added to your stack, using the language selector option located on the top-right corner of the page.
- Now, goto your default language and change the workflow to  “Send for Translation", and from the language selector dropdown select the localized language in which you want to translate your content.
- **Additional Resource:** Though we don't provide translation, we do provide the ability to integrate with third-party translation providers that will translate content for you. All you need to do is make use of Contentstack workflows and set up a webhook trigger to initiate the translation process. Use any popular translation tool, such as Worldserver and iLangl, to translate your content. Here's our [Manage Content Translation in Contentstack](/docs/developers/how-to-guides/manage-content-translation-in-contentstack) guide that gives a detailed explanation of how you can do all of this.

## Title

[How-to Guides and Knowledgebase articles] - Translate Content Using Contentstack Webhooks and Workflows, AWS Lambda, and AWS Translate

## Url

/developers/how-to-guides/set-up-a-translation-system-with-contentstack-webhooks-and-workflows-aws-lambda-and-aws-translate

## Common questions

### Is this page still supported?
**Note:** This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### What triggers the translation process in this setup?
When the workflow stage of entry in the master locale changes to “Send to Translation,” a webhook is triggered, which invokes an AWS Lambda code.

### What does the AWS Lambda function do after it is invoked?
This code translates content using AWS Translate and then localizes the entry with the translated content using a Content Management API request.

### What should EU or Azure region users change for the base URL?
**Note**: For the EU region, change the base URL to `https://eu-api.contentstack.com/.` Similarly, for Azure NA, change the base URL to `https://azure-na-api.contentstack.com/`, and for Azure EU, change the base URL to `https://azure-eu-api.contentstack.com/`.

