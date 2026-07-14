---
title: "[How-to Guides and Knowledgebase articles] - Sync Data Between Stacks Using Contentstack Webhooks and AWS Lambda"
description: Sync data between Contentstack stacks using Contentstack Webhooks and AWS Lambda.
url: https://www.contentstack.com/docs/developers/how-to-guides/sync-data-between-stacks-using-contentstack-webhooks-and-aws-lambda
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Sync Data Between Stacks Using Contentstack Webhooks and AWS Lambda

This page explains how to sync content between multiple Contentstack stacks by triggering an AWS Lambda function via Contentstack Webhooks. It is intended for developers working with multiple stacks (a global/parent stack and child stacks) and should be used when you want changes in one stack to automatically update other stacks.

## Sync Data Between Stacks Using Contentstack Webhooks and AWS Lambda

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to automate workflows in Contentstack, refer to the [Connectors](../automation-hub-connectors.md) documentation.

AWS Lambda is a cloud computing platform, which is serverless, offered as part of Amazon Web Services. It is event-driven which means that it runs your code in response to events.

Its flexibility allows you to integrate AWS Lambda with other services to automate certain tasks. We will use AWS Lambda with Contentstack Webhooks to create an automated system that will help us to keep our stacks in sync.

This means if we have multiple stacks and when we make changes in one of the stacks, the other stacks get updated automatically through a lambda function. And In this guide, we will discuss the steps that will help us achieve that.

**Process Overview**: For this exercise, we will create three separate stacks. One will be a parent or a global stack. Whereas, the other two will be child/sub stacks A and B. We will then create a webhook in our global stack to trigger an event for the lambda function. This lambda function will update the child stacks with the content from the global stack.

## Pre-requisites

- [AWS Lambda](https://aws.amazon.com/lambda/) account
- Working knowledge of AWS Lambda and API-Gateways
- [Contentstack account](https://app.contentstack.com/#!/login)
- [Contentstack CLI](../cli/install-the-cli.md)

## Steps for Execution

- [Download the Sample App Code](#download-the-sample-app-code)
- [Import Entries and Assets in Stacks](#import-entries-and-assets-in-stacks)
- [Create an AWS Lambda function](#create-an-aws-lambda-function)
- [Create a trigger in Lambda](#create-a-trigger-in-lambda)
- [Setup a webhook in the Parent Stack](#set-up-a-webhook-in-the-parent-stack)
- [Run the sample app](#run-the-sample-app)

### Download the Sample App Code

Download the sample app code that we have built for this exercise from our [GitHub](https://github.com/contentstack/syncdata-between-stacks-using-webhooks-and-aws-lambda) repository. In the code bundle, you’ll find several folders and should resemble somewhere close to the following image:

Replicate the code into two more copies and name them something like “Global Stack,” “Stack A,” and “Stack B.” Here, the Global stack will be the parent Stack whereas Stack A and Stack B will be child stacks. Once done, install the dependencies in all three folders using the command `npm install`.

### Import Entries and Assets in Stacks

The next step is to create the stacks and import [entries](../../content-managers/author-content/about-entries.md) and assets from the downloaded code bundle. For this exercise we need three stacks, a Global Stack and two child stacks Stack A and Stack B. Log in to your [Contentstack account](https://app.contentstack.com/) and follow the steps mentioned in the [create a stack](../set-up-stack/create-a-new-stack.md) guide.

After you create the stacks, use the Contentstack CLI to import entries and [assets](/docs/content-managers/working-with-assets/about-assets) to the Global Stack as well as to the child stacks, Stack A and Stack B. Perform the following steps in order to do this:

Navigate to the downloaded folder and access the folder named “stack-data.”

- 

  **Note:** Before importing the data, make sure that you are [authenticated](../cli/cli-authentication.md) and have [added the stack management tokens](../cli/cli-authentication.md) for the parent Stack and the Child stacks A and B in CLI session.
- Fire up the command prompt and run the following command and hit enter.
- ```
  csdx cm:import -a
  ```
  Mention the token name in <management_token_alias>- Enter the master locale and provide the complete path to the stored content as displayed in the image below:

Repeat the above steps again to import content types, Entries, and Assets in the Child stacks - Stack A, and Stack B.

We have created the following [content types](../create-content-types/about-content-types.md) for this exercise:

- Header
- Home
- Footer
- Privacy Policy

After importing the content types and its subsequent entries and assets, to all the three stacks, your finished stacks should look something like what is displayed in the animation below:

### Create an AWS Lambda Function

We will now create a lambda function that will execute our code and keep our stacks in sync. To do this, log in to your AWS account and perform the following steps:

Log in to your **AWS Management Console** and select Lambda from the **Service** list.

- Click on the **Create Function** button and then the **Author from Scratch** option.
- Configure the lambda based on your requirements. Choose [**Node.js 16.x**](https://nodejs.org/en/download/) as your run-time language and click on the **Create function** button.
- AWS Lambda offers an inline code editor. You can write your lambda code here or alternatively upload the code.
- Once you get the code, upload the zip file of the “index” folder within the “lambda-function” folder on Lambda by selecting the **Upload a .zip** file option from the **Actions** drop-down. Keep **Handler** as **index/index.handler** and click on **Save**.
- 

  **Note:** Make sure that you only upload the “index.zip” file included in the “lambda-function” folder. Do not zip the entire source code folder.
- This is how it will look when you upload the code in the editor:
- - - Once we have uploaded the code in the editor, let's now set up the **Environment variables** by adding the values to the keys as follows:**apiKeyStackA**: API key of the stack A
- **apiKeyStackB**: API key of the stack B
- **globalStackManagementToken**: Management token of the Global Stack
- **regionUrl**: the URL that you want to use
- **stackAManagementToken**: Management token of stack A
- **stackAPublishEnv**: Publishing Environment for Stack A
- **stackBManagementToken**: Management token of stack B
- **stackBPublishEnv**: Publishing Environment for Stack B

This is depicted in the screenshot below:-

- Once you add the environment variables, click on **Save**.

### Create a Trigger in Lambda

Let’s proceed to create a trigger in our Lambda function by performing the following steps:

Click on the **+ Add Trigger** button![add_trigger.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltfd2af98bb6d5463d/5fa43fc0c1502b76a1699cf5/add_trigger.png)

- Select **API Gateway** from the **Trigger Configuration** drop-down menu.
- In the **API** sub-section, select the **Create an API** option from the dropdown, and set the options as shown in the image below:**API Type - Rest API**
- **Security - Open******![API_setting.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltd44f1e991629232e/5fa4407b97f9f35d942e8b7c/API_setting.png)
- Click on the **Add** button.
- Within the **API Gateway** section, expand the **Details** menu. Next, note down the **API endpoint** URL as we will need it to configure the webhook in Contentstack.![API_gateway_updated.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltee2e5ea260c3823c/6399a95353892a121b0b608a/API_gateway_updated.jpg)

With this, we’ve completed the lambda setup.

### Set up a Webhook in the Parent Stack

Now that you’re done with creating the stacks and importing its entries, let’s create a [webhook](../set-up-webhooks/about-webhooks.md) in the Global stack which will sync the Header, Footer, and the Privacy page of the child stacks.

To do this, in your [Contentstack account](https://app.contentstack.com/), go to your Global stack and perform the following steps:

Click on the “settings” icon on the left panel and click on **Webhooks**.

- Click on **+ New Webhook** and enter the details in the name [field](../create-content-types/about-fields.md).
- Create custom headers as shown below:![Sync_Data_Between_Stacks_Using_Contentstack_Webhooks_and_AWS_Lambda_2_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltc0ba74206f9dfc2d/60c202fff33fd90fa1ed1aee/Sync_Data_Between_Stacks_Using_Contentstack_Webhooks_and_AWS_Lambda_2_no_highlight.png)
- Paste the API endpoint URL in the **URL to notify** field.![Sync_Data_Between_Stacks_Using_Contentstack_Webhooks_and_AWS_Lambda_3_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt89c4d6e039718491/60c20312f33fd90fa1ed1af2/Sync_Data_Between_Stacks_Using_Contentstack_Webhooks_and_AWS_Lambda_3_highlighted.png)
- Next, add the conditions for triggering the webhook as shown below in the **Conditional View** section: ![Sync_Data_Between_Stacks_Using_Contentstack_Webhooks_and_AWS_Lambda_4_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt51a0a5cc15ab2857/60c20321f77af428924ba7fc/Sync_Data_Between_Stacks_Using_Contentstack_Webhooks_and_AWS_Lambda_4_no_highlight.png)Note that we’ve added four conditions. This is because we have four content types, we want both the child stacks to be updated whenever any or all of the entries within these content types are changed.
- Finally, click the **Enable Webhook** checkbox option and, **Save **the webhook.

### Run the Sample App

Now, let us configure the Global Stack sample app by performing the following steps:

In the root folder of the Global Stack sample app, open the **config.js** file with any code editor utility.

- Enter the values for **port**, **apiKey**, **accessToken**, and [**Environment**](../set-up-environments/about-environments.md) as shown below:

Next, enter the details for the content type UIDs as shown in the previous image. Repeat this for the **config.js** files of Stack A and Stack B by using the port numbers 4000, and 5000 for Stack A and Stack B respectively.

- Run the sample app by entering the command npm start in the command prompt.

You can try updating and publishing the header, footer, and the Privacy policy entries in the Global Stack. When you refresh Stack A and Stack B, the changes you’ve made in the Global stack will also reflect in Stacks A and B.

## Common questions

### Is this page still supported?
No. **Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release.

### What triggers the sync between stacks?
A webhook in the Global (parent) stack triggers an AWS Lambda function, which updates the child stacks with the content from the global stack.

### How many stacks are used in this setup?
Three stacks: one Global Stack (parent) and two child stacks (Stack A and Stack B).

### What do I need before starting?
An [AWS Lambda](https://aws.amazon.com/lambda/) account, working knowledge of AWS Lambda and API-Gateways, a [Contentstack account](https://app.contentstack.com/#!/login), and the [Contentstack CLI](../cli/install-the-cli.md).