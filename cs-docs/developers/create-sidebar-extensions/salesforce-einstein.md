---
title: "[Extensions] - Salesforce Einstein"
description: Create and use the Salesforce Einstein Sidebar Extension in Contentstack, including Lambda configuration and optional Einstein Intent model setup.
url: https://www.contentstack.com/docs/developers/create-sidebar-extensions/salesforce-einstein
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-26
---

# [Extensions] - Salesforce Einstein

This page explains how to create, configure, deploy, and use the **Salesforce Einstein** Sidebar Extension in Contentstack, including setting up an AWS Lambda function and (optionally) adding an Einstein Intent model. It is intended for developers or stack administrators who need to analyze entry text using Einstein Language APIs and display results in the entry sidebar.

## Salesforce Einstein

The **Salesforce Einstein** Sidebar Extension analyzes the text content of your entry, and using Einstein’s Language APIs, infers the sentiment or intent behind the content and displays the findings on the sidebar of your entry page.

Einstein Language APIs are categorized into the following:
- **Einstein Sentiment**: Analyzes data and classifies the sentiment into positive, negative, and neutral classes.
- **Einstein Intent**: Identifies the intent of user data and categorizes it accordingly into user-defined labels.

In this step-by-step guide, we will see how to create the Salesforce Einstein Sidebar Extension in Contentstack. This widget extension makes use of the **Einstein Sentiment APIs** to infer the sentiments of your content. The steps are as follows:
- [Generate Einstein Platform Services Account Private Key](#generate-einstein-platform-services-account-private-key)
- [Configure Your Lambda function](#configure-your-lambda-function)
- [Deploy Lambda function](#deploy-lambda-function)
- [Add "Salesforce Einstein"](#add-salesforce-einstein-widget-extension-to-your-stack) [Sidebar Extension](#add-salesforce-einstein-widget-extension-to-your-stack) [extension to your stack](#add-salesforce-einstein-widget-extension-to-your-stack)
- [Use the extension](#use-the-extension)

## Generate Einstein Platform Services Account Private Key

In order to use this extension, you will need your Salesforce Einstein Platform Services Account Private key. This Private key will allow you to access the Einstein Language APIs.

In case you don’t have an account, [read the instructions given here](https://metamind.readme.io/docs/what-you-need-to-call-api) to create one.

On the activation page, download and save the **private key** (`einstein_platform.pem`). You can even copy and paste your private key into a text file and name it as per your need.

You will need this private key file to authenticate the Einstein Language APIs in **Step 2** while configuring the Lambda function of your extension in Contentstack.

## Configure Your Lambda function

To protect sensitive information (such as API Key and URL) and avoid Cross-Origin Resource Sharing (CORS) issues, you can use Lambda function for this extension.

The lambda function provided with the Extension code folder contains all the required files, however, you need to provide additional details such as your private key.

**Note:** Refer **Step 4** for the source code along with the lambda function of the Salesforce Einstein extension.

To provide additional details to your lambda function, perform the steps given below:

Navigate to your lambda function folder through a Terminal and install npm:

```
npm install
```

This downloads the required node modules within your lambda function.
- Open the `private_key.json` file within your lambda function folder and replace the existing content with the content of the private key that you extracted in **Step 1**.
- After that, zip your project file.

  **Note:** If you are using Linux, use the `zip -r index.zip *` command in your lambda code folder to zip it.

## Deploy Lambda function

When creating your Lambda function in AWS Lambda, upload your project zip file. Select **8.10.0** as the **Node.js** version.

In the Environment Variables section, enter the credentials against the variables as follows:

```
ACCOUNT_ID = Your_Einstein_Platform_Account_ID
```

**Note**: Please ensure that these are added exactly as shown above, else your lambda function will not work.

Under the **Configuration** section of your lambda function, add an **API Gateway** trigger. You will get an API Gateway URL, like this, *https://abcde1234.execute-api.us-east-1.amazonaws.com/default/contentstack-google-analytics-widget*.

Store this URL, as you will need this while configuring the extension in the next step.

For additional security, you can configure an API Key for the API Gateway trigger and use this API Key when configuring your lambda function.

## Add "Salesforce Einstein" Sidebar Extension to your stack

To add this Sidebar Extension to your stack, log in to your [Contentstack account](https://app.contentstack.com/#!/login) and perform the following steps:

Go to your stack and click on the “Settings” icon on the left navigation panel.
- Click on **Extensions**. You can also use the shortcut keys “alt + X” for Windows OS users, and “option + X” for Mac OS users to access the extensions menu.
- Click on the **+ New Extension** button on the top-right corner and select **Create new**.![Salesforce_Einstein_1_highlighted.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt1dedb235171bf0d2/63871697e2091f1089651bf3/Salesforce_Einstein_1_highlighted.jpg)
- Select the extension type as **Sidebar Extension**.![Salesforce_Einstein_2_highlighted.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5662d536ba5519d6/60c21bf785c4c2118e317a29/Salesforce_Einstein_2_highlighted.png)
- You will be led to the **Create New Extension** details page where you need to enter details in the fields as given below:

**Title**: Provide a suitable title. For example, **Salesforce Einstein**.
- **Hosting method**: Select **Hosted on Contentstack**. As soon as you do this, you will see the ‘Extension Source Code’ field below.
- **Extension Source Code**: In this field, you need to** **enter the extension code**. **If Extensions are part of your plan, contact our [Support](mailto:support@contentstack.com) team to get the code for the extension.
The support team will provide you with the source code (src file). Copy the code from the** index.html **file located in the root** **folder and paste it in the "Extension source code" field.
- **Config Parameters**: Enter the configuration details for the extension. Here, you need to mention the AWS API gateway URL for the lambda function (in the ‘url’ parameter) and (if enabled for secure access) the API key.

```
{
    "url": "https://abcde1234.execute-api.
        us-east-1.amazonaws.com/default/
        salesforce-einstein-widget",
    "X-api-key": "SSS111Sss1ssSSsssS11s11SS11SS"
}
```
- **Scope**: You can choose to incorporate this Sidebar Extension in either **All Content Types** or **Specific Content Types**. Selecting the latter option displays a list of content types from which you can select the required ones.
- Click **Save**. This will create your Sidebar Extension.

Now, let’s understand how to use this Sidebar Extension in your entries.

## Use the extension

Once you have added your Sidebar Extension, you can use it in your entries of the selected content type(s). Let’s look at the steps involved in using the Sidebar Extension.

Go to your stack and click on the “Entries” icon on the left navigation panel.
- Select the content type for which you have enabled the Sidebar Extension.
- Click on an entry. You will see the “Sidebar Extensions” icon on the right-hand side of the page.
- Click on it to expand the sidebar and select **Salesforce Einstein** from the drop-down menu****.

The selected Sidebar Extension expands on the sidebar.
- Under **Select model**, you will see the **Einstein Sentiment** option selected by default (screenshot in Step 5).
- Click on the Field dropdown and select the field that you want to analyze, in this case, Content.
- Click on Run. You will sentiment probability of the content as follows:![Salesforce_Einstein_4_no_highlight.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt2deee5e4ca9de4dd/60e53e0792aa422edd5e414a/Salesforce_Einstein_4_no_highlight.png)

## Optional Step - Add Einstein Intent Model

In the above sections, we successfully added the Salesforce Einstein Sidebar Extension's Sentiment model that used the Einstein Sentiment APIs.

Now, to use the Einstein Intent API, you need to create a model that you need to first train in order for it to analyze your text and infer what the content intends to.

After creating your Salesforce Einstein Platform Services Account, the additional steps that you need to perform to create your Einstein Intent Model are as follows:
- [Define Labels for Your Intent Model](#define-labels-for-your-intent-model)
- [Generate Authorization Token](#generate-authorization-token)
- [Create Your Dataset](#create-your-dataset)
- [Create Data Model](#create-data-model)
- [Add Intent Model Configuration Details](#add-intent-model-configuration-details)
- [Use the Einstein Intent Model](#use-the-einstein-intent-model)

### Define Labels for Your Intent Model

In this step, you will define the labels for your intent model. The intent model will use these labels to categorize your data. For each label, you need to gather text data in a file as per your requirement.

The Einstein Language APIs support data in these file formats: .csv (comma-separated values), .tsv (tab-separated values), and .json. So, the format of your text data file should be in these formats.

For more information, refer [the instructions given in the quick start guide](https://metamind.readme.io/docs/intent-quick-start-custom-classifier#section-step-1-define-your-classes-and-gather-data).

### Generate Authorization Token

Next, you need to generate the JSON Web Token (JWT) to access the Einstein Platform Services APIs. Open the Einstein Platform Services Token generation page, use the private key you downloaded after creating your account, and perform the steps mentioned in the Set Up Authorization page.

### Create Your Dataset

Once you have gathered your data and generated the OAuth token, it’s time to create and host your dataset.

To upload your dataset, run the POST API call: [https://api.einstein.ai/v2/language/datasets/upload](https://api.einstein.ai/v2/language/datasets/upload)

Add the following parameters and replace `<TOKEN>` with your JWT token and `<PATH_OF_YOUR_DATA_FILE>` with the path of the data file that you created above:

| Parameters | Values |
|---|---|
| Header | `Authorization`: `Bearer <TOKEN>`<br>- `Cache-Control`: `no-cache`<br>- `Content-Type`: `multipart/form-data` |
| Body | - `type`: `text-intent`<br>- `path`: `<PATH_OF_YOUR_DATA_FILE>` |

**Tip:** You can try the call manually in any REST API client, such as Postman.

This is the Einstein Intent API call that will create and host your dataset. For more information, refer [the steps given here](https://metamind.readme.io/docs/intent-quick-start-custom-classifier#section-step-2-create-the-dataset).

In the response body of this call, you will find your **Dataset ID**. We will use this ID value to generate the Model ID in the next step.

### Create Data Model

Next, you need to train your dataset and create a model. You will get the model ID that will be used to configure the extension.

Run the POST API call: [https://api.einstein.ai/v2/language/train](https://api.einstein.ai/v2/language/train)

Add the following parameters and replace `<TOKEN>` with your JWT token and `<DATASET_ID>` with the dataset ID retrieved in the above step:

| Parameters | Values |
|---|---|
| Header | `Authorization`: `Bearer <TOKEN>`<br>- `Cache-Control`: `no-cache`<br>- `Content-Type`: `multipart/form-data` |
| Body | - `name`: `Your_Model_name`<br>- `datasetId`: `<DATASET_ID>` |

**Tip:** You can try the call manually in any REST API client, such as Postman.

In the response body of this call, you will find your **Model ID**. We will use this value while configuring your extension in **Step 8**.

For more information, refer [the steps given here](https://metamind.readme.io/docs/intent-quick-start-custom-classifier#section-step-3-train-the-dataset-to-create-the-model).

### Add Intent Model Configuration Details

In the **Salesforce Einstein **Sidebar Extension details page, enter the Model ID of your Intent Model and the Model Name.

```
{
    "intentModels": [
        {
            "modelId": "RRRR2CCCC2KKKKKKKK2CCCC",
            "modelName": "User-defined Model Name"
        },
        {},
    …]
}
```

**Note:** You can create multiple such models and add their model IDs in the configuration settings of your Salesforce Einstein Sidebar Extension.

### Use the Einstein Intent Model

Once you have added your custom Einstein Intent Model, you can use it in your entries of the selected content type(s).

Let’s look at the steps involved in using the Einstein Intent model in your entry page.

Under **Select model**, select **Einstein Intent**.
- In the **Select Intent Model** dropdown, select the model that you created (e.g., **Demo Model**).
- In the **Field** drop-down, select the field (e.g., **Content**) of which you want to analyze the intent and click on **Run**.

Once your extension is configured see the probability of the Sentiment and Intent Model’s labels that your content fits in.

## Common questions

### Do I need AWS Lambda for this extension?
To protect sensitive information (such as API Key and URL) and avoid Cross-Origin Resource Sharing (CORS) issues, you can use Lambda function for this extension.

### What configuration values do I need to add in the extension?
Here, you need to mention the AWS API gateway URL for the lambda function (in the ‘url’ parameter) and (if enabled for secure access) the API key.

### Can I use Einstein Intent as well as Einstein Sentiment?
Einstein Language APIs are categorized into the following: **Einstein Sentiment** and **Einstein Intent**.

### Can I add multiple intent models?
You can create multiple such models and add their model IDs in the configuration settings of your Salesforce Einstein Sidebar Extension.