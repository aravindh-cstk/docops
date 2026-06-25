---
title: "[Automations guides and connectors] - AWS SQS"
description: AWS SQS connector setup and usage for sending messages via an automation action step.
url: https://www.contentstack.com/docs/agent-os/aws-sqs
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - AWS SQS

This page explains what the AWS SQS connector is and how to set it up as an action connector to send messages to an AWS SQS queue. It is intended for developers and automation builders configuring third-party service integrations, and should be used when you need to connect an automation action step to AWS SQS.

## AWS SQS

AWS Simple Queue Service (AWS SQS) connector is a message queuing system that enables two-way communication between different distributed app components. It follows a polling mechanism where one component (publisher) pushes messages to the queue, and the consumer (processor) explicitly pulls out those messages from the queue to check them.

## Set Up AWS SQS

Perform the following steps to set up the AWS SQS action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **AWS SQS **connector.
- Under **Choose an Action** tab, select the** Send Message** action.
- Click the **+ Add New Account **button to add your AWS account (see screenshot in next step).
- In the **Authorize** modal, provide details such as **Title**, **Access Key, Secret Key** and **Region**.  
  You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

**Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

Then click** Authorize.**

- You can select the **Queue URL** from the Lookup list that appears when you click the textbox. The **Queue URL** needs to be present and defined in your AWS account.  
  Select the **Queue Type **from a list of populated suggestions. There are two types of queues, i.e., **Standard **and **FIFO**. Choose as per your requirement. For this example, we have chosen the **Standard** Queue Type.  
  The **Message Body** should contain the message you want to see in the SQS dashboard.
- Click the **Show optional fields** toggle button to add **Message Attributes** in the **JSON **format. For **Standard** Queue Type, you need to enter the number of seconds for delaying any specific message in the **Delay Seconds** textbox. For **FIFO** Queue Type, you need to enter the **Message Group Id** and **Message Deduplication Id** in the respective textboxes.
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.
- Once set, click **Save and Exit**.
- To see the SQS message, login to your **AWS account**. Type **SQS** in the search bar, and click on **Sample Queue Service** to navigate to the **SQS dashboard**.
- Click the queue name or URL from the populated list.
- Click **Send and receive messages** to fetch messages from SQS. A list of messages appears below the table.
- In AWS SQS, you need to pull the messages from the server. Click on **Poll for messages** to fetch the list of messages.
- Click the message **ID** to view your message.
- Your final output will appear as follows.

This sets the **AWS SQS** action connector.

## Common questions

### What AWS SQS actions are described on this page?
Under **Choose an Action** tab, select the** Send Message** action.

### Where do I get the AWS Access Key and Secret Key?
You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

### What queue types can I choose from?
There are two types of queues, i.e., **Standard **and **FIFO**.

### How do I view messages in AWS SQS after sending?
Click **Send and receive messages** to fetch messages from SQS, and click on **Poll for messages** to fetch the list of messages.