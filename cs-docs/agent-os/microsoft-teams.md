---
title: Automations guides and connectors - Microsoft Teams
description: Setup and use the Microsoft Teams action connector to send automated messages in channels or chats via Automate.
url: https://www.contentstack.com/docs/agent-os/microsoft-teams
product: Automate
doc_type: connector-guide
audience:
  - developers
  - automation-builders
version: unknown
last_updated: 2026-03-25
---

# Automations guides and connectors - Microsoft Teams

This page explains how to set up and use the Microsoft Teams action connector in Automate to send automated messages to Microsoft Teams channels or chats. It is intended for developers and automation builders configuring third-party service actions within an automation workflow.

## Microsoft Teams

Microsoft Teams is a cloud-based chat software that allows you to collaborate, communicate, and share content across organizations.  
The Microsoft Teams connector allows you to integrate [Microsoft Teams](https://www.microsoft.com/en-in/microsoft-teams/group-chat-software/) and send automated messages across your organization via Automate.

## Set up the Microsoft Teams

Perform the following steps to set up the Microsoft Teams action connector:

- Click **Configure Action Step **from the left navigation panel.
- Click **Action Step** to configure third-party services.
- Within the **Configure Action Step**, click the **Microsoft Teams** connector.**Note: **You can sort and search the connector(s) based on the filter.
- You will see two actions under the **Choose an Action** tab: **Send Message in Channel** and **Send Message in Chat**.Let’s look at each of them in detail.

### Send Message in Channel

- Under **Choose an Action** tab, select the **Send Message in Channel** action.
- Click the **+ Add New Account** button to add your **Microsoft ****Teams **account.
- In the pop-up window, provide OAuth permissions for all the values by checking the boxes and click **Authorize**.
- In the pop-up that appears, log in to your Microsoft Teams account.
- Provide an **Account ****Name **and click **Save**.
- Select a **Team **and a **Channel **from the dropdown options to send a message.**Note:** A team has multiple channels.
- Select a **Message ****Type **to send a message in Text or HTML format.
- Enter the message in the **Message ****Body**.
- Click the **Proceed **button.
- To test the configured action, click the **Test ****Action **button.
- Navigate to the Microsoft Teams platform to view the message. Once done, click the **Save ****and ****Exit **button.

### Send Message in Chat

- Under **Choose an Action** tab, select the **Send Message in Chat** action.
- Click the **+ Add New Account** button to add your Microsoft Teams account.
- In the pop-up window, provide OAuth permissions for all the values by checking the boxes and click **Authorize**.
- In the pop-up that appears, log in to your Microsoft Teams account.
- Provide an **Account ****Name **and click **Save**.
- Select a **Chat ****Name **from the dropdown to send an in-person message.
- Enter the message in the **Message ****Body**.
- Click the **Proceed **button.
- To test the configured action, click the **Test ****Action **button.
- Navigate to the Microsoft Teams platform to view the message. Once done, click the **Save ****and ****Exit **button.

This sets up the **Microsoft Teams action** connector.

## Common questions

**Q: What actions are available in the Microsoft Teams connector?**  
A: **Send Message in Channel** and **Send Message in Chat**.

**Q: Do I need to authorize Microsoft Teams to use this connector?**  
A: Yes, you must provide OAuth permissions and click **Authorize** when adding a new account.

**Q: How do I verify that the action is working?**  
A: Click the **Test ****Action **button, then navigate to the Microsoft Teams platform to view the message.

**Q: Can I send messages in different formats?**  
A: Yes, for **Send Message in Channel**, you can select a **Message ****Type **to send a message in Text or HTML format.