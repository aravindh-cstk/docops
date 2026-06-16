---
title: "[Automations guides and connectors] - AWS SNS"
description: AWS SNS connector setup and usage for sending notifications via AWS Simple Notification Service (AWS SNS).
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/aws-sns
product: Contentstack
doc_type: automation-connector-guide
audience:
  - developers
  - administrators
version: unknown
last_updated: 2026-03-26
---

# [Automations guides and connectors] - AWS SNS

This page explains what the AWS SNS connector does in Contentstack Automations and how to configure the AWS SNS action connector to send notifications. It is intended for developers or admins setting up automation workflows that trigger AWS SNS notifications when events occur in Contentstack.

## AWS SNS

The AWS Simple Notification Service (AWS SNS) connector automates the process of sending notifications to the members subscribed/added to AWS SNS.

For instance, consider a scenario where you either create or update an entry in Contentstack and you want to notify specific users about it via a specific platform. In this case, link your AWS SNS account to the AWS SNS Automations connector, and every time the event occurs, it will trigger our action connector to send notifications to the medium(s) that has been set in your AWS SNS account.

## Set Up AWS SNS

Perform the following steps to set up the AWS SNS action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **AWS SNS **connector.
- Under **Choose an Action** tab, select the** Send Notification** action.
- Click the **+ Add New Account **button to add your AWS account (see screenshot in next step).
- In the **Authorize** modal, provide details such as** ****Title****, Access Key**, **Secret Key**, and **Region**.
You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

    **Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

   Then, click** Authorize**.
- After adding an account, click the** Topic **field and select a given topic from the Lookup dropdown, click the **Topic type** field and select the topic type based on the Topic you selected, and then click the** Message Body** textbox and enter a sample message for the notification. You can even add dynamic parameters that appear in the output dropdown.
- Click the **Show optional fields** toggle button to enter the values for **Message Attributes** and **Subject** optional fields.
In **Message attributes**, you can enter certain attributes (in JSON format only) along with your message, and in **Subject**, you can enter the subject of the message.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- After successfully executing the Action, you will get a notification on your configured communication medium. For this example, we have configured the user's email in their SNS account.
- Click **Save and Exit** to finish the process.

This sets the **AWS SNS** action connector.

## Common questions

### What does the AWS SNS connector do?
It automates sending notifications to members subscribed/added to AWS SNS when configured events occur.

### What information is required to authorize an AWS account?
You need to provide **Title**, **Access Key**, **Secret Key**, and **Region** in the **Authorize** modal.

### Where do I generate the AWS Access Key and Secret Key?
In your AWS account, navigate through **Security credentials** > **Access Keys** > **Create New Access Key**.

### What optional fields can be configured for the notification?
You can use **Show optional fields** to enter values for **Message Attributes** (JSON format only) and **Subject**.