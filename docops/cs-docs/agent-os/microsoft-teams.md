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
- Within the **Configure Action Step**, click the **Microsoft Teams** connector.

  **Note: **You can sort and search the connector(s) based on the filter.![Select_Connector.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt27424790edcf4dda/6569d6a8ec7994924d96a614/Select_Connector.png)
- You will see two actions under the **Choose an Action** tab: **Send Message in Channel** and **Send Message in Chat**.Let’s look at each of them in detail.

### Send Message in Channel

- Under **Choose an Action** tab, select the **Send Message in Channel** action.![Send_Message_In_Channel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt7de66380c31544ec/6569d6a8107d4293d5b800c9/Send_Message_In_Channel.png)
- Click the **+ Add New Account** button to add your **Microsoft ****Teams **account.![Add_an_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt29727813bfc4a439/6569d6a72d2f23865cf3eb05/Add_an_Account.png)
- In the pop-up window, provide OAuth permissions for all the values by checking the boxes and click **Authorize**.![Authorize_Button.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt192a9c905a5135a7/6569d6a752b29b2d725c2dc4/Authorize_Button.png)
- In the pop-up that appears, log in to your Microsoft Teams account.
- Provide an **Account ****Name **and click **Save**.![Save_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt84dfe93eda82e814/6569d6a736b54576adcd8ff3/Save_Account.png)
- Select a **Team **and a **Channel **from the dropdown options to send a message.

  **Note:** A team has multiple channels.![Select_Team_Channel.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt08cead02b6a9d045/6569d6a86f7bf40e308309bd/Select_Team_Channel.png)
- Select a **Message ****Type **to send a message in Text or HTML format.
- Enter the message in the **Message ****Body**.![Select_message_TYpe.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt69cbf88f24d6dcb1/6569d6a8efd9ef33fbb83dc8/Select_message_TYpe.png)
- Click the **Proceed **button.
- To test the configured action, click the **Test ****Action **button.![Test_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt77055d6634037073/6569d6a8867c0b76a838b63a/Test_Action.png)
- Navigate to the Microsoft Teams platform to view the message. Once done, click the **Save ****and ****Exit **button.![Save_Exi.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt0a19461d096a9da6/6569d6a736b5454fddcd8ff7/Save_Exi.png)

### Send Message in Chat

- Under **Choose an Action** tab, select the **Send Message in Chat** action.![Select_Action.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltd7a53948d0eda3ae/656b5e370a03add02639cc48/Select_Action.png)
- Click the **+ Add New Account** button to add your Microsoft Teams account.![Add_new_Account.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt8672b49e5fc48479/656b5e3694a247b47434e17c/Add_new_Account.png)
- In the pop-up window, provide OAuth permissions for all the values by checking the boxes and click **Authorize**.
- In the pop-up that appears, log in to your Microsoft Teams account.
- Provide an **Account ****Name **and click **Save**.
- Select a **Chat ****Name **from the dropdown to send an in-person message.
- Enter the message in the **Message ****Body**.![Select_Fields.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/blt3b2f55e8b142f019/656b5e3704116d49372a2a6a/Select_Fields.png)
- Click the **Proceed **button.
- To test the configured action, click the **Test ****Action **button.
- Navigate to the Microsoft Teams platform to view the message. Once done, click the **Save ****and ****Exit **button.![Save_Exit.png](https://images.contentstack.io/v3/assets/blt2d43f51baca745a8/bltc07769aee2f4c41f/656b5e3636b5450bc0cd93f8/Save_Exit.png)

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