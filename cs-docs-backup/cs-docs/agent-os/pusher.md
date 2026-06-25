---
title: Automations guides and connectors - Pusher
description: Set up the Pusher action connector to send a message to a specified Pusher channel.
url: https://www.contentstack.com/docs/agent-os/pusher
product: Contentstack
doc_type: connector-guide
audience:
  - developers
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Pusher

This page explains how to configure the Pusher action connector in Contentstack Automations to send messages to a selected Pusher channel. It is intended for developers or admins setting up third-party action steps and should be used when you want an automation to publish an event/message to Pusher.

## Pusher

The Pusher action connector helps you to send a message to the specified Pusher channel.

## Set Up Pusher

Perform the following steps to set up the Pusher action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **Pusher** connector.
- Under **Choose an Action** tab, select the **Send Message** action.
- Click the **+ Add New Account** button to select your Pusher account.
- Now, add the **App ID**, **App Key**, **App Secret Key**, and the **Cluster** of your Pusher account to connect it with Contentstack. You can get your **App ID**, **App Key**, **App Secret Key**, and the **Cluster** details from your Pusher dashboard.  
  **Additional Resource:** For more information, refer to the [Get your API Keys document](https://pusher.com/docs/channels/getting_started/javascript/?ref=sdk-quick-starts#get-your-free-api-keys).
- Click the **Authorize** button.
- Under the **Channel name** section, select the channel from your account where you want to send the message.
- Now, enter the **Event Name** where you want to send the message.
- Write the message you want to send in the **Message** box and then click the **Proceed** button.
- Click **Test Action** to test the setup. In the output section, you can view the status of your action. Once set, click **Save and Exit**.
- You can check the **Debug console** section in your Pusher account and you will find the message published in the event you specified above.

This completes the **Pusher** Connector’s setup.

## Common questions

**How do I find my App ID, App Key, App Secret Key, and Cluster?**  
You can get your **App ID**, **App Key**, **App Secret Key**, and the **Cluster** details from your Pusher dashboard.

**What action should I select to send a message?**  
Under **Choose an Action** tab, select the **Send Message** action.

**Where can I verify that the message was published?**  
You can check the **Debug console** section in your Pusher account and you will find the message published in the event you specified above.

**Can I test the connector before saving?**  
Click **Test Action** to test the setup. In the output section, you can view the status of your action. Once set, click **Save and Exit**.