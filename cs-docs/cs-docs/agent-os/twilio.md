---
title: Automations guides and connectors - Twilio
description: Set up and use the Twilio action connector to perform voice, messaging, video, and other communication functions via Twilio web service APIs.
url: https://www.contentstack.com/docs/developers/automation-hub-connectors/twilio
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Twilio

This page describes the Twilio action connector and the steps required to configure it for sending SMS within an automation flow. It is intended for developers and automation builders who need to integrate Twilio communication capabilities into web or mobile app workflows.

## Twilio

Twilio is a communication app and this action connector lets you enable and perform voice, messaging, video, and other communication functions within the web and mobile apps by using its web service APIs.

## Set up Twilio

Perform the following steps to set up the Twilio action connector:
- Click **Configure Action Step** from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Twilio** connector.
- Under** Choose an Action** tab, select the **Send SMS** action.
- On the **Configure Action** page, click **+ Add New Account**.
- In the **Authorize** modal, enter your **Account SID** and **Token** (i.e., your project Auth Token).

**Additional Resource:** You will find these credentials in the homepage of your Twilio account/project. For more information, refer to the [Credentials REST API Authentication | Twilio](https://www.twilio.com/docs/iam/credentials/api/) document.
- Once done, click on **Authorize** (screenshot 1 in the above step).
- Click the **Caller ID** textbox, and under **Lookup**, select the phone number (already configured in your Twilio account) using which you want to send the SMS.
- In the **To** textbox, enter the phone number you want to send the SMS to and your message in the **Message** box. Click **Proceed**.
- In the next step, click **Test Action**. You will see the following output. If the output looks correct, click **Save and Exit**.

This sets the **Twilio** action connector.

## Common questions

### Where do I find the Account SID and Token needed for authorization?
You will find these credentials in the homepage of your Twilio account/project. For more information, refer to the [Credentials REST API Authentication | Twilio](https://www.twilio.com/docs/iam/credentials/api/) document.

### What action is selected when configuring the Twilio connector in this guide?
Under** Choose an Action** tab, select the **Send SMS** action.

### What should I do after entering the To number and Message?
In the **To** textbox, enter the phone number you want to send the SMS to and your message in the **Message** box. Click **Proceed**.

### How do I confirm the connector is working before saving?
In the next step, click **Test Action**. You will see the following output. If the output looks correct, click **Save and Exit**.