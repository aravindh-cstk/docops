---
title: "[How-to Guides and Knowledgebase articles] - Set up AWS Webhook Listener to Test Contentstack Webhook URLs"
description: Set up an AWS API Gateway + Lambda webhook listener to test Contentstack webhook URLs and validate incoming requests.
url: https://www.contentstack.com/docs/developers/how-to-guides/set-up-aws-webhook-listener-to-test-contentstack-webhook-urls
product: Contentstack
doc_type: how-to-guide
audience:
  - developers
version: unknown
last_updated: 2026-03-25
---

# [How-to Guides and Knowledgebase articles] - Set up AWS Webhook Listener to Test Contentstack Webhook URLs

This page explains how to configure an AWS webhook listener (API Gateway + Lambda) to receive and validate requests sent from Contentstack Webhooks. It is intended for developers who want to test Contentstack webhook URLs by returning a mock response that can be viewed in Contentstack webhook settings.

## Set up AWS Webhook Listener to Test Contentstack Webhook URLs

**Note: **This page is no longer maintained, and the underlying code may be outdated or unsupported. It may be removed in a future release. To learn how to configure and manage webhook integrations in Contentstack, refer to the [Webhooks](../../../api-docs/developers/apis/content-management-api/webhooks.md) documentation.

Using Contentstack [Webhooks](../set-up-webhooks/about-webhooks.md), you can post data to AWS when an event occurs in your stack. AWS responds to the payload from Contentstack Webhook Dispatcher by returning the appropriate data.

In this guide, let's understand how to configure a webhook listener in AWS, that listens for incoming requests from Contentstack and validates the request.

## Process Overview:

We will set up an AWS API Gateway URL using [AWS CLI](https://aws.amazon.com/cli/) that listens for a payload from Contentstack, and validates it with a mock response that can be viewed in Contentstack's webhook settings.

## Prerequisites:

- AWS CLI [installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- Basic lambda function with **nodejs v14**
- Setup a [Webhook](../set-up-webhooks/about-webhooks.md) in your Stack

## Steps for Execution:

- [Create an AWS Lambda Function](#create-an-aws-lambda-function)
- [Create AWS API Gateway using AWS CLI](#create-aws-api-gateway-using-aws-cli)
- [Try it Out](#try-it-out)

## Create an AWS Lambda Function

Perform the following steps to set up your AWS Lambda function:

Login to your [AWS Management Console](https://aws.amazon.com/console/) and select **Lambda **from the Service list.

- Click on the **Create Function** button and then the **Author from Scratch **option.
- Configure the lambda based on your requirements. Choose **Node.js 14.x** as your run-time language and click on the **Create function **button.
- AWS Lambda offers an inline code editor. You can write your lambda code here. For this example, copy and paste the code snippet given below:

```
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: event.body,
    };
return response;
};
```

- Save/ Deploy the lambda function.

**Note**: Make sure to note the **name** & the **ARN **of your lambda function, as it would be required to link with API Gateway URL in the next step.

We now have set up our Lambda Function. Let's move ahead and create the API Gateway through which our Lambda Function will be invoked.

## Create AWS API Gateway using AWS CLI

Let's create an API Gateway URL and link it to the lambda function using AWS CLI.

**Additional Resource**: Learn how to [set up lambda proxy integrations in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html).

**Note**: The steps below are for demonstration purposes only. In practice, add your own **API Gateway ID**, **name**, **oath**, **parent-id**, **ARN**, **API gateway URL **etc.

Run the following commands in your terminal after[ installing](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [configuring](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) AWS CLI.

Command to create **AWS API Gateway**.  
Provide the name of the **REST API **and add a description.**Tip**: To help you smoothly tryout this guide, we have attached example responses to each command stated below.

```
aws apigateway create-rest-api --name >
--description
```

- Add get resources using the Rest API id you got in the last step.

```
aws apigateway get-resources --rest-api-id >
```

- Run the below command to create a resource using the parent resource ID you got in the last step.

```
aws apigateway create-resource
--rest-api-id >
--parent-id <>
--path-part >
```

- Add a method to your AWS resource

```
aws apigateway put-method
--rest-api-id >
--resource-id >
--http-method "ANY"
--authorization-type "NONE"
```

- Define the response using the following command

```
aws apigateway put-method-response
--rest-api-id >
--resource-id >
--http-method POST
--status-code 200
```

- Adding/ Configuring API Gateway URL with lambda**Note**: Add the **--type AWS_PROXY** flag to execute the code and capture event body.

```
aws apigateway put-integration --rest-api-id >
--resource-id > --http-method ANY
--type AWS_PROXY --integration-http-method ANY
--uri "arn:aws:apigateway:us-east-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-2:4063420xxxxx:function:webhook-test/invocations"
```

- Now add integration response to receive the output from lambda function.

```
aws apigateway put-integration-response
--rest-api-id >
--resource-id >
--http-method ANY --status-code 200
--content-handling CONVERT_TO_TEXT
```

- Add permission/ inform lambda function to allow API calls from API Gateway http methods:

```
aws lambda add-permission
--function-name webhook-test
--statement-id apigateway
--action lambda:InvokeFunction
--principal apigateway.amazonaws.com
--source-arn "arn:aws:lambda:us-east-2:4063420xxxxx:a6tminxxxx/*/ANY/"
```

- Command to create a deployment on dev stage:

```
aws apigateway create-deployment --rest-api-id >
--stage-name dev
```

- After deploying the REST API, navigate to the lambda function which you have created in above steps click on the **trigger **section and copy the URL as shown below:

## Try it Out

Create a webhook in Contentstack to invoke the Lambda Function through the API that we created in the last step.  
Log in to your [Contentstack account](https://app.contentstack.com/#!/login) and follow the steps given below:

Navigate to your stack, click on the “Settings” icon on the left navigation panel, and click on **Webhooks**.

- On the Webhook page, click on **+ New Webhook**.
- On the** Create Webhook** page, fill up the** Name **field (for example, **AWS Listener**). In the URL to notify field, enter the** API endpoint URL** that you generated when you deployed your APIs, in the previous step.
- Scroll down to the **Conditional View** section for creating a trigger for the webhook.
- Select the **Enable Webhook** checkbox option and** Save **your Webhook settings.

Your webhook is now ready to invoke the Lambda Function when an entry from any content type is published successfully.  
Finally based on your webhook condition perform appropriate trigger action and check the webhook logs example.

You would see the **Request Details**(left side) & **Response Details **(right side) will have the same entry response based on the trigger made.

## Common questions

### Is this guide still supported?
No. The page states: “This page is no longer maintained, and the underlying code may be outdated or unsupported.”

### What AWS services are used to create the webhook listener?
The guide uses AWS Lambda and AWS API Gateway, configured via AWS CLI.

### What does the example Lambda function return?
It returns a `200` response with `body: event.body`.

### Where do I verify the webhook request and response in Contentstack?
In Contentstack’s webhook settings/logs, where you can view **Request Details** and **Response Details**.