---
title: "Google PubSub"
description: "Use the Google PubSub connector to publish data to topics in Google PubSub."
url: /agent-os/google-pubsub
---

# Google PubSub

## Google PubSub

Google PubSub is a messaging service provided by Google Cloud Platform that enables communication between independent applications. [Google PubSub](https://cloud.google.com/pubsub?hl=en) connector follows the publish-subscribe model, where applications can publish messages to topics, and others can subscribe to receive those messages. This enables asynchronous communication, allowing components to operate independently.

## Set Up Google PubSub

Perform the following steps to set up the Google PubSub action connector:

1.  Click **Configure Action Step** from the left navigation panel.
2.  Click **Action Step** to configure third-party services.
3.  Within the **Configure Action Step**, click the **Google PubSub** connector.  
    ![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91819916ce15476d/656b65a581b93e561da1ca08/Select_Connector.png)
4.  Under **Choose an Action** tab, select the **Publish Data to Topic** action.
    
    **Note:** You can sort and search the connector(s) based on the filter.
    
    ![Select_An_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt51965afcd9cc5289/656b65a5d20aca97a1a9424d/Select_An_Action.png)
5.  Click the **\+ Add New Account** button to add your Google PubSub account.   
    ![Add_new_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt1a9e1688f01e4c02/656b671f4c0b9a1f01d5644f/Add_new_Account.png)
6.  In the Authorize modal, provide details such as **Title**, and **Service** **Account** **Key**.
    
    To create a service account key, follow the steps below:
    
    1.  Go to the **Google Cloud Platform**.
    2.  Navigate to the **APIs & Services** page.
    3.  Under the **Credentials** section, click **\+ CREATE CREDENTIALS** and select the **Service account** option to create a new service account.
    4.  Navigate to the service account you created and under the **KEYS** tab, click **ADD** **KEY** \-> **Create new key**.
    5.  In the pop-up, select **JSON** and click **CREATE**. A file will be downloaded, and you will see the service account key details in JSON format.
7.  Click the **Authorize** button.  
    ![Click_Authorize.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77bdf98d7b7a0e81/656b65a5ac4c4150b594ec5f/Click_Authorize.png)
8.  In the **Select Topic** dropdown, select a topic to publish the data.
    
    **Note:** A [topic](https://cloud.google.com/pubsub/docs/create-topic) is a resource to which publishers can send messages. Publishers are applications or processes that generate and send messages to a topic. Subscribers then subscribe to these topics to receive the messages.
    
9.  In the **Message** **Body** field, enter the data you want to publish.   
    ![Select_Message_Body.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt20be4dd56ce38f33/656b65a541d5747f3ec815eb/Select_Message_Body.png)
10.  Click **Proceed**.
11.  Click the **Test Action** button to test the configured action.   
     ![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt99440650a9f62838/656b65a5d28c5a8b963e15cf/Test_Action.png)
12.  Once set, click the **Save and Exit** button.  
     ![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf36a7086db6b3216/656b65a5d28c5a31033e15d3/Save_Exit.png)

The message will be published to a topic in Google PubSub, and relevant subscribers will receive the message.

This sets the **Google PubSub** action connector.
