---
title: "[Automations guides and connectors] - AWS SNS"
description: AWS SNS connector setup and usage for sending notifications via AWS Simple Notification Service (AWS SNS).
url: https://www.contentstack.com/docs/agent-os/aws-sns
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
- Within the **Configure Action Step**, click the **AWS SNS **connector.![Select_the_Connector_SNS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20b85c00353c3250/6527c9d47986d42c508f3830/Select_the_Connector_SNS.png)
- Under **Choose an Action** tab, select the** Send Notification** action.![AWS-SNS-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltda9c550c94722190/63dc0a47ef38d05093a9a040/AWS-SNS-Action.png)
- Click the **+ Add New Account **button to add your AWS account (see screenshot in next step).![AWS-SNS-Configure-Action-Add-New-Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7025a6ca050d72cf/63dc0a479fc1e60f1a99de70/AWS-SNS-Configure-Action-Add-New-Account.png)
- In the **Authorize** modal, provide details such as** ****Title****, Access Key**, **Secret Key**, and **Region**.
You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

    **Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

   Then, click** Authorize**.
- After adding an account, click the** Topic **field and select a given topic from the Lookup dropdown, click the **Topic type** field and select the topic type based on the Topic you selected, and then click the** Message Body** textbox and enter a sample message for the notification. You can even add dynamic parameters that appear in the output dropdown.![AWS-SNS-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd8a4a30afb7fa7f3/63dc0a48b3b39d7d817f03f0/AWS-SNS-Configure-Action.png)
- Click the **Show optional fields** toggle button to enter the values for **Message Attributes** and **Subject** optional fields.![Subject_Message_Attributes.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blte0f9f5b04f7bcf8c/651fde9e6c9e36009cc0bc4b/Subject_Message_Attributes.png)
In **Message attributes**, you can enter certain attributes (in JSON format only) along with your message, and in **Subject**, you can enter the subject of the message.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.![AWS-SNS-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdf0aa1568185ca20/63dc0a48e69a5812255551cd/AWS-SNS-Test-Action.png)
- After successfully executing the Action, you will get a notification on your configured communication medium. For this example, we have configured the user's email in their SNS account.
- Click **Save and Exit** to finish the process.![AWS-SNS-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt85fbf6bd41c07021/63dc0a47bd97af5094b657fd/AWS-SNS-Output.png)

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