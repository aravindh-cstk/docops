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
- Within the **Configure Action Step**, click the **AWS SQS **connector.![Select_the_Connector_SQS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt14f997a2889943be/6527c9d44824f575b7f2714b/Select_the_Connector_SQS.png)
- Under **Choose an Action** tab, select the** Send Message** action.![AWS-SQS-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf3025863966714c6/63dc0b9d260a9a2054c6ca44/AWS-SQS-Action.png)
- Click the **+ Add New Account **button to add your AWS account (see screenshot in next step).![Add_New_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt52c868d9d677085e/64f81a4fc12d772c08d035bc/Add_New_Account.png)
- In the **Authorize** modal, provide details such as **Title**, **Access Key, Secret Key** and **Region**.  
  You can generate the **Access** and **Secret Key **by navigating through **Security credentials **> **Access Keys **>** Create New Access Key **in your AWS account.

**Additional Resource:** For more information, refer to the [Managing access keys for IAM users](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) document.

Then click** Authorize.**

- You can select the **Queue URL** from the Lookup list that appears when you click the textbox. The **Queue URL** needs to be present and defined in your AWS account.  
  Select the **Queue Type **from a list of populated suggestions. There are two types of queues, i.e., **Standard **and **FIFO**. Choose as per your requirement. For this example, we have chosen the **Standard** Queue Type.  
  The **Message Body** should contain the message you want to see in the SQS dashboard.![AWS-SQS-Configure-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt608eaf72d92d2869/63dc0b9d8c69354d3e05518a/AWS-SQS-Configure-Action.png)
- Click the **Show optional fields** toggle button to add **Message Attributes** in the **JSON **format. For **Standard** Queue Type, you need to enter the number of seconds for delaying any specific message in the **Delay Seconds** textbox. For **FIFO** Queue Type, you need to enter the **Message Group Id** and **Message Deduplication Id** in the respective textboxes.![Show_Optional_Fields_SQS.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt048946e35c927d1e/64f81b5868d8e1dee8601ecd/Show_Optional_Fields_SQS.png)
- Click **Proceed**.
- Check if the details are correct. If yes, click **Test Action**.![AWS-SQS-Test-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltbc7555d11fec24d4/63dc0b9de4bdce1224aa50b7/AWS-SQS-Test-Action.png)
- Once set, click **Save and Exit**.![AWS-SQS-Output.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltae68d18b1551696c/63dc0b9df4b2e369e5c72d9d/AWS-SQS-Output.png)
- To see the SQS message, login to your **AWS account**. Type **SQS** in the search bar, and click on **Sample Queue Service** to navigate to the **SQS dashboard**.![Click_Sample_Query_service.jpg](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/bltcc17005ff5a6b3d7/6385fa0e81f7151052bed4ae/Click_Sample_Query_service.jpg)
- Click the queue name or URL from the populated list.![Queues.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blte5fdb58b76704b33/635ba1bfda572d57ecd26270/Queues.png)
- Click **Send and receive messages** to fetch messages from SQS. A list of messages appears below the table.![Amazon-StandardQueue-Details.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt373860095e1b1ad5/635b94b69a123e5dbdbca131/Amazon-StandardQueue-Details.png)
- In AWS SQS, you need to pull the messages from the server. Click on **Poll for messages** to fetch the list of messages.
- Click the message **ID** to view your message.![Receive-Message-Poll-Message.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt9b3e9665bbb36e0f/635b94c07e515b5598d050f4/Receive-Message-Poll-Message.png)
- Your final output will appear as follows.![Output.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt84ad9d1921a7cbae/635b94b6ae3c755821909765/Output.png)

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