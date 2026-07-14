---
title: Automations guides and connectors - Slack
description: Set up the Slack action connector to send messages to a specific Slack channel.
url: https://www.contentstack.com/docs/agent-os/slack
product: Automation Hub
doc_type: connector-guide
audience:
  - developers
  - administrators
version: v1
last_updated: 2026-03-26
---

# Automations guides and connectors - Slack

This page explains what the Slack connector is and how to set up the Slack action connector (Send Message). It is intended for users configuring automation actions that post messages to Slack channels, and should be used when adding and authorizing a Slack account for an automation workflow.

## Slack

Slack is a business communication platform used to communicate between corporate team members.

## Set Up Slack

Perform the following steps to set up the Slack action connector:
- In the **Configure Action** section, click the **Slack** connector.![Slack.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blteb6ef0d328efc1e3/6527f8e1dfea7369ca82122c/Slack.png)
- Select the action listed under Slack i.e., **Send Message**. This action will send a message to a specific Slack channel.![Sned_Message_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltdb0c4ed5e726115a/65990b14b6f924867fbe2ef7/Sned_Message_Action.png)
- In the **Configure Action** tab, click on **+ Add New Account** to add your Slack account.![Add_New_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf0eefd2d78656820/65990af3bb2e10c33d0121e9/Add_New_Account.png)
- Select a way to add a new account. You can authenticate your account in two ways; **Slack ****OAuth **or **Slack ****Bot ****Token**. Click **Proceed**.

For  **Slack ****Bot ****Token**, enter a **Title **and the **Slack ****Bot ****Token **retrieved from your Slack account. Click **Authorize.**

To create a new bot token, follow these steps:

Navigate to [Slack account](https://api.slack.com).
- Login to your organization. Click **Your ****Apps **to create a new app.
- Navigate inside your app and click **OAuth ****& ****Permissions**.
- Copy the **Bot User OAuth Token**. You **must **have the required authorization from your organization to use the OAuth token.
- For Slack OAuth, you will see a list of permissions that you can choose to **Authorize**.![Authorize_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt91164ad9b31e615a/65990af3b782f04c7f5866b6/Authorize_Account.png)
- Next, you will see a window open with access requests from the app. Click **Allow** to proceed further.![Authorize-Permissions.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5c8a14a74fa95d9c/634397dcd983c911b353bbbc/Authorize-Permissions.png)
- Enter a **Title** for this account, say “Allow-Slack-access,” and click **Save**.![6.Enter_Title.png](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt5459072719524d2f/6299b618e95fa50f854dc0ec/6.Enter_Title.png)
- Next, click on the **Channel** textbox and select a channel from the **LOOKUP** list that contains all the channels in your Slack account. Click **Load More** until you locate your channel.
- Click the **Message** textbox and select the parameter you want to include in your message that will be sent to the selected Slack channel. For example, we will draft this: “1.query.name has sent a GET/POST request”.![Select_Different_Field.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3761150ecc7376a8/65990af39fa6cfa01b289b93/Select_Different_Field.png)
- Optionally, enable the **Show optional fields** toggle button to display the **Username **and **Icon ****URL **fields.
**Username **and **Icon ****URL **fields can **only **be used while using Slack Bot Token. If you  prefer not to send a message that displays your name on Slack, you can authorize your account via Slack Bot Token and provide a suitable **Username **and **Icon ****URL **to send a slack message.
**Note:**  If you use Slack OAuth, **Username **and **Icon ****URL **will not be visible in the output.![Show_Optional_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8293eac2d627f40e/65990af3b17790a495d03b1f/Show_Optional_Fields.png)
- Once done, click **Proceed.**
- Finally, you can test the configuration you set up by clicking the **Test Action** button.

The output shows the message that will be sent on the linked Slack channel. Click **Save and Continue**.

Check your Slack channel. You will see the message delivered to the Slack channel as below:![Slack_App.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltf6ce31d3d765b8d2/65990b157d6d2e8d6ab8eb08/Slack_App.png)

This sets up the **Slack** action connector.

## Common questions

### Which Slack authentication methods are supported?
You can authenticate your account in two ways; **Slack OAuth** or **Slack Bot Token**.

### When can I use the Username and Icon URL fields?
**Username** and **Icon URL** fields can **only** be used while using Slack Bot Token.

### What does the Send Message action do?
**Send Message** sends a message to a specific Slack channel.

### How do I verify the connector configuration works?
You can test the configuration you set up by clicking the **Test Action** button, then check your Slack channel for the delivered message.