---
title: "[Automations guides and connectors] - Google PubSub"
description: Set up the Google PubSub action connector to publish data to a topic.
url: https://www.contentstack.com/docs/agent-os/google-pubsub
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# [Automations guides and connectors] - Google PubSub

This page explains what the Google PubSub connector is and how to configure the Google PubSub action connector to publish data to a topic. It is intended for developers and automation builders setting up third-party service integrations in Automation Hub.

## Google PubSub

Google PubSub is a messaging service provided by Google Cloud Platform that enables communication between independent applications. [Google PubSub](https://cloud.google.com/pubsub?hl=en) connector follows the publish-subscribe model, where applications can publish messages to topics, and others can subscribe to receive those messages. This enables asynchronous communication, allowing components to operate independently.

## Set Up Google PubSub

Perform the following steps to set up the Google PubSub action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Google PubSub **connector.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91819916ce15476d/656b65a581b93e561da1ca08/Select_Connector.png)
- Under **Choose an Action** tab, select the** Publish Data to Topic** action.  
  **Note:** You can sort and search the connector(s) based on the filter.![Select_An_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51965afcd9cc5289/656b65a5d20aca97a1a9424d/Select_An_Action.png)
- Click the **+ Add New Account **button to add your Google PubSub account.![Add_new_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a9e1688f01e4c02/656b671f4c0b9a1f01d5644f/Add_new_Account.png)
- In the Authorize modal, provide details such as **Title**, and **Service ****Account ****Key**.

To create a service account key, follow the steps below:

Go to the **Google Cloud Platform**.

- Navigate to the **APIs & Services** page.
- Under the **Credentials **section, click **+ CREATE CREDENTIALS** and select the **Service account **option to create a new service account.
- Navigate to the service account you created and under the **KEYS **tab, click **ADD ****KEY **-> **Create new key**.
- In the pop-up, select **JSON** and click **CREATE**. A file will be downloaded, and you will see the service account key details in JSON format.
- Click the **Authorize **button.![Click_Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77bdf98d7b7a0e81/656b65a5ac4c4150b594ec5f/Click_Authorize.png)
- In the **Select Topic **dropdown, select a topic to publish the data.  
  **Note:**  A [topic](https://cloud.google.com/pubsub/docs/create-topic) is a resource to which publishers can send messages. Publishers are applications or processes that generate and send messages to a topic. Subscribers then subscribe to these topics to receive the messages.
- In the **Message ****Body **field, enter the data you want to publish.![Select_Message_Body.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20be4dd56ce38f33/656b65a541d5747f3ec815eb/Select_Message_Body.png)
- Click **Proceed**.
- Click the **Test Action** button to test the configured action.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt99440650a9f62838/656b65a5d28c5a8b963e15cf/Test_Action.png)
- Once set, click the **Save and Exit** button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf36a7086db6b3216/656b65a5d28c5a31033e15d3/Save_Exit.png)

The message will be published to a topic in Google PubSub, and relevant subscribers will receive the message.

This sets the **Google PubSub ** action connector.

## Common questions

### What action does the Google PubSub connector support here?
Under **Choose an Action** tab, select the** Publish Data to Topic** action.

### What credentials are required to authorize the connector?
In the Authorize modal, provide details such as **Title**, and **Service ****Account ****Key**.

### What is a topic in Google PubSub?
A [topic](https://cloud.google.com/pubsub/docs/create-topic) is a resource to which publishers can send messages. Publishers are applications or processes that generate and send messages to a topic. Subscribers then subscribe to these topics to receive the messages.

### How do I verify the action is configured correctly?
Click the **Test Action** button to test the configured action.