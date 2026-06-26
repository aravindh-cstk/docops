---
title: "[Automations guides and connectors] - AWS Lambda"
description: Configure and execute an AWS Lambda function invoked in response to an event generated in Contentstack using the Automations AWS Lambda action connector.
url: https://www.contentstack.com/docs/agent-os/aws-lambda
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - AWS Lambda

This page explains how to configure the Automations AWS Lambda action connector to execute an AWS Lambda function in response to events generated in Contentstack. It is intended for developers or administrators setting up third-party integrations in Automations, and should be used when you want Contentstack events to trigger Lambda-based workflows.

## AWS Lambda

The AWS Lambda action connector lets you configure and execute a Lambda function that is invoked in response to an event generated in Contentstack.

**Note**: You need to define the Lambda function in your AWS Services console before configuring it for the Automations AWS Lambda action connector.

For instance, consider a scenario where you want to be notified whenever someone creates or updates an entry in Contentstack. In this case, you can set up a system that includes a webhook that triggers when a user creates or updates an entry. This webhook in turn must invoke a lambda function that notify a messaging service such as AWS SNS.

## Set Up AWS Lambda action Connector

Perform the following steps to set up the AWS Lambda action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **AWS Lambda** connector.
- Under **Choose an Action** tab, select the **Execute Lambda Function** action.
- Click **+ Add New Account** to add your AWS account.
- In the **Authorize** pop-up window, provide details such as **Title**, **Access Key**, **Secret Key**, and **Region**.

You can generate the **Access** and **Secret Access Key** by navigating through **Security credentials** > **Access Keys** > **Create New Access Key** in your AWS console.

**Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.
- Once done, click **Authorize**.
- Click the **Function Name** textbox and select the required lambda function from the **Lookup** dropdown.

**Note**: You need to have your Lambda function defined in your AWS Services console before configuring your AWS Lambda action connector in Automations.
- Click the **Invocation Type** textbox and select an option from the given dropdown. Here, you can choose from three options: **Event**, **RequestResponse**, and **DryRun**.
  **Event:** This returns a request ID and status code after successful execution of the function.
- **RequestResponse:** This returns a status code and a response message as **body** for the selected lambda function.
- **DryRun:** This allows you to test the function, and it returns a request ID and status code.
- Lets select **Event** as the invocation type for our first example, then we will cover other invocation types proceeding further.
- [*Optional*] You can choose to add optional fields by clicking on the **Show optional fields** toggle. You will find two additional fields have appeared: **Parameters** and **Specific Version or Tag**.
- Click the **Parameters** textbox to add dynamic parameters to your Lambda function. Make sure to enter the parameter in JSON format only.
You can also specify a **Specific Version or Tag** for your Lambda function.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action connector.
- After successful execution, you will get a Request ID and status code for your Lambda function. Click** Save and Exit** to finish the process.

Now, in continuation to step 7 above, lets check out the output for the Invocation types RequestResponse and DryRun.

**Invocation Type:** RequestResponse  
After performing **steps 1-6** from above, perform the following steps:
- Select **RequestResponse** as the **Invocation** **Type**.
- [*Optional*] Click the **Show optional fields** toggle.
Add dynamic parameters (in JSON format) to your Lambda function under the **Parameters** textbox. And, specify a **Specific Version or Tag** for your Lambda function if need be.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action connector.
- After successful execution, you will get a status code and a response message (body) for your Lambda function. Click **Save and Exit** to finish setting up your connector.

**Invocation Type:** DryRun  
After performing steps 1-6 that we covered under setting up the Event invocation type, perform the following steps:
- Select **DryRun** as the **Invocation Type**.
- [*Optional*] Click the **Show optional fields** toggle.
Add dynamic parameters (in JSON format) to your Lambda function under the **Parameters** textbox. And, specify a **Specific Version or Tag** for your Lambda function if need be.
- Once done, click **Proceed**.
- Click **Test Action** to test the configured action connector.
- After successful execution, you will get a Request ID and status code for your Lambda function. Click **Save and Exit** to finish the process.

This sets the **AWS Lambda** action connector.

## Common questions

### Do I need to create the Lambda function before configuring the connector?
Yes. **Note**: You need to define the Lambda function in your AWS Services console before configuring it for the Automations AWS Lambda action connector.

### Where do I get the AWS Access Key and Secret Key used in the connector?
You can generate the **Access** and **Secret Access Key** by navigating through **Security credentials** > **Access Keys** > **Create New Access Key** in your AWS console.

### What is the difference between Event, RequestResponse, and DryRun invocation types?
**Event:** This returns a request ID and status code after successful execution of the function.  
**RequestResponse:** This returns a status code and a response message as **body** for the selected lambda function.  
**DryRun:** This allows you to test the function, and it returns a request ID and status code.

### Can I pass parameters to the Lambda function from Automations?
Yes. Click the **Parameters** textbox to add dynamic parameters to your Lambda function, and make sure to enter the parameter in JSON format only.