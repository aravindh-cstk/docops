---
title: Automations guides and connectors - Twilio
description: Set up and use the Twilio action connector to perform voice, messaging, video, and other communication functions via Twilio web service APIs.
url: https://www.contentstack.com/docs/agent-os/twilio
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
- Within the **Configure Action Step**, click the **Twilio** connector.![Twilio.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltb3884aa2a647a785/6527f8e2a0980f659dedeade/Twilio.png)
- Under** Choose an Action** tab, select the **Send SMS** action.![Select-Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd2a55e7bb542c462/63dbc3d311a22c0d9823269d/Select-Action.png)
- On the **Configure Action** page, click **+ Add New Account**.![Add-Axccount.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08f56e4c65478b70/63dbc3d3bd97af5094b6570d/Add-Axccount.png)
- In the **Authorize** modal, enter your **Account SID** and **Token** (i.e., your project Auth Token).

**Additional Resource:** You will find these credentials in the homepage of your Twilio account/project. For more information, refer to the [Credentials REST API Authentication | Twilio](https://www.twilio.com/docs/iam/credentials/api/) document.
- Once done, click on **Authorize** (screenshot 1 in the above step).
- Click the **Caller ID** textbox, and under **Lookup**, select the phone number (already configured in your Twilio account) using which you want to send the SMS.
- In the **To** textbox, enter the phone number you want to send the SMS to and your message in the **Message** box. Click **Proceed**.![Select-Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt603292727efe73aa/63dbc3d3409fb73889c0e125/Select-Fields.png)
- In the next step, click **Test Action**. You will see the following output. If the output looks correct, click **Save and Exit**.![Save-Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd5d004157500212e/63dbc3d3295f164f53ab2fed/Save-Exit.png)

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