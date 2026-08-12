---
title: "Set Up Translation Integrations"
description: "Discover how to streamline content translation with Phrase, AWS Lambda, and Contentstack. Simplify multilingual content management and boost efficiency."
url: /developers/how-to-guides/setting-up-translation-system-with-contentstack-webhooks-phrase-and-aws-lambda
---

# Set Up Translation Integrations

## Setting up Translation System with Contentstack Webhooks, Phrase, and AWS Lambda

**Warning:** This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to use the [Translation](/marketplace#translation) apps, refer to the [Marketplace](/marketplace) documentation.

Phrase is a powerful Computer-assisted Translation (CAT) tool for translating general documents. This cloud-based platform allows businesses to process and translate hundreds of languages in different formats.

Phrase can be integrated with other systems and in this document, we will create a translation system using Contentstack [Webhooks](/docs/headless-cms/about-webhooks), Phrase, and AWS Lambda.

**Additional Resource:** Translation systems can also be set up using Contentstack Workflows and AWS Translate, to know more, read our guide on how to [Set up a Translation System with Contentstack Webhooks and Workflows, AWS Lambda, and AWS Translate](/docs/developers/how-to-guides/set-up-a-translation-system-with-contentstack-webhooks-and-workflows-aws-lambda-and-aws-translate).

**A brief overview of the process**: When the [workflow stage](/docs/headless-cms/about-workflow-stages) of [entry](/docs/headless-cms/about-entries) changes to **Send to Translation** a webhook is triggered. Phrase will translate the content of the entry and once the translation is done, AWS Lambda will change the workflow stage to **Review**.

Here are the steps required to set up this translation system:

1.  [Set up the Essentials](#set-up-the-essentials)
2.  [Set up Workflows for Translation](#set-up-workflows-for-translation)
3.  [Create a Phrase account](#create-a-phrase-account)
4.  [Set up Lambda function for translation](#set-up-lambda-function-for-translation)
5.  [Trigger a webhook to initiate translation](#trigger-a-webhook-to-initiate-translation)  
    

## Prerequisites

-   Working knowledge of AWS API Gateways
-   Access to the AWS environments such as AWS Lambda, AWS API Gateway, and AWS IAM
-   [Contentstack account](https://app.contentstack.com/#!/login)
-   [Phrase account](https://phrase.com/pricing/)

1.  ## Set up the Essentials
    
    First, [create a stack](/docs/headless-cms/create-a-new-stack), and [add a content type](/docs/headless-cms/create-a-content-type) (in our example it is “Phrase”),and [add entries](/docs/headless-cms/create-a-content-type) to it.
    
    **Note:** Ensure the field UID (body, multi\_line, etc) in your code that you want to translate should match with the ones specified in the content type. In our example, it's **title** and **body**.
    
    Next, [create languages](/docs/headless-cms/about-languages) (locales) in your content type (Phrase). In our example, we have added two languages:
    
    -   English \[en-us\] which is the source language
    -   Japanese \[ja\] is another language which will be our target language
    
    **Note:** Ensure that the languages you add are [supported by Phrase](https://help.memsource.com/hc/en-us/articles/115003929811-Languages-Supported-in-Memsource). Also, ensure that you have localized the Japanese (ja) locale else the entry in your Japanese locale will not be translated.
    
    Once you have these configured, then you're ready to begin the integration process for translation.
    
2.  ## Set up Workflows for Translation
    
    To [set up workflows](/docs/headless-cms/add-workflows-and-stages) for the translation process, log in to your [Contentstack account](https://app.contentstack.com/#!/) and perform the following steps:
    
    1.  Click the “Settings” icon (press “S”) on the left navigation panel and click on **Workflows** (press “alt + F” for Windows OS, and “option + F” for Mac OS to access workflows). 
    2.  Click on **\+ New Workflow.**
    3.  Add three stages (for example, Draft, Sent to Translation, and Review).
    
      
    
    Read more on how to [set up workflows](/docs/headless-cms/add-workflows-and-stages).
    
    Once the editor changes the workflow stage to **Send to Translation**, the webhook will be triggered and call the AWS Lambda function. The Lambda function will get the content translated from Phrase and will change the workflow stage to **Review**.
    
    We will need the workflow stage UID which we will enter when we set up our Lambda Function. This UID will instruct Lambda to change the workflow stage when the content is translated to **Review**.
    
    So proceed as follows to get the **Review** stage UID:
    
    1.  Once you have created the workflow, it will show up like this:![Setting_up_Translation_System_with_Contentstack_Webhooks_Memsource_1_highlighted](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt64e8d854411acf73/60c1ae0236617c1194b6dbe3/Setting_up_Translation_System_with_Contentstack_Webhooks_Memsource_1_highlighted.png)
    2.  Open Postman or any other API collaboration & development platform and make a GET request on any of the following URL. Enter the Workflow ID (highlighted above) at the end of the URL:  
        _https://api.contentstack.io/v3/workflows/{YOUR WORKFLOW UID}_  
        
        **Note:** For Europe region, the baseURL should be changed to https://eu-api.contentstack.com from https://api.contentstack.io. Similarly, for Azure NA region, change it to https://azure-na-api.contentstack.com, and for Azure EU region, change it to https://azure-eu-api.contentstack.com.
        
        You will get the following response:  
        ![Review Stage UID](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte1e911ce0f011942/5e33f56d4c16654538e2e78e/Review_UID.JPG)
    
    **Tip:** Make note of the UID highlighted in the above screenshot. We will need this in Step 4 when we set up our Environment Variable in the Lambda function.
    
3.  ## Create a Phrase Account
    
    Phrase will translate the content into the target language. So create an account in Phrase by following the below steps:
    
    1.  Sign up with [Phrase](https://www.phrase.com/pricing/).
    2.  You can choose from the different plans they offer. For now, click on Free Trial at the top right side of the screen.  
        ![Phrase_Pricing](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blta01fdeebd695542e/646bccf2defa3308b4619f44/Phrase-Pricing.png)  
          
        
        **Note:** Avoid selecting the personal plan as it doesn't provide any arrangement for making API calls.
        
    3.  On the **Sign Up** page, keep the settings as shown in the screenshot below and click on **Sign Up with Email**:  
        ![Phrase_Signup](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt089590b54ea462fd/646bccf11fffbf490a9b5e72/Phrase-Signup.png)  
        
    4.  On the next screen, enter your email, username, and password and click on **Sign Up**.
    
    With this, we have created an account in Phrase. Let's move ahead and create the Lambda function  
    
4.  ## Set up Lambda Function for Translation
    
    Perform the following steps to set up your AWS Lambda function:
    
    1.  Login to your [AWS Management Console](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0&code_challenge=eIfp5rbZe_3p9Tw2Tehn2bXwi6w4tXUzcpFAuPKGhU4&code_challenge_method=SHA-256), select **AWS Lambda Service** from the service list.
    2.  Click on the **Create Function** button, and then the **Author from Scratch** option.
    3.  Provide a name to your lambda function inside the **Function name** field, select **Node.js 14.x** as your **Runtime language**, and click on the **Create function** button. 
    4.  Now in the **Code source** section, click on the **Upload from** dropdown and select **.zip file**.
    5.  In the **Upload a .zip** file modal, click on the **Upload** button, contact our support team at [support@contentstack.com](mailto:support@contentstack.com) to get the sample code. Then, click on **Save**.
    6.  In the **Runtime settings** option, keep **Handler** as **index.handler**.
    7.  Scroll up and select the **Configuration** tab.
    8.  Click on the **Environment Variable** option on the left and add the following variables inside it by clicking on **Edit** and then **Add environment variable**.
    9.  Next, set up the **Environment variables** as follows:  
        ![image_(4)](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltb6076eb0b201551e/610028f5bf34702dbca36c9a/image_(4).png)  
        **CT\_User**: {Enter your Contentstack user ID}**CT\_Pass**: {Enter your Contentstack password}**memUser**: {Enter your Phrase user name}**memPass**: {Enter your Phrase password}**WorkFlowStage**: {Enter the UID of the Review stage that we generated in step 2}**Content\_Type\_Uid**: {Enter the UID of your content type}**source\_Locale\_Lang**: {Enter the source local language, for example “en-us”}**targetLocale**: {Enter the target locale you created in step 1, in our example it is "ja"}**targetTranslateLang**: {Enter the target language of Phrase, in our example, it is "ja"}  
        
    10.  Once you have done these settings, click on **Save**.
    
    We have now set up our Lambda Function, we will now proceed with creating the API gateway to get the URL where our webhook will issue notifications.
    
    1.  Log in to **AWS Management Console** and select **API Gateways** from the services list.
    2.  Click on the **Getting started** or **Create API** button (depending on whether you have already an API configured or not).
    3.  On the **Choose an API type** page, go to the **REST API** option (the public one) and click on **Build**.
    4.  On the next page, ensure that C**reate new API** section has **New API** checked. Under the S**ettings** section, enter the **API name** and click on **Create API**. 
    5.  On the next page, from the **Actions** dropdown in **Resources**, select **Create Method**.
    6.  From the resultant dropdown, Select **POST** and click on the checkmark.
    7.  Select your Lambda function in the **Lambda Function** field and click on **Save**. 
    8.  You'll get the **Add Permission to Lambda Function** pop-up, click on **OK**.
    
    Next, we need to deploy our API. Follow the steps given below:
    
    1.  Again, from the **Actions** drop-down in **Resources**, select the **Deploy API** option.
    2.  Select **\[New Stage\]** in the **Deployment stage** and enter prod (or anything you want to identify this stage as) in the **Stage name**.
    3.  Click on **Deploy**.
    
    On the next screen, you'll get your deployed API under **Invoke URL**. We'll use this URL in the next step when we create a webhook to initiate notifications to our Lambda function.
    
5.  ## Trigger a Webhook to Initiate Translation
    
    To create and [set up a webhook](/docs/headless-cms/create-a-webhook) in Contentstack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:
    
    1.  Click the “Settings” icon (press “S”) on the left navigation panel and click on **Webhooks** (press “alt + W” for Windows OS, and “option + W” for Mac OS).
    2.  Click on **\+ New Webhook**.
    3.  On the **Create Webhook** page, fill up the **Name** field (for example, “Translation”). In the **URL to notify field**, enter the URL that you generated when you deployed your APIs, in the previous step.
    4.  Scroll down to the **Conditional View** section for creating a trigger for the webhook as shown below:![Setting_up_Translation_System_with_Contentstack_Webhooks_Memsource_2_no_highlight](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte0fc870948322514/60c1ae18d475801b9d550085/Setting_up_Translation_System_with_Contentstack_Webhooks_Memsource_2_no_highlight.png)
    5.  Once done, click **Save** to save your settings.
    
    With this, we have set up the webhooks for triggering notifications.
    
6.  ## Try Out the Set-Up
    
    We are now ready to test the setup. 
    
    1.  Go to your **English (en-us**) entry and change the workflow stage by selecting **Send to Translation** from the **WORKFLOW DETAILS** section on the right.
    2.  Now select **Japanese** from the locale drop-down and you should see your entry translated in the target language, Japanese, and the workflow stage changed to **Review**. ![Setting_up_Translation_System_with_Contentstack_Webhooks_Memsource_3_no_highlight](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt94cec2cd83ae790b/60dcc2004763af56bad5bc01/Setting_up_Translation_System_with_Contentstack_Webhooks_Memsource_3_no_highlight.gif)

**Tip:** If you still cannot see your entry translated in Japanese, just hard refresh the page (Ctrl+Shift+R).
