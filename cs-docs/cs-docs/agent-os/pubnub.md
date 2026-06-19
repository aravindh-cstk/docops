---
title: Automations guides and connectors - PubNub
description: Set up the PubNub action connector to send a message to a specified channel through your PubNub account.
url: https://www.contentstack.com/docs/agent-os/pubnub
product: Contentstack
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: latest
last_updated: 2026-03-26
---

# Automations guides and connectors - PubNub

This page explains how to configure the PubNub connector in Contentstack Automations so you can send messages to a selected PubNub channel. It is intended for developers or automation builders setting up third-party action steps and should be used when integrating PubNub messaging into an automation workflow.

## PubNub

PubNub is a realtime communication platform which makes products for developers to build real time web, mobile, and IoT applications.  
The PubNub connector will send a message to the specified channel through your PubNub account.

## Set Up PubNub

Perform the following steps to set up the PubNub action connector:

- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step **to configure third-party services.
- Within the **Configure Action Step**, click the **PubNub** connector.
- Under **Choose an Action** tab, select the **Send Message** action.
- Click the **+ Add New Account** button to select your PubNub account.
- Now, add the **Publish Key** and the **Subscribe Key** of your PubNub account to connect it with Contentstack. You can generate the Publish and Subscribe key by navigating to **Keysets** in your PubNub dashboard.Refer to the Application Setup document for more information.
- Click the **Authorize** button.
- Under the **Channel name** section, select the channel from your account where you want to send the message.
- Write the message you want to send to the above channel in the **Message** box and then click the **Proceed** button.
- Click **Test Action** to test the setup. In the output section, you can view the status of your action.
- Once set, click **Save and Exit**.
- You can check the **Debug console** section in your PubNub account and you will find the message in the channel you specified above.

This completes the **PubNub** connector’s setup.

## Common questions

### What does the PubNub connector do?
It sends a message to the specified channel through your PubNub account.

### Which keys are required to connect PubNub with Contentstack?
You need the **Publish Key** and the **Subscribe Key** from your PubNub account.

### Where can I verify that the message was sent?
You can check the **Debug console** section in your PubNub account and find the message in the channel you specified.

### What action should I select to send a message?
Under **Choose an Action**, select the **Send Message** action.